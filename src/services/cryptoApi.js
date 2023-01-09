
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
};
const baseUrl= "https://coinranking1.p.rapidapi.com"
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetail: builder.query({
      query: (coinuuid) => createRequest(`coin/${coinuuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({coinuuid,timePeriod}) => createRequest(`coin/${coinuuid}/history?timeperiod=${timePeriod}`)
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptosDetailQuery, useGetCryptoHistoryQuery } =
  cryptoApi;
