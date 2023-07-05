/* eslint-disable @next/next/no-img-element */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import bell from "../public/bell 1.svg";
import caret from "../public/caret-circle-down 1.svg";
import Sidebar from "@/components/layout/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === "/login") {
    return <Component {...pageProps} />;
  }
  return (
    <div className="w-screen h-screen flex flex-row">
      <Sidebar />
      <div className="w-full max-w-full">
        <div className="h-[60px] px-5 w-full flex flex-row justify-between items-center ">
          <img src={caret} alt="caret" />
          <img src={bell} alt="bell" />
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
