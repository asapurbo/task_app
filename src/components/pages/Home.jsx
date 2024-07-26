import ProjectsList from "../home/project/ProjectsList";
import TeamMembers from "../home/team/TeamMembers";
import TaskList from "../home/task/TaskList";
import AddIcon from "../home/add/AddIcon";

const Home = () => {
  return (
    <div className="text-[#111827]">
      <div className="container relative">
        <div className="sidebar">
          {/* <!-- Projects List --> */}
          <ProjectsList />

          {/* <!-- Team Members --> */}
          <TeamMembers />
        </div>

        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            {/* add */}
            <AddIcon />
            {/* add */}

            {/* task list */}
              <TaskList />
            {/* task list */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
