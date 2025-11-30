import axios from "axios";

const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJud2R4ZHVqZ3pyemd0Zmt5c215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMjUxMDIsImV4cCI6MjA0MTgwMTEwMn0.D0nuB2PYrkIVuIsz3R2JqJLJYHmr8gXChAiZrTGMiHk";

const BASE_URL = "https://bnwdxdujgzrzgtfkysmy.supabase.co/rest/v1/";

export const get = (endpoint: string) =>
  axios
    .get(BASE_URL + endpoint, {
      headers: {
        apikey,
        Authorization: `Bearer ${apikey}`,
      },
    })
    .then((res) => res.data);

export const post = async (
  method: string,
  endpoint: string,
  data?: { u_email: string; u_password: string }
) => {
  const res = await axios({
    method,
    url: BASE_URL + endpoint,
    data,
    headers: {
      apikey,
      Authorization: `Bearer ${apikey}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
