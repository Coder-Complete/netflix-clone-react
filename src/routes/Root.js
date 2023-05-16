import React from "react";
import { Outlet } from "react-router-dom";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import Nav from "../Nav.js";

function Root() {
  return (
    <div className="app">
      {/* <Nav /> */}
      <main>
        <Outlet />
      </main>
      {/* <BottomScrollListener onBottom={fetchData} debounce={1000} /> */}
    </div>
  );
}

export default Root;
