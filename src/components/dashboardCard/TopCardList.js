import icon_events_big from "../../assets/images/dashboard/icon_events_big.svg";
import icon_expenses_big from "../../assets/images/dashboard/icon_expenses_big.svg";
import icon_goals_big from "../../assets/images/dashboard/icon_goals_big.svg";
import icon_polls_big from "../../assets/images/dashboard/icon_polls_big.svg";
import icon_profile_big from "../../assets/images/dashboard/icon_profile_big.svg";
import icon_usage_big from "../../assets/images/dashboard/icon_usage_big.svg";

const TopCardList = [
  {
    id: 1,
    icon: icon_goals_big,
    title: "Goals",
    subtext: "12 Months",
    count1: "23",
    text1: "Completed",
    count2: "35",
    text2: "Created",
  },
  {
    id: 2,
    icon: icon_polls_big,
    title: "Polls",
    subtext: "",
    count1: "12",
    text1: "Closed",
    count2: "35",
    text2: "Created",
  },
  {
    id: 3,
    icon: icon_events_big,
    title: "Events",
    subtext: "",
    count1: "07",
    text1: "Upcoming",
    count2: "15",
    text2: "Past",
  },
  {
    id: 4,
    icon: icon_usage_big,
    title: "Usage",
    subtext: "",
    count1: "44",
    text1: "Users",
    count2: "15",
    text2: "Pending",
  },
  {
    id: 5,
    icon: icon_profile_big,
    title: "Profile",
    subtext: "",
    count1: "45%",
    text1: "Completion Rate",
    count2: "",
    text2: "",
  },
  {
    id: 6,
    icon: icon_expenses_big,
    title: "Expenses",
    subtext: "",
    count1: "16",
    text1: "Pending",
    count2: "35",
    text2: "Submitted",
  },
];

export default TopCardList;
