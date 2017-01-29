import _ from "lodash";
import axios from "axios";

const ACCESS_TOKEN = "EAAK3kpvZBViIBALfU2MNTMtWbFVXRVJASHVtITVYlwyufGuXKiZCBPpZBujUL3gKz5ZCQoovHjZB54jAvmnyjgVGRK6EsM5IF6iu8gzB0sn6YHBTGZAnK0oIJOzomF1CGdWUX9fa31SGAZAU3vSaTm6rOSi1cJdYe0ZD";

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
