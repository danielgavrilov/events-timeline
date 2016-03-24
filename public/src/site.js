import axios from "axios";

export function getSiteEvents() {
  return axios.get("https://techsoc.io/data/events.json").then(({ data }) => {
    return data;
  });
}
