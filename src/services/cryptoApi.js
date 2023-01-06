import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoHeader = {
  "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl="https://coinranking1.p.rapidapi.com"
const createRequest = (url) => ({
  url,
  header: cryptoHeader,
});
// console.log(createRequest(`/coins`))
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins`),
    }),
  }),
});

export const{
    useGetCryptosQuery,
}=cryptoApi;