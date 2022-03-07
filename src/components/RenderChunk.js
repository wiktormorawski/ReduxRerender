import { memo, useRef, useEffect } from "react";
import Email from "./Email";

function useTraceUpdate(props) {
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log("Changed props RENDER CHUNK:", changedProps);
    }
    prev.current = props;
  });
}

const RenderChunk = ({ chunk }) => {
  useTraceUpdate(chunk);
  return (
    <div key={chunk.id} style={{ border: "1px solid white" }}>
      {chunk.chunk.map((email) => (
        <Email key={email.id} data={email} />
      ))}
    </div>
  );
};
export default memo(RenderChunk);
