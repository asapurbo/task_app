import Error from "../components/ui/Error";

const useMap = () => {
  return (dataSet, fn) => {
    const { data, isError, error, isLoading } = dataSet || {};
    let content = null;

    if (isLoading && !isError) {
      content = <div>Loading......</div>;
    } else if (isError && !isLoading) {
      content = <Error message={error.error} />;
    } else if (!isError && !isLoading && data?.length === 0) {
      content = <Error message="Item is not found!" />;
    } else if (!isError && !isLoading && data?.length > 0) {
      content = fn(data);
    }

    return {
        content
    };
  };
};

export default useMap;
