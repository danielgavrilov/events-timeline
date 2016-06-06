!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function n(e,n){for(var t=e.split(".");t.length;)n=n[t.shift()];return n}function t(n){if(Object.keys)Object.keys(e).forEach(n);else for(var t in e)f.call(e,t)&&n(t)}function r(n){t(function(t){if(-1==a.call(l,t)){try{var r=e[t]}catch(o){l.push(t)}n(t,r)}})}var o,i=$__System,f=Object.prototype.hasOwnProperty,a=Array.prototype.indexOf||function(e){for(var n=0,t=this.length;t>n;n++)if(this[n]===e)return n;return-1},l=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(t,i,f){var a=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var l;if(f){l={};for(var u in f)l[u]=e[u],e[u]=f[u]}return i||(o={},r(function(e,n){o[e]=n})),function(){var t;if(i)t=n(i,e);else{var f,u,s={};r(function(e,n){o[e]!==n&&"undefined"!=typeof n&&(s[e]=n,"undefined"!=typeof f?u||f===n||(u=!0):f=n)}),t=u?s:f}if(l)for(var c in l)e[c]=l[c];return e.define=a,t}}}))}("undefined"!=typeof self?self:global);
!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.registerDynamic("2", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal(__module.id, "d3", null);
  (function() {
    "format global";
    "exports d3";
    !function() {
      var d3 = {version: "3.5.16"};
      var d3_arraySlice = [].slice,
          d3_array = function(list) {
            return d3_arraySlice.call(list);
          };
      var d3_document = this.document;
      function d3_documentElement(node) {
        return node && (node.ownerDocument || node.document || node).documentElement;
      }
      function d3_window(node) {
        return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
      }
      if (d3_document) {
        try {
          d3_array(d3_document.documentElement.childNodes)[0].nodeType;
        } catch (e) {
          d3_array = function(list) {
            var i = list.length,
                array = new Array(i);
            while (i--)
              array[i] = list[i];
            return array;
          };
        }
      }
      if (!Date.now)
        Date.now = function() {
          return +new Date();
        };
      if (d3_document) {
        try {
          d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
        } catch (error) {
          var d3_element_prototype = this.Element.prototype,
              d3_element_setAttribute = d3_element_prototype.setAttribute,
              d3_element_setAttributeNS = d3_element_prototype.setAttributeNS,
              d3_style_prototype = this.CSSStyleDeclaration.prototype,
              d3_style_setProperty = d3_style_prototype.setProperty;
          d3_element_prototype.setAttribute = function(name, value) {
            d3_element_setAttribute.call(this, name, value + "");
          };
          d3_element_prototype.setAttributeNS = function(space, local, value) {
            d3_element_setAttributeNS.call(this, space, local, value + "");
          };
          d3_style_prototype.setProperty = function(name, value, priority) {
            d3_style_setProperty.call(this, name, value + "", priority);
          };
        }
      }
      d3.ascending = d3_ascending;
      function d3_ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      }
      d3.descending = function(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      };
      d3.min = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null && a > b)
              a = b;
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && a > b)
              a = b;
        }
        return a;
      };
      d3.max = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null && b > a)
              a = b;
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b > a)
              a = b;
        }
        return a;
      };
      d3.extent = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b,
            c;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = c = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null) {
              if (a > b)
                a = b;
              if (c < b)
                c = b;
            }
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = c = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null) {
              if (a > b)
                a = b;
              if (c < b)
                c = b;
            }
        }
        return [a, c];
      };
      function d3_number(x) {
        return x === null ? NaN : +x;
      }
      function d3_numeric(x) {
        return !isNaN(x);
      }
      d3.sum = function(array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = +array[i]))
              s += a;
        } else {
          while (++i < n)
            if (d3_numeric(a = +f.call(array, array[i], i)))
              s += a;
        }
        return s;
      };
      d3.mean = function(array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1,
            j = n;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = d3_number(array[i])))
              s += a;
            else
              --j;
        } else {
          while (++i < n)
            if (d3_numeric(a = d3_number(f.call(array, array[i], i))))
              s += a;
            else
              --j;
        }
        if (j)
          return s / j;
      };
      d3.quantile = function(values, p) {
        var H = (values.length - 1) * p + 1,
            h = Math.floor(H),
            v = +values[h - 1],
            e = H - h;
        return e ? v + e * (values[h] - v) : v;
      };
      d3.median = function(array, f) {
        var numbers = [],
            n = array.length,
            a,
            i = -1;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = d3_number(array[i])))
              numbers.push(a);
        } else {
          while (++i < n)
            if (d3_numeric(a = d3_number(f.call(array, array[i], i))))
              numbers.push(a);
        }
        if (numbers.length)
          return d3.quantile(numbers.sort(d3_ascending), .5);
      };
      d3.variance = function(array, f) {
        var n = array.length,
            m = 0,
            a,
            d,
            s = 0,
            i = -1,
            j = 0;
        if (arguments.length === 1) {
          while (++i < n) {
            if (d3_numeric(a = d3_number(array[i]))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        } else {
          while (++i < n) {
            if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        }
        if (j > 1)
          return s / (j - 1);
      };
      d3.deviation = function() {
        var v = d3.variance.apply(this, arguments);
        return v ? Math.sqrt(v) : v;
      };
      function d3_bisector(compare) {
        return {
          left: function(a, x, lo, hi) {
            if (arguments.length < 3)
              lo = 0;
            if (arguments.length < 4)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) < 0)
                lo = mid + 1;
              else
                hi = mid;
            }
            return lo;
          },
          right: function(a, x, lo, hi) {
            if (arguments.length < 3)
              lo = 0;
            if (arguments.length < 4)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) > 0)
                hi = mid;
              else
                lo = mid + 1;
            }
            return lo;
          }
        };
      }
      var d3_bisect = d3_bisector(d3_ascending);
      d3.bisectLeft = d3_bisect.left;
      d3.bisect = d3.bisectRight = d3_bisect.right;
      d3.bisector = function(f) {
        return d3_bisector(f.length === 1 ? function(d, x) {
          return d3_ascending(f(d), x);
        } : f);
      };
      d3.shuffle = function(array, i0, i1) {
        if ((m = arguments.length) < 3) {
          i1 = array.length;
          if (m < 2)
            i0 = 0;
        }
        var m = i1 - i0,
            t,
            i;
        while (m) {
          i = Math.random() * m-- | 0;
          t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
        }
        return array;
      };
      d3.permute = function(array, indexes) {
        var i = indexes.length,
            permutes = new Array(i);
        while (i--)
          permutes[i] = array[indexes[i]];
        return permutes;
      };
      d3.pairs = function(array) {
        var i = 0,
            n = array.length - 1,
            p0,
            p1 = array[0],
            pairs = new Array(n < 0 ? 0 : n);
        while (i < n)
          pairs[i] = [p0 = p1, p1 = array[++i]];
        return pairs;
      };
      d3.transpose = function(matrix) {
        if (!(n = matrix.length))
          return [];
        for (var i = -1,
            m = d3.min(matrix, d3_transposeLength),
            transpose = new Array(m); ++i < m; ) {
          for (var j = -1,
              n,
              row = transpose[i] = new Array(n); ++j < n; ) {
            row[j] = matrix[j][i];
          }
        }
        return transpose;
      };
      function d3_transposeLength(d) {
        return d.length;
      }
      d3.zip = function() {
        return d3.transpose(arguments);
      };
      d3.keys = function(map) {
        var keys = [];
        for (var key in map)
          keys.push(key);
        return keys;
      };
      d3.values = function(map) {
        var values = [];
        for (var key in map)
          values.push(map[key]);
        return values;
      };
      d3.entries = function(map) {
        var entries = [];
        for (var key in map)
          entries.push({
            key: key,
            value: map[key]
          });
        return entries;
      };
      d3.merge = function(arrays) {
        var n = arrays.length,
            m,
            i = -1,
            j = 0,
            merged,
            array;
        while (++i < n)
          j += arrays[i].length;
        merged = new Array(j);
        while (--n >= 0) {
          array = arrays[n];
          m = array.length;
          while (--m >= 0) {
            merged[--j] = array[m];
          }
        }
        return merged;
      };
      var abs = Math.abs;
      d3.range = function(start, stop, step) {
        if (arguments.length < 3) {
          step = 1;
          if (arguments.length < 2) {
            stop = start;
            start = 0;
          }
        }
        if ((stop - start) / step === Infinity)
          throw new Error("infinite range");
        var range = [],
            k = d3_range_integerScale(abs(step)),
            i = -1,
            j;
        start *= k, stop *= k, step *= k;
        if (step < 0)
          while ((j = start + step * ++i) > stop)
            range.push(j / k);
        else
          while ((j = start + step * ++i) < stop)
            range.push(j / k);
        return range;
      };
      function d3_range_integerScale(x) {
        var k = 1;
        while (x * k % 1)
          k *= 10;
        return k;
      }
      function d3_class(ctor, properties) {
        for (var key in properties) {
          Object.defineProperty(ctor.prototype, key, {
            value: properties[key],
            enumerable: false
          });
        }
      }
      d3.map = function(object, f) {
        var map = new d3_Map();
        if (object instanceof d3_Map) {
          object.forEach(function(key, value) {
            map.set(key, value);
          });
        } else if (Array.isArray(object)) {
          var i = -1,
              n = object.length,
              o;
          if (arguments.length === 1)
            while (++i < n)
              map.set(i, object[i]);
          else
            while (++i < n)
              map.set(f.call(object, o = object[i], i), o);
        } else {
          for (var key in object)
            map.set(key, object[key]);
        }
        return map;
      };
      function d3_Map() {
        this._ = Object.create(null);
      }
      var d3_map_proto = "__proto__",
          d3_map_zero = "\x00";
      d3_class(d3_Map, {
        has: d3_map_has,
        get: function(key) {
          return this._[d3_map_escape(key)];
        },
        set: function(key, value) {
          return this._[d3_map_escape(key)] = value;
        },
        remove: d3_map_remove,
        keys: d3_map_keys,
        values: function() {
          var values = [];
          for (var key in this._)
            values.push(this._[key]);
          return values;
        },
        entries: function() {
          var entries = [];
          for (var key in this._)
            entries.push({
              key: d3_map_unescape(key),
              value: this._[key]
            });
          return entries;
        },
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
          for (var key in this._)
            f.call(this, d3_map_unescape(key), this._[key]);
        }
      });
      function d3_map_escape(key) {
        return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
      }
      function d3_map_unescape(key) {
        return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
      }
      function d3_map_has(key) {
        return d3_map_escape(key) in this._;
      }
      function d3_map_remove(key) {
        return (key = d3_map_escape(key)) in this._ && delete this._[key];
      }
      function d3_map_keys() {
        var keys = [];
        for (var key in this._)
          keys.push(d3_map_unescape(key));
        return keys;
      }
      function d3_map_size() {
        var size = 0;
        for (var key in this._)
          ++size;
        return size;
      }
      function d3_map_empty() {
        for (var key in this._)
          return false;
        return true;
      }
      d3.nest = function() {
        var nest = {},
            keys = [],
            sortKeys = [],
            sortValues,
            rollup;
        function map(mapType, array, depth) {
          if (depth >= keys.length)
            return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
          var i = -1,
              n = array.length,
              key = keys[depth++],
              keyValue,
              object,
              setter,
              valuesByKey = new d3_Map(),
              values;
          while (++i < n) {
            if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
              values.push(object);
            } else {
              valuesByKey.set(keyValue, [object]);
            }
          }
          if (mapType) {
            object = mapType();
            setter = function(keyValue, values) {
              object.set(keyValue, map(mapType, values, depth));
            };
          } else {
            object = {};
            setter = function(keyValue, values) {
              object[keyValue] = map(mapType, values, depth);
            };
          }
          valuesByKey.forEach(setter);
          return object;
        }
        function entries(map, depth) {
          if (depth >= keys.length)
            return map;
          var array = [],
              sortKey = sortKeys[depth++];
          map.forEach(function(key, keyMap) {
            array.push({
              key: key,
              values: entries(keyMap, depth)
            });
          });
          return sortKey ? array.sort(function(a, b) {
            return sortKey(a.key, b.key);
          }) : array;
        }
        nest.map = function(array, mapType) {
          return map(mapType, array, 0);
        };
        nest.entries = function(array) {
          return entries(map(d3.map, array, 0), 0);
        };
        nest.key = function(d) {
          keys.push(d);
          return nest;
        };
        nest.sortKeys = function(order) {
          sortKeys[keys.length - 1] = order;
          return nest;
        };
        nest.sortValues = function(order) {
          sortValues = order;
          return nest;
        };
        nest.rollup = function(f) {
          rollup = f;
          return nest;
        };
        return nest;
      };
      d3.set = function(array) {
        var set = new d3_Set();
        if (array)
          for (var i = 0,
              n = array.length; i < n; ++i)
            set.add(array[i]);
        return set;
      };
      function d3_Set() {
        this._ = Object.create(null);
      }
      d3_class(d3_Set, {
        has: d3_map_has,
        add: function(key) {
          this._[d3_map_escape(key += "")] = true;
          return key;
        },
        remove: d3_map_remove,
        values: d3_map_keys,
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
          for (var key in this._)
            f.call(this, d3_map_unescape(key));
        }
      });
      d3.behavior = {};
      function d3_identity(d) {
        return d;
      }
      d3.rebind = function(target, source) {
        var i = 1,
            n = arguments.length,
            method;
        while (++i < n)
          target[method = arguments[i]] = d3_rebind(target, source, source[method]);
        return target;
      };
      function d3_rebind(target, source, method) {
        return function() {
          var value = method.apply(source, arguments);
          return value === source ? target : value;
        };
      }
      function d3_vendorSymbol(object, name) {
        if (name in object)
          return name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        for (var i = 0,
            n = d3_vendorPrefixes.length; i < n; ++i) {
          var prefixName = d3_vendorPrefixes[i] + name;
          if (prefixName in object)
            return prefixName;
        }
      }
      var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];
      function d3_noop() {}
      d3.dispatch = function() {
        var dispatch = new d3_dispatch(),
            i = -1,
            n = arguments.length;
        while (++i < n)
          dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        return dispatch;
      };
      function d3_dispatch() {}
      d3_dispatch.prototype.on = function(type, listener) {
        var i = type.indexOf("."),
            name = "";
        if (i >= 0) {
          name = type.slice(i + 1);
          type = type.slice(0, i);
        }
        if (type)
          return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
        if (arguments.length === 2) {
          if (listener == null)
            for (type in this) {
              if (this.hasOwnProperty(type))
                this[type].on(name, null);
            }
          return this;
        }
      };
      function d3_dispatch_event(dispatch) {
        var listeners = [],
            listenerByName = new d3_Map();
        function event() {
          var z = listeners,
              i = -1,
              n = z.length,
              l;
          while (++i < n)
            if (l = z[i].on)
              l.apply(this, arguments);
          return dispatch;
        }
        event.on = function(name, listener) {
          var l = listenerByName.get(name),
              i;
          if (arguments.length < 2)
            return l && l.on;
          if (l) {
            l.on = null;
            listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
            listenerByName.remove(name);
          }
          if (listener)
            listeners.push(listenerByName.set(name, {on: listener}));
          return dispatch;
        };
        return event;
      }
      d3.event = null;
      function d3_eventPreventDefault() {
        d3.event.preventDefault();
      }
      function d3_eventSource() {
        var e = d3.event,
            s;
        while (s = e.sourceEvent)
          e = s;
        return e;
      }
      function d3_eventDispatch(target) {
        var dispatch = new d3_dispatch(),
            i = 0,
            n = arguments.length;
        while (++i < n)
          dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        dispatch.of = function(thiz, argumentz) {
          return function(e1) {
            try {
              var e0 = e1.sourceEvent = d3.event;
              e1.target = target;
              d3.event = e1;
              dispatch[e1.type].apply(thiz, argumentz);
            } finally {
              d3.event = e0;
            }
          };
        };
        return dispatch;
      }
      d3.requote = function(s) {
        return s.replace(d3_requote_re, "\\$&");
      };
      var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
      var d3_subclass = {}.__proto__ ? function(object, prototype) {
        object.__proto__ = prototype;
      } : function(object, prototype) {
        for (var property in prototype)
          object[property] = prototype[property];
      };
      function d3_selection(groups) {
        d3_subclass(groups, d3_selectionPrototype);
        return groups;
      }
      var d3_select = function(s, n) {
        return n.querySelector(s);
      },
          d3_selectAll = function(s, n) {
            return n.querySelectorAll(s);
          },
          d3_selectMatches = function(n, s) {
            var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
            d3_selectMatches = function(n, s) {
              return d3_selectMatcher.call(n, s);
            };
            return d3_selectMatches(n, s);
          };
      if (typeof Sizzle === "function") {
        d3_select = function(s, n) {
          return Sizzle(s, n)[0] || null;
        };
        d3_selectAll = Sizzle;
        d3_selectMatches = Sizzle.matchesSelector;
      }
      d3.selection = function() {
        return d3.select(d3_document.documentElement);
      };
      var d3_selectionPrototype = d3.selection.prototype = [];
      d3_selectionPrototype.select = function(selector) {
        var subgroups = [],
            subgroup,
            subnode,
            group,
            node;
        selector = d3_selection_selector(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          subgroup.parentNode = (group = this[j]).parentNode;
          for (var i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroup.push(subnode = selector.call(node, node.__data__, i, j));
              if (subnode && "__data__" in node)
                subnode.__data__ = node.__data__;
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_selector(selector) {
        return typeof selector === "function" ? selector : function() {
          return d3_select(selector, this);
        };
      }
      d3_selectionPrototype.selectAll = function(selector) {
        var subgroups = [],
            subgroup,
            node;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
              subgroup.parentNode = node;
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_selectorAll(selector) {
        return typeof selector === "function" ? selector : function() {
          return d3_selectAll(selector, this);
        };
      }
      var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
      var d3_nsPrefix = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: d3_nsXhtml,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
      d3.ns = {
        prefix: d3_nsPrefix,
        qualify: function(name) {
          var i = name.indexOf(":"),
              prefix = name;
          if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
            name = name.slice(i + 1);
          return d3_nsPrefix.hasOwnProperty(prefix) ? {
            space: d3_nsPrefix[prefix],
            local: name
          } : name;
        }
      };
      d3_selectionPrototype.attr = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string") {
            var node = this.node();
            name = d3.ns.qualify(name);
            return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
          }
          for (value in name)
            this.each(d3_selection_attr(value, name[value]));
          return this;
        }
        return this.each(d3_selection_attr(name, value));
      };
      function d3_selection_attr(name, value) {
        name = d3.ns.qualify(name);
        function attrNull() {
          this.removeAttribute(name);
        }
        function attrNullNS() {
          this.removeAttributeNS(name.space, name.local);
        }
        function attrConstant() {
          this.setAttribute(name, value);
        }
        function attrConstantNS() {
          this.setAttributeNS(name.space, name.local, value);
        }
        function attrFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.removeAttribute(name);
          else
            this.setAttribute(name, x);
        }
        function attrFunctionNS() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.removeAttributeNS(name.space, name.local);
          else
            this.setAttributeNS(name.space, name.local, x);
        }
        return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
      }
      function d3_collapse(s) {
        return s.trim().replace(/\s+/g, " ");
      }
      d3_selectionPrototype.classed = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string") {
            var node = this.node(),
                n = (name = d3_selection_classes(name)).length,
                i = -1;
            if (value = node.classList) {
              while (++i < n)
                if (!value.contains(name[i]))
                  return false;
            } else {
              value = node.getAttribute("class");
              while (++i < n)
                if (!d3_selection_classedRe(name[i]).test(value))
                  return false;
            }
            return true;
          }
          for (value in name)
            this.each(d3_selection_classed(value, name[value]));
          return this;
        }
        return this.each(d3_selection_classed(name, value));
      };
      function d3_selection_classedRe(name) {
        return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
      }
      function d3_selection_classes(name) {
        return (name + "").trim().split(/^|\s+/);
      }
      function d3_selection_classed(name, value) {
        name = d3_selection_classes(name).map(d3_selection_classedName);
        var n = name.length;
        function classedConstant() {
          var i = -1;
          while (++i < n)
            name[i](this, value);
        }
        function classedFunction() {
          var i = -1,
              x = value.apply(this, arguments);
          while (++i < n)
            name[i](this, x);
        }
        return typeof value === "function" ? classedFunction : classedConstant;
      }
      function d3_selection_classedName(name) {
        var re = d3_selection_classedRe(name);
        return function(node, value) {
          if (c = node.classList)
            return value ? c.add(name) : c.remove(name);
          var c = node.getAttribute("class") || "";
          if (value) {
            re.lastIndex = 0;
            if (!re.test(c))
              node.setAttribute("class", d3_collapse(c + " " + name));
          } else {
            node.setAttribute("class", d3_collapse(c.replace(re, " ")));
          }
        };
      }
      d3_selectionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof name !== "string") {
            if (n < 2)
              value = "";
            for (priority in name)
              this.each(d3_selection_style(priority, name[priority], value));
            return this;
          }
          if (n < 2) {
            var node = this.node();
            return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
          }
          priority = "";
        }
        return this.each(d3_selection_style(name, value, priority));
      };
      function d3_selection_style(name, value, priority) {
        function styleNull() {
          this.style.removeProperty(name);
        }
        function styleConstant() {
          this.style.setProperty(name, value, priority);
        }
        function styleFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.style.removeProperty(name);
          else
            this.style.setProperty(name, x, priority);
        }
        return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
      }
      d3_selectionPrototype.property = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string")
            return this.node()[name];
          for (value in name)
            this.each(d3_selection_property(value, name[value]));
          return this;
        }
        return this.each(d3_selection_property(name, value));
      };
      function d3_selection_property(name, value) {
        function propertyNull() {
          delete this[name];
        }
        function propertyConstant() {
          this[name] = value;
        }
        function propertyFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            delete this[name];
          else
            this[name] = x;
        }
        return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
      }
      d3_selectionPrototype.text = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
          var v = value.apply(this, arguments);
          this.textContent = v == null ? "" : v;
        } : value == null ? function() {
          this.textContent = "";
        } : function() {
          this.textContent = value;
        }) : this.node().textContent;
      };
      d3_selectionPrototype.html = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
          var v = value.apply(this, arguments);
          this.innerHTML = v == null ? "" : v;
        } : value == null ? function() {
          this.innerHTML = "";
        } : function() {
          this.innerHTML = value;
        }) : this.node().innerHTML;
      };
      d3_selectionPrototype.append = function(name) {
        name = d3_selection_creator(name);
        return this.select(function() {
          return this.appendChild(name.apply(this, arguments));
        });
      };
      function d3_selection_creator(name) {
        function create() {
          var document = this.ownerDocument,
              namespace = this.namespaceURI;
          return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
        }
        function createNS() {
          return this.ownerDocument.createElementNS(name.space, name.local);
        }
        return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
      }
      d3_selectionPrototype.insert = function(name, before) {
        name = d3_selection_creator(name);
        before = d3_selection_selector(before);
        return this.select(function() {
          return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
        });
      };
      d3_selectionPrototype.remove = function() {
        return this.each(d3_selectionRemove);
      };
      function d3_selectionRemove() {
        var parent = this.parentNode;
        if (parent)
          parent.removeChild(this);
      }
      d3_selectionPrototype.data = function(value, key) {
        var i = -1,
            n = this.length,
            group,
            node;
        if (!arguments.length) {
          value = new Array(n = (group = this[0]).length);
          while (++i < n) {
            if (node = group[i]) {
              value[i] = node.__data__;
            }
          }
          return value;
        }
        function bind(group, groupData) {
          var i,
              n = group.length,
              m = groupData.length,
              n0 = Math.min(n, m),
              updateNodes = new Array(m),
              enterNodes = new Array(m),
              exitNodes = new Array(n),
              node,
              nodeData;
          if (key) {
            var nodeByKeyValue = new d3_Map(),
                keyValues = new Array(n),
                keyValue;
            for (i = -1; ++i < n; ) {
              if (node = group[i]) {
                if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
                  exitNodes[i] = node;
                } else {
                  nodeByKeyValue.set(keyValue, node);
                }
                keyValues[i] = keyValue;
              }
            }
            for (i = -1; ++i < m; ) {
              if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
                enterNodes[i] = d3_selection_dataNode(nodeData);
              } else if (node !== true) {
                updateNodes[i] = node;
                node.__data__ = nodeData;
              }
              nodeByKeyValue.set(keyValue, true);
            }
            for (i = -1; ++i < n; ) {
              if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
                exitNodes[i] = group[i];
              }
            }
          } else {
            for (i = -1; ++i < n0; ) {
              node = group[i];
              nodeData = groupData[i];
              if (node) {
                node.__data__ = nodeData;
                updateNodes[i] = node;
              } else {
                enterNodes[i] = d3_selection_dataNode(nodeData);
              }
            }
            for (; i < m; ++i) {
              enterNodes[i] = d3_selection_dataNode(groupData[i]);
            }
            for (; i < n; ++i) {
              exitNodes[i] = group[i];
            }
          }
          enterNodes.update = updateNodes;
          enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
          enter.push(enterNodes);
          update.push(updateNodes);
          exit.push(exitNodes);
        }
        var enter = d3_selection_enter([]),
            update = d3_selection([]),
            exit = d3_selection([]);
        if (typeof value === "function") {
          while (++i < n) {
            bind(group = this[i], value.call(group, group.parentNode.__data__, i));
          }
        } else {
          while (++i < n) {
            bind(group = this[i], value);
          }
        }
        update.enter = function() {
          return enter;
        };
        update.exit = function() {
          return exit;
        };
        return update;
      };
      function d3_selection_dataNode(data) {
        return {__data__: data};
      }
      d3_selectionPrototype.datum = function(value) {
        return arguments.length ? this.property("__data__", value) : this.property("__data__");
      };
      d3_selectionPrototype.filter = function(filter) {
        var subgroups = [],
            subgroup,
            group,
            node;
        if (typeof filter !== "function")
          filter = d3_selection_filter(filter);
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          subgroup.parentNode = (group = this[j]).parentNode;
          for (var i = 0,
              n = group.length; i < n; i++) {
            if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
              subgroup.push(node);
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_filter(selector) {
        return function() {
          return d3_selectMatches(this, selector);
        };
      }
      d3_selectionPrototype.order = function() {
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = group.length - 1,
              next = group[i],
              node; --i >= 0; ) {
            if (node = group[i]) {
              if (next && next !== node.nextSibling)
                next.parentNode.insertBefore(node, next);
              next = node;
            }
          }
        }
        return this;
      };
      d3_selectionPrototype.sort = function(comparator) {
        comparator = d3_selection_sortComparator.apply(this, arguments);
        for (var j = -1,
            m = this.length; ++j < m; )
          this[j].sort(comparator);
        return this.order();
      };
      function d3_selection_sortComparator(comparator) {
        if (!arguments.length)
          comparator = d3_ascending;
        return function(a, b) {
          return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
        };
      }
      d3_selectionPrototype.each = function(callback) {
        return d3_selection_each(this, function(node, i, j) {
          callback.call(node, node.__data__, i, j);
        });
      };
      function d3_selection_each(groups, callback) {
        for (var j = 0,
            m = groups.length; j < m; j++) {
          for (var group = groups[j],
              i = 0,
              n = group.length,
              node; i < n; i++) {
            if (node = group[i])
              callback(node, i, j);
          }
        }
        return groups;
      }
      d3_selectionPrototype.call = function(callback) {
        var args = d3_array(arguments);
        callback.apply(args[0] = this, args);
        return this;
      };
      d3_selectionPrototype.empty = function() {
        return !this.node();
      };
      d3_selectionPrototype.node = function() {
        for (var j = 0,
            m = this.length; j < m; j++) {
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            var node = group[i];
            if (node)
              return node;
          }
        }
        return null;
      };
      d3_selectionPrototype.size = function() {
        var n = 0;
        d3_selection_each(this, function() {
          ++n;
        });
        return n;
      };
      function d3_selection_enter(selection) {
        d3_subclass(selection, d3_selection_enterPrototype);
        return selection;
      }
      var d3_selection_enterPrototype = [];
      d3.selection.enter = d3_selection_enter;
      d3.selection.enter.prototype = d3_selection_enterPrototype;
      d3_selection_enterPrototype.append = d3_selectionPrototype.append;
      d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
      d3_selection_enterPrototype.node = d3_selectionPrototype.node;
      d3_selection_enterPrototype.call = d3_selectionPrototype.call;
      d3_selection_enterPrototype.size = d3_selectionPrototype.size;
      d3_selection_enterPrototype.select = function(selector) {
        var subgroups = [],
            subgroup,
            subnode,
            upgroup,
            group,
            node;
        for (var j = -1,
            m = this.length; ++j < m; ) {
          upgroup = (group = this[j]).update;
          subgroups.push(subgroup = []);
          subgroup.parentNode = group.parentNode;
          for (var i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
              subnode.__data__ = node.__data__;
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_selection(subgroups);
      };
      d3_selection_enterPrototype.insert = function(name, before) {
        if (arguments.length < 2)
          before = d3_selection_enterInsertBefore(this);
        return d3_selectionPrototype.insert.call(this, name, before);
      };
      function d3_selection_enterInsertBefore(enter) {
        var i0,
            j0;
        return function(d, i, j) {
          var group = enter[j].update,
              n = group.length,
              node;
          if (j != j0)
            j0 = j, i0 = 0;
          if (i >= i0)
            i0 = i + 1;
          while (!(node = group[i0]) && ++i0 < n)
            ;
          return node;
        };
      }
      d3.select = function(node) {
        var group;
        if (typeof node === "string") {
          group = [d3_select(node, d3_document)];
          group.parentNode = d3_document.documentElement;
        } else {
          group = [node];
          group.parentNode = d3_documentElement(node);
        }
        return d3_selection([group]);
      };
      d3.selectAll = function(nodes) {
        var group;
        if (typeof nodes === "string") {
          group = d3_array(d3_selectAll(nodes, d3_document));
          group.parentNode = d3_document.documentElement;
        } else {
          group = d3_array(nodes);
          group.parentNode = null;
        }
        return d3_selection([group]);
      };
      d3_selectionPrototype.on = function(type, listener, capture) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof type !== "string") {
            if (n < 2)
              listener = false;
            for (capture in type)
              this.each(d3_selection_on(capture, type[capture], listener));
            return this;
          }
          if (n < 2)
            return (n = this.node()["__on" + type]) && n._;
          capture = false;
        }
        return this.each(d3_selection_on(type, listener, capture));
      };
      function d3_selection_on(type, listener, capture) {
        var name = "__on" + type,
            i = type.indexOf("."),
            wrap = d3_selection_onListener;
        if (i > 0)
          type = type.slice(0, i);
        var filter = d3_selection_onFilters.get(type);
        if (filter)
          type = filter, wrap = d3_selection_onFilter;
        function onRemove() {
          var l = this[name];
          if (l) {
            this.removeEventListener(type, l, l.$);
            delete this[name];
          }
        }
        function onAdd() {
          var l = wrap(listener, d3_array(arguments));
          onRemove.call(this);
          this.addEventListener(type, this[name] = l, l.$ = capture);
          l._ = listener;
        }
        function removeAll() {
          var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"),
              match;
          for (var name in this) {
            if (match = name.match(re)) {
              var l = this[name];
              this.removeEventListener(match[1], l, l.$);
              delete this[name];
            }
          }
        }
        return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
      }
      var d3_selection_onFilters = d3.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      });
      if (d3_document) {
        d3_selection_onFilters.forEach(function(k) {
          if ("on" + k in d3_document)
            d3_selection_onFilters.remove(k);
        });
      }
      function d3_selection_onListener(listener, argumentz) {
        return function(e) {
          var o = d3.event;
          d3.event = e;
          argumentz[0] = this.__data__;
          try {
            listener.apply(this, argumentz);
          } finally {
            d3.event = o;
          }
        };
      }
      function d3_selection_onFilter(listener, argumentz) {
        var l = d3_selection_onListener(listener, argumentz);
        return function(e) {
          var target = this,
              related = e.relatedTarget;
          if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
            l.call(target, e);
          }
        };
      }
      var d3_event_dragSelect,
          d3_event_dragId = 0;
      function d3_event_dragSuppress(node) {
        var name = ".dragsuppress-" + ++d3_event_dragId,
            click = "click" + name,
            w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
        if (d3_event_dragSelect == null) {
          d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
        }
        if (d3_event_dragSelect) {
          var style = d3_documentElement(node).style,
              select = style[d3_event_dragSelect];
          style[d3_event_dragSelect] = "none";
        }
        return function(suppressClick) {
          w.on(name, null);
          if (d3_event_dragSelect)
            style[d3_event_dragSelect] = select;
          if (suppressClick) {
            var off = function() {
              w.on(click, null);
            };
            w.on(click, function() {
              d3_eventPreventDefault();
              off();
            }, true);
            setTimeout(off, 0);
          }
        };
      }
      d3.mouse = function(container) {
        return d3_mousePoint(container, d3_eventSource());
      };
      var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
      function d3_mousePoint(container, e) {
        if (e.changedTouches)
          e = e.changedTouches[0];
        var svg = container.ownerSVGElement || container;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          if (d3_mouse_bug44083 < 0) {
            var window = d3_window(container);
            if (window.scrollX || window.scrollY) {
              svg = d3.select("body").append("svg").style({
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
                border: "none"
              }, "important");
              var ctm = svg[0][0].getScreenCTM();
              d3_mouse_bug44083 = !(ctm.f || ctm.e);
              svg.remove();
            }
          }
          if (d3_mouse_bug44083)
            point.x = e.pageX, point.y = e.pageY;
          else
            point.x = e.clientX, point.y = e.clientY;
          point = point.matrixTransform(container.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        var rect = container.getBoundingClientRect();
        return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
      }
      d3.touch = function(container, touches, identifier) {
        if (arguments.length < 3)
          identifier = touches, touches = d3_eventSource().changedTouches;
        if (touches)
          for (var i = 0,
              n = touches.length,
              touch; i < n; ++i) {
            if ((touch = touches[i]).identifier === identifier) {
              return d3_mousePoint(container, touch);
            }
          }
      };
      d3.behavior.drag = function() {
        var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
            origin = null,
            mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"),
            touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
        function drag() {
          this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
        }
        function dragstart(id, position, subject, move, end) {
          return function() {
            var that = this,
                target = d3.event.target.correspondingElement || d3.event.target,
                parent = that.parentNode,
                dispatch = event.of(that, arguments),
                dragged = 0,
                dragId = id(),
                dragName = ".drag" + (dragId == null ? "" : "-" + dragId),
                dragOffset,
                dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended),
                dragRestore = d3_event_dragSuppress(target),
                position0 = position(parent, dragId);
            if (origin) {
              dragOffset = origin.apply(that, arguments);
              dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
            } else {
              dragOffset = [0, 0];
            }
            dispatch({type: "dragstart"});
            function moved() {
              var position1 = position(parent, dragId),
                  dx,
                  dy;
              if (!position1)
                return;
              dx = position1[0] - position0[0];
              dy = position1[1] - position0[1];
              dragged |= dx | dy;
              position0 = position1;
              dispatch({
                type: "drag",
                x: position1[0] + dragOffset[0],
                y: position1[1] + dragOffset[1],
                dx: dx,
                dy: dy
              });
            }
            function ended() {
              if (!position(parent, dragId))
                return;
              dragSubject.on(move + dragName, null).on(end + dragName, null);
              dragRestore(dragged);
              dispatch({type: "dragend"});
            }
          };
        }
        drag.origin = function(x) {
          if (!arguments.length)
            return origin;
          origin = x;
          return drag;
        };
        return d3.rebind(drag, event, "on");
      };
      function d3_behavior_dragTouchId() {
        return d3.event.changedTouches[0].identifier;
      }
      d3.touches = function(container, touches) {
        if (arguments.length < 2)
          touches = d3_eventSource().touches;
        return touches ? d3_array(touches).map(function(touch) {
          var point = d3_mousePoint(container, touch);
          point.identifier = touch.identifier;
          return point;
        }) : [];
      };
      var ε = 1e-6,
          ε2 = ε * ε,
          π = Math.PI,
          τ = 2 * π,
          τε = τ - ε,
          halfπ = π / 2,
          d3_radians = π / 180,
          d3_degrees = 180 / π;
      function d3_sgn(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
      }
      function d3_cross2d(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
      }
      function d3_acos(x) {
        return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
      }
      function d3_asin(x) {
        return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
      }
      function d3_sinh(x) {
        return ((x = Math.exp(x)) - 1 / x) / 2;
      }
      function d3_cosh(x) {
        return ((x = Math.exp(x)) + 1 / x) / 2;
      }
      function d3_tanh(x) {
        return ((x = Math.exp(2 * x)) - 1) / (x + 1);
      }
      function d3_haversin(x) {
        return (x = Math.sin(x / 2)) * x;
      }
      var ρ = Math.SQRT2,
          ρ2 = 2,
          ρ4 = 4;
      d3.interpolateZoom = function(p0, p1) {
        var ux0 = p0[0],
            uy0 = p0[1],
            w0 = p0[2],
            ux1 = p1[0],
            uy1 = p1[1],
            w1 = p1[2],
            dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            i,
            S;
        if (d2 < ε2) {
          S = Math.log(w1 / w0) / ρ;
          i = function(t) {
            return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S)];
          };
        } else {
          var d1 = Math.sqrt(d2),
              b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1),
              b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1),
              r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
              r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
          S = (r1 - r0) / ρ;
          i = function(t) {
            var s = t * S,
                coshr0 = d3_cosh(r0),
                u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
            return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0)];
          };
        }
        i.duration = S * 1e3;
        return i;
      };
      d3.behavior.zoom = function() {
        var view = {
          x: 0,
          y: 0,
          k: 1
        },
            translate0,
            center0,
            center,
            size = [960, 500],
            scaleExtent = d3_behavior_zoomInfinity,
            duration = 250,
            zooming = 0,
            mousedown = "mousedown.zoom",
            mousemove = "mousemove.zoom",
            mouseup = "mouseup.zoom",
            mousewheelTimer,
            touchstart = "touchstart.zoom",
            touchtime,
            event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"),
            x0,
            x1,
            y0,
            y1;
        if (!d3_behavior_zoomWheel) {
          d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
            return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
          }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
            return d3.event.wheelDelta;
          }, "mousewheel") : (d3_behavior_zoomDelta = function() {
            return -d3.event.detail;
          }, "MozMousePixelScroll");
        }
        function zoom(g) {
          g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
        }
        zoom.event = function(g) {
          g.each(function() {
            var dispatch = event.of(this, arguments),
                view1 = view;
            if (d3_transitionInheritId) {
              d3.select(this).transition().each("start.zoom", function() {
                view = this.__chart__ || {
                  x: 0,
                  y: 0,
                  k: 1
                };
                zoomstarted(dispatch);
              }).tween("zoom:zoom", function() {
                var dx = size[0],
                    dy = size[1],
                    cx = center0 ? center0[0] : dx / 2,
                    cy = center0 ? center0[1] : dy / 2,
                    i = d3.interpolateZoom([(cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k], [(cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k]);
                return function(t) {
                  var l = i(t),
                      k = dx / l[2];
                  this.__chart__ = view = {
                    x: cx - l[0] * k,
                    y: cy - l[1] * k,
                    k: k
                  };
                  zoomed(dispatch);
                };
              }).each("interrupt.zoom", function() {
                zoomended(dispatch);
              }).each("end.zoom", function() {
                zoomended(dispatch);
              });
            } else {
              this.__chart__ = view;
              zoomstarted(dispatch);
              zoomed(dispatch);
              zoomended(dispatch);
            }
          });
        };
        zoom.translate = function(_) {
          if (!arguments.length)
            return [view.x, view.y];
          view = {
            x: +_[0],
            y: +_[1],
            k: view.k
          };
          rescale();
          return zoom;
        };
        zoom.scale = function(_) {
          if (!arguments.length)
            return view.k;
          view = {
            x: view.x,
            y: view.y,
            k: null
          };
          scaleTo(+_);
          rescale();
          return zoom;
        };
        zoom.scaleExtent = function(_) {
          if (!arguments.length)
            return scaleExtent;
          scaleExtent = _ == null ? d3_behavior_zoomInfinity : [+_[0], +_[1]];
          return zoom;
        };
        zoom.center = function(_) {
          if (!arguments.length)
            return center;
          center = _ && [+_[0], +_[1]];
          return zoom;
        };
        zoom.size = function(_) {
          if (!arguments.length)
            return size;
          size = _ && [+_[0], +_[1]];
          return zoom;
        };
        zoom.duration = function(_) {
          if (!arguments.length)
            return duration;
          duration = +_;
          return zoom;
        };
        zoom.x = function(z) {
          if (!arguments.length)
            return x1;
          x1 = z;
          x0 = z.copy();
          view = {
            x: 0,
            y: 0,
            k: 1
          };
          return zoom;
        };
        zoom.y = function(z) {
          if (!arguments.length)
            return y1;
          y1 = z;
          y0 = z.copy();
          view = {
            x: 0,
            y: 0,
            k: 1
          };
          return zoom;
        };
        function location(p) {
          return [(p[0] - view.x) / view.k, (p[1] - view.y) / view.k];
        }
        function point(l) {
          return [l[0] * view.k + view.x, l[1] * view.k + view.y];
        }
        function scaleTo(s) {
          view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
        }
        function translateTo(p, l) {
          l = point(l);
          view.x += p[0] - l[0];
          view.y += p[1] - l[1];
        }
        function zoomTo(that, p, l, k) {
          that.__chart__ = {
            x: view.x,
            y: view.y,
            k: view.k
          };
          scaleTo(Math.pow(2, k));
          translateTo(center0 = p, l);
          that = d3.select(that);
          if (duration > 0)
            that = that.transition().duration(duration);
          that.call(zoom.event);
        }
        function rescale() {
          if (x1)
            x1.domain(x0.range().map(function(x) {
              return (x - view.x) / view.k;
            }).map(x0.invert));
          if (y1)
            y1.domain(y0.range().map(function(y) {
              return (y - view.y) / view.k;
            }).map(y0.invert));
        }
        function zoomstarted(dispatch) {
          if (!zooming++)
            dispatch({type: "zoomstart"});
        }
        function zoomed(dispatch) {
          rescale();
          dispatch({
            type: "zoom",
            scale: view.k,
            translate: [view.x, view.y]
          });
        }
        function zoomended(dispatch) {
          if (!--zooming)
            dispatch({type: "zoomend"}), center0 = null;
        }
        function mousedowned() {
          var that = this,
              dispatch = event.of(that, arguments),
              dragged = 0,
              subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended),
              location0 = location(d3.mouse(that)),
              dragRestore = d3_event_dragSuppress(that);
          d3_selection_interrupt.call(that);
          zoomstarted(dispatch);
          function moved() {
            dragged = 1;
            translateTo(d3.mouse(that), location0);
            zoomed(dispatch);
          }
          function ended() {
            subject.on(mousemove, null).on(mouseup, null);
            dragRestore(dragged);
            zoomended(dispatch);
          }
        }
        function touchstarted() {
          var that = this,
              dispatch = event.of(that, arguments),
              locations0 = {},
              distance0 = 0,
              scale0,
              zoomName = ".zoom-" + d3.event.changedTouches[0].identifier,
              touchmove = "touchmove" + zoomName,
              touchend = "touchend" + zoomName,
              targets = [],
              subject = d3.select(that),
              dragRestore = d3_event_dragSuppress(that);
          started();
          zoomstarted(dispatch);
          subject.on(mousedown, null).on(touchstart, started);
          function relocate() {
            var touches = d3.touches(that);
            scale0 = view.k;
            touches.forEach(function(t) {
              if (t.identifier in locations0)
                locations0[t.identifier] = location(t);
            });
            return touches;
          }
          function started() {
            var target = d3.event.target;
            d3.select(target).on(touchmove, moved).on(touchend, ended);
            targets.push(target);
            var changed = d3.event.changedTouches;
            for (var i = 0,
                n = changed.length; i < n; ++i) {
              locations0[changed[i].identifier] = null;
            }
            var touches = relocate(),
                now = Date.now();
            if (touches.length === 1) {
              if (now - touchtime < 500) {
                var p = touches[0];
                zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
                d3_eventPreventDefault();
              }
              touchtime = now;
            } else if (touches.length > 1) {
              var p = touches[0],
                  q = touches[1],
                  dx = p[0] - q[0],
                  dy = p[1] - q[1];
              distance0 = dx * dx + dy * dy;
            }
          }
          function moved() {
            var touches = d3.touches(that),
                p0,
                l0,
                p1,
                l1;
            d3_selection_interrupt.call(that);
            for (var i = 0,
                n = touches.length; i < n; ++i, l1 = null) {
              p1 = touches[i];
              if (l1 = locations0[p1.identifier]) {
                if (l0)
                  break;
                p0 = p1, l0 = l1;
              }
            }
            if (l1) {
              var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1,
                  scale1 = distance0 && Math.sqrt(distance1 / distance0);
              p0 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
              l0 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
              scaleTo(scale1 * scale0);
            }
            touchtime = null;
            translateTo(p0, l0);
            zoomed(dispatch);
          }
          function ended() {
            if (d3.event.touches.length) {
              var changed = d3.event.changedTouches;
              for (var i = 0,
                  n = changed.length; i < n; ++i) {
                delete locations0[changed[i].identifier];
              }
              for (var identifier in locations0) {
                return void relocate();
              }
            }
            d3.selectAll(targets).on(zoomName, null);
            subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
            dragRestore();
            zoomended(dispatch);
          }
        }
        function mousewheeled() {
          var dispatch = event.of(this, arguments);
          if (mousewheelTimer)
            clearTimeout(mousewheelTimer);
          else
            d3_selection_interrupt.call(this), translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
          mousewheelTimer = setTimeout(function() {
            mousewheelTimer = null;
            zoomended(dispatch);
          }, 50);
          d3_eventPreventDefault();
          scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
          translateTo(center0, translate0);
          zoomed(dispatch);
        }
        function dblclicked() {
          var p = d3.mouse(this),
              k = Math.log(view.k) / Math.LN2;
          zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
        }
        return d3.rebind(zoom, event, "on");
      };
      var d3_behavior_zoomInfinity = [0, Infinity],
          d3_behavior_zoomDelta,
          d3_behavior_zoomWheel;
      d3.color = d3_color;
      function d3_color() {}
      d3_color.prototype.toString = function() {
        return this.rgb() + "";
      };
      d3.hsl = d3_hsl;
      function d3_hsl(h, s, l) {
        return this instanceof d3_hsl ? void(this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
      }
      var d3_hslPrototype = d3_hsl.prototype = new d3_color();
      d3_hslPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_hsl(this.h, this.s, this.l / k);
      };
      d3_hslPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_hsl(this.h, this.s, k * this.l);
      };
      d3_hslPrototype.rgb = function() {
        return d3_hsl_rgb(this.h, this.s, this.l);
      };
      function d3_hsl_rgb(h, s, l) {
        var m1,
            m2;
        h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
        s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
        l = l < 0 ? 0 : l > 1 ? 1 : l;
        m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
        m1 = 2 * l - m2;
        function v(h) {
          if (h > 360)
            h -= 360;
          else if (h < 0)
            h += 360;
          if (h < 60)
            return m1 + (m2 - m1) * h / 60;
          if (h < 180)
            return m2;
          if (h < 240)
            return m1 + (m2 - m1) * (240 - h) / 60;
          return m1;
        }
        function vv(h) {
          return Math.round(v(h) * 255);
        }
        return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
      }
      d3.hcl = d3_hcl;
      function d3_hcl(h, c, l) {
        return this instanceof d3_hcl ? void(this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
      }
      var d3_hclPrototype = d3_hcl.prototype = new d3_color();
      d3_hclPrototype.brighter = function(k) {
        return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
      };
      d3_hclPrototype.darker = function(k) {
        return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
      };
      d3_hclPrototype.rgb = function() {
        return d3_hcl_lab(this.h, this.c, this.l).rgb();
      };
      function d3_hcl_lab(h, c, l) {
        if (isNaN(h))
          h = 0;
        if (isNaN(c))
          c = 0;
        return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
      }
      d3.lab = d3_lab;
      function d3_lab(l, a, b) {
        return this instanceof d3_lab ? void(this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
      }
      var d3_lab_K = 18;
      var d3_lab_X = .95047,
          d3_lab_Y = 1,
          d3_lab_Z = 1.08883;
      var d3_labPrototype = d3_lab.prototype = new d3_color();
      d3_labPrototype.brighter = function(k) {
        return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
      };
      d3_labPrototype.darker = function(k) {
        return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
      };
      d3_labPrototype.rgb = function() {
        return d3_lab_rgb(this.l, this.a, this.b);
      };
      function d3_lab_rgb(l, a, b) {
        var y = (l + 16) / 116,
            x = y + a / 500,
            z = y - b / 200;
        x = d3_lab_xyz(x) * d3_lab_X;
        y = d3_lab_xyz(y) * d3_lab_Y;
        z = d3_lab_xyz(z) * d3_lab_Z;
        return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
      }
      function d3_lab_hcl(l, a, b) {
        return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
      }
      function d3_lab_xyz(x) {
        return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
      }
      function d3_xyz_lab(x) {
        return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
      }
      function d3_xyz_rgb(r) {
        return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
      }
      d3.rgb = d3_rgb;
      function d3_rgb(r, g, b) {
        return this instanceof d3_rgb ? void(this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
      }
      function d3_rgbNumber(value) {
        return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
      }
      function d3_rgbString(value) {
        return d3_rgbNumber(value) + "";
      }
      var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
      d3_rgbPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        var r = this.r,
            g = this.g,
            b = this.b,
            i = 30;
        if (!r && !g && !b)
          return new d3_rgb(i, i, i);
        if (r && r < i)
          r = i;
        if (g && g < i)
          g = i;
        if (b && b < i)
          b = i;
        return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
      };
      d3_rgbPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_rgb(k * this.r, k * this.g, k * this.b);
      };
      d3_rgbPrototype.hsl = function() {
        return d3_rgb_hsl(this.r, this.g, this.b);
      };
      d3_rgbPrototype.toString = function() {
        return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
      };
      function d3_rgb_hex(v) {
        return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
      }
      function d3_rgb_parse(format, rgb, hsl) {
        var r = 0,
            g = 0,
            b = 0,
            m1,
            m2,
            color;
        m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
        if (m1) {
          m2 = m1[2].split(",");
          switch (m1[1]) {
            case "hsl":
              {
                return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
              }
            case "rgb":
              {
                return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
              }
          }
        }
        if (color = d3_rgb_names.get(format)) {
          return rgb(color.r, color.g, color.b);
        }
        if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
          if (format.length === 4) {
            r = (color & 3840) >> 4;
            r = r >> 4 | r;
            g = color & 240;
            g = g >> 4 | g;
            b = color & 15;
            b = b << 4 | b;
          } else if (format.length === 7) {
            r = (color & 16711680) >> 16;
            g = (color & 65280) >> 8;
            b = color & 255;
          }
        }
        return rgb(r, g, b);
      }
      function d3_rgb_hsl(r, g, b) {
        var min = Math.min(r /= 255, g /= 255, b /= 255),
            max = Math.max(r, g, b),
            d = max - min,
            h,
            s,
            l = (max + min) / 2;
        if (d) {
          s = l < .5 ? d / (max + min) : d / (2 - max - min);
          if (r == max)
            h = (g - b) / d + (g < b ? 6 : 0);
          else if (g == max)
            h = (b - r) / d + 2;
          else
            h = (r - g) / d + 4;
          h *= 60;
        } else {
          h = NaN;
          s = l > 0 && l < 1 ? 0 : h;
        }
        return new d3_hsl(h, s, l);
      }
      function d3_rgb_lab(r, g, b) {
        r = d3_rgb_xyz(r);
        g = d3_rgb_xyz(g);
        b = d3_rgb_xyz(b);
        var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X),
            y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y),
            z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
        return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
      }
      function d3_rgb_xyz(r) {
        return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
      }
      function d3_rgb_parseNumber(c) {
        var f = parseFloat(c);
        return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
      }
      var d3_rgb_names = d3.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      });
      d3_rgb_names.forEach(function(key, value) {
        d3_rgb_names.set(key, d3_rgbNumber(value));
      });
      function d3_functor(v) {
        return typeof v === "function" ? v : function() {
          return v;
        };
      }
      d3.functor = d3_functor;
      d3.xhr = d3_xhrType(d3_identity);
      function d3_xhrType(response) {
        return function(url, mimeType, callback) {
          if (arguments.length === 2 && typeof mimeType === "function")
            callback = mimeType, mimeType = null;
          return d3_xhr(url, mimeType, response, callback);
        };
      }
      function d3_xhr(url, mimeType, response, callback) {
        var xhr = {},
            dispatch = d3.dispatch("beforesend", "progress", "load", "error"),
            headers = {},
            request = new XMLHttpRequest(),
            responseType = null;
        if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url))
          request = new XDomainRequest();
        "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
          request.readyState > 3 && respond();
        };
        function respond() {
          var status = request.status,
              result;
          if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
            try {
              result = response.call(xhr, request);
            } catch (e) {
              dispatch.error.call(xhr, e);
              return;
            }
            dispatch.load.call(xhr, result);
          } else {
            dispatch.error.call(xhr, request);
          }
        }
        request.onprogress = function(event) {
          var o = d3.event;
          d3.event = event;
          try {
            dispatch.progress.call(xhr, request);
          } finally {
            d3.event = o;
          }
        };
        xhr.header = function(name, value) {
          name = (name + "").toLowerCase();
          if (arguments.length < 2)
            return headers[name];
          if (value == null)
            delete headers[name];
          else
            headers[name] = value + "";
          return xhr;
        };
        xhr.mimeType = function(value) {
          if (!arguments.length)
            return mimeType;
          mimeType = value == null ? null : value + "";
          return xhr;
        };
        xhr.responseType = function(value) {
          if (!arguments.length)
            return responseType;
          responseType = value;
          return xhr;
        };
        xhr.response = function(value) {
          response = value;
          return xhr;
        };
        ["get", "post"].forEach(function(method) {
          xhr[method] = function() {
            return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
          };
        });
        xhr.send = function(method, data, callback) {
          if (arguments.length === 2 && typeof data === "function")
            callback = data, data = null;
          request.open(method, url, true);
          if (mimeType != null && !("accept" in headers))
            headers["accept"] = mimeType + ",*/*";
          if (request.setRequestHeader)
            for (var name in headers)
              request.setRequestHeader(name, headers[name]);
          if (mimeType != null && request.overrideMimeType)
            request.overrideMimeType(mimeType);
          if (responseType != null)
            request.responseType = responseType;
          if (callback != null)
            xhr.on("error", callback).on("load", function(request) {
              callback(null, request);
            });
          dispatch.beforesend.call(xhr, request);
          request.send(data == null ? null : data);
          return xhr;
        };
        xhr.abort = function() {
          request.abort();
          return xhr;
        };
        d3.rebind(xhr, dispatch, "on");
        return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
      }
      function d3_xhr_fixCallback(callback) {
        return callback.length === 1 ? function(error, request) {
          callback(error == null ? request : null);
        } : callback;
      }
      function d3_xhrHasResponse(request) {
        var type = request.responseType;
        return type && type !== "text" ? request.response : request.responseText;
      }
      d3.dsv = function(delimiter, mimeType) {
        var reFormat = new RegExp('["' + delimiter + "\n]"),
            delimiterCode = delimiter.charCodeAt(0);
        function dsv(url, row, callback) {
          if (arguments.length < 3)
            callback = row, row = null;
          var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
          xhr.row = function(_) {
            return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
          };
          return xhr;
        }
        function response(request) {
          return dsv.parse(request.responseText);
        }
        function typedResponse(f) {
          return function(request) {
            return dsv.parse(request.responseText, f);
          };
        }
        dsv.parse = function(text, f) {
          var o;
          return dsv.parseRows(text, function(row, i) {
            if (o)
              return o(row, i - 1);
            var a = new Function("d", "return {" + row.map(function(name, i) {
              return JSON.stringify(name) + ": d[" + i + "]";
            }).join(",") + "}");
            o = f ? function(row, i) {
              return f(a(row), i);
            } : a;
          });
        };
        dsv.parseRows = function(text, f) {
          var EOL = {},
              EOF = {},
              rows = [],
              N = text.length,
              I = 0,
              n = 0,
              t,
              eol;
          function token() {
            if (I >= N)
              return EOF;
            if (eol)
              return eol = false, EOL;
            var j = I;
            if (text.charCodeAt(j) === 34) {
              var i = j;
              while (i++ < N) {
                if (text.charCodeAt(i) === 34) {
                  if (text.charCodeAt(i + 1) !== 34)
                    break;
                  ++i;
                }
              }
              I = i + 2;
              var c = text.charCodeAt(i + 1);
              if (c === 13) {
                eol = true;
                if (text.charCodeAt(i + 2) === 10)
                  ++I;
              } else if (c === 10) {
                eol = true;
              }
              return text.slice(j + 1, i).replace(/""/g, '"');
            }
            while (I < N) {
              var c = text.charCodeAt(I++),
                  k = 1;
              if (c === 10)
                eol = true;
              else if (c === 13) {
                eol = true;
                if (text.charCodeAt(I) === 10)
                  ++I, ++k;
              } else if (c !== delimiterCode)
                continue;
              return text.slice(j, I - k);
            }
            return text.slice(j);
          }
          while ((t = token()) !== EOF) {
            var a = [];
            while (t !== EOL && t !== EOF) {
              a.push(t);
              t = token();
            }
            if (f && (a = f(a, n++)) == null)
              continue;
            rows.push(a);
          }
          return rows;
        };
        dsv.format = function(rows) {
          if (Array.isArray(rows[0]))
            return dsv.formatRows(rows);
          var fieldSet = new d3_Set(),
              fields = [];
          rows.forEach(function(row) {
            for (var field in row) {
              if (!fieldSet.has(field)) {
                fields.push(fieldSet.add(field));
              }
            }
          });
          return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
            return fields.map(function(field) {
              return formatValue(row[field]);
            }).join(delimiter);
          })).join("\n");
        };
        dsv.formatRows = function(rows) {
          return rows.map(formatRow).join("\n");
        };
        function formatRow(row) {
          return row.map(formatValue).join(delimiter);
        }
        function formatValue(text) {
          return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
        }
        return dsv;
      };
      d3.csv = d3.dsv(",", "text/csv");
      d3.tsv = d3.dsv("	", "text/tab-separated-values");
      var d3_timer_queueHead,
          d3_timer_queueTail,
          d3_timer_interval,
          d3_timer_timeout,
          d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
            setTimeout(callback, 17);
          };
      d3.timer = function() {
        d3_timer.apply(this, arguments);
      };
      function d3_timer(callback, delay, then) {
        var n = arguments.length;
        if (n < 2)
          delay = 0;
        if (n < 3)
          then = Date.now();
        var time = then + delay,
            timer = {
              c: callback,
              t: time,
              n: null
            };
        if (d3_timer_queueTail)
          d3_timer_queueTail.n = timer;
        else
          d3_timer_queueHead = timer;
        d3_timer_queueTail = timer;
        if (!d3_timer_interval) {
          d3_timer_timeout = clearTimeout(d3_timer_timeout);
          d3_timer_interval = 1;
          d3_timer_frame(d3_timer_step);
        }
        return timer;
      }
      function d3_timer_step() {
        var now = d3_timer_mark(),
            delay = d3_timer_sweep() - now;
        if (delay > 24) {
          if (isFinite(delay)) {
            clearTimeout(d3_timer_timeout);
            d3_timer_timeout = setTimeout(d3_timer_step, delay);
          }
          d3_timer_interval = 0;
        } else {
          d3_timer_interval = 1;
          d3_timer_frame(d3_timer_step);
        }
      }
      d3.timer.flush = function() {
        d3_timer_mark();
        d3_timer_sweep();
      };
      function d3_timer_mark() {
        var now = Date.now(),
            timer = d3_timer_queueHead;
        while (timer) {
          if (now >= timer.t && timer.c(now - timer.t))
            timer.c = null;
          timer = timer.n;
        }
        return now;
      }
      function d3_timer_sweep() {
        var t0,
            t1 = d3_timer_queueHead,
            time = Infinity;
        while (t1) {
          if (t1.c) {
            if (t1.t < time)
              time = t1.t;
            t1 = (t0 = t1).n;
          } else {
            t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
          }
        }
        d3_timer_queueTail = t0;
        return time;
      }
      function d3_format_precision(x, p) {
        return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
      }
      d3.round = function(x, n) {
        return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
      };
      var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);
      d3.formatPrefix = function(value, precision) {
        var i = 0;
        if (value = +value) {
          if (value < 0)
            value *= -1;
          if (precision)
            value = d3.round(value, d3_format_precision(value, precision));
          i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
          i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
        }
        return d3_formatPrefixes[8 + i / 3];
      };
      function d3_formatPrefix(d, i) {
        var k = Math.pow(10, abs(8 - i) * 3);
        return {
          scale: i > 8 ? function(d) {
            return d / k;
          } : function(d) {
            return d * k;
          },
          symbol: d
        };
      }
      function d3_locale_numberFormat(locale) {
        var locale_decimal = locale.decimal,
            locale_thousands = locale.thousands,
            locale_grouping = locale.grouping,
            locale_currency = locale.currency,
            formatGroup = locale_grouping && locale_thousands ? function(value, width) {
              var i = value.length,
                  t = [],
                  j = 0,
                  g = locale_grouping[0],
                  length = 0;
              while (i > 0 && g > 0) {
                if (length + g + 1 > width)
                  g = Math.max(1, width - length);
                t.push(value.substring(i -= g, i + g));
                if ((length += g + 1) > width)
                  break;
                g = locale_grouping[j = (j + 1) % locale_grouping.length];
              }
              return t.reverse().join(locale_thousands);
            } : d3_identity;
        return function(specifier) {
          var match = d3_format_re.exec(specifier),
              fill = match[1] || " ",
              align = match[2] || ">",
              sign = match[3] || "-",
              symbol = match[4] || "",
              zfill = match[5],
              width = +match[6],
              comma = match[7],
              precision = match[8],
              type = match[9],
              scale = 1,
              prefix = "",
              suffix = "",
              integer = false,
              exponent = true;
          if (precision)
            precision = +precision.substring(1);
          if (zfill || fill === "0" && align === "=") {
            zfill = fill = "0";
            align = "=";
          }
          switch (type) {
            case "n":
              comma = true;
              type = "g";
              break;
            case "%":
              scale = 100;
              suffix = "%";
              type = "f";
              break;
            case "p":
              scale = 100;
              suffix = "%";
              type = "r";
              break;
            case "b":
            case "o":
            case "x":
            case "X":
              if (symbol === "#")
                prefix = "0" + type.toLowerCase();
            case "c":
              exponent = false;
            case "d":
              integer = true;
              precision = 0;
              break;
            case "s":
              scale = -1;
              type = "r";
              break;
          }
          if (symbol === "$")
            prefix = locale_currency[0], suffix = locale_currency[1];
          if (type == "r" && !precision)
            type = "g";
          if (precision != null) {
            if (type == "g")
              precision = Math.max(1, Math.min(21, precision));
            else if (type == "e" || type == "f")
              precision = Math.max(0, Math.min(20, precision));
          }
          type = d3_format_types.get(type) || d3_format_typeDefault;
          var zcomma = zfill && comma;
          return function(value) {
            var fullSuffix = suffix;
            if (integer && value % 1)
              return "";
            var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
            if (scale < 0) {
              var unit = d3.formatPrefix(value, precision);
              value = unit.scale(value);
              fullSuffix = unit.symbol + suffix;
            } else {
              value *= scale;
            }
            value = type(value, precision);
            var i = value.lastIndexOf("."),
                before,
                after;
            if (i < 0) {
              var j = exponent ? value.lastIndexOf("e") : -1;
              if (j < 0)
                before = value, after = "";
              else
                before = value.substring(0, j), after = value.substring(j);
            } else {
              before = value.substring(0, i);
              after = locale_decimal + value.substring(i + 1);
            }
            if (!zfill && comma)
              before = formatGroup(before, Infinity);
            var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length),
                padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
            if (zcomma)
              before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
            negative += prefix;
            value = before + after;
            return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
          };
        };
      }
      var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
      var d3_format_types = d3.map({
        b: function(x) {
          return x.toString(2);
        },
        c: function(x) {
          return String.fromCharCode(x);
        },
        o: function(x) {
          return x.toString(8);
        },
        x: function(x) {
          return x.toString(16);
        },
        X: function(x) {
          return x.toString(16).toUpperCase();
        },
        g: function(x, p) {
          return x.toPrecision(p);
        },
        e: function(x, p) {
          return x.toExponential(p);
        },
        f: function(x, p) {
          return x.toFixed(p);
        },
        r: function(x, p) {
          return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
        }
      });
      function d3_format_typeDefault(x) {
        return x + "";
      }
      var d3_time = d3.time = {},
          d3_date = Date;
      function d3_date_utc() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
      }
      d3_date_utc.prototype = {
        getDate: function() {
          return this._.getUTCDate();
        },
        getDay: function() {
          return this._.getUTCDay();
        },
        getFullYear: function() {
          return this._.getUTCFullYear();
        },
        getHours: function() {
          return this._.getUTCHours();
        },
        getMilliseconds: function() {
          return this._.getUTCMilliseconds();
        },
        getMinutes: function() {
          return this._.getUTCMinutes();
        },
        getMonth: function() {
          return this._.getUTCMonth();
        },
        getSeconds: function() {
          return this._.getUTCSeconds();
        },
        getTime: function() {
          return this._.getTime();
        },
        getTimezoneOffset: function() {
          return 0;
        },
        valueOf: function() {
          return this._.valueOf();
        },
        setDate: function() {
          d3_time_prototype.setUTCDate.apply(this._, arguments);
        },
        setDay: function() {
          d3_time_prototype.setUTCDay.apply(this._, arguments);
        },
        setFullYear: function() {
          d3_time_prototype.setUTCFullYear.apply(this._, arguments);
        },
        setHours: function() {
          d3_time_prototype.setUTCHours.apply(this._, arguments);
        },
        setMilliseconds: function() {
          d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
        },
        setMinutes: function() {
          d3_time_prototype.setUTCMinutes.apply(this._, arguments);
        },
        setMonth: function() {
          d3_time_prototype.setUTCMonth.apply(this._, arguments);
        },
        setSeconds: function() {
          d3_time_prototype.setUTCSeconds.apply(this._, arguments);
        },
        setTime: function() {
          d3_time_prototype.setTime.apply(this._, arguments);
        }
      };
      var d3_time_prototype = Date.prototype;
      function d3_time_interval(local, step, number) {
        function round(date) {
          var d0 = local(date),
              d1 = offset(d0, 1);
          return date - d0 < d1 - date ? d0 : d1;
        }
        function ceil(date) {
          step(date = local(new d3_date(date - 1)), 1);
          return date;
        }
        function offset(date, k) {
          step(date = new d3_date(+date), k);
          return date;
        }
        function range(t0, t1, dt) {
          var time = ceil(t0),
              times = [];
          if (dt > 1) {
            while (time < t1) {
              if (!(number(time) % dt))
                times.push(new Date(+time));
              step(time, 1);
            }
          } else {
            while (time < t1)
              times.push(new Date(+time)), step(time, 1);
          }
          return times;
        }
        function range_utc(t0, t1, dt) {
          try {
            d3_date = d3_date_utc;
            var utc = new d3_date_utc();
            utc._ = t0;
            return range(utc, t1, dt);
          } finally {
            d3_date = Date;
          }
        }
        local.floor = local;
        local.round = round;
        local.ceil = ceil;
        local.offset = offset;
        local.range = range;
        var utc = local.utc = d3_time_interval_utc(local);
        utc.floor = utc;
        utc.round = d3_time_interval_utc(round);
        utc.ceil = d3_time_interval_utc(ceil);
        utc.offset = d3_time_interval_utc(offset);
        utc.range = range_utc;
        return local;
      }
      function d3_time_interval_utc(method) {
        return function(date, k) {
          try {
            d3_date = d3_date_utc;
            var utc = new d3_date_utc();
            utc._ = date;
            return method(utc, k)._;
          } finally {
            d3_date = Date;
          }
        };
      }
      d3_time.year = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setMonth(0, 1);
        return date;
      }, function(date, offset) {
        date.setFullYear(date.getFullYear() + offset);
      }, function(date) {
        return date.getFullYear();
      });
      d3_time.years = d3_time.year.range;
      d3_time.years.utc = d3_time.year.utc.range;
      d3_time.day = d3_time_interval(function(date) {
        var day = new d3_date(2e3, 0);
        day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        return day;
      }, function(date, offset) {
        date.setDate(date.getDate() + offset);
      }, function(date) {
        return date.getDate() - 1;
      });
      d3_time.days = d3_time.day.range;
      d3_time.days.utc = d3_time.day.utc.range;
      d3_time.dayOfYear = function(date) {
        var year = d3_time.year(date);
        return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
      };
      ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(day, i) {
        i = 7 - i;
        var interval = d3_time[day] = d3_time_interval(function(date) {
          (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
          return date;
        }, function(date, offset) {
          date.setDate(date.getDate() + Math.floor(offset) * 7);
        }, function(date) {
          var day = d3_time.year(date).getDay();
          return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
        });
        d3_time[day + "s"] = interval.range;
        d3_time[day + "s"].utc = interval.utc.range;
        d3_time[day + "OfYear"] = function(date) {
          var day = d3_time.year(date).getDay();
          return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
        };
      });
      d3_time.week = d3_time.sunday;
      d3_time.weeks = d3_time.sunday.range;
      d3_time.weeks.utc = d3_time.sunday.utc.range;
      d3_time.weekOfYear = d3_time.sundayOfYear;
      function d3_locale_timeFormat(locale) {
        var locale_dateTime = locale.dateTime,
            locale_date = locale.date,
            locale_time = locale.time,
            locale_periods = locale.periods,
            locale_days = locale.days,
            locale_shortDays = locale.shortDays,
            locale_months = locale.months,
            locale_shortMonths = locale.shortMonths;
        function d3_time_format(template) {
          var n = template.length;
          function format(date) {
            var string = [],
                i = -1,
                j = 0,
                c,
                p,
                f;
            while (++i < n) {
              if (template.charCodeAt(i) === 37) {
                string.push(template.slice(j, i));
                if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null)
                  c = template.charAt(++i);
                if (f = d3_time_formats[c])
                  c = f(date, p == null ? c === "e" ? " " : "0" : p);
                string.push(c);
                j = i + 1;
              }
            }
            string.push(template.slice(j, i));
            return string.join("");
          }
          format.parse = function(string) {
            var d = {
              y: 1900,
              m: 0,
              d: 1,
              H: 0,
              M: 0,
              S: 0,
              L: 0,
              Z: null
            },
                i = d3_time_parse(d, template, string, 0);
            if (i != string.length)
              return null;
            if ("p" in d)
              d.H = d.H % 12 + d.p * 12;
            var localZ = d.Z != null && d3_date !== d3_date_utc,
                date = new (localZ ? d3_date_utc : d3_date)();
            if ("j" in d)
              date.setFullYear(d.y, 0, d.j);
            else if ("W" in d || "U" in d) {
              if (!("w" in d))
                d.w = "W" in d ? 1 : 0;
              date.setFullYear(d.y, 0, 1);
              date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
            } else
              date.setFullYear(d.y, d.m, d.d);
            date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
            return localZ ? date._ : date;
          };
          format.toString = function() {
            return template;
          };
          return format;
        }
        function d3_time_parse(date, template, string, j) {
          var c,
              p,
              t,
              i = 0,
              n = template.length,
              m = string.length;
          while (i < n) {
            if (j >= m)
              return -1;
            c = template.charCodeAt(i++);
            if (c === 37) {
              t = template.charAt(i++);
              p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
              if (!p || (j = p(date, string, j)) < 0)
                return -1;
            } else if (c != string.charCodeAt(j++)) {
              return -1;
            }
          }
          return j;
        }
        d3_time_format.utc = function(template) {
          var local = d3_time_format(template);
          function format(date) {
            try {
              d3_date = d3_date_utc;
              var utc = new d3_date();
              utc._ = date;
              return local(utc);
            } finally {
              d3_date = Date;
            }
          }
          format.parse = function(string) {
            try {
              d3_date = d3_date_utc;
              var date = local.parse(string);
              return date && date._;
            } finally {
              d3_date = Date;
            }
          };
          format.toString = local.toString;
          return format;
        };
        d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
        var d3_time_periodLookup = d3.map(),
            d3_time_dayRe = d3_time_formatRe(locale_days),
            d3_time_dayLookup = d3_time_formatLookup(locale_days),
            d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays),
            d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays),
            d3_time_monthRe = d3_time_formatRe(locale_months),
            d3_time_monthLookup = d3_time_formatLookup(locale_months),
            d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths),
            d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
        locale_periods.forEach(function(p, i) {
          d3_time_periodLookup.set(p.toLowerCase(), i);
        });
        var d3_time_formats = {
          a: function(d) {
            return locale_shortDays[d.getDay()];
          },
          A: function(d) {
            return locale_days[d.getDay()];
          },
          b: function(d) {
            return locale_shortMonths[d.getMonth()];
          },
          B: function(d) {
            return locale_months[d.getMonth()];
          },
          c: d3_time_format(locale_dateTime),
          d: function(d, p) {
            return d3_time_formatPad(d.getDate(), p, 2);
          },
          e: function(d, p) {
            return d3_time_formatPad(d.getDate(), p, 2);
          },
          H: function(d, p) {
            return d3_time_formatPad(d.getHours(), p, 2);
          },
          I: function(d, p) {
            return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
          },
          j: function(d, p) {
            return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
          },
          L: function(d, p) {
            return d3_time_formatPad(d.getMilliseconds(), p, 3);
          },
          m: function(d, p) {
            return d3_time_formatPad(d.getMonth() + 1, p, 2);
          },
          M: function(d, p) {
            return d3_time_formatPad(d.getMinutes(), p, 2);
          },
          p: function(d) {
            return locale_periods[+(d.getHours() >= 12)];
          },
          S: function(d, p) {
            return d3_time_formatPad(d.getSeconds(), p, 2);
          },
          U: function(d, p) {
            return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
          },
          w: function(d) {
            return d.getDay();
          },
          W: function(d, p) {
            return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
          },
          x: d3_time_format(locale_date),
          X: d3_time_format(locale_time),
          y: function(d, p) {
            return d3_time_formatPad(d.getFullYear() % 100, p, 2);
          },
          Y: function(d, p) {
            return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
          },
          Z: d3_time_zone,
          "%": function() {
            return "%";
          }
        };
        var d3_time_parsers = {
          a: d3_time_parseWeekdayAbbrev,
          A: d3_time_parseWeekday,
          b: d3_time_parseMonthAbbrev,
          B: d3_time_parseMonth,
          c: d3_time_parseLocaleFull,
          d: d3_time_parseDay,
          e: d3_time_parseDay,
          H: d3_time_parseHour24,
          I: d3_time_parseHour24,
          j: d3_time_parseDayOfYear,
          L: d3_time_parseMilliseconds,
          m: d3_time_parseMonthNumber,
          M: d3_time_parseMinutes,
          p: d3_time_parseAmPm,
          S: d3_time_parseSeconds,
          U: d3_time_parseWeekNumberSunday,
          w: d3_time_parseWeekdayNumber,
          W: d3_time_parseWeekNumberMonday,
          x: d3_time_parseLocaleDate,
          X: d3_time_parseLocaleTime,
          y: d3_time_parseYear,
          Y: d3_time_parseFullYear,
          Z: d3_time_parseZone,
          "%": d3_time_parseLiteralPercent
        };
        function d3_time_parseWeekdayAbbrev(date, string, i) {
          d3_time_dayAbbrevRe.lastIndex = 0;
          var n = d3_time_dayAbbrevRe.exec(string.slice(i));
          return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseWeekday(date, string, i) {
          d3_time_dayRe.lastIndex = 0;
          var n = d3_time_dayRe.exec(string.slice(i));
          return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonthAbbrev(date, string, i) {
          d3_time_monthAbbrevRe.lastIndex = 0;
          var n = d3_time_monthAbbrevRe.exec(string.slice(i));
          return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonth(date, string, i) {
          d3_time_monthRe.lastIndex = 0;
          var n = d3_time_monthRe.exec(string.slice(i));
          return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseLocaleFull(date, string, i) {
          return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
        }
        function d3_time_parseLocaleDate(date, string, i) {
          return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
        }
        function d3_time_parseLocaleTime(date, string, i) {
          return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
        }
        function d3_time_parseAmPm(date, string, i) {
          var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
          return n == null ? -1 : (date.p = n, i);
        }
        return d3_time_format;
      }
      var d3_time_formatPads = {
        "-": "",
        _: " ",
        "0": "0"
      },
          d3_time_numberRe = /^\s*\d+/,
          d3_time_percentRe = /^%/;
      function d3_time_formatPad(value, fill, width) {
        var sign = value < 0 ? "-" : "",
            string = (sign ? -value : value) + "",
            length = string.length;
        return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
      }
      function d3_time_formatRe(names) {
        return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
      }
      function d3_time_formatLookup(names) {
        var map = new d3_Map(),
            i = -1,
            n = names.length;
        while (++i < n)
          map.set(names[i].toLowerCase(), i);
        return map;
      }
      function d3_time_parseWeekdayNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 1));
        return n ? (date.w = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseWeekNumberSunday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i));
        return n ? (date.U = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseWeekNumberMonday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i));
        return n ? (date.W = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseFullYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 4));
        return n ? (date.y = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
      }
      function d3_time_parseZone(date, string, i) {
        return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1;
      }
      function d3_time_expandYear(d) {
        return d + (d > 68 ? 1900 : 2e3);
      }
      function d3_time_parseMonthNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
      }
      function d3_time_parseDay(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.d = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseDayOfYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 3));
        return n ? (date.j = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseHour24(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.H = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseMinutes(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.M = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseSeconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.S = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseMilliseconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 3));
        return n ? (date.L = +n[0], i + n[0].length) : -1;
      }
      function d3_time_zone(d) {
        var z = d.getTimezoneOffset(),
            zs = z > 0 ? "-" : "+",
            zh = abs(z) / 60 | 0,
            zm = abs(z) % 60;
        return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
      }
      function d3_time_parseLiteralPercent(date, string, i) {
        d3_time_percentRe.lastIndex = 0;
        var n = d3_time_percentRe.exec(string.slice(i, i + 1));
        return n ? i + n[0].length : -1;
      }
      function d3_time_formatMulti(formats) {
        var n = formats.length,
            i = -1;
        while (++i < n)
          formats[i][0] = this(formats[i][0]);
        return function(date) {
          var i = 0,
              f = formats[i];
          while (!f[1](date))
            f = formats[++i];
          return f[0](date);
        };
      }
      d3.locale = function(locale) {
        return {
          numberFormat: d3_locale_numberFormat(locale),
          timeFormat: d3_locale_timeFormat(locale)
        };
      };
      var d3_locale_enUS = d3.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      });
      d3.format = d3_locale_enUS.numberFormat;
      d3.geo = {};
      function d3_adder() {}
      d3_adder.prototype = {
        s: 0,
        t: 0,
        add: function(y) {
          d3_adderSum(y, this.t, d3_adderTemp);
          d3_adderSum(d3_adderTemp.s, this.s, this);
          if (this.s)
            this.t += d3_adderTemp.t;
          else
            this.s = d3_adderTemp.t;
        },
        reset: function() {
          this.s = this.t = 0;
        },
        valueOf: function() {
          return this.s;
        }
      };
      var d3_adderTemp = new d3_adder();
      function d3_adderSum(a, b, o) {
        var x = o.s = a + b,
            bv = x - a,
            av = x - bv;
        o.t = a - av + (b - bv);
      }
      d3.geo.stream = function(object, listener) {
        if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
          d3_geo_streamObjectType[object.type](object, listener);
        } else {
          d3_geo_streamGeometry(object, listener);
        }
      };
      function d3_geo_streamGeometry(geometry, listener) {
        if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
          d3_geo_streamGeometryType[geometry.type](geometry, listener);
        }
      }
      var d3_geo_streamObjectType = {
        Feature: function(feature, listener) {
          d3_geo_streamGeometry(feature.geometry, listener);
        },
        FeatureCollection: function(object, listener) {
          var features = object.features,
              i = -1,
              n = features.length;
          while (++i < n)
            d3_geo_streamGeometry(features[i].geometry, listener);
        }
      };
      var d3_geo_streamGeometryType = {
        Sphere: function(object, listener) {
          listener.sphere();
        },
        Point: function(object, listener) {
          object = object.coordinates;
          listener.point(object[0], object[1], object[2]);
        },
        MultiPoint: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            object = coordinates[i], listener.point(object[0], object[1], object[2]);
        },
        LineString: function(object, listener) {
          d3_geo_streamLine(object.coordinates, listener, 0);
        },
        MultiLineString: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            d3_geo_streamLine(coordinates[i], listener, 0);
        },
        Polygon: function(object, listener) {
          d3_geo_streamPolygon(object.coordinates, listener);
        },
        MultiPolygon: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            d3_geo_streamPolygon(coordinates[i], listener);
        },
        GeometryCollection: function(object, listener) {
          var geometries = object.geometries,
              i = -1,
              n = geometries.length;
          while (++i < n)
            d3_geo_streamGeometry(geometries[i], listener);
        }
      };
      function d3_geo_streamLine(coordinates, listener, closed) {
        var i = -1,
            n = coordinates.length - closed,
            coordinate;
        listener.lineStart();
        while (++i < n)
          coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
        listener.lineEnd();
      }
      function d3_geo_streamPolygon(coordinates, listener) {
        var i = -1,
            n = coordinates.length;
        listener.polygonStart();
        while (++i < n)
          d3_geo_streamLine(coordinates[i], listener, 1);
        listener.polygonEnd();
      }
      d3.geo.area = function(object) {
        d3_geo_areaSum = 0;
        d3.geo.stream(object, d3_geo_area);
        return d3_geo_areaSum;
      };
      var d3_geo_areaSum,
          d3_geo_areaRingSum = new d3_adder();
      var d3_geo_area = {
        sphere: function() {
          d3_geo_areaSum += 4 * π;
        },
        point: d3_noop,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: function() {
          d3_geo_areaRingSum.reset();
          d3_geo_area.lineStart = d3_geo_areaRingStart;
        },
        polygonEnd: function() {
          var area = 2 * d3_geo_areaRingSum;
          d3_geo_areaSum += area < 0 ? 4 * π + area : area;
          d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
        }
      };
      function d3_geo_areaRingStart() {
        var λ00,
            φ00,
            λ0,
            cosφ0,
            sinφ0;
        d3_geo_area.point = function(λ, φ) {
          d3_geo_area.point = nextPoint;
          λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          φ = φ * d3_radians / 2 + π / 4;
          var dλ = λ - λ0,
              sdλ = dλ >= 0 ? 1 : -1,
              adλ = sdλ * dλ,
              cosφ = Math.cos(φ),
              sinφ = Math.sin(φ),
              k = sinφ0 * sinφ,
              u = cosφ0 * cosφ + k * Math.cos(adλ),
              v = k * sdλ * Math.sin(adλ);
          d3_geo_areaRingSum.add(Math.atan2(v, u));
          λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
        }
        d3_geo_area.lineEnd = function() {
          nextPoint(λ00, φ00);
        };
      }
      function d3_geo_cartesian(spherical) {
        var λ = spherical[0],
            φ = spherical[1],
            cosφ = Math.cos(φ);
        return [cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ)];
      }
      function d3_geo_cartesianDot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }
      function d3_geo_cartesianCross(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
      }
      function d3_geo_cartesianAdd(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        a[2] += b[2];
      }
      function d3_geo_cartesianScale(vector, k) {
        return [vector[0] * k, vector[1] * k, vector[2] * k];
      }
      function d3_geo_cartesianNormalize(d) {
        var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
        d[0] /= l;
        d[1] /= l;
        d[2] /= l;
      }
      function d3_geo_spherical(cartesian) {
        return [Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2])];
      }
      function d3_geo_sphericalEqual(a, b) {
        return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
      }
      d3.geo.bounds = function() {
        var λ0,
            φ0,
            λ1,
            φ1,
            λ_,
            λ__,
            φ__,
            p0,
            dλSum,
            ranges,
            range;
        var bound = {
          point: point,
          lineStart: lineStart,
          lineEnd: lineEnd,
          polygonStart: function() {
            bound.point = ringPoint;
            bound.lineStart = ringStart;
            bound.lineEnd = ringEnd;
            dλSum = 0;
            d3_geo_area.polygonStart();
          },
          polygonEnd: function() {
            d3_geo_area.polygonEnd();
            bound.point = point;
            bound.lineStart = lineStart;
            bound.lineEnd = lineEnd;
            if (d3_geo_areaRingSum < 0)
              λ0 = -(λ1 = 180), φ0 = -(φ1 = 90);
            else if (dλSum > ε)
              φ1 = 90;
            else if (dλSum < -ε)
              φ0 = -90;
            range[0] = λ0, range[1] = λ1;
          }
        };
        function point(λ, φ) {
          ranges.push(range = [λ0 = λ, λ1 = λ]);
          if (φ < φ0)
            φ0 = φ;
          if (φ > φ1)
            φ1 = φ;
        }
        function linePoint(λ, φ) {
          var p = d3_geo_cartesian([λ * d3_radians, φ * d3_radians]);
          if (p0) {
            var normal = d3_geo_cartesianCross(p0, p),
                equatorial = [normal[1], -normal[0], 0],
                inflection = d3_geo_cartesianCross(equatorial, normal);
            d3_geo_cartesianNormalize(inflection);
            inflection = d3_geo_spherical(inflection);
            var dλ = λ - λ_,
                s = dλ > 0 ? 1 : -1,
                λi = inflection[0] * d3_degrees * s,
                antimeridian = abs(dλ) > 180;
            if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
              var φi = inflection[1] * d3_degrees;
              if (φi > φ1)
                φ1 = φi;
            } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
              var φi = -inflection[1] * d3_degrees;
              if (φi < φ0)
                φ0 = φi;
            } else {
              if (φ < φ0)
                φ0 = φ;
              if (φ > φ1)
                φ1 = φ;
            }
            if (antimeridian) {
              if (λ < λ_) {
                if (angle(λ0, λ) > angle(λ0, λ1))
                  λ1 = λ;
              } else {
                if (angle(λ, λ1) > angle(λ0, λ1))
                  λ0 = λ;
              }
            } else {
              if (λ1 >= λ0) {
                if (λ < λ0)
                  λ0 = λ;
                if (λ > λ1)
                  λ1 = λ;
              } else {
                if (λ > λ_) {
                  if (angle(λ0, λ) > angle(λ0, λ1))
                    λ1 = λ;
                } else {
                  if (angle(λ, λ1) > angle(λ0, λ1))
                    λ0 = λ;
                }
              }
            }
          } else {
            point(λ, φ);
          }
          p0 = p, λ_ = λ;
        }
        function lineStart() {
          bound.point = linePoint;
        }
        function lineEnd() {
          range[0] = λ0, range[1] = λ1;
          bound.point = point;
          p0 = null;
        }
        function ringPoint(λ, φ) {
          if (p0) {
            var dλ = λ - λ_;
            dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
          } else
            λ__ = λ, φ__ = φ;
          d3_geo_area.point(λ, φ);
          linePoint(λ, φ);
        }
        function ringStart() {
          d3_geo_area.lineStart();
        }
        function ringEnd() {
          ringPoint(λ__, φ__);
          d3_geo_area.lineEnd();
          if (abs(dλSum) > ε)
            λ0 = -(λ1 = 180);
          range[0] = λ0, range[1] = λ1;
          p0 = null;
        }
        function angle(λ0, λ1) {
          return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
        }
        function compareRanges(a, b) {
          return a[0] - b[0];
        }
        function withinRange(x, range) {
          return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
        }
        return function(feature) {
          φ1 = λ1 = -(λ0 = φ0 = Infinity);
          ranges = [];
          d3.geo.stream(feature, bound);
          var n = ranges.length;
          if (n) {
            ranges.sort(compareRanges);
            for (var i = 1,
                a = ranges[0],
                b,
                merged = [a]; i < n; ++i) {
              b = ranges[i];
              if (withinRange(b[0], a) || withinRange(b[1], a)) {
                if (angle(a[0], b[1]) > angle(a[0], a[1]))
                  a[1] = b[1];
                if (angle(b[0], a[1]) > angle(a[0], a[1]))
                  a[0] = b[0];
              } else {
                merged.push(a = b);
              }
            }
            var best = -Infinity,
                dλ;
            for (var n = merged.length - 1,
                i = 0,
                a = merged[n],
                b; i <= n; a = b, ++i) {
              b = merged[i];
              if ((dλ = angle(a[1], b[0])) > best)
                best = dλ, λ0 = b[0], λ1 = a[1];
            }
          }
          ranges = range = null;
          return λ0 === Infinity || φ0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[λ0, φ0], [λ1, φ1]];
        };
      }();
      d3.geo.centroid = function(object) {
        d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
        d3.geo.stream(object, d3_geo_centroid);
        var x = d3_geo_centroidX2,
            y = d3_geo_centroidY2,
            z = d3_geo_centroidZ2,
            m = x * x + y * y + z * z;
        if (m < ε2) {
          x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
          if (d3_geo_centroidW1 < ε)
            x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
          m = x * x + y * y + z * z;
          if (m < ε2)
            return [NaN, NaN];
        }
        return [Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees];
      };
      var d3_geo_centroidW0,
          d3_geo_centroidW1,
          d3_geo_centroidX0,
          d3_geo_centroidY0,
          d3_geo_centroidZ0,
          d3_geo_centroidX1,
          d3_geo_centroidY1,
          d3_geo_centroidZ1,
          d3_geo_centroidX2,
          d3_geo_centroidY2,
          d3_geo_centroidZ2;
      var d3_geo_centroid = {
        sphere: d3_noop,
        point: d3_geo_centroidPoint,
        lineStart: d3_geo_centroidLineStart,
        lineEnd: d3_geo_centroidLineEnd,
        polygonStart: function() {
          d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
        },
        polygonEnd: function() {
          d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
        }
      };
      function d3_geo_centroidPoint(λ, φ) {
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians);
        d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
      }
      function d3_geo_centroidPointXYZ(x, y, z) {
        ++d3_geo_centroidW0;
        d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
        d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
        d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
      }
      function d3_geo_centroidLineStart() {
        var x0,
            y0,
            z0;
        d3_geo_centroid.point = function(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians);
          x0 = cosφ * Math.cos(λ);
          y0 = cosφ * Math.sin(λ);
          z0 = Math.sin(φ);
          d3_geo_centroid.point = nextPoint;
          d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians),
              x = cosφ * Math.cos(λ),
              y = cosφ * Math.sin(λ),
              z = Math.sin(φ),
              w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
          d3_geo_centroidW1 += w;
          d3_geo_centroidX1 += w * (x0 + (x0 = x));
          d3_geo_centroidY1 += w * (y0 + (y0 = y));
          d3_geo_centroidZ1 += w * (z0 + (z0 = z));
          d3_geo_centroidPointXYZ(x0, y0, z0);
        }
      }
      function d3_geo_centroidLineEnd() {
        d3_geo_centroid.point = d3_geo_centroidPoint;
      }
      function d3_geo_centroidRingStart() {
        var λ00,
            φ00,
            x0,
            y0,
            z0;
        d3_geo_centroid.point = function(λ, φ) {
          λ00 = λ, φ00 = φ;
          d3_geo_centroid.point = nextPoint;
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians);
          x0 = cosφ * Math.cos(λ);
          y0 = cosφ * Math.sin(λ);
          z0 = Math.sin(φ);
          d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        d3_geo_centroid.lineEnd = function() {
          nextPoint(λ00, φ00);
          d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
          d3_geo_centroid.point = d3_geo_centroidPoint;
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians),
              x = cosφ * Math.cos(λ),
              y = cosφ * Math.sin(λ),
              z = Math.sin(φ),
              cx = y0 * z - z0 * y,
              cy = z0 * x - x0 * z,
              cz = x0 * y - y0 * x,
              m = Math.sqrt(cx * cx + cy * cy + cz * cz),
              u = x0 * x + y0 * y + z0 * z,
              v = m && -d3_acos(u) / m,
              w = Math.atan2(m, u);
          d3_geo_centroidX2 += v * cx;
          d3_geo_centroidY2 += v * cy;
          d3_geo_centroidZ2 += v * cz;
          d3_geo_centroidW1 += w;
          d3_geo_centroidX1 += w * (x0 + (x0 = x));
          d3_geo_centroidY1 += w * (y0 + (y0 = y));
          d3_geo_centroidZ1 += w * (z0 + (z0 = z));
          d3_geo_centroidPointXYZ(x0, y0, z0);
        }
      }
      function d3_geo_compose(a, b) {
        function compose(x, y) {
          return x = a(x, y), b(x[0], x[1]);
        }
        if (a.invert && b.invert)
          compose.invert = function(x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
          };
        return compose;
      }
      function d3_true() {
        return true;
      }
      function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
        var subject = [],
            clip = [];
        segments.forEach(function(segment) {
          if ((n = segment.length - 1) <= 0)
            return;
          var n,
              p0 = segment[0],
              p1 = segment[n];
          if (d3_geo_sphericalEqual(p0, p1)) {
            listener.lineStart();
            for (var i = 0; i < n; ++i)
              listener.point((p0 = segment[i])[0], p0[1]);
            listener.lineEnd();
            return;
          }
          var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true),
              b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
          a.o = b;
          subject.push(a);
          clip.push(b);
          a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
          b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
          a.o = b;
          subject.push(a);
          clip.push(b);
        });
        clip.sort(compare);
        d3_geo_clipPolygonLinkCircular(subject);
        d3_geo_clipPolygonLinkCircular(clip);
        if (!subject.length)
          return;
        for (var i = 0,
            entry = clipStartInside,
            n = clip.length; i < n; ++i) {
          clip[i].e = entry = !entry;
        }
        var start = subject[0],
            points,
            point;
        while (1) {
          var current = start,
              isSubject = true;
          while (current.v)
            if ((current = current.n) === start)
              return;
          points = current.z;
          listener.lineStart();
          do {
            current.v = current.o.v = true;
            if (current.e) {
              if (isSubject) {
                for (var i = 0,
                    n = points.length; i < n; ++i)
                  listener.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.n.x, 1, listener);
              }
              current = current.n;
            } else {
              if (isSubject) {
                points = current.p.z;
                for (var i = points.length - 1; i >= 0; --i)
                  listener.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.p.x, -1, listener);
              }
              current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
          } while (!current.v);
          listener.lineEnd();
        }
      }
      function d3_geo_clipPolygonLinkCircular(array) {
        if (!(n = array.length))
          return;
        var n,
            i = 0,
            a = array[0],
            b;
        while (++i < n) {
          a.n = b = array[i];
          b.p = a;
          a = b;
        }
        a.n = b = array[0];
        b.p = a;
      }
      function d3_geo_clipPolygonIntersection(point, points, other, entry) {
        this.x = point;
        this.z = points;
        this.o = other;
        this.e = entry;
        this.v = false;
        this.n = this.p = null;
      }
      function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
        return function(rotate, listener) {
          var line = clipLine(listener),
              rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
          var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              clip.point = pointRing;
              clip.lineStart = ringStart;
              clip.lineEnd = ringEnd;
              segments = [];
              polygon = [];
            },
            polygonEnd: function() {
              clip.point = point;
              clip.lineStart = lineStart;
              clip.lineEnd = lineEnd;
              segments = d3.merge(segments);
              var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
              if (segments.length) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
              } else if (clipStartInside) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                listener.lineStart();
                interpolate(null, null, 1, listener);
                listener.lineEnd();
              }
              if (polygonStarted)
                listener.polygonEnd(), polygonStarted = false;
              segments = polygon = null;
            },
            sphere: function() {
              listener.polygonStart();
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
              listener.polygonEnd();
            }
          };
          function point(λ, φ) {
            var point = rotate(λ, φ);
            if (pointVisible(λ = point[0], φ = point[1]))
              listener.point(λ, φ);
          }
          function pointLine(λ, φ) {
            var point = rotate(λ, φ);
            line.point(point[0], point[1]);
          }
          function lineStart() {
            clip.point = pointLine;
            line.lineStart();
          }
          function lineEnd() {
            clip.point = point;
            line.lineEnd();
          }
          var segments;
          var buffer = d3_geo_clipBufferListener(),
              ringListener = clipLine(buffer),
              polygonStarted = false,
              polygon,
              ring;
          function pointRing(λ, φ) {
            ring.push([λ, φ]);
            var point = rotate(λ, φ);
            ringListener.point(point[0], point[1]);
          }
          function ringStart() {
            ringListener.lineStart();
            ring = [];
          }
          function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringListener.lineEnd();
            var clean = ringListener.clean(),
                ringSegments = buffer.buffer(),
                segment,
                n = ringSegments.length;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n)
              return;
            if (clean & 1) {
              segment = ringSegments[0];
              var n = segment.length - 1,
                  i = -1,
                  point;
              if (n > 0) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                listener.lineStart();
                while (++i < n)
                  listener.point((point = segment[i])[0], point[1]);
                listener.lineEnd();
              }
              return;
            }
            if (n > 1 && clean & 2)
              ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
          }
          return clip;
        };
      }
      function d3_geo_clipSegmentLength1(segment) {
        return segment.length > 1;
      }
      function d3_geo_clipBufferListener() {
        var lines = [],
            line;
        return {
          lineStart: function() {
            lines.push(line = []);
          },
          point: function(λ, φ) {
            line.push([λ, φ]);
          },
          lineEnd: d3_noop,
          buffer: function() {
            var buffer = lines;
            lines = [];
            line = null;
            return buffer;
          },
          rejoin: function() {
            if (lines.length > 1)
              lines.push(lines.pop().concat(lines.shift()));
          }
        };
      }
      function d3_geo_clipSort(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
      }
      var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [-π, -π / 2]);
      function d3_geo_clipAntimeridianLine(listener) {
        var λ0 = NaN,
            φ0 = NaN,
            sλ0 = NaN,
            clean;
        return {
          lineStart: function() {
            listener.lineStart();
            clean = 1;
          },
          point: function(λ1, φ1) {
            var sλ1 = λ1 > 0 ? π : -π,
                dλ = abs(λ1 - λ0);
            if (abs(dλ - π) < ε) {
              listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
              listener.point(sλ0, φ0);
              listener.lineEnd();
              listener.lineStart();
              listener.point(sλ1, φ0);
              listener.point(λ1, φ0);
              clean = 0;
            } else if (sλ0 !== sλ1 && dλ >= π) {
              if (abs(λ0 - sλ0) < ε)
                λ0 -= sλ0 * ε;
              if (abs(λ1 - sλ1) < ε)
                λ1 -= sλ1 * ε;
              φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
              listener.point(sλ0, φ0);
              listener.lineEnd();
              listener.lineStart();
              listener.point(sλ1, φ0);
              clean = 0;
            }
            listener.point(λ0 = λ1, φ0 = φ1);
            sλ0 = sλ1;
          },
          lineEnd: function() {
            listener.lineEnd();
            λ0 = φ0 = NaN;
          },
          clean: function() {
            return 2 - clean;
          }
        };
      }
      function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
        var cosφ0,
            cosφ1,
            sinλ0_λ1 = Math.sin(λ0 - λ1);
        return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
      }
      function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
        var φ;
        if (from == null) {
          φ = direction * halfπ;
          listener.point(-π, φ);
          listener.point(0, φ);
          listener.point(π, φ);
          listener.point(π, 0);
          listener.point(π, -φ);
          listener.point(0, -φ);
          listener.point(-π, -φ);
          listener.point(-π, 0);
          listener.point(-π, φ);
        } else if (abs(from[0] - to[0]) > ε) {
          var s = from[0] < to[0] ? π : -π;
          φ = direction * s / 2;
          listener.point(-s, φ);
          listener.point(0, φ);
          listener.point(s, φ);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function d3_geo_pointInPolygon(point, polygon) {
        var meridian = point[0],
            parallel = point[1],
            meridianNormal = [Math.sin(meridian), -Math.cos(meridian), 0],
            polarAngle = 0,
            winding = 0;
        d3_geo_areaRingSum.reset();
        for (var i = 0,
            n = polygon.length; i < n; ++i) {
          var ring = polygon[i],
              m = ring.length;
          if (!m)
            continue;
          var point0 = ring[0],
              λ0 = point0[0],
              φ0 = point0[1] / 2 + π / 4,
              sinφ0 = Math.sin(φ0),
              cosφ0 = Math.cos(φ0),
              j = 1;
          while (true) {
            if (j === m)
              j = 0;
            point = ring[j];
            var λ = point[0],
                φ = point[1] / 2 + π / 4,
                sinφ = Math.sin(φ),
                cosφ = Math.cos(φ),
                dλ = λ - λ0,
                sdλ = dλ >= 0 ? 1 : -1,
                adλ = sdλ * dλ,
                antimeridian = adλ > π,
                k = sinφ0 * sinφ;
            d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
            polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
            if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
              var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
              d3_geo_cartesianNormalize(arc);
              var intersection = d3_geo_cartesianCross(meridianNormal, arc);
              d3_geo_cartesianNormalize(intersection);
              var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
              if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
                winding += antimeridian ^ dλ >= 0 ? 1 : -1;
              }
            }
            if (!j++)
              break;
            λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
          }
        }
        return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
      }
      function d3_geo_clipCircle(radius) {
        var cr = Math.cos(radius),
            smallRadius = cr > 0,
            notHemisphere = abs(cr) > ε,
            interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
        return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-π, radius - π]);
        function visible(λ, φ) {
          return Math.cos(λ) * Math.cos(φ) > cr;
        }
        function clipLine(listener) {
          var point0,
              c0,
              v0,
              v00,
              clean;
          return {
            lineStart: function() {
              v00 = v0 = false;
              clean = 1;
            },
            point: function(λ, φ) {
              var point1 = [λ, φ],
                  point2,
                  v = visible(λ, φ),
                  c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
              if (!point0 && (v00 = v0 = v))
                listener.lineStart();
              if (v !== v0) {
                point2 = intersect(point0, point1);
                if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                  point1[0] += ε;
                  point1[1] += ε;
                  v = visible(point1[0], point1[1]);
                }
              }
              if (v !== v0) {
                clean = 0;
                if (v) {
                  listener.lineStart();
                  point2 = intersect(point1, point0);
                  listener.point(point2[0], point2[1]);
                } else {
                  point2 = intersect(point0, point1);
                  listener.point(point2[0], point2[1]);
                  listener.lineEnd();
                }
                point0 = point2;
              } else if (notHemisphere && point0 && smallRadius ^ v) {
                var t;
                if (!(c & c0) && (t = intersect(point1, point0, true))) {
                  clean = 0;
                  if (smallRadius) {
                    listener.lineStart();
                    listener.point(t[0][0], t[0][1]);
                    listener.point(t[1][0], t[1][1]);
                    listener.lineEnd();
                  } else {
                    listener.point(t[1][0], t[1][1]);
                    listener.lineEnd();
                    listener.lineStart();
                    listener.point(t[0][0], t[0][1]);
                  }
                }
              }
              if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
                listener.point(point1[0], point1[1]);
              }
              point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function() {
              if (v0)
                listener.lineEnd();
              point0 = null;
            },
            clean: function() {
              return clean | (v00 && v0) << 1;
            }
          };
        }
        function intersect(a, b, two) {
          var pa = d3_geo_cartesian(a),
              pb = d3_geo_cartesian(b);
          var n1 = [1, 0, 0],
              n2 = d3_geo_cartesianCross(pa, pb),
              n2n2 = d3_geo_cartesianDot(n2, n2),
              n1n2 = n2[0],
              determinant = n2n2 - n1n2 * n1n2;
          if (!determinant)
            return !two && a;
          var c1 = cr * n2n2 / determinant,
              c2 = -cr * n1n2 / determinant,
              n1xn2 = d3_geo_cartesianCross(n1, n2),
              A = d3_geo_cartesianScale(n1, c1),
              B = d3_geo_cartesianScale(n2, c2);
          d3_geo_cartesianAdd(A, B);
          var u = n1xn2,
              w = d3_geo_cartesianDot(A, u),
              uu = d3_geo_cartesianDot(u, u),
              t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
          if (t2 < 0)
            return;
          var t = Math.sqrt(t2),
              q = d3_geo_cartesianScale(u, (-w - t) / uu);
          d3_geo_cartesianAdd(q, A);
          q = d3_geo_spherical(q);
          if (!two)
            return q;
          var λ0 = a[0],
              λ1 = b[0],
              φ0 = a[1],
              φ1 = b[1],
              z;
          if (λ1 < λ0)
            z = λ0, λ0 = λ1, λ1 = z;
          var δλ = λ1 - λ0,
              polar = abs(δλ - π) < ε,
              meridian = polar || δλ < ε;
          if (!polar && φ1 < φ0)
            z = φ0, φ0 = φ1, φ1 = z;
          if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
            var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
            d3_geo_cartesianAdd(q1, A);
            return [q, d3_geo_spherical(q1)];
          }
        }
        function code(λ, φ) {
          var r = smallRadius ? radius : π - radius,
              code = 0;
          if (λ < -r)
            code |= 1;
          else if (λ > r)
            code |= 2;
          if (φ < -r)
            code |= 4;
          else if (φ > r)
            code |= 8;
          return code;
        }
      }
      function d3_geom_clipLine(x0, y0, x1, y1) {
        return function(line) {
          var a = line.a,
              b = line.b,
              ax = a.x,
              ay = a.y,
              bx = b.x,
              by = b.y,
              t0 = 0,
              t1 = 1,
              dx = bx - ax,
              dy = by - ay,
              r;
          r = x0 - ax;
          if (!dx && r > 0)
            return;
          r /= dx;
          if (dx < 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          } else if (dx > 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          }
          r = x1 - ax;
          if (!dx && r < 0)
            return;
          r /= dx;
          if (dx < 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          } else if (dx > 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          }
          r = y0 - ay;
          if (!dy && r > 0)
            return;
          r /= dy;
          if (dy < 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          } else if (dy > 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          }
          r = y1 - ay;
          if (!dy && r < 0)
            return;
          r /= dy;
          if (dy < 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          } else if (dy > 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          }
          if (t0 > 0)
            line.a = {
              x: ax + t0 * dx,
              y: ay + t0 * dy
            };
          if (t1 < 1)
            line.b = {
              x: ax + t1 * dx,
              y: ay + t1 * dy
            };
          return line;
        };
      }
      var d3_geo_clipExtentMAX = 1e9;
      d3.geo.clipExtent = function() {
        var x0,
            y0,
            x1,
            y1,
            stream,
            clip,
            clipExtent = {
              stream: function(output) {
                if (stream)
                  stream.valid = false;
                stream = clip(output);
                stream.valid = true;
                return stream;
              },
              extent: function(_) {
                if (!arguments.length)
                  return [[x0, y0], [x1, y1]];
                clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
                if (stream)
                  stream.valid = false, stream = null;
                return clipExtent;
              }
            };
        return clipExtent.extent([[0, 0], [960, 500]]);
      };
      function d3_geo_clipExtent(x0, y0, x1, y1) {
        return function(listener) {
          var listener_ = listener,
              bufferListener = d3_geo_clipBufferListener(),
              clipLine = d3_geom_clipLine(x0, y0, x1, y1),
              segments,
              polygon,
              ring;
          var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              listener = bufferListener;
              segments = [];
              polygon = [];
              clean = true;
            },
            polygonEnd: function() {
              listener = listener_;
              segments = d3.merge(segments);
              var clipStartInside = insidePolygon([x0, y1]),
                  inside = clean && clipStartInside,
                  visible = segments.length;
              if (inside || visible) {
                listener.polygonStart();
                if (inside) {
                  listener.lineStart();
                  interpolate(null, null, 1, listener);
                  listener.lineEnd();
                }
                if (visible) {
                  d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
                }
                listener.polygonEnd();
              }
              segments = polygon = ring = null;
            }
          };
          function insidePolygon(p) {
            var wn = 0,
                n = polygon.length,
                y = p[1];
            for (var i = 0; i < n; ++i) {
              for (var j = 1,
                  v = polygon[i],
                  m = v.length,
                  a = v[0],
                  b; j < m; ++j) {
                b = v[j];
                if (a[1] <= y) {
                  if (b[1] > y && d3_cross2d(a, b, p) > 0)
                    ++wn;
                } else {
                  if (b[1] <= y && d3_cross2d(a, b, p) < 0)
                    --wn;
                }
                a = b;
              }
            }
            return wn !== 0;
          }
          function interpolate(from, to, direction, listener) {
            var a = 0,
                a1 = 0;
            if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
              do {
                listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
              } while ((a = (a + direction + 4) % 4) !== a1);
            } else {
              listener.point(to[0], to[1]);
            }
          }
          function pointVisible(x, y) {
            return x0 <= x && x <= x1 && y0 <= y && y <= y1;
          }
          function point(x, y) {
            if (pointVisible(x, y))
              listener.point(x, y);
          }
          var x__,
              y__,
              v__,
              x_,
              y_,
              v_,
              first,
              clean;
          function lineStart() {
            clip.point = linePoint;
            if (polygon)
              polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
          }
          function lineEnd() {
            if (segments) {
              linePoint(x__, y__);
              if (v__ && v_)
                bufferListener.rejoin();
              segments.push(bufferListener.buffer());
            }
            clip.point = point;
            if (v_)
              listener.lineEnd();
          }
          function linePoint(x, y) {
            x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
            y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
            var v = pointVisible(x, y);
            if (polygon)
              ring.push([x, y]);
            if (first) {
              x__ = x, y__ = y, v__ = v;
              first = false;
              if (v) {
                listener.lineStart();
                listener.point(x, y);
              }
            } else {
              if (v && v_)
                listener.point(x, y);
              else {
                var l = {
                  a: {
                    x: x_,
                    y: y_
                  },
                  b: {
                    x: x,
                    y: y
                  }
                };
                if (clipLine(l)) {
                  if (!v_) {
                    listener.lineStart();
                    listener.point(l.a.x, l.a.y);
                  }
                  listener.point(l.b.x, l.b.y);
                  if (!v)
                    listener.lineEnd();
                  clean = false;
                } else if (v) {
                  listener.lineStart();
                  listener.point(x, y);
                  clean = false;
                }
              }
            }
            x_ = x, y_ = y, v_ = v;
          }
          return clip;
        };
        function corner(p, direction) {
          return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
        }
        function compare(a, b) {
          return comparePoints(a.x, b.x);
        }
        function comparePoints(a, b) {
          var ca = corner(a, 1),
              cb = corner(b, 1);
          return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
        }
      }
      function d3_geo_conic(projectAt) {
        var φ0 = 0,
            φ1 = π / 3,
            m = d3_geo_projectionMutator(projectAt),
            p = m(φ0, φ1);
        p.parallels = function(_) {
          if (!arguments.length)
            return [φ0 / π * 180, φ1 / π * 180];
          return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
        };
        return p;
      }
      function d3_geo_conicEqualArea(φ0, φ1) {
        var sinφ0 = Math.sin(φ0),
            n = (sinφ0 + Math.sin(φ1)) / 2,
            C = 1 + sinφ0 * (2 * n - sinφ0),
            ρ0 = Math.sqrt(C) / n;
        function forward(λ, φ) {
          var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
          return [ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = ρ0 - y;
          return [Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n))];
        };
        return forward;
      }
      (d3.geo.conicEqualArea = function() {
        return d3_geo_conic(d3_geo_conicEqualArea);
      }).raw = d3_geo_conicEqualArea;
      d3.geo.albers = function() {
        return d3.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
      };
      d3.geo.albersUsa = function() {
        var lower48 = d3.geo.albers();
        var alaska = d3.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]);
        var hawaii = d3.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]);
        var point,
            pointStream = {point: function(x, y) {
                point = [x, y];
              }},
            lower48Point,
            alaskaPoint,
            hawaiiPoint;
        function albersUsa(coordinates) {
          var x = coordinates[0],
              y = coordinates[1];
          point = null;
          (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
          return point;
        }
        albersUsa.invert = function(coordinates) {
          var k = lower48.scale(),
              t = lower48.translate(),
              x = (coordinates[0] - t[0]) / k,
              y = (coordinates[1] - t[1]) / k;
          return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
        };
        albersUsa.stream = function(stream) {
          var lower48Stream = lower48.stream(stream),
              alaskaStream = alaska.stream(stream),
              hawaiiStream = hawaii.stream(stream);
          return {
            point: function(x, y) {
              lower48Stream.point(x, y);
              alaskaStream.point(x, y);
              hawaiiStream.point(x, y);
            },
            sphere: function() {
              lower48Stream.sphere();
              alaskaStream.sphere();
              hawaiiStream.sphere();
            },
            lineStart: function() {
              lower48Stream.lineStart();
              alaskaStream.lineStart();
              hawaiiStream.lineStart();
            },
            lineEnd: function() {
              lower48Stream.lineEnd();
              alaskaStream.lineEnd();
              hawaiiStream.lineEnd();
            },
            polygonStart: function() {
              lower48Stream.polygonStart();
              alaskaStream.polygonStart();
              hawaiiStream.polygonStart();
            },
            polygonEnd: function() {
              lower48Stream.polygonEnd();
              alaskaStream.polygonEnd();
              hawaiiStream.polygonEnd();
            }
          };
        };
        albersUsa.precision = function(_) {
          if (!arguments.length)
            return lower48.precision();
          lower48.precision(_);
          alaska.precision(_);
          hawaii.precision(_);
          return albersUsa;
        };
        albersUsa.scale = function(_) {
          if (!arguments.length)
            return lower48.scale();
          lower48.scale(_);
          alaska.scale(_ * .35);
          hawaii.scale(_);
          return albersUsa.translate(lower48.translate());
        };
        albersUsa.translate = function(_) {
          if (!arguments.length)
            return lower48.translate();
          var k = lower48.scale(),
              x = +_[0],
              y = +_[1];
          lower48Point = lower48.translate(_).clipExtent([[x - .455 * k, y - .238 * k], [x + .455 * k, y + .238 * k]]).stream(pointStream).point;
          alaskaPoint = alaska.translate([x - .307 * k, y + .201 * k]).clipExtent([[x - .425 * k + ε, y + .12 * k + ε], [x - .214 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
          hawaiiPoint = hawaii.translate([x - .205 * k, y + .212 * k]).clipExtent([[x - .214 * k + ε, y + .166 * k + ε], [x - .115 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
          return albersUsa;
        };
        return albersUsa.scale(1070);
      };
      var d3_geo_pathAreaSum,
          d3_geo_pathAreaPolygon,
          d3_geo_pathArea = {
            point: d3_noop,
            lineStart: d3_noop,
            lineEnd: d3_noop,
            polygonStart: function() {
              d3_geo_pathAreaPolygon = 0;
              d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
            },
            polygonEnd: function() {
              d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
              d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
            }
          };
      function d3_geo_pathAreaRingStart() {
        var x00,
            y00,
            x0,
            y0;
        d3_geo_pathArea.point = function(x, y) {
          d3_geo_pathArea.point = nextPoint;
          x00 = x0 = x, y00 = y0 = y;
        };
        function nextPoint(x, y) {
          d3_geo_pathAreaPolygon += y0 * x - x0 * y;
          x0 = x, y0 = y;
        }
        d3_geo_pathArea.lineEnd = function() {
          nextPoint(x00, y00);
        };
      }
      var d3_geo_pathBoundsX0,
          d3_geo_pathBoundsY0,
          d3_geo_pathBoundsX1,
          d3_geo_pathBoundsY1;
      var d3_geo_pathBounds = {
        point: d3_geo_pathBoundsPoint,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
      };
      function d3_geo_pathBoundsPoint(x, y) {
        if (x < d3_geo_pathBoundsX0)
          d3_geo_pathBoundsX0 = x;
        if (x > d3_geo_pathBoundsX1)
          d3_geo_pathBoundsX1 = x;
        if (y < d3_geo_pathBoundsY0)
          d3_geo_pathBoundsY0 = y;
        if (y > d3_geo_pathBoundsY1)
          d3_geo_pathBoundsY1 = y;
      }
      function d3_geo_pathBuffer() {
        var pointCircle = d3_geo_pathBufferCircle(4.5),
            buffer = [];
        var stream = {
          point: point,
          lineStart: function() {
            stream.point = pointLineStart;
          },
          lineEnd: lineEnd,
          polygonStart: function() {
            stream.lineEnd = lineEndPolygon;
          },
          polygonEnd: function() {
            stream.lineEnd = lineEnd;
            stream.point = point;
          },
          pointRadius: function(_) {
            pointCircle = d3_geo_pathBufferCircle(_);
            return stream;
          },
          result: function() {
            if (buffer.length) {
              var result = buffer.join("");
              buffer = [];
              return result;
            }
          }
        };
        function point(x, y) {
          buffer.push("M", x, ",", y, pointCircle);
        }
        function pointLineStart(x, y) {
          buffer.push("M", x, ",", y);
          stream.point = pointLine;
        }
        function pointLine(x, y) {
          buffer.push("L", x, ",", y);
        }
        function lineEnd() {
          stream.point = point;
        }
        function lineEndPolygon() {
          buffer.push("Z");
        }
        return stream;
      }
      function d3_geo_pathBufferCircle(radius) {
        return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
      }
      var d3_geo_pathCentroid = {
        point: d3_geo_pathCentroidPoint,
        lineStart: d3_geo_pathCentroidLineStart,
        lineEnd: d3_geo_pathCentroidLineEnd,
        polygonStart: function() {
          d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
        },
        polygonEnd: function() {
          d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
          d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
          d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
        }
      };
      function d3_geo_pathCentroidPoint(x, y) {
        d3_geo_centroidX0 += x;
        d3_geo_centroidY0 += y;
        ++d3_geo_centroidZ0;
      }
      function d3_geo_pathCentroidLineStart() {
        var x0,
            y0;
        d3_geo_pathCentroid.point = function(x, y) {
          d3_geo_pathCentroid.point = nextPoint;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        };
        function nextPoint(x, y) {
          var dx = x - x0,
              dy = y - y0,
              z = Math.sqrt(dx * dx + dy * dy);
          d3_geo_centroidX1 += z * (x0 + x) / 2;
          d3_geo_centroidY1 += z * (y0 + y) / 2;
          d3_geo_centroidZ1 += z;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
      }
      function d3_geo_pathCentroidLineEnd() {
        d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      }
      function d3_geo_pathCentroidRingStart() {
        var x00,
            y00,
            x0,
            y0;
        d3_geo_pathCentroid.point = function(x, y) {
          d3_geo_pathCentroid.point = nextPoint;
          d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
        };
        function nextPoint(x, y) {
          var dx = x - x0,
              dy = y - y0,
              z = Math.sqrt(dx * dx + dy * dy);
          d3_geo_centroidX1 += z * (x0 + x) / 2;
          d3_geo_centroidY1 += z * (y0 + y) / 2;
          d3_geo_centroidZ1 += z;
          z = y0 * x - x0 * y;
          d3_geo_centroidX2 += z * (x0 + x);
          d3_geo_centroidY2 += z * (y0 + y);
          d3_geo_centroidZ2 += z * 3;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
        d3_geo_pathCentroid.lineEnd = function() {
          nextPoint(x00, y00);
        };
      }
      function d3_geo_pathContext(context) {
        var pointRadius = 4.5;
        var stream = {
          point: point,
          lineStart: function() {
            stream.point = pointLineStart;
          },
          lineEnd: lineEnd,
          polygonStart: function() {
            stream.lineEnd = lineEndPolygon;
          },
          polygonEnd: function() {
            stream.lineEnd = lineEnd;
            stream.point = point;
          },
          pointRadius: function(_) {
            pointRadius = _;
            return stream;
          },
          result: d3_noop
        };
        function point(x, y) {
          context.moveTo(x + pointRadius, y);
          context.arc(x, y, pointRadius, 0, τ);
        }
        function pointLineStart(x, y) {
          context.moveTo(x, y);
          stream.point = pointLine;
        }
        function pointLine(x, y) {
          context.lineTo(x, y);
        }
        function lineEnd() {
          stream.point = point;
        }
        function lineEndPolygon() {
          context.closePath();
        }
        return stream;
      }
      function d3_geo_resample(project) {
        var δ2 = .5,
            cosMinDistance = Math.cos(30 * d3_radians),
            maxDepth = 16;
        function resample(stream) {
          return (maxDepth ? resampleRecursive : resampleNone)(stream);
        }
        function resampleNone(stream) {
          return d3_geo_transformPoint(stream, function(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
          });
        }
        function resampleRecursive(stream) {
          var λ00,
              φ00,
              x00,
              y00,
              a00,
              b00,
              c00,
              λ0,
              x0,
              y0,
              a0,
              b0,
              c0;
          var resample = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              stream.polygonStart();
              resample.lineStart = ringStart;
            },
            polygonEnd: function() {
              stream.polygonEnd();
              resample.lineStart = lineStart;
            }
          };
          function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
          }
          function lineStart() {
            x0 = NaN;
            resample.point = linePoint;
            stream.lineStart();
          }
          function linePoint(λ, φ) {
            var c = d3_geo_cartesian([λ, φ]),
                p = project(λ, φ);
            resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
          }
          function lineEnd() {
            resample.point = point;
            stream.lineEnd();
          }
          function ringStart() {
            lineStart();
            resample.point = ringPoint;
            resample.lineEnd = ringEnd;
          }
          function ringPoint(λ, φ) {
            linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resample.point = linePoint;
          }
          function ringEnd() {
            resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
            resample.lineEnd = lineEnd;
            lineEnd();
          }
          return resample;
        }
        function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
          var dx = x1 - x0,
              dy = y1 - y0,
              d2 = dx * dx + dy * dy;
          if (d2 > 4 * δ2 && depth--) {
            var a = a0 + a1,
                b = b0 + b1,
                c = c0 + c1,
                m = Math.sqrt(a * a + b * b + c * c),
                φ2 = Math.asin(c /= m),
                λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a),
                p = project(λ2, φ2),
                x2 = p[0],
                y2 = p[1],
                dx2 = x2 - x0,
                dy2 = y2 - y0,
                dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
              resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
              stream.point(x2, y2);
              resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
            }
          }
        }
        resample.precision = function(_) {
          if (!arguments.length)
            return Math.sqrt(δ2);
          maxDepth = (δ2 = _ * _) > 0 && 16;
          return resample;
        };
        return resample;
      }
      d3.geo.path = function() {
        var pointRadius = 4.5,
            projection,
            context,
            projectStream,
            contextStream,
            cacheStream;
        function path(object) {
          if (object) {
            if (typeof pointRadius === "function")
              contextStream.pointRadius(+pointRadius.apply(this, arguments));
            if (!cacheStream || !cacheStream.valid)
              cacheStream = projectStream(contextStream);
            d3.geo.stream(object, cacheStream);
          }
          return contextStream.result();
        }
        path.area = function(object) {
          d3_geo_pathAreaSum = 0;
          d3.geo.stream(object, projectStream(d3_geo_pathArea));
          return d3_geo_pathAreaSum;
        };
        path.centroid = function(object) {
          d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
          d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
          return d3_geo_centroidZ2 ? [d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2] : d3_geo_centroidZ1 ? [d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1] : d3_geo_centroidZ0 ? [d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0] : [NaN, NaN];
        };
        path.bounds = function(object) {
          d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
          d3.geo.stream(object, projectStream(d3_geo_pathBounds));
          return [[d3_geo_pathBoundsX0, d3_geo_pathBoundsY0], [d3_geo_pathBoundsX1, d3_geo_pathBoundsY1]];
        };
        path.projection = function(_) {
          if (!arguments.length)
            return projection;
          projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
          return reset();
        };
        path.context = function(_) {
          if (!arguments.length)
            return context;
          contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
          if (typeof pointRadius !== "function")
            contextStream.pointRadius(pointRadius);
          return reset();
        };
        path.pointRadius = function(_) {
          if (!arguments.length)
            return pointRadius;
          pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
          return path;
        };
        function reset() {
          cacheStream = null;
          return path;
        }
        return path.projection(d3.geo.albersUsa()).context(null);
      };
      function d3_geo_pathProjectStream(project) {
        var resample = d3_geo_resample(function(x, y) {
          return project([x * d3_degrees, y * d3_degrees]);
        });
        return function(stream) {
          return d3_geo_projectionRadians(resample(stream));
        };
      }
      d3.geo.transform = function(methods) {
        return {stream: function(stream) {
            var transform = new d3_geo_transform(stream);
            for (var k in methods)
              transform[k] = methods[k];
            return transform;
          }};
      };
      function d3_geo_transform(stream) {
        this.stream = stream;
      }
      d3_geo_transform.prototype = {
        point: function(x, y) {
          this.stream.point(x, y);
        },
        sphere: function() {
          this.stream.sphere();
        },
        lineStart: function() {
          this.stream.lineStart();
        },
        lineEnd: function() {
          this.stream.lineEnd();
        },
        polygonStart: function() {
          this.stream.polygonStart();
        },
        polygonEnd: function() {
          this.stream.polygonEnd();
        }
      };
      function d3_geo_transformPoint(stream, point) {
        return {
          point: point,
          sphere: function() {
            stream.sphere();
          },
          lineStart: function() {
            stream.lineStart();
          },
          lineEnd: function() {
            stream.lineEnd();
          },
          polygonStart: function() {
            stream.polygonStart();
          },
          polygonEnd: function() {
            stream.polygonEnd();
          }
        };
      }
      d3.geo.projection = d3_geo_projection;
      d3.geo.projectionMutator = d3_geo_projectionMutator;
      function d3_geo_projection(project) {
        return d3_geo_projectionMutator(function() {
          return project;
        })();
      }
      function d3_geo_projectionMutator(projectAt) {
        var project,
            rotate,
            projectRotate,
            projectResample = d3_geo_resample(function(x, y) {
              x = project(x, y);
              return [x[0] * k + δx, δy - x[1] * k];
            }),
            k = 150,
            x = 480,
            y = 250,
            λ = 0,
            φ = 0,
            δλ = 0,
            δφ = 0,
            δγ = 0,
            δx,
            δy,
            preclip = d3_geo_clipAntimeridian,
            postclip = d3_identity,
            clipAngle = null,
            clipExtent = null,
            stream;
        function projection(point) {
          point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
          return [point[0] * k + δx, δy - point[1] * k];
        }
        function invert(point) {
          point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
          return point && [point[0] * d3_degrees, point[1] * d3_degrees];
        }
        projection.stream = function(output) {
          if (stream)
            stream.valid = false;
          stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
          stream.valid = true;
          return stream;
        };
        projection.clipAngle = function(_) {
          if (!arguments.length)
            return clipAngle;
          preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
          return invalidate();
        };
        projection.clipExtent = function(_) {
          if (!arguments.length)
            return clipExtent;
          clipExtent = _;
          postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
          return invalidate();
        };
        projection.scale = function(_) {
          if (!arguments.length)
            return k;
          k = +_;
          return reset();
        };
        projection.translate = function(_) {
          if (!arguments.length)
            return [x, y];
          x = +_[0];
          y = +_[1];
          return reset();
        };
        projection.center = function(_) {
          if (!arguments.length)
            return [λ * d3_degrees, φ * d3_degrees];
          λ = _[0] % 360 * d3_radians;
          φ = _[1] % 360 * d3_radians;
          return reset();
        };
        projection.rotate = function(_) {
          if (!arguments.length)
            return [δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees];
          δλ = _[0] % 360 * d3_radians;
          δφ = _[1] % 360 * d3_radians;
          δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
          return reset();
        };
        d3.rebind(projection, projectResample, "precision");
        function reset() {
          projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
          var center = project(λ, φ);
          δx = x - center[0] * k;
          δy = y + center[1] * k;
          return invalidate();
        }
        function invalidate() {
          if (stream)
            stream.valid = false, stream = null;
          return projection;
        }
        return function() {
          project = projectAt.apply(this, arguments);
          projection.invert = project.invert && invert;
          return reset();
        };
      }
      function d3_geo_projectionRadians(stream) {
        return d3_geo_transformPoint(stream, function(x, y) {
          stream.point(x * d3_radians, y * d3_radians);
        });
      }
      function d3_geo_equirectangular(λ, φ) {
        return [λ, φ];
      }
      (d3.geo.equirectangular = function() {
        return d3_geo_projection(d3_geo_equirectangular);
      }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
      d3.geo.rotation = function(rotate) {
        rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
        function forward(coordinates) {
          coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
          return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        }
        forward.invert = function(coordinates) {
          coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
          return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        };
        return forward;
      };
      function d3_geo_identityRotation(λ, φ) {
        return [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
      }
      d3_geo_identityRotation.invert = d3_geo_equirectangular;
      function d3_geo_rotation(δλ, δφ, δγ) {
        return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
      }
      function d3_geo_forwardRotationλ(δλ) {
        return function(λ, φ) {
          return λ += δλ, [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
        };
      }
      function d3_geo_rotationλ(δλ) {
        var rotation = d3_geo_forwardRotationλ(δλ);
        rotation.invert = d3_geo_forwardRotationλ(-δλ);
        return rotation;
      }
      function d3_geo_rotationφγ(δφ, δγ) {
        var cosδφ = Math.cos(δφ),
            sinδφ = Math.sin(δφ),
            cosδγ = Math.cos(δγ),
            sinδγ = Math.sin(δγ);
        function rotation(λ, φ) {
          var cosφ = Math.cos(φ),
              x = Math.cos(λ) * cosφ,
              y = Math.sin(λ) * cosφ,
              z = Math.sin(φ),
              k = z * cosδφ + x * sinδφ;
          return [Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ)];
        }
        rotation.invert = function(λ, φ) {
          var cosφ = Math.cos(φ),
              x = Math.cos(λ) * cosφ,
              y = Math.sin(λ) * cosφ,
              z = Math.sin(φ),
              k = z * cosδγ - y * sinδγ;
          return [Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ)];
        };
        return rotation;
      }
      d3.geo.circle = function() {
        var origin = [0, 0],
            angle,
            precision = 6,
            interpolate;
        function circle() {
          var center = typeof origin === "function" ? origin.apply(this, arguments) : origin,
              rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert,
              ring = [];
          interpolate(null, null, 1, {point: function(x, y) {
              ring.push(x = rotate(x, y));
              x[0] *= d3_degrees, x[1] *= d3_degrees;
            }});
          return {
            type: "Polygon",
            coordinates: [ring]
          };
        }
        circle.origin = function(x) {
          if (!arguments.length)
            return origin;
          origin = x;
          return circle;
        };
        circle.angle = function(x) {
          if (!arguments.length)
            return angle;
          interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
          return circle;
        };
        circle.precision = function(_) {
          if (!arguments.length)
            return precision;
          interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
          return circle;
        };
        return circle.angle(90);
      };
      function d3_geo_circleInterpolate(radius, precision) {
        var cr = Math.cos(radius),
            sr = Math.sin(radius);
        return function(from, to, direction, listener) {
          var step = direction * precision;
          if (from != null) {
            from = d3_geo_circleAngle(cr, from);
            to = d3_geo_circleAngle(cr, to);
            if (direction > 0 ? from < to : from > to)
              from += direction * τ;
          } else {
            from = radius + direction * τ;
            to = radius - .5 * step;
          }
          for (var point,
              t = from; direction > 0 ? t > to : t < to; t -= step) {
            listener.point((point = d3_geo_spherical([cr, -sr * Math.cos(t), -sr * Math.sin(t)]))[0], point[1]);
          }
        };
      }
      function d3_geo_circleAngle(cr, point) {
        var a = d3_geo_cartesian(point);
        a[0] -= cr;
        d3_geo_cartesianNormalize(a);
        var angle = d3_acos(-a[1]);
        return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
      }
      d3.geo.distance = function(a, b) {
        var Δλ = (b[0] - a[0]) * d3_radians,
            φ0 = a[1] * d3_radians,
            φ1 = b[1] * d3_radians,
            sinΔλ = Math.sin(Δλ),
            cosΔλ = Math.cos(Δλ),
            sinφ0 = Math.sin(φ0),
            cosφ0 = Math.cos(φ0),
            sinφ1 = Math.sin(φ1),
            cosφ1 = Math.cos(φ1),
            t;
        return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
      };
      d3.geo.graticule = function() {
        var x1,
            x0,
            X1,
            X0,
            y1,
            y0,
            Y1,
            Y0,
            dx = 10,
            dy = dx,
            DX = 90,
            DY = 360,
            x,
            y,
            X,
            Y,
            precision = 2.5;
        function graticule() {
          return {
            type: "MultiLineString",
            coordinates: lines()
          };
        }
        function lines() {
          return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
            return abs(x % DX) > ε;
          }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
            return abs(y % DY) > ε;
          }).map(y));
        }
        graticule.lines = function() {
          return lines().map(function(coordinates) {
            return {
              type: "LineString",
              coordinates: coordinates
            };
          });
        };
        graticule.outline = function() {
          return {
            type: "Polygon",
            coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
          };
        };
        graticule.extent = function(_) {
          if (!arguments.length)
            return graticule.minorExtent();
          return graticule.majorExtent(_).minorExtent(_);
        };
        graticule.majorExtent = function(_) {
          if (!arguments.length)
            return [[X0, Y0], [X1, Y1]];
          X0 = +_[0][0], X1 = +_[1][0];
          Y0 = +_[0][1], Y1 = +_[1][1];
          if (X0 > X1)
            _ = X0, X0 = X1, X1 = _;
          if (Y0 > Y1)
            _ = Y0, Y0 = Y1, Y1 = _;
          return graticule.precision(precision);
        };
        graticule.minorExtent = function(_) {
          if (!arguments.length)
            return [[x0, y0], [x1, y1]];
          x0 = +_[0][0], x1 = +_[1][0];
          y0 = +_[0][1], y1 = +_[1][1];
          if (x0 > x1)
            _ = x0, x0 = x1, x1 = _;
          if (y0 > y1)
            _ = y0, y0 = y1, y1 = _;
          return graticule.precision(precision);
        };
        graticule.step = function(_) {
          if (!arguments.length)
            return graticule.minorStep();
          return graticule.majorStep(_).minorStep(_);
        };
        graticule.majorStep = function(_) {
          if (!arguments.length)
            return [DX, DY];
          DX = +_[0], DY = +_[1];
          return graticule;
        };
        graticule.minorStep = function(_) {
          if (!arguments.length)
            return [dx, dy];
          dx = +_[0], dy = +_[1];
          return graticule;
        };
        graticule.precision = function(_) {
          if (!arguments.length)
            return precision;
          precision = +_;
          x = d3_geo_graticuleX(y0, y1, 90);
          y = d3_geo_graticuleY(x0, x1, precision);
          X = d3_geo_graticuleX(Y0, Y1, 90);
          Y = d3_geo_graticuleY(X0, X1, precision);
          return graticule;
        };
        return graticule.majorExtent([[-180, -90 + ε], [180, 90 - ε]]).minorExtent([[-180, -80 - ε], [180, 80 + ε]]);
      };
      function d3_geo_graticuleX(y0, y1, dy) {
        var y = d3.range(y0, y1 - ε, dy).concat(y1);
        return function(x) {
          return y.map(function(y) {
            return [x, y];
          });
        };
      }
      function d3_geo_graticuleY(x0, x1, dx) {
        var x = d3.range(x0, x1 - ε, dx).concat(x1);
        return function(y) {
          return x.map(function(x) {
            return [x, y];
          });
        };
      }
      function d3_source(d) {
        return d.source;
      }
      function d3_target(d) {
        return d.target;
      }
      d3.geo.greatArc = function() {
        var source = d3_source,
            source_,
            target = d3_target,
            target_;
        function greatArc() {
          return {
            type: "LineString",
            coordinates: [source_ || source.apply(this, arguments), target_ || target.apply(this, arguments)]
          };
        }
        greatArc.distance = function() {
          return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
        };
        greatArc.source = function(_) {
          if (!arguments.length)
            return source;
          source = _, source_ = typeof _ === "function" ? null : _;
          return greatArc;
        };
        greatArc.target = function(_) {
          if (!arguments.length)
            return target;
          target = _, target_ = typeof _ === "function" ? null : _;
          return greatArc;
        };
        greatArc.precision = function() {
          return arguments.length ? greatArc : 0;
        };
        return greatArc;
      };
      d3.geo.interpolate = function(source, target) {
        return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
      };
      function d3_geo_interpolate(x0, y0, x1, y1) {
        var cy0 = Math.cos(y0),
            sy0 = Math.sin(y0),
            cy1 = Math.cos(y1),
            sy1 = Math.sin(y1),
            kx0 = cy0 * Math.cos(x0),
            ky0 = cy0 * Math.sin(x0),
            kx1 = cy1 * Math.cos(x1),
            ky1 = cy1 * Math.sin(x1),
            d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))),
            k = 1 / Math.sin(d);
        var interpolate = d ? function(t) {
          var B = Math.sin(t *= d) * k,
              A = Math.sin(d - t) * k,
              x = A * kx0 + B * kx1,
              y = A * ky0 + B * ky1,
              z = A * sy0 + B * sy1;
          return [Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees];
        } : function() {
          return [x0 * d3_degrees, y0 * d3_degrees];
        };
        interpolate.distance = d;
        return interpolate;
      }
      d3.geo.length = function(object) {
        d3_geo_lengthSum = 0;
        d3.geo.stream(object, d3_geo_length);
        return d3_geo_lengthSum;
      };
      var d3_geo_lengthSum;
      var d3_geo_length = {
        sphere: d3_noop,
        point: d3_noop,
        lineStart: d3_geo_lengthLineStart,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
      };
      function d3_geo_lengthLineStart() {
        var λ0,
            sinφ0,
            cosφ0;
        d3_geo_length.point = function(λ, φ) {
          λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
          d3_geo_length.point = nextPoint;
        };
        d3_geo_length.lineEnd = function() {
          d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
        };
        function nextPoint(λ, φ) {
          var sinφ = Math.sin(φ *= d3_radians),
              cosφ = Math.cos(φ),
              t = abs((λ *= d3_radians) - λ0),
              cosΔλ = Math.cos(t);
          d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
          λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
        }
      }
      function d3_geo_azimuthal(scale, angle) {
        function azimuthal(λ, φ) {
          var cosλ = Math.cos(λ),
              cosφ = Math.cos(φ),
              k = scale(cosλ * cosφ);
          return [k * cosφ * Math.sin(λ), k * Math.sin(φ)];
        }
        azimuthal.invert = function(x, y) {
          var ρ = Math.sqrt(x * x + y * y),
              c = angle(ρ),
              sinc = Math.sin(c),
              cosc = Math.cos(c);
          return [Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ)];
        };
        return azimuthal;
      }
      var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
        return Math.sqrt(2 / (1 + cosλcosφ));
      }, function(ρ) {
        return 2 * Math.asin(ρ / 2);
      });
      (d3.geo.azimuthalEqualArea = function() {
        return d3_geo_projection(d3_geo_azimuthalEqualArea);
      }).raw = d3_geo_azimuthalEqualArea;
      var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
        var c = Math.acos(cosλcosφ);
        return c && c / Math.sin(c);
      }, d3_identity);
      (d3.geo.azimuthalEquidistant = function() {
        return d3_geo_projection(d3_geo_azimuthalEquidistant);
      }).raw = d3_geo_azimuthalEquidistant;
      function d3_geo_conicConformal(φ0, φ1) {
        var cosφ0 = Math.cos(φ0),
            t = function(φ) {
              return Math.tan(π / 4 + φ / 2);
            },
            n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)),
            F = cosφ0 * Math.pow(t(φ0), n) / n;
        if (!n)
          return d3_geo_mercator;
        function forward(λ, φ) {
          if (F > 0) {
            if (φ < -halfπ + ε)
              φ = -halfπ + ε;
          } else {
            if (φ > halfπ - ε)
              φ = halfπ - ε;
          }
          var ρ = F / Math.pow(t(φ), n);
          return [ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = F - y,
              ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
          return [Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ];
        };
        return forward;
      }
      (d3.geo.conicConformal = function() {
        return d3_geo_conic(d3_geo_conicConformal);
      }).raw = d3_geo_conicConformal;
      function d3_geo_conicEquidistant(φ0, φ1) {
        var cosφ0 = Math.cos(φ0),
            n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0),
            G = cosφ0 / n + φ0;
        if (abs(n) < ε)
          return d3_geo_equirectangular;
        function forward(λ, φ) {
          var ρ = G - φ;
          return [ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = G - y;
          return [Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y)];
        };
        return forward;
      }
      (d3.geo.conicEquidistant = function() {
        return d3_geo_conic(d3_geo_conicEquidistant);
      }).raw = d3_geo_conicEquidistant;
      var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / cosλcosφ;
      }, Math.atan);
      (d3.geo.gnomonic = function() {
        return d3_geo_projection(d3_geo_gnomonic);
      }).raw = d3_geo_gnomonic;
      function d3_geo_mercator(λ, φ) {
        return [λ, Math.log(Math.tan(π / 4 + φ / 2))];
      }
      d3_geo_mercator.invert = function(x, y) {
        return [x, 2 * Math.atan(Math.exp(y)) - halfπ];
      };
      function d3_geo_mercatorProjection(project) {
        var m = d3_geo_projection(project),
            scale = m.scale,
            translate = m.translate,
            clipExtent = m.clipExtent,
            clipAuto;
        m.scale = function() {
          var v = scale.apply(m, arguments);
          return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.translate = function() {
          var v = translate.apply(m, arguments);
          return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.clipExtent = function(_) {
          var v = clipExtent.apply(m, arguments);
          if (v === m) {
            if (clipAuto = _ == null) {
              var k = π * scale(),
                  t = translate();
              clipExtent([[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]]);
            }
          } else if (clipAuto) {
            v = null;
          }
          return v;
        };
        return m.clipExtent(null);
      }
      (d3.geo.mercator = function() {
        return d3_geo_mercatorProjection(d3_geo_mercator);
      }).raw = d3_geo_mercator;
      var d3_geo_orthographic = d3_geo_azimuthal(function() {
        return 1;
      }, Math.asin);
      (d3.geo.orthographic = function() {
        return d3_geo_projection(d3_geo_orthographic);
      }).raw = d3_geo_orthographic;
      var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / (1 + cosλcosφ);
      }, function(ρ) {
        return 2 * Math.atan(ρ);
      });
      (d3.geo.stereographic = function() {
        return d3_geo_projection(d3_geo_stereographic);
      }).raw = d3_geo_stereographic;
      function d3_geo_transverseMercator(λ, φ) {
        return [Math.log(Math.tan(π / 4 + φ / 2)), -λ];
      }
      d3_geo_transverseMercator.invert = function(x, y) {
        return [-y, 2 * Math.atan(Math.exp(x)) - halfπ];
      };
      (d3.geo.transverseMercator = function() {
        var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator),
            center = projection.center,
            rotate = projection.rotate;
        projection.center = function(_) {
          return _ ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
        };
        projection.rotate = function(_) {
          return _ ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
        };
        return rotate([0, 0, 90]);
      }).raw = d3_geo_transverseMercator;
      d3.geom = {};
      function d3_geom_pointX(d) {
        return d[0];
      }
      function d3_geom_pointY(d) {
        return d[1];
      }
      d3.geom.hull = function(vertices) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY;
        if (arguments.length)
          return hull(vertices);
        function hull(data) {
          if (data.length < 3)
            return [];
          var fx = d3_functor(x),
              fy = d3_functor(y),
              i,
              n = data.length,
              points = [],
              flippedPoints = [];
          for (i = 0; i < n; i++) {
            points.push([+fx.call(this, data[i], i), +fy.call(this, data[i], i), i]);
          }
          points.sort(d3_geom_hullOrder);
          for (i = 0; i < n; i++)
            flippedPoints.push([points[i][0], -points[i][1]]);
          var upper = d3_geom_hullUpper(points),
              lower = d3_geom_hullUpper(flippedPoints);
          var skipLeft = lower[0] === upper[0],
              skipRight = lower[lower.length - 1] === upper[upper.length - 1],
              polygon = [];
          for (i = upper.length - 1; i >= 0; --i)
            polygon.push(data[points[upper[i]][2]]);
          for (i = +skipLeft; i < lower.length - skipRight; ++i)
            polygon.push(data[points[lower[i]][2]]);
          return polygon;
        }
        hull.x = function(_) {
          return arguments.length ? (x = _, hull) : x;
        };
        hull.y = function(_) {
          return arguments.length ? (y = _, hull) : y;
        };
        return hull;
      };
      function d3_geom_hullUpper(points) {
        var n = points.length,
            hull = [0, 1],
            hs = 2;
        for (var i = 2; i < n; i++) {
          while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0)
            --hs;
          hull[hs++] = i;
        }
        return hull.slice(0, hs);
      }
      function d3_geom_hullOrder(a, b) {
        return a[0] - b[0] || a[1] - b[1];
      }
      d3.geom.polygon = function(coordinates) {
        d3_subclass(coordinates, d3_geom_polygonPrototype);
        return coordinates;
      };
      var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
      d3_geom_polygonPrototype.area = function() {
        var i = -1,
            n = this.length,
            a,
            b = this[n - 1],
            area = 0;
        while (++i < n) {
          a = b;
          b = this[i];
          area += a[1] * b[0] - a[0] * b[1];
        }
        return area * .5;
      };
      d3_geom_polygonPrototype.centroid = function(k) {
        var i = -1,
            n = this.length,
            x = 0,
            y = 0,
            a,
            b = this[n - 1],
            c;
        if (!arguments.length)
          k = -1 / (6 * this.area());
        while (++i < n) {
          a = b;
          b = this[i];
          c = a[0] * b[1] - b[0] * a[1];
          x += (a[0] + b[0]) * c;
          y += (a[1] + b[1]) * c;
        }
        return [x * k, y * k];
      };
      d3_geom_polygonPrototype.clip = function(subject) {
        var input,
            closed = d3_geom_polygonClosed(subject),
            i = -1,
            n = this.length - d3_geom_polygonClosed(this),
            j,
            m,
            a = this[n - 1],
            b,
            c,
            d;
        while (++i < n) {
          input = subject.slice();
          subject.length = 0;
          b = this[i];
          c = input[(m = input.length - closed) - 1];
          j = -1;
          while (++j < m) {
            d = input[j];
            if (d3_geom_polygonInside(d, a, b)) {
              if (!d3_geom_polygonInside(c, a, b)) {
                subject.push(d3_geom_polygonIntersect(c, d, a, b));
              }
              subject.push(d);
            } else if (d3_geom_polygonInside(c, a, b)) {
              subject.push(d3_geom_polygonIntersect(c, d, a, b));
            }
            c = d;
          }
          if (closed)
            subject.push(subject[0]);
          a = b;
        }
        return subject;
      };
      function d3_geom_polygonInside(p, a, b) {
        return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
      }
      function d3_geom_polygonIntersect(c, d, a, b) {
        var x1 = c[0],
            x3 = a[0],
            x21 = d[0] - x1,
            x43 = b[0] - x3,
            y1 = c[1],
            y3 = a[1],
            y21 = d[1] - y1,
            y43 = b[1] - y3,
            ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
        return [x1 + ua * x21, y1 + ua * y21];
      }
      function d3_geom_polygonClosed(coordinates) {
        var a = coordinates[0],
            b = coordinates[coordinates.length - 1];
        return !(a[0] - b[0] || a[1] - b[1]);
      }
      var d3_geom_voronoiEdges,
          d3_geom_voronoiCells,
          d3_geom_voronoiBeaches,
          d3_geom_voronoiBeachPool = [],
          d3_geom_voronoiFirstCircle,
          d3_geom_voronoiCircles,
          d3_geom_voronoiCirclePool = [];
      function d3_geom_voronoiBeach() {
        d3_geom_voronoiRedBlackNode(this);
        this.edge = this.site = this.circle = null;
      }
      function d3_geom_voronoiCreateBeach(site) {
        var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
        beach.site = site;
        return beach;
      }
      function d3_geom_voronoiDetachBeach(beach) {
        d3_geom_voronoiDetachCircle(beach);
        d3_geom_voronoiBeaches.remove(beach);
        d3_geom_voronoiBeachPool.push(beach);
        d3_geom_voronoiRedBlackNode(beach);
      }
      function d3_geom_voronoiRemoveBeach(beach) {
        var circle = beach.circle,
            x = circle.x,
            y = circle.cy,
            vertex = {
              x: x,
              y: y
            },
            previous = beach.P,
            next = beach.N,
            disappearing = [beach];
        d3_geom_voronoiDetachBeach(beach);
        var lArc = previous;
        while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
          previous = lArc.P;
          disappearing.unshift(lArc);
          d3_geom_voronoiDetachBeach(lArc);
          lArc = previous;
        }
        disappearing.unshift(lArc);
        d3_geom_voronoiDetachCircle(lArc);
        var rArc = next;
        while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
          next = rArc.N;
          disappearing.push(rArc);
          d3_geom_voronoiDetachBeach(rArc);
          rArc = next;
        }
        disappearing.push(rArc);
        d3_geom_voronoiDetachCircle(rArc);
        var nArcs = disappearing.length,
            iArc;
        for (iArc = 1; iArc < nArcs; ++iArc) {
          rArc = disappearing[iArc];
          lArc = disappearing[iArc - 1];
          d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
        }
        lArc = disappearing[0];
        rArc = disappearing[nArcs - 1];
        rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
      }
      function d3_geom_voronoiAddBeach(site) {
        var x = site.x,
            directrix = site.y,
            lArc,
            rArc,
            dxl,
            dxr,
            node = d3_geom_voronoiBeaches._;
        while (node) {
          dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
          if (dxl > ε)
            node = node.L;
          else {
            dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
            if (dxr > ε) {
              if (!node.R) {
                lArc = node;
                break;
              }
              node = node.R;
            } else {
              if (dxl > -ε) {
                lArc = node.P;
                rArc = node;
              } else if (dxr > -ε) {
                lArc = node;
                rArc = node.N;
              } else {
                lArc = rArc = node;
              }
              break;
            }
          }
        }
        var newArc = d3_geom_voronoiCreateBeach(site);
        d3_geom_voronoiBeaches.insert(lArc, newArc);
        if (!lArc && !rArc)
          return;
        if (lArc === rArc) {
          d3_geom_voronoiDetachCircle(lArc);
          rArc = d3_geom_voronoiCreateBeach(lArc.site);
          d3_geom_voronoiBeaches.insert(newArc, rArc);
          newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
          d3_geom_voronoiAttachCircle(lArc);
          d3_geom_voronoiAttachCircle(rArc);
          return;
        }
        if (!rArc) {
          newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
          return;
        }
        d3_geom_voronoiDetachCircle(lArc);
        d3_geom_voronoiDetachCircle(rArc);
        var lSite = lArc.site,
            ax = lSite.x,
            ay = lSite.y,
            bx = site.x - ax,
            by = site.y - ay,
            rSite = rArc.site,
            cx = rSite.x - ax,
            cy = rSite.y - ay,
            d = 2 * (bx * cy - by * cx),
            hb = bx * bx + by * by,
            hc = cx * cx + cy * cy,
            vertex = {
              x: (cy * hb - by * hc) / d + ax,
              y: (bx * hc - cx * hb) / d + ay
            };
        d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
        newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
        rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
      }
      function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
        var site = arc.site,
            rfocx = site.x,
            rfocy = site.y,
            pby2 = rfocy - directrix;
        if (!pby2)
          return rfocx;
        var lArc = arc.P;
        if (!lArc)
          return -Infinity;
        site = lArc.site;
        var lfocx = site.x,
            lfocy = site.y,
            plby2 = lfocy - directrix;
        if (!plby2)
          return lfocx;
        var hl = lfocx - rfocx,
            aby2 = 1 / pby2 - 1 / plby2,
            b = hl / plby2;
        if (aby2)
          return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
        return (rfocx + lfocx) / 2;
      }
      function d3_geom_voronoiRightBreakPoint(arc, directrix) {
        var rArc = arc.N;
        if (rArc)
          return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
        var site = arc.site;
        return site.y === directrix ? site.x : Infinity;
      }
      function d3_geom_voronoiCell(site) {
        this.site = site;
        this.edges = [];
      }
      d3_geom_voronoiCell.prototype.prepare = function() {
        var halfEdges = this.edges,
            iHalfEdge = halfEdges.length,
            edge;
        while (iHalfEdge--) {
          edge = halfEdges[iHalfEdge].edge;
          if (!edge.b || !edge.a)
            halfEdges.splice(iHalfEdge, 1);
        }
        halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
        return halfEdges.length;
      };
      function d3_geom_voronoiCloseCells(extent) {
        var x0 = extent[0][0],
            x1 = extent[1][0],
            y0 = extent[0][1],
            y1 = extent[1][1],
            x2,
            y2,
            x3,
            y3,
            cells = d3_geom_voronoiCells,
            iCell = cells.length,
            cell,
            iHalfEdge,
            halfEdges,
            nHalfEdges,
            start,
            end;
        while (iCell--) {
          cell = cells[iCell];
          if (!cell || !cell.prepare())
            continue;
          halfEdges = cell.edges;
          nHalfEdges = halfEdges.length;
          iHalfEdge = 0;
          while (iHalfEdge < nHalfEdges) {
            end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
            start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
            if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
              halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
                x: x0,
                y: abs(x2 - x0) < ε ? y2 : y1
              } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
                x: abs(y2 - y1) < ε ? x2 : x1,
                y: y1
              } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
                x: x1,
                y: abs(x2 - x1) < ε ? y2 : y0
              } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
                x: abs(y2 - y0) < ε ? x2 : x0,
                y: y0
              } : null), cell.site, null));
              ++nHalfEdges;
            }
          }
        }
      }
      function d3_geom_voronoiHalfEdgeOrder(a, b) {
        return b.angle - a.angle;
      }
      function d3_geom_voronoiCircle() {
        d3_geom_voronoiRedBlackNode(this);
        this.x = this.y = this.arc = this.site = this.cy = null;
      }
      function d3_geom_voronoiAttachCircle(arc) {
        var lArc = arc.P,
            rArc = arc.N;
        if (!lArc || !rArc)
          return;
        var lSite = lArc.site,
            cSite = arc.site,
            rSite = rArc.site;
        if (lSite === rSite)
          return;
        var bx = cSite.x,
            by = cSite.y,
            ax = lSite.x - bx,
            ay = lSite.y - by,
            cx = rSite.x - bx,
            cy = rSite.y - by;
        var d = 2 * (ax * cy - ay * cx);
        if (d >= -ε2)
          return;
        var ha = ax * ax + ay * ay,
            hc = cx * cx + cy * cy,
            x = (cy * ha - ay * hc) / d,
            y = (ax * hc - cx * ha) / d,
            cy = y + by;
        var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
        circle.arc = arc;
        circle.site = cSite;
        circle.x = x + bx;
        circle.y = cy + Math.sqrt(x * x + y * y);
        circle.cy = cy;
        arc.circle = circle;
        var before = null,
            node = d3_geom_voronoiCircles._;
        while (node) {
          if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
            if (node.L)
              node = node.L;
            else {
              before = node.P;
              break;
            }
          } else {
            if (node.R)
              node = node.R;
            else {
              before = node;
              break;
            }
          }
        }
        d3_geom_voronoiCircles.insert(before, circle);
        if (!before)
          d3_geom_voronoiFirstCircle = circle;
      }
      function d3_geom_voronoiDetachCircle(arc) {
        var circle = arc.circle;
        if (circle) {
          if (!circle.P)
            d3_geom_voronoiFirstCircle = circle.N;
          d3_geom_voronoiCircles.remove(circle);
          d3_geom_voronoiCirclePool.push(circle);
          d3_geom_voronoiRedBlackNode(circle);
          arc.circle = null;
        }
      }
      function d3_geom_voronoiClipEdges(extent) {
        var edges = d3_geom_voronoiEdges,
            clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]),
            i = edges.length,
            e;
        while (i--) {
          e = edges[i];
          if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
            e.a = e.b = null;
            edges.splice(i, 1);
          }
        }
      }
      function d3_geom_voronoiConnectEdge(edge, extent) {
        var vb = edge.b;
        if (vb)
          return true;
        var va = edge.a,
            x0 = extent[0][0],
            x1 = extent[1][0],
            y0 = extent[0][1],
            y1 = extent[1][1],
            lSite = edge.l,
            rSite = edge.r,
            lx = lSite.x,
            ly = lSite.y,
            rx = rSite.x,
            ry = rSite.y,
            fx = (lx + rx) / 2,
            fy = (ly + ry) / 2,
            fm,
            fb;
        if (ry === ly) {
          if (fx < x0 || fx >= x1)
            return;
          if (lx > rx) {
            if (!va)
              va = {
                x: fx,
                y: y0
              };
            else if (va.y >= y1)
              return;
            vb = {
              x: fx,
              y: y1
            };
          } else {
            if (!va)
              va = {
                x: fx,
                y: y1
              };
            else if (va.y < y0)
              return;
            vb = {
              x: fx,
              y: y0
            };
          }
        } else {
          fm = (lx - rx) / (ry - ly);
          fb = fy - fm * fx;
          if (fm < -1 || fm > 1) {
            if (lx > rx) {
              if (!va)
                va = {
                  x: (y0 - fb) / fm,
                  y: y0
                };
              else if (va.y >= y1)
                return;
              vb = {
                x: (y1 - fb) / fm,
                y: y1
              };
            } else {
              if (!va)
                va = {
                  x: (y1 - fb) / fm,
                  y: y1
                };
              else if (va.y < y0)
                return;
              vb = {
                x: (y0 - fb) / fm,
                y: y0
              };
            }
          } else {
            if (ly < ry) {
              if (!va)
                va = {
                  x: x0,
                  y: fm * x0 + fb
                };
              else if (va.x >= x1)
                return;
              vb = {
                x: x1,
                y: fm * x1 + fb
              };
            } else {
              if (!va)
                va = {
                  x: x1,
                  y: fm * x1 + fb
                };
              else if (va.x < x0)
                return;
              vb = {
                x: x0,
                y: fm * x0 + fb
              };
            }
          }
        }
        edge.a = va;
        edge.b = vb;
        return true;
      }
      function d3_geom_voronoiEdge(lSite, rSite) {
        this.l = lSite;
        this.r = rSite;
        this.a = this.b = null;
      }
      function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, rSite);
        d3_geom_voronoiEdges.push(edge);
        if (va)
          d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
        if (vb)
          d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
        d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
        d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
        return edge;
      }
      function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, null);
        edge.a = va;
        edge.b = vb;
        d3_geom_voronoiEdges.push(edge);
        return edge;
      }
      function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
        if (!edge.a && !edge.b) {
          edge.a = vertex;
          edge.l = lSite;
          edge.r = rSite;
        } else if (edge.l === rSite) {
          edge.b = vertex;
        } else {
          edge.a = vertex;
        }
      }
      function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
        var va = edge.a,
            vb = edge.b;
        this.edge = edge;
        this.site = lSite;
        this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
      }
      d3_geom_voronoiHalfEdge.prototype = {
        start: function() {
          return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function() {
          return this.edge.l === this.site ? this.edge.b : this.edge.a;
        }
      };
      function d3_geom_voronoiRedBlackTree() {
        this._ = null;
      }
      function d3_geom_voronoiRedBlackNode(node) {
        node.U = node.C = node.L = node.R = node.P = node.N = null;
      }
      d3_geom_voronoiRedBlackTree.prototype = {
        insert: function(after, node) {
          var parent,
              grandpa,
              uncle;
          if (after) {
            node.P = after;
            node.N = after.N;
            if (after.N)
              after.N.P = node;
            after.N = node;
            if (after.R) {
              after = after.R;
              while (after.L)
                after = after.L;
              after.L = node;
            } else {
              after.R = node;
            }
            parent = after;
          } else if (this._) {
            after = d3_geom_voronoiRedBlackFirst(this._);
            node.P = null;
            node.N = after;
            after.P = after.L = node;
            parent = after;
          } else {
            node.P = node.N = null;
            this._ = node;
            parent = null;
          }
          node.L = node.R = null;
          node.U = parent;
          node.C = true;
          after = node;
          while (parent && parent.C) {
            grandpa = parent.U;
            if (parent === grandpa.L) {
              uncle = grandpa.R;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.R) {
                  d3_geom_voronoiRedBlackRotateLeft(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, grandpa);
              }
            } else {
              uncle = grandpa.L;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.L) {
                  d3_geom_voronoiRedBlackRotateRight(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
              }
            }
            parent = after.U;
          }
          this._.C = false;
        },
        remove: function(node) {
          if (node.N)
            node.N.P = node.P;
          if (node.P)
            node.P.N = node.N;
          node.N = node.P = null;
          var parent = node.U,
              sibling,
              left = node.L,
              right = node.R,
              next,
              red;
          if (!left)
            next = right;
          else if (!right)
            next = left;
          else
            next = d3_geom_voronoiRedBlackFirst(right);
          if (parent) {
            if (parent.L === node)
              parent.L = next;
            else
              parent.R = next;
          } else {
            this._ = next;
          }
          if (left && right) {
            red = next.C;
            next.C = node.C;
            next.L = left;
            left.U = next;
            if (next !== right) {
              parent = next.U;
              next.U = node.U;
              node = next.R;
              parent.L = node;
              next.R = right;
              right.U = next;
            } else {
              next.U = parent;
              parent = next;
              node = next.R;
            }
          } else {
            red = node.C;
            node = next;
          }
          if (node)
            node.U = parent;
          if (red)
            return;
          if (node && node.C) {
            node.C = false;
            return;
          }
          do {
            if (node === this._)
              break;
            if (node === parent.L) {
              sibling = parent.R;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                sibling = parent.R;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.R || !sibling.R.C) {
                  sibling.L.C = false;
                  sibling.C = true;
                  d3_geom_voronoiRedBlackRotateRight(this, sibling);
                  sibling = parent.R;
                }
                sibling.C = parent.C;
                parent.C = sibling.R.C = false;
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                node = this._;
                break;
              }
            } else {
              sibling = parent.L;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                sibling = parent.L;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.L || !sibling.L.C) {
                  sibling.R.C = false;
                  sibling.C = true;
                  d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                  sibling = parent.L;
                }
                sibling.C = parent.C;
                parent.C = sibling.L.C = false;
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                node = this._;
                break;
              }
            }
            sibling.C = true;
            node = parent;
            parent = parent.U;
          } while (!node.C);
          if (node)
            node.C = false;
        }
      };
      function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
        var p = node,
            q = node.R,
            parent = p.U;
        if (parent) {
          if (parent.L === p)
            parent.L = q;
          else
            parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.R = q.L;
        if (p.R)
          p.R.U = p;
        q.L = p;
      }
      function d3_geom_voronoiRedBlackRotateRight(tree, node) {
        var p = node,
            q = node.L,
            parent = p.U;
        if (parent) {
          if (parent.L === p)
            parent.L = q;
          else
            parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.L = q.R;
        if (p.L)
          p.L.U = p;
        q.R = p;
      }
      function d3_geom_voronoiRedBlackFirst(node) {
        while (node.L)
          node = node.L;
        return node;
      }
      function d3_geom_voronoi(sites, bbox) {
        var site = sites.sort(d3_geom_voronoiVertexOrder).pop(),
            x0,
            y0,
            circle;
        d3_geom_voronoiEdges = [];
        d3_geom_voronoiCells = new Array(sites.length);
        d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
        d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
        while (true) {
          circle = d3_geom_voronoiFirstCircle;
          if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
            if (site.x !== x0 || site.y !== y0) {
              d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
              d3_geom_voronoiAddBeach(site);
              x0 = site.x, y0 = site.y;
            }
            site = sites.pop();
          } else if (circle) {
            d3_geom_voronoiRemoveBeach(circle.arc);
          } else {
            break;
          }
        }
        if (bbox)
          d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
        var diagram = {
          cells: d3_geom_voronoiCells,
          edges: d3_geom_voronoiEdges
        };
        d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
        return diagram;
      }
      function d3_geom_voronoiVertexOrder(a, b) {
        return b.y - a.y || b.x - a.x;
      }
      d3.geom.voronoi = function(points) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            fx = x,
            fy = y,
            clipExtent = d3_geom_voronoiClipExtent;
        if (points)
          return voronoi(points);
        function voronoi(data) {
          var polygons = new Array(data.length),
              x0 = clipExtent[0][0],
              y0 = clipExtent[0][1],
              x1 = clipExtent[1][0],
              y1 = clipExtent[1][1];
          d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
            var edges = cell.edges,
                site = cell.site,
                polygon = polygons[i] = edges.length ? edges.map(function(e) {
                  var s = e.start();
                  return [s.x, s.y];
                }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]] : [];
            polygon.point = data[i];
          });
          return polygons;
        }
        function sites(data) {
          return data.map(function(d, i) {
            return {
              x: Math.round(fx(d, i) / ε) * ε,
              y: Math.round(fy(d, i) / ε) * ε,
              i: i
            };
          });
        }
        voronoi.links = function(data) {
          return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
            return edge.l && edge.r;
          }).map(function(edge) {
            return {
              source: data[edge.l.i],
              target: data[edge.r.i]
            };
          });
        };
        voronoi.triangles = function(data) {
          var triangles = [];
          d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
            var site = cell.site,
                edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),
                j = -1,
                m = edges.length,
                e0,
                s0,
                e1 = edges[m - 1].edge,
                s1 = e1.l === site ? e1.r : e1.l;
            while (++j < m) {
              e0 = e1;
              s0 = s1;
              e1 = edges[j].edge;
              s1 = e1.l === site ? e1.r : e1.l;
              if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
                triangles.push([data[i], data[s0.i], data[s1.i]]);
              }
            }
          });
          return triangles;
        };
        voronoi.x = function(_) {
          return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
        };
        voronoi.y = function(_) {
          return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
        };
        voronoi.clipExtent = function(_) {
          if (!arguments.length)
            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
          clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
          return voronoi;
        };
        voronoi.size = function(_) {
          if (!arguments.length)
            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
          return voronoi.clipExtent(_ && [[0, 0], _]);
        };
        return voronoi;
      };
      var d3_geom_voronoiClipExtent = [[-1e6, -1e6], [1e6, 1e6]];
      function d3_geom_voronoiTriangleArea(a, b, c) {
        return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
      }
      d3.geom.delaunay = function(vertices) {
        return d3.geom.voronoi().triangles(vertices);
      };
      d3.geom.quadtree = function(points, x1, y1, x2, y2) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            compat;
        if (compat = arguments.length) {
          x = d3_geom_quadtreeCompatX;
          y = d3_geom_quadtreeCompatY;
          if (compat === 3) {
            y2 = y1;
            x2 = x1;
            y1 = x1 = 0;
          }
          return quadtree(points);
        }
        function quadtree(data) {
          var d,
              fx = d3_functor(x),
              fy = d3_functor(y),
              xs,
              ys,
              i,
              n,
              x1_,
              y1_,
              x2_,
              y2_;
          if (x1 != null) {
            x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
          } else {
            x2_ = y2_ = -(x1_ = y1_ = Infinity);
            xs = [], ys = [];
            n = data.length;
            if (compat)
              for (i = 0; i < n; ++i) {
                d = data[i];
                if (d.x < x1_)
                  x1_ = d.x;
                if (d.y < y1_)
                  y1_ = d.y;
                if (d.x > x2_)
                  x2_ = d.x;
                if (d.y > y2_)
                  y2_ = d.y;
                xs.push(d.x);
                ys.push(d.y);
              }
            else
              for (i = 0; i < n; ++i) {
                var x_ = +fx(d = data[i], i),
                    y_ = +fy(d, i);
                if (x_ < x1_)
                  x1_ = x_;
                if (y_ < y1_)
                  y1_ = y_;
                if (x_ > x2_)
                  x2_ = x_;
                if (y_ > y2_)
                  y2_ = y_;
                xs.push(x_);
                ys.push(y_);
              }
          }
          var dx = x2_ - x1_,
              dy = y2_ - y1_;
          if (dx > dy)
            y2_ = y1_ + dx;
          else
            x2_ = x1_ + dy;
          function insert(n, d, x, y, x1, y1, x2, y2) {
            if (isNaN(x) || isNaN(y))
              return;
            if (n.leaf) {
              var nx = n.x,
                  ny = n.y;
              if (nx != null) {
                if (abs(nx - x) + abs(ny - y) < .01) {
                  insertChild(n, d, x, y, x1, y1, x2, y2);
                } else {
                  var nPoint = n.point;
                  n.x = n.y = n.point = null;
                  insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
                  insertChild(n, d, x, y, x1, y1, x2, y2);
                }
              } else {
                n.x = x, n.y = y, n.point = d;
              }
            } else {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          }
          function insertChild(n, d, x, y, x1, y1, x2, y2) {
            var xm = (x1 + x2) * .5,
                ym = (y1 + y2) * .5,
                right = x >= xm,
                below = y >= ym,
                i = below << 1 | right;
            n.leaf = false;
            n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
            if (right)
              x1 = xm;
            else
              x2 = xm;
            if (below)
              y1 = ym;
            else
              y2 = ym;
            insert(n, d, x, y, x1, y1, x2, y2);
          }
          var root = d3_geom_quadtreeNode();
          root.add = function(d) {
            insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
          };
          root.visit = function(f) {
            d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
          };
          root.find = function(point) {
            return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
          };
          i = -1;
          if (x1 == null) {
            while (++i < n) {
              insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
            }
            --i;
          } else
            data.forEach(root.add);
          xs = ys = data = d = null;
          return root;
        }
        quadtree.x = function(_) {
          return arguments.length ? (x = _, quadtree) : x;
        };
        quadtree.y = function(_) {
          return arguments.length ? (y = _, quadtree) : y;
        };
        quadtree.extent = function(_) {
          if (!arguments.length)
            return x1 == null ? null : [[x1, y1], [x2, y2]];
          if (_ == null)
            x1 = y1 = x2 = y2 = null;
          else
            x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
          return quadtree;
        };
        quadtree.size = function(_) {
          if (!arguments.length)
            return x1 == null ? null : [x2 - x1, y2 - y1];
          if (_ == null)
            x1 = y1 = x2 = y2 = null;
          else
            x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
          return quadtree;
        };
        return quadtree;
      };
      function d3_geom_quadtreeCompatX(d) {
        return d.x;
      }
      function d3_geom_quadtreeCompatY(d) {
        return d.y;
      }
      function d3_geom_quadtreeNode() {
        return {
          leaf: true,
          nodes: [],
          point: null,
          x: null,
          y: null
        };
      }
      function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
        if (!f(node, x1, y1, x2, y2)) {
          var sx = (x1 + x2) * .5,
              sy = (y1 + y2) * .5,
              children = node.nodes;
          if (children[0])
            d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
          if (children[1])
            d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
          if (children[2])
            d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
          if (children[3])
            d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
        }
      }
      function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
        var minDistance2 = Infinity,
            closestPoint;
        (function find(node, x1, y1, x2, y2) {
          if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0)
            return;
          if (point = node.point) {
            var point,
                dx = x - node.x,
                dy = y - node.y,
                distance2 = dx * dx + dy * dy;
            if (distance2 < minDistance2) {
              var distance = Math.sqrt(minDistance2 = distance2);
              x0 = x - distance, y0 = y - distance;
              x3 = x + distance, y3 = y + distance;
              closestPoint = point;
            }
          }
          var children = node.nodes,
              xm = (x1 + x2) * .5,
              ym = (y1 + y2) * .5,
              right = x >= xm,
              below = y >= ym;
          for (var i = below << 1 | right,
              j = i + 4; i < j; ++i) {
            if (node = children[i & 3])
              switch (i & 3) {
                case 0:
                  find(node, x1, y1, xm, ym);
                  break;
                case 1:
                  find(node, xm, y1, x2, ym);
                  break;
                case 2:
                  find(node, x1, ym, xm, y2);
                  break;
                case 3:
                  find(node, xm, ym, x2, y2);
                  break;
              }
          }
        })(root, x0, y0, x3, y3);
        return closestPoint;
      }
      d3.interpolateRgb = d3_interpolateRgb;
      function d3_interpolateRgb(a, b) {
        a = d3.rgb(a);
        b = d3.rgb(b);
        var ar = a.r,
            ag = a.g,
            ab = a.b,
            br = b.r - ar,
            bg = b.g - ag,
            bb = b.b - ab;
        return function(t) {
          return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
        };
      }
      d3.interpolateObject = d3_interpolateObject;
      function d3_interpolateObject(a, b) {
        var i = {},
            c = {},
            k;
        for (k in a) {
          if (k in b) {
            i[k] = d3_interpolate(a[k], b[k]);
          } else {
            c[k] = a[k];
          }
        }
        for (k in b) {
          if (!(k in a)) {
            c[k] = b[k];
          }
        }
        return function(t) {
          for (k in i)
            c[k] = i[k](t);
          return c;
        };
      }
      d3.interpolateNumber = d3_interpolateNumber;
      function d3_interpolateNumber(a, b) {
        a = +a, b = +b;
        return function(t) {
          return a * (1 - t) + b * t;
        };
      }
      d3.interpolateString = d3_interpolateString;
      function d3_interpolateString(a, b) {
        var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0,
            am,
            bm,
            bs,
            i = -1,
            s = [],
            q = [];
        a = a + "", b = b + "";
        while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
          if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i])
              s[i] += bs;
            else
              s[++i] = bs;
          }
          if ((am = am[0]) === (bm = bm[0])) {
            if (s[i])
              s[i] += bm;
            else
              s[++i] = bm;
          } else {
            s[++i] = null;
            q.push({
              i: i,
              x: d3_interpolateNumber(am, bm)
            });
          }
          bi = d3_interpolate_numberB.lastIndex;
        }
        if (bi < b.length) {
          bs = b.slice(bi);
          if (s[i])
            s[i] += bs;
          else
            s[++i] = bs;
        }
        return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
          return b(t) + "";
        }) : function() {
          return b;
        } : (b = q.length, function(t) {
          for (var i = 0,
              o; i < b; ++i)
            s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
      }
      var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
      d3.interpolate = d3_interpolate;
      function d3_interpolate(a, b) {
        var i = d3.interpolators.length,
            f;
        while (--i >= 0 && !(f = d3.interpolators[i](a, b)))
          ;
        return f;
      }
      d3.interpolators = [function(a, b) {
        var t = typeof b;
        return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
      }];
      d3.interpolateArray = d3_interpolateArray;
      function d3_interpolateArray(a, b) {
        var x = [],
            c = [],
            na = a.length,
            nb = b.length,
            n0 = Math.min(a.length, b.length),
            i;
        for (i = 0; i < n0; ++i)
          x.push(d3_interpolate(a[i], b[i]));
        for (; i < na; ++i)
          c[i] = a[i];
        for (; i < nb; ++i)
          c[i] = b[i];
        return function(t) {
          for (i = 0; i < n0; ++i)
            c[i] = x[i](t);
          return c;
        };
      }
      var d3_ease_default = function() {
        return d3_identity;
      };
      var d3_ease = d3.map({
        linear: d3_ease_default,
        poly: d3_ease_poly,
        quad: function() {
          return d3_ease_quad;
        },
        cubic: function() {
          return d3_ease_cubic;
        },
        sin: function() {
          return d3_ease_sin;
        },
        exp: function() {
          return d3_ease_exp;
        },
        circle: function() {
          return d3_ease_circle;
        },
        elastic: d3_ease_elastic,
        back: d3_ease_back,
        bounce: function() {
          return d3_ease_bounce;
        }
      });
      var d3_ease_mode = d3.map({
        "in": d3_identity,
        out: d3_ease_reverse,
        "in-out": d3_ease_reflect,
        "out-in": function(f) {
          return d3_ease_reflect(d3_ease_reverse(f));
        }
      });
      d3.ease = function(name) {
        var i = name.indexOf("-"),
            t = i >= 0 ? name.slice(0, i) : name,
            m = i >= 0 ? name.slice(i + 1) : "in";
        t = d3_ease.get(t) || d3_ease_default;
        m = d3_ease_mode.get(m) || d3_identity;
        return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
      };
      function d3_ease_clamp(f) {
        return function(t) {
          return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
        };
      }
      function d3_ease_reverse(f) {
        return function(t) {
          return 1 - f(1 - t);
        };
      }
      function d3_ease_reflect(f) {
        return function(t) {
          return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
        };
      }
      function d3_ease_quad(t) {
        return t * t;
      }
      function d3_ease_cubic(t) {
        return t * t * t;
      }
      function d3_ease_cubicInOut(t) {
        if (t <= 0)
          return 0;
        if (t >= 1)
          return 1;
        var t2 = t * t,
            t3 = t2 * t;
        return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
      }
      function d3_ease_poly(e) {
        return function(t) {
          return Math.pow(t, e);
        };
      }
      function d3_ease_sin(t) {
        return 1 - Math.cos(t * halfπ);
      }
      function d3_ease_exp(t) {
        return Math.pow(2, 10 * (t - 1));
      }
      function d3_ease_circle(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function d3_ease_elastic(a, p) {
        var s;
        if (arguments.length < 2)
          p = .45;
        if (arguments.length)
          s = p / τ * Math.asin(1 / a);
        else
          a = 1, s = p / 4;
        return function(t) {
          return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
        };
      }
      function d3_ease_back(s) {
        if (!s)
          s = 1.70158;
        return function(t) {
          return t * t * ((s + 1) * t - s);
        };
      }
      function d3_ease_bounce(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
      }
      d3.interpolateHcl = d3_interpolateHcl;
      function d3_interpolateHcl(a, b) {
        a = d3.hcl(a);
        b = d3.hcl(b);
        var ah = a.h,
            ac = a.c,
            al = a.l,
            bh = b.h - ah,
            bc = b.c - ac,
            bl = b.l - al;
        if (isNaN(bc))
          bc = 0, ac = isNaN(ac) ? b.c : ac;
        if (isNaN(bh))
          bh = 0, ah = isNaN(ah) ? b.h : ah;
        else if (bh > 180)
          bh -= 360;
        else if (bh < -180)
          bh += 360;
        return function(t) {
          return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
        };
      }
      d3.interpolateHsl = d3_interpolateHsl;
      function d3_interpolateHsl(a, b) {
        a = d3.hsl(a);
        b = d3.hsl(b);
        var ah = a.h,
            as = a.s,
            al = a.l,
            bh = b.h - ah,
            bs = b.s - as,
            bl = b.l - al;
        if (isNaN(bs))
          bs = 0, as = isNaN(as) ? b.s : as;
        if (isNaN(bh))
          bh = 0, ah = isNaN(ah) ? b.h : ah;
        else if (bh > 180)
          bh -= 360;
        else if (bh < -180)
          bh += 360;
        return function(t) {
          return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
        };
      }
      d3.interpolateLab = d3_interpolateLab;
      function d3_interpolateLab(a, b) {
        a = d3.lab(a);
        b = d3.lab(b);
        var al = a.l,
            aa = a.a,
            ab = a.b,
            bl = b.l - al,
            ba = b.a - aa,
            bb = b.b - ab;
        return function(t) {
          return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
        };
      }
      d3.interpolateRound = d3_interpolateRound;
      function d3_interpolateRound(a, b) {
        b -= a;
        return function(t) {
          return Math.round(a + b * t);
        };
      }
      d3.transform = function(string) {
        var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
        return (d3.transform = function(string) {
          if (string != null) {
            g.setAttribute("transform", string);
            var t = g.transform.baseVal.consolidate();
          }
          return new d3_transform(t ? t.matrix : d3_transformIdentity);
        })(string);
      };
      function d3_transform(m) {
        var r0 = [m.a, m.b],
            r1 = [m.c, m.d],
            kx = d3_transformNormalize(r0),
            kz = d3_transformDot(r0, r1),
            ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
        if (r0[0] * r1[1] < r1[0] * r0[1]) {
          r0[0] *= -1;
          r0[1] *= -1;
          kx *= -1;
          kz *= -1;
        }
        this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
        this.translate = [m.e, m.f];
        this.scale = [kx, ky];
        this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
      }
      d3_transform.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
      };
      function d3_transformDot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }
      function d3_transformNormalize(a) {
        var k = Math.sqrt(d3_transformDot(a, a));
        if (k) {
          a[0] /= k;
          a[1] /= k;
        }
        return k;
      }
      function d3_transformCombine(a, b, k) {
        a[0] += k * b[0];
        a[1] += k * b[1];
        return a;
      }
      var d3_transformIdentity = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      };
      d3.interpolateTransform = d3_interpolateTransform;
      function d3_interpolateTransformPop(s) {
        return s.length ? s.pop() + "," : "";
      }
      function d3_interpolateTranslate(ta, tb, s, q) {
        if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
          var i = s.push("translate(", null, ",", null, ")");
          q.push({
            i: i - 4,
            x: d3_interpolateNumber(ta[0], tb[0])
          }, {
            i: i - 2,
            x: d3_interpolateNumber(ta[1], tb[1])
          });
        } else if (tb[0] || tb[1]) {
          s.push("translate(" + tb + ")");
        }
      }
      function d3_interpolateRotate(ra, rb, s, q) {
        if (ra !== rb) {
          if (ra - rb > 180)
            rb += 360;
          else if (rb - ra > 180)
            ra += 360;
          q.push({
            i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
            x: d3_interpolateNumber(ra, rb)
          });
        } else if (rb) {
          s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
        }
      }
      function d3_interpolateSkew(wa, wb, s, q) {
        if (wa !== wb) {
          q.push({
            i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
            x: d3_interpolateNumber(wa, wb)
          });
        } else if (wb) {
          s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
        }
      }
      function d3_interpolateScale(ka, kb, s, q) {
        if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
          var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
          q.push({
            i: i - 4,
            x: d3_interpolateNumber(ka[0], kb[0])
          }, {
            i: i - 2,
            x: d3_interpolateNumber(ka[1], kb[1])
          });
        } else if (kb[0] !== 1 || kb[1] !== 1) {
          s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
        }
      }
      function d3_interpolateTransform(a, b) {
        var s = [],
            q = [];
        a = d3.transform(a), b = d3.transform(b);
        d3_interpolateTranslate(a.translate, b.translate, s, q);
        d3_interpolateRotate(a.rotate, b.rotate, s, q);
        d3_interpolateSkew(a.skew, b.skew, s, q);
        d3_interpolateScale(a.scale, b.scale, s, q);
        a = b = null;
        return function(t) {
          var i = -1,
              n = q.length,
              o;
          while (++i < n)
            s[(o = q[i]).i] = o.x(t);
          return s.join("");
        };
      }
      function d3_uninterpolateNumber(a, b) {
        b = (b -= a = +a) || 1 / b;
        return function(x) {
          return (x - a) / b;
        };
      }
      function d3_uninterpolateClamp(a, b) {
        b = (b -= a = +a) || 1 / b;
        return function(x) {
          return Math.max(0, Math.min(1, (x - a) / b));
        };
      }
      d3.layout = {};
      d3.layout.bundle = function() {
        return function(links) {
          var paths = [],
              i = -1,
              n = links.length;
          while (++i < n)
            paths.push(d3_layout_bundlePath(links[i]));
          return paths;
        };
      };
      function d3_layout_bundlePath(link) {
        var start = link.source,
            end = link.target,
            lca = d3_layout_bundleLeastCommonAncestor(start, end),
            points = [start];
        while (start !== lca) {
          start = start.parent;
          points.push(start);
        }
        var k = points.length;
        while (end !== lca) {
          points.splice(k, 0, end);
          end = end.parent;
        }
        return points;
      }
      function d3_layout_bundleAncestors(node) {
        var ancestors = [],
            parent = node.parent;
        while (parent != null) {
          ancestors.push(node);
          node = parent;
          parent = parent.parent;
        }
        ancestors.push(node);
        return ancestors;
      }
      function d3_layout_bundleLeastCommonAncestor(a, b) {
        if (a === b)
          return a;
        var aNodes = d3_layout_bundleAncestors(a),
            bNodes = d3_layout_bundleAncestors(b),
            aNode = aNodes.pop(),
            bNode = bNodes.pop(),
            sharedNode = null;
        while (aNode === bNode) {
          sharedNode = aNode;
          aNode = aNodes.pop();
          bNode = bNodes.pop();
        }
        return sharedNode;
      }
      d3.layout.chord = function() {
        var chord = {},
            chords,
            groups,
            matrix,
            n,
            padding = 0,
            sortGroups,
            sortSubgroups,
            sortChords;
        function relayout() {
          var subgroups = {},
              groupSums = [],
              groupIndex = d3.range(n),
              subgroupIndex = [],
              k,
              x,
              x0,
              i,
              j;
          chords = [];
          groups = [];
          k = 0, i = -1;
          while (++i < n) {
            x = 0, j = -1;
            while (++j < n) {
              x += matrix[i][j];
            }
            groupSums.push(x);
            subgroupIndex.push(d3.range(n));
            k += x;
          }
          if (sortGroups) {
            groupIndex.sort(function(a, b) {
              return sortGroups(groupSums[a], groupSums[b]);
            });
          }
          if (sortSubgroups) {
            subgroupIndex.forEach(function(d, i) {
              d.sort(function(a, b) {
                return sortSubgroups(matrix[i][a], matrix[i][b]);
              });
            });
          }
          k = (τ - padding * n) / k;
          x = 0, i = -1;
          while (++i < n) {
            x0 = x, j = -1;
            while (++j < n) {
              var di = groupIndex[i],
                  dj = subgroupIndex[di][j],
                  v = matrix[di][dj],
                  a0 = x,
                  a1 = x += v * k;
              subgroups[di + "-" + dj] = {
                index: di,
                subindex: dj,
                startAngle: a0,
                endAngle: a1,
                value: v
              };
            }
            groups[di] = {
              index: di,
              startAngle: x0,
              endAngle: x,
              value: groupSums[di]
            };
            x += padding;
          }
          i = -1;
          while (++i < n) {
            j = i - 1;
            while (++j < n) {
              var source = subgroups[i + "-" + j],
                  target = subgroups[j + "-" + i];
              if (source.value || target.value) {
                chords.push(source.value < target.value ? {
                  source: target,
                  target: source
                } : {
                  source: source,
                  target: target
                });
              }
            }
          }
          if (sortChords)
            resort();
        }
        function resort() {
          chords.sort(function(a, b) {
            return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
          });
        }
        chord.matrix = function(x) {
          if (!arguments.length)
            return matrix;
          n = (matrix = x) && matrix.length;
          chords = groups = null;
          return chord;
        };
        chord.padding = function(x) {
          if (!arguments.length)
            return padding;
          padding = x;
          chords = groups = null;
          return chord;
        };
        chord.sortGroups = function(x) {
          if (!arguments.length)
            return sortGroups;
          sortGroups = x;
          chords = groups = null;
          return chord;
        };
        chord.sortSubgroups = function(x) {
          if (!arguments.length)
            return sortSubgroups;
          sortSubgroups = x;
          chords = null;
          return chord;
        };
        chord.sortChords = function(x) {
          if (!arguments.length)
            return sortChords;
          sortChords = x;
          if (chords)
            resort();
          return chord;
        };
        chord.chords = function() {
          if (!chords)
            relayout();
          return chords;
        };
        chord.groups = function() {
          if (!groups)
            relayout();
          return groups;
        };
        return chord;
      };
      d3.layout.force = function() {
        var force = {},
            event = d3.dispatch("start", "tick", "end"),
            timer,
            size = [1, 1],
            drag,
            alpha,
            friction = .9,
            linkDistance = d3_layout_forceLinkDistance,
            linkStrength = d3_layout_forceLinkStrength,
            charge = -30,
            chargeDistance2 = d3_layout_forceChargeDistance2,
            gravity = .1,
            theta2 = .64,
            nodes = [],
            links = [],
            distances,
            strengths,
            charges;
        function repulse(node) {
          return function(quad, x1, _, x2) {
            if (quad.point !== node) {
              var dx = quad.cx - node.x,
                  dy = quad.cy - node.y,
                  dw = x2 - x1,
                  dn = dx * dx + dy * dy;
              if (dw * dw / theta2 < dn) {
                if (dn < chargeDistance2) {
                  var k = quad.charge / dn;
                  node.px -= dx * k;
                  node.py -= dy * k;
                }
                return true;
              }
              if (quad.point && dn && dn < chargeDistance2) {
                var k = quad.pointCharge / dn;
                node.px -= dx * k;
                node.py -= dy * k;
              }
            }
            return !quad.charge;
          };
        }
        force.tick = function() {
          if ((alpha *= .99) < .005) {
            timer = null;
            event.end({
              type: "end",
              alpha: alpha = 0
            });
            return true;
          }
          var n = nodes.length,
              m = links.length,
              q,
              i,
              o,
              s,
              t,
              l,
              k,
              x,
              y;
          for (i = 0; i < m; ++i) {
            o = links[i];
            s = o.source;
            t = o.target;
            x = t.x - s.x;
            y = t.y - s.y;
            if (l = x * x + y * y) {
              l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
              x *= l;
              y *= l;
              t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
              t.y -= y * k;
              s.x += x * (k = 1 - k);
              s.y += y * k;
            }
          }
          if (k = alpha * gravity) {
            x = size[0] / 2;
            y = size[1] / 2;
            i = -1;
            if (k)
              while (++i < n) {
                o = nodes[i];
                o.x += (x - o.x) * k;
                o.y += (y - o.y) * k;
              }
          }
          if (charge) {
            d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
            i = -1;
            while (++i < n) {
              if (!(o = nodes[i]).fixed) {
                q.visit(repulse(o));
              }
            }
          }
          i = -1;
          while (++i < n) {
            o = nodes[i];
            if (o.fixed) {
              o.x = o.px;
              o.y = o.py;
            } else {
              o.x -= (o.px - (o.px = o.x)) * friction;
              o.y -= (o.py - (o.py = o.y)) * friction;
            }
          }
          event.tick({
            type: "tick",
            alpha: alpha
          });
        };
        force.nodes = function(x) {
          if (!arguments.length)
            return nodes;
          nodes = x;
          return force;
        };
        force.links = function(x) {
          if (!arguments.length)
            return links;
          links = x;
          return force;
        };
        force.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return force;
        };
        force.linkDistance = function(x) {
          if (!arguments.length)
            return linkDistance;
          linkDistance = typeof x === "function" ? x : +x;
          return force;
        };
        force.distance = force.linkDistance;
        force.linkStrength = function(x) {
          if (!arguments.length)
            return linkStrength;
          linkStrength = typeof x === "function" ? x : +x;
          return force;
        };
        force.friction = function(x) {
          if (!arguments.length)
            return friction;
          friction = +x;
          return force;
        };
        force.charge = function(x) {
          if (!arguments.length)
            return charge;
          charge = typeof x === "function" ? x : +x;
          return force;
        };
        force.chargeDistance = function(x) {
          if (!arguments.length)
            return Math.sqrt(chargeDistance2);
          chargeDistance2 = x * x;
          return force;
        };
        force.gravity = function(x) {
          if (!arguments.length)
            return gravity;
          gravity = +x;
          return force;
        };
        force.theta = function(x) {
          if (!arguments.length)
            return Math.sqrt(theta2);
          theta2 = x * x;
          return force;
        };
        force.alpha = function(x) {
          if (!arguments.length)
            return alpha;
          x = +x;
          if (alpha) {
            if (x > 0) {
              alpha = x;
            } else {
              timer.c = null, timer.t = NaN, timer = null;
              event.end({
                type: "end",
                alpha: alpha = 0
              });
            }
          } else if (x > 0) {
            event.start({
              type: "start",
              alpha: alpha = x
            });
            timer = d3_timer(force.tick);
          }
          return force;
        };
        force.start = function() {
          var i,
              n = nodes.length,
              m = links.length,
              w = size[0],
              h = size[1],
              neighbors,
              o;
          for (i = 0; i < n; ++i) {
            (o = nodes[i]).index = i;
            o.weight = 0;
          }
          for (i = 0; i < m; ++i) {
            o = links[i];
            if (typeof o.source == "number")
              o.source = nodes[o.source];
            if (typeof o.target == "number")
              o.target = nodes[o.target];
            ++o.source.weight;
            ++o.target.weight;
          }
          for (i = 0; i < n; ++i) {
            o = nodes[i];
            if (isNaN(o.x))
              o.x = position("x", w);
            if (isNaN(o.y))
              o.y = position("y", h);
            if (isNaN(o.px))
              o.px = o.x;
            if (isNaN(o.py))
              o.py = o.y;
          }
          distances = [];
          if (typeof linkDistance === "function")
            for (i = 0; i < m; ++i)
              distances[i] = +linkDistance.call(this, links[i], i);
          else
            for (i = 0; i < m; ++i)
              distances[i] = linkDistance;
          strengths = [];
          if (typeof linkStrength === "function")
            for (i = 0; i < m; ++i)
              strengths[i] = +linkStrength.call(this, links[i], i);
          else
            for (i = 0; i < m; ++i)
              strengths[i] = linkStrength;
          charges = [];
          if (typeof charge === "function")
            for (i = 0; i < n; ++i)
              charges[i] = +charge.call(this, nodes[i], i);
          else
            for (i = 0; i < n; ++i)
              charges[i] = charge;
          function position(dimension, size) {
            if (!neighbors) {
              neighbors = new Array(n);
              for (j = 0; j < n; ++j) {
                neighbors[j] = [];
              }
              for (j = 0; j < m; ++j) {
                var o = links[j];
                neighbors[o.source.index].push(o.target);
                neighbors[o.target.index].push(o.source);
              }
            }
            var candidates = neighbors[i],
                j = -1,
                l = candidates.length,
                x;
            while (++j < l)
              if (!isNaN(x = candidates[j][dimension]))
                return x;
            return Math.random() * size;
          }
          return force.resume();
        };
        force.resume = function() {
          return force.alpha(.1);
        };
        force.stop = function() {
          return force.alpha(0);
        };
        force.drag = function() {
          if (!drag)
            drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
          if (!arguments.length)
            return drag;
          this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
        };
        function dragmove(d) {
          d.px = d3.event.x, d.py = d3.event.y;
          force.resume();
        }
        return d3.rebind(force, event, "on");
      };
      function d3_layout_forceDragstart(d) {
        d.fixed |= 2;
      }
      function d3_layout_forceDragend(d) {
        d.fixed &= ~6;
      }
      function d3_layout_forceMouseover(d) {
        d.fixed |= 4;
        d.px = d.x, d.py = d.y;
      }
      function d3_layout_forceMouseout(d) {
        d.fixed &= ~4;
      }
      function d3_layout_forceAccumulate(quad, alpha, charges) {
        var cx = 0,
            cy = 0;
        quad.charge = 0;
        if (!quad.leaf) {
          var nodes = quad.nodes,
              n = nodes.length,
              i = -1,
              c;
          while (++i < n) {
            c = nodes[i];
            if (c == null)
              continue;
            d3_layout_forceAccumulate(c, alpha, charges);
            quad.charge += c.charge;
            cx += c.charge * c.cx;
            cy += c.charge * c.cy;
          }
        }
        if (quad.point) {
          if (!quad.leaf) {
            quad.point.x += Math.random() - .5;
            quad.point.y += Math.random() - .5;
          }
          var k = alpha * charges[quad.point.index];
          quad.charge += quad.pointCharge = k;
          cx += k * quad.point.x;
          cy += k * quad.point.y;
        }
        quad.cx = cx / quad.charge;
        quad.cy = cy / quad.charge;
      }
      var d3_layout_forceLinkDistance = 20,
          d3_layout_forceLinkStrength = 1,
          d3_layout_forceChargeDistance2 = Infinity;
      d3.layout.hierarchy = function() {
        var sort = d3_layout_hierarchySort,
            children = d3_layout_hierarchyChildren,
            value = d3_layout_hierarchyValue;
        function hierarchy(root) {
          var stack = [root],
              nodes = [],
              node;
          root.depth = 0;
          while ((node = stack.pop()) != null) {
            nodes.push(node);
            if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
              var n,
                  childs,
                  child;
              while (--n >= 0) {
                stack.push(child = childs[n]);
                child.parent = node;
                child.depth = node.depth + 1;
              }
              if (value)
                node.value = 0;
              node.children = childs;
            } else {
              if (value)
                node.value = +value.call(hierarchy, node, node.depth) || 0;
              delete node.children;
            }
          }
          d3_layout_hierarchyVisitAfter(root, function(node) {
            var childs,
                parent;
            if (sort && (childs = node.children))
              childs.sort(sort);
            if (value && (parent = node.parent))
              parent.value += node.value;
          });
          return nodes;
        }
        hierarchy.sort = function(x) {
          if (!arguments.length)
            return sort;
          sort = x;
          return hierarchy;
        };
        hierarchy.children = function(x) {
          if (!arguments.length)
            return children;
          children = x;
          return hierarchy;
        };
        hierarchy.value = function(x) {
          if (!arguments.length)
            return value;
          value = x;
          return hierarchy;
        };
        hierarchy.revalue = function(root) {
          if (value) {
            d3_layout_hierarchyVisitBefore(root, function(node) {
              if (node.children)
                node.value = 0;
            });
            d3_layout_hierarchyVisitAfter(root, function(node) {
              var parent;
              if (!node.children)
                node.value = +value.call(hierarchy, node, node.depth) || 0;
              if (parent = node.parent)
                parent.value += node.value;
            });
          }
          return root;
        };
        return hierarchy;
      };
      function d3_layout_hierarchyRebind(object, hierarchy) {
        d3.rebind(object, hierarchy, "sort", "children", "value");
        object.nodes = object;
        object.links = d3_layout_hierarchyLinks;
        return object;
      }
      function d3_layout_hierarchyVisitBefore(node, callback) {
        var nodes = [node];
        while ((node = nodes.pop()) != null) {
          callback(node);
          if ((children = node.children) && (n = children.length)) {
            var n,
                children;
            while (--n >= 0)
              nodes.push(children[n]);
          }
        }
      }
      function d3_layout_hierarchyVisitAfter(node, callback) {
        var nodes = [node],
            nodes2 = [];
        while ((node = nodes.pop()) != null) {
          nodes2.push(node);
          if ((children = node.children) && (n = children.length)) {
            var i = -1,
                n,
                children;
            while (++i < n)
              nodes.push(children[i]);
          }
        }
        while ((node = nodes2.pop()) != null) {
          callback(node);
        }
      }
      function d3_layout_hierarchyChildren(d) {
        return d.children;
      }
      function d3_layout_hierarchyValue(d) {
        return d.value;
      }
      function d3_layout_hierarchySort(a, b) {
        return b.value - a.value;
      }
      function d3_layout_hierarchyLinks(nodes) {
        return d3.merge(nodes.map(function(parent) {
          return (parent.children || []).map(function(child) {
            return {
              source: parent,
              target: child
            };
          });
        }));
      }
      d3.layout.partition = function() {
        var hierarchy = d3.layout.hierarchy(),
            size = [1, 1];
        function position(node, x, dx, dy) {
          var children = node.children;
          node.x = x;
          node.y = node.depth * dy;
          node.dx = dx;
          node.dy = dy;
          if (children && (n = children.length)) {
            var i = -1,
                n,
                c,
                d;
            dx = node.value ? dx / node.value : 0;
            while (++i < n) {
              position(c = children[i], x, d = c.value * dx, dy);
              x += d;
            }
          }
        }
        function depth(node) {
          var children = node.children,
              d = 0;
          if (children && (n = children.length)) {
            var i = -1,
                n;
            while (++i < n)
              d = Math.max(d, depth(children[i]));
          }
          return 1 + d;
        }
        function partition(d, i) {
          var nodes = hierarchy.call(this, d, i);
          position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
          return nodes;
        }
        partition.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return partition;
        };
        return d3_layout_hierarchyRebind(partition, hierarchy);
      };
      d3.layout.pie = function() {
        var value = Number,
            sort = d3_layout_pieSortByValue,
            startAngle = 0,
            endAngle = τ,
            padAngle = 0;
        function pie(data) {
          var n = data.length,
              values = data.map(function(d, i) {
                return +value.call(pie, d, i);
              }),
              a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle),
              da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a,
              p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)),
              pa = p * (da < 0 ? -1 : 1),
              sum = d3.sum(values),
              k = sum ? (da - n * pa) / sum : 0,
              index = d3.range(n),
              arcs = [],
              v;
          if (sort != null)
            index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
              return values[j] - values[i];
            } : function(i, j) {
              return sort(data[i], data[j]);
            });
          index.forEach(function(i) {
            arcs[i] = {
              data: data[i],
              value: v = values[i],
              startAngle: a,
              endAngle: a += v * k + pa,
              padAngle: p
            };
          });
          return arcs;
        }
        pie.value = function(_) {
          if (!arguments.length)
            return value;
          value = _;
          return pie;
        };
        pie.sort = function(_) {
          if (!arguments.length)
            return sort;
          sort = _;
          return pie;
        };
        pie.startAngle = function(_) {
          if (!arguments.length)
            return startAngle;
          startAngle = _;
          return pie;
        };
        pie.endAngle = function(_) {
          if (!arguments.length)
            return endAngle;
          endAngle = _;
          return pie;
        };
        pie.padAngle = function(_) {
          if (!arguments.length)
            return padAngle;
          padAngle = _;
          return pie;
        };
        return pie;
      };
      var d3_layout_pieSortByValue = {};
      d3.layout.stack = function() {
        var values = d3_identity,
            order = d3_layout_stackOrderDefault,
            offset = d3_layout_stackOffsetZero,
            out = d3_layout_stackOut,
            x = d3_layout_stackX,
            y = d3_layout_stackY;
        function stack(data, index) {
          if (!(n = data.length))
            return data;
          var series = data.map(function(d, i) {
            return values.call(stack, d, i);
          });
          var points = series.map(function(d) {
            return d.map(function(v, i) {
              return [x.call(stack, v, i), y.call(stack, v, i)];
            });
          });
          var orders = order.call(stack, points, index);
          series = d3.permute(series, orders);
          points = d3.permute(points, orders);
          var offsets = offset.call(stack, points, index);
          var m = series[0].length,
              n,
              i,
              j,
              o;
          for (j = 0; j < m; ++j) {
            out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
            for (i = 1; i < n; ++i) {
              out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
            }
          }
          return data;
        }
        stack.values = function(x) {
          if (!arguments.length)
            return values;
          values = x;
          return stack;
        };
        stack.order = function(x) {
          if (!arguments.length)
            return order;
          order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
          return stack;
        };
        stack.offset = function(x) {
          if (!arguments.length)
            return offset;
          offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
          return stack;
        };
        stack.x = function(z) {
          if (!arguments.length)
            return x;
          x = z;
          return stack;
        };
        stack.y = function(z) {
          if (!arguments.length)
            return y;
          y = z;
          return stack;
        };
        stack.out = function(z) {
          if (!arguments.length)
            return out;
          out = z;
          return stack;
        };
        return stack;
      };
      function d3_layout_stackX(d) {
        return d.x;
      }
      function d3_layout_stackY(d) {
        return d.y;
      }
      function d3_layout_stackOut(d, y0, y) {
        d.y0 = y0;
        d.y = y;
      }
      var d3_layout_stackOrders = d3.map({
        "inside-out": function(data) {
          var n = data.length,
              i,
              j,
              max = data.map(d3_layout_stackMaxIndex),
              sums = data.map(d3_layout_stackReduceSum),
              index = d3.range(n).sort(function(a, b) {
                return max[a] - max[b];
              }),
              top = 0,
              bottom = 0,
              tops = [],
              bottoms = [];
          for (i = 0; i < n; ++i) {
            j = index[i];
            if (top < bottom) {
              top += sums[j];
              tops.push(j);
            } else {
              bottom += sums[j];
              bottoms.push(j);
            }
          }
          return bottoms.reverse().concat(tops);
        },
        reverse: function(data) {
          return d3.range(data.length).reverse();
        },
        "default": d3_layout_stackOrderDefault
      });
      var d3_layout_stackOffsets = d3.map({
        silhouette: function(data) {
          var n = data.length,
              m = data[0].length,
              sums = [],
              max = 0,
              i,
              j,
              o,
              y0 = [];
          for (j = 0; j < m; ++j) {
            for (i = 0, o = 0; i < n; i++)
              o += data[i][j][1];
            if (o > max)
              max = o;
            sums.push(o);
          }
          for (j = 0; j < m; ++j) {
            y0[j] = (max - sums[j]) / 2;
          }
          return y0;
        },
        wiggle: function(data) {
          var n = data.length,
              x = data[0],
              m = x.length,
              i,
              j,
              k,
              s1,
              s2,
              s3,
              dx,
              o,
              o0,
              y0 = [];
          y0[0] = o = o0 = 0;
          for (j = 1; j < m; ++j) {
            for (i = 0, s1 = 0; i < n; ++i)
              s1 += data[i][j][1];
            for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
              for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
                s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
              }
              s2 += s3 * data[i][j][1];
            }
            y0[j] = o -= s1 ? s2 / s1 * dx : 0;
            if (o < o0)
              o0 = o;
          }
          for (j = 0; j < m; ++j)
            y0[j] -= o0;
          return y0;
        },
        expand: function(data) {
          var n = data.length,
              m = data[0].length,
              k = 1 / n,
              i,
              j,
              o,
              y0 = [];
          for (j = 0; j < m; ++j) {
            for (i = 0, o = 0; i < n; i++)
              o += data[i][j][1];
            if (o)
              for (i = 0; i < n; i++)
                data[i][j][1] /= o;
            else
              for (i = 0; i < n; i++)
                data[i][j][1] = k;
          }
          for (j = 0; j < m; ++j)
            y0[j] = 0;
          return y0;
        },
        zero: d3_layout_stackOffsetZero
      });
      function d3_layout_stackOrderDefault(data) {
        return d3.range(data.length);
      }
      function d3_layout_stackOffsetZero(data) {
        var j = -1,
            m = data[0].length,
            y0 = [];
        while (++j < m)
          y0[j] = 0;
        return y0;
      }
      function d3_layout_stackMaxIndex(array) {
        var i = 1,
            j = 0,
            v = array[0][1],
            k,
            n = array.length;
        for (; i < n; ++i) {
          if ((k = array[i][1]) > v) {
            j = i;
            v = k;
          }
        }
        return j;
      }
      function d3_layout_stackReduceSum(d) {
        return d.reduce(d3_layout_stackSum, 0);
      }
      function d3_layout_stackSum(p, d) {
        return p + d[1];
      }
      d3.layout.histogram = function() {
        var frequency = true,
            valuer = Number,
            ranger = d3_layout_histogramRange,
            binner = d3_layout_histogramBinSturges;
        function histogram(data, i) {
          var bins = [],
              values = data.map(valuer, this),
              range = ranger.call(this, values, i),
              thresholds = binner.call(this, range, values, i),
              bin,
              i = -1,
              n = values.length,
              m = thresholds.length - 1,
              k = frequency ? 1 : 1 / n,
              x;
          while (++i < m) {
            bin = bins[i] = [];
            bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
            bin.y = 0;
          }
          if (m > 0) {
            i = -1;
            while (++i < n) {
              x = values[i];
              if (x >= range[0] && x <= range[1]) {
                bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
                bin.y += k;
                bin.push(data[i]);
              }
            }
          }
          return bins;
        }
        histogram.value = function(x) {
          if (!arguments.length)
            return valuer;
          valuer = x;
          return histogram;
        };
        histogram.range = function(x) {
          if (!arguments.length)
            return ranger;
          ranger = d3_functor(x);
          return histogram;
        };
        histogram.bins = function(x) {
          if (!arguments.length)
            return binner;
          binner = typeof x === "number" ? function(range) {
            return d3_layout_histogramBinFixed(range, x);
          } : d3_functor(x);
          return histogram;
        };
        histogram.frequency = function(x) {
          if (!arguments.length)
            return frequency;
          frequency = !!x;
          return histogram;
        };
        return histogram;
      };
      function d3_layout_histogramBinSturges(range, values) {
        return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
      }
      function d3_layout_histogramBinFixed(range, n) {
        var x = -1,
            b = +range[0],
            m = (range[1] - b) / n,
            f = [];
        while (++x <= n)
          f[x] = m * x + b;
        return f;
      }
      function d3_layout_histogramRange(values) {
        return [d3.min(values), d3.max(values)];
      }
      d3.layout.pack = function() {
        var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort),
            padding = 0,
            size = [1, 1],
            radius;
        function pack(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root = nodes[0],
              w = size[0],
              h = size[1],
              r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
                return radius;
              };
          root.x = root.y = 0;
          d3_layout_hierarchyVisitAfter(root, function(d) {
            d.r = +r(d.value);
          });
          d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
          if (padding) {
            var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
            d3_layout_hierarchyVisitAfter(root, function(d) {
              d.r += dr;
            });
            d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
            d3_layout_hierarchyVisitAfter(root, function(d) {
              d.r -= dr;
            });
          }
          d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
          return nodes;
        }
        pack.size = function(_) {
          if (!arguments.length)
            return size;
          size = _;
          return pack;
        };
        pack.radius = function(_) {
          if (!arguments.length)
            return radius;
          radius = _ == null || typeof _ === "function" ? _ : +_;
          return pack;
        };
        pack.padding = function(_) {
          if (!arguments.length)
            return padding;
          padding = +_;
          return pack;
        };
        return d3_layout_hierarchyRebind(pack, hierarchy);
      };
      function d3_layout_packSort(a, b) {
        return a.value - b.value;
      }
      function d3_layout_packInsert(a, b) {
        var c = a._pack_next;
        a._pack_next = b;
        b._pack_prev = a;
        b._pack_next = c;
        c._pack_prev = b;
      }
      function d3_layout_packSplice(a, b) {
        a._pack_next = b;
        b._pack_prev = a;
      }
      function d3_layout_packIntersects(a, b) {
        var dx = b.x - a.x,
            dy = b.y - a.y,
            dr = a.r + b.r;
        return .999 * dr * dr > dx * dx + dy * dy;
      }
      function d3_layout_packSiblings(node) {
        if (!(nodes = node.children) || !(n = nodes.length))
          return;
        var nodes,
            xMin = Infinity,
            xMax = -Infinity,
            yMin = Infinity,
            yMax = -Infinity,
            a,
            b,
            c,
            i,
            j,
            k,
            n;
        function bound(node) {
          xMin = Math.min(node.x - node.r, xMin);
          xMax = Math.max(node.x + node.r, xMax);
          yMin = Math.min(node.y - node.r, yMin);
          yMax = Math.max(node.y + node.r, yMax);
        }
        nodes.forEach(d3_layout_packLink);
        a = nodes[0];
        a.x = -a.r;
        a.y = 0;
        bound(a);
        if (n > 1) {
          b = nodes[1];
          b.x = b.r;
          b.y = 0;
          bound(b);
          if (n > 2) {
            c = nodes[2];
            d3_layout_packPlace(a, b, c);
            bound(c);
            d3_layout_packInsert(a, c);
            a._pack_prev = c;
            d3_layout_packInsert(c, b);
            b = a._pack_next;
            for (i = 3; i < n; i++) {
              d3_layout_packPlace(a, b, c = nodes[i]);
              var isect = 0,
                  s1 = 1,
                  s2 = 1;
              for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
                if (d3_layout_packIntersects(j, c)) {
                  isect = 1;
                  break;
                }
              }
              if (isect == 1) {
                for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
                  if (d3_layout_packIntersects(k, c)) {
                    break;
                  }
                }
              }
              if (isect) {
                if (s1 < s2 || s1 == s2 && b.r < a.r)
                  d3_layout_packSplice(a, b = j);
                else
                  d3_layout_packSplice(a = k, b);
                i--;
              } else {
                d3_layout_packInsert(a, c);
                b = c;
                bound(c);
              }
            }
          }
        }
        var cx = (xMin + xMax) / 2,
            cy = (yMin + yMax) / 2,
            cr = 0;
        for (i = 0; i < n; i++) {
          c = nodes[i];
          c.x -= cx;
          c.y -= cy;
          cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
        }
        node.r = cr;
        nodes.forEach(d3_layout_packUnlink);
      }
      function d3_layout_packLink(node) {
        node._pack_next = node._pack_prev = node;
      }
      function d3_layout_packUnlink(node) {
        delete node._pack_next;
        delete node._pack_prev;
      }
      function d3_layout_packTransform(node, x, y, k) {
        var children = node.children;
        node.x = x += k * node.x;
        node.y = y += k * node.y;
        node.r *= k;
        if (children) {
          var i = -1,
              n = children.length;
          while (++i < n)
            d3_layout_packTransform(children[i], x, y, k);
        }
      }
      function d3_layout_packPlace(a, b, c) {
        var db = a.r + c.r,
            dx = b.x - a.x,
            dy = b.y - a.y;
        if (db && (dx || dy)) {
          var da = b.r + c.r,
              dc = dx * dx + dy * dy;
          da *= da;
          db *= db;
          var x = .5 + (db - da) / (2 * dc),
              y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
          c.x = a.x + x * dx + y * dy;
          c.y = a.y + x * dy - y * dx;
        } else {
          c.x = a.x + db;
          c.y = a.y;
        }
      }
      d3.layout.tree = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null),
            separation = d3_layout_treeSeparation,
            size = [1, 1],
            nodeSize = null;
        function tree(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root0 = nodes[0],
              root1 = wrapTree(root0);
          d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
          d3_layout_hierarchyVisitBefore(root1, secondWalk);
          if (nodeSize)
            d3_layout_hierarchyVisitBefore(root0, sizeNode);
          else {
            var left = root0,
                right = root0,
                bottom = root0;
            d3_layout_hierarchyVisitBefore(root0, function(node) {
              if (node.x < left.x)
                left = node;
              if (node.x > right.x)
                right = node;
              if (node.depth > bottom.depth)
                bottom = node;
            });
            var tx = separation(left, right) / 2 - left.x,
                kx = size[0] / (right.x + separation(right, left) / 2 + tx),
                ky = size[1] / (bottom.depth || 1);
            d3_layout_hierarchyVisitBefore(root0, function(node) {
              node.x = (node.x + tx) * kx;
              node.y = node.depth * ky;
            });
          }
          return nodes;
        }
        function wrapTree(root0) {
          var root1 = {
            A: null,
            children: [root0]
          },
              queue = [root1],
              node1;
          while ((node1 = queue.pop()) != null) {
            for (var children = node1.children,
                child,
                i = 0,
                n = children.length; i < n; ++i) {
              queue.push((children[i] = child = {
                _: children[i],
                parent: node1,
                children: (child = children[i].children) && child.slice() || [],
                A: null,
                a: null,
                z: 0,
                m: 0,
                c: 0,
                s: 0,
                t: null,
                i: i
              }).a = child);
            }
          }
          return root1.children[0];
        }
        function firstWalk(v) {
          var children = v.children,
              siblings = v.parent.children,
              w = v.i ? siblings[v.i - 1] : null;
          if (children.length) {
            d3_layout_treeShift(v);
            var midpoint = (children[0].z + children[children.length - 1].z) / 2;
            if (w) {
              v.z = w.z + separation(v._, w._);
              v.m = v.z - midpoint;
            } else {
              v.z = midpoint;
            }
          } else if (w) {
            v.z = w.z + separation(v._, w._);
          }
          v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
        }
        function secondWalk(v) {
          v._.x = v.z + v.parent.m;
          v.m += v.parent.m;
        }
        function apportion(v, w, ancestor) {
          if (w) {
            var vip = v,
                vop = v,
                vim = w,
                vom = vip.parent.children[0],
                sip = vip.m,
                sop = vop.m,
                sim = vim.m,
                som = vom.m,
                shift;
            while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
              vom = d3_layout_treeLeft(vom);
              vop = d3_layout_treeRight(vop);
              vop.a = v;
              shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
              if (shift > 0) {
                d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
                sip += shift;
                sop += shift;
              }
              sim += vim.m;
              sip += vip.m;
              som += vom.m;
              sop += vop.m;
            }
            if (vim && !d3_layout_treeRight(vop)) {
              vop.t = vim;
              vop.m += sim - sop;
            }
            if (vip && !d3_layout_treeLeft(vom)) {
              vom.t = vip;
              vom.m += sip - som;
              ancestor = v;
            }
          }
          return ancestor;
        }
        function sizeNode(node) {
          node.x *= size[0];
          node.y = node.depth * size[1];
        }
        tree.separation = function(x) {
          if (!arguments.length)
            return separation;
          separation = x;
          return tree;
        };
        tree.size = function(x) {
          if (!arguments.length)
            return nodeSize ? null : size;
          nodeSize = (size = x) == null ? sizeNode : null;
          return tree;
        };
        tree.nodeSize = function(x) {
          if (!arguments.length)
            return nodeSize ? size : null;
          nodeSize = (size = x) == null ? null : sizeNode;
          return tree;
        };
        return d3_layout_hierarchyRebind(tree, hierarchy);
      };
      function d3_layout_treeSeparation(a, b) {
        return a.parent == b.parent ? 1 : 2;
      }
      function d3_layout_treeLeft(v) {
        var children = v.children;
        return children.length ? children[0] : v.t;
      }
      function d3_layout_treeRight(v) {
        var children = v.children,
            n;
        return (n = children.length) ? children[n - 1] : v.t;
      }
      function d3_layout_treeMove(wm, wp, shift) {
        var change = shift / (wp.i - wm.i);
        wp.c -= change;
        wp.s += shift;
        wm.c += change;
        wp.z += shift;
        wp.m += shift;
      }
      function d3_layout_treeShift(v) {
        var shift = 0,
            change = 0,
            children = v.children,
            i = children.length,
            w;
        while (--i >= 0) {
          w = children[i];
          w.z += shift;
          w.m += shift;
          shift += w.s + (change += w.c);
        }
      }
      function d3_layout_treeAncestor(vim, v, ancestor) {
        return vim.a.parent === v.parent ? vim.a : ancestor;
      }
      d3.layout.cluster = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null),
            separation = d3_layout_treeSeparation,
            size = [1, 1],
            nodeSize = false;
        function cluster(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root = nodes[0],
              previousNode,
              x = 0;
          d3_layout_hierarchyVisitAfter(root, function(node) {
            var children = node.children;
            if (children && children.length) {
              node.x = d3_layout_clusterX(children);
              node.y = d3_layout_clusterY(children);
            } else {
              node.x = previousNode ? x += separation(node, previousNode) : 0;
              node.y = 0;
              previousNode = node;
            }
          });
          var left = d3_layout_clusterLeft(root),
              right = d3_layout_clusterRight(root),
              x0 = left.x - separation(left, right) / 2,
              x1 = right.x + separation(right, left) / 2;
          d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
            node.x = (node.x - root.x) * size[0];
            node.y = (root.y - node.y) * size[1];
          } : function(node) {
            node.x = (node.x - x0) / (x1 - x0) * size[0];
            node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
          });
          return nodes;
        }
        cluster.separation = function(x) {
          if (!arguments.length)
            return separation;
          separation = x;
          return cluster;
        };
        cluster.size = function(x) {
          if (!arguments.length)
            return nodeSize ? null : size;
          nodeSize = (size = x) == null;
          return cluster;
        };
        cluster.nodeSize = function(x) {
          if (!arguments.length)
            return nodeSize ? size : null;
          nodeSize = (size = x) != null;
          return cluster;
        };
        return d3_layout_hierarchyRebind(cluster, hierarchy);
      };
      function d3_layout_clusterY(children) {
        return 1 + d3.max(children, function(child) {
          return child.y;
        });
      }
      function d3_layout_clusterX(children) {
        return children.reduce(function(x, child) {
          return x + child.x;
        }, 0) / children.length;
      }
      function d3_layout_clusterLeft(node) {
        var children = node.children;
        return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
      }
      function d3_layout_clusterRight(node) {
        var children = node.children,
            n;
        return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
      }
      d3.layout.treemap = function() {
        var hierarchy = d3.layout.hierarchy(),
            round = Math.round,
            size = [1, 1],
            padding = null,
            pad = d3_layout_treemapPadNull,
            sticky = false,
            stickies,
            mode = "squarify",
            ratio = .5 * (1 + Math.sqrt(5));
        function scale(children, k) {
          var i = -1,
              n = children.length,
              child,
              area;
          while (++i < n) {
            area = (child = children[i]).value * (k < 0 ? 0 : k);
            child.area = isNaN(area) || area <= 0 ? 0 : area;
          }
        }
        function squarify(node) {
          var children = node.children;
          if (children && children.length) {
            var rect = pad(node),
                row = [],
                remaining = children.slice(),
                child,
                best = Infinity,
                score,
                u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy),
                n;
            scale(remaining, rect.dx * rect.dy / node.value);
            row.area = 0;
            while ((n = remaining.length) > 0) {
              row.push(child = remaining[n - 1]);
              row.area += child.area;
              if (mode !== "squarify" || (score = worst(row, u)) <= best) {
                remaining.pop();
                best = score;
              } else {
                row.area -= row.pop().area;
                position(row, u, rect, false);
                u = Math.min(rect.dx, rect.dy);
                row.length = row.area = 0;
                best = Infinity;
              }
            }
            if (row.length) {
              position(row, u, rect, true);
              row.length = row.area = 0;
            }
            children.forEach(squarify);
          }
        }
        function stickify(node) {
          var children = node.children;
          if (children && children.length) {
            var rect = pad(node),
                remaining = children.slice(),
                child,
                row = [];
            scale(remaining, rect.dx * rect.dy / node.value);
            row.area = 0;
            while (child = remaining.pop()) {
              row.push(child);
              row.area += child.area;
              if (child.z != null) {
                position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
                row.length = row.area = 0;
              }
            }
            children.forEach(stickify);
          }
        }
        function worst(row, u) {
          var s = row.area,
              r,
              rmax = 0,
              rmin = Infinity,
              i = -1,
              n = row.length;
          while (++i < n) {
            if (!(r = row[i].area))
              continue;
            if (r < rmin)
              rmin = r;
            if (r > rmax)
              rmax = r;
          }
          s *= s;
          u *= u;
          return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
        }
        function position(row, u, rect, flush) {
          var i = -1,
              n = row.length,
              x = rect.x,
              y = rect.y,
              v = u ? round(row.area / u) : 0,
              o;
          if (u == rect.dx) {
            if (flush || v > rect.dy)
              v = rect.dy;
            while (++i < n) {
              o = row[i];
              o.x = x;
              o.y = y;
              o.dy = v;
              x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
            }
            o.z = true;
            o.dx += rect.x + rect.dx - x;
            rect.y += v;
            rect.dy -= v;
          } else {
            if (flush || v > rect.dx)
              v = rect.dx;
            while (++i < n) {
              o = row[i];
              o.x = x;
              o.y = y;
              o.dx = v;
              y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
            }
            o.z = false;
            o.dy += rect.y + rect.dy - y;
            rect.x += v;
            rect.dx -= v;
          }
        }
        function treemap(d) {
          var nodes = stickies || hierarchy(d),
              root = nodes[0];
          root.x = root.y = 0;
          if (root.value)
            root.dx = size[0], root.dy = size[1];
          else
            root.dx = root.dy = 0;
          if (stickies)
            hierarchy.revalue(root);
          scale([root], root.dx * root.dy / root.value);
          (stickies ? stickify : squarify)(root);
          if (sticky)
            stickies = nodes;
          return nodes;
        }
        treemap.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return treemap;
        };
        treemap.padding = function(x) {
          if (!arguments.length)
            return padding;
          function padFunction(node) {
            var p = x.call(treemap, node, node.depth);
            return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [p, p, p, p] : p);
          }
          function padConstant(node) {
            return d3_layout_treemapPad(node, x);
          }
          var type;
          pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [x, x, x, x], padConstant) : padConstant;
          return treemap;
        };
        treemap.round = function(x) {
          if (!arguments.length)
            return round != Number;
          round = x ? Math.round : Number;
          return treemap;
        };
        treemap.sticky = function(x) {
          if (!arguments.length)
            return sticky;
          sticky = x;
          stickies = null;
          return treemap;
        };
        treemap.ratio = function(x) {
          if (!arguments.length)
            return ratio;
          ratio = x;
          return treemap;
        };
        treemap.mode = function(x) {
          if (!arguments.length)
            return mode;
          mode = x + "";
          return treemap;
        };
        return d3_layout_hierarchyRebind(treemap, hierarchy);
      };
      function d3_layout_treemapPadNull(node) {
        return {
          x: node.x,
          y: node.y,
          dx: node.dx,
          dy: node.dy
        };
      }
      function d3_layout_treemapPad(node, padding) {
        var x = node.x + padding[3],
            y = node.y + padding[0],
            dx = node.dx - padding[1] - padding[3],
            dy = node.dy - padding[0] - padding[2];
        if (dx < 0) {
          x += dx / 2;
          dx = 0;
        }
        if (dy < 0) {
          y += dy / 2;
          dy = 0;
        }
        return {
          x: x,
          y: y,
          dx: dx,
          dy: dy
        };
      }
      d3.random = {
        normal: function(µ, σ) {
          var n = arguments.length;
          if (n < 2)
            σ = 1;
          if (n < 1)
            µ = 0;
          return function() {
            var x,
                y,
                r;
            do {
              x = Math.random() * 2 - 1;
              y = Math.random() * 2 - 1;
              r = x * x + y * y;
            } while (!r || r > 1);
            return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
          };
        },
        logNormal: function() {
          var random = d3.random.normal.apply(d3, arguments);
          return function() {
            return Math.exp(random());
          };
        },
        bates: function(m) {
          var random = d3.random.irwinHall(m);
          return function() {
            return random() / m;
          };
        },
        irwinHall: function(m) {
          return function() {
            for (var s = 0,
                j = 0; j < m; j++)
              s += Math.random();
            return s;
          };
        }
      };
      d3.scale = {};
      function d3_scaleExtent(domain) {
        var start = domain[0],
            stop = domain[domain.length - 1];
        return start < stop ? [start, stop] : [stop, start];
      }
      function d3_scaleRange(scale) {
        return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
      }
      function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
        var u = uninterpolate(domain[0], domain[1]),
            i = interpolate(range[0], range[1]);
        return function(x) {
          return i(u(x));
        };
      }
      function d3_scale_nice(domain, nice) {
        var i0 = 0,
            i1 = domain.length - 1,
            x0 = domain[i0],
            x1 = domain[i1],
            dx;
        if (x1 < x0) {
          dx = i0, i0 = i1, i1 = dx;
          dx = x0, x0 = x1, x1 = dx;
        }
        domain[i0] = nice.floor(x0);
        domain[i1] = nice.ceil(x1);
        return domain;
      }
      function d3_scale_niceStep(step) {
        return step ? {
          floor: function(x) {
            return Math.floor(x / step) * step;
          },
          ceil: function(x) {
            return Math.ceil(x / step) * step;
          }
        } : d3_scale_niceIdentity;
      }
      var d3_scale_niceIdentity = {
        floor: d3_identity,
        ceil: d3_identity
      };
      function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
        var u = [],
            i = [],
            j = 0,
            k = Math.min(domain.length, range.length) - 1;
        if (domain[k] < domain[0]) {
          domain = domain.slice().reverse();
          range = range.slice().reverse();
        }
        while (++j <= k) {
          u.push(uninterpolate(domain[j - 1], domain[j]));
          i.push(interpolate(range[j - 1], range[j]));
        }
        return function(x) {
          var j = d3.bisect(domain, x, 1, k) - 1;
          return i[j](u[j](x));
        };
      }
      d3.scale.linear = function() {
        return d3_scale_linear([0, 1], [0, 1], d3_interpolate, false);
      };
      function d3_scale_linear(domain, range, interpolate, clamp) {
        var output,
            input;
        function rescale() {
          var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear,
              uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
          output = linear(domain, range, uninterpolate, interpolate);
          input = linear(range, domain, uninterpolate, d3_interpolate);
          return scale;
        }
        function scale(x) {
          return output(x);
        }
        scale.invert = function(y) {
          return input(y);
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(Number);
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.rangeRound = function(x) {
          return scale.range(x).interpolate(d3_interpolateRound);
        };
        scale.clamp = function(x) {
          if (!arguments.length)
            return clamp;
          clamp = x;
          return rescale();
        };
        scale.interpolate = function(x) {
          if (!arguments.length)
            return interpolate;
          interpolate = x;
          return rescale();
        };
        scale.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
          d3_scale_linearNice(domain, m);
          return rescale();
        };
        scale.copy = function() {
          return d3_scale_linear(domain, range, interpolate, clamp);
        };
        return rescale();
      }
      function d3_scale_linearRebind(scale, linear) {
        return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
      }
      function d3_scale_linearNice(domain, m) {
        d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
        d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
        return domain;
      }
      function d3_scale_linearTickRange(domain, m) {
        if (m == null)
          m = 10;
        var extent = d3_scaleExtent(domain),
            span = extent[1] - extent[0],
            step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
            err = m / span * step;
        if (err <= .15)
          step *= 10;
        else if (err <= .35)
          step *= 5;
        else if (err <= .75)
          step *= 2;
        extent[0] = Math.ceil(extent[0] / step) * step;
        extent[1] = Math.floor(extent[1] / step) * step + step * .5;
        extent[2] = step;
        return extent;
      }
      function d3_scale_linearTicks(domain, m) {
        return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
      }
      function d3_scale_linearTickFormat(domain, m, format) {
        var range = d3_scale_linearTickRange(domain, m);
        if (format) {
          var match = d3_format_re.exec(format);
          match.shift();
          if (match[8] === "s") {
            var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
            if (!match[7])
              match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
            match[8] = "f";
            format = d3.format(match.join(""));
            return function(d) {
              return format(prefix.scale(d)) + prefix.symbol;
            };
          }
          if (!match[7])
            match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
          format = match.join("");
        } else {
          format = ",." + d3_scale_linearPrecision(range[2]) + "f";
        }
        return d3.format(format);
      }
      var d3_scale_linearFormatSignificant = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
      };
      function d3_scale_linearPrecision(value) {
        return -Math.floor(Math.log(value) / Math.LN10 + .01);
      }
      function d3_scale_linearFormatPrecision(type, range) {
        var p = d3_scale_linearPrecision(range[2]);
        return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
      }
      d3.scale.log = function() {
        return d3_scale_log(d3.scale.linear().domain([0, 1]), 10, true, [1, 10]);
      };
      function d3_scale_log(linear, base, positive, domain) {
        function log(x) {
          return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
        }
        function pow(x) {
          return positive ? Math.pow(base, x) : -Math.pow(base, -x);
        }
        function scale(x) {
          return linear(log(x));
        }
        scale.invert = function(x) {
          return pow(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          positive = x[0] >= 0;
          linear.domain((domain = x.map(Number)).map(log));
          return scale;
        };
        scale.base = function(_) {
          if (!arguments.length)
            return base;
          base = +_;
          linear.domain(domain.map(log));
          return scale;
        };
        scale.nice = function() {
          var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
          linear.domain(niced);
          domain = niced.map(pow);
          return scale;
        };
        scale.ticks = function() {
          var extent = d3_scaleExtent(domain),
              ticks = [],
              u = extent[0],
              v = extent[1],
              i = Math.floor(log(u)),
              j = Math.ceil(log(v)),
              n = base % 1 ? 2 : base;
          if (isFinite(j - i)) {
            if (positive) {
              for (; i < j; i++)
                for (var k = 1; k < n; k++)
                  ticks.push(pow(i) * k);
              ticks.push(pow(i));
            } else {
              ticks.push(pow(i));
              for (; i++ < j; )
                for (var k = n - 1; k > 0; k--)
                  ticks.push(pow(i) * k);
            }
            for (i = 0; ticks[i] < u; i++) {}
            for (j = ticks.length; ticks[j - 1] > v; j--) {}
            ticks = ticks.slice(i, j);
          }
          return ticks;
        };
        scale.tickFormat = function(n, format) {
          if (!arguments.length)
            return d3_scale_logFormat;
          if (arguments.length < 2)
            format = d3_scale_logFormat;
          else if (typeof format !== "function")
            format = d3.format(format);
          var k = Math.max(1, base * n / scale.ticks().length);
          return function(d) {
            var i = d / pow(Math.round(log(d)));
            if (i * base < base - .5)
              i *= base;
            return i <= k ? format(d) : "";
          };
        };
        scale.copy = function() {
          return d3_scale_log(linear.copy(), base, positive, domain);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      var d3_scale_logFormat = d3.format(".0e"),
          d3_scale_logNiceNegative = {
            floor: function(x) {
              return -Math.ceil(-x);
            },
            ceil: function(x) {
              return -Math.floor(-x);
            }
          };
      d3.scale.pow = function() {
        return d3_scale_pow(d3.scale.linear(), 1, [0, 1]);
      };
      function d3_scale_pow(linear, exponent, domain) {
        var powp = d3_scale_powPow(exponent),
            powb = d3_scale_powPow(1 / exponent);
        function scale(x) {
          return linear(powp(x));
        }
        scale.invert = function(x) {
          return powb(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          linear.domain((domain = x.map(Number)).map(powp));
          return scale;
        };
        scale.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
          return scale.domain(d3_scale_linearNice(domain, m));
        };
        scale.exponent = function(x) {
          if (!arguments.length)
            return exponent;
          powp = d3_scale_powPow(exponent = x);
          powb = d3_scale_powPow(1 / exponent);
          linear.domain(domain.map(powp));
          return scale;
        };
        scale.copy = function() {
          return d3_scale_pow(linear.copy(), exponent, domain);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      function d3_scale_powPow(e) {
        return function(x) {
          return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
        };
      }
      d3.scale.sqrt = function() {
        return d3.scale.pow().exponent(.5);
      };
      d3.scale.ordinal = function() {
        return d3_scale_ordinal([], {
          t: "range",
          a: [[]]
        });
      };
      function d3_scale_ordinal(domain, ranger) {
        var index,
            range,
            rangeBand;
        function scale(x) {
          return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
        }
        function steps(start, step) {
          return d3.range(domain.length).map(function(i) {
            return start + step * i;
          });
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = [];
          index = new d3_Map();
          var i = -1,
              n = x.length,
              xi;
          while (++i < n)
            if (!index.has(xi = x[i]))
              index.set(xi, domain.push(xi));
          return scale[ranger.t].apply(scale, ranger.a);
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          rangeBand = 0;
          ranger = {
            t: "range",
            a: arguments
          };
          return scale;
        };
        scale.rangePoints = function(x, padding) {
          if (arguments.length < 2)
            padding = 0;
          var start = x[0],
              stop = x[1],
              step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
          range = steps(start + step * padding / 2, step);
          rangeBand = 0;
          ranger = {
            t: "rangePoints",
            a: arguments
          };
          return scale;
        };
        scale.rangeRoundPoints = function(x, padding) {
          if (arguments.length < 2)
            padding = 0;
          var start = x[0],
              stop = x[1],
              step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
          range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
          rangeBand = 0;
          ranger = {
            t: "rangeRoundPoints",
            a: arguments
          };
          return scale;
        };
        scale.rangeBands = function(x, padding, outerPadding) {
          if (arguments.length < 2)
            padding = 0;
          if (arguments.length < 3)
            outerPadding = padding;
          var reverse = x[1] < x[0],
              start = x[reverse - 0],
              stop = x[1 - reverse],
              step = (stop - start) / (domain.length - padding + 2 * outerPadding);
          range = steps(start + step * outerPadding, step);
          if (reverse)
            range.reverse();
          rangeBand = step * (1 - padding);
          ranger = {
            t: "rangeBands",
            a: arguments
          };
          return scale;
        };
        scale.rangeRoundBands = function(x, padding, outerPadding) {
          if (arguments.length < 2)
            padding = 0;
          if (arguments.length < 3)
            outerPadding = padding;
          var reverse = x[1] < x[0],
              start = x[reverse - 0],
              stop = x[1 - reverse],
              step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
          range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
          if (reverse)
            range.reverse();
          rangeBand = Math.round(step * (1 - padding));
          ranger = {
            t: "rangeRoundBands",
            a: arguments
          };
          return scale;
        };
        scale.rangeBand = function() {
          return rangeBand;
        };
        scale.rangeExtent = function() {
          return d3_scaleExtent(ranger.a[0]);
        };
        scale.copy = function() {
          return d3_scale_ordinal(domain, ranger);
        };
        return scale.domain(domain);
      }
      d3.scale.category10 = function() {
        return d3.scale.ordinal().range(d3_category10);
      };
      d3.scale.category20 = function() {
        return d3.scale.ordinal().range(d3_category20);
      };
      d3.scale.category20b = function() {
        return d3.scale.ordinal().range(d3_category20b);
      };
      d3.scale.category20c = function() {
        return d3.scale.ordinal().range(d3_category20c);
      };
      var d3_category10 = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString);
      var d3_category20 = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString);
      var d3_category20b = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString);
      var d3_category20c = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);
      d3.scale.quantile = function() {
        return d3_scale_quantile([], []);
      };
      function d3_scale_quantile(domain, range) {
        var thresholds;
        function rescale() {
          var k = 0,
              q = range.length;
          thresholds = [];
          while (++k < q)
            thresholds[k - 1] = d3.quantile(domain, k / q);
          return scale;
        }
        function scale(x) {
          if (!isNaN(x = +x))
            return range[d3.bisect(thresholds, x)];
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.quantiles = function() {
          return thresholds;
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          return y < 0 ? [NaN, NaN] : [y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1]];
        };
        scale.copy = function() {
          return d3_scale_quantile(domain, range);
        };
        return rescale();
      }
      d3.scale.quantize = function() {
        return d3_scale_quantize(0, 1, [0, 1]);
      };
      function d3_scale_quantize(x0, x1, range) {
        var kx,
            i;
        function scale(x) {
          return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
        }
        function rescale() {
          kx = range.length / (x1 - x0);
          i = range.length - 1;
          return scale;
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return [x0, x1];
          x0 = +x[0];
          x1 = +x[x.length - 1];
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          y = y < 0 ? NaN : y / kx + x0;
          return [y, y + 1 / kx];
        };
        scale.copy = function() {
          return d3_scale_quantize(x0, x1, range);
        };
        return rescale();
      }
      d3.scale.threshold = function() {
        return d3_scale_threshold([.5], [0, 1]);
      };
      function d3_scale_threshold(domain, range) {
        function scale(x) {
          if (x <= x)
            return range[d3.bisect(domain, x)];
        }
        scale.domain = function(_) {
          if (!arguments.length)
            return domain;
          domain = _;
          return scale;
        };
        scale.range = function(_) {
          if (!arguments.length)
            return range;
          range = _;
          return scale;
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          return [domain[y - 1], domain[y]];
        };
        scale.copy = function() {
          return d3_scale_threshold(domain, range);
        };
        return scale;
      }
      d3.scale.identity = function() {
        return d3_scale_identity([0, 1]);
      };
      function d3_scale_identity(domain) {
        function identity(x) {
          return +x;
        }
        identity.invert = identity;
        identity.domain = identity.range = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(identity);
          return identity;
        };
        identity.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        identity.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        identity.copy = function() {
          return d3_scale_identity(domain);
        };
        return identity;
      }
      d3.svg = {};
      function d3_zero() {
        return 0;
      }
      d3.svg.arc = function() {
        var innerRadius = d3_svg_arcInnerRadius,
            outerRadius = d3_svg_arcOuterRadius,
            cornerRadius = d3_zero,
            padRadius = d3_svg_arcAuto,
            startAngle = d3_svg_arcStartAngle,
            endAngle = d3_svg_arcEndAngle,
            padAngle = d3_svg_arcPadAngle;
        function arc() {
          var r0 = Math.max(0, +innerRadius.apply(this, arguments)),
              r1 = Math.max(0, +outerRadius.apply(this, arguments)),
              a0 = startAngle.apply(this, arguments) - halfπ,
              a1 = endAngle.apply(this, arguments) - halfπ,
              da = Math.abs(a1 - a0),
              cw = a0 > a1 ? 0 : 1;
          if (r1 < r0)
            rc = r1, r1 = r0, r0 = rc;
          if (da >= τε)
            return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
          var rc,
              cr,
              rp,
              ap,
              p0 = 0,
              p1 = 0,
              x0,
              y0,
              x1,
              y1,
              x2,
              y2,
              x3,
              y3,
              path = [];
          if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
            rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
            if (!cw)
              p1 *= -1;
            if (r1)
              p1 = d3_asin(rp / r1 * Math.sin(ap));
            if (r0)
              p0 = d3_asin(rp / r0 * Math.sin(ap));
          }
          if (r1) {
            x0 = r1 * Math.cos(a0 + p1);
            y0 = r1 * Math.sin(a0 + p1);
            x1 = r1 * Math.cos(a1 - p1);
            y1 = r1 * Math.sin(a1 - p1);
            var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
            if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
              var h1 = (a0 + a1) / 2;
              x0 = r1 * Math.cos(h1);
              y0 = r1 * Math.sin(h1);
              x1 = y1 = null;
            }
          } else {
            x0 = y0 = 0;
          }
          if (r0) {
            x2 = r0 * Math.cos(a1 - p0);
            y2 = r0 * Math.sin(a1 - p0);
            x3 = r0 * Math.cos(a0 + p0);
            y3 = r0 * Math.sin(a0 + p0);
            var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
            if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
              var h0 = (a0 + a1) / 2;
              x2 = r0 * Math.cos(h0);
              y2 = r0 * Math.sin(h0);
              x3 = y3 = null;
            }
          } else {
            x2 = y2 = 0;
          }
          if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
            cr = r0 < r1 ^ cw ? 0 : 1;
            var rc1 = rc,
                rc0 = rc;
            if (da < π) {
              var oc = x3 == null ? [x2, y2] : x1 == null ? [x0, y0] : d3_geom_polygonIntersect([x0, y0], [x3, y3], [x1, y1], [x2, y2]),
                  ax = x0 - oc[0],
                  ay = y0 - oc[1],
                  bx = x1 - oc[0],
                  by = y1 - oc[1],
                  kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
                  lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
              rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
            }
            if (x1 != null) {
              var t30 = d3_svg_arcCornerTangents(x3 == null ? [x2, y2] : [x3, y3], [x0, y0], r1, rc1, cw),
                  t12 = d3_svg_arcCornerTangents([x1, y1], [x2, y2], r1, rc1, cw);
              if (rc === rc1) {
                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
              } else {
                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
              }
            } else {
              path.push("M", x0, ",", y0);
            }
            if (x3 != null) {
              var t03 = d3_svg_arcCornerTangents([x0, y0], [x3, y3], r0, -rc0, cw),
                  t21 = d3_svg_arcCornerTangents([x2, y2], x1 == null ? [x0, y0] : [x1, y1], r0, -rc0, cw);
              if (rc === rc0) {
                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
              } else {
                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
              }
            } else {
              path.push("L", x2, ",", y2);
            }
          } else {
            path.push("M", x0, ",", y0);
            if (x1 != null)
              path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
            path.push("L", x2, ",", y2);
            if (x3 != null)
              path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
          }
          path.push("Z");
          return path.join("");
        }
        function circleSegment(r1, cw) {
          return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
        }
        arc.innerRadius = function(v) {
          if (!arguments.length)
            return innerRadius;
          innerRadius = d3_functor(v);
          return arc;
        };
        arc.outerRadius = function(v) {
          if (!arguments.length)
            return outerRadius;
          outerRadius = d3_functor(v);
          return arc;
        };
        arc.cornerRadius = function(v) {
          if (!arguments.length)
            return cornerRadius;
          cornerRadius = d3_functor(v);
          return arc;
        };
        arc.padRadius = function(v) {
          if (!arguments.length)
            return padRadius;
          padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
          return arc;
        };
        arc.startAngle = function(v) {
          if (!arguments.length)
            return startAngle;
          startAngle = d3_functor(v);
          return arc;
        };
        arc.endAngle = function(v) {
          if (!arguments.length)
            return endAngle;
          endAngle = d3_functor(v);
          return arc;
        };
        arc.padAngle = function(v) {
          if (!arguments.length)
            return padAngle;
          padAngle = d3_functor(v);
          return arc;
        };
        arc.centroid = function() {
          var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
              a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
          return [Math.cos(a) * r, Math.sin(a) * r];
        };
        return arc;
      };
      var d3_svg_arcAuto = "auto";
      function d3_svg_arcInnerRadius(d) {
        return d.innerRadius;
      }
      function d3_svg_arcOuterRadius(d) {
        return d.outerRadius;
      }
      function d3_svg_arcStartAngle(d) {
        return d.startAngle;
      }
      function d3_svg_arcEndAngle(d) {
        return d.endAngle;
      }
      function d3_svg_arcPadAngle(d) {
        return d && d.padAngle;
      }
      function d3_svg_arcSweep(x0, y0, x1, y1) {
        return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
      }
      function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
        var x01 = p0[0] - p1[0],
            y01 = p0[1] - p1[1],
            lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
            ox = lo * y01,
            oy = -lo * x01,
            x1 = p0[0] + ox,
            y1 = p0[1] + oy,
            x2 = p1[0] + ox,
            y2 = p1[1] + oy,
            x3 = (x1 + x2) / 2,
            y3 = (y1 + y2) / 2,
            dx = x2 - x1,
            dy = y2 - y1,
            d2 = dx * dx + dy * dy,
            r = r1 - rc,
            D = x1 * y2 - x2 * y1,
            d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
            cx0 = (D * dy - dx * d) / d2,
            cy0 = (-D * dx - dy * d) / d2,
            cx1 = (D * dy + dx * d) / d2,
            cy1 = (-D * dx + dy * d) / d2,
            dx0 = cx0 - x3,
            dy0 = cy0 - y3,
            dx1 = cx1 - x3,
            dy1 = cy1 - y3;
        if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
          cx0 = cx1, cy0 = cy1;
        return [[cx0 - ox, cy0 - oy], [cx0 * r1 / r, cy0 * r1 / r]];
      }
      function d3_svg_line(projection) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            defined = d3_true,
            interpolate = d3_svg_lineLinear,
            interpolateKey = interpolate.key,
            tension = .7;
        function line(data) {
          var segments = [],
              points = [],
              i = -1,
              n = data.length,
              d,
              fx = d3_functor(x),
              fy = d3_functor(y);
          function segment() {
            segments.push("M", interpolate(projection(points), tension));
          }
          while (++i < n) {
            if (defined.call(this, d = data[i], i)) {
              points.push([+fx.call(this, d, i), +fy.call(this, d, i)]);
            } else if (points.length) {
              segment();
              points = [];
            }
          }
          if (points.length)
            segment();
          return segments.length ? segments.join("") : null;
        }
        line.x = function(_) {
          if (!arguments.length)
            return x;
          x = _;
          return line;
        };
        line.y = function(_) {
          if (!arguments.length)
            return y;
          y = _;
          return line;
        };
        line.defined = function(_) {
          if (!arguments.length)
            return defined;
          defined = _;
          return line;
        };
        line.interpolate = function(_) {
          if (!arguments.length)
            return interpolateKey;
          if (typeof _ === "function")
            interpolateKey = interpolate = _;
          else
            interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
          return line;
        };
        line.tension = function(_) {
          if (!arguments.length)
            return tension;
          tension = _;
          return line;
        };
        return line;
      }
      d3.svg.line = function() {
        return d3_svg_line(d3_identity);
      };
      var d3_svg_lineInterpolators = d3.map({
        linear: d3_svg_lineLinear,
        "linear-closed": d3_svg_lineLinearClosed,
        step: d3_svg_lineStep,
        "step-before": d3_svg_lineStepBefore,
        "step-after": d3_svg_lineStepAfter,
        basis: d3_svg_lineBasis,
        "basis-open": d3_svg_lineBasisOpen,
        "basis-closed": d3_svg_lineBasisClosed,
        bundle: d3_svg_lineBundle,
        cardinal: d3_svg_lineCardinal,
        "cardinal-open": d3_svg_lineCardinalOpen,
        "cardinal-closed": d3_svg_lineCardinalClosed,
        monotone: d3_svg_lineMonotone
      });
      d3_svg_lineInterpolators.forEach(function(key, value) {
        value.key = key;
        value.closed = /-closed$/.test(key);
      });
      function d3_svg_lineLinear(points) {
        return points.length > 1 ? points.join("L") : points + "Z";
      }
      function d3_svg_lineLinearClosed(points) {
        return points.join("L") + "Z";
      }
      function d3_svg_lineStep(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
        if (n > 1)
          path.push("H", p[0]);
        return path.join("");
      }
      function d3_svg_lineStepBefore(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("V", (p = points[i])[1], "H", p[0]);
        return path.join("");
      }
      function d3_svg_lineStepAfter(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("H", (p = points[i])[0], "V", p[1]);
        return path.join("");
      }
      function d3_svg_lineCardinalOpen(points, tension) {
        return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
      }
      function d3_svg_lineCardinalClosed(points, tension) {
        return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension));
      }
      function d3_svg_lineCardinal(points, tension) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
      }
      function d3_svg_lineHermite(points, tangents) {
        if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
          return d3_svg_lineLinear(points);
        }
        var quad = points.length != tangents.length,
            path = "",
            p0 = points[0],
            p = points[1],
            t0 = tangents[0],
            t = t0,
            pi = 1;
        if (quad) {
          path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
          p0 = points[1];
          pi = 2;
        }
        if (tangents.length > 1) {
          t = tangents[1];
          p = points[pi];
          pi++;
          path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
          for (var i = 2; i < tangents.length; i++, pi++) {
            p = points[pi];
            t = tangents[i];
            path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
          }
        }
        if (quad) {
          var lp = points[pi];
          path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
        }
        return path;
      }
      function d3_svg_lineCardinalTangents(points, tension) {
        var tangents = [],
            a = (1 - tension) / 2,
            p0,
            p1 = points[0],
            p2 = points[1],
            i = 1,
            n = points.length;
        while (++i < n) {
          p0 = p1;
          p1 = p2;
          p2 = points[i];
          tangents.push([a * (p2[0] - p0[0]), a * (p2[1] - p0[1])]);
        }
        return tangents;
      }
      function d3_svg_lineBasis(points) {
        if (points.length < 3)
          return d3_svg_lineLinear(points);
        var i = 1,
            n = points.length,
            pi = points[0],
            x0 = pi[0],
            y0 = pi[1],
            px = [x0, x0, x0, (pi = points[1])[0]],
            py = [y0, y0, y0, pi[1]],
            path = [x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
        points.push(points[n - 1]);
        while (++i <= n) {
          pi = points[i];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        points.pop();
        path.push("L", pi);
        return path.join("");
      }
      function d3_svg_lineBasisOpen(points) {
        if (points.length < 4)
          return d3_svg_lineLinear(points);
        var path = [],
            i = -1,
            n = points.length,
            pi,
            px = [0],
            py = [0];
        while (++i < 3) {
          pi = points[i];
          px.push(pi[0]);
          py.push(pi[1]);
        }
        path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
        --i;
        while (++i < n) {
          pi = points[i];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
      }
      function d3_svg_lineBasisClosed(points) {
        var path,
            i = -1,
            n = points.length,
            m = n + 4,
            pi,
            px = [],
            py = [];
        while (++i < 4) {
          pi = points[i % n];
          px.push(pi[0]);
          py.push(pi[1]);
        }
        path = [d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
        --i;
        while (++i < m) {
          pi = points[i % n];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
      }
      function d3_svg_lineBundle(points, tension) {
        var n = points.length - 1;
        if (n) {
          var x0 = points[0][0],
              y0 = points[0][1],
              dx = points[n][0] - x0,
              dy = points[n][1] - y0,
              i = -1,
              p,
              t;
          while (++i <= n) {
            p = points[i];
            t = i / n;
            p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
            p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
          }
        }
        return d3_svg_lineBasis(points);
      }
      function d3_svg_lineDot4(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
      }
      var d3_svg_lineBasisBezier1 = [0, 2 / 3, 1 / 3, 0],
          d3_svg_lineBasisBezier2 = [0, 1 / 3, 2 / 3, 0],
          d3_svg_lineBasisBezier3 = [0, 1 / 6, 2 / 3, 1 / 6];
      function d3_svg_lineBasisBezier(path, x, y) {
        path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
      }
      function d3_svg_lineSlope(p0, p1) {
        return (p1[1] - p0[1]) / (p1[0] - p0[0]);
      }
      function d3_svg_lineFiniteDifferences(points) {
        var i = 0,
            j = points.length - 1,
            m = [],
            p0 = points[0],
            p1 = points[1],
            d = m[0] = d3_svg_lineSlope(p0, p1);
        while (++i < j) {
          m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
        }
        m[i] = d;
        return m;
      }
      function d3_svg_lineMonotoneTangents(points) {
        var tangents = [],
            d,
            a,
            b,
            s,
            m = d3_svg_lineFiniteDifferences(points),
            i = -1,
            j = points.length - 1;
        while (++i < j) {
          d = d3_svg_lineSlope(points[i], points[i + 1]);
          if (abs(d) < ε) {
            m[i] = m[i + 1] = 0;
          } else {
            a = m[i] / d;
            b = m[i + 1] / d;
            s = a * a + b * b;
            if (s > 9) {
              s = d * 3 / Math.sqrt(s);
              m[i] = s * a;
              m[i + 1] = s * b;
            }
          }
        }
        i = -1;
        while (++i <= j) {
          s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
          tangents.push([s || 0, m[i] * s || 0]);
        }
        return tangents;
      }
      function d3_svg_lineMonotone(points) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
      }
      d3.svg.line.radial = function() {
        var line = d3_svg_line(d3_svg_lineRadial);
        line.radius = line.x, delete line.x;
        line.angle = line.y, delete line.y;
        return line;
      };
      function d3_svg_lineRadial(points) {
        var point,
            i = -1,
            n = points.length,
            r,
            a;
        while (++i < n) {
          point = points[i];
          r = point[0];
          a = point[1] - halfπ;
          point[0] = r * Math.cos(a);
          point[1] = r * Math.sin(a);
        }
        return points;
      }
      function d3_svg_area(projection) {
        var x0 = d3_geom_pointX,
            x1 = d3_geom_pointX,
            y0 = 0,
            y1 = d3_geom_pointY,
            defined = d3_true,
            interpolate = d3_svg_lineLinear,
            interpolateKey = interpolate.key,
            interpolateReverse = interpolate,
            L = "L",
            tension = .7;
        function area(data) {
          var segments = [],
              points0 = [],
              points1 = [],
              i = -1,
              n = data.length,
              d,
              fx0 = d3_functor(x0),
              fy0 = d3_functor(y0),
              fx1 = x0 === x1 ? function() {
                return x;
              } : d3_functor(x1),
              fy1 = y0 === y1 ? function() {
                return y;
              } : d3_functor(y1),
              x,
              y;
          function segment() {
            segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
          }
          while (++i < n) {
            if (defined.call(this, d = data[i], i)) {
              points0.push([x = +fx0.call(this, d, i), y = +fy0.call(this, d, i)]);
              points1.push([+fx1.call(this, d, i), +fy1.call(this, d, i)]);
            } else if (points0.length) {
              segment();
              points0 = [];
              points1 = [];
            }
          }
          if (points0.length)
            segment();
          return segments.length ? segments.join("") : null;
        }
        area.x = function(_) {
          if (!arguments.length)
            return x1;
          x0 = x1 = _;
          return area;
        };
        area.x0 = function(_) {
          if (!arguments.length)
            return x0;
          x0 = _;
          return area;
        };
        area.x1 = function(_) {
          if (!arguments.length)
            return x1;
          x1 = _;
          return area;
        };
        area.y = function(_) {
          if (!arguments.length)
            return y1;
          y0 = y1 = _;
          return area;
        };
        area.y0 = function(_) {
          if (!arguments.length)
            return y0;
          y0 = _;
          return area;
        };
        area.y1 = function(_) {
          if (!arguments.length)
            return y1;
          y1 = _;
          return area;
        };
        area.defined = function(_) {
          if (!arguments.length)
            return defined;
          defined = _;
          return area;
        };
        area.interpolate = function(_) {
          if (!arguments.length)
            return interpolateKey;
          if (typeof _ === "function")
            interpolateKey = interpolate = _;
          else
            interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
          interpolateReverse = interpolate.reverse || interpolate;
          L = interpolate.closed ? "M" : "L";
          return area;
        };
        area.tension = function(_) {
          if (!arguments.length)
            return tension;
          tension = _;
          return area;
        };
        return area;
      }
      d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
      d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
      d3.svg.area = function() {
        return d3_svg_area(d3_identity);
      };
      d3.svg.area.radial = function() {
        var area = d3_svg_area(d3_svg_lineRadial);
        area.radius = area.x, delete area.x;
        area.innerRadius = area.x0, delete area.x0;
        area.outerRadius = area.x1, delete area.x1;
        area.angle = area.y, delete area.y;
        area.startAngle = area.y0, delete area.y0;
        area.endAngle = area.y1, delete area.y1;
        return area;
      };
      d3.svg.chord = function() {
        var source = d3_source,
            target = d3_target,
            radius = d3_svg_chordRadius,
            startAngle = d3_svg_arcStartAngle,
            endAngle = d3_svg_arcEndAngle;
        function chord(d, i) {
          var s = subgroup(this, source, d, i),
              t = subgroup(this, target, d, i);
          return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
        }
        function subgroup(self, f, d, i) {
          var subgroup = f.call(self, d, i),
              r = radius.call(self, subgroup, i),
              a0 = startAngle.call(self, subgroup, i) - halfπ,
              a1 = endAngle.call(self, subgroup, i) - halfπ;
          return {
            r: r,
            a0: a0,
            a1: a1,
            p0: [r * Math.cos(a0), r * Math.sin(a0)],
            p1: [r * Math.cos(a1), r * Math.sin(a1)]
          };
        }
        function equals(a, b) {
          return a.a0 == b.a0 && a.a1 == b.a1;
        }
        function arc(r, p, a) {
          return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
        }
        function curve(r0, p0, r1, p1) {
          return "Q 0,0 " + p1;
        }
        chord.radius = function(v) {
          if (!arguments.length)
            return radius;
          radius = d3_functor(v);
          return chord;
        };
        chord.source = function(v) {
          if (!arguments.length)
            return source;
          source = d3_functor(v);
          return chord;
        };
        chord.target = function(v) {
          if (!arguments.length)
            return target;
          target = d3_functor(v);
          return chord;
        };
        chord.startAngle = function(v) {
          if (!arguments.length)
            return startAngle;
          startAngle = d3_functor(v);
          return chord;
        };
        chord.endAngle = function(v) {
          if (!arguments.length)
            return endAngle;
          endAngle = d3_functor(v);
          return chord;
        };
        return chord;
      };
      function d3_svg_chordRadius(d) {
        return d.radius;
      }
      d3.svg.diagonal = function() {
        var source = d3_source,
            target = d3_target,
            projection = d3_svg_diagonalProjection;
        function diagonal(d, i) {
          var p0 = source.call(this, d, i),
              p3 = target.call(this, d, i),
              m = (p0.y + p3.y) / 2,
              p = [p0, {
                x: p0.x,
                y: m
              }, {
                x: p3.x,
                y: m
              }, p3];
          p = p.map(projection);
          return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
        }
        diagonal.source = function(x) {
          if (!arguments.length)
            return source;
          source = d3_functor(x);
          return diagonal;
        };
        diagonal.target = function(x) {
          if (!arguments.length)
            return target;
          target = d3_functor(x);
          return diagonal;
        };
        diagonal.projection = function(x) {
          if (!arguments.length)
            return projection;
          projection = x;
          return diagonal;
        };
        return diagonal;
      };
      function d3_svg_diagonalProjection(d) {
        return [d.x, d.y];
      }
      d3.svg.diagonal.radial = function() {
        var diagonal = d3.svg.diagonal(),
            projection = d3_svg_diagonalProjection,
            projection_ = diagonal.projection;
        diagonal.projection = function(x) {
          return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
        };
        return diagonal;
      };
      function d3_svg_diagonalRadialProjection(projection) {
        return function() {
          var d = projection.apply(this, arguments),
              r = d[0],
              a = d[1] - halfπ;
          return [r * Math.cos(a), r * Math.sin(a)];
        };
      }
      d3.svg.symbol = function() {
        var type = d3_svg_symbolType,
            size = d3_svg_symbolSize;
        function symbol(d, i) {
          return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
        }
        symbol.type = function(x) {
          if (!arguments.length)
            return type;
          type = d3_functor(x);
          return symbol;
        };
        symbol.size = function(x) {
          if (!arguments.length)
            return size;
          size = d3_functor(x);
          return symbol;
        };
        return symbol;
      };
      function d3_svg_symbolSize() {
        return 64;
      }
      function d3_svg_symbolType() {
        return "circle";
      }
      function d3_svg_symbolCircle(size) {
        var r = Math.sqrt(size / π);
        return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
      }
      var d3_svg_symbols = d3.map({
        circle: d3_svg_symbolCircle,
        cross: function(size) {
          var r = Math.sqrt(size / 5) / 2;
          return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
        },
        diamond: function(size) {
          var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)),
              rx = ry * d3_svg_symbolTan30;
          return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
        },
        square: function(size) {
          var r = Math.sqrt(size) / 2;
          return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
        },
        "triangle-down": function(size) {
          var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
              ry = rx * d3_svg_symbolSqrt3 / 2;
          return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
        },
        "triangle-up": function(size) {
          var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
              ry = rx * d3_svg_symbolSqrt3 / 2;
          return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
        }
      });
      d3.svg.symbolTypes = d3_svg_symbols.keys();
      var d3_svg_symbolSqrt3 = Math.sqrt(3),
          d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
      d3_selectionPrototype.transition = function(name) {
        var id = d3_transitionInheritId || ++d3_transitionId,
            ns = d3_transitionNamespace(name),
            subgroups = [],
            subgroup,
            node,
            transition = d3_transitionInherit || {
              time: Date.now(),
              ease: d3_ease_cubicInOut,
              delay: 0,
              duration: 250
            };
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i])
              d3_transitionNode(node, i, ns, id, transition);
            subgroup.push(node);
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_selectionPrototype.interrupt = function(name) {
        return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
      };
      var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
      function d3_selection_interruptNS(ns) {
        return function() {
          var lock,
              activeId,
              active;
          if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
            active.timer.c = null;
            active.timer.t = NaN;
            if (--lock.count)
              delete lock[activeId];
            else
              delete this[ns];
            lock.active += .5;
            active.event && active.event.interrupt.call(this, this.__data__, active.index);
          }
        };
      }
      function d3_transition(groups, ns, id) {
        d3_subclass(groups, d3_transitionPrototype);
        groups.namespace = ns;
        groups.id = id;
        return groups;
      }
      var d3_transitionPrototype = [],
          d3_transitionId = 0,
          d3_transitionInheritId,
          d3_transitionInherit;
      d3_transitionPrototype.call = d3_selectionPrototype.call;
      d3_transitionPrototype.empty = d3_selectionPrototype.empty;
      d3_transitionPrototype.node = d3_selectionPrototype.node;
      d3_transitionPrototype.size = d3_selectionPrototype.size;
      d3.transition = function(selection, name) {
        return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
      };
      d3.transition.prototype = d3_transitionPrototype;
      d3_transitionPrototype.select = function(selector) {
        var id = this.id,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            subnode,
            node;
        selector = d3_selection_selector(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
              if ("__data__" in node)
                subnode.__data__ = node.__data__;
              d3_transitionNode(subnode, i, ns, id, node[ns][id]);
              subgroup.push(subnode);
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_transitionPrototype.selectAll = function(selector) {
        var id = this.id,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            subnodes,
            node,
            subnode,
            transition;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              transition = node[ns][id];
              subnodes = selector.call(node, node.__data__, i, j);
              subgroups.push(subgroup = []);
              for (var k = -1,
                  o = subnodes.length; ++k < o; ) {
                if (subnode = subnodes[k])
                  d3_transitionNode(subnode, k, ns, id, transition);
                subgroup.push(subnode);
              }
            }
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_transitionPrototype.filter = function(filter) {
        var subgroups = [],
            subgroup,
            group,
            node;
        if (typeof filter !== "function")
          filter = d3_selection_filter(filter);
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
              subgroup.push(node);
            }
          }
        }
        return d3_transition(subgroups, this.namespace, this.id);
      };
      d3_transitionPrototype.tween = function(name, tween) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 2)
          return this.node()[ns][id].tween.get(name);
        return d3_selection_each(this, tween == null ? function(node) {
          node[ns][id].tween.remove(name);
        } : function(node) {
          node[ns][id].tween.set(name, tween);
        });
      };
      function d3_transition_tween(groups, name, value, tween) {
        var id = groups.id,
            ns = groups.namespace;
        return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
          node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
        } : (value = tween(value), function(node) {
          node[ns][id].tween.set(name, value);
        }));
      }
      d3_transitionPrototype.attr = function(nameNS, value) {
        if (arguments.length < 2) {
          for (value in nameNS)
            this.attr(value, nameNS[value]);
          return this;
        }
        var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate,
            name = d3.ns.qualify(nameNS);
        function attrNull() {
          this.removeAttribute(name);
        }
        function attrNullNS() {
          this.removeAttributeNS(name.space, name.local);
        }
        function attrTween(b) {
          return b == null ? attrNull : (b += "", function() {
            var a = this.getAttribute(name),
                i;
            return a !== b && (i = interpolate(a, b), function(t) {
              this.setAttribute(name, i(t));
            });
          });
        }
        function attrTweenNS(b) {
          return b == null ? attrNullNS : (b += "", function() {
            var a = this.getAttributeNS(name.space, name.local),
                i;
            return a !== b && (i = interpolate(a, b), function(t) {
              this.setAttributeNS(name.space, name.local, i(t));
            });
          });
        }
        return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
      };
      d3_transitionPrototype.attrTween = function(nameNS, tween) {
        var name = d3.ns.qualify(nameNS);
        function attrTween(d, i) {
          var f = tween.call(this, d, i, this.getAttribute(name));
          return f && function(t) {
            this.setAttribute(name, f(t));
          };
        }
        function attrTweenNS(d, i) {
          var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
          return f && function(t) {
            this.setAttributeNS(name.space, name.local, f(t));
          };
        }
        return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
      };
      d3_transitionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof name !== "string") {
            if (n < 2)
              value = "";
            for (priority in name)
              this.style(priority, name[priority], value);
            return this;
          }
          priority = "";
        }
        function styleNull() {
          this.style.removeProperty(name);
        }
        function styleString(b) {
          return b == null ? styleNull : (b += "", function() {
            var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name),
                i;
            return a !== b && (i = d3_interpolate(a, b), function(t) {
              this.style.setProperty(name, i(t), priority);
            });
          });
        }
        return d3_transition_tween(this, "style." + name, value, styleString);
      };
      d3_transitionPrototype.styleTween = function(name, tween, priority) {
        if (arguments.length < 3)
          priority = "";
        function styleTween(d, i) {
          var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
          return f && function(t) {
            this.style.setProperty(name, f(t), priority);
          };
        }
        return this.tween("style." + name, styleTween);
      };
      d3_transitionPrototype.text = function(value) {
        return d3_transition_tween(this, "text", value, d3_transition_text);
      };
      function d3_transition_text(b) {
        if (b == null)
          b = "";
        return function() {
          this.textContent = b;
        };
      }
      d3_transitionPrototype.remove = function() {
        var ns = this.namespace;
        return this.each("end.transition", function() {
          var p;
          if (this[ns].count < 2 && (p = this.parentNode))
            p.removeChild(this);
        });
      };
      d3_transitionPrototype.ease = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].ease;
        if (typeof value !== "function")
          value = d3.ease.apply(d3, arguments);
        return d3_selection_each(this, function(node) {
          node[ns][id].ease = value;
        });
      };
      d3_transitionPrototype.delay = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].delay;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
          node[ns][id].delay = +value.call(node, node.__data__, i, j);
        } : (value = +value, function(node) {
          node[ns][id].delay = value;
        }));
      };
      d3_transitionPrototype.duration = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].duration;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
          node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
        } : (value = Math.max(1, value), function(node) {
          node[ns][id].duration = value;
        }));
      };
      d3_transitionPrototype.each = function(type, listener) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 2) {
          var inherit = d3_transitionInherit,
              inheritId = d3_transitionInheritId;
          try {
            d3_transitionInheritId = id;
            d3_selection_each(this, function(node, i, j) {
              d3_transitionInherit = node[ns][id];
              type.call(node, node.__data__, i, j);
            });
          } finally {
            d3_transitionInherit = inherit;
            d3_transitionInheritId = inheritId;
          }
        } else {
          d3_selection_each(this, function(node) {
            var transition = node[ns][id];
            (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
          });
        }
        return this;
      };
      d3_transitionPrototype.transition = function() {
        var id0 = this.id,
            id1 = ++d3_transitionId,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            group,
            node,
            transition;
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            if (node = group[i]) {
              transition = node[ns][id0];
              d3_transitionNode(node, i, ns, id1, {
                time: transition.time,
                ease: transition.ease,
                delay: transition.delay + transition.duration,
                duration: transition.duration
              });
            }
            subgroup.push(node);
          }
        }
        return d3_transition(subgroups, ns, id1);
      };
      function d3_transitionNamespace(name) {
        return name == null ? "__transition__" : "__transition_" + name + "__";
      }
      function d3_transitionNode(node, i, ns, id, inherit) {
        var lock = node[ns] || (node[ns] = {
          active: 0,
          count: 0
        }),
            transition = lock[id],
            time,
            timer,
            duration,
            ease,
            tweens;
        function schedule(elapsed) {
          var delay = transition.delay;
          timer.t = delay + time;
          if (delay <= elapsed)
            return start(elapsed - delay);
          timer.c = start;
        }
        function start(elapsed) {
          var activeId = lock.active,
              active = lock[activeId];
          if (active) {
            active.timer.c = null;
            active.timer.t = NaN;
            --lock.count;
            delete lock[activeId];
            active.event && active.event.interrupt.call(node, node.__data__, active.index);
          }
          for (var cancelId in lock) {
            if (+cancelId < id) {
              var cancel = lock[cancelId];
              cancel.timer.c = null;
              cancel.timer.t = NaN;
              --lock.count;
              delete lock[cancelId];
            }
          }
          timer.c = tick;
          d3_timer(function() {
            if (timer.c && tick(elapsed || 1)) {
              timer.c = null;
              timer.t = NaN;
            }
            return 1;
          }, 0, time);
          lock.active = id;
          transition.event && transition.event.start.call(node, node.__data__, i);
          tweens = [];
          transition.tween.forEach(function(key, value) {
            if (value = value.call(node, node.__data__, i)) {
              tweens.push(value);
            }
          });
          ease = transition.ease;
          duration = transition.duration;
        }
        function tick(elapsed) {
          var t = elapsed / duration,
              e = ease(t),
              n = tweens.length;
          while (n > 0) {
            tweens[--n].call(node, e);
          }
          if (t >= 1) {
            transition.event && transition.event.end.call(node, node.__data__, i);
            if (--lock.count)
              delete lock[id];
            else
              delete node[ns];
            return 1;
          }
        }
        if (!transition) {
          time = inherit.time;
          timer = d3_timer(schedule, 0, time);
          transition = lock[id] = {
            tween: new d3_Map(),
            time: time,
            timer: timer,
            delay: inherit.delay,
            duration: inherit.duration,
            ease: inherit.ease,
            index: i
          };
          inherit = null;
          ++lock.count;
        }
      }
      d3.svg.axis = function() {
        var scale = d3.scale.linear(),
            orient = d3_svg_axisDefaultOrient,
            innerTickSize = 6,
            outerTickSize = 6,
            tickPadding = 3,
            tickArguments_ = [10],
            tickValues = null,
            tickFormat_;
        function axis(g) {
          g.each(function() {
            var g = d3.select(this);
            var scale0 = this.__chart__ || scale,
                scale1 = this.__chart__ = scale.copy();
            var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues,
                tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_,
                tick = g.selectAll(".tick").data(ticks, scale1),
                tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε),
                tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(),
                tickUpdate = d3.transition(tick.order()).style("opacity", 1),
                tickSpacing = Math.max(innerTickSize, 0) + tickPadding,
                tickTransform;
            var range = d3_scaleRange(scale1),
                path = g.selectAll(".domain").data([0]),
                pathUpdate = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
            tickEnter.append("line");
            tickEnter.append("text");
            var lineEnter = tickEnter.select("line"),
                lineUpdate = tickUpdate.select("line"),
                text = tick.select("text").text(tickFormat),
                textEnter = tickEnter.select("text"),
                textUpdate = tickUpdate.select("text"),
                sign = orient === "top" || orient === "left" ? -1 : 1,
                x1,
                x2,
                y1,
                y2;
            if (orient === "bottom" || orient === "top") {
              tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
              text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
              pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
            } else {
              tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
              text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
              pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
            }
            lineEnter.attr(y2, sign * innerTickSize);
            textEnter.attr(y1, sign * tickSpacing);
            lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
            textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
            if (scale1.rangeBand) {
              var x = scale1,
                  dx = x.rangeBand() / 2;
              scale0 = scale1 = function(d) {
                return x(d) + dx;
              };
            } else if (scale0.rangeBand) {
              scale0 = scale1;
            } else {
              tickExit.call(tickTransform, scale1, scale0);
            }
            tickEnter.call(tickTransform, scale0, scale1);
            tickUpdate.call(tickTransform, scale1, scale1);
          });
        }
        axis.scale = function(x) {
          if (!arguments.length)
            return scale;
          scale = x;
          return axis;
        };
        axis.orient = function(x) {
          if (!arguments.length)
            return orient;
          orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
          return axis;
        };
        axis.ticks = function() {
          if (!arguments.length)
            return tickArguments_;
          tickArguments_ = d3_array(arguments);
          return axis;
        };
        axis.tickValues = function(x) {
          if (!arguments.length)
            return tickValues;
          tickValues = x;
          return axis;
        };
        axis.tickFormat = function(x) {
          if (!arguments.length)
            return tickFormat_;
          tickFormat_ = x;
          return axis;
        };
        axis.tickSize = function(x) {
          var n = arguments.length;
          if (!n)
            return innerTickSize;
          innerTickSize = +x;
          outerTickSize = +arguments[n - 1];
          return axis;
        };
        axis.innerTickSize = function(x) {
          if (!arguments.length)
            return innerTickSize;
          innerTickSize = +x;
          return axis;
        };
        axis.outerTickSize = function(x) {
          if (!arguments.length)
            return outerTickSize;
          outerTickSize = +x;
          return axis;
        };
        axis.tickPadding = function(x) {
          if (!arguments.length)
            return tickPadding;
          tickPadding = +x;
          return axis;
        };
        axis.tickSubdivide = function() {
          return arguments.length && axis;
        };
        return axis;
      };
      var d3_svg_axisDefaultOrient = "bottom",
          d3_svg_axisOrients = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
          };
      function d3_svg_axisX(selection, x0, x1) {
        selection.attr("transform", function(d) {
          var v0 = x0(d);
          return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
        });
      }
      function d3_svg_axisY(selection, y0, y1) {
        selection.attr("transform", function(d) {
          var v0 = y0(d);
          return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
        });
      }
      d3.svg.brush = function() {
        var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"),
            x = null,
            y = null,
            xExtent = [0, 0],
            yExtent = [0, 0],
            xExtentDomain,
            yExtentDomain,
            xClamp = true,
            yClamp = true,
            resizes = d3_svg_brushResizes[0];
        function brush(g) {
          g.each(function() {
            var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
            var background = g.selectAll(".background").data([0]);
            background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
            g.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
            var resize = g.selectAll(".resize").data(resizes, d3_identity);
            resize.exit().remove();
            resize.enter().append("g").attr("class", function(d) {
              return "resize " + d;
            }).style("cursor", function(d) {
              return d3_svg_brushCursor[d];
            }).append("rect").attr("x", function(d) {
              return /[ew]$/.test(d) ? -3 : null;
            }).attr("y", function(d) {
              return /^[ns]/.test(d) ? -3 : null;
            }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
            resize.style("display", brush.empty() ? "none" : null);
            var gUpdate = d3.transition(g),
                backgroundUpdate = d3.transition(background),
                range;
            if (x) {
              range = d3_scaleRange(x);
              backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
              redrawX(gUpdate);
            }
            if (y) {
              range = d3_scaleRange(y);
              backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
              redrawY(gUpdate);
            }
            redraw(gUpdate);
          });
        }
        brush.event = function(g) {
          g.each(function() {
            var event_ = event.of(this, arguments),
                extent1 = {
                  x: xExtent,
                  y: yExtent,
                  i: xExtentDomain,
                  j: yExtentDomain
                },
                extent0 = this.__chart__ || extent1;
            this.__chart__ = extent1;
            if (d3_transitionInheritId) {
              d3.select(this).transition().each("start.brush", function() {
                xExtentDomain = extent0.i;
                yExtentDomain = extent0.j;
                xExtent = extent0.x;
                yExtent = extent0.y;
                event_({type: "brushstart"});
              }).tween("brush:brush", function() {
                var xi = d3_interpolateArray(xExtent, extent1.x),
                    yi = d3_interpolateArray(yExtent, extent1.y);
                xExtentDomain = yExtentDomain = null;
                return function(t) {
                  xExtent = extent1.x = xi(t);
                  yExtent = extent1.y = yi(t);
                  event_({
                    type: "brush",
                    mode: "resize"
                  });
                };
              }).each("end.brush", function() {
                xExtentDomain = extent1.i;
                yExtentDomain = extent1.j;
                event_({
                  type: "brush",
                  mode: "resize"
                });
                event_({type: "brushend"});
              });
            } else {
              event_({type: "brushstart"});
              event_({
                type: "brush",
                mode: "resize"
              });
              event_({type: "brushend"});
            }
          });
        };
        function redraw(g) {
          g.selectAll(".resize").attr("transform", function(d) {
            return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
          });
        }
        function redrawX(g) {
          g.select(".extent").attr("x", xExtent[0]);
          g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
        }
        function redrawY(g) {
          g.select(".extent").attr("y", yExtent[0]);
          g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
        }
        function brushstart() {
          var target = this,
              eventTarget = d3.select(d3.event.target),
              event_ = event.of(target, arguments),
              g = d3.select(target),
              resizing = eventTarget.datum(),
              resizingX = !/^(n|s)$/.test(resizing) && x,
              resizingY = !/^(e|w)$/.test(resizing) && y,
              dragging = eventTarget.classed("extent"),
              dragRestore = d3_event_dragSuppress(target),
              center,
              origin = d3.mouse(target),
              offset;
          var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
          if (d3.event.changedTouches) {
            w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
          } else {
            w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
          }
          g.interrupt().selectAll("*").interrupt();
          if (dragging) {
            origin[0] = xExtent[0] - origin[0];
            origin[1] = yExtent[0] - origin[1];
          } else if (resizing) {
            var ex = +/w$/.test(resizing),
                ey = +/^n/.test(resizing);
            offset = [xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1]];
            origin[0] = xExtent[ex];
            origin[1] = yExtent[ey];
          } else if (d3.event.altKey)
            center = origin.slice();
          g.style("pointer-events", "none").selectAll(".resize").style("display", null);
          d3.select("body").style("cursor", eventTarget.style("cursor"));
          event_({type: "brushstart"});
          brushmove();
          function keydown() {
            if (d3.event.keyCode == 32) {
              if (!dragging) {
                center = null;
                origin[0] -= xExtent[1];
                origin[1] -= yExtent[1];
                dragging = 2;
              }
              d3_eventPreventDefault();
            }
          }
          function keyup() {
            if (d3.event.keyCode == 32 && dragging == 2) {
              origin[0] += xExtent[1];
              origin[1] += yExtent[1];
              dragging = 0;
              d3_eventPreventDefault();
            }
          }
          function brushmove() {
            var point = d3.mouse(target),
                moved = false;
            if (offset) {
              point[0] += offset[0];
              point[1] += offset[1];
            }
            if (!dragging) {
              if (d3.event.altKey) {
                if (!center)
                  center = [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2];
                origin[0] = xExtent[+(point[0] < center[0])];
                origin[1] = yExtent[+(point[1] < center[1])];
              } else
                center = null;
            }
            if (resizingX && move1(point, x, 0)) {
              redrawX(g);
              moved = true;
            }
            if (resizingY && move1(point, y, 1)) {
              redrawY(g);
              moved = true;
            }
            if (moved) {
              redraw(g);
              event_({
                type: "brush",
                mode: dragging ? "move" : "resize"
              });
            }
          }
          function move1(point, scale, i) {
            var range = d3_scaleRange(scale),
                r0 = range[0],
                r1 = range[1],
                position = origin[i],
                extent = i ? yExtent : xExtent,
                size = extent[1] - extent[0],
                min,
                max;
            if (dragging) {
              r0 -= position;
              r1 -= size + position;
            }
            min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
            if (dragging) {
              max = (min += position) + size;
            } else {
              if (center)
                position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
              if (position < min) {
                max = min;
                min = position;
              } else {
                max = position;
              }
            }
            if (extent[0] != min || extent[1] != max) {
              if (i)
                yExtentDomain = null;
              else
                xExtentDomain = null;
              extent[0] = min;
              extent[1] = max;
              return true;
            }
          }
          function brushend() {
            brushmove();
            g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
            d3.select("body").style("cursor", null);
            w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
            dragRestore();
            event_({type: "brushend"});
          }
        }
        brush.x = function(z) {
          if (!arguments.length)
            return x;
          x = z;
          resizes = d3_svg_brushResizes[!x << 1 | !y];
          return brush;
        };
        brush.y = function(z) {
          if (!arguments.length)
            return y;
          y = z;
          resizes = d3_svg_brushResizes[!x << 1 | !y];
          return brush;
        };
        brush.clamp = function(z) {
          if (!arguments.length)
            return x && y ? [xClamp, yClamp] : x ? xClamp : y ? yClamp : null;
          if (x && y)
            xClamp = !!z[0], yClamp = !!z[1];
          else if (x)
            xClamp = !!z;
          else if (y)
            yClamp = !!z;
          return brush;
        };
        brush.extent = function(z) {
          var x0,
              x1,
              y0,
              y1,
              t;
          if (!arguments.length) {
            if (x) {
              if (xExtentDomain) {
                x0 = xExtentDomain[0], x1 = xExtentDomain[1];
              } else {
                x0 = xExtent[0], x1 = xExtent[1];
                if (x.invert)
                  x0 = x.invert(x0), x1 = x.invert(x1);
                if (x1 < x0)
                  t = x0, x0 = x1, x1 = t;
              }
            }
            if (y) {
              if (yExtentDomain) {
                y0 = yExtentDomain[0], y1 = yExtentDomain[1];
              } else {
                y0 = yExtent[0], y1 = yExtent[1];
                if (y.invert)
                  y0 = y.invert(y0), y1 = y.invert(y1);
                if (y1 < y0)
                  t = y0, y0 = y1, y1 = t;
              }
            }
            return x && y ? [[x0, y0], [x1, y1]] : x ? [x0, x1] : y && [y0, y1];
          }
          if (x) {
            x0 = z[0], x1 = z[1];
            if (y)
              x0 = x0[0], x1 = x1[0];
            xExtentDomain = [x0, x1];
            if (x.invert)
              x0 = x(x0), x1 = x(x1);
            if (x1 < x0)
              t = x0, x0 = x1, x1 = t;
            if (x0 != xExtent[0] || x1 != xExtent[1])
              xExtent = [x0, x1];
          }
          if (y) {
            y0 = z[0], y1 = z[1];
            if (x)
              y0 = y0[1], y1 = y1[1];
            yExtentDomain = [y0, y1];
            if (y.invert)
              y0 = y(y0), y1 = y(y1);
            if (y1 < y0)
              t = y0, y0 = y1, y1 = t;
            if (y0 != yExtent[0] || y1 != yExtent[1])
              yExtent = [y0, y1];
          }
          return brush;
        };
        brush.clear = function() {
          if (!brush.empty()) {
            xExtent = [0, 0], yExtent = [0, 0];
            xExtentDomain = yExtentDomain = null;
          }
          return brush;
        };
        brush.empty = function() {
          return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
        };
        return d3.rebind(brush, event, "on");
      };
      var d3_svg_brushCursor = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
      };
      var d3_svg_brushResizes = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
      var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
      var d3_time_formatUtc = d3_time_format.utc;
      var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
      d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
      function d3_time_formatIsoNative(date) {
        return date.toISOString();
      }
      d3_time_formatIsoNative.parse = function(string) {
        var date = new Date(string);
        return isNaN(date) ? null : date;
      };
      d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
      d3_time.second = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 1e3) * 1e3);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 1e3);
      }, function(date) {
        return date.getSeconds();
      });
      d3_time.seconds = d3_time.second.range;
      d3_time.seconds.utc = d3_time.second.utc.range;
      d3_time.minute = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 6e4) * 6e4);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 6e4);
      }, function(date) {
        return date.getMinutes();
      });
      d3_time.minutes = d3_time.minute.range;
      d3_time.minutes.utc = d3_time.minute.utc.range;
      d3_time.hour = d3_time_interval(function(date) {
        var timezone = date.getTimezoneOffset() / 60;
        return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 36e5);
      }, function(date) {
        return date.getHours();
      });
      d3_time.hours = d3_time.hour.range;
      d3_time.hours.utc = d3_time.hour.utc.range;
      d3_time.month = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setDate(1);
        return date;
      }, function(date, offset) {
        date.setMonth(date.getMonth() + offset);
      }, function(date) {
        return date.getMonth();
      });
      d3_time.months = d3_time.month.range;
      d3_time.months.utc = d3_time.month.utc.range;
      function d3_time_scale(linear, methods, format) {
        function scale(x) {
          return linear(x);
        }
        scale.invert = function(x) {
          return d3_time_scaleDate(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return linear.domain().map(d3_time_scaleDate);
          linear.domain(x);
          return scale;
        };
        function tickMethod(extent, count) {
          var span = extent[1] - extent[0],
              target = span / count,
              i = d3.bisect(d3_time_scaleSteps, target);
          return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function(d) {
            return d / 31536e6;
          }), count)[2]] : !i ? [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
        }
        scale.nice = function(interval, skip) {
          var domain = scale.domain(),
              extent = d3_scaleExtent(domain),
              method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
          if (method)
            interval = method[0], skip = method[1];
          function skipped(date) {
            return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
          }
          return scale.domain(d3_scale_nice(domain, skip > 1 ? {
            floor: function(date) {
              while (skipped(date = interval.floor(date)))
                date = d3_time_scaleDate(date - 1);
              return date;
            },
            ceil: function(date) {
              while (skipped(date = interval.ceil(date)))
                date = d3_time_scaleDate(+date + 1);
              return date;
            }
          } : interval));
        };
        scale.ticks = function(interval, skip) {
          var extent = d3_scaleExtent(scale.domain()),
              method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [{range: interval}, skip];
          if (method)
            interval = method[0], skip = method[1];
          return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
        };
        scale.tickFormat = function() {
          return format;
        };
        scale.copy = function() {
          return d3_time_scale(linear.copy(), methods, format);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      function d3_time_scaleDate(t) {
        return new Date(t);
      }
      var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
      var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
      var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L", function(d) {
        return d.getMilliseconds();
      }], [":%S", function(d) {
        return d.getSeconds();
      }], ["%I:%M", function(d) {
        return d.getMinutes();
      }], ["%I %p", function(d) {
        return d.getHours();
      }], ["%a %d", function(d) {
        return d.getDay() && d.getDate() != 1;
      }], ["%b %d", function(d) {
        return d.getDate() != 1;
      }], ["%B", function(d) {
        return d.getMonth();
      }], ["%Y", d3_true]]);
      var d3_time_scaleMilliseconds = {
        range: function(start, stop, step) {
          return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
        },
        floor: d3_identity,
        ceil: d3_identity
      };
      d3_time_scaleLocalMethods.year = d3_time.year;
      d3_time.scale = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
      };
      var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
        return [m[0].utc, m[1]];
      });
      var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([[".%L", function(d) {
        return d.getUTCMilliseconds();
      }], [":%S", function(d) {
        return d.getUTCSeconds();
      }], ["%I:%M", function(d) {
        return d.getUTCMinutes();
      }], ["%I %p", function(d) {
        return d.getUTCHours();
      }], ["%a %d", function(d) {
        return d.getUTCDay() && d.getUTCDate() != 1;
      }], ["%b %d", function(d) {
        return d.getUTCDate() != 1;
      }], ["%B", function(d) {
        return d.getUTCMonth();
      }], ["%Y", d3_true]]);
      d3_time_scaleUtcMethods.year = d3_time.year.utc;
      d3_time.scale.utc = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
      };
      d3.text = d3_xhrType(function(request) {
        return request.responseText;
      });
      d3.json = function(url, callback) {
        return d3_xhr(url, "application/json", d3_json, callback);
      };
      function d3_json(request) {
        return JSON.parse(request.responseText);
      }
      d3.html = function(url, callback) {
        return d3_xhr(url, "text/html", d3_html, callback);
      };
      function d3_html(request) {
        var range = d3_document.createRange();
        range.selectNode(d3_document.body);
        return range.createContextualFragment(request.responseText);
      }
      d3.xml = d3_xhrType(function(request) {
        return request.responseXML;
      });
      if (typeof define === "function" && define.amd)
        this.d3 = d3, define(d3);
      else if (typeof module === "object" && module.exports)
        module.exports = d3;
      else
        this.d3 = d3;
    }();
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('2');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["5"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var helper = $__require('5');
  module.exports = function() {
    var scale = d3.scale.linear(),
        shape = "rect",
        shapeWidth = 15,
        shapeHeight = 15,
        shapeRadius = 10,
        shapePadding = 2,
        cells = [5],
        labels = [],
        classPrefix = "",
        useClass = false,
        title = "",
        labelFormat = d3.format(".01f"),
        labelOffset = 10,
        labelAlign = "middle",
        labelDelimiter = "to",
        orient = "vertical",
        ascending = false,
        path,
        legendDispatcher = d3.dispatch("cellover", "cellout", "cellclick");
    function legend(svg) {
      var type = helper.d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter),
          legendG = svg.selectAll('g').data([scale]);
      legendG.enter().append('g').attr('class', classPrefix + 'legendCells');
      var cell = legendG.selectAll("." + classPrefix + "cell").data(type.data),
          cellEnter = cell.enter().append("g", ".cell").attr("class", classPrefix + "cell").style("opacity", 1e-6);
      shapeEnter = cellEnter.append(shape).attr("class", classPrefix + "swatch"), shapes = cell.select("g." + classPrefix + "cell " + shape);
      helper.d3_addEvents(cellEnter, legendDispatcher);
      cell.exit().transition().style("opacity", 0).remove();
      helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, path);
      helper.d3_addText(legendG, cellEnter, type.labels, classPrefix);
      var text = cell.select("text"),
          shapeSize = shapes[0].map(function(d) {
            return d.getBBox();
          });
      if (!useClass) {
        if (shape == "line") {
          shapes.style("stroke", type.feature);
        } else {
          shapes.style("fill", type.feature);
        }
      } else {
        shapes.attr("class", function(d) {
          return classPrefix + "swatch " + type.feature(d);
        });
      }
      var cellTrans,
          textTrans,
          textAlign = (labelAlign == "start") ? 0 : (labelAlign == "middle") ? 0.5 : 1;
      if (orient === "vertical") {
        cellTrans = function(d, i) {
          return "translate(0, " + (i * (shapeSize[i].height + shapePadding)) + ")";
        };
        textTrans = function(d, i) {
          return "translate(" + (shapeSize[i].width + shapeSize[i].x + labelOffset) + "," + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
        };
      } else if (orient === "horizontal") {
        cellTrans = function(d, i) {
          return "translate(" + (i * (shapeSize[i].width + shapePadding)) + ",0)";
        };
        textTrans = function(d, i) {
          return "translate(" + (shapeSize[i].width * textAlign + shapeSize[i].x) + "," + (shapeSize[i].height + shapeSize[i].y + labelOffset + 8) + ")";
        };
      }
      helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
      helper.d3_title(svg, legendG, title, classPrefix);
      cell.transition().style("opacity", 1);
    }
    legend.scale = function(_) {
      if (!arguments.length)
        return legend;
      scale = _;
      return legend;
    };
    legend.cells = function(_) {
      if (!arguments.length)
        return legend;
      if (_.length > 1 || _ >= 2) {
        cells = _;
      }
      return legend;
    };
    legend.shape = function(_, d) {
      if (!arguments.length)
        return legend;
      if (_ == "rect" || _ == "circle" || _ == "line" || (_ == "path" && (typeof d === 'string'))) {
        shape = _;
        path = d;
      }
      return legend;
    };
    legend.shapeWidth = function(_) {
      if (!arguments.length)
        return legend;
      shapeWidth = +_;
      return legend;
    };
    legend.shapeHeight = function(_) {
      if (!arguments.length)
        return legend;
      shapeHeight = +_;
      return legend;
    };
    legend.shapeRadius = function(_) {
      if (!arguments.length)
        return legend;
      shapeRadius = +_;
      return legend;
    };
    legend.shapePadding = function(_) {
      if (!arguments.length)
        return legend;
      shapePadding = +_;
      return legend;
    };
    legend.labels = function(_) {
      if (!arguments.length)
        return legend;
      labels = _;
      return legend;
    };
    legend.labelAlign = function(_) {
      if (!arguments.length)
        return legend;
      if (_ == "start" || _ == "end" || _ == "middle") {
        labelAlign = _;
      }
      return legend;
    };
    legend.labelFormat = function(_) {
      if (!arguments.length)
        return legend;
      labelFormat = _;
      return legend;
    };
    legend.labelOffset = function(_) {
      if (!arguments.length)
        return legend;
      labelOffset = +_;
      return legend;
    };
    legend.labelDelimiter = function(_) {
      if (!arguments.length)
        return legend;
      labelDelimiter = _;
      return legend;
    };
    legend.useClass = function(_) {
      if (!arguments.length)
        return legend;
      if (_ === true || _ === false) {
        useClass = _;
      }
      return legend;
    };
    legend.orient = function(_) {
      if (!arguments.length)
        return legend;
      _ = _.toLowerCase();
      if (_ == "horizontal" || _ == "vertical") {
        orient = _;
      }
      return legend;
    };
    legend.ascending = function(_) {
      if (!arguments.length)
        return legend;
      ascending = !!_;
      return legend;
    };
    legend.classPrefix = function(_) {
      if (!arguments.length)
        return legend;
      classPrefix = _;
      return legend;
    };
    legend.title = function(_) {
      if (!arguments.length)
        return legend;
      title = _;
      return legend;
    };
    d3.rebind(legend, legendDispatcher, "on");
    return legend;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6", ["5"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var helper = $__require('5');
  module.exports = function() {
    var scale = d3.scale.linear(),
        shape = "rect",
        shapeWidth = 15,
        shapePadding = 2,
        cells = [5],
        labels = [],
        useStroke = false,
        classPrefix = "",
        title = "",
        labelFormat = d3.format(".01f"),
        labelOffset = 10,
        labelAlign = "middle",
        labelDelimiter = "to",
        orient = "vertical",
        ascending = false,
        path,
        legendDispatcher = d3.dispatch("cellover", "cellout", "cellclick");
    function legend(svg) {
      var type = helper.d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter),
          legendG = svg.selectAll('g').data([scale]);
      legendG.enter().append('g').attr('class', classPrefix + 'legendCells');
      var cell = legendG.selectAll("." + classPrefix + "cell").data(type.data),
          cellEnter = cell.enter().append("g", ".cell").attr("class", classPrefix + "cell").style("opacity", 1e-6);
      shapeEnter = cellEnter.append(shape).attr("class", classPrefix + "swatch"), shapes = cell.select("g." + classPrefix + "cell " + shape);
      helper.d3_addEvents(cellEnter, legendDispatcher);
      cell.exit().transition().style("opacity", 0).remove();
      if (shape === "line") {
        helper.d3_drawShapes(shape, shapes, 0, shapeWidth);
        shapes.attr("stroke-width", type.feature);
      } else {
        helper.d3_drawShapes(shape, shapes, type.feature, type.feature, type.feature, path);
      }
      helper.d3_addText(legendG, cellEnter, type.labels, classPrefix);
      var text = cell.select("text"),
          shapeSize = shapes[0].map(function(d, i) {
            var bbox = d.getBBox();
            var stroke = scale(type.data[i]);
            if (shape === "line" && orient === "horizontal") {
              bbox.height = bbox.height + stroke;
            } else if (shape === "line" && orient === "vertical") {
              bbox.width = bbox.width;
            }
            return bbox;
          });
      var maxH = d3.max(shapeSize, function(d) {
        return d.height + d.y;
      }),
          maxW = d3.max(shapeSize, function(d) {
            return d.width + d.x;
          });
      var cellTrans,
          textTrans,
          textAlign = (labelAlign == "start") ? 0 : (labelAlign == "middle") ? 0.5 : 1;
      if (orient === "vertical") {
        cellTrans = function(d, i) {
          var height = d3.sum(shapeSize.slice(0, i + 1), function(d) {
            return d.height;
          });
          return "translate(0, " + (height + i * shapePadding) + ")";
        };
        textTrans = function(d, i) {
          return "translate(" + (maxW + labelOffset) + "," + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
        };
      } else if (orient === "horizontal") {
        cellTrans = function(d, i) {
          var width = d3.sum(shapeSize.slice(0, i + 1), function(d) {
            return d.width;
          });
          return "translate(" + (width + i * shapePadding) + ",0)";
        };
        textTrans = function(d, i) {
          return "translate(" + (shapeSize[i].width * textAlign + shapeSize[i].x) + "," + (maxH + labelOffset) + ")";
        };
      }
      helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
      helper.d3_title(svg, legendG, title, classPrefix);
      cell.transition().style("opacity", 1);
    }
    legend.scale = function(_) {
      if (!arguments.length)
        return legend;
      scale = _;
      return legend;
    };
    legend.cells = function(_) {
      if (!arguments.length)
        return legend;
      if (_.length > 1 || _ >= 2) {
        cells = _;
      }
      return legend;
    };
    legend.shape = function(_, d) {
      if (!arguments.length)
        return legend;
      if (_ == "rect" || _ == "circle" || _ == "line") {
        shape = _;
        path = d;
      }
      return legend;
    };
    legend.shapeWidth = function(_) {
      if (!arguments.length)
        return legend;
      shapeWidth = +_;
      return legend;
    };
    legend.shapePadding = function(_) {
      if (!arguments.length)
        return legend;
      shapePadding = +_;
      return legend;
    };
    legend.labels = function(_) {
      if (!arguments.length)
        return legend;
      labels = _;
      return legend;
    };
    legend.labelAlign = function(_) {
      if (!arguments.length)
        return legend;
      if (_ == "start" || _ == "end" || _ == "middle") {
        labelAlign = _;
      }
      return legend;
    };
    legend.labelFormat = function(_) {
      if (!arguments.length)
        return legend;
      labelFormat = _;
      return legend;
    };
    legend.labelOffset = function(_) {
      if (!arguments.length)
        return legend;
      labelOffset = +_;
      return legend;
    };
    legend.labelDelimiter = function(_) {
      if (!arguments.length)
        return legend;
      labelDelimiter = _;
      return legend;
    };
    legend.orient = function(_) {
      if (!arguments.length)
        return legend;
      _ = _.toLowerCase();
      if (_ == "horizontal" || _ == "vertical") {
        orient = _;
      }
      return legend;
    };
    legend.ascending = function(_) {
      if (!arguments.length)
        return legend;
      ascending = !!_;
      return legend;
    };
    legend.classPrefix = function(_) {
      if (!arguments.length)
        return legend;
      classPrefix = _;
      return legend;
    };
    legend.title = function(_) {
      if (!arguments.length)
        return legend;
      title = _;
      return legend;
    };
    d3.rebind(legend, legendDispatcher, "on");
    return legend;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    d3_identity: function(d) {
      return d;
    },
    d3_mergeLabels: function(gen, labels) {
      if (labels.length === 0)
        return gen;
      gen = (gen) ? gen : [];
      var i = labels.length;
      for (; i < gen.length; i++) {
        labels.push(gen[i]);
      }
      return labels;
    },
    d3_linearLegend: function(scale, cells, labelFormat) {
      var data = [];
      if (cells.length > 1) {
        data = cells;
      } else {
        var domain = scale.domain(),
            increment = (domain[domain.length - 1] - domain[0]) / (cells - 1),
            i = 0;
        for (; i < cells; i++) {
          data.push(domain[0] + i * increment);
        }
      }
      var labels = data.map(labelFormat);
      return {
        data: data,
        labels: labels,
        feature: function(d) {
          return scale(d);
        }
      };
    },
    d3_quantLegend: function(scale, labelFormat, labelDelimiter) {
      var labels = scale.range().map(function(d) {
        var invert = scale.invertExtent(d),
            a = labelFormat(invert[0]),
            b = labelFormat(invert[1]);
        return labelFormat(invert[0]) + " " + labelDelimiter + " " + labelFormat(invert[1]);
      });
      return {
        data: scale.range(),
        labels: labels,
        feature: this.d3_identity
      };
    },
    d3_ordinalLegend: function(scale) {
      return {
        data: scale.domain(),
        labels: scale.domain(),
        feature: function(d) {
          return scale(d);
        }
      };
    },
    d3_drawShapes: function(shape, shapes, shapeHeight, shapeWidth, shapeRadius, path) {
      if (shape === "rect") {
        shapes.attr("height", shapeHeight).attr("width", shapeWidth);
      } else if (shape === "circle") {
        shapes.attr("r", shapeRadius);
      } else if (shape === "line") {
        shapes.attr("x1", 0).attr("x2", shapeWidth).attr("y1", 0).attr("y2", 0);
      } else if (shape === "path") {
        shapes.attr("d", path);
      }
    },
    d3_addText: function(svg, enter, labels, classPrefix) {
      enter.append("text").attr("class", classPrefix + "label");
      svg.selectAll("g.cell text").data(labels).text(this.d3_identity);
    },
    d3_calcType: function(scale, ascending, cells, labels, labelFormat, labelDelimiter) {
      var type = scale.ticks ? this.d3_linearLegend(scale, cells, labelFormat) : scale.invertExtent ? this.d3_quantLegend(scale, labelFormat, labelDelimiter) : this.d3_ordinalLegend(scale);
      type.labels = this.d3_mergeLabels(type.labels, labels);
      if (ascending) {
        type.labels = this.d3_reverse(type.labels);
        type.data = this.d3_reverse(type.data);
      }
      return type;
    },
    d3_reverse: function(arr) {
      var mirror = [];
      for (var i = 0,
          l = arr.length; i < l; i++) {
        mirror[i] = arr[l - i - 1];
      }
      return mirror;
    },
    d3_placement: function(orient, cell, cellTrans, text, textTrans, labelAlign) {
      cell.attr("transform", cellTrans);
      text.attr("transform", textTrans);
      if (orient === "horizontal") {
        text.style("text-anchor", labelAlign);
      }
    },
    d3_addEvents: function(cells, dispatcher) {
      var _ = this;
      cells.on("mouseover.legend", function(d) {
        _.d3_cellOver(dispatcher, d, this);
      }).on("mouseout.legend", function(d) {
        _.d3_cellOut(dispatcher, d, this);
      }).on("click.legend", function(d) {
        _.d3_cellClick(dispatcher, d, this);
      });
    },
    d3_cellOver: function(cellDispatcher, d, obj) {
      cellDispatcher.cellover.call(obj, d);
    },
    d3_cellOut: function(cellDispatcher, d, obj) {
      cellDispatcher.cellout.call(obj, d);
    },
    d3_cellClick: function(cellDispatcher, d, obj) {
      cellDispatcher.cellclick.call(obj, d);
    },
    d3_title: function(svg, cellsSvg, title, classPrefix) {
      if (title !== "") {
        var titleText = svg.selectAll('text.' + classPrefix + 'legendTitle');
        titleText.data([title]).enter().append('text').attr('class', classPrefix + 'legendTitle');
        svg.selectAll('text.' + classPrefix + 'legendTitle').text(title);
        var yOffset = svg.select('.' + classPrefix + 'legendTitle').map(function(d) {
          return d[0].getBBox().height;
        })[0],
            xOffset = -cellsSvg.map(function(d) {
              return d[0].getBBox().x;
            })[0];
        cellsSvg.attr('transform', 'translate(' + xOffset + ',' + (yOffset + 10) + ')');
      }
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7", ["5"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var helper = $__require('5');
  module.exports = function() {
    var scale = d3.scale.linear(),
        shape = "path",
        shapeWidth = 15,
        shapeHeight = 15,
        shapeRadius = 10,
        shapePadding = 5,
        cells = [5],
        labels = [],
        classPrefix = "",
        useClass = false,
        title = "",
        labelFormat = d3.format(".01f"),
        labelAlign = "middle",
        labelOffset = 10,
        labelDelimiter = "to",
        orient = "vertical",
        ascending = false,
        legendDispatcher = d3.dispatch("cellover", "cellout", "cellclick");
    function legend(svg) {
      var type = helper.d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter),
          legendG = svg.selectAll('g').data([scale]);
      legendG.enter().append('g').attr('class', classPrefix + 'legendCells');
      var cell = legendG.selectAll("." + classPrefix + "cell").data(type.data),
          cellEnter = cell.enter().append("g", ".cell").attr("class", classPrefix + "cell").style("opacity", 1e-6);
      shapeEnter = cellEnter.append(shape).attr("class", classPrefix + "swatch"), shapes = cell.select("g." + classPrefix + "cell " + shape);
      helper.d3_addEvents(cellEnter, legendDispatcher);
      cell.exit().transition().style("opacity", 0).remove();
      helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, type.feature);
      helper.d3_addText(legendG, cellEnter, type.labels, classPrefix);
      var text = cell.select("text"),
          shapeSize = shapes[0].map(function(d) {
            return d.getBBox();
          });
      var maxH = d3.max(shapeSize, function(d) {
        return d.height;
      }),
          maxW = d3.max(shapeSize, function(d) {
            return d.width;
          });
      var cellTrans,
          textTrans,
          textAlign = (labelAlign == "start") ? 0 : (labelAlign == "middle") ? 0.5 : 1;
      if (orient === "vertical") {
        cellTrans = function(d, i) {
          return "translate(0, " + (i * (maxH + shapePadding)) + ")";
        };
        textTrans = function(d, i) {
          return "translate(" + (maxW + labelOffset) + "," + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
        };
      } else if (orient === "horizontal") {
        cellTrans = function(d, i) {
          return "translate(" + (i * (maxW + shapePadding)) + ",0)";
        };
        textTrans = function(d, i) {
          return "translate(" + (shapeSize[i].width * textAlign + shapeSize[i].x) + "," + (maxH + labelOffset) + ")";
        };
      }
      helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
      helper.d3_title(svg, legendG, title, classPrefix);
      cell.transition().style("opacity", 1);
    }
    legend.scale = function(_) {
      if (!arguments.length)
        return legend;
      scale = _;
      return legend;
    };
    legend.cells = function(_) {
      if (!arguments.length)
        return legend;
      if (_.length > 1 || _ >= 2) {
        cells = _;
      }
      return legend;
    };
    legend.shapePadding = function(_) {
      if (!arguments.length)
        return legend;
      shapePadding = +_;
      return legend;
    };
    legend.labels = function(_) {
      if (!arguments.length)
        return legend;
      labels = _;
      return legend;
    };
    legend.labelAlign = function(_) {
      if (!arguments.length)
        return legend;
      if (_ == "start" || _ == "end" || _ == "middle") {
        labelAlign = _;
      }
      return legend;
    };
    legend.labelFormat = function(_) {
      if (!arguments.length)
        return legend;
      labelFormat = _;
      return legend;
    };
    legend.labelOffset = function(_) {
      if (!arguments.length)
        return legend;
      labelOffset = +_;
      return legend;
    };
    legend.labelDelimiter = function(_) {
      if (!arguments.length)
        return legend;
      labelDelimiter = _;
      return legend;
    };
    legend.orient = function(_) {
      if (!arguments.length)
        return legend;
      _ = _.toLowerCase();
      if (_ == "horizontal" || _ == "vertical") {
        orient = _;
      }
      return legend;
    };
    legend.ascending = function(_) {
      if (!arguments.length)
        return legend;
      ascending = !!_;
      return legend;
    };
    legend.classPrefix = function(_) {
      if (!arguments.length)
        return legend;
      classPrefix = _;
      return legend;
    };
    legend.title = function(_) {
      if (!arguments.length)
        return legend;
      title = _;
      return legend;
    };
    d3.rebind(legend, legendDispatcher, "on");
    return legend;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8", ["4", "6", "7"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    color: $__require('4'),
    size: $__require('6'),
    symbol: $__require('7')
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9", ["3", "8"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var d3 = $__require('3');
  d3.legend = $__require('8');
  module.exports = d3;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('9');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d", ["e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('e');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f", ["10", "11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = $__require('10'),
      ITERATOR = $__require('11')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12", ["13"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('13'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14", ["15", "d", "f", "e", "12", "16"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('15'),
      call = $__require('d'),
      isArrayIter = $__require('f'),
      anObject = $__require('e'),
      toLength = $__require('12'),
      getIterFn = $__require('16');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("17", ["18", "19", "e", "15"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = $__require('18').getDesc,
      isObject = $__require('19'),
      anObject = $__require('e');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('15')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1b", ["e", "1c", "11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('e'),
      aFunction = $__require('1c'),
      SPECIES = $__require('11')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1e", ["1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1f').document && document.documentElement;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("20", ["19", "1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('19'),
      document = $__require('1f').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("21", ["15", "1d", "1e", "20", "1f", "22", "23"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ctx = $__require('15'),
        invoke = $__require('1d'),
        html = $__require('1e'),
        cel = $__require('20'),
        global = $__require('1f'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('22')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('23'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("24", ["1f", "21", "22", "23"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = $__require('1f'),
        macrotask = $__require('21').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('22')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('23'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("25", ["26"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var redefine = $__require('26');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("27", ["28", "18", "29", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('28'),
      $ = $__require('18'),
      DESCRIPTORS = $__require('29'),
      SPECIES = $__require('11')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2a", ["11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ITERATOR = $__require('11')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2b", ["18", "2c", "1f", "15", "2d", "2e", "19", "e", "1c", "c", "14", "17", "1a", "11", "1b", "24", "29", "25", "2f", "27", "28", "2a", "23"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = $__require('18'),
        LIBRARY = $__require('2c'),
        global = $__require('1f'),
        ctx = $__require('15'),
        classof = $__require('2d'),
        $export = $__require('2e'),
        isObject = $__require('19'),
        anObject = $__require('e'),
        aFunction = $__require('1c'),
        strictNew = $__require('c'),
        forOf = $__require('14'),
        setProto = $__require('17').set,
        same = $__require('1a'),
        SPECIES = $__require('11')('species'),
        speciesConstructor = $__require('1b'),
        asap = $__require('24'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('29')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('25')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('2f')(P, PROMISE);
    $__require('27')(PROMISE);
    Wrapper = $__require('28')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('2a')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('23'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("30", ["b", "31", "32", "2b", "28"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('b');
  $__require('31');
  $__require('32');
  $__require('2b');
  module.exports = $__require('28').Promise;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("33", ["30"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('30'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.register("34", ["35", "36"], function (_export) {
  "use strict";

  var _, axios, ACCESS_TOKEN, defaults;

  _export("getFacebookEvents", getFacebookEvents);

  function getFacebookEvents(uri) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return axios.get(uri, {
      params: _.defaults(params, defaults)
    }).then(function (_ref) {
      var data = _ref.data;

      return _.values(data);
    });
  }

  return {
    setters: [function (_2) {
      _ = _2["default"];
    }, function (_3) {
      axios = _3["default"];
    }],
    execute: function () {
      ACCESS_TOKEN = "EAAK3kpvZBViIBAMj2jeG3ZBEeUaUQxHd43KwBgvRwUhkUYmgZBeJsxnDyiIY8SReZA47UEXFMQf2YIogXkZAahEAbb3nmgTSVMRDuCBvPMf6mOxkTKe0pUrxKadsZB9Lpcmb403fy32RpL2ROO0qBmQ2p6zdBsjXoZD";
      defaults = {
        access_token: ACCESS_TOKEN,
        limit: 200,
        fields: ["id", "start_time", "attending_count", "interested_count"].join(",")
      };
    }
  };
});
$__System.registerDynamic("37", ["38", "23"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var utils = $__require('38');
    var PROTECTION_PREFIX = /^\)\]\}',?\n/;
    var DEFAULT_CONTENT_TYPE = {'Content-Type': 'application/x-www-form-urlencoded'};
    module.exports = {
      transformRequest: [function transformResponseJSON(data, headers) {
        if (utils.isFormData(data)) {
          return data;
        }
        if (utils.isArrayBuffer(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
          if (!utils.isUndefined(headers)) {
            utils.forEach(headers, function processContentTypeHeader(val, key) {
              if (key.toLowerCase() === 'content-type') {
                headers['Content-Type'] = val;
              }
            });
            if (utils.isUndefined(headers['Content-Type'])) {
              headers['Content-Type'] = 'application/json;charset=utf-8';
            }
          }
          return JSON.stringify(data);
        }
        return data;
      }],
      transformResponse: [function transformResponseJSON(data) {
        if (typeof data === 'string') {
          data = data.replace(PROTECTION_PREFIX, '');
          try {
            data = JSON.parse(data);
          } catch (e) {}
        }
        return data;
      }],
      headers: {
        common: {'Accept': 'application/json, text/plain, */*'},
        patch: utils.merge(DEFAULT_CONTENT_TYPE),
        post: utils.merge(DEFAULT_CONTENT_TYPE),
        put: utils.merge(DEFAULT_CONTENT_TYPE)
      },
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
    };
  })($__require('23'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("39", ["38"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('38');
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }
  module.exports = function buildURL(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }
        if (utils.isArray(val)) {
          key = key + '[]';
        }
        if (!utils.isArray(val)) {
          val = [val];
        }
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
      serializedParams = parts.join('&');
    }
    if (serializedParams) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3a", ["38"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('38');
  module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
      if (key) {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
    return parsed;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3b", ["38"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('38');
  module.exports = (utils.isStandardBrowserEnv() ? (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    function resolveURL(url) {
      var href = url;
      if (msie) {
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute('href', href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol && parsed.host === originURL.host);
    };
  })() : (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3c", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error;
  InvalidCharacterError.prototype.code = 5;
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';
  function btoa(input) {
    var str = String(input);
    var output = '';
    for (var block,
        charCode,
        idx = 0,
        map = chars; str.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError('INVALID_CHARACTER_ERR: DOM Exception 5');
      }
      block = block << 8 | charCode;
    }
    return output;
  }
  module.exports = btoa;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3d", ["38"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('38');
  module.exports = (utils.isStandardBrowserEnv() ? (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }
        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }
        if (secure === true) {
          cookie.push('secure');
        }
        document.cookie = cookie.join('; ');
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },
      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() : (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  })());
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3e", ["38", "39", "3a", "3f", "3b", "3c", "3d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('38');
  var buildURL = $__require('39');
  var parseHeaders = $__require('3a');
  var transformData = $__require('3f');
  var isURLSameOrigin = $__require('3b');
  var btoa = window.btoa || $__require('3c');
  module.exports = function xhrAdapter(resolve, reject, config) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type'];
    }
    var request = new XMLHttpRequest();
    if (window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
    }
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }
    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    request.onload = function handleLoad() {
      if (!request) {
        return;
      }
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = ['text', ''].indexOf(config.responseType || '') !== -1 ? request.responseText : request.response;
      var response = {
        data: transformData(responseData, responseHeaders, config.transformResponse),
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config
      };
      ((response.status >= 200 && response.status < 300) || (!('status' in request) && response.responseText) ? resolve : reject)(response);
      request = null;
    };
    request.onerror = function handleError() {
      reject(new Error('Network Error'));
      request = null;
    };
    if (utils.isStandardBrowserEnv()) {
      var cookies = $__require('3d');
      var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ? cookies.read(config.xsrfCookieName) : undefined;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          delete requestHeaders[key];
        } else {
          request.setRequestHeader(key, val);
        }
      });
    }
    if (config.withCredentials) {
      request.withCredentials = true;
    }
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }
    if (utils.isArrayBuffer(requestData)) {
      requestData = new DataView(requestData);
    }
    request.send(requestData);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("40", ["3e", "23"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    module.exports = function dispatchRequest(config) {
      return new Promise(function executor(resolve, reject) {
        try {
          var adapter;
          if (typeof config.adapter === 'function') {
            adapter = config.adapter;
          } else if (typeof XMLHttpRequest !== 'undefined') {
            adapter = $__require('3e');
          } else if (typeof process !== 'undefined') {
            adapter = $__require('3e');
          }
          if (typeof adapter === 'function') {
            adapter(resolve, reject, config);
          }
        } catch (e) {
          reject(e);
        }
      });
    };
  })($__require('23'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("41", ["38"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('38');
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  module.exports = InterceptorManager;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("42", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function isAbsoluteURL(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("43", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function combineURLs(baseURL, relativeURL) {
    return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("44", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("38", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = Object.prototype.toString;
  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  function isFormData(val) {
    return toString.call(val) === '[object FormData]';
  }
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }
  function isString(val) {
    return typeof val === 'string';
  }
  function isNumber(val) {
    return typeof val === 'number';
  }
  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  function isStandardBrowserEnv() {
    return (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function');
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
    if (typeof obj !== 'object' && !isArray(obj)) {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i = 0,
          l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }
    for (var i = 0,
        l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    trim: trim
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3f", ["38"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var utils = $__require('38');
  module.exports = function transformData(data, headers, fns) {
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
    return data;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("45", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("46", ["37", "38", "40", "41", "42", "43", "44", "3f", "45"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var defaults = $__require('37');
  var utils = $__require('38');
  var dispatchRequest = $__require('40');
  var InterceptorManager = $__require('41');
  var isAbsoluteURL = $__require('42');
  var combineURLs = $__require('43');
  var bind = $__require('44');
  var transformData = $__require('3f');
  function Axios(defaultConfig) {
    this.defaults = utils.merge({}, defaultConfig);
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  Axios.prototype.request = function request(config) {
    if (typeof config === 'string') {
      config = utils.merge({url: arguments[0]}, arguments[1]);
    }
    config = utils.merge(defaults, this.defaults, {method: 'get'}, config);
    if (config.baseURL && !isAbsoluteURL(config.url)) {
      config.url = combineURLs(config.baseURL, config.url);
    }
    config.withCredentials = config.withCredentials || this.defaults.withCredentials;
    config.data = transformData(config.data, config.headers, config.transformRequest);
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
    utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  };
  var defaultInstance = new Axios(defaults);
  var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
  axios.create = function create(defaultConfig) {
    return new Axios(defaultConfig);
  };
  axios.defaults = defaultInstance.defaults;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = $__require('45');
  axios.interceptors = defaultInstance.interceptors;
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
    axios[method] = bind(Axios.prototype[method], defaultInstance);
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    Axios.prototype[method] = function(url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
    axios[method] = bind(Axios.prototype[method], defaultInstance);
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("47", ["46"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('46');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("36", ["47"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('47');
  global.define = __define;
  return module.exports;
});

$__System.register("48", ["36"], function (_export) {
  "use strict";

  var axios;

  _export("getSiteEvents", getSiteEvents);

  function getSiteEvents() {
    return axios.get("https://techsoc.io/data/events.json").then(function (_ref) {
      var data = _ref.data;

      return data;
    });
  }

  return {
    setters: [function (_) {
      axios = _["default"];
    }],
    execute: function () {}
  };
});
$__System.register("49", ["33", "34", "35", "48", "4a"], function (_export) {
  var _Promise, getFacebookEvents, _, getSiteEvents, moment;

  function type(d) {
    if (d.start_time) d.start_time = moment(d.start_time, "YYYY-MM-DD HH:mm").toDate();
    if (d.end_time) d.end_time = moment(d.end_time, "YYYY-MM-DD HH:mm").toDate();
  }

  function getAllEvents() {
    return getSiteEvents().then(function (siteEvents) {
      var ids = _.compact(siteEvents.map(function (d) {
        return d.facebook_id;
      }));
      var chunked = _.chunk(ids, 50);
      var events = _.clone(siteEvents);
      return _Promise.all(chunked.map(function (ids) {
        return getFacebookEvents("https://graph.facebook.com/v2.6/", { ids: ids.join(",") });
      })).then(function (facebookEvents) {
        facebookEvents = _.flatten(facebookEvents);
        facebookEvents.forEach(function (facebookEvent) {
          var id = facebookEvent.id;
          var siteEvent = _.find(events, function (event) {
            return event.facebook_id == id;
          });
          if (siteEvent) {
            siteEvent.attending_count = facebookEvent.attending_count;
            siteEvent.interested_count = facebookEvent.interested_count;
          }
        });
        events.forEach(type);
        return events;
      });
    });
  }

  return {
    setters: [function (_2) {
      _Promise = _2["default"];
    }, function (_4) {
      getFacebookEvents = _4.getFacebookEvents;
    }, function (_3) {
      _ = _3["default"];
    }, function (_5) {
      getSiteEvents = _5.getSiteEvents;
    }, function (_a) {
      moment = _a["default"];
    }],
    execute: function () {
      "use strict";

      _export("getAllEvents", getAllEvents);
    }
  };
});
$__System.registerDynamic("19", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e", ["19"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('19');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("16", ["2d", "11", "10", "28"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('2d'),
      ITERATOR = $__require('11')('iterator'),
      Iterators = $__require('10');
  module.exports = $__require('28').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4b", ["e", "16", "28"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('e'),
      get = $__require('16');
  module.exports = $__require('28').getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4c", ["32", "31", "4b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('32');
  $__require('31');
  module.exports = $__require('4b');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4d", ["4c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('4c'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4e", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("50", ["22"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('22');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("51", ["50", "52"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = $__require('50'),
      defined = $__require('52');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("53", ["4e", "4f", "10", "51", "54"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var addToUnscopables = $__require('4e'),
      step = $__require('4f'),
      Iterators = $__require('10'),
      toIObject = $__require('51');
  module.exports = $__require('54')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("32", ["53", "10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('53');
  var Iterators = $__require('10');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("52", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("55", ["13", "52"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('13'),
      defined = $__require('52');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15", ["1c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = $__require('1c');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2e", ["1f", "28", "15"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('1f'),
      core = $__require('28'),
      ctx = $__require('15'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("26", ["56"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('56');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("57", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("58", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("29", ["58"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !$__require('58')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("56", ["18", "57", "29"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('18'),
      createDesc = $__require('57');
  module.exports = $__require('29') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("59", ["18", "57", "2f", "56", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('18'),
      descriptor = $__require('57'),
      setToStringTag = $__require('2f'),
      IteratorPrototype = {};
  $__require('56')(IteratorPrototype, $__require('11')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2f", ["18", "5a", "11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var def = $__require('18').setDesc,
      has = $__require('5a'),
      TAG = $__require('11')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("18", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("54", ["2c", "2e", "26", "56", "5a", "10", "59", "2f", "18", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var LIBRARY = $__require('2c'),
      $export = $__require('2e'),
      redefine = $__require('26'),
      hide = $__require('56'),
      has = $__require('5a'),
      Iterators = $__require('10'),
      $iterCreate = $__require('59'),
      setToStringTag = $__require('2f'),
      getProto = $__require('18').getProto,
      ITERATOR = $__require('11')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("31", ["55", "54"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $at = $__require('55')(true);
  $__require('54')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2d", ["22", "11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('22'),
      TAG = $__require('11')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5b", ["1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('1f'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11", ["5b", "5c", "1f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = $__require('5b')('wks'),
      uid = $__require('5c'),
      Symbol = $__require('1f').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5d", ["2d", "11", "10", "28"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('2d'),
      ITERATOR = $__require('11')('iterator'),
      Iterators = $__require('10');
  module.exports = $__require('28').isIterable = function(it) {
    var O = Object(it);
    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5e", ["32", "31", "5d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('32');
  $__require('31');
  module.exports = $__require('5d');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5f", ["5e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('5e'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("60", ["4d", "5f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _getIterator = $__require('4d')["default"];
  var _isIterable = $__require('5f')["default"];
  exports["default"] = (function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = _getIterator(arr),
            _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"])
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (_isIterable(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("61", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  ;
  (function(exports) {
    'use strict';
    var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
    var PLUS = '+'.charCodeAt(0);
    var SLASH = '/'.charCodeAt(0);
    var NUMBER = '0'.charCodeAt(0);
    var LOWER = 'a'.charCodeAt(0);
    var UPPER = 'A'.charCodeAt(0);
    var PLUS_URL_SAFE = '-'.charCodeAt(0);
    var SLASH_URL_SAFE = '_'.charCodeAt(0);
    function decode(elt) {
      var code = elt.charCodeAt(0);
      if (code === PLUS || code === PLUS_URL_SAFE)
        return 62;
      if (code === SLASH || code === SLASH_URL_SAFE)
        return 63;
      if (code < NUMBER)
        return -1;
      if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26;
      if (code < UPPER + 26)
        return code - UPPER;
      if (code < LOWER + 26)
        return code - LOWER + 26;
    }
    function b64ToByteArray(b64) {
      var i,
          j,
          l,
          tmp,
          placeHolders,
          arr;
      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      var len = b64.length;
      placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
      arr = new Arr(b64.length * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? b64.length - 4 : b64.length;
      var L = 0;
      function push(v) {
        arr[L++] = v;
      }
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
      }
      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
        push((tmp >> 8) & 0xFF);
        push(tmp & 0xFF);
      }
      return arr;
    }
    function uint8ToBase64(uint8) {
      var i,
          extraBytes = uint8.length % 3,
          output = "",
          temp,
          length;
      function encode(num) {
        return lookup.charAt(num);
      }
      function tripletToBase64(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      }
      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output += tripletToBase64(temp);
      }
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode((temp << 4) & 0x3F);
          output += '==';
          break;
        case 2:
          temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
          output += encode(temp >> 10);
          output += encode((temp >> 4) & 0x3F);
          output += encode((temp << 2) & 0x3F);
          output += '=';
          break;
      }
      return output;
    }
    exports.toByteArray = b64ToByteArray;
    exports.fromByteArray = uint8ToBase64;
  }(typeof exports === 'undefined' ? (this.base64js = {}) : exports));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("62", ["61"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('61');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("63", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e,
        m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity);
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e,
        m,
        c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("64", ["63"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('63');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("65", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("66", ["65"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('65');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("67", ["62", "64", "66"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var base64 = $__require('62');
  var ieee754 = $__require('64');
  var isArray = $__require('66');
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.poolSize = 8192;
  var rootParent = {};
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
  function typedArraySupport() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function() {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && arr.constructor === Bar && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
    } catch (e) {
      return false;
    }
  }
  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      if (arguments.length > 1)
        return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      this.length = 0;
      this.parent = undefined;
    }
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }
    return fromObject(this, arg);
  }
  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }
  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '')
      encoding = 'utf8';
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);
    that.write(string, encoding);
    return that;
  }
  function fromObject(that, object) {
    if (Buffer.isBuffer(object))
      return fromBuffer(that, object);
    if (isArray(object))
      return fromArray(that, object);
    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }
    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }
    if (object.length)
      return fromArrayLike(that, object);
    return fromJsonObject(that, object);
  }
  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }
  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromJsonObject(that, object) {
    var array;
    var length = 0;
    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  } else {
    Buffer.prototype.length = undefined;
    Buffer.prototype.parent = undefined;
  }
  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      that.length = length;
      that._isBuffer = true;
    }
    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool)
      that.parent = rootParent;
    return that;
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer))
      return new SlowBuffer(subject, encoding);
    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }
  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };
  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }
    if (a === b)
      return 0;
    var x = a.length;
    var y = b.length;
    var i = 0;
    var len = Math.min(x, y);
    while (i < len) {
      if (a[i] !== b[i])
        break;
      ++i;
    }
    if (i !== len) {
      x = a[i];
      y = b[i];
    }
    if (x < y)
      return -1;
    if (y < x)
      return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'raw':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!isArray(list))
      throw new TypeError('list argument must be an Array of Buffers.');
    if (list.length === 0) {
      return new Buffer(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; i++) {
        length += list[i].length;
      }
    }
    var buf = new Buffer(length);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
      var item = list[i];
      item.copy(buf, pos);
      pos += item.length;
    }
    return buf;
  };
  function byteLength(string, encoding) {
    if (typeof string !== 'string')
      string = '' + string;
    var len = string.length;
    if (len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase)
            return utf8ToBytes(string).length;
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;
    if (!encoding)
      encoding = 'utf8';
    if (start < 0)
      start = 0;
    if (end > this.length)
      end = this.length;
    if (end <= start)
      return '';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'binary':
          return binarySlice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0)
      return '';
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return true;
    return Buffer.compare(this, b) === 0;
  };
  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max)
        str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };
  Buffer.prototype.compare = function compare(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return 0;
    return Buffer.compare(this, b);
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
    if (byteOffset > 0x7fffffff)
      byteOffset = 0x7fffffff;
    else if (byteOffset < -0x80000000)
      byteOffset = -0x80000000;
    byteOffset >>= 0;
    if (this.length === 0)
      return -1;
    if (byteOffset >= this.length)
      return -1;
    if (byteOffset < 0)
      byteOffset = Math.max(this.length + byteOffset, 0);
    if (typeof val === 'string') {
      if (val.length === 0)
        return -1;
      return String.prototype.indexOf.call(this, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
      return arrayIndexOf(this, val, byteOffset);
    }
    if (typeof val === 'number') {
      if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
      }
      return arrayIndexOf(this, [val], byteOffset);
    }
    function arrayIndexOf(arr, val, byteOffset) {
      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arr.length; i++) {
        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
          if (foundIndex === -1)
            foundIndex = i;
          if (i - foundIndex + 1 === val.length)
            return byteOffset + foundIndex;
        } else {
          foundIndex = -1;
        }
      }
      return -1;
    }
    throw new TypeError('val must be string, number or Buffer');
  };
  Buffer.prototype.get = function get(offset) {
    console.log('.get() is deprecated. Access using array indexes instead.');
    return this.readUInt8(offset);
  };
  Buffer.prototype.set = function set(v, offset) {
    console.log('.set() is deprecated. Access using array indexes instead.');
    return this.writeUInt8(v, offset);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
      throw new Error('Invalid hex string');
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed))
        throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined)
          encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      var swap = encoding;
      encoding = offset;
      offset = length | 0;
      length = swap;
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
      length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('attempt to write outside buffer bounds');
    }
    if (!encoding)
      encoding = 'utf8';
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
          return asciiWrite(this, string, offset, length);
        case 'binary':
          return binaryWrite(this, string, offset, length);
        case 'base64':
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte,
            thirdByte,
            fourthByte,
            tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = Buffer._augment(this.subarray(start, end));
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; i++) {
        newBuf[i] = this[i + start];
      }
    }
    if (newBuf.length)
      newBuf.parent = this.parent || this;
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0)
      throw new RangeError('offset is not uint');
    if (offset + ext > length)
      throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8);
  };
  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1];
  };
  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000);
  };
  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
  };
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80))
      return (this[offset]);
    return ((0xff - this[offset] + 1) * -1);
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3]);
  };
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf))
      throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
  }
  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffffffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }
  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    if (value < 0)
      value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0)
      value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
    if (offset < 0)
      throw new RangeError('index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
      throw new RangeError('sourceStart out of bounds');
    if (end < 0)
      throw new RangeError('sourceEnd out of bounds');
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; i--) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; i++) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      target._set(this.subarray(start, start + len), targetStart);
    }
    return len;
  };
  Buffer.prototype.fill = function fill(value, start, end) {
    if (!value)
      value = 0;
    if (!start)
      start = 0;
    if (!end)
      end = this.length;
    if (end < start)
      throw new RangeError('end < start');
    if (end === start)
      return;
    if (this.length === 0)
      return;
    if (start < 0 || start >= this.length)
      throw new RangeError('start out of bounds');
    if (end < 0 || end > this.length)
      throw new RangeError('end out of bounds');
    var i;
    if (typeof value === 'number') {
      for (i = start; i < end; i++) {
        this[i] = value;
      }
    } else {
      var bytes = utf8ToBytes(value.toString());
      var len = bytes.length;
      for (i = start; i < end; i++) {
        this[i] = bytes[i % len];
      }
    }
    return this;
  };
  Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
    if (typeof Uint8Array !== 'undefined') {
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        return (new Buffer(this)).buffer;
      } else {
        var buf = new Uint8Array(this.length);
        for (var i = 0,
            len = buf.length; i < len; i += 1) {
          buf[i] = this[i];
        }
        return buf.buffer;
      }
    } else {
      throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
  };
  var BP = Buffer.prototype;
  Buffer._augment = function _augment(arr) {
    arr.constructor = Buffer;
    arr._isBuffer = true;
    arr._set = arr.set;
    arr.get = BP.get;
    arr.set = BP.set;
    arr.write = BP.write;
    arr.toString = BP.toString;
    arr.toLocaleString = BP.toString;
    arr.toJSON = BP.toJSON;
    arr.equals = BP.equals;
    arr.compare = BP.compare;
    arr.indexOf = BP.indexOf;
    arr.copy = BP.copy;
    arr.slice = BP.slice;
    arr.readUIntLE = BP.readUIntLE;
    arr.readUIntBE = BP.readUIntBE;
    arr.readUInt8 = BP.readUInt8;
    arr.readUInt16LE = BP.readUInt16LE;
    arr.readUInt16BE = BP.readUInt16BE;
    arr.readUInt32LE = BP.readUInt32LE;
    arr.readUInt32BE = BP.readUInt32BE;
    arr.readIntLE = BP.readIntLE;
    arr.readIntBE = BP.readIntBE;
    arr.readInt8 = BP.readInt8;
    arr.readInt16LE = BP.readInt16LE;
    arr.readInt16BE = BP.readInt16BE;
    arr.readInt32LE = BP.readInt32LE;
    arr.readInt32BE = BP.readInt32BE;
    arr.readFloatLE = BP.readFloatLE;
    arr.readFloatBE = BP.readFloatBE;
    arr.readDoubleLE = BP.readDoubleLE;
    arr.readDoubleBE = BP.readDoubleBE;
    arr.writeUInt8 = BP.writeUInt8;
    arr.writeUIntLE = BP.writeUIntLE;
    arr.writeUIntBE = BP.writeUIntBE;
    arr.writeUInt16LE = BP.writeUInt16LE;
    arr.writeUInt16BE = BP.writeUInt16BE;
    arr.writeUInt32LE = BP.writeUInt32LE;
    arr.writeUInt32BE = BP.writeUInt32BE;
    arr.writeIntLE = BP.writeIntLE;
    arr.writeIntBE = BP.writeIntBE;
    arr.writeInt8 = BP.writeInt8;
    arr.writeInt16LE = BP.writeInt16LE;
    arr.writeInt16BE = BP.writeInt16BE;
    arr.writeInt32LE = BP.writeInt32LE;
    arr.writeInt32BE = BP.writeInt32BE;
    arr.writeFloatLE = BP.writeFloatLE;
    arr.writeFloatBE = BP.writeFloatBE;
    arr.writeDoubleLE = BP.writeDoubleLE;
    arr.writeDoubleBE = BP.writeDoubleBE;
    arr.fill = BP.fill;
    arr.inspect = BP.inspect;
    arr.toArrayBuffer = BP.toArrayBuffer;
    return arr;
  };
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    if (str.length < 2)
      return '';
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim)
      return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }
  function toHex(n) {
    if (n < 16)
      return '0' + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1)
            bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      if (codePoint < 0x80) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c,
        hi,
        lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0)
        break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if ((i + offset >= dst.length) || (i >= src.length))
        break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("68", ["67"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('67');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("69", ["68"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('buffer') : $__require('68');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6a", ["69"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('69');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6b", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6c", ["6b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('6b');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6d", ["6c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? process : $__require('6c');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("23", ["6d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('6d');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6e", ["6a", "23"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(Buffer, process) {
    ;
    (function() {
      var undefined;
      var VERSION = '4.5.0';
      var BIND_FLAG = 1,
          BIND_KEY_FLAG = 2,
          CURRY_BOUND_FLAG = 4,
          CURRY_FLAG = 8,
          CURRY_RIGHT_FLAG = 16,
          PARTIAL_FLAG = 32,
          PARTIAL_RIGHT_FLAG = 64,
          ARY_FLAG = 128,
          REARG_FLAG = 256,
          FLIP_FLAG = 512;
      var UNORDERED_COMPARE_FLAG = 1,
          PARTIAL_COMPARE_FLAG = 2;
      var DEFAULT_TRUNC_LENGTH = 30,
          DEFAULT_TRUNC_OMISSION = '...';
      var HOT_COUNT = 150,
          HOT_SPAN = 16;
      var LARGE_ARRAY_SIZE = 200;
      var LAZY_FILTER_FLAG = 1,
          LAZY_MAP_FLAG = 2,
          LAZY_WHILE_FLAG = 3;
      var FUNC_ERROR_TEXT = 'Expected a function';
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      var INFINITY = 1 / 0,
          MAX_SAFE_INTEGER = 9007199254740991,
          MAX_INTEGER = 1.7976931348623157e+308,
          NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295,
          MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
          HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var PLACEHOLDER = '__lodash_placeholder__';
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]',
          weakMapTag = '[object WeakMap]',
          weakSetTag = '[object WeakSet]';
      var arrayBufferTag = '[object ArrayBuffer]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var reEmptyStringLeading = /\b__p \+= '';/g,
          reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
          reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
          reUnescapedHtml = /[&<>"'`]/g,
          reHasEscapedHtml = RegExp(reEscapedHtml.source),
          reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g,
          reEvaluate = /<%([\s\S]+?)%>/g,
          reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
          reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrim = /^\s+|\s+$/g,
          reTrimStart = /^\s+/,
          reTrimEnd = /\s+$/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reHasHexPrefix = /^0x/i;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = '\\ud800-\\udfff',
          rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
          rsComboSymbolsRange = '\\u20d0-\\u20f0',
          rsDingbatRange = '\\u2700-\\u27bf',
          rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
          rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
          rsQuoteRange = '\\u2018\\u2019\\u201c\\u201d',
          rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          rsVarRange = '\\ufe0e\\ufe0f',
          rsBreakRange = rsMathOpRange + rsNonCharRange + rsQuoteRange + rsSpaceRange;
      var rsAstral = '[' + rsAstralRange + ']',
          rsBreak = '[' + rsBreakRange + ']',
          rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
          rsDigits = '\\d+',
          rsDingbat = '[' + rsDingbatRange + ']',
          rsLower = '[' + rsLowerRange + ']',
          rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
          rsFitz = '\\ud83c[\\udffb-\\udfff]',
          rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
          rsNonAstral = '[^' + rsAstralRange + ']',
          rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          rsUpper = '[' + rsUpperRange + ']',
          rsZWJ = '\\u200d';
      var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
          rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
          reOptMod = rsModifier + '?',
          rsOptVar = '[' + rsVarRange + ']?',
          rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
          rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
      var reComboMark = RegExp(rsCombo, 'g');
      var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
      var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
      var reBasicWord = /[a-zA-Z0-9]+/g;
      var reComplexWord = RegExp([rsUpper + '?' + rsLower + '+(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsUpperMisc + '+(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')', rsUpper + '?' + rsLowerMisc + '+', rsUpper + '+', rsDigits, rsEmoji].join('|'), 'g');
      var reHasComplexWord = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = ['Array', 'Buffer', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object', 'Reflect', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcC': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xeC': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss'
      };
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
      };
      var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#96;': '`'
      };
      var objectTypes = {
        'function': true,
        'object': true
      };
      var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };
      var freeParseFloat = parseFloat,
          freeParseInt = parseInt;
      var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
      var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : undefined;
      var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : undefined;
      var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
      var freeSelf = checkGlobal(objectTypes[typeof self] && self);
      var freeWindow = checkGlobal(objectTypes[typeof window] && window);
      var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
      var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
      function addMapEntry(map, pair) {
        map.set(pair[0], pair[1]);
        return map;
      }
      function addSetEntry(set, value) {
        set.add(value);
        return set;
      }
      function apply(func, thisArg, args) {
        var length = args.length;
        switch (length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayConcat(array, other) {
        var index = -1,
            length = array.length,
            othIndex = -1,
            othLength = other.length,
            result = Array(length + othLength);
        while (++index < length) {
          result[index] = array[index];
        }
        while (++othIndex < othLength) {
          result[index++] = other[othIndex];
        }
        return result;
      }
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[++resIndex] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        return !!array.length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function baseExtremum(array, iteratee, comparator) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          var value = array[index],
              current = iteratee(value);
          if (current != null && (computed === undefined ? current === current : comparator(current, computed))) {
            var computed = current,
                result = value;
          }
        }
        return result;
      }
      function baseFind(collection, predicate, eachFunc, retKey) {
        var result;
        eachFunc(collection, function(value, key, collection) {
          if (predicate(value, key, collection)) {
            result = retKey ? key : value;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromRight) {
        var length = array.length,
            index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length)) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
          return indexOfNaN(array, fromIndex);
        }
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result,
            index = -1,
            length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined) {
            result = result === undefined ? current : (result + current);
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1,
            length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function checkGlobal(value) {
        return (value && value.Object === Object) ? value : null;
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsNull = value === null,
              valIsUndef = value === undefined,
              valIsReflexive = value === value;
          var othIsNull = other === null,
              othIsUndef = other === undefined,
              othIsReflexive = other === other;
          if ((value > other && !othIsNull) || !valIsReflexive || (valIsNull && !othIsUndef && othIsReflexive) || (valIsUndef && othIsReflexive)) {
            return 1;
          }
          if ((value < other && !valIsNull) || !othIsReflexive || (othIsNull && !valIsUndef && valIsReflexive) || (othIsUndef && valIsReflexive)) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1,
            objCriteria = object.criteria,
            othCriteria = other.criteria,
            length = objCriteria.length,
            ordersLength = orders.length;
        while (++index < length) {
          var result = compareAscending(objCriteria[index], othCriteria[index]);
          if (result) {
            if (index >= ordersLength) {
              return result;
            }
            var order = orders[index];
            return result * (order == 'desc' ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function deburrLetter(letter) {
        return deburredLetters[letter];
      }
      function escapeHtmlChar(chr) {
        return htmlEscapes[chr];
      }
      function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
      }
      function indexOfNaN(array, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 0 : -1);
        while ((fromRight ? index-- : ++index < length)) {
          var other = array[index];
          if (other !== other) {
            return index;
          }
        }
        return -1;
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != 'function') {
          try {
            result = !!(value + '');
          } catch (e) {}
        }
        return result;
      }
      function isIndex(value, length) {
        value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return value > -1 && value % 1 == 0 && value < length;
      }
      function iteratorToArray(iterator) {
        var data,
            result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
        while (++index < length) {
          if (array[index] === placeholder) {
            array[index] = PLACEHOLDER;
            result[++resIndex] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function stringSize(string) {
        if (!(string && reHasComplexSymbol.test(string))) {
          return string.length;
        }
        var result = reComplexSymbol.lastIndex = 0;
        while (reComplexSymbol.test(string)) {
          result++;
        }
        return result;
      }
      function stringToArray(string) {
        return string.match(reComplexSymbol);
      }
      function unescapeHtmlChar(chr) {
        return htmlUnescapes[chr];
      }
      function runInContext(context) {
        context = context ? _.defaults({}, context, _.pick(root, contextProps)) : root;
        var Date = context.Date,
            Error = context.Error,
            Math = context.Math,
            RegExp = context.RegExp,
            TypeError = context.TypeError;
        var arrayProto = context.Array.prototype,
            objectProto = context.Object.prototype;
        var funcToString = context.Function.prototype.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var objectCtorString = funcToString.call(Object);
        var objectToString = objectProto.toString;
        var oldDash = root._;
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var Buffer = moduleExports ? context.Buffer : undefined,
            Reflect = context.Reflect,
            Symbol = context.Symbol,
            Uint8Array = context.Uint8Array,
            clearTimeout = context.clearTimeout,
            enumerate = Reflect ? Reflect.enumerate : undefined,
            getPrototypeOf = Object.getPrototypeOf,
            getOwnPropertySymbols = Object.getOwnPropertySymbols,
            iteratorSymbol = typeof(iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined,
            objectCreate = Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            setTimeout = context.setTimeout,
            splice = arrayProto.splice;
        var nativeCeil = Math.ceil,
            nativeFloor = Math.floor,
            nativeIsFinite = context.isFinite,
            nativeJoin = arrayProto.join,
            nativeKeys = Object.keys,
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random,
            nativeReverse = arrayProto.reverse;
        var Map = getNative(context, 'Map'),
            Set = getNative(context, 'Set'),
            WeakMap = getNative(context, 'WeakMap'),
            nativeCreate = getNative(Object, 'create');
        var metaMap = WeakMap && new WeakMap;
        var mapCtorString = Map ? funcToString.call(Map) : '',
            setCtorString = Set ? funcToString.call(Set) : '',
            weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';
        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = Symbol ? symbolProto.valueOf : undefined,
            symbolToString = Symbol ? symbolProto.toString : undefined;
        var realNames = {};
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, '__wrapped__')) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        function baseLodash() {}
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined;
        }
        lodash.templateSettings = {
          'escape': reEscape,
          'evaluate': reEvaluate,
          'interpolate': reInterpolate,
          'variable': '',
          'imports': {'_': lodash}
        };
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result = new LazyWrapper(this.__wrapped__);
          result.__actions__ = copyArray(this.__actions__);
          result.__dir__ = this.__dir__;
          result.__filtered__ = this.__filtered__;
          result.__iteratees__ = copyArray(this.__iteratees__);
          result.__takeCount__ = this.__takeCount__;
          result.__views__ = copyArray(this.__views__);
          return result;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result = new LazyWrapper(this);
            result.__dir__ = -1;
            result.__filtered__ = true;
          } else {
            result = this.clone();
            result.__dir__ *= -1;
          }
          return result;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(),
              dir = this.__dir__,
              isArr = isArray(array),
              isRight = dir < 0,
              arrLength = isArr ? array.length : 0,
              view = getView(0, arrLength, this.__views__),
              start = view.start,
              end = view.end,
              length = end - start,
              index = isRight ? end : (start - 1),
              iteratees = this.__iteratees__,
              iterLength = iteratees.length,
              resIndex = 0,
              takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1,
                value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex],
                  iteratee = data.iteratee,
                  type = data.type,
                  computed = iteratee(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result[resIndex++] = value;
          }
          return result;
        }
        function Hash() {}
        function hashDelete(hash, key) {
          return hashHas(hash, key) && delete hash[key];
        }
        function hashGet(hash, key) {
          if (nativeCreate) {
            var result = hash[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
        }
        function hashHas(hash, key) {
          return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
        }
        function hashSet(hash, key, value) {
          hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
        }
        function MapCache(values) {
          var index = -1,
              length = values ? values.length : 0;
          this.clear();
          while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapClear() {
          this.__data__ = {
            'hash': new Hash,
            'map': Map ? new Map : [],
            'string': new Hash
          };
        }
        function mapDelete(key) {
          var data = this.__data__;
          if (isKeyable(key)) {
            return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
          }
          return Map ? data.map['delete'](key) : assocDelete(data.map, key);
        }
        function mapGet(key) {
          var data = this.__data__;
          if (isKeyable(key)) {
            return hashGet(typeof key == 'string' ? data.string : data.hash, key);
          }
          return Map ? data.map.get(key) : assocGet(data.map, key);
        }
        function mapHas(key) {
          var data = this.__data__;
          if (isKeyable(key)) {
            return hashHas(typeof key == 'string' ? data.string : data.hash, key);
          }
          return Map ? data.map.has(key) : assocHas(data.map, key);
        }
        function mapSet(key, value) {
          var data = this.__data__;
          if (isKeyable(key)) {
            hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
          } else if (Map) {
            data.map.set(key, value);
          } else {
            assocSet(data.map, key, value);
          }
          return this;
        }
        function SetCache(values) {
          var index = -1,
              length = values ? values.length : 0;
          this.__data__ = new MapCache;
          while (++index < length) {
            this.push(values[index]);
          }
        }
        function cacheHas(cache, value) {
          var map = cache.__data__;
          if (isKeyable(value)) {
            var data = map.__data__,
                hash = typeof value == 'string' ? data.string : data.hash;
            return hash[value] === HASH_UNDEFINED;
          }
          return map.has(value);
        }
        function cachePush(value) {
          var map = this.__data__;
          if (isKeyable(value)) {
            var data = map.__data__,
                hash = typeof value == 'string' ? data.string : data.hash;
            hash[value] = HASH_UNDEFINED;
          } else {
            map.set(value, HASH_UNDEFINED);
          }
        }
        function Stack(values) {
          var index = -1,
              length = values ? values.length : 0;
          this.clear();
          while (++index < length) {
            var entry = values[index];
            this.set(entry[0], entry[1]);
          }
        }
        function stackClear() {
          this.__data__ = {
            'array': [],
            'map': null
          };
        }
        function stackDelete(key) {
          var data = this.__data__,
              array = data.array;
          return array ? assocDelete(array, key) : data.map['delete'](key);
        }
        function stackGet(key) {
          var data = this.__data__,
              array = data.array;
          return array ? assocGet(array, key) : data.map.get(key);
        }
        function stackHas(key) {
          var data = this.__data__,
              array = data.array;
          return array ? assocHas(array, key) : data.map.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__,
              array = data.array;
          if (array) {
            if (array.length < (LARGE_ARRAY_SIZE - 1)) {
              assocSet(array, key, value);
            } else {
              data.array = null;
              data.map = new MapCache(array);
            }
          }
          var map = data.map;
          if (map) {
            map.set(key, value);
          }
          return this;
        }
        function assocDelete(array, key) {
          var index = assocIndexOf(array, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = array.length - 1;
          if (index == lastIndex) {
            array.pop();
          } else {
            splice.call(array, index, 1);
          }
          return true;
        }
        function assocGet(array, key) {
          var index = assocIndexOf(array, key);
          return index < 0 ? undefined : array[index][1];
        }
        function assocHas(array, key) {
          return assocIndexOf(array, key) > -1;
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function assocSet(array, key, value) {
          var index = assocIndexOf(array, key);
          if (index < 0) {
            array.push([key, value]);
          } else {
            array[index][1] = value;
          }
        }
        function assignInDefaults(objValue, srcValue, key, object) {
          if (objValue === undefined || (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            return srcValue;
          }
          return objValue;
        }
        function assignMergeValue(object, key, value) {
          if ((value !== undefined && !eq(object[key], value)) || (typeof key == 'number' && value === undefined && !(key in object))) {
            object[key] = value;
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if ((!eq(objValue, value) || (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) || (value === undefined && !(key in object))) {
            object[key] = value;
          }
        }
        function baseAggregator(collection, setter, iteratee, accumulator) {
          baseEach(collection, function(value, key, collection) {
            setter(accumulator, value, iteratee(value), collection);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAt(object, paths) {
          var index = -1,
              isNil = object == null,
              length = paths.length,
              result = Array(length);
          while (++index < length) {
            result[index] = isNil ? undefined : get(object, paths[index]);
          }
          return result;
        }
        function baseCastArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function baseCastFunction(value) {
          return typeof value == 'function' ? value : identity;
        }
        function baseCastPath(value) {
          return isArray(value) ? value : stringToPath(value);
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, isDeep, customizer, key, object, stack) {
          var result;
          if (customizer) {
            result = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result);
            }
          } else {
            var tag = getTag(value),
                isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
              if (isHostObject(value)) {
                return object ? value : {};
              }
              result = initCloneObject(isFunc ? {} : value);
              if (!isDeep) {
                return copySymbols(value, baseAssign(result, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack);
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result);
          (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
            assignValue(result, key, baseClone(subValue, isDeep, customizer, key, value, stack));
          });
          return isArr ? result : copySymbols(value, result);
        }
        function baseConforms(source) {
          var props = keys(source),
              length = props.length;
          return function(object) {
            if (object == null) {
              return !length;
            }
            var index = length;
            while (index--) {
              var key = props[index],
                  predicate = source[key],
                  value = object[key];
              if ((value === undefined && !(key in Object(object))) || !predicate(value)) {
                return false;
              }
            }
            return true;
          };
        }
        function baseCreate(proto) {
          return isObject(proto) ? objectCreate(proto) : {};
        }
        function baseDelay(func, wait, args) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined, args);
          }, wait);
        }
        function baseDifference(array, values, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              isCommon = true,
              length = array.length,
              result = [],
              valuesLength = values.length;
          if (!length) {
            return result;
          }
          if (iteratee) {
            values = arrayMap(values, baseUnary(iteratee));
          }
          if (comparator) {
            includes = arrayIncludesWith;
            isCommon = false;
          } else if (values.length >= LARGE_ARRAY_SIZE) {
            includes = cacheHas;
            isCommon = false;
            values = new SetCache(values);
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result.push(value);
            } else if (!includes(values, computed, comparator)) {
              result.push(value);
            }
          }
          return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result = true;
          baseEach(collection, function(value, index, collection) {
            result = !!predicate(value, index, collection);
            return result;
          });
          return result;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : (length + start);
          }
          end = (end === undefined || end > length) ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result = [];
          baseEach(collection, function(value, index, collection) {
            if (predicate(value, index, collection)) {
              result.push(value);
            }
          });
          return result;
        }
        function baseFlatten(array, depth, isStrict, result) {
          result || (result = []);
          var index = -1,
              length = array.length;
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && isArrayLikeObject(value) && (isStrict || isArray(value) || isArguments(value))) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForIn(object, iteratee) {
          return object == null ? object : baseFor(object, iteratee, keysIn);
        }
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
          return object && baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = isKey(path, object) ? [path + ''] : baseCastPath(path);
          var index = 0,
              length = path.length;
          while (object != null && index < length) {
            object = object[path[index++]];
          }
          return (index && index == length) ? object : undefined;
        }
        function baseHas(object, key) {
          return hasOwnProperty.call(object, key) || (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
        }
        function baseHasIn(object, key) {
          return key in Object(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee, comparator) {
          var includes = comparator ? arrayIncludesWith : arrayIncludes,
              othLength = arrays.length,
              othIndex = othLength,
              caches = Array(othLength),
              result = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee) {
              array = arrayMap(array, baseUnary(iteratee));
            }
            caches[othIndex] = !comparator && (iteratee || array.length >= 120) ? new SetCache(othIndex && array) : undefined;
          }
          array = arrays[0];
          var index = -1,
              length = array.length,
              seen = caches[0];
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
              var othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseInverter(object, setter, iteratee, accumulator) {
          baseForOwn(object, function(value, key, object) {
            setter(accumulator, iteratee(value), key, object);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          if (!isKey(path, object)) {
            path = baseCastPath(path);
            object = parent(object, path);
            path = last(path);
          }
          var func = object == null ? object : object[path];
          return func == null ? undefined : apply(func, object, args);
        }
        function baseIsEqual(value, other, customizer, bitmask, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
        }
        function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = arrayTag,
              othTag = arrayTag;
          if (!objIsArr) {
            objTag = getTag(object);
            if (objTag == argsTag) {
              objTag = objectTag;
            } else if (objTag != objectTag) {
              objIsArr = isTypedArray(object);
            }
          }
          if (!othIsArr) {
            othTag = getTag(other);
            if (othTag == argsTag) {
              othTag = objectTag;
            } else if (othTag != objectTag) {
              othIsArr = isTypedArray(other);
            }
          }
          var objIsObj = objTag == objectTag && !isHostObject(object),
              othIsObj = othTag == objectTag && !isHostObject(other),
              isSameTag = objTag == othTag;
          if (isSameTag && !(objIsArr || objIsObj)) {
            return equalByTag(object, other, objTag, equalFunc, customizer, bitmask);
          }
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          if (!isPartial) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
            if (objIsWrapped || othIsWrapped) {
              return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack);
          return (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, bitmask, stack);
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack,
                  result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;
              if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIteratee(value) {
          var type = typeof value;
          if (type == 'function') {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (type == 'object') {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          return nativeKeys(Object(object));
        }
        function baseKeysIn(object) {
          object = object == null ? object : Object(object);
          var result = [];
          for (var key in object) {
            result.push(key);
          }
          return result;
        }
        if (enumerate && !propertyIsEnumerable.call({'valueOf': 1}, 'valueOf')) {
          baseKeysIn = function(object) {
            return iteratorToArray(enumerate(object));
          };
        }
        function baseMap(collection, iteratee) {
          var index = -1,
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function(value, key, collection) {
            result[++index] = iteratee(value, key, collection);
          });
          return result;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            var key = matchData[0][0],
                value = matchData[0][1];
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === value && (value !== undefined || (key in Object(object)));
            };
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          return function(object) {
            var objValue = get(object, path);
            return (objValue === undefined && objValue === srcValue) ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          var props = (isArray(source) || isTypedArray(source)) ? undefined : keysIn(source);
          arrayEach(props || source, function(srcValue, key) {
            if (props) {
              key = srcValue;
              srcValue = source[key];
            }
            if (isObject(srcValue)) {
              stack || (stack = new Stack);
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(object[key], srcValue, (key + ''), object, source, stack) : undefined;
              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          });
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = object[key],
              srcValue = source[key],
              stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, (key + ''), object, source, stack) : undefined;
          var isCommon = newValue === undefined;
          if (isCommon) {
            newValue = srcValue;
            if (isArray(srcValue) || isTypedArray(srcValue)) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else {
                isCommon = false;
                newValue = baseClone(srcValue, true);
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
                isCommon = false;
                newValue = baseClone(srcValue, true);
              } else {
                newValue = objValue;
              }
            } else {
              isCommon = false;
            }
          }
          stack.set(srcValue, newValue);
          if (isCommon) {
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseOrderBy(collection, iteratees, orders) {
          var index = -1,
              toIteratee = getIteratee();
          iteratees = arrayMap(iteratees.length ? iteratees : Array(1), function(iteratee) {
            return toIteratee(iteratee);
          });
          var result = baseMap(collection, function(value, key, collection) {
            var criteria = arrayMap(iteratees, function(iteratee) {
              return iteratee(value);
            });
            return {
              'criteria': criteria,
              'index': ++index,
              'value': value
            };
          });
          return baseSortBy(result, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, props) {
          object = Object(object);
          return arrayReduce(props, function(result, key) {
            if (key in object) {
              result[key] = object[key];
            }
            return result;
          }, {});
        }
        function basePickBy(object, predicate) {
          var result = {};
          baseForIn(object, function(value, key) {
            if (predicate(value, key)) {
              result[key] = value;
            }
          });
          return result;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined : object[key];
          };
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values) {
          return basePullAllBy(array, values);
        }
        function basePullAllBy(array, values, iteratee) {
          var index = -1,
              length = values.length,
              seen = array;
          if (iteratee) {
            seen = arrayMap(array, function(value) {
              return iteratee(value);
            });
          }
          while (++index < length) {
            var fromIndex = 0,
                value = values[index],
                computed = iteratee ? iteratee(value) : value;
            while ((fromIndex = baseIndexOf(seen, computed, fromIndex)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0,
              lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (lastIndex == length || index != previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else if (!isKey(index, array)) {
                var path = baseCastPath(index),
                    object = parent(array, path);
                if (object != null) {
                  delete object[last(path)];
                }
              } else {
                delete array[index];
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);
          while (length--) {
            result[fromRight ? length : ++index] = start;
            start += step;
          }
          return result;
        }
        function baseSet(object, path, value, customizer) {
          path = isKey(path, object) ? [path + ''] : baseCastPath(path);
          var index = -1,
              length = path.length,
              lastIndex = length - 1,
              nested = object;
          while (nested != null && ++index < length) {
            var key = path[index];
            if (isObject(nested)) {
              var newValue = value;
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined;
                if (newValue === undefined) {
                  newValue = objValue == null ? (isIndex(path[index + 1]) ? [] : {}) : objValue;
                }
              }
              assignValue(nested, key, newValue);
            }
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : (length + start);
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : ((end - start) >>> 0);
          start >>>= 0;
          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }
        function baseSome(collection, predicate) {
          var result;
          baseEach(collection, function(value, index, collection) {
            result = predicate(value, index, collection);
            return !result;
          });
          return !!result;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0,
              high = array ? array.length : low;
          if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = (low + high) >>> 1,
                  computed = array[mid];
              if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee, retHighest) {
          value = iteratee(value);
          var low = 0,
              high = array ? array.length : 0,
              valIsNaN = value !== value,
              valIsNull = value === null,
              valIsUndef = value === undefined;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2),
                computed = iteratee(array[mid]),
                isDef = computed !== undefined,
                isReflexive = computed === computed;
            if (valIsNaN) {
              var setLow = isReflexive || retHighest;
            } else if (valIsNull) {
              setLow = isReflexive && isDef && (retHighest || computed != null);
            } else if (valIsUndef) {
              setLow = isReflexive && (retHighest || isDef);
            } else if (computed == null) {
              setLow = false;
            } else {
              setLow = retHighest ? (computed <= value) : (computed < value);
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array) {
          return baseSortedUniqBy(array);
        }
        function baseSortedUniqBy(array, iteratee) {
          var index = 0,
              length = array.length,
              value = array[0],
              computed = iteratee ? iteratee(value) : value,
              seen = computed,
              resIndex = 0,
              result = [value];
          while (++index < length) {
            value = array[index], computed = iteratee ? iteratee(value) : value;
            if (!eq(computed, seen)) {
              seen = computed;
              result[++resIndex] = value;
            }
          }
          return result;
        }
        function baseUniq(array, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              length = array.length,
              isCommon = true,
              result = [],
              seen = result;
          if (comparator) {
            isCommon = false;
            includes = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set = iteratee ? null : createSet(array);
            if (set) {
              return setToArray(set);
            }
            isCommon = false;
            includes = cacheHas;
            seen = new SetCache;
          } else {
            seen = iteratee ? [] : result;
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee) {
                seen.push(computed);
              }
              result.push(value);
            } else if (!includes(seen, computed, comparator)) {
              if (seen !== result) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseUnset(object, path) {
          path = isKey(path, object) ? [path + ''] : baseCastPath(path);
          object = parent(object, path);
          var key = last(path);
          return (object != null && has(object, key)) ? delete object[key] : true;
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length,
              index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
          return isDrop ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length)) : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
        }
        function baseWrapperValue(value, actions) {
          var result = value;
          if (result instanceof LazyWrapper) {
            result = result.value();
          }
          return arrayReduce(actions, function(result, action) {
            return action.func.apply(action.thisArg, arrayPush([result], action.args));
          }, result);
        }
        function baseXor(arrays, iteratee, comparator) {
          var index = -1,
              length = arrays.length;
          while (++index < length) {
            var result = result ? arrayPush(baseDifference(result, arrays[index], iteratee, comparator), baseDifference(arrays[index], result, iteratee, comparator)) : arrays[index];
          }
          return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
        }
        function baseZipObject(props, values, assignFunc) {
          var index = -1,
              length = props.length,
              valsLength = values.length,
              result = {};
          while (++index < length) {
            assignFunc(result, props[index], index < valsLength ? values[index] : undefined);
          }
          return result;
        }
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var Ctor = buffer.constructor,
              result = new Ctor(buffer.length);
          buffer.copy(result);
          return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var Ctor = arrayBuffer.constructor,
              result = new Ctor(arrayBuffer.byteLength),
              view = new Uint8Array(result);
          view.set(new Uint8Array(arrayBuffer));
          return result;
        }
        function cloneMap(map) {
          var Ctor = map.constructor;
          return arrayReduce(mapToArray(map), addMapEntry, new Ctor);
        }
        function cloneRegExp(regexp) {
          var Ctor = regexp.constructor,
              result = new Ctor(regexp.source, reFlags.exec(regexp));
          result.lastIndex = regexp.lastIndex;
          return result;
        }
        function cloneSet(set) {
          var Ctor = set.constructor;
          return arrayReduce(setToArray(set), addSetEntry, new Ctor);
        }
        function cloneSymbol(symbol) {
          return Symbol ? Object(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var arrayBuffer = typedArray.buffer,
              buffer = isDeep ? cloneArrayBuffer(arrayBuffer) : arrayBuffer,
              Ctor = typedArray.constructor;
          return new Ctor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function composeArgs(args, partials, holders) {
          var holdersLength = holders.length,
              argsIndex = -1,
              argsLength = nativeMax(args.length - holdersLength, 0),
              leftIndex = -1,
              leftLength = partials.length,
              result = Array(leftLength + argsLength);
          while (++leftIndex < leftLength) {
            result[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            result[holders[argsIndex]] = args[argsIndex];
          }
          while (argsLength--) {
            result[leftIndex++] = args[argsIndex++];
          }
          return result;
        }
        function composeArgsRight(args, partials, holders) {
          var holdersIndex = -1,
              holdersLength = holders.length,
              argsIndex = -1,
              argsLength = nativeMax(args.length - holdersLength, 0),
              rightIndex = -1,
              rightLength = partials.length,
              result = Array(argsLength + rightLength);
          while (++argsIndex < argsLength) {
            result[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            result[offset + holders[holdersIndex]] = args[argsIndex++];
          }
          return result;
        }
        function copyArray(source, array) {
          var index = -1,
              length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object) {
          return copyObjectWith(source, props, object);
        }
        function copyObjectWith(source, props, object, customizer) {
          object || (object = {});
          var index = -1,
              length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
            assignValue(object, key, newValue);
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator,
                accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee), accumulator);
          };
        }
        function createAssigner(assigner) {
          return rest(function(object, sources) {
            var index = -1,
                length = sources.length,
                customizer = length > 1 ? sources[length - 1] : undefined,
                guard = length > 2 ? sources[2] : undefined;
            customizer = typeof customizer == 'function' ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);
            while ((fromRight ? index-- : ++index < length)) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBaseWrapper(func, bitmask, thisArg) {
          var isBind = bitmask & BIND_FLAG,
              Ctor = createCtorWrapper(func);
          function wrapper() {
            var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = reHasComplexSymbol.test(string) ? stringToArray(string) : undefined;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0),
                trailing = strSymbols ? strSymbols.slice(1).join('') : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string)), callback, '');
          };
        }
        function createCtorWrapper(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor;
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype),
                result = Ctor.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
          };
        }
        function createCurryWrapper(func, bitmask, arity) {
          var Ctor = createCtorWrapper(func);
          function wrapper() {
            var length = arguments.length,
                index = length,
                args = Array(length),
                fn = (this && this !== root && this instanceof wrapper) ? Ctor : func,
                placeholder = lodash.placeholder || wrapper.placeholder;
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder) ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            return length < arity ? createRecurryWrapper(func, bitmask, createHybridWrapper, placeholder, undefined, args, holders, undefined, undefined, arity - length) : apply(fn, this, args);
          }
          return wrapper;
        }
        function createFlow(fromRight) {
          return rest(function(funcs) {
            funcs = baseFlatten(funcs, 1);
            var length = funcs.length,
                index = length,
                prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func),
                  data = funcName == 'wrapper' ? getData(func) : undefined;
              if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments,
                  value = args[0];
              if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
                return wrapper.plant(value).value();
              }
              var index = 0,
                  result = length ? funcs[index].apply(this, args) : value;
              while (++index < length) {
                result = funcs[index].call(this, result);
              }
              return result;
            };
          });
        }
        function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
          var isAry = bitmask & ARY_FLAG,
              isBind = bitmask & BIND_FLAG,
              isBindKey = bitmask & BIND_KEY_FLAG,
              isCurry = bitmask & CURRY_FLAG,
              isCurryRight = bitmask & CURRY_RIGHT_FLAG,
              isFlip = bitmask & FLIP_FLAG,
              Ctor = isBindKey ? undefined : createCtorWrapper(func);
          function wrapper() {
            var length = arguments.length,
                index = length,
                args = Array(length);
            while (index--) {
              args[index] = arguments[index];
            }
            if (partials) {
              args = composeArgs(args, partials, holders);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight);
            }
            if (isCurry || isCurryRight) {
              var placeholder = lodash.placeholder || wrapper.placeholder,
                  argsHolders = replaceHolders(args, placeholder);
              length -= argsHolders.length;
              if (length < arity) {
                return createRecurryWrapper(func, bitmask, createHybridWrapper, placeholder, thisArg, args, argsHolders, argPos, ary, arity - length);
              }
            }
            var thisBinding = isBind ? thisArg : this,
                fn = isBindKey ? thisBinding[func] : func;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && args.length > 1) {
              args.reverse();
            }
            if (isAry && ary < args.length) {
              args.length = ary;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtorWrapper(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee) {
            return baseInverter(object, setter, toIteratee(iteratee), {});
          };
        }
        function createOver(arrayFunc) {
          return rest(function(iteratees) {
            iteratees = arrayMap(baseFlatten(iteratees, 1), getIteratee());
            return rest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee) {
                return apply(iteratee, thisArg, args);
              });
            });
          });
        }
        function createPadding(string, length, chars) {
          length = toInteger(length);
          var strLength = stringSize(string);
          if (!length || strLength >= length) {
            return '';
          }
          var padLength = length - strLength;
          chars = chars === undefined ? ' ' : (chars + '');
          var result = repeat(chars, nativeCeil(padLength / stringSize(chars)));
          return reHasComplexSymbol.test(chars) ? stringToArray(result).slice(0, padLength).join('') : result.slice(0, padLength);
        }
        function createPartialWrapper(func, bitmask, thisArg, partials) {
          var isBind = bitmask & BIND_FLAG,
              Ctor = createCtorWrapper(func);
          function wrapper() {
            var argsIndex = -1,
                argsLength = arguments.length,
                leftIndex = -1,
                leftLength = partials.length,
                args = Array(leftLength + argsLength),
                fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
              end = step = undefined;
            }
            start = toNumber(start);
            start = start === start ? start : 0;
            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = toNumber(end) || 0;
            }
            step = step === undefined ? (start < end ? 1 : -1) : (toNumber(step) || 0);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRecurryWrapper(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
          var isCurry = bitmask & CURRY_FLAG,
              newArgPos = argPos ? copyArray(argPos) : undefined,
              newsHolders = isCurry ? holders : undefined,
              newHoldersRight = isCurry ? undefined : holders,
              newPartials = isCurry ? partials : undefined,
              newPartialsRight = isCurry ? undefined : partials;
          bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
          bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
          if (!(bitmask & CURRY_BOUND_FLAG)) {
            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, arity];
          var result = wrapFunc.apply(undefined, newData);
          if (isLaziable(func)) {
            setData(result, newData);
          }
          result.placeholder = placeholder;
          return result;
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = toInteger(precision);
            if (precision) {
              var pair = (toString(number) + 'e').split('e'),
                  value = func(pair[0] + 'e' + (+pair[1] + precision));
              pair = (toString(value) + 'e').split('e');
              return +(pair[0] + 'e' + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && new Set([1, 2]).size === 2) ? noop : function(values) {
          return new Set(values);
        };
        function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
          var isBindKey = bitmask & BIND_KEY_FLAG;
          if (!isBindKey && typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
          }
          ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
          arity = arity === undefined ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials,
                holdersRight = holders;
            partials = holders = undefined;
          }
          var data = isBindKey ? undefined : getData(func);
          var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] == null ? (isBindKey ? 0 : func.length) : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
            bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == BIND_FLAG) {
            var result = createBaseWrapper(func, bitmask, thisArg);
          } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
            result = createCurryWrapper(func, bitmask, arity);
          } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
            result = createPartialWrapper(func, bitmask, thisArg, partials);
          } else {
            result = createHybridWrapper.apply(undefined, newData);
          }
          var setter = data ? baseSetData : setData;
          return setter(result, newData);
        }
        function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
          var index = -1,
              isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
              arrLength = array.length,
              othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var stacked = stack.get(array);
          if (stacked) {
            return stacked == other;
          }
          var result = true;
          stack.set(array, other);
          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (isUnordered) {
              if (!arraySome(other, function(othValue) {
                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              result = false;
              break;
            }
          }
          stack['delete'](array);
          return result;
        }
        function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
          switch (tag) {
            case arrayBufferTag:
              if ((object.byteLength != other.byteLength) || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
              return +object == +other;
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case numberTag:
              return (object != +object) ? other != +other : object == +other;
            case regexpTag:
            case stringTag:
              return object == (other + '');
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
              convert || (convert = setToArray);
              return (isPartial || object.size == other.size) && equalFunc(convert(object), convert(other), customizer, bitmask | UNORDERED_COMPARE_FLAG);
            case symbolTag:
              return !!Symbol && (symbolValueOf.call(object) == symbolValueOf.call(other));
          }
          return false;
        }
        function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              objProps = keys(object),
              objLength = objProps.length,
              othProps = keys(other),
              othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : baseHas(other, key))) {
              return false;
            }
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          var result = true;
          stack.set(object, other);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack)) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == 'constructor');
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;
            if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack['delete'](object);
          return result;
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result = (func.name + ''),
              array = realNames[result],
              length = hasOwnProperty.call(realNames, result) ? array.length : 0;
          while (length--) {
            var data = array[length],
                otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        function getIteratee() {
          var result = lodash.iteratee || iteratee;
          result = result === iteratee ? baseIteratee : result;
          return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        var getLength = baseProperty('length');
        function getMatchData(object) {
          var result = toPairs(object),
              length = result.length;
          while (length--) {
            result[length][2] = isStrictComparable(result[length][1]);
          }
          return result;
        }
        function getNative(object, key) {
          var value = object == null ? undefined : object[key];
          return isNative(value) ? value : undefined;
        }
        var getSymbols = getOwnPropertySymbols || function() {
          return [];
        };
        function getTag(value) {
          return objectToString.call(value);
        }
        if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag) || (WeakMap && getTag(new WeakMap) != weakMapTag)) {
          getTag = function(value) {
            var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : null,
                ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
            if (ctorString) {
              switch (ctorString) {
                case mapCtorString:
                  return mapTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        function getView(start, end, transforms) {
          var index = -1,
              length = transforms.length;
          while (++index < length) {
            var data = transforms[index],
                size = data.size;
            switch (data.type) {
              case 'drop':
                start += size;
                break;
              case 'dropRight':
                end -= size;
                break;
              case 'take':
                end = nativeMin(end, start + size);
                break;
              case 'takeRight':
                start = nativeMax(start, end - size);
                break;
            }
          }
          return {
            'start': start,
            'end': end
          };
        }
        function hasPath(object, path, hasFunc) {
          if (object == null) {
            return false;
          }
          var result = hasFunc(object, path);
          if (!result && !isKey(path)) {
            path = baseCastPath(path);
            object = parent(object, path);
            if (object != null) {
              path = last(path);
              result = hasFunc(object, path);
            }
          }
          var length = object ? object.length : undefined;
          return result || (!!length && isLength(length) && isIndex(path, length) && (isArray(object) || isString(object) || isArguments(object)));
        }
        function initCloneArray(array) {
          var length = array.length,
              result = array.constructor(length);
          if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
          }
          return result;
        }
        function initCloneObject(object) {
          if (isPrototype(object)) {
            return {};
          }
          var Ctor = object.constructor;
          return baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return cloneMap(object);
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return cloneSet(object);
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function indexKeys(object) {
          var length = object ? object.length : undefined;
          if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
            return baseTimes(length, String);
          }
          return null;
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (typeof value == 'number') {
            return true;
          }
          return !isArray(value) && (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object)));
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == 'number' || type == 'boolean' || (type == 'string' && value != '__proto__') || value == null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func),
              other = lodash[funcName];
          if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function mergeData(data, source) {
          var bitmask = data[1],
              srcBitmask = source[1],
              newBitmask = bitmask | srcBitmask,
              isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);
          var isCombo = (srcBitmask == ARY_FLAG && (bitmask == CURRY_FLAG)) || (srcBitmask == ARY_FLAG && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) || (srcBitmask == (ARY_FLAG | REARG_FLAG) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : copyArray(value);
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : copyArray(source[4]);
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : copyArray(value);
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : copyArray(source[6]);
          }
          value = source[7];
          if (value) {
            data[7] = copyArray(value);
          }
          if (srcBitmask & ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function mergeDefaults(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
          }
          return objValue;
        }
        function parent(object, path) {
          return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length,
              length = nativeMin(indexes.length, arrLength),
              oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
          }
          return array;
        }
        var setData = (function() {
          var count = 0,
              lastCalled = 0;
          return function(key, value) {
            var stamp = now(),
                remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return key;
              }
            } else {
              count = 0;
            }
            return baseSetData(key, value);
          };
        }());
        function stringToPath(string) {
          var result = [];
          toString(string).replace(rePropName, function(match, number, quote, string) {
            result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
          });
          return result;
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result.__actions__ = copyArray(wrapper.__actions__);
          result.__index__ = wrapper.__index__;
          result.__values__ = wrapper.__values__;
          return result;
        }
        function chunk(array, size) {
          size = nativeMax(toInteger(size), 0);
          var length = array ? array.length : 0;
          if (!length || size < 1) {
            return [];
          }
          var index = 0,
              resIndex = -1,
              result = Array(nativeCeil(length / size));
          while (index < length) {
            result[++resIndex] = baseSlice(array, index, (index += size));
          }
          return result;
        }
        function compact(array) {
          var index = -1,
              length = array ? array.length : 0,
              resIndex = -1,
              result = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result[++resIndex] = value;
            }
          }
          return result;
        }
        var concat = rest(function(array, values) {
          if (!isArray(array)) {
            array = array == null ? [] : [Object(array)];
          }
          values = baseFlatten(values, 1);
          return arrayConcat(array, values);
        });
        var difference = rest(function(array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, true)) : [];
        });
        var differenceBy = rest(function(array, values) {
          var iteratee = last(values);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, true), getIteratee(iteratee)) : [];
        });
        var differenceWith = rest(function(array, values) {
          var comparator = last(values);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, true), undefined, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate) {
          return (array && array.length) ? baseFindIndex(array, getIteratee(predicate, 3)) : -1;
        }
        function findLastIndex(array, predicate) {
          return (array && array.length) ? baseFindIndex(array, getIteratee(predicate, 3), true) : -1;
        }
        function flatten(array) {
          var length = array ? array.length : 0;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array ? array.length : 0;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1,
              length = pairs ? pairs.length : 0,
              result = {};
          while (++index < length) {
            var pair = pairs[index];
            result[pair[0]] = pair[1];
          }
          return result;
        }
        function head(array) {
          return array ? array[0] : undefined;
        }
        function indexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          fromIndex = toInteger(fromIndex);
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return baseIndexOf(array, value, fromIndex);
        }
        function initial(array) {
          return dropRight(array, 1);
        }
        var intersection = rest(function(arrays) {
          var mapped = arrayMap(arrays, baseCastArrayLikeObject);
          return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped) : [];
        });
        var intersectionBy = rest(function(arrays) {
          var iteratee = last(arrays),
              mapped = arrayMap(arrays, baseCastArrayLikeObject);
          if (iteratee === last(mapped)) {
            iteratee = undefined;
          } else {
            mapped.pop();
          }
          return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, getIteratee(iteratee)) : [];
        });
        var intersectionWith = rest(function(arrays) {
          var comparator = last(arrays),
              mapped = arrayMap(arrays, baseCastArrayLikeObject);
          if (comparator === last(mapped)) {
            comparator = undefined;
          } else {
            mapped.pop();
          }
          return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, undefined, comparator) : [];
        });
        function join(array, separator) {
          return array ? nativeJoin.call(array, separator) : '';
        }
        function last(array) {
          var length = array ? array.length : 0;
          return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = (index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)) + 1;
          }
          if (value !== value) {
            return indexOfNaN(array, index, true);
          }
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        var pull = rest(pullAll);
        function pullAll(array, values) {
          return (array && array.length && values && values.length) ? basePullAll(array, values) : array;
        }
        function pullAllBy(array, values, iteratee) {
          return (array && array.length && values && values.length) ? basePullAllBy(array, values, getIteratee(iteratee)) : array;
        }
        var pullAt = rest(function(array, indexes) {
          indexes = arrayMap(baseFlatten(indexes, 1), String);
          var result = baseAt(array, indexes);
          basePullAt(array, indexes.sort(compareAscending));
          return result;
        });
        function remove(array, predicate) {
          var result = [];
          if (!(array && array.length)) {
            return result;
          }
          var index = -1,
              indexes = [],
              length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result;
        }
        function reverse(array) {
          return array ? nativeReverse.call(array) : array;
        }
        function slice(array, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee));
        }
        function sortedIndexOf(array, value) {
          var length = array ? array.length : 0;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array ? array.length : 0;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return (array && array.length) ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee) {
          return (array && array.length) ? baseSortedUniqBy(array, getIteratee(iteratee)) : [];
        }
        function tail(array) {
          return drop(array, 1);
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = rest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, true));
        });
        var unionBy = rest(function(arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, true), getIteratee(iteratee));
        });
        var unionWith = rest(function(arrays) {
          var comparator = last(arrays);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, true), undefined, comparator);
        });
        function uniq(array) {
          return (array && array.length) ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee) {
          return (array && array.length) ? baseUniq(array, getIteratee(iteratee)) : [];
        }
        function uniqWith(array, comparator) {
          return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee) {
          if (!(array && array.length)) {
            return [];
          }
          var result = unzip(array);
          if (iteratee == null) {
            return result;
          }
          return arrayMap(result, function(group) {
            return apply(iteratee, undefined, group);
          });
        }
        var without = rest(function(array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        var xor = rest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = rest(function(arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee));
        });
        var xorWith = rest(function(arrays) {
          var comparator = last(arrays);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        var zip = rest(unzip);
        function zipObject(props, values) {
          return baseZipObject(props || [], values || [], assignValue);
        }
        function zipObjectDeep(props, values) {
          return baseZipObject(props || [], values || [], baseSet);
        }
        var zipWith = rest(function(arrays) {
          var length = arrays.length,
              iteratee = length > 1 ? arrays[length - 1] : undefined;
          iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
          return unzipWith(arrays, iteratee);
        });
        function chain(value) {
          var result = lodash(value);
          result.__chain__ = true;
          return result;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = rest(function(paths) {
          paths = baseFlatten(paths, 1);
          var length = paths.length,
              start = length ? paths[0] : 0,
              value = this.__wrapped__,
              interceptor = function(object) {
                return baseAt(object, paths);
              };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperFlatMap(iteratee) {
          return this.map(iteratee).flatten();
        }
        function wrapperNext() {
          if (this.__values__ === undefined) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length,
              value = done ? undefined : this.__values__[this.__index__++];
          return {
            'done': done,
            'value': value
          };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result,
              parent = this;
          while (parent instanceof baseLodash) {
            var clone = wrapperClone(parent);
            clone.__index__ = 0;
            clone.__values__ = undefined;
            if (result) {
              previous.__wrapped__ = clone;
            } else {
              result = clone;
            }
            var previous = clone;
            parent = parent.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              'func': thru,
              'args': [reverse],
              'thisArg': undefined
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result, value, key) {
          hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        function find(collection, predicate) {
          predicate = getIteratee(predicate, 3);
          if (isArray(collection)) {
            var index = baseFindIndex(collection, predicate);
            return index > -1 ? collection[index] : undefined;
          }
          return baseFind(collection, predicate, baseEach);
        }
        function findLast(collection, predicate) {
          predicate = getIteratee(predicate, 3);
          if (isArray(collection)) {
            var index = baseFindIndex(collection, predicate, true);
            return index > -1 ? collection[index] : undefined;
          }
          return baseFind(collection, predicate, baseEachRight);
        }
        function flatMap(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), 1);
        }
        function forEach(collection, iteratee) {
          return (typeof iteratee == 'function' && isArray(collection)) ? arrayEach(collection, iteratee) : baseEach(collection, baseCastFunction(iteratee));
        }
        function forEachRight(collection, iteratee) {
          return (typeof iteratee == 'function' && isArray(collection)) ? arrayEachRight(collection, iteratee) : baseEachRight(collection, baseCastFunction(iteratee));
        }
        var groupBy = createAggregator(function(result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            result[key].push(value);
          } else {
            result[key] = [value];
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1) : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
        }
        var invokeMap = rest(function(collection, path, args) {
          var index = -1,
              isFunc = typeof path == 'function',
              isProp = isKey(path),
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function(value) {
            var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
            result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
          });
          return result;
        });
        var keyBy = createAggregator(function(result, value, key) {
          result[key] = value;
        });
        function map(collection, iteratee) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result, value, key) {
          result[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          predicate = getIteratee(predicate, 3);
          return func(collection, function(value, index, collection) {
            return !predicate(value, index, collection);
          });
        }
        function sample(collection) {
          var array = isArrayLike(collection) ? collection : values(collection),
              length = array.length;
          return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
        }
        function sampleSize(collection, n) {
          var index = -1,
              result = toArray(collection),
              length = result.length,
              lastIndex = length - 1;
          n = baseClamp(toInteger(n), 0, length);
          while (++index < n) {
            var rand = baseRandom(index, lastIndex),
                value = result[rand];
            result[rand] = result[index];
            result[index] = value;
          }
          result.length = n;
          return result;
        }
        function shuffle(collection) {
          return sampleSize(collection, MAX_ARRAY_LENGTH);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            var result = collection.length;
            return (result && isString(collection)) ? stringSize(collection) : result;
          }
          return keys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = rest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees.length = 1;
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = Date.now;
        function after(n, func) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined : n;
          n = (func && n == null) ? func.length : n;
          return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
          var result;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined;
            }
            return result;
          };
        }
        var bind = rest(function(func, thisArg, partials) {
          var bitmask = BIND_FLAG;
          if (partials.length) {
            var placeholder = lodash.placeholder || bind.placeholder,
                holders = replaceHolders(partials, placeholder);
            bitmask |= PARTIAL_FLAG;
          }
          return createWrapper(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = rest(function(object, key, partials) {
          var bitmask = BIND_FLAG | BIND_KEY_FLAG;
          if (partials.length) {
            var placeholder = lodash.placeholder || bindKey.placeholder,
                holders = replaceHolders(partials, placeholder);
            bitmask |= PARTIAL_FLAG;
          }
          return createWrapper(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrapper(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = lodash.placeholder || curry.placeholder;
          return result;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrapper(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = lodash.placeholder || curryRight.placeholder;
          return result;
        }
        function debounce(func, wait, options) {
          var args,
              maxTimeoutId,
              result,
              stamp,
              thisArg,
              timeoutId,
              trailingCall,
              lastCalled = 0,
              leading = false,
              maxWait = false,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxWait = 'maxWait' in options && nativeMax(toNumber(options.maxWait) || 0, wait);
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          function cancel() {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            if (maxTimeoutId) {
              clearTimeout(maxTimeoutId);
            }
            lastCalled = 0;
            args = maxTimeoutId = thisArg = timeoutId = trailingCall = undefined;
          }
          function complete(isCalled, id) {
            if (id) {
              clearTimeout(id);
            }
            maxTimeoutId = timeoutId = trailingCall = undefined;
            if (isCalled) {
              lastCalled = now();
              result = func.apply(thisArg, args);
              if (!timeoutId && !maxTimeoutId) {
                args = thisArg = undefined;
              }
            }
          }
          function delayed() {
            var remaining = wait - (now() - stamp);
            if (remaining <= 0 || remaining > wait) {
              complete(trailingCall, maxTimeoutId);
            } else {
              timeoutId = setTimeout(delayed, remaining);
            }
          }
          function flush() {
            if ((timeoutId && trailingCall) || (maxTimeoutId && trailing)) {
              result = func.apply(thisArg, args);
            }
            cancel();
            return result;
          }
          function maxDelayed() {
            complete(trailing, timeoutId);
          }
          function debounced() {
            args = arguments;
            stamp = now();
            thisArg = this;
            trailingCall = trailing && (timeoutId || !leading);
            if (maxWait === false) {
              var leadingCall = leading && !timeoutId;
            } else {
              if (!lastCalled && !maxTimeoutId && !leading) {
                lastCalled = stamp;
              }
              var remaining = maxWait - (stamp - lastCalled);
              var isCalled = (remaining <= 0 || remaining > maxWait) && (leading || maxTimeoutId);
              if (isCalled) {
                if (maxTimeoutId) {
                  maxTimeoutId = clearTimeout(maxTimeoutId);
                }
                lastCalled = stamp;
                result = func.apply(thisArg, args);
              } else if (!maxTimeoutId) {
                maxTimeoutId = setTimeout(maxDelayed, remaining);
              }
            }
            if (isCalled && timeoutId) {
              timeoutId = clearTimeout(timeoutId);
            } else if (!timeoutId && wait !== maxWait) {
              timeoutId = setTimeout(delayed, wait);
            }
            if (leadingCall) {
              isCalled = true;
              result = func.apply(thisArg, args);
            }
            if (isCalled && !timeoutId && !maxTimeoutId) {
              args = thisArg = undefined;
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = rest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = rest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrapper(func, FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new memoize.Cache;
          return memoized;
        }
        function negate(predicate) {
          if (typeof predicate != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            return !predicate.apply(this, arguments);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = rest(function(func, transforms) {
          transforms = arrayMap(baseFlatten(transforms, 1), getIteratee());
          var funcsLength = transforms.length;
          return rest(function(args) {
            var index = -1,
                length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = rest(function(func, partials) {
          var placeholder = lodash.placeholder || partial.placeholder,
              holders = replaceHolders(partials, placeholder);
          return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders);
        });
        var partialRight = rest(function(func, partials) {
          var placeholder = lodash.placeholder || partialRight.placeholder,
              holders = replaceHolders(partials, placeholder);
          return createWrapper(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        var rearg = rest(function(func, indexes) {
          return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes, 1));
        });
        function rest(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
          return function() {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            switch (start) {
              case 0:
                return func.call(this, array);
              case 1:
                return func.call(this, args[0], array);
              case 2:
                return func.call(this, args[0], args[1], array);
            }
            var otherArgs = Array(start + 1);
            index = -1;
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }
        function spread(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
          return rest(function(args) {
            var array = args[start],
                otherArgs = args.slice(0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            'leading': leading,
            'maxWait': wait,
            'trailing': trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          wrapper = wrapper == null ? identity : wrapper;
          return partial(wrapper, value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value);
        }
        function cloneWith(value, customizer) {
          return baseClone(value, false, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, true);
        }
        function cloneDeepWith(value, customizer) {
          return baseClone(value, true, customizer);
        }
        function eq(value, other) {
          return value === other || (value !== value && other !== other);
        }
        function gt(value, other) {
          return value > other;
        }
        function gte(value, other) {
          return value >= other;
        }
        function isArguments(value) {
          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }
        var isArray = Array.isArray;
        function isArrayBuffer(value) {
          return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
        }
        function isArrayLike(value) {
          return value != null && !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || (isObjectLike(value) && objectToString.call(value) == boolTag);
        }
        var isBuffer = !Buffer ? constant(false) : function(value) {
          return value instanceof Buffer;
        };
        function isDate(value) {
          return isObjectLike(value) && objectToString.call(value) == dateTag;
        }
        function isElement(value) {
          return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value))) {
            return !value.length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          var result = customizer ? customizer(value, other) : undefined;
          return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var Ctor = value.constructor;
          return (objectToString.call(value) == errorTag) || (typeof Ctor == 'function' && objectToString.call(Ctor.prototype) == errorTag);
        }
        function isFinite(value) {
          return typeof value == 'number' && nativeIsFinite(value);
        }
        function isFunction(value) {
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }
        function isInteger(value) {
          return typeof value == 'number' && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }
        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }
        function isMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (value == null) {
            return false;
          }
          if (isFunction(value)) {
            return reIsNative.test(funcToString.call(value));
          }
          return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == 'number' || (isObjectLike(value) && objectToString.call(value) == numberTag);
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
            return false;
          }
          var proto = objectProto;
          if (typeof value.constructor == 'function') {
            proto = getPrototypeOf(value);
          }
          if (proto === null) {
            return true;
          }
          var Ctor = proto.constructor;
          return (typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
        }
        function isRegExp(value) {
          return isObject(value) && objectToString.call(value) == regexpTag;
        }
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        function isSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function isString(value) {
          return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
        }
        function isSymbol(value) {
          return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
        }
        function isTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
        }
        function isUndefined(value) {
          return value === undefined;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && objectToString.call(value) == weakSetTag;
        }
        function lt(value, other) {
          return value < other;
        }
        function lte(value, other) {
          return value <= other;
        }
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (iteratorSymbol && value[iteratorSymbol]) {
            return iteratorToArray(value[iteratorSymbol]());
          }
          var tag = getTag(value),
              func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
          return func(value);
        }
        function toInteger(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = (value < 0 ? -1 : 1);
            return sign * MAX_INTEGER;
          }
          var remainder = value % 1;
          return value === value ? (remainder ? value - remainder : value) : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (isObject(value)) {
            var other = isFunction(value.valueOf) ? value.valueOf() : value;
            value = isObject(other) ? (other + '') : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return (isBinary || reIsOctal.test(value)) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : (reIsBadHex.test(value) ? NAN : +value);
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        }
        function toString(value) {
          if (typeof value == 'string') {
            return value;
          }
          if (value == null) {
            return '';
          }
          if (isSymbol(value)) {
            return Symbol ? symbolToString.call(value) : '';
          }
          var result = (value + '');
          return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
        }
        var assign = createAssigner(function(object, source) {
          copyObject(source, keys(source), object);
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObjectWith(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObjectWith(source, keys(source), object, customizer);
        });
        var at = rest(function(object, paths) {
          return baseAt(object, baseFlatten(paths, 1));
        });
        function create(prototype, properties) {
          var result = baseCreate(prototype);
          return properties ? baseAssign(result, properties) : result;
        }
        var defaults = rest(function(args) {
          args.push(undefined, assignInDefaults);
          return apply(assignInWith, undefined, args);
        });
        var defaultsDeep = rest(function(args) {
          args.push(undefined, mergeDefaults);
          return apply(mergeWith, undefined, args);
        });
        function findKey(object, predicate) {
          return baseFind(object, getIteratee(predicate, 3), baseForOwn, true);
        }
        function findLastKey(object, predicate) {
          return baseFind(object, getIteratee(predicate, 3), baseForOwnRight, true);
        }
        function forIn(object, iteratee) {
          return object == null ? object : baseFor(object, baseCastFunction(iteratee), keysIn);
        }
        function forInRight(object, iteratee) {
          return object == null ? object : baseForRight(object, baseCastFunction(iteratee), keysIn);
        }
        function forOwn(object, iteratee) {
          return object && baseForOwn(object, baseCastFunction(iteratee));
        }
        function forOwnRight(object, iteratee) {
          return object && baseForOwnRight(object, baseCastFunction(iteratee));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
          return hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result, value, key) {
          result[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result, value, key) {
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }, getIteratee);
        var invoke = rest(baseInvoke);
        function keys(object) {
          var isProto = isPrototype(object);
          if (!(isProto || isArrayLike(object))) {
            return baseKeys(object);
          }
          var indexes = indexKeys(object),
              skipIndexes = !!indexes,
              result = indexes || [],
              length = result.length;
          for (var key in object) {
            if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
              result.push(key);
            }
          }
          return result;
        }
        function keysIn(object) {
          var index = -1,
              isProto = isPrototype(object),
              props = baseKeysIn(object),
              propsLength = props.length,
              indexes = indexKeys(object),
              skipIndexes = !!indexes,
              result = indexes || [],
              length = result.length;
          while (++index < propsLength) {
            var key = props[index];
            if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }
        function mapKeys(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function(value, key, object) {
            result[iteratee(value, key, object)] = value;
          });
          return result;
        }
        function mapValues(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function(value, key, object) {
            result[key] = iteratee(value, key, object);
          });
          return result;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = rest(function(object, props) {
          if (object == null) {
            return {};
          }
          props = arrayMap(baseFlatten(props, 1), String);
          return basePick(object, baseDifference(keysIn(object), props));
        });
        function omitBy(object, predicate) {
          predicate = getIteratee(predicate, 2);
          return basePickBy(object, function(value, key) {
            return !predicate(value, key);
          });
        }
        var pick = rest(function(object, props) {
          return object == null ? {} : basePick(object, baseFlatten(props, 1));
        });
        function pickBy(object, predicate) {
          return object == null ? {} : basePickBy(object, getIteratee(predicate, 2));
        }
        function result(object, path, defaultValue) {
          if (!isKey(path, object)) {
            path = baseCastPath(path);
            var result = get(object, path);
            object = parent(object, path);
          } else {
            result = object == null ? undefined : object[path];
          }
          if (result === undefined) {
            result = defaultValue;
          }
          return isFunction(result) ? result.call(object) : result;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        function toPairs(object) {
          return baseToPairs(object, keys(object));
        }
        function toPairsIn(object) {
          return baseToPairs(object, keysIn(object));
        }
        function transform(object, iteratee, accumulator) {
          var isArr = isArray(object) || isTypedArray(object);
          iteratee = getIteratee(iteratee, 4);
          if (accumulator == null) {
            if (isArr || isObject(object)) {
              var Ctor = object.constructor;
              if (isArr) {
                accumulator = isArray(object) ? new Ctor : [];
              } else {
                accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
              }
            } else {
              accumulator = {};
            }
          }
          (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
            return iteratee(accumulator, value, index, object);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function values(object) {
          return object ? baseValues(object, keys(object)) : [];
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined) {
            upper = lower;
            lower = undefined;
          }
          if (upper !== undefined) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toNumber(start) || 0;
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toNumber(end) || 0;
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined;
          }
          if (floating === undefined) {
            if (typeof upper == 'boolean') {
              floating = upper;
              upper = undefined;
            } else if (typeof lower == 'boolean') {
              floating = lower;
              lower = undefined;
            }
          }
          if (lower === undefined && upper === undefined) {
            lower = 0;
            upper = 1;
          } else {
            lower = toNumber(lower) || 0;
            if (upper === undefined) {
              upper = lower;
              lower = 0;
            } else {
              upper = toNumber(upper) || 0;
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result, word, index) {
          word = word.toLowerCase();
          return result + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = typeof target == 'string' ? target : (target + '');
          var length = string.length;
          position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
          position -= target.length;
          return position >= 0 && string.indexOf(target, position) == position;
        }
        function escape(string) {
          string = toString(string);
          return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return (string && reHasRegExpChar.test(string)) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        var kebabCase = createCompounder(function(result, word, index) {
          return result + (index ? '-' : '') + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result, word, index) {
          return result + (index ? ' ' : '') + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst('toLowerCase');
        var upperFirst = createCaseFirst('toUpperCase');
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = stringSize(string);
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2,
              leftLength = nativeFloor(mid),
              rightLength = nativeCeil(mid);
          return createPadding('', leftLength, chars) + string + createPadding('', rightLength, chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          return string + createPadding(string, length, chars);
        }
        function padStart(string, length, chars) {
          string = toString(string);
          return createPadding(string, length, chars) + string;
        }
        function parseInt(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          string = toString(string).replace(reTrim, '');
          return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
        }
        function repeat(string, n) {
          string = toString(string);
          n = toInteger(n);
          var result = '';
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result;
          }
          do {
            if (n % 2) {
              result += string;
            }
            n = nativeFloor(n / 2);
            string += string;
          } while (n);
          return result;
        }
        function replace() {
          var args = arguments,
              string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result, word, index) {
          return result + (index ? '_' : '') + word.toLowerCase();
        });
        function split(string, separator, limit) {
          return toString(string).split(separator, limit);
        }
        var startCase = createCompounder(function(result, word, index) {
          return result + (index ? ' ' : '') + capitalize(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = baseClamp(toInteger(position), 0, string.length);
          return string.lastIndexOf(target, position) == position;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, assignInDefaults);
          var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
              importsKeys = keys(imports),
              importsValues = baseValues(imports, importsKeys);
          var isEscaping,
              isEvaluating,
              index = 0,
              interpolate = options.interpolate || reNoMatch,
              source = "__p += '";
          var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
          var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : ('lodash.templateSources[' + (++templateCounter) + ']')) + '\n';
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = options.variable;
          if (!variable) {
            source = 'with (obj) {\n' + source + '\n}\n';
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
          source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
          var result = attempt(function() {
            return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
          });
          result.source = source;
          if (isError(result)) {
            throw result;
          }
          return result;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (!string) {
            return string;
          }
          if (guard || chars === undefined) {
            return string.replace(reTrim, '');
          }
          chars = (chars + '');
          if (!chars) {
            return string;
          }
          var strSymbols = stringToArray(string),
              chrSymbols = stringToArray(chars);
          return strSymbols.slice(charsStartIndex(strSymbols, chrSymbols), charsEndIndex(strSymbols, chrSymbols) + 1).join('');
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (!string) {
            return string;
          }
          if (guard || chars === undefined) {
            return string.replace(reTrimEnd, '');
          }
          chars = (chars + '');
          if (!chars) {
            return string;
          }
          var strSymbols = stringToArray(string);
          return strSymbols.slice(0, charsEndIndex(strSymbols, stringToArray(chars)) + 1).join('');
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (!string) {
            return string;
          }
          if (guard || chars === undefined) {
            return string.replace(reTrimStart, '');
          }
          chars = (chars + '');
          if (!chars) {
            return string;
          }
          var strSymbols = stringToArray(string);
          return strSymbols.slice(charsStartIndex(strSymbols, stringToArray(chars))).join('');
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH,
              omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = 'separator' in options ? options.separator : separator;
            length = 'length' in options ? toInteger(options.length) : length;
            omission = 'omission' in options ? toString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (reHasComplexSymbol.test(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result = strSymbols ? strSymbols.slice(0, end).join('') : string.slice(0, end);
          if (separator === undefined) {
            return result + omission;
          }
          if (strSymbols) {
            end += (result.length - end);
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match,
                  substring = result;
              if (!separator.global) {
                separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
              }
              separator.lastIndex = 0;
              while ((match = separator.exec(substring))) {
                var newEnd = match.index;
              }
              result = result.slice(0, newEnd === undefined ? end : newEnd);
            }
          } else if (string.indexOf(separator, end) != end) {
            var index = result.lastIndexOf(separator);
            if (index > -1) {
              result = result.slice(0, index);
            }
          }
          return result + omission;
        }
        function unescape(string) {
          string = toString(string);
          return (string && reHasEscapedHtml.test(string)) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result, word, index) {
          return result + (index ? ' ' : '') + word.toUpperCase();
        });
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;
          if (pattern === undefined) {
            pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
          }
          return string.match(pattern) || [];
        }
        var attempt = rest(function(func, args) {
          try {
            return apply(func, undefined, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = rest(function(object, methodNames) {
          arrayEach(baseFlatten(methodNames, 1), function(key) {
            object[key] = bind(object[key], object);
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs ? pairs.length : 0,
              toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return rest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, true));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
        }
        function matches(source) {
          return baseMatches(baseClone(source, true));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, true));
        }
        var method = rest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = rest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source),
              methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain = (isObject(options) && 'chain' in options) ? options.chain : true,
              isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__),
                      actions = result.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    'func': func,
                    'args': arguments,
                    'thisArg': object
                  });
                  result.__chain__ = chainAll;
                  return result;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {}
        function nthArg(n) {
          n = toInteger(n);
          return function() {
            return arguments[n];
          };
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function times(n, iteratee) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH,
              length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee = baseCastFunction(iteratee);
          n -= MAX_ARRAY_LENGTH;
          var result = baseTimes(length, iteratee);
          while (++index < n) {
            iteratee(index);
          }
          return result;
        }
        function toPath(value) {
          return isArray(value) ? arrayMap(value, String) : stringToPath(value);
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        function add(augend, addend) {
          var result;
          if (augend === undefined && addend === undefined) {
            return 0;
          }
          if (augend !== undefined) {
            result = augend;
          }
          if (addend !== undefined) {
            result = result === undefined ? addend : (result + addend);
          }
          return result;
        }
        var ceil = createRound('ceil');
        var floor = createRound('floor');
        function max(array) {
          return (array && array.length) ? baseExtremum(array, identity, gt) : undefined;
        }
        function maxBy(array, iteratee) {
          return (array && array.length) ? baseExtremum(array, getIteratee(iteratee), gt) : undefined;
        }
        function mean(array) {
          return sum(array) / (array ? array.length : 0);
        }
        function min(array) {
          return (array && array.length) ? baseExtremum(array, identity, lt) : undefined;
        }
        function minBy(array, iteratee) {
          return (array && array.length) ? baseExtremum(array, getIteratee(iteratee), lt) : undefined;
        }
        var round = createRound('round');
        function subtract(minuend, subtrahend) {
          var result;
          if (minuend === undefined && subtrahend === undefined) {
            return 0;
          }
          if (minuend !== undefined) {
            result = minuend;
          }
          if (subtrahend !== undefined) {
            result = result === undefined ? subtrahend : (result - subtrahend);
          }
          return result;
        }
        function sum(array) {
          return (array && array.length) ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee) {
          return (array && array.length) ? baseSum(array, getIteratee(iteratee)) : 0;
        }
        lodash.prototype = baseLodash.prototype;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
        MapCache.prototype.clear = mapClear;
        MapCache.prototype['delete'] = mapDelete;
        MapCache.prototype.get = mapGet;
        MapCache.prototype.has = mapHas;
        MapCache.prototype.set = mapSet;
        SetCache.prototype.push = cachePush;
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        memoize.Cache = MapCache;
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.deburr = deburr;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, (function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }()), {'chain': false});
        lodash.VERSION = VERSION;
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(['drop', 'take'], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            var filtered = this.__filtered__;
            if (filtered && !index) {
              return new LazyWrapper(this);
            }
            n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
            var result = this.clone();
            if (filtered) {
              result.__takeCount__ = nativeMin(n, result.__takeCount__);
            } else {
              result.__views__.push({
                'size': nativeMin(n, MAX_ARRAY_LENGTH),
                'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
              });
            }
            return result;
          };
          LazyWrapper.prototype[methodName + 'Right'] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
          var type = index + 1,
              isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee) {
            var result = this.clone();
            result.__iteratees__.push({
              'iteratee': getIteratee(iteratee, 3),
              'type': type
            });
            result.__filtered__ = result.__filtered__ || isFilter;
            return result;
          };
        });
        arrayEach(['head', 'last'], function(methodName, index) {
          var takeName = 'take' + (index ? 'Right' : '');
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(['initial', 'tail'], function(methodName, index) {
          var dropName = 'drop' + (index ? '' : 'Right');
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = rest(function(path, args) {
          if (typeof path == 'function') {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          predicate = getIteratee(predicate, 3);
          return this.filter(function(value) {
            return !predicate(value);
          });
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result = this;
          if (result.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result);
          }
          if (start < 0) {
            result = result.takeRight(-start);
          } else if (start) {
            result = result.drop(start);
          }
          if (end !== undefined) {
            end = toInteger(end);
            result = end < 0 ? result.dropRight(-end) : result.take(end - start);
          }
          return result;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
              isTaker = /^(?:head|last)$/.test(methodName),
              lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
              retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__,
                args = isTaker ? [1] : arguments,
                isLazy = value instanceof LazyWrapper,
                iteratee = args[0],
                useLazy = isLazy || isArray(value);
            var interceptor = function(value) {
              var result = lodashFunc.apply(lodash, arrayPush([value], args));
              return (isTaker && chainAll) ? result[0] : result;
            };
            if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__,
                isHybrid = !!this.__actions__.length,
                isUnwrapped = retUnwrapped && !chainAll,
                onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result = func.apply(value, args);
              result.__actions__.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': undefined
              });
              return new LodashWrapper(result, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result = this.thru(interceptor);
            return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
          };
        });
        arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
          var func = arrayProto[methodName],
              chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
              retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              return func.apply(this.value(), args);
            }
            return this[chainName](function(value) {
              return func.apply(value, args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = (lodashFunc.name + ''),
                names = realNames[key] || (realNames[key] = []);
            names.push({
              'name': methodName,
              'func': lodashFunc
            });
          }
        });
        realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{
          'name': 'wrapper',
          'func': undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.flatMap = wrapperFlatMap;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        if (iteratorSymbol) {
          lodash.prototype[iteratorSymbol] = wrapperToIterator;
        }
        return lodash;
      }
      var _ = runInContext();
      (freeWindow || freeSelf || {})._ = _;
      if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define(function() {
          return _;
        });
      } else if (freeExports && freeModule) {
        if (moduleExports) {
          (freeModule.exports = _)._ = _;
        }
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }.call(this));
  })($__require('6a').Buffer, $__require('23'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("35", ["6e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('6e');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.moment = factory();
  }(this, function() {
    'use strict';
    var hookCallback;
    function utils_hooks__hooks() {
      return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
      hookCallback = callback;
    }
    function isArray(input) {
      return Object.prototype.toString.call(input) === '[object Array]';
    }
    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
      var res = [],
          i;
      for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
      }
      return res;
    }
    function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }
      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }
      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }
      return a;
    }
    function create_utc__createUTC(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false
      };
    }
    function getParsingFlags(m) {
      if (m._pf == null) {
        m._pf = defaultParsingFlags();
      }
      return m._pf;
    }
    function valid__isValid(m) {
      if (m._isValid == null) {
        var flags = getParsingFlags(m);
        m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;
        if (m._strict) {
          m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
        }
      }
      return m._isValid;
    }
    function valid__createInvalid(flags) {
      var m = create_utc__createUTC(NaN);
      if (flags != null) {
        extend(getParsingFlags(m), flags);
      } else {
        getParsingFlags(m).userInvalidated = true;
      }
      return m;
    }
    function isUndefined(input) {
      return input === void 0;
    }
    var momentProperties = utils_hooks__hooks.momentProperties = [];
    function copyConfig(to, from) {
      var i,
          prop,
          val;
      if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
      }
      if (!isUndefined(from._i)) {
        to._i = from._i;
      }
      if (!isUndefined(from._f)) {
        to._f = from._f;
      }
      if (!isUndefined(from._l)) {
        to._l = from._l;
      }
      if (!isUndefined(from._strict)) {
        to._strict = from._strict;
      }
      if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
      }
      if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
      }
      if (!isUndefined(from._offset)) {
        to._offset = from._offset;
      }
      if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
      }
      if (!isUndefined(from._locale)) {
        to._locale = from._locale;
      }
      if (momentProperties.length > 0) {
        for (i in momentProperties) {
          prop = momentProperties[i];
          val = from[prop];
          if (!isUndefined(val)) {
            to[prop] = val;
          }
        }
      }
      return to;
    }
    var updateInProgress = false;
    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (updateInProgress === false) {
        updateInProgress = true;
        utils_hooks__hooks.updateOffset(this);
        updateInProgress = false;
      }
    }
    function isMoment(obj) {
      return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }
    function absFloor(number) {
      if (number < 0) {
        return Math.ceil(number);
      } else {
        return Math.floor(number);
      }
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }
      return value;
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;
      for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function Locale() {}
    var locales = {};
    var globalLocale;
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    }
    function chooseLocale(names) {
      var i = 0,
          j,
          next,
          locale,
          split;
      while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));
          if (locale) {
            return locale;
          }
          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
            break;
          }
          j--;
        }
        i++;
      }
      return null;
    }
    function loadLocale(name) {
      var oldLocale = null;
      if (!locales[name] && (typeof module !== 'undefined') && module && module.exports) {
        try {
          oldLocale = globalLocale._abbr;
          $__require('./locale/' + name);
          locale_locales__getSetGlobalLocale(oldLocale);
        } catch (e) {}
      }
      return locales[name];
    }
    function locale_locales__getSetGlobalLocale(key, values) {
      var data;
      if (key) {
        if (isUndefined(values)) {
          data = locale_locales__getLocale(key);
        } else {
          data = defineLocale(key, values);
        }
        if (data) {
          globalLocale = data;
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale(name, values) {
      if (values !== null) {
        values.abbr = name;
        locales[name] = locales[name] || new Locale();
        locales[name].set(values);
        locale_locales__getSetGlobalLocale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    }
    function locale_locales__getLocale(key) {
      var locale;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return globalLocale;
      }
      if (!isArray(key)) {
        locale = loadLocale(key);
        if (locale) {
          return locale;
        }
        key = [key];
      }
      return chooseLocale(key);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
      return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    function isFunction(input) {
      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function makeGetSet(unit, keepTime) {
      return function(value) {
        if (value != null) {
          get_set__set(this, unit, value);
          utils_hooks__hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get_set__get(this, unit);
        }
      };
    }
    function get_set__get(mom, unit) {
      return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function get_set__set(mom, unit, value) {
      if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
    function getSet(units, value) {
      var unit;
      if (typeof units === 'object') {
        for (unit in units) {
          this.set(unit, units[unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units](value);
        }
      }
      return this;
    }
    function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0;
      return (sign ? (forceSign ? '+' : '') : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {};
    function addFormatToken(token, padded, ordinal, callback) {
      var func = callback;
      if (typeof callback === 'string') {
        func = function() {
          return this[callback]();
        };
      }
      if (token) {
        formatTokenFunctions[token] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function() {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal) {
        formatTokenFunctions[ordinal] = function() {
          return this.localeData().ordinal(func.apply(this, arguments), token);
        };
      }
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }
      return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
      var array = format.match(formattingTokens),
          i,
          length;
      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function(mom) {
        var output = '';
        for (i = 0; i < length; i++) {
          output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
      };
    }
    function formatMoment(m, format) {
      if (!m.isValid()) {
        return m.localeData().invalidDate();
      }
      format = expandFormat(format, m.localeData());
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
      return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
      var i = 5;
      function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }
      return format;
    }
    var match1 = /\d/;
    var match2 = /\d\d/;
    var match3 = /\d{3}/;
    var match4 = /\d{4}/;
    var match6 = /[+-]?\d{6}/;
    var match1to2 = /\d\d?/;
    var match3to4 = /\d\d\d\d?/;
    var match5to6 = /\d\d\d\d\d\d?/;
    var match1to3 = /\d{1,3}/;
    var match1to4 = /\d{1,4}/;
    var match1to6 = /[+-]?\d{1,6}/;
    var matchUnsigned = /\d+/;
    var matchSigned = /[+-]?\d+/;
    var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
    var regexes = {};
    function addRegexToken(token, regex, strictRegex) {
      regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
      };
    }
    function getParseRegexForToken(token, config) {
      if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
      }
      return regexes[token](config._strict, config._locale);
    }
    function unescapeFormat(s) {
      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }));
    }
    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens = {};
    function addParseToken(token, callback) {
      var i,
          func = callback;
      if (typeof token === 'string') {
        token = [token];
      }
      if (typeof callback === 'number') {
        func = function(input, array) {
          array[callback] = toInt(input);
        };
      }
      for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
      }
    }
    function addWeekParseToken(token, callback) {
      addParseToken(token, function(input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
      });
    }
    function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
      }
    }
    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;
    function daysInMonth(year, month) {
      return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }
    addFormatToken('M', ['MM', 2], 'Mo', function() {
      return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function(format) {
      return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function(format) {
      return this.localeData().months(this, format);
    });
    addUnitAlias('month', 'M');
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function(isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function(isStrict, locale) {
      return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function(input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(['MMM', 'MMMM'], function(input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict);
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    });
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths(m, format) {
      return isArray(this._months) ? this._months[m.month()] : this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort(m, format) {
      return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function localeMonthsParse(monthName, format, strict) {
      var i,
          mom,
          regex;
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        mom = create_utc__createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    }
    function setMonth(mom, value) {
      var dayOfMonth;
      if (!mom.isValid()) {
        return mom;
      }
      if (typeof value === 'string') {
        value = mom.localeData().monthsParse(value);
        if (typeof value !== 'number') {
          return mom;
        }
      }
      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
      return mom;
    }
    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        utils_hooks__hooks.updateOffset(this, true);
        return this;
      } else {
        return get_set__get(this, 'Month');
      }
    }
    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }
    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }
    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }
    function computeMonthsParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }
      var shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom;
      for (i = 0; i < 12; i++) {
        mom = create_utc__createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
      }
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }
      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
    }
    function checkOverflow(m) {
      var overflow;
      var a = m._a;
      if (a && getParsingFlags(m).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }
        getParsingFlags(m).overflow = overflow;
      }
      return m;
    }
    function warn(msg) {
      if (utils_hooks__hooks.suppressDeprecationWarnings === false && (typeof console !== 'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function() {
        if (firstTime) {
          warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }
    utils_hooks__hooks.suppressDeprecationWarnings = false;
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];
    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    function configFromISO(config) {
      var i,
          l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime,
          dateFormat,
          timeFormat,
          tzFormat;
      if (match) {
        getParsingFlags(config).iso = true;
        for (i = 0, l = isoDates.length; i < l; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config._isValid = false;
          return;
        }
        if (match[3]) {
          for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              timeFormat = (match[2] || ' ') + isoTimes[i][0];
              break;
            }
          }
          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }
        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }
        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
          } else {
            config._isValid = false;
            return;
          }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }
    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);
      if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
      }
      configFromISO(config);
      if (config._isValid === false) {
        delete config._isValid;
        utils_hooks__hooks.createFromInputFallback(config);
      }
    }
    utils_hooks__hooks.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    function createDate(y, m, d, h, M, s, ms) {
      var date = new Date(y, m, d, h, M, s, ms);
      if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
      return date;
    }
    function createUTCDate(y) {
      var date = new Date(Date.UTC.apply(null, arguments));
      if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
      return date;
    }
    addFormatToken('Y', 0, 0, function() {
      var y = this.year();
      return y <= 9999 ? '' + y : '+' + y;
    });
    addFormatToken(0, ['YY', 2], 0, function() {
      return this.year() % 100;
    });
    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
    addUnitAlias('year', 'y');
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function(input, array) {
      array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function(input, array) {
      array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function(input, array) {
      array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    utils_hooks__hooks.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    var getSetYear = makeGetSet('FullYear', false);
    function getIsLeapYear() {
      return isLeapYear(this.year());
    }
    function firstWeekOffset(year, dow, doy) {
      var fwd = 7 + dow - doy,
          fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear,
          resDayOfYear;
      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }
      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }
    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek,
          resYear;
      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }
      return {
        week: resWeek,
        year: resYear
      };
    }
    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    function defaults(a, b, c) {
      if (a != null) {
        return a;
      }
      if (b != null) {
        return b;
      }
      return c;
    }
    function currentDateArray(config) {
      var nowValue = new Date(utils_hooks__hooks.now());
      if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    function configFromArray(config) {
      var i,
          date,
          input = [],
          currentDate,
          yearToUse;
      if (config._d) {
        return;
      }
      currentDate = currentDateArray(config);
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      }
      if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse)) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      }
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      }
      for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
      }
      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }
      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }
      if (config._nextDay) {
        config._a[HOUR] = 24;
      }
    }
    function dayOfYearFromWeekInfo(config) {
      var w,
          weekYear,
          week,
          weekday,
          dow,
          doy,
          temp,
          weekdayOverflow;
      w = config._w;
      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
        week = defaults(w.w, 1);
        if (w.d != null) {
          weekday = w.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          weekday = w.e + dow;
          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          weekday = dow;
        }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    }
    utils_hooks__hooks.ISO_8601 = function() {};
    function configFromStringAndFormat(config) {
      if (config._f === utils_hooks__hooks.ISO_8601) {
        configFromISO(config);
        return;
      }
      config._a = [];
      getParsingFlags(config).empty = true;
      var string = '' + config._i,
          i,
          parsedInput,
          tokens,
          token,
          skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;
      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }
          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token);
          }
          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
        }
      }
      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      }
      if (getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
      }
      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
      configFromArray(config);
      checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
      var isPm;
      if (meridiem == null) {
        return hour;
      }
      if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        return hour;
      }
    }
    function configFromStringAndArray(config) {
      var tempConfig,
          bestMoment,
          scoreToBeat,
          i,
          currentScore;
      if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
      }
      for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (!valid__isValid(tempConfig)) {
          continue;
        }
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
      extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
      if (config._d) {
        return;
      }
      var i = normalizeObjectUnits(config._i);
      config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) {
        return obj && parseInt(obj, 10);
      });
      configFromArray(config);
    }
    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
        res.add(1, 'd');
        res._nextDay = undefined;
      }
      return res;
    }
    function prepareConfig(config) {
      var input = config._i,
          format = config._f;
      config._locale = config._locale || locale_locales__getLocale(config._l);
      if (input === null || (format === undefined && input === '')) {
        return valid__createInvalid({nullInput: true});
      }
      if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
      }
      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isArray(format)) {
        configFromStringAndArray(config);
      } else if (format) {
        configFromStringAndFormat(config);
      } else if (isDate(input)) {
        config._d = input;
      } else {
        configFromInput(config);
      }
      if (!valid__isValid(config)) {
        config._d = null;
      }
      return config;
    }
    function configFromInput(config) {
      var input = config._i;
      if (input === undefined) {
        config._d = new Date(utils_hooks__hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(+input);
      } else if (typeof input === 'string') {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function(obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (typeof(input) === 'object') {
        configFromObject(config);
      } else if (typeof(input) === 'number') {
        config._d = new Date(input);
      } else {
        utils_hooks__hooks.createFromInputFallback(config);
      }
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
      var c = {};
      if (typeof(locale) === 'boolean') {
        strict = locale;
        locale = undefined;
      }
      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;
      return createFromConfig(c);
    }
    function local__createLocal(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function() {
      var other = local__createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return valid__createInvalid();
      }
    });
    var prototypeMax = deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function() {
      var other = local__createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return valid__createInvalid();
      }
    });
    function pickBy(fn, moments) {
      var res,
          i;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return local__createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }
      return res;
    }
    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isBefore', args);
    }
    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isAfter', args);
    }
    var now = function() {
      return Date.now ? Date.now() : +(new Date());
    };
    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;
      this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
      this._days = +days + weeks * 7;
      this._months = +months + quarters * 3 + years * 12;
      this._data = {};
      this._locale = locale_locales__getLocale();
      this._bubble();
    }
    function isDuration(obj) {
      return obj instanceof Duration;
    }
    function offset(token, separator) {
      addFormatToken(token, 0, 0, function() {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
          offset = -offset;
          sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
      });
    }
    offset('Z', ':');
    offset('ZZ', '');
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function(input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
      var matches = ((string || '').match(matcher) || []);
      var chunk = matches[matches.length - 1] || [];
      var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      var minutes = +(parts[1] * 60) + toInt(parts[2]);
      return parts[0] === '+' ? minutes : -minutes;
    }
    function cloneWithOffset(input, model) {
      var res,
          diff;
      if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
        res._d.setTime(+res._d + diff);
        utils_hooks__hooks.updateOffset(res, false);
        return res;
      } else {
        return local__createLocal(input).local();
      }
    }
    function getDateOffset(m) {
      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }
    utils_hooks__hooks.updateOffset = function() {};
    function getSetOffset(input, keepLocalTime) {
      var offset = this._offset || 0,
          localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === 'string') {
          input = offsetFromString(matchShortOffset, input);
        } else if (Math.abs(input) < 16) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, 'm');
        }
        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            utils_hooks__hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset : getDateOffset(this);
      }
    }
    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), 'm');
        }
      }
      return this;
    }
    function setOffsetToParsedOffset() {
      if (this._tzm) {
        this.utcOffset(this._tzm);
      } else if (typeof this._i === 'string') {
        this.utcOffset(offsetFromString(matchOffset, this._i));
      }
      return this;
    }
    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }
      input = input ? local__createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
      return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset());
    }
    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }
      var c = {};
      copyConfig(c, this);
      c = prepareConfig(c);
      if (c._a) {
        var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
        this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }
      return this._isDSTShifted;
    }
    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
    var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    function create__createDuration(input, key) {
      var duration = input,
          match = null,
          sign,
          ret,
          diffRes;
      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (typeof input === 'number') {
        duration = {};
        if (key) {
          duration[key] = input;
        } else {
          duration.milliseconds = input;
        }
      } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign,
          h: toInt(match[HOUR]) * sign,
          m: toInt(match[MINUTE]) * sign,
          s: toInt(match[SECOND]) * sign,
          ms: toInt(match[MILLISECOND]) * sign
        };
      } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign),
          M: parseIso(match[3], sign),
          d: parseIso(match[4], sign),
          h: parseIso(match[5], sign),
          m: parseIso(match[6], sign),
          s: parseIso(match[7], sign),
          w: parseIso(match[8], sign)
        };
      } else if (duration == null) {
        duration = {};
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }
      ret = new Duration(duration);
      if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
      }
      return ret;
    }
    create__createDuration.fn = Duration.prototype;
    function parseIso(inp, sign) {
      var res = inp && parseFloat(inp.replace(',', '.'));
      return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
      var res = {
        milliseconds: 0,
        months: 0
      };
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
        return {
          milliseconds: 0,
          months: 0
        };
      }
      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function(val, period) {
        var dur,
            tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
          tmp = val;
          val = period;
          period = tmp;
        }
        val = typeof val === 'string' ? +val : val;
        dur = create__createDuration(val, period);
        add_subtract__addSubtract(this, dur, direction);
        return this;
      };
    }
    function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = duration._days,
          months = duration._months;
      if (!mom.isValid()) {
        return;
      }
      updateOffset = updateOffset == null ? true : updateOffset;
      if (milliseconds) {
        mom._d.setTime(+mom._d + milliseconds * isAdding);
      }
      if (days) {
        get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
      }
      if (months) {
        setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
      }
      if (updateOffset) {
        utils_hooks__hooks.updateOffset(mom, days || months);
      }
    }
    var add_subtract__add = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');
    function moment_calendar__calendar(time, formats) {
      var now = time || local__createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          diff = this.diff(sod, 'days', true),
          format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
      return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
    }
    function clone() {
      return new Moment(this);
    }
    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : local__createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
        return +this > +localInput;
      } else {
        return +localInput < +this.clone().startOf(units);
      }
    }
    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : local__createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
        return +this < +localInput;
      } else {
        return +this.clone().endOf(units) < +localInput;
      }
    }
    function isBetween(from, to, units) {
      return this.isAfter(from, units) && this.isBefore(to, units);
    }
    function isSame(input, units) {
      var localInput = isMoment(input) ? input : local__createLocal(input),
          inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units || 'millisecond');
      if (units === 'millisecond') {
        return +this === +localInput;
      } else {
        inputMs = +localInput;
        return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
      }
    }
    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
      var that,
          zoneDelta,
          delta,
          output;
      if (!this.isValid()) {
        return NaN;
      }
      that = cloneWithOffset(input, this);
      if (!that.isValid()) {
        return NaN;
      }
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);
      if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
          output = output / 3;
        } else if (units === 'year') {
          output = output / 12;
        }
      } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : units === 'minute' ? delta / 6e4 : units === 'hour' ? delta / 36e5 : units === 'day' ? (delta - zoneDelta) / 864e5 : units === 'week' ? (delta - zoneDelta) / 6048e5 : delta;
      }
      return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
      var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
          anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2,
          adjust;
      if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        adjust = (b - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        adjust = (b - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust);
    }
    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    function toString() {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function moment_format__toISOString() {
      var m = this.clone().utc();
      if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
          return this.toDate().toISOString();
        } else {
          return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
      } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
    }
    function format(inputString) {
      var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
      return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
      if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
        return create__createDuration({
          to: this,
          from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function fromNow(withoutSuffix) {
      return this.from(local__createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
      if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
        return create__createDuration({
          from: this,
          to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function toNow(withoutSuffix) {
      return this.to(local__createLocal(), withoutSuffix);
    }
    function locale(key) {
      var newLocaleData;
      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = locale_locales__getLocale(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    });
    function localeData() {
      return this._locale;
    }
    function startOf(units) {
      units = normalizeUnits(units);
      switch (units) {
        case 'year':
          this.month(0);
        case 'quarter':
        case 'month':
          this.date(1);
        case 'week':
        case 'isoWeek':
        case 'day':
          this.hours(0);
        case 'hour':
          this.minutes(0);
        case 'minute':
          this.seconds(0);
        case 'second':
          this.milliseconds(0);
      }
      if (units === 'week') {
        this.weekday(0);
      }
      if (units === 'isoWeek') {
        this.isoWeekday(1);
      }
      if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
      }
      return this;
    }
    function endOf(units) {
      units = normalizeUnits(units);
      if (units === undefined || units === 'millisecond') {
        return this;
      }
      return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }
    function to_type__valueOf() {
      return +this._d - ((this._offset || 0) * 60000);
    }
    function unix() {
      return Math.floor(+this / 1000);
    }
    function toDate() {
      return this._offset ? new Date(+this) : this._d;
    }
    function toArray() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }
    function toObject() {
      var m = this;
      return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
      };
    }
    function toJSON() {
      return this.isValid() ? this.toISOString() : 'null';
    }
    function moment_valid__isValid() {
      return valid__isValid(this);
    }
    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
      return getParsingFlags(this).overflow;
    }
    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    addFormatToken(0, ['gg', 2], 0, function() {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ['GG', 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken(['gg', 'GG'], function(input, week, config, token) {
      week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }
    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
          week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }
    addFormatToken('Q', 0, 'Qo', 'quarter');
    addUnitAlias('quarter', 'Q');
    addRegexToken('Q', match1);
    addParseToken('Q', function(input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function(input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
    });
    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
      dow: 0,
      doy: 6
    };
    function localeFirstDayOfWeek() {
      return this._week.dow;
    }
    function localeFirstDayOfYear() {
      return this._week.doy;
    }
    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    }
    addFormatToken('D', ['DD', 2], 'Do', 'date');
    addUnitAlias('date', 'D');
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function(isStrict, locale) {
      return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function(input, array) {
      array[DATE] = toInt(input.match(match1to2)[0], 10);
    });
    var getSetDayOfMonth = makeGetSet('Date', true);
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function(format) {
      return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function(format) {
      return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function(format) {
      return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', matchWord);
    addRegexToken('ddd', matchWord);
    addRegexToken('dddd', matchWord);
    addWeekParseToken(['dd', 'ddd', 'dddd'], function(input, week, config, token) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict);
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(['d', 'e', 'E'], function(input, week, config, token) {
      week[token] = toInt(input);
    });
    function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
        return input;
      }
      if (!isNaN(input)) {
        return parseInt(input, 10);
      }
      input = locale.weekdaysParse(input);
      if (typeof input === 'number') {
        return input;
      }
      return null;
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays(m, format) {
      return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
      return this._weekdaysShort[m.day()];
    }
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
      return this._weekdaysMin[m.day()];
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
      var i,
          mom,
          regex;
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }
      for (i = 0; i < 7; i++) {
        mom = local__createLocal([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
          this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
          this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    }
    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    }
    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
    addUnitAlias('dayOfYear', 'DDD');
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function(input, array, config) {
      config._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }
    function hFormat() {
      return this.hours() % 12 || 12;
    }
    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('hmm', 0, 0, function() {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function() {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function() {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function() {
      return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token, lowercase) {
      addFormatToken(token, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
      });
    }
    meridiem('a', true);
    meridiem('A', false);
    addUnitAlias('hour', 'h');
    function matchMeridiem(isStrict, locale) {
      return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function(input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function(input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function(input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function(input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
      return ((input + '').toLowerCase().charAt(0) === 'p');
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    }
    var getSetHour = makeGetSet('Hours', true);
    addFormatToken('m', ['mm', 2], 0, 'minute');
    addUnitAlias('minute', 'm');
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);
    var getSetMinute = makeGetSet('Minutes', false);
    addFormatToken('s', ['ss', 2], 0, 'second');
    addUnitAlias('second', 's');
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);
    var getSetSecond = makeGetSet('Seconds', false);
    addFormatToken('S', 0, 0, function() {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ['SS', 2], 0, function() {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function() {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function() {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function() {
      return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function() {
      return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function() {
      return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function() {
      return this.millisecond() * 1000000;
    });
    addUnitAlias('millisecond', 'ms');
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
    }
    var getSetMillisecond = makeGetSet('Milliseconds', false);
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    function getZoneAbbr() {
      return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var momentPrototype__proto = Moment.prototype;
    momentPrototype__proto.add = add_subtract__add;
    momentPrototype__proto.calendar = moment_calendar__calendar;
    momentPrototype__proto.clone = clone;
    momentPrototype__proto.diff = diff;
    momentPrototype__proto.endOf = endOf;
    momentPrototype__proto.format = format;
    momentPrototype__proto.from = from;
    momentPrototype__proto.fromNow = fromNow;
    momentPrototype__proto.to = to;
    momentPrototype__proto.toNow = toNow;
    momentPrototype__proto.get = getSet;
    momentPrototype__proto.invalidAt = invalidAt;
    momentPrototype__proto.isAfter = isAfter;
    momentPrototype__proto.isBefore = isBefore;
    momentPrototype__proto.isBetween = isBetween;
    momentPrototype__proto.isSame = isSame;
    momentPrototype__proto.isSameOrAfter = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore = isSameOrBefore;
    momentPrototype__proto.isValid = moment_valid__isValid;
    momentPrototype__proto.lang = lang;
    momentPrototype__proto.locale = locale;
    momentPrototype__proto.localeData = localeData;
    momentPrototype__proto.max = prototypeMax;
    momentPrototype__proto.min = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set = getSet;
    momentPrototype__proto.startOf = startOf;
    momentPrototype__proto.subtract = add_subtract__subtract;
    momentPrototype__proto.toArray = toArray;
    momentPrototype__proto.toObject = toObject;
    momentPrototype__proto.toDate = toDate;
    momentPrototype__proto.toISOString = moment_format__toISOString;
    momentPrototype__proto.toJSON = toJSON;
    momentPrototype__proto.toString = toString;
    momentPrototype__proto.unix = unix;
    momentPrototype__proto.valueOf = to_type__valueOf;
    momentPrototype__proto.creationData = creationData;
    momentPrototype__proto.year = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;
    momentPrototype__proto.weekYear = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
    momentPrototype__proto.month = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;
    momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
    momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
    momentPrototype__proto.weeksInYear = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
    momentPrototype__proto.date = getSetDayOfMonth;
    momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
    momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear = getSetDayOfYear;
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
    momentPrototype__proto.utcOffset = getSetOffset;
    momentPrototype__proto.utc = setOffsetToUTC;
    momentPrototype__proto.local = setOffsetToLocal;
    momentPrototype__proto.parseZone = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal = isLocal;
    momentPrototype__proto.isUtcOffset = isUtcOffset;
    momentPrototype__proto.isUtc = isUtc;
    momentPrototype__proto.isUTC = isUtc;
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;
    momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
    var momentPrototype = momentPrototype__proto;
    function moment__createUnix(input) {
      return local__createLocal(input * 1000);
    }
    function moment__createInZone() {
      return local__createLocal.apply(null, arguments).parseZone();
    }
    var defaultCalendar = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    };
    function locale_calendar__calendar(key, mom, now) {
      var output = this._calendar[key];
      return isFunction(output) ? output.call(mom, now) : output;
    }
    var defaultLongDateFormat = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
      var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()];
      if (format || !formatUpper) {
        return format;
      }
      this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
        return val.slice(1);
      });
      return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
      return this._invalidDate;
    }
    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
      return this._ordinal.replace('%d', number);
    }
    function preParsePostFormat(string) {
      return string;
    }
    var defaultRelativeTime = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    };
    function relative__relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return (isFunction(output)) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    function locale_set__set(config) {
      var prop,
          i;
      for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }
    var prototype__proto = Locale.prototype;
    prototype__proto._calendar = defaultCalendar;
    prototype__proto.calendar = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat = longDateFormat;
    prototype__proto._invalidDate = defaultInvalidDate;
    prototype__proto.invalidDate = invalidDate;
    prototype__proto._ordinal = defaultOrdinal;
    prototype__proto.ordinal = ordinal;
    prototype__proto._ordinalParse = defaultOrdinalParse;
    prototype__proto.preparse = preParsePostFormat;
    prototype__proto.postformat = preParsePostFormat;
    prototype__proto._relativeTime = defaultRelativeTime;
    prototype__proto.relativeTime = relative__relativeTime;
    prototype__proto.pastFuture = pastFuture;
    prototype__proto.set = locale_set__set;
    prototype__proto.months = localeMonths;
    prototype__proto._months = defaultLocaleMonths;
    prototype__proto.monthsShort = localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse = localeMonthsParse;
    prototype__proto._monthsRegex = defaultMonthsRegex;
    prototype__proto.monthsRegex = monthsRegex;
    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
    prototype__proto.monthsShortRegex = monthsShortRegex;
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
    prototype__proto.weekdays = localeWeekdays;
    prototype__proto._weekdays = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin = localeWeekdaysMin;
    prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort = localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse = localeWeekdaysParse;
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;
    function lists__get(format, index, field, setter) {
      var locale = locale_locales__getLocale();
      var utc = create_utc__createUTC().set(setter, index);
      return locale[field](utc, format);
    }
    function list(format, index, field, count, setter) {
      if (typeof format === 'number') {
        index = format;
        format = undefined;
      }
      format = format || '';
      if (index != null) {
        return lists__get(format, index, field, setter);
      }
      var i;
      var out = [];
      for (i = 0; i < count; i++) {
        out[i] = lists__get(format, i, field, setter);
      }
      return out;
    }
    function lists__listMonths(format, index) {
      return list(format, index, 'months', 12, 'month');
    }
    function lists__listMonthsShort(format, index) {
      return list(format, index, 'monthsShort', 12, 'month');
    }
    function lists__listWeekdays(format, index) {
      return list(format, index, 'weekdays', 7, 'day');
    }
    function lists__listWeekdaysShort(format, index) {
      return list(format, index, 'weekdaysShort', 7, 'day');
    }
    function lists__listWeekdaysMin(format, index) {
      return list(format, index, 'weekdaysMin', 7, 'day');
    }
    locale_locales__getSetGlobalLocale('en', {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
        return number + output;
      }
    });
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
    var mathAbs = Math.abs;
    function duration_abs__abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }
    function duration_add_subtract__addSubtract(duration, input, value, direction) {
      var other = create__createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    }
    function duration_add_subtract__add(input, value) {
      return duration_add_subtract__addSubtract(this, input, value, 1);
    }
    function duration_add_subtract__subtract(input, value) {
      return duration_add_subtract__addSubtract(this, input, value, -1);
    }
    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }
    function bubble() {
      var milliseconds = this._milliseconds;
      var days = this._days;
      var months = this._months;
      var data = this._data;
      var seconds,
          minutes,
          hours,
          years,
          monthsFromDays;
      if (!((milliseconds >= 0 && days >= 0 && months >= 0) || (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
      }
      data.milliseconds = milliseconds % 1000;
      seconds = absFloor(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes = absFloor(seconds / 60);
      data.minutes = minutes % 60;
      hours = absFloor(minutes / 60);
      data.hours = hours % 24;
      days += absFloor(hours / 24);
      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays));
      years = absFloor(months / 12);
      months %= 12;
      data.days = days;
      data.months = months;
      data.years = years;
      return this;
    }
    function daysToMonths(days) {
      return days * 4800 / 146097;
    }
    function monthsToDays(months) {
      return months * 146097 / 4800;
    }
    function as(units) {
      var days;
      var months;
      var milliseconds = this._milliseconds;
      units = normalizeUnits(units);
      if (units === 'month' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
      } else {
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
          case 'week':
            return days / 7 + milliseconds / 6048e5;
          case 'day':
            return days + milliseconds / 864e5;
          case 'hour':
            return days * 24 + milliseconds / 36e5;
          case 'minute':
            return days * 1440 + milliseconds / 6e4;
          case 'second':
            return days * 86400 + milliseconds / 1000;
          case 'millisecond':
            return Math.floor(days * 864e5) + milliseconds;
          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    }
    function duration_as__valueOf() {
      return (this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6);
    }
    function makeAs(alias) {
      return function() {
        return this.as(alias);
      };
    }
    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');
    function duration_get__get(units) {
      units = normalizeUnits(units);
      return this[units + 's']();
    }
    function makeGetter(name) {
      return function() {
        return this._data[name];
      };
    }
    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');
    function weeks() {
      return absFloor(this.days() / 7);
    }
    var round = Math.round;
    var thresholds = {
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
      var duration = create__createDuration(posNegDuration).abs();
      var seconds = round(duration.as('s'));
      var minutes = round(duration.as('m'));
      var hours = round(duration.as('h'));
      var days = round(duration.as('d'));
      var months = round(duration.as('M'));
      var years = round(duration.as('y'));
      var a = seconds < thresholds.s && ['s', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
    }
    function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === undefined) {
        return false;
      }
      if (limit === undefined) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      return true;
    }
    function humanize(withSuffix) {
      var locale = this.localeData();
      var output = duration_humanize__relativeTime(this, !withSuffix, locale);
      if (withSuffix) {
        output = locale.pastFuture(+this, output);
      }
      return locale.postformat(output);
    }
    var iso_string__abs = Math.abs;
    function iso_string__toISOString() {
      var seconds = iso_string__abs(this._milliseconds) / 1000;
      var days = iso_string__abs(this._days);
      var months = iso_string__abs(this._months);
      var minutes,
          hours,
          years;
      minutes = absFloor(seconds / 60);
      hours = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60;
      years = absFloor(months / 12);
      months %= 12;
      var Y = years;
      var M = months;
      var D = days;
      var h = hours;
      var m = minutes;
      var s = seconds;
      var total = this.asSeconds();
      if (!total) {
        return 'P0D';
      }
      return (total < 0 ? '-' : '') + 'P' + (Y ? Y + 'Y' : '') + (M ? M + 'M' : '') + (D ? D + 'D' : '') + ((h || m || s) ? 'T' : '') + (h ? h + 'H' : '') + (m ? m + 'M' : '') + (s ? s + 'S' : '');
    }
    var duration_prototype__proto = Duration.prototype;
    duration_prototype__proto.abs = duration_abs__abs;
    duration_prototype__proto.add = duration_add_subtract__add;
    duration_prototype__proto.subtract = duration_add_subtract__subtract;
    duration_prototype__proto.as = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds = asSeconds;
    duration_prototype__proto.asMinutes = asMinutes;
    duration_prototype__proto.asHours = asHours;
    duration_prototype__proto.asDays = asDays;
    duration_prototype__proto.asWeeks = asWeeks;
    duration_prototype__proto.asMonths = asMonths;
    duration_prototype__proto.asYears = asYears;
    duration_prototype__proto.valueOf = duration_as__valueOf;
    duration_prototype__proto._bubble = bubble;
    duration_prototype__proto.get = duration_get__get;
    duration_prototype__proto.milliseconds = milliseconds;
    duration_prototype__proto.seconds = seconds;
    duration_prototype__proto.minutes = minutes;
    duration_prototype__proto.hours = hours;
    duration_prototype__proto.days = days;
    duration_prototype__proto.weeks = weeks;
    duration_prototype__proto.months = months;
    duration_prototype__proto.years = years;
    duration_prototype__proto.humanize = humanize;
    duration_prototype__proto.toISOString = iso_string__toISOString;
    duration_prototype__proto.toString = iso_string__toISOString;
    duration_prototype__proto.toJSON = iso_string__toISOString;
    duration_prototype__proto.locale = locale;
    duration_prototype__proto.localeData = localeData;
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function(input, array, config) {
      config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function(input, array, config) {
      config._d = new Date(toInt(input));
    });
    utils_hooks__hooks.version = '2.11.2';
    setHookCallback(local__createLocal);
    utils_hooks__hooks.fn = momentPrototype;
    utils_hooks__hooks.min = min;
    utils_hooks__hooks.max = max;
    utils_hooks__hooks.now = now;
    utils_hooks__hooks.utc = create_utc__createUTC;
    utils_hooks__hooks.unix = moment__createUnix;
    utils_hooks__hooks.months = lists__listMonths;
    utils_hooks__hooks.isDate = isDate;
    utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid = valid__createInvalid;
    utils_hooks__hooks.duration = create__createDuration;
    utils_hooks__hooks.isMoment = isMoment;
    utils_hooks__hooks.weekdays = lists__listWeekdays;
    utils_hooks__hooks.parseZone = moment__createInZone;
    utils_hooks__hooks.localeData = locale_locales__getLocale;
    utils_hooks__hooks.isDuration = isDuration;
    utils_hooks__hooks.monthsShort = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale = defineLocale;
    utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.prototype = momentPrototype;
    var _moment = utils_hooks__hooks;
    return _moment;
  }));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4a", ["6f"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('6f');
  global.define = __define;
  return module.exports;
});

$__System.register("70", ["35", "60", "4a"], function (_export) {
  var _, _slicedToArray, moment;

  /*
  
  The way this scale avoids overlapping is by stretching time between points that
  overlap. It does this by creating a polylinear D3 time scale (which is basically
  just multiple linear time scales joined together, each one acting in a specific
  domain.)
  
  What follows below is a huge mess of code to construct this polylinear scale.
  
  */

  function consecutivePairs(array) {
    var accumulator = [];
    for (var i = 0; i < array.length - 1; i++) {
      accumulator.push([array[i], array[i + 1]]);
    }
    return accumulator;
  }

  // Pair up consecutive events, calculate and store properties of each pair.
  // The return result is considered a "scale".
  function calcScales(minPixelsPerMinute, minGap, maxGap, events) {
    return consecutivePairs(events).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var a = _ref2[0];
      var b = _ref2[1];

      var minutes = (b - a) / (1000 * 60);
      var min = minGap == 0 ? 0 : minGap / minutes;
      var max = maxGap == Infinity ? Infinity : maxGap / minutes;
      // pixelsPerMinute is Infinity when the two events happened at the exact same time
      var pixelsPerMinute = Math.min(Math.max(min, minPixelsPerMinute), max);
      return {
        domain: [a, b],
        pixelsPerMinute: pixelsPerMinute
      };
    });
  }

  // Gets all the domain ends/starts that occur in a list of scales.
  function getAllPoints(scales) {
    return _.chain(scales).map(function (d) {
      return d.domain;
    }).flatten().value();
  }

  function getNextStop(time, scales) {
    return _.chain(getAllPoints(scales)).filter(function (d) {
      return d > time;
    }).min().value();
  }

  function getDomainStart(scales) {
    return _.chain(getAllPoints(scales)).min().value();
  }

  function scaleCovers(domain, scale) {
    return domain[0] >= scale.domain[0] && domain[1] <= scale.domain[1];
  }

  function getScalesCovering(domain, scales) {
    return scales.filter(function (scale) {
      return scaleCovers(domain, scale);
    });
  }

  function getMaxAtSameTime(time, scales) {
    var candidates = scales.filter(function (scale) {
      return _.isEqual(scale.domain, [time, time]);
    });
    return _.maxBy(candidates, function (d) {
      return d.numberOfEvents;
    });
  }

  function combineScales(collections) {
    var scales = _.flatten(collections);
    var domainStart = getDomainStart(scales);
    var domainEnd = undefined;
    var output = [];
    while (domainEnd = getNextStop(domainStart, scales)) {
      var sameTime = getMaxAtSameTime(domainStart, scales);
      if (sameTime) output.push(sameTime);
      var candidates = getScalesCovering([domainStart, domainEnd], scales);
      var pixelsPerMinute = _.max(candidates.map(function (d) {
        return d.pixelsPerMinute;
      }));
      output.push({
        domain: [domainStart, domainEnd],
        pixelsPerMinute: pixelsPerMinute
      });
      domainStart = domainEnd;
    }
    return output;
  }

  function compactScales(scales) {
    var compact = [];
    var i = 0;
    while (i < scales.length) {
      var begin = scales[i].domain[0];
      var pixelsPerMinute = scales[i].pixelsPerMinute;
      var numberOfEvents = 1;
      var end = undefined;
      while (scales[i] && scales[i].pixelsPerMinute === pixelsPerMinute) {
        end = scales[i].domain[1];
        numberOfEvents++;
        i++;
      }
      compact.push({
        domain: [begin, end],
        numberOfEvents: numberOfEvents,
        pixelsPerMinute: pixelsPerMinute
      });
    }
    return compact;
  }

  function scaleFromScales(minGap, scales) {

    var domain = [];
    var range = [];
    var exceptions = {};
    var y = 0;

    domain.push(scales[0].domain[0]);
    range.push(0);

    scales.forEach(function (scale) {
      var domainStart = scale.domain[0];
      var domainEnd = scale.domain[1];
      var dy = undefined;
      if (scale.pixelsPerMinute === Infinity) {
        dy = minGap * (scale.numberOfEvents - 1);
        exceptions[+domainStart] = y;
      } else {
        var minutes = (domainEnd - domainStart) / (1000 * 60);
        dy = minutes * scale.pixelsPerMinute;
      }
      domain.push(domainEnd);
      range.push(y += dy);
    });

    return {
      domain: domain,
      range: range,
      exceptions: exceptions
    };
  }

  function fixOverlapping(minGap, points) {
    var nested = d3.nest().key(function (d) {
      return d.pos;
    }).sortKeys(d3.ascending).entries(points);
    var overlapping = nested.filter(function (d) {
      return d.values.length > 1;
    }).map(function (d) {
      return d.values;
    });
    overlapping.forEach(function (points) {
      for (var i = 1; i < points.length; i++) {
        points[i].pos += i * minGap;
      }
    });
    return points;
  }

  return {
    setters: [function (_3) {
      _ = _3["default"];
    }, function (_2) {
      _slicedToArray = _2["default"];
    }, function (_a) {
      moment = _a["default"];
    }],
    execute: function () {
      "use strict";

      // import d3 from "d3";

      _export("default", function (collections) {

        var minGap = 0,
            maxGap = Infinity,
            pixelsPerMinute = 1;

        var exceptions = {};

        var noOverlap = d3.time.scale();

        noOverlap.minGap = function (x) {
          if (!arguments.length) return minGap;
          minGap = x;
          return noOverlap;
        };

        noOverlap.maxGap = function (x) {
          if (!arguments.length) return maxGap;
          maxGap = x;
          return noOverlap;
        };

        noOverlap.pixelsPerMinute = function (x) {
          if (!arguments.length) return pixelsPerMinute;
          pixelsPerMinute = x;
          return noOverlap;
        };

        noOverlap.positions = function (events) {
          var accessor = arguments.length <= 1 || arguments[1] === undefined ? function (d) {
            return d;
          } : arguments[1];

          var points = events.map(function (event) {
            var time = accessor(event);
            event.pos = +time in exceptions ? exceptions[+time] : noOverlap(time);
            return event;
          });
          return fixOverlapping(minGap, points);
        };

        noOverlap.build = function (collections) {
          collections.map(function (events) {
            return events.sort();
          });
          var pass = collections.map(function (d) {
            return calcScales(pixelsPerMinute, minGap, maxGap, d);
          }).map(compactScales);
          var scales = compactScales(combineScales(pass));

          var _scaleFromScales = scaleFromScales(minGap, scales);

          var domain = _scaleFromScales.domain;
          var range = _scaleFromScales.range;
          var ex = _scaleFromScales.exceptions;

          noOverlap.domain(domain).range(range);
          exceptions = ex;
          return noOverlap;
        };

        return noOverlap;
      });
    }
  };
});
$__System.register("1", ["35", "49", "70", "4a", "a"], function (_export) {
  // import d3 from "d3";

  "use strict";

  var _, getAllEvents, noOverlap, moment, margin, width, height, svg, force, x, y, yAxis, radiusRange, radius, fontSize;

  function radiusAccessor(d) {
    return d.attending_count + d.interested_count;
  }

  function categoryAccessor(d) {
    return d.label || "Other";
  }

  return {
    setters: [function (_2) {
      _ = _2["default"];
    }, function (_3) {
      getAllEvents = _3.getAllEvents;
    }, function (_4) {
      noOverlap = _4["default"];
    }, function (_a) {
      moment = _a["default"];
    }, function (_a2) {}],
    execute: function () {
      margin = { top: 100, right: 20, bottom: 30, left: 20 };
      width = 900 - margin.left - margin.right;
      height = 4500 - margin.top - margin.bottom;
      svg = d3.select("#visualisation").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      force = d3.layout.force().size([width, height]).linkStrength(0.1).friction(0.5).linkDistance(20).charge(-10).gravity(0).theta(0.8).alpha(0.1);
      x = d3.scale.ordinal().rangePoints([width / 3, 2 * width / 3]);
      y = noOverlap().maxGap(600).pixelsPerMinute(1 / 75);
      yAxis = d3.svg.axis().scale(y).orient("left").tickSize(-width).tickPadding(0).tickFormat(d3.time.format("%B %Y")).tickValues(["March 2015", "October 2015", "November 2015", "December 2015", "January 2016", "February 2016", "March 2016", "April 2016"].map(function (d) {
        return moment(d, "MMMM YYYY").toDate();
      }));
      radiusRange = [35, 130];
      radius = d3.scale.sqrt().range(radiusRange).clamp(true);
      fontSize = d3.scale.linear().domain(radiusRange).range([10, 24]).clamp(true);
      getAllEvents().then(function (nodes) {

        nodes = nodes.sort(function (a, b) {
          return d3.ascending(a.start_time, b.start_time);
        });

        // Colours
        // ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]

        // ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5",
        //  "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]

        // ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39",
        //  "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"]

        // ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476",
        //  "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"]

        var presetColors = [["Hackathon", "#a55194"], ["Tech Talk", "#d62728"], ["Social", "#ff7f0e"], ["Machine Learning", "#e0ac32"], ["Data Visualization", "#17becf"], ["Algorithms in C", "#756bb1"], ["Coding & Cookies", "#e6550d"], ["Blender & Brownies", "#8c564b"], ["Hardware & Chill", "#e377c2"], ["Coding Interview Prep", "#7f7f7f"], ["Web Project", "#0f6b0f"], ["VR Project", "#1b881b"], ["IoT Project", "#3baf3b"], ["Android Project", "#50c850"], ["Other", "#1f77b4"]];

        var color = d3.scale.ordinal().domain(presetColors.map(_.first)).range(presetColors.map(_.last));

        var eventsPerCategory = d3.nest().key(categoryAccessor).rollup(function (leaves) {
          return leaves.length;
        }).entries(nodes);

        eventsPerCategory = _.sortBy(eventsPerCategory, function (d) {
          return d.values;
        }).reverse();

        var xDomain = [];

        eventsPerCategory.forEach(function (d, i) {
          xDomain[i % 2 ? "unshift" : "push"](d.key);
        });

        x.domain(xDomain);

        y.build([nodes.map(function (d) {
          return d.start_time;
        })]);

        radius.domain([30, d3.max(nodes, radiusAccessor)]);

        svg.append("g").attr("class", "y axis").call(yAxis).selectAll(".tick text").style("text-anchor", "start").attr("y", 15);

        svg.append("rect").attr("class", "now").attr("x", 0).attr("y", y(new Date())).attr("width", width).attr("height", 1);

        var legend = d3.legend.color().shape("circle").scale(color);

        d3.select("#legend").attr("width", 200).attr("height", 600).append("g").attr("transform", "translate(20,20)").attr("class", "legend").call(legend);

        nodes.forEach(function (d, i) {
          var total = radiusAccessor(d);
          d.radius = total ? radius(total) : radius.range()[0];
          d.cy = d.y = y(d.start_time);
          d.cx = d.x = x(categoryAccessor(d));
        });

        var maxRadius = 25;
        var padding = 3;

        var events = svg.append("g").attr("class", "events").selectAll(".event").data(nodes).enter().append("a").attr("xlink:href", function (d) {
          return "http://uclutech.com" + d.url;
        }).attr("target", "_blank").append("g").attr("class", "event");

        var circles = events.append("circle").attr("cx", 0).attr("cy", 0).style("fill", function (d) {
          return color(categoryAccessor(d));
        });

        var labels = events.append("text").style("font-size", function (d) {
          return fontSize(d.radius);
        }).text(function (d) {
          if (d.label && /session|lesson/i.test(d.title)) {
            return d.label + " - " + d.title;
          } else {
            return d.title;
          }
        }).style("fill", "rgba(255,255,255,0)").each(function (d) {
          var padding = 4;
          var size = (d.radius - padding) * 2;
          d3plus.textwrap().container(d3.select(this)).shape("circle").height(size).width(size).x(-size / 2).y(-size / 2).align("center").valign("middle").draw();
        });

        circles.transition().duration(750).delay(function (d, i) {
          return i * 15;
        }).attrTween("r", function (d) {
          var i = d3.interpolate(0, d.radius);
          return function (t) {
            return d.radius = i(t);
          };
        }).each("end", function (d, i) {
          d3.select(this.nextSibling).transition().style("fill", "rgba(255,255,255,1)").duration(1000);
        });

        force.nodes(nodes).on("tick", tick).start();

        function tick(e) {
          svg.selectAll(".event").each(gravity(.5 * e.alpha)).each(collide(.3)).attr("transform", function (d) {
            return "translate(" + d.x + ", " + d.y + ")";
          });
        }

        // Resolve collisions between nodes.
        function collide(alpha) {
          var quadtree = d3.geom.quadtree(nodes);
          return function (d) {
            var r = d.radius + maxRadius + padding,
                nx1 = d.x - r,
                nx2 = d.x + r,
                ny1 = d.y - r,
                ny2 = d.y + r;
            quadtree.visit(function (quad, x1, y1, x2, y2) {
              if (quad.point && quad.point !== d) {
                var _x = d.x - quad.point.x,
                    _y = d.y - quad.point.y,
                    l = Math.sqrt(_x * _x + _y * _y),
                    _r = d.radius + quad.point.radius + padding;
                if (l < _r) {
                  l = (l - _r) / l * alpha;
                  d.x -= _x *= l;
                  d.y -= _y *= l;
                  quad.point.x += _x;
                  quad.point.y += _y;
                }
              }
              return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            });
          };
        }

        //	Move nodes toward cluster focus.
        function gravity(alpha) {
          return function (d) {
            d.x += (d.cx - d.x) * alpha;
            d.y += (d.cy - d.y) * alpha;
          };
        }
      });
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map