import { memo, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UnreadEmailsCounter from "./UnreadEmailsCounter";
import RenderChunk from "./RenderChunk";
import useTraceUpdate from "../utils/useTraceTracker";

const EmailList = (props) => {
  useTraceUpdate(props);
  const navigate = useNavigate();
  const amountOfemails = useSelector((state) => state.emails.length);
  const arr = new Array(amountOfemails).fill(undefined);
  console.log("Render: EmailList, props", props);
  // const renderChunksOfEmails = useCallback((emails, chunkSize) => {
  //   const res = [];
  //   for (let i = 0; i < emails.length; i += chunkSize) {
  //     const chunk = emails.slice(i, i + chunkSize);
  //     res.push({ id: i, chunk });
  //   }
  //   return res.map((emailChunk) => (
  //     <RenderChunk key={emailChunk.id} chunk={emailChunk} />
  //   ));
  // }, []);

  return useMemo(
    () => (
      <div style={{ backgroundColor: "red" }}>
        <h1>Hello</h1>
        <UnreadEmailsCounter />
        {arr.map((_, index) => (
          <RenderChunk key={index} id={index} navigate={navigate} />
        ))}
      </div>
    ),
    []
  );
};
export default memo(EmailList);
