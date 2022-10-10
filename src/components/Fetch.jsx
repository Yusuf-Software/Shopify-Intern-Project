//

import useFetch from "../hooks/useFetch";

const Input = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) {
    return <div>Loading </div>;
  }

  if (error) {
    console.log("error:" + error);
  }
  if (data) console.log(data);
  return <div></div>;
};

export default Input;
