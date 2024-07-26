import { useState } from "react";
import { useDispatch } from "react-redux";
import { onFilter } from "../../../features/filter/filterSlice";

const ProjectsItem = ({ info }) => {
  const dispatch = useDispatch()
  // const {filter} = useSelector(state => state.filter)
  const { projectName, colorClass } = info ?? {};
  const [checked, setChecked] = useState(true);

  
  const handler = (info) => {
    setChecked((prevChecked) => !prevChecked);
    dispatch(onFilter(info))
  };

  
  
  return (
    
      <div className="checkbox-container">
        <input
          type="checkbox"
          className={colorClass}
          checked={checked}
          onChange={() => handler(info)}
        />
        <p className="label">{projectName}</p>
      </div>
 
  );
};



export default ProjectsItem;
