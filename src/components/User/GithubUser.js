import React from "react";
import DayJS from "react-dayjs";
import { ReactComponent as LocationIcon } from "./../../assets/images/icon-location.svg";
import { ReactComponent as TwitterIcon } from "./../../assets/images/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "./../../assets/images/icon-company.svg";
import { ReactComponent as WebsiteIcon } from "./../../assets/images/icon-website.svg";
import classNames from "classnames";
import "./GithubUser.scss";
import Slide from "@mui/material/Slide";
import LinesEllipsis from "react-lines-ellipsis";

const GithubUser = ({ result, user }) => {
  return (
    <Slide direction="up" in={user}>
      <div className="user__wrapper">
        <div className="user__details">
          <div className="user__details--left">
            <img
              src={`${result.avatar_url}`}
              alt={result.login}
              title={result.login}
              draggable={false}
            />
          </div>
          <div className="user__details--right">
            <div className="wrapper">
              <div className="user__details--name">
                <div className="wrapper--inner">
                  {" "}
                  <img
                    src={`${result.avatar_url}`}
                    alt={result.login}
                    title={result.login}
                    draggable={false}
                  />
                  <div className="user__details--m">
                    <h1>
                      <a
                        href={result.html_url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <LinesEllipsis
                          text={result.name ? result.name : result.login}
                          maxLine="2"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                      </a>
                    </h1>
                    <p className="text--blue">@{result.login}</p>
                    <p className="user__joinedDate-m">
                      Joined&nbsp;
                      <DayJS format="D MMM YYYY">{result.created_at}</DayJS>
                    </p>
                  </div>
                </div>
                <p className="user__joinedDate">
                  Joined&nbsp;
                  <DayJS format="D MMM YYYY">{result.created_at}</DayJS>
                </p>
              </div>
            </div>
            <p className="user__bio">
              {result.bio ? result.bio : "This profile has no bio."}
            </p>
            <div className="user__info--card">
              <table>
                <thead>
                  <tr>
                    <th>Repos</th>
                    <th>Followers</th>
                    <th>Following</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{result.public_repos}</td>
                    <td>{result.followers}</td>
                    <td>{result.following}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="user__info--socials">
              <div className="left">
                <div
                  className={classNames("social", {
                    "not-available": !result.location,
                  })}
                >
                  <LocationIcon />
                  <LinesEllipsis
                    text={result.location ? result.location : "Not Available"}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                  {/* <p>{result.location ? result.location : "Not Available"}</p> */}
                </div>
                <div
                  className={classNames("social", {
                    "not-available": !result.blog,
                  })}
                >
                  <WebsiteIcon />
                  {result.blog && (
                    <a href={result.blog}>
                      <LinesEllipsis
                        text={result.blog.replace(/(^\w+:|^)\/\//, "")}
                        maxLine="1"
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                      />
                    </a>
                  )}
                  <p>{!result.blog ? "Not Available" : ""}</p>
                </div>
              </div>
              <div className="right">
                <div
                  className={classNames("social", {
                    "not-available": !result.twitter_username,
                  })}
                >
                  <TwitterIcon />
                  <p>
                    {result.twitter_username
                      ? `@${result.twitter_username}`
                      : "Not Avilable"}
                  </p>
                </div>
                <div
                  className={classNames("social", {
                    "not-available": !result.company,
                  })}
                >
                  <CompanyIcon />
                  <p>{result.company ? result.company : "Not Avilable"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default GithubUser;
