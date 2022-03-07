import { memo } from "react";
import { connect } from "react-redux";
import { changeEmailUnreadCheckbox } from "../actions";

const Email = ({ data, navigate, changeEmailUnreadCheckbox }) => (
  <div className="EmailMain">
    <h3>FROM</h3>
    <h1>{data.from}</h1>
    <h3>DATE</h3>
    <h1>{data.sent_date}</h1>
    <h3>
      Is unread ? {"  "}
      <input
        type="checkbox"
        onChange={() => changeEmailUnreadCheckbox(data.id)}
        checked={data.is_unread}
      ></input>
    </h3>
    <button onClick={() => navigate("/details/" + data.id)}>
      Go to Details
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  changeEmailUnreadCheckbox: (id) => dispatch(changeEmailUnreadCheckbox(id)),
});

export default memo(connect(null, mapDispatchToProps)(Email));
