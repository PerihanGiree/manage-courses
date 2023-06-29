import React from "react";
import { dashboardTypes } from "@/src/types";

const Card: React.FC<dashboardTypes.DashboardCategoryType> = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.count}</p>
    </div>
  );
};

export default Card;
