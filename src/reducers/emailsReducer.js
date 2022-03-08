import { changeUnread } from "../actions/types";

let initialState = [];

for (let i = 0; i < 5; i++) {
  initialState.push({
    id: 100795227 + i,
    from: `Walutomat ${i} - Onet <mailingi@onet.pl>`,
    sent_date: "2021-12-13 09:00:02",
    is_unread: false,
    subject: "Wymień walutę szybko i tanio",
    snippet: "Odbierz 50% rabatu na wymianę online",
  });
}

const initialState2 = [
  {
    id: 100795229,
    from: "Kalkulator OC/AC - Onet <mailingi@onet.pl>",
    sent_date: "2021-12-13 09:00:03",
    is_unread: true,
    subject: "Zaoszczędź! OC już od 230 zł",
    snippet: "",
  },
  {
    id: 100795227,
    from: "Walutomat - Onet <mailingi@onet.pl>",
    sent_date: "2021-12-13 09:00:02",
    is_unread: false,
    subject: "Wymień walutę szybko i tanio",
    snippet: "Odbierz 50% rabatu na wymianę online",
  },
  {
    id: 100795230,
    from: "Salon - Onet <mailingi@onet.pl>",
    sent_date: "2021-12-13 09:00:03",
    is_unread: true,
    subject: "CHodz! OC już od 230 zł",
    snippet: "fjksbgrbdg",
  },
  {
    id: 100795231,
    from: "Myjnia - Onet <mailingi@onet.pl>",
    sent_date: "2021-12-13 09:00:03",
    is_unread: true,
    subject: "Przyjedz do nas",
    snippet: "fshfsgisr",
  },
];
const emailsReducer = (state = initialState2, action) => {
  switch (action.type) {
    case changeUnread:
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, is_unread: !item.is_unread }
          : item;
      });
    default:
      return state;
  }
};

export default emailsReducer;
