import useOption from "../../../hook/useOption";

const AssignTo = ({...arg}) => {
  const { content } = useOption("team", (data) => {
    return data.map((item) => {
      const { id, name } = item;
      return <option key={id}>{name}</option>;
    });
  });


  return (
    <div className="fieldContainer">
      <label>Assign To</label>
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

export default AssignTo;
