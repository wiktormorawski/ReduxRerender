import { memo } from "react";
import { useParams } from "react-router-dom";
import EmailDetail from "./EmailDetail";
import EmailList from "./EmailList";

const EmailDetailListRenderer = () => {
  let { id } = useParams();
  console.log("ID: ", id);

  return (
    <>
      <div style={id && { display: "unset" }}>
        <EmailDetail />
      </div>
      <div style={id && { display: "none" }}>
        <EmailList />
      </div>
    </>
  );
};

export default memo(EmailDetailListRenderer);
