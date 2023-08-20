import React, { useState, useEffect } from "react";
import Page from "../../components/Page";

import Api from "../../components/Api";
import { privateApiGET } from "../../components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const profile = useSelector((state) => state.app.profile);

  return (
    <Page title="home">
      <div style={{ position: "absolute", left: "380px" }}>
        <h1>Hello</h1>
      </div>
    </Page>
  );
};

export default HomePage;
