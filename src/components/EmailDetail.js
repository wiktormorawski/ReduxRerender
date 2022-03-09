import { connect, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeEmailUnreadCheckbox } from "../actions";

const EmailDetail = ({ changeEmailUnreadCheckbox }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const email = useSelector(
    (state) => state.emails.filter((email) => email.id === parseInt(id))[0]
  );
  if (email) {
    return (
      <div className="EmailMain">
        <h1>Details {id}</h1>
        <h3>ID</h3>
        <h1>{email.id}</h1>
        <h3>FROM</h3>
        <h1>{email.from}</h1>
        <h3>DATE</h3>
        <h1>{email.sent_date}</h1>
        <h3>
          Is unread ? {"  "}
          <input
            type="checkbox"
            onChange={() => changeEmailUnreadCheckbox(email.id)}
            checked={email.is_unread}
          ></input>
        </h3>
        <h3>SUBJECT</h3>
        <h1>{email.subject}</h1>

        <h3>SNIPPET</h3>
        <h1>{email.snippet}</h1>

        <button onClick={() => navigate(-1)}>Go Home</button>
      </div>
    );
  }
  if (id) {
    return <h2>Not found email with that id :(</h2>;
  }
  return <></>;
};

const mapDispatchToProps = (dispatch) => ({
  changeEmailUnreadCheckbox: (id) => dispatch(changeEmailUnreadCheckbox(id)),
});

export default connect(null, mapDispatchToProps)(EmailDetail);
