import _ from "lodash";
import moment from "moment";

import { getFacebookEvents } from "./facebook";
import { getSiteEvents } from "./site";

function type(d) {
  if (d.start_time) d.start_time = moment(d.start_time, "YYYY-MM-DD HH:mm").toDate();
  if (d.end_time) d.end_time = moment(d.end_time, "YYYY-MM-DD HH:mm").toDate();
}

export function getAllEvents() {
  return getSiteEvents().then((siteEvents) => {
    let ids = _.compact(siteEvents.map(d => d.facebook_id));
    let chunked = _.chunk(ids, 50);
    let events = _.clone(siteEvents);
    return Promise.all(chunked.map(ids => getFacebookEvents("https://graph.facebook.com/v2.6/", { ids: ids.join(",") }))).then(facebookEvents => {
      facebookEvents = _.flatten(facebookEvents);
      facebookEvents.forEach((facebookEvent) => {
        let id = facebookEvent.id;
        let siteEvent = _.find(events, (event) => event.facebook_id == id);
        if (siteEvent) {
          siteEvent.attending_count = facebookEvent.attending_count;
          siteEvent.interested_count = facebookEvent.interested_count;
        }
      });
      events.forEach(type);
      return events;
    })
  })
}
