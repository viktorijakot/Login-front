import { useContext } from "react";
import { FormContext } from "./FormContext";
export default function Register() {
  const {
    setRegister,
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setrepeatPassword,
    handleRegisterSubimt,
    errorMsg,
  } = useContext(FormContext);
  return (
    <>
      <div className="left">
        <h2>
          <span className="underline">Sign</span>up
        </h2>
        <form className="email" typeof="submit" onSubmit={handleRegisterSubimt}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMsg === "This email already exist" && (
            <span className="text-danger">{errorMsg}</span>
          )}

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {errorMsg === "email or password do not match" && (
            <span className="text-danger">{errorMsg}</span>
          )} */}
          <input
            type="password"
            placeholder="Repeat your password"
            value={repeatPassword}
            required
            onChange={(e) => setrepeatPassword(e.target.value)}
          />
          {errorMsg === "Password is not the same" && (
            <span className="text-danger">{errorMsg}</span>
          )}
          <button type="submit">Login</button>
          <p className="account">
            Already have an anccount?{" "}
            <a onClick={() => setRegister(false)}>Login now</a>
          </p>
        </form>
      </div>
    </>
  );
}
