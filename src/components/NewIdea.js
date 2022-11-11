import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import FormControl from "./FormControl";
import TagInput from "./TagInput";
import { newIdeaSchema } from "../schemas";

const NewIdeaModal = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  height: 100vh;
  top: -1rem;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  &.show {
    display: flex;
  }
  & form {
    background-color: #fff;
    padding: 1rem 2rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
  }

  & form button {
    padding: 0.8rem 1.5rem;
    border: none;
    outline: none;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    color: #720026;
    cursor: pointer;
    font-weight: 700;
  }

  & form button[type="submit"] {
    background-color: #720026;
    color: #fff;
    margin-right: 1rem;
  }

  & form p {
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  margin-bottom: 0.7rem;

  & textarea {
    height: 100px;
    padding: 0.7rem 1rem;
    border-radius: 0.3rem;
    border: 1px solid #ddd;
  }

  & textarea:focus {
    outline: 1px solid #aaa;
  }

  & textarea.error {
    outline: 1px solid #ff0000;
  }

  & small {
    color: #ff0000;
  }
`;

const Border = styled.div`
  height: 0.3rem;
  width: 2rem;
  background: #720026;
  border-radius: 1rem;
  margin: 0.1rem 0 1.5rem;
`;

const TagsSelection = styled.div`
  display: flex;
  column-gap: 0.4rem;
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const NewTag = styled.div`
  padding: 0.6rem 1.2rem;
`;

function NewIdea({ isVisible, setIsVisible }) {
  const url = `http://localhost:5000/api/v1/ideas/`;
  const handleFormSubmit = async (values) => {
    const fetchConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkhlbHUgQm9yZSIsImxhc3ROYW1lIjoiIiwiaWF0IjoxNjY4MDExMTk3LCJleHAiOjE2NjgwOTc1OTd9.N-Wx1ChMK8B7jKqD0f4kcQo53SKmUsEcikbiiXQUIVw`,
      },
      body: JSON.stringify(values),
    };

    let res = await fetch(url, fetchConfig);
    let json = await res.json();
    console.log(json);

    if (json.status === "Success") {
    } else {
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
      title: "",
      description: "",
    },
    validationSchema: newIdeaSchema,

    onSubmit: () => handleFormSubmit(values),
  });
  let tags = ["ui/ux", "blockchain", "figma"];
  return (
    <NewIdeaModal className={isVisible ? "show" : ""}>
      <form onSubmit={handleSubmit}>
        <h2>New Idea</h2>
        <Border />
        <FormControl
          label="Title"
          type="text"
          name="title"
          placeholder=""
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        />
        <Description>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={values.description}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched}
            className={errors.description && touched.description ? "error" : ""}
          ></textarea>
          {errors.description && touched.description && (
            <small>{errors.description}</small>
          )}
        </Description>
        <p>Tags</p>
        <TagsSelection>
          {tags.map((tag) => (
            <TagInput tag={tag} />
          ))}
          <NewTag>
            <i class="bx bx-plus"></i>
            New
          </NewTag>
        </TagsSelection>

        <Footer>
          <button type="submit">Post</button>
          <button onClick={() => setIsVisible(false)}>Cancel</button>
        </Footer>
      </form>
    </NewIdeaModal>
  );
}

export default NewIdea;
