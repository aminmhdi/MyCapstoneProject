import {
  faRefresh,
  faSignIn,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Card, Col, Row, Button, Spinner } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect } from "react";

function Login() {
  let [loading, setLoading] = useState(false);
  let url = `${process.env.REACT_APP_BACK_END_URL}/login/signin`;
  let userJson = sessionStorage.getItem("user");
  let [emailid, setEmailId] = useState("");
  let [password, setPassword] = useState("");
  let [typeofuser, setTypeofUser] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  console.log(typeofuser);
  useEffect(() => {
    if (userJson != null) {
      let user = JSON.parse(userJson);
      if (user.typeofuser == "admin") {
        navigate("/admin");
      } else {
        navigate("/customer");
      }
    }
    // eslint-disable-next-line
  }, []);
  let handleSubmit = (event) => {
    event.preventDefault();
    if (emailid.length == 0 || password.length == 0 || typeofuser.length == 0) {
      setError("Please write email or password or select type of user");
    } else {
      setLoading(true);
      let login = { emailid, password, typeofuser };
      axios
        .post(url, login)
        .then((result) => {
          if (result.data == "User logged in successfully") {
            sessionStorage.setItem("user", JSON.stringify(login));
            navigate("/customer");
          } else if (result.data == "Admin logged in successfully") {
            sessionStorage.setItem("user", JSON.stringify(login));
            navigate("/admin");
          } else {
            setError(result.data);
          }
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <Card>
      <Card.Header>
        <span className="me-1">
          <FontAwesomeIcon icon={faUser} />
        </span>
        Login
      </Card.Header>
      <Card.Body className="p-4 m-0">
        <form onSubmit={handleSubmit} className="login">
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <label htmlFor="emailid" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="emailid"
                  id="emailid"
                  onChange={(event) => setEmailId(event.target.value)}
                  value={emailid}
                  className="form-control"
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  className="form-control"
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3">
                <label htmlFor="typeofuser" className="form-check-label me-3">
                  Type
                </label>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">Admin</label>
                  <input
                    type="radio"
                    name="typeofuser"
                    value="admin"
                    className="form-check-input"
                    onChange={(event) => setTypeofUser(event.target.value)}
                  />
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">Customer</label>
                  <input
                    type="radio"
                    name="typeofuser"
                    value="user"
                    className="form-check-input"
                    onChange={(event) => setTypeofUser(event.target.value)}
                  />
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3 text-center">
                <strong className="text-danger">{error}</strong>
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3">
                <div className="d-grid">
                  <Button
                    className={loading ? "disabled " : ""}
                    variant="primary"
                    type="submit"
                  >
                    <span className="me-1">
                      {loading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        <FontAwesomeIcon icon={faSignIn} />
                      )}
                    </span>
                    SignIn
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <div className="d-grid gap-2">
                      <Button
                        variant="light"
                        type="button"
                        onClick={() => {
                          setEmailId("");
                          setPassword("");
                        }}
                      >
                        <span className="me-1">
                          <FontAwesomeIcon icon={faRefresh} />
                        </span>
                        Reset
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <div className="d-grid gap-2">
                      <Link className="btn btn-success" to="/signup">
                        <span className="me-1">
                          <FontAwesomeIcon icon={faUserPlus} />
                        </span>
                        SignUp
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
}

export default Login;
