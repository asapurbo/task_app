import { useGetQuery } from "../features/get/getApi";
import useMap from "./useMap";

const useOption = (url, main) => {
  const dataSet = useGetQuery(url);
  const fn = useMap();
  let content = null;

  content = fn(dataSet, (data) => {
    return main(data);
  }).content;

  return {
    content,
  };
};

export default useOption;
