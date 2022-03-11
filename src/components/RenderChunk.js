import { memo, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Email from "./Email";

// function useTraceUpdate(props) {
//   const prev = useRef(props);
//   useEffect(() => {
//     const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
//       if (prev.current[k] !== v) {
//         ps[k] = [prev.current[k], v];
//       }
//       return ps;
//     }, {});
//     if (Object.keys(changedProps).length > 0) {
//       console.log("Changed props RENDER CHUNK:", changedProps);
//     }
//     prev.current = props;
//   });
// }

const RenderChunk = ({ id }) => {
  const email = useSelector((state) => state.emails[id]);
  return <Email key={email.id} data={email} />;
};
export default memo(RenderChunk);
