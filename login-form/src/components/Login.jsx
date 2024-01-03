import { useContext } from "react";
import { FormContext } from "./FormContext";
export default function Login() {
  const {
    handleSubimt,
    setEmail,
    setPassword,
    email,
    password,
    errorMsg,
    setRegister,
    successMsg,
  } = useContext(FormContext);

  return (
    <>
      <div className="left">
        {successMsg.length > 0 && <p className="text-success">{successMsg}</p>}
        <h2>
          <span className="underline">Lo</span>gin
        </h2>
        <form className="email" typeof="submit" onSubmit={handleSubimt}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMsg === "email was not found" && (
            <span className="text-danger">{errorMsg}</span>
          )}

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMsg === "email or password do not match" && (
            <span className="text-danger">{errorMsg}</span>
          )}
          <button type="submit">Login</button>
          <p className="account">
            Don't have an account?{" "}
            <a onClick={() => setRegister(true)}>Signup now</a>
          </p>
        </form>
      </div>
    </>
  );
}
