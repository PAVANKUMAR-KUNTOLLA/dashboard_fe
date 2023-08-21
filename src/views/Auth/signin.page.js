import React from "react";
import Page from "../../components/Page";

import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const montserrat = {
  fontFamily: "Montserrat",
  fontWeight: "700",
};

const lato = {
  fontFamily: "Lato",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19.2px",
};

const customStyles = {
  mainBlock: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    margin: "auto",
    height: "1024px",
  },
  leftSide: {
    width: "588px",
    backgroundColor: "#000000",
  },
  title: {
    ...montserrat,
    fontSize: "72px",
    marginTop: "464px",
    marginLeft: "171px",
    lineHeight: "87.7px",
    color: "#FFFFFF",
  },
  rightSide: {
    width: "852px",
    backgroundColor: "#F5F5F5",
    position: "relative",
  },
  signIn: {
    ...montserrat,
    width: "131px",
    position: "absolute",
    top: "260px",
    marginLeft: "244px",
    fontSize: "36px",
    lineHeight: "43.88px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#000000",
    marginBottom: "0px",
    marginTop: "0px",
  },
  signInAccount: {
    ...lato,
    width: "161px",
    position: "absolute",
    top: "309px",
    marginLeft: "244px",
    letterSpacing: "0em",
    color: "#000000",
    marginBottom: "0px",
    marginTop: "0px",
  },
  loginForm: {
    width: "385px",
    position: "absolute",
    top: "354px",
    marginLeft: "244px",
    display: "flex",
    justifyContent: "space-between",
  },
  loginCard: {
    width: "385px",
    height: "317px",
    position: "relative",
    top: "409px",
    marginLeft: "244px",
    radius: "20px",
    backgroundColor: "#FFFFFF",
    border: "1px  #999999",
    borderRadius: "10px",
  },
  email: {
    ...lato,
    width: "96px",
    position: "absolute",
    top: "30px",
    left: "30px",
    color: "#000000",
    marginBottom: "0px",
    marginTop: "0px",
  },
  inputEmail: {
    position: "absolute",
    width: "325px",
    height: "40px",
    top: "60px",
    left: "30px",
    backgroundColor: "#F5F5F5",
  },
  inputEmailText: {
    ...lato,
    position: "absolute",
    top: "-7px", // Center vertically within inputEmail
    left: "10px", // Adjusted left position
    width: "142px", // Adjusted width
  },

  password: {
    ...lato,
    width: "96px",
    position: "absolute",
    top: "120px",
    left: "30px",
    color: "#000000",
    marginBottom: "0px",
    marginTop: "0px",
  },
  passwordInput: {
    position: "absolute",
    width: "325px",
    height: "40px",
    top: "150px", // Adjusted top position for password
    left: "30px",
    backgroundColor: "#EAEAEA",
  },
  passwordInputText: {
    ...lato,
    position: "absolute",
    top: "-7px", // Center vertically within passwordInput
    left: "10px", // Adjusted left position
    width: "142px", // Adjusted width
    color: "#000000",
  },
  forgetPassword: {
    ...lato,
    color: "#346BD4",
    position: "absolute",
    top: "210px",
    left: "30px",
  },
  buttonSignIn: {
    position: "absolute",
    width: "325px",
    height: "40px",
    top: "247px",
    left: "30px",
    borderRadius: "10px",
    backgroundColor: "#000000",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonSignInName: {
    ...montserrat,

    fontSize: "16px",
    paddingTop: "10px",
    color: "#FFFFFF",
    margin: "0 auto",
  },
  register: {
    ...lato,
    position: "absolute",
    top: "736px",
    color: "#858585",
    marginLeft: "244px",
    width: "385px",
    textAlign: "center",
  },
};

const SignInPage = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      window.localStorage.setItem("token", codeResponse.access_token);
      navigate("/");
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <Page title="signin">
      <div style={customStyles.mainBlock} className="loginMainBlock">
        <div className="signinLeftSide" style={customStyles.leftSide}>
          <p className="signinTitleLeftSide" style={customStyles.title}>
            Board.
          </p>
        </div>
        <div style={customStyles.rightSide} className="loginRightSide">
          <p className="signinTitle" style={customStyles.signIn}>
            Sign In
          </p>
          <p className="signinAccount" style={customStyles.signInAccount}>
            Sign in to your account
          </p>
          <div className="signinLoginForm" style={customStyles.loginForm}>
            <img
              src="/static/img/Google Sign Ingoogle.svg"
              alt="sign in with google"
              onClick={login}
              style={{ cursor: "pointer" }}
            />
            <img src="/static/img/Apple Sign Inapple.svg" />
          </div>
          <div className="signinLoginCard" style={customStyles.loginCard}>
            <p className="email" style={customStyles.email}>
              Email&nbsp;address
            </p>

            <div className="inputEmail" style={customStyles.inputEmail}>
              <p className="inputEmailText" style={customStyles.inputEmailText}>
                johndoe@gmail.com
              </p>
            </div>
            <p className="password" style={customStyles.password}>
              Password
            </p>

            <div className="passwordInput" style={customStyles.passwordInput}>
              <p
                className="passwordInputText"
                style={customStyles.passwordInputText}
              >
                ••••••••
              </p>
            </div>
            <div className="forgotPassword" style={customStyles.forgetPassword}>
              <a>Forgot password?</a>
            </div>

            <div className="buttonSignIn" style={customStyles.buttonSignIn}>
              <p
                className="buttonSignInName"
                style={customStyles.buttonSignInName}
              >
                Sign In
              </p>
            </div>
          </div>
          <p className="signinRegister" style={customStyles.register}>
            Don’t have an account?{" "}
            <span style={{ color: "#346BD4" }}>Register here</span>
          </p>
        </div>
      </div>
    </Page>
  );
};

export default SignInPage;
