import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
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

const url = "http://localhost:5000/api/v1/auth/create-user";

function SignUp() {
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
    



    if (json.status === "Success") {
      setToastStatus("success");
      setToastTitle("Account created");
      setToastDescription(json.data.message);
      setShowToast(true);
    }else{
        setToastStatus("error");
        setToastTitle("Error creating account");
        setToastDescription(json.error);
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,

    onSubmit: () => handleFormSubmit(values),
  });
  return (
    <>
      <Wrapper>
        <h1>Pitch Deck</h1>
        <p>Get your ideas out there</p>

        <Form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <Border />
          <FormControl
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Helu"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
          <FormControl
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Bore"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
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

          <Button type="submit" className="primary" text="Sign up" />
          <Button text="Log in" />
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

export default SignUp;
