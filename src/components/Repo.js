import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Repo({data}) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(data.repos_url)
      .then((response) => setRepos(response.data))
      .catch((err) => console.clear());
  }, [data.repos_url]);


  return (
    <SRepo className="bottom-section">
      <h2>All Repos</h2>
      <div className="repo-wrapper">
        {Array.from(repos).map((repo) => {
          const {
            id,
            name,
            description,
            language,
            stargazers_count,
            forks_count,
            size,
          } = repo;

          return (
            <div className="repo" key={id}>
              <div className="heading">
                <span className="iconify" data-icon="iconoir:repository"></span>
                <a href={`${data.html_url}/${name}`}>
                <h3 className="text">{name}</h3>
                </a>
              </div>
              <p className="description">{description}</p>
              <div className="more">
                <div className="left">
                  <span className="inner">
                    <span className="iconify" data-icon="ci:dot-05-xl"></span>
                    <small className="text">{language}</small>
                  </span>
                  <span className="inner">
                    <span
                      className="iconify"
                      data-icon="ant-design:star-filled"
                    ></span>
                    <small className="text">{stargazers_count}</small>
                  </span>
                  <span className="inner">
                    <span className="iconify" data-icon="charm:git-fork"></span>
                    <small className="text">{forks_count}</small>
                  </span>
                </div>
                <small className="right">{size}KB</small>
              </div>
            </div>
          );
        })}
      </div>
    </SRepo>
  );
}

const SRepo = styled.section`
  height: auto;
  padding: 30px 10px;
  background: rgb(246, 248, 250);
  color: ${({ theme }) => theme.darkColor};

  h2 {
    font-weight: 600;
    padding: 0 5px;
  }
  .repo-wrapper {
    margin: auto;
    margin-top: 30px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 5px;
    .repo {
      background: #fff;
      box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.1);
      padding: 15px;
      padding-bottom: 30px;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      .heading {
        display: flex;
        align-items: center;
        word-wrap: break-word;
        gap: 10px;
        h3 {
          font-weight: 500;
          font-family: ${({ theme }) => theme.font2};
        }
      }
      .description {
        padding: 15px 0px;
        line-height: 1.5;
      }
      .more {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          gap: 10px;
          margin: 10px;
          .inner {
            .iconify {
              width: 12px;
              height: 12px;
            }
            .text {
              margin: 0 4px;
            }
          }
        }
        .right {
          padding: 10px;
        }
      }
    }
  }
  @media (max-width: 998px) {
    .repo-wrapper {
      grid-template-columns: 1fr 1fr;
      max-width: 768px;
    }
  }
  @media (max-width: 568px) {
    .repo-wrapper {
      grid-template-columns: 1fr;
      max-width: 576px;
    }
  }
`;
