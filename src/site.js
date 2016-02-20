import axios from "axios";

export function getSiteEvents() {
  return axios.get("https://uclutech.com/data/events.json").then(({ data }) => {
    return data;
  });
}
