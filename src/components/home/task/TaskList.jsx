import { useSelector } from "react-redux";
import { useGetQuery } from "../../../features/get/getApi";

import TaskItem from "./TaskItem";
import useMap from "../../../hook/useMap";


const TaskList = () => {
  const tasksData = useGetQuery("tasks");
  const { filters, search } = useSelector((state) => state.filters);
  
  
  // has been created a map hook, You will find it in the hook folder
  const fn = useMap();

  let content = fn(tasksData, (data) => {
    return data
      .filter((i) => filters.indexOf(i.project.colorClass) > -1)
      .filter(i => i.taskName.toLowerCase().includes(search.toLowerCase()))
      .map((item) => {
        const { id } = item;
        return <TaskItem key={id} info={item} />;
      });
  }).content;

  return <div className="lws-task-list">{content}</div>;
};

export default TaskList;
