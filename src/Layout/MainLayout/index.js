import React, { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProfile } from "../../redux/app/appSlice";
import Navbar from "../MinimalLayout";

const AppLayout = () => {
  const profile = useSelector((state) => state.app.profile);
  const [isLoadingSpin, SetIsLoadingSpin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    SetIsLoadingSpin(true);
    axios({
      method: "GET",
      url: `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        dispatch(setProfile(res.data));
        SetIsLoadingSpin(false);
      })
      .catch((err) => {
        console.log(err.response);
        SetIsLoadingSpin(false);
        if (err.response.status === 401) {
          navigate("/login");
        }
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        margin: " auto 40px",
        height: "100vh",
      }}
    >
      {profile && !isLoadingSpin && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          <Navbar />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default AppLayout;
