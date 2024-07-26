import { apiSlice } from "../api/apiSlice";
export const getApi = apiSlice.injectEndpoints({
    
    endpoints: builder => ({
        get: builder.query({
            query: (params) => `/${params}`,
        })
    })
})

export const { useGetQuery } = getApi;