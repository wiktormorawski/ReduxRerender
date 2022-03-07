import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <h1 className="NotFound">
      Page was not found! Go back to{" "}
      <button onClick={() => navigate("/")}>HOME</button>
    </h1>
  );
};

export default NotFound;
