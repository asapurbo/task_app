import { useGetQuery } from "../../../features/get/getApi";
import ProjectsItem from "./ProjectsItem";
import useMap from '../../../hook/useMap'

const ProjectsList = () => {
  const projectsData = useGetQuery("projects");

  // has been created a map hook, You will find it in the hook folder
  const fn = useMap()

  let content = fn(projectsData, (data) => {
    return data.map((item) => {
      const { id } = item;

      return <ProjectsItem key={id} info={item} />;
    })
  }).content

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default ProjectsList;
