import { apiSlice } from "../api/apiSlice";
export const postApi = apiSlice.injectEndpoints({
    
    endpoints: builder => ({
        post: builder.mutation({
            query: ({data, url}) => ({
                url: `/${url}`,
                method: 'POST',
                body: data
            }),
            onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
                
                try {
                    const data = await queryFulfilled;

                    dispatch(apiSlice.util.updateQueryData('get', arg.url, (draft) => {
                        draft.push(data?.data)
                    }))
                } catch (error) {
                    //
                }
            }
        })
    })
})

export const { usePostMutation } = postApi;