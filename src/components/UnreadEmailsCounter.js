import { useSelector } from "react-redux";

const UnreadEmailsCounter = () => {
  const emailsUnreadAmount = useSelector((state) =>
    state.emails.filter((email) => email.is_unread)
  ).length;
  return <h2>Emails unread - {emailsUnreadAmount}</h2>;
};

export default UnreadEmailsCounter;
