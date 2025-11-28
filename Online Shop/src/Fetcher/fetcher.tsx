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
