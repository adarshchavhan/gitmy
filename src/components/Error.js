import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Error() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count <= 0) {
      clearInterval(interval);
    }
    setTimeout(() => navigate("/"), 5000);
  }, [count, navigate]);

  return (
    <SError>
      <h1>404</h1>
      <p>User Not Found</p>
      <Link className="btn" to="/">
        Go to Home
      </Link>
      <small>
        You will redireted in <span className="no">{count}s</span>
      </small>
    </SError>
  );
}

const SError = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-family: ${({ theme }) => theme.font1};
    color: ${({ theme }) => theme.baseColor};
    font-size: 80px;
  }
  p {
    color: ${({ theme }) => theme.baseColor};
    letter-spacing: 1px;
    font-size: 20px;
  }
  .btn {
    padding: 7px 25px;
    font-size: 20px;
    color: ${({ theme }) => theme.baseColor};
    border: 1.5px ${({ theme }) => theme.baseColor};
    margin-top: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.baseColor};
    position: relative;
    top: 5px;
    transition: 0.2s ease-in-out;

    &:hover,
    &active {
      box-shadow: 0px 5px 10px ${({ theme }) => theme.baseColor};
      top: 0px;
    }
  }
  small {
    color: ${({ theme }) => theme.baseColor};
    font-size: 14px;
    margin-top: 20px;
    .no {
      color: ${({ theme }) => theme.lightColor};
    }
  }
`;
