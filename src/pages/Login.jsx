import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bulma-components";
import RequestService from "../services/RequestService";
import { config } from "../config";
import { MAIN_ROUTES } from "../AppRoutes";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
    RequestService.post(
      config.backendUrlAuth,
      JSON.stringify({
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      }),
      (response) => {
        sessionStorage.setItem("Token", response.data.token);
        sessionStorage.setItem("Username", response.data.user.username);
        window.location.assign(MAIN_ROUTES.HOME);
      }
    );
  };

  return (
    <div>
      <h1 className={"title is-1"}>Sign in</h1>
      <form data-testid="login_form" onSubmit={loginUser}>
        <Form.Field>
          <Form.Control>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Input
              id="username"
              name="username"
              placeholder="Enter Username"
              type="text"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input
              id="password"
              name="password"
              placeholder="Enter Password"
              type="password"
            />
          </Form.Control>
        </Form.Field>
        <Button type="submit">Sign in</Button>
        <p className="margin-top-5">
          {"Don't have an account? "}
          <Link to={MAIN_ROUTES.CREATE_ACCOUNT}>Create your account now</Link>
          {"."}
        </p>
      </form>
    </div>
  );
};

export default Login;
