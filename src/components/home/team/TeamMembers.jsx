import { useGetQuery } from "../../../features/get/getApi";
import useMap from "../../../hook/useMap";
import Members from "./Members";

const TeamMembers = () => {
  const teamData = useGetQuery("team");

  // has been created a map hook, You will find it in the hook folder
  const fn = useMap()

  let content = fn(teamData, (data) => {
    return data.map((item) => {
      const { id } = item;
      return <Members key={id} info={item} />;
    })
  }).content

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default TeamMembers;
