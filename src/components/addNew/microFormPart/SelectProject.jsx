import useOption from "../../../hook/useOption";

const SelectProject = ({...arg}) => {
  const { content } = useOption("projects", (data) => {
    return data.map((item) => {
      const { id, projectName } = item;
      return <option key={id}>{projectName}</option>;
    });
  });

  return (
    <div className="fieldContainer">
      <label htmlFor="lws-projectName">Project Name</label>
      {content.type !== "div" && content?.type?.name !== "Error" && (
        <select {...arg} name="teamMember" id="lws-teamMember" required>
          <option value="" hidden>
            Select Job
          </option>
          {content}
        </select>
      )}
      {content.type === "div" && content}
      {content?.type?.name === "Error" && content}
    </div>
  );
};

export default SelectProject;
