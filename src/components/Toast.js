import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

function Toast(props) {
  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      props.setShowToast(false);
    }, 3000);

    return () => clearTimeout(toastTimeout);
  });

  const Toast = styled.div`
    padding: 0.7rem 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    font-size: 20px;
    background: white;
    border-radius: 0.25em;
    position: relative;
    transition: transform 500ms ease-in-out;
    overflow: hidden;

    &.success {
      border-left: 6px solid green;
    }

    &.error {
      border-left: 6px solid red;
    }

    &.progress::before {
      content: "";
      position: absolute;
      height: 2px;
      width: calc(100% * var(--progress));
      bottom: 0;
      left: 0;
      right: 0;
    }
    &.error.progress::before {
      background-color: red;
    }

    &.success.progress::before {
      background-color: green;
    }

    &[data-position$="-right"] {
      transform: translateX(110%);
    }

    &[data-position$="-left"] {
      transform: translateX(-110%);
    }

    &[data-position="top-center"] {
      transform: translateY(-100vh);
    }

    &[data-position="bottom-center"] {
      transform: translateY(100vh);
    }

    &.show {
      transform: translate(0, 0);
    }

    & h5 {
      font-size: 1rem;
    }

    & p {
      font-size: 0.9rem;
    }
  `;

  const ToastContainer = styled.div`
    position: fixed;
    margin: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &[data-position^="top-"] {
      top: 0;
    }

    &[data-position^="bottom-"] {
      bottom: 0;
    }

    &[data-position$="-right"] {
      right: 0;
    }

    &[data-position$="-left"] {
      left: 0;
    }

    &[data-position$="-center"] {
      left: 50%;
      transform: translateX(-50%);
    }
  `;

  const CloseToast = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    background: #ddd;
    border: none;
    cursor: pointer;

    & i {
      margin: 5px 0;
      display: block;
      font-size: 0.6rem;
      color: #444;
    }
  `;

  let toastClass = `${props.status} ${props.showToast ? "show" : ""}`;

  return (
    <ToastContainer data-position={props.position}>
      <Toast className={toastClass} data-position={props.position}>
        <h5>{props.title} </h5>
        <p>{props.description}</p>
        <CloseToast onClick={() => props.setShowToast(false)}>
          <i class="fi fi-br-cross"></i>
        </CloseToast>
      </Toast>
    </ToastContainer>
  );
}

export default Toast;
