import _ from "lodash";
import axios from "axios";

const ACCESS_TOKEN = "CAAK3kpvZBViIBAOEZC6B1cXrA1HpCNSSz5WpTNpHUwWbSuSKlQKPtx3s28rKrSdk1ViWhk0f8g5XdppQAMsHl0FAhcKHYctj6CxiGC9BbG81jXoWIOYBOKftYB1KpLZCkBtQZCkbuo89JWoCmKazsAWih7MdMK59UbsPGHzYkP4ZAKZCjKXqTpowRVj3k9w14ZD";

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
