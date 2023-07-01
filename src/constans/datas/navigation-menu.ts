import { navigationTypes } from "@/src/types";
import Home from '../../../public/home-lg-alt 1.svg';
import Course from '../../../public/bookmark 1.svg';
import Student from '../../../public/graduation-cap 1.svg'
import Payment from '../../../public/usd-square 1.svg';
import Setting from '../../../public/sliders-v-square 1.svg';
import Report from '../../../public/file-chart-line 1.svg';

export const NavigationMenu: navigationTypes.NavigationMenuItemType[] = [
    {
        title: "Home",
        icon: Home,
        isActive: false,
        path: "/dashboard",
    }, 
    {
        title: "Course",
        icon: Course,
        isActive: false,
        path: '/course',
    },
    {
        title: "Students",
        icon: Student,
        isActive: false,
        path: '/students',
    },
    {
        title: "Payment",
        icon: Payment,
        isActive: false,
        path: '/payment',
    },
    {
        title: "Report",
        icon: Report,
        isActive: false,
        path: '/report',
    },
    {
        title: "Settings",
        icon: Setting,
        isActive: false,
        path: '/settings',
    }
]