import _ from "lodash";
import axios from "axios";

const ACCESS_TOKEN = "CAAK3kpvZBViIBAAs9SZBVlLXDnQzO8bZAvwjiB7UdzBuKPJsSqiSiYoND0ct8GQsmcGmBD5Y8pCTptMSNTNp9OflfyBLZBq0ijGoLZCbJifZCNcTtQjHh2MkdlW7fmOgFPymnrSIQpVOmz1cQA7TIwzUwzVzvcTtWkOag9OXQvVZC2jMKGU1gUW3fQQWPOZCLCoZD";

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
