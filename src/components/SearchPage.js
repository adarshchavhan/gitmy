import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchPage() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  document.title = "Welcome to Gitmy";

  return (
    <Home>
      <button className="dev-profile" onClick={()=> navigate("/adarshchavhan21")}>
        <span className="iconify" data-icon="uim:github-alt"></span>
      </button>
      <span className="iconify" data-icon="uim:github-alt"></span>
      <h3 className="tagline">Find your Profile</h3>
      <input
        type="text"
        className="search-bar"
        value={text}
        onChange={(e) => setText(e.target.value.toLocaleLowerCase())}
        onKeyDown={(e) => e.key === "Enter" && navigate(`/${text}`)}
      />
    </Home>
  );
}

const Home = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dev-profile{
    width: 90px;
    height: 90px;
    background: ${ ({theme}) => theme.baseColor };
    border: 0;
    outline: 0;
    position: fixed;
    top: -45px;
    left: -45px;
    transform: rotate(315deg);
    cursor: pointer;
    .iconify{
      width: 25px;
      position: absolute;
      top: 12px;
      left: 32px;
      color: ${ ({theme}) => theme.darkColor };
    }
    
  }
  .iconify {
    height: 150px;
    width: 150px;
    color: ${({ theme }) => theme.baseColor};
    padding-bottom: 15px;
  }
  .tagline {
    color: ${({ theme }) => theme.baseColor};
    font-weight: 400;
    letter-spacing: 2px;
    padding-bottom: 25px;
  }
  .search-bar {
    padding: 10px 15px;
    font-size: 32px;
    font-family: ${({ theme }) => theme.font2};
    text-align: center;
    border: 0;
    outline: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background: ${({ theme }) => theme.darkColor1};
    color: ${({ theme }) => theme.lightColor};
    text-transform: lowercase;

    &:hover,
    &focus {
      box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
    }
  }
  @media (max-width: 568px) {
    .search-bar {
      font-size: 23px;
    }
  }
`;
