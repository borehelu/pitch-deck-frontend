import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { passwordResetSchema } from "../../schemas";
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

const resetToken = '779e3f27f428625cda69f10b7f35bd7c085d78a4d27a81375dbaa173b28bbeda'
const userId = 1;
const url = `http://localhost:5000/api/v1/auth/password-reset/${resetToken}`;

function PasswordReset() {
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
      body: JSON.stringify({...values,userId: userId}),
    };

    let res = await fetch(url, fetchConfig);
    let json = await res.json();

    console.log(json.status);

    if (json.status === "Success") {
      setToastStatus("success");
      setToastTitle("Link sent");
      setToastDescription(json.data.message);
      setShowToast(true);
    } else {
      setToastStatus("error");
      setToastTitle("Error");
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
      password: "",
    },
    validationSchema: passwordResetSchema,

    onSubmit: () => handleFormSubmit(values),
  });

  return (
    <>
      <Wrapper>
        <h1>Pitch Deck</h1>
        <p>Get your ideas out there</p>

        <Form onSubmit={handleSubmit}>
          <h2>Reset password</h2>
          <Border />
          <FormControl
            label="New password"
            type="password"
            name="password"
            placeholder="your password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />

          <Button type="submit" className="primary" text="Reset Password" />
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

export default PasswordReset;
