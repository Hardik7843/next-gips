/* eslint-disable @typescript-eslint/no-unused-vars */

import HomePage2 from "@/components/HomePage";
import { Toaster } from "react-hot-toast";
// import HomePage2 from "../components/page";
// import { PrimeReactProvider } from 'primereact/api';

export default function Home() {
  return (
    <>
      <Toaster />
      <HomePage2 />
    </>
  );
}
