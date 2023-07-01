/* eslint-disable @next/next/no-img-element */
import { paginationDatas } from "@/src/constans";
import { routeHelper } from "@/src/helpers";
import { userTypes } from "@/src/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Edit from "../../public/pen 1.svg";
import Delete from "../../public/trash 1.svg";
import ArrowLeft from "../../public/arrow - left.svg";
import ArrowRight from "../../public/arrow - right.svg";
import Dropdown from "../../public/dropdown.svg";

type PropsType = {
  headerTitles: {
    id: number;
    title: string;
    className: string;
  }[];
  users: userTypes.User[];
  total: number;
};

const UserTable: React.FC<PropsType> = ({ headerTitles, users, total }) => {
  const [currentPage, setCurrentPage] = useState<number>(10);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [pageInfoText, setPageInfoText] = useState<string>("");

  const router = useRouter();
  const { limit, offset, search } = router.query;

  const handleChangePage = (key: "increment" | "decrement"): void => {
    const query: any = {};
    const lastLimit = limit || paginationDatas.perPage;

    query.limit = lastLimit;
    if (key === "increment") {
      query.offset = offset ? Number(offset) + Number(lastLimit) : lastLimit;
    } else {
      query.offset = offset ? Number(offset) - Number(lastLimit) : lastLimit;
    }

    if (search) {
      query.search = search;
    }

    const url = routeHelper.addQueryPArameters("/students", query);
    router.push(url);
  };

  useEffect(() => {
    if (offset === "0" || offset == undefined) {
      setCurrentPage(1);
    } else {
      setCurrentPage(Number(offset) / Number(limit) + 1);
    }
  }, [limit, offset]);

  useEffect(() => {
    let text = "";
    if (limit) {
      text =
        ((currentPage - 1) * Number(limit) + 1) +
        " - " +
        currentPage * Number(limit) +
        " of " +
        total;
    } else {
      text =
        ((currentPage - 1) * Number(paginationDatas.perPage) + 1) +
        " - " +
        currentPage * Number(paginationDatas.perPage) +
        " of " +
        total;
    }
    setPageInfoText(text);
  }, [currentPage]);

  const handleChangePerPage = (value: number) => {
    const query: any = {};

    query.limit = value;
    query.offset = 0;
    if (search) {
      query.search = search;
    }

    const url = routeHelper.addQueryPArameters("/students", query);
    setDropdownVisible(false);
    router.push(url);
  }

  return (
    <div>
      <table className="w-full flex flex-col mb-8 ">
        <thead className="w-full my-5">
          <tr className="px-3 w-full h-[15px] flex flex-row text-left">
            {headerTitles.map((title) => (
              <th className={title.className} key={title.id}>
                <span className="font-semibold text-[12px] mt-2  text-[#ACACAC]">
                  {title.title}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full h-[70vh] overflow-auto">
          {users.map((user) => (
            <tr
              key={user.id}
              className="w-full h-[85px] flex flex-row  bg-white  items-center mt-2 px-3"
            >
              <td className={`${headerTitles[0].className}`}>
                <img
                  className="w-[65px] h-[65px] object-contain rounded-md bg-[#f8f8f8]"
                  src={user.image}
                  alt="avatar"
                />
              </td>
              <td className={`${headerTitles[1].className}`}>
                <span className="whitespace-nowrap">
                  {user.firstName} {user.lastName}
                </span>
              </td>
              <td className={`${headerTitles[2].className}`}>{user.email}</td>
              <td className={`${headerTitles[3].className}`}>{user.phone}</td>
              <td className={`${headerTitles[4].className}`}>{user.domain}</td>
              <td className={`${headerTitles[5].className}`}>
                {user.company.name}
              </td>
              <td className={`${headerTitles[6].className} text-right pr-4`}>
                <button className="mr-8">
                  <img src={Edit} alt="" />
                </button>
                <button>
                  <img src={Delete} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" w-full flex justify-end">
        <div className="mr-12 flex flex-col items-end ">
          <div className="flex flex-row items-center">
            <span className="text-sm2 text-[#9FA2B4] leading-5 tracking-wide mr-1">
              Rows per page:
            </span>
            <button
              className="text-sm2 text-[#9FA2B4] flex flex-col items-center"
              onClick={() => setDropdownVisible((v) => !v)}
            >
              <div className="flex flex-row items-center">
                <span>{limit || paginationDatas.perPage}</span>
                <img src={Dropdown} alt="" />
              </div>
            </button>
          </div>
          {dropdownVisible && (
            <div className="left-4 z-10  bg-white rounded-lg shadow w-12">
              <ul className="py-2 flex flex-col justify-center items-center">
                {paginationDatas.perPageList.map((val) => (
                  <button
                    key={val}
                    onClick={() => handleChangePerPage(val)}
                    className={`w-full block border-b ${
                      limit
                        ? val === Number(limit)
                          ? "bg-red-500"
                          : ""
                        : val === paginationDatas.perPage
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="w-24 h-5 mr-5">
          <span className="text-sm2 text-[#9FA2B4] leading-5 tracking-wide">
            {pageInfoText}
          </span>
        </div>
        <div>
          <button onClick={() => handleChangePage("decrement")}>
            <img src={ArrowLeft} alt="" />
          </button>
          <button onClick={() => handleChangePage("increment")}>
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
