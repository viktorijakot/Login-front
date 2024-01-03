import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const LOGIN_URL = "http://localhost:3000/api/auth/login";
  const REGISTER_URL = "http://localhost:3000/api/auth/register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reapeatPassword, setrepeatPassword] = useState("");
  const [page, setPage] = useState(false);
  const [register, setRegister] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setPage(false);
    setRegister(false);
  }, []);

  const handleSubimt = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(LOGIN_URL, data)
      .then((resp) => {
        console.log("resp ===", resp);
        if (resp.status === 200) {
          setEmail("");
          setPassword("");
          setPage(true);
          setErrorMsg("");
          setSuccessMsg("");
        }
      })
      .catch((error) => {
        console.warn("ivyko klaida:", error);
        const { status, data } = error.response;
        if (status === 400) {
          console.log("data ===", data);
          setErrorMsg(data);
        }
      });
  };

  const handleRegisterSubimt = (e) => {
    e.preventDefault();
    if (password === reapeatPassword) {
      const formatedDate = new Date().toLocaleDateString("lt-LT", {
        dateStyle: "short",
      });
      const newUser = {
        email: email,
        password: password,
        created_at: formatedDate,
      };
      axios
        .post(REGISTER_URL, newUser)
        .then((resp) => {
          console.log("resp ===", resp);
          if (resp.status === 200) {
            setEmail("");
            setPassword("");
            setRegister(false);
            setSuccessMsg("Your account is created!");
          }
        })
        .catch((error) => {
          console.warn("ivyko klaida:", error);
          const { status, data } = error.response;
          if (status === 500) {
            console.log("data ===", data);
            setErrorMsg(data);
          }
        });
    } else {
      const msg = "Password is not the same";
      setErrorMsg(msg);
    }
  };

  return (
    <FormContext.Provider
      value={{
        handleSubimt,
        setEmail,
        setPassword,
        email,
        password,
        errorMsg,
        page,
        setRegister,
        register,
        setrepeatPassword,
        reapeatPassword,
        handleRegisterSubimt,
        successMsg,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
