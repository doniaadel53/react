import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Home from "../home/home";


export default function Layout() {
  return (
    <>
    <Navbar />
    <Outlet></Outlet>
      <Home />

    </>
  )
}
