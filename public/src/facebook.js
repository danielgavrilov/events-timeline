import _ from "lodash";
import axios from "axios";

const ACCESS_TOKEN = "EAAK3kpvZBViIBAMj2jeG3ZBEeUaUQxHd43KwBgvRwUhkUYmgZBeJsxnDyiIY8SReZA47UEXFMQf2YIogXkZAahEAbb3nmgTSVMRDuCBvPMf6mOxkTKe0pUrxKadsZB9Lpcmb403fy32RpL2ROO0qBmQ2p6zdBsjXoZD";

const defaults = {
  access_token: ACCESS_TOKEN,
  limit: 200,
  fields: [
    "id",
    "start_time",
    "attending_count",
    "interested_count"
  ].join(",")
}

export function getFacebookEvents(uri, params={}) {
  return axios.get(uri, {
    params: _.defaults(params, defaults)
  }).then(({ data }) => {
    return _.values(data);
  });
}
