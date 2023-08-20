import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AppLayout = () => {
  const { initialAppLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <>
      {!initialAppLoading && (
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
