import { apiSlice } from "../api/apiSlice";
export const deletedApi = apiSlice.injectEndpoints({
    
    endpoints: builder => ({
        deleted: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/tasks/${id}`
            }),
            onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
                try {
                    await queryFulfilled;

                    dispatch(apiSlice.util.updateQueryData('get', 'tasks', (draft) => {
                        const c = draft?.filter(item => Number(item.id) !== arg)
                        return c
                    }))
                } catch (error) {
                    console.log('adk');
                }
            }
        })
    })
})

export const { useDeletedMutation } = deletedApi;