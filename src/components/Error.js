import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
  return (
    <>  
    <h1>Everything went Wrong</h1>
    <h2>{status +  " : "+ statusText}</h2>
    </>

  );
}

export default Error;