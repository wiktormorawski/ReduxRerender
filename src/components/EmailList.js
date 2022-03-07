import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Email from "./Email";
import UnreadEmailsCounter from "./UnreadEmailsCounter";

const EmailList = () => {
  const navigate = useNavigate();
  const emails = useSelector((state) => state.emails);
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Hello</h1>
      <UnreadEmailsCounter />
      {emails.map((email) => (
        <Email key={email.id} data={email} navigate={navigate} />
      ))}
    </div>
  );
};
export default memo(EmailList);
