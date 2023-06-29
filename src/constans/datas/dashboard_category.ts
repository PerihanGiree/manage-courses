import { dashboardCategoryType } from "@/src/types";
import Student from "../../../public/graduation-cap 1.svg"
import Payments from "../../../public/usd-square 1.svg"
import Bookbark from "../../../public/bookmark 1.svg"
import Users from "../../../public/Vector.svg"
export const DashboardCategory:dashboardCategoryType.dahboard_category_Type[]=[
    {
        title:"Students",
        count:"243",
        icon:Student,
        color:"#FDFDFD"

    },
    {
        title:"Course",
        count:"13",
        icon:Bookbark,
        color:"#FEF6FB"

    },

    {
        title:"Payments",
        count:"556,000$",
        icon:Payments,
        color:"#FEFBEC"

    },
    {
        title:"Users",
        count:"3",
        icon:Users,
        color:"#FEAF00"

    },

]