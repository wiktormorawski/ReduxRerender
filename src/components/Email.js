import { memo, useCallback, useRef, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { changeEmailUnreadCheckbox } from "../actions";

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
      console.log("Changed props:", changedProps);
    }
    prev.current = props;
  });
}

const Email = ({ data }) => {
  useTraceUpdate(data);

  const dispatch = useDispatch();
  const handleUnreadChange = useCallback(
    () => dispatch(changeEmailUnreadCheckbox(data.id)),
    []
  );

  return (
    <div className="EmailMain">
      <h3>FROM</h3>
      <h1>{data.from}</h1>
      <h3>DATE</h3>
      <h1>{data.sent_date}</h1>
      <h3>
        Is unread ? {"  "}
        <input
          type="checkbox"
          onChange={handleUnreadChange}
          checked={data.is_unread}
        ></input>
      </h3>
      {/* <button onClick={() => navigate("/details/" + data.id)}>
      Go to Details
    </button> */}
    </div>
  );
};

export default memo(Email);
