import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UnreadEmailsCounter from "./UnreadEmailsCounter";
import RenderChunk from "./RenderChunk";

const EmailList = () => {
  // const navigate = useNavigate();
  const emails = useSelector((state) => state.emails);
  const renderChunksOfEmails = useCallback((emails, chunkSize) => {
    const res = [];
    for (let i = 0; i < emails.length; i += chunkSize) {
      const chunk = emails.slice(i, i + chunkSize);
      res.push({ id: i, chunk });
    }
    return res.map((emailChunk) => (
      <RenderChunk key={emailChunk.id} chunk={emailChunk} />
    ));
  }, []);
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Hello</h1>
      <UnreadEmailsCounter />
      {renderChunksOfEmails(emails, 2)}
    </div>
  );
};
export default EmailList;
