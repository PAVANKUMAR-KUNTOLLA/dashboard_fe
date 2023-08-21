import React, { useState, useEffect } from "react";
import Page from "../../components/Page";

import PieChart from "../../components/charts/PieChart";
import MainCard from "../../components/MainCard";

import Api from "../../components/Api";
import { privateApiGET } from "../../components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import CardItems from "../../components/CardItem/card";
import SchedulerItem from "../../components/CardItem/Scheduler";
import LineChart from "../../components/charts/LineChart";

const customStyles = {
  title: {
    position: "absolute",
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "29px",
    letterSpacing: "0em",
    textAlign: "left",

    width: "138px",
    height: "29px",
    marginTop: "0",
    marginBottom: "0",
  },

  searchInput: {
    position: "relative", // Change to relative
    width: "180px",
    height: "30px",
    left: "713px",
    borderRadius: "10px #FFFFFF",
    right: "0px",
    margin: "0px",
    backgroundImage: 'url("/static/img/Buttonsearch.svg")',
  },
  searchInputName: {
    position: "absolute", // Change to absolute
    height: "17px",
    top: "-6px",
    left: "20px", // Move to the left corner
    color: "#B0B0B0",

    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "17px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  searchInputlogo: {
    position: "absolute",
    width: "12px",
    height: "12px",
    top: "9px",
    right: "20px", // Move to the right corner

    border: "1px  #858585",
  },
};
const HomePage = () => {
  const profile = useSelector((state) => state.app.profile);

  return (
    <Page title="home">
      <div>
        <div
          style={{
            position: "absolute",
            left: "380px",
            width: "1000px",
            height: "30px",
            top: "60px",
            display: "flex", // Add flex display for better alignment
            alignItems: "center", // Center vertically within the container
          }}
        >
          <p style={customStyles.title}>Dashboard</p>
          <div style={customStyles.searchInput}>
            <p style={customStyles.searchInputName}>Search...</p>
            <img
              src="/static/img/Search.svg"
              style={customStyles.searchInputlogo}
            />
          </div>
          <img
            src="/static/img/Notification.svg"
            alt="notification"
            style={{
              left: "923px",
              position: "absolute",
              width: "18px",
              height: "20px",
            }}
          />
          <img
            src="/static/img/Profile.svg"
            alt="profile"
            style={{
              left: "970px",
              position: "absolute",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "380px",
          }}
        >
          <CardItems />
        </div>
        <div
          style={{
            position: "absolute",
            top: "289px",
            left: "380px",
            width: "1000px",
            height: "359px",
            margin: "0px",
            // overflow: "scroll",
            // maxHeight: "359px",
          }}
        >
          <LineChart />
        </div>
        <div
          style={{
            height: "256px",
            width: "480px",
            position: "absolute",
            top: "688px",
            left: "380px",
          }}
        >
          <MainCard
            cardTitle="Top Products"
            contentHeight="256px"
            isLoadingSpin={false}
            cardAction={
              // <select
              //   name="month"
              //   id="month"
              //   style={{ borderColor: "transparent", backgroundColor: "none" }}
              // >
              //   <option value="january">Jan-Feb</option>
              //   <option value="february">Feb-Mar</option>
              //   <option value="march">Mar-Apr</option>
              //   <option value="april">Apr-May</option>
              //   <option value="may">May-Jun</option>
              // </select>
              <p>
                May - June 2021
                <span style={{ paddingLeft: "5px" }}>
                  <img src="/static/img/Vectordropdown.svg" alt="drop down" />
                </span>
              </p>
            }
          >
            <PieChart />
          </MainCard>
        </div>
        <div
          style={{
            position: "absolute",
            left: "900px",
            top: "688px",
          }}
        >
          <SchedulerItem />
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
