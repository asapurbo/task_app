import { useEffect, useState } from "react";
import AssignTo from "./microFormPart/AssignTo";
import SelectProject from "./microFormPart/SelectProject";
import { usePostMutation } from "../../features/post/postApi";
import { useGetQuery } from "../../features/get/getApi";
import useMap from "../../hook/useMap";
import { useNavigate, useParams } from "react-router-dom";
import _idCreator from "../../lib/_idCreator";
import { usePatchDataMutation } from "../../features/update/updateApi";

const Form = () => {
  const [task, setTask] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [skip, setSkip] = useState(true);


  // edit-task params form start
  const [patchData, {isSuccess: updateIsSuccess}] = usePatchDataMutation();
  const { id: params } = useParams();
  const DataWillBeEdited = useGetQuery(`tasks?__id_like=${params}`, {
    skip: skip,
  });

  useEffect(() => {
    if (params) {
      setSkip(false);
    }
  }, [params]);
  // edit-task params form end

  // add-new form start
  const [post, { isSuccess }] = usePostMutation();
  const navigate = useNavigate();

  const teamsData = useGetQuery("team");
  const projectsData = useGetQuery("projects");

  const fn = useMap();

  let teamAllData = fn(teamsData, (data) => {
    return data;
  }).content;

  let projectsAllData = fn(projectsData, (data) => {
    return data;
  }).content;

  function handleSubmitAddNew(_) {
    _.preventDefault();

    let _x =
      Array.isArray(teamAllData) && Array.isArray(projectsAllData)
        ? true
        : false;

    if (_x) {
      const teamMember = teamAllData?.find((t) => t.name === assignTo);

      const project = projectsAllData?.find(
        (p) => p.projectName === projectName
      );

      post({
        data: {
          taskName: task,
          teamMember,
          project,
          deadline,
          status: "pending",
          __id: _idCreator(),
        },
        url: "tasks",
      });
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setAssignTo("");
      setTask("");
      setProjectName("");
      setDeadline("");
      navigate("/");
    }
  }, [isSuccess, navigate]);
  // add-new form end


  const data = fn(DataWillBeEdited, (data) => {
    return data;
  }).content;


  // edit-task form start
  useEffect(() => {
    if (params) {
     
      if (
        Array.isArray(data) &&
        !task &&
        !assignTo &&
        !projectName &&
        !deadline
      ) {
        const { taskName, teamMember, project, deadline } = data[0] ?? {};
        
        setTask(taskName);
        setAssignTo(teamMember?.name);
        setProjectName(project?.projectName);
        setDeadline(deadline);
        
        setSkip(false);
      }
    }
  }, [DataWillBeEdited, params, task, assignTo, projectName, deadline, data]);

  function handleSubmitEndTask(_) {
    _.preventDefault();
    // update feature

    const data = fn(DataWillBeEdited, (data) => {
      return data;
    }).content;

    if (Array.isArray(data)) {
      const { id, __id } = data[0] ?? {};

      let _x =
        Array.isArray(teamAllData) && Array.isArray(projectsAllData)
          ? true
          : false;

      if (_x) {
        const teamMember = teamAllData?.find((t) => t.name === assignTo);

        const project = projectsAllData?.find(
          (p) => p.projectName === projectName
        );

        patchData({
          data: {
            taskName: task,
            teamMember,
            project,
            deadline,
          },
          id,
          url: "tasks",
          __id
        });
        
      }
    }
  }

  useEffect(() => {
    if(updateIsSuccess) {
      navigate('/')
    }
  }, [updateIsSuccess, navigate])
  // edit-task form end

  return (
    <form
      className="space-y-6"
      onSubmit={params ? handleSubmitEndTask : handleSubmitAddNew}
    >
      <div className="fieldContainer">
        <label htmlFor="lws-taskName">Task Name</label>
        <input
          type="text"
          name="taskName"
          id="lws-taskName"
          required
          placeholder="Implement RTK Query"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      {/* Assign to */}
      <AssignTo
        value={assignTo}
        onChange={(e) => setAssignTo(e.target.value)}
      />
      {/* Assign to */}

      {/* select project */}
      <SelectProject
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      {/* select project */}

      <div className="fieldContainer">
        <label htmlFor="lws-deadline">Deadline</label>
        <input
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          type="date"
          name="deadline"
          id="lws-deadline"
          required
        />
      </div>

      <div className="text-right">
        <button type="submit" className="lws-submit px-8 py-3 bg-[#981818]">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
