import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Info({ data }) {
  const {
    name,
    login,
    avatar_url,
    html_url,
    company,
    location,
    created_at,
    public_repos,
    followers,
    following,
  } = data;

  function getJoinedDate() {
    const sMonth = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const nDate = new Date(created_at);

    const month = sMonth[nDate.getMonth()];
    const date = nDate.getDate();
    const year = nDate.getFullYear();

    return `${month} ${date}, ${year}`;
  }
  
  return (
    <SInfo>
      <Link className="back-btn" to="/">
        <span className="iconify" data-icon="akar-icons:home"></span>
      </Link>

      <img src={avatar_url} className="avatar" alt="profile img" />
      <h2 className="name">{name}</h2>
      <a href={html_url}>
        <h3 className="username">@{login}</h3>
      </a>
      <ul className="info">
        {company !== null && (
          <li>
            <span className="iconify" data-icon="ic:round-work-outline"></span>
            <span className="text">{company}</span>
          </li>
        )}
        {location !== null && (
          <li>
            <span className="iconify" data-icon="akar-icons:location"></span>
            <span className="text">{location}</span>
          </li>
        )}

        <li>
          <span className="iconify" data-icon="uil:calender"></span>
          <span className="text">joined {getJoinedDate()}</span>
        </li>
      </ul>

      <ul className="brief">
        <li>
          <h2 className="no">{public_repos}</h2>
          <small className="text">REPOSITORIES</small>
        </li>
        <li>
          <h2 className="no">{followers}</h2>
          <small className="text">FOLLOWERS</small>
        </li>
        <li>
          <h2 className="no">{following}</h2>
          <small className="text">FOLLOWING</small>
        </li>
      </ul>
    </SInfo>
  );
}

const SInfo = styled.section`
  text-align: center;
  padding: 90px 0px;
  .back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${({ theme }) => theme.baseColor};
  }
  .avatar {
    width: 140px;
    padding: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.baseColor};
  }
  .name {
    color: ${({ theme }) => theme.lightColor};
    margin: 5px;
    font-weight: 600;
    letter-spacing: 0px;
  }
  .username {
    color: ${({ theme }) => theme.baseColor};
    margin: 10px;
    font-family: ${({ theme }) => theme.font2};
    font-weight: 500;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      color: ${({ theme }) => theme.lightColor};
      font-size: 14px;
      display: flex;
      align-items: center;
      margin: 5px 10px;
      span {
        padding: 5px;
      }
    }
  }

  .brief {
    color: ${({ theme }) => theme.lightColor};
    display: flex;
    justify-content: center;
    margin: 15px 0;
    gap: 10px;
    li {
      background: ${({ theme }) => theme.darkColor1};
      padding: 15px 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      .no {
        font-weight: 500;
      }
      .text {
        margin-top: 5px;
        padding: 5px;
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
  }

  @media (max-width: 568px) {
    padding-bottom: 0px;
    .info {
      flex-direction: column;
    }
    .brief {
      transform: scale(0.9);
      flex-direction: column;
      align-items: center;
      li {
        width: 180px;
        .text {
          font-size: 12px;
        }
      }
    }
  }
`;
