import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import FormControl from "../../components/FormControl";
import Button from "../../components/Button";
import Toast from "../../components/Toast";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  min-width: 360px;
  background: #fff;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const Border = styled.div`
  height: 0.3rem;
  width: 2rem;
  background: #720026;
  border-radius: 1rem;
  margin: 0.1rem 0 1.5rem;
`;

const ResetPassword = styled.a`
  display: block;
  text-decoration: none;
  width: fit-content;
  margin: 0.8rem 0 1rem auto;
  color: #720026;
  font-size: 0.875rem;
`;

const url = "http://localhost:5000/api/v1/auth/login";

function Login() {
  const [showToast, setShowToast] = useState(false);
  const [toastStatus, setToastStatus] = useState("error");
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");

  const handleFormSubmit = async (values) => {
    const fetchConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(values),
    };

    let res = await fetch(url, fetchConfig);
    let json = await res.json();
    console.log(json);

    if (json.status === "Success") {
      setToastStatus("success");
      setToastTitle("Success");
      setToastDescription("Welcome back!");
      setShowToast(true);
    }else{
      setToastStatus("error");
      setToastTitle(json.error);
      setToastDescription("The email or password is not valid!");
      setShowToast(true);
    }
  };

  const {
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    handleChange,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    onSubmit: () => handleFormSubmit(values),
  });

  return (
    <>
      <Wrapper>
        <h1>Pitch Deck</h1>
        <p>Get your ideas out there</p>

        <Form onSubmit={handleSubmit}>
          <h2>Welcome back</h2>
          <Border />
          <FormControl
            label="Email"
            type="email"
            name="email"
            placeholder="user@mail.com"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />

          <FormControl
            label="Password"
            type="password"
            name="password"
            placeholder="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />

          <ResetPassword href="#">Forgot password?</ResetPassword>
          <Button type="submit" className="primary" text="Login" />
          <Button text="Sign up" />
        </Form>
      </Wrapper>

      <Toast
        status={toastStatus}
        position="top-right"
        title={toastTitle}
        description={toastDescription}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}

export default Login;
