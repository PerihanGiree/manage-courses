import { dashboardTypes } from "@/src/types";
import Student from "../../../public/graduation-cap-blue.svg";
import Payments from "../../../public/usd-square-orange.svg";
import Bookbark from "../../../public/bookmark-pink.svg";
import Users from "../../../public/Vector-white.svg";

export const DashboardCategory: dashboardTypes.DashboardCategoryType[] = [
  {
    title: "Students",
    count: "243",
    icon: Student,
    index: 0,
  },
  {
    title: "Course",
    count: "13",
    icon: Bookbark,
    index: 1,
  },

  {
    title: "Payments",
    count: "556,000 ₺",
    icon: Payments,
    index: 2,
  },
  {
    title: "Users",
    count: "3",
    icon: Users,
    index: 3,
  },
];
