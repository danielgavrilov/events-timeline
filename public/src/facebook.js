import _ from "lodash";
import axios from "axios";

const ACCESS_TOKEN = "EAAK3kpvZBViIBAMxJJu8mMPFgzLXtCT0rRy2oxxWTqPEB0sW6PKNAZCduqkR4J7huDkWwKqKhOC3mkftP2sAL4Lc1Wk2Y0U35T4ulQAcBn8abHv6HNJMBagBJfrMKecYrhXofbfIohZB5MPZCefpipYZB4dVvEQMZD";

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
