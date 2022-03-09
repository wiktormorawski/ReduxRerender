import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeEmailUnreadCheckbox } from "../actions";
import useTraceUpdate from "../utils/useTraceTracker";

const Email = ({ data, navigate }) => {
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
      <button onClick={() => navigate("/details/" + data.id)}>
        Go to Details
      </button>
    </div>
  );
};

export default memo(Email);
