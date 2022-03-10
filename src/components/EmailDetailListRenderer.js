import { memo } from "react";
import { useParams } from "react-router-dom";
import EmailDetail from "./EmailDetail";
import EmailList from "./EmailList";

const EmailDetailListRenderer = () => {
  let { id } = useParams();
  console.log("ID: ", id);

  return <>{id ? <EmailDetail /> : <EmailList />}</>;
};

export default memo(EmailDetailListRenderer);
