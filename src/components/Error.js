import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      className="error-container"
      style={{
        position: "relative",
        top: "240px",
        backgroundColor: "orange",
        width: "320px",
        textAlign: "center",
        padding: "20px",
        borderRadius: "20px",
        margin: "auto",
      }}
    >
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
      <br />
      <p>
        <b>{`${err.statusText} : ${err.status}`}</b>
      </p>
    </div>
  );
};

export default Error;
