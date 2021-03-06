import _ from "lodash";
import moment from "moment";
import "d3-legend";
// import d3 from "d3";

import { getAllEvents } from "./events";
import noOverlap from "./no-overlap";

let margin = {top: 200, right: 20, bottom: 30, left: 20},
    width,
    height;

let root = d3.select("#visualisation");

function resize() {
  root.attr("width", width)
  .attr("height", height);
}

function setWidth(x) {
  width = x + margin.left + margin.right;
  resize();
}

function setHeight(x) {
  height = x + margin.top + margin.bottom;
  resize();
}

setWidth(900);
setHeight(3000);

let svg = root.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let force = d3.layout.force()
    .linkStrength(0.1)
    .friction(0.5)
    .linkDistance(20)
    .charge(-10)
    .gravity(0)
    .theta(0.8)
    .alpha(0.1);

let x = d3.scale.ordinal()
    .rangePoints([width / 3, 2 * width / 3])

let y = noOverlap()
    .maxGap(600)
    .pixelsPerMinute(1 / 65);

let yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickSize(-width)
    .tickPadding(0)
    .tickFormat(d3.time.format("%B %Y"))
    .ticks(30);

let radiusRange = [35, 130];

let radius = d3.scale.sqrt()
    .range(radiusRange)
    .clamp(true)

let fontSize = d3.scale.linear()
    .domain(radiusRange)
    .range([10, 24])
    .clamp(true)

function totalAccessor(d) {
  return d.attending_count + d.interested_count;
}

function categoryAccessor(d) {
  return d.label || "Other";
}

getAllEvents().then((nodes) => {

  nodes = nodes.sort((a,b) => d3.descending(a.start_time, b.start_time));

  let color = d3.scale.category10()
      .domain(nodes.map(d => d.label));

  let eventsPerCategory = d3.nest()
      .key(categoryAccessor)
      .rollup(leaves => leaves.length)
      .entries(nodes);

  eventsPerCategory = _.sortBy(eventsPerCategory, d => d.values).reverse();

  let xDomain = [];

  eventsPerCategory.forEach((d, i) => {
    xDomain[i % 2 ? "unshift" : "push"](d.key);
  });

  x.domain(xDomain);

  y.build([nodes.map(d => d.start_time)]).reverse();

  radius.domain([30, d3.max(nodes, totalAccessor)]);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .selectAll(".tick text")
      .style("text-anchor", "start")
      .attr("y", 15)

  let now = svg.append("g")
      .attr("class", "now")
      .attr("transform", d => `translate(0, ${ y(new Date()) })`)

  now.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", 1)

  now.append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("dy", ".32em")
      .text("Today")

  // let legend = d3.legend.color()
  //     .shape("circle")
  //     .scale(color)
  //
  // d3.select("#legend")
  //     .attr("width", 200)
  //     .attr("height", 600)
  //   .append("g")
  //     .attr("transform", "translate(20,20)")
  //     .attr("class", "legend")
  //     .call(legend)

  nodes.forEach((d,i) => {
    let total = totalAccessor(d);
    d.radius = total ? radius(total) : radius.range()[0];
    d.cy = d.y = y(d.start_time);
    d.cx = d.x = x(categoryAccessor(d));
  });

  let maxRadius = 25;
  let padding = 3;

  setHeight(_.max(nodes.map(d => d.y + d.radius)));

  function future(d) {
    return d.start_time > new Date();
  }

  let events = svg.append("g")
      .attr("class", "events")
    .selectAll(".event")
      .data(nodes)
    .enter().append("a")
      .attr("xlink:href", d => `http://techsoc.io${d.url}`)
      .attr("target", "_blank")
    .append("g")
      .attr("class", "event")
      .classed("future", d => future(d))

  let circles = events.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .style("fill", d => future(d) ? "rgba(255,255,255,.05)" : color(categoryAccessor(d)))
      .style("stroke-width", d => future(d) ? 4 : 0)
      .style("stroke", d => future(d) ? color(categoryAccessor(d)) : "none")

  let labels = events.append("text")
      .style("font-size", d => fontSize(d.radius))
      .style("font-style", d => future(d) ? "italic" : null)
      .text(d => {
        if (d.label && /session|lesson|meetup/i.test(d.title)) {
          return `${d.label} - ${d.title}`;
        } else {
          return d.title;
        }
      })
      .style("fill", d => future(d) ? color(categoryAccessor(d)) : "white")
      .style("opacity", 0)
      .each(function(d) {
        let padding = 4;
        let size = (d.radius - padding) * 2;
        d3plus.textwrap()
          .container(d3.select(this))
          .shape("circle")
          .height(size)
          .width(size)
          .x(-size / 2)
          .y(-size / 2)
          .align("center")
          .valign("middle")
          .draw();
      })

  circles.transition()
      .duration(750)
      .delay(function(d, i) { return i * 15; })
      .attrTween("r", function(d) {
        let i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      })
      .each("end", function(d, i) {
        d3.select(this.nextSibling)
          .transition()
          .style("opacity", 1)
          .duration(1000)
      })


  force.nodes(nodes)
    .on("tick", tick)
    .start();

  function tick(e) {
    svg.selectAll(".event")
        .each(gravity(.5 * e.alpha))
        .each(collide(.3))
        .attr("transform", d => `translate(${d.x}, ${d.y})`)
  }

  // Resolve collisions between nodes.
  function collide(alpha) {
    let quadtree = d3.geom.quadtree(nodes);
    return function(d) {
      let r = d.radius + maxRadius + padding,
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
      quadtree.visit(function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== d)) {
          let x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + padding;
          if (l < r) {
            l = (l - r) / l * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      });
    };
  }

  //	Move nodes toward cluster focus.
  function gravity(alpha) {
    return function(d) {
      d.x += (d.cx - d.x) * alpha;
      d.y += (d.cy - d.y) * alpha;
    };
  }

});
