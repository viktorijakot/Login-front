import Login from "./Login";
import Register from "./Register";
import { useContext } from "react";
import { FormContext } from "./FormContext";
import Page from "./Page";

export default function Layout() {
  const { page, register } = useContext(FormContext);
  return (
    <>
      {console.log(register)}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {!page && !register && <Login />}
      {register && <Register />}
      {page && <Page />}
    </>
  );
}
