import _ from "lodash";
import axios from "axios";

const ACCESS_TOKEN = "EAAK3kpvZBViIBAKZBRnqwBEkoN07Oi6sUJ0ZBXAQZCYHP9ZATFgvZBHgNzu3EEaG3ZA65GZC0UuYYEuvZAcajsZCZA80zT3xOku30T6f7PltjNtBnry2VEZAA9WVCFV9XMcaletjXTVn6h718XQb2QVSydwTe9VvcZBJvmn4ZD";

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
