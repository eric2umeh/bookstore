import React from 'react'
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
  )
}

export default Layout