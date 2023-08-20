import React from "react";
import Page from "../../components/Page";

const customStyles = {
  mainBlock: {
    display: "flex",
    flexDirection: "row",
    height: "1024px",
  },
  leftSide: {
    width: "588px",
    backgroundColor: "#000000",
  },
  title: {
    width: "246px",
    height: "88px",
    marginTop: "464px",
    marginLeft: "171px",
    fontFamily: "Montserrat",
    fontSize: "72px",
    lineHeight: "87.7px",
    color: "#FFFFFF",
  },
  rightSide: {
    width: "852px",
    backgroundColor: "#F5F5F5",
  },
  signIn: {
    width: "131px",
    marginTop: "260px",
    marginLeft: "244px",
    fontFamily: "Montserrat",
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "43.88px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#000000",
    marginBottom: "0px",
  },
  signInAccount: {
    width: "161px",
    marginLeft: "244px",
    marginTop: "6px",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19.2px",
    letterSpacing: "0em",
    color: "#000000",
  },
  loginForm: {
    width: "385px",
    height: "356px",
    marginTop: "409px",
    marginLeft: "832px",
    borderRadius: "10px",
    border: "1px  #999999",
  },
};

const SignInPage = () => {
  return (
    <Page title="signin">
      <div style={customStyles.mainBlock}>
        <div style={customStyles.leftSide}>
          <p style={customStyles.title}>Board.</p>
        </div>
        <div style={customStyles.rightSide}>
          <p style={customStyles.signIn}>Sign In</p>
          <p style={customStyles.signInAccount}>Sign in to your account</p>
          <div style={customStyles.loginForm}></div>
        </div>
      </div>
    </Page>
  );
};

export default SignInPage;
