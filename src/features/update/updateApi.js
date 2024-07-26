import { apiSlice } from "../api/apiSlice";
export const updateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    patchData: builder.mutation({
      query: ({ data, id, url }) => ({
        method: "PATCH",
        url: `/${url}/${id}`,
        body: data,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        

        let dispatchData1;
        let dispatchData2;
        if (arg.url === "tasks") {
          dispatchData1 = dispatch(
            apiSlice.util.updateQueryData("get", arg.url, (draft) => {
              let c = draft.find((i) => i.id === arg.id);

              if (c) {
                c.status = arg.data.status;
                c.taskName = arg.data.taskName;
                c.teamMember = arg.data.teamMember;
                c.project = arg.data.project;
                c.deadline = arg.data.deadline;
              }
            })
          );
        }

        if (arg.__id) {
          dispatchData2 = dispatch(
            apiSlice.util.updateQueryData(
              "get",
              `tasks?__id_like=${arg?.__id}`,
              (draft) => {
                draft[0].status = arg.data.status;
                draft[0].taskName = arg.data.taskName;
                draft[0].teamMember = arg.data.teamMember;
                draft[0].project = arg.data.project;
                draft[0].deadline = arg.data.deadline;
              }
            )
          );
        }

        try {
          await queryFulfilled;
        } catch (error) {
          if(arg.url === "tasks") {
            dispatchData1.undo();
          }
          
          if(arg.__id) {
            dispatchData2.undo();
          }
        }
      },
    }),
  }),
});

export const { usePatchDataMutation } = updateApi;
