import React, { useState, useEffect } from "react";
import Page from "../../components/Page";

import Api from "../../components/Api";
import { privateApiGET } from "../../components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <Page title="home">
      <h1>Welcome</h1>
    </Page>
  );
};

export default HomePage;
