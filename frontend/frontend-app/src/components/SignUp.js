import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let url = `${process.env.REACT_APP_BACK_END_URL}/login/signup`;

  let [emailid, setEmailId] = useState("");
  let [password, setPassword] = useState("");
  let [typeofuser, setTypeofUser] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (event) => {
    event.preventDefault();
    if (emailid.length == 0 || password.length == 0 || typeofuser.length == 0) {
      setError("Please write emailid id or password or select type of user");
    } else {
      let login = { emailid, password, typeofuser };
      axios
        .post(url, login)
        .then((result) => {
          setError(result.data);
        })
        .catch((error) => console.log(error));
    }
    setEmailId("");
    setPassword("");
  };
  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <label>EmailId</label>
        <input
          type="emailid"
          name="emailid"
          onChange={(event) => setEmailId(event.target.value)}
          value={emailid}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <br />
        <label>TypeOfUser</label>
        <input
          type="radio"
          name="typeofuser"
          value="admin"
          onChange={(event) => setTypeofUser(event.target.value)}
        />
        Admin
        <input
          type="radio"
          name="typeofuser"
          value="user"
          onChange={(event) => setTypeofUser(event.target.value)}
        />
        Customer
        <br />
        <input type="submit" value="SignUp" />
        <input type="reset" value="reset" />
      </form>
      <br />
      <a onClick={() => navigate("/")}>Login</a>
    </div>
  );
}

export default SignUp;
