import { toast } from "react-toastify";

const DataRenderer = ({ children, error, isLoading }) => {
  console.log(isLoading);
  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return toast.error(error);
  }

  return children;
};

export default DataRenderer;
