import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// .matches(passwordRules, { message: "please create a stronger password" })

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .required("Required"),
});

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});

export const passwordLinkSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
});

export const passwordResetSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .required("Required"),
});

export const newIdeaSchema = yup.object().shape({
  title: yup
  .string()
  .required("Required"),
  description: yup
  .string()
  .required("Required")
})
