import React from "react";
import DayJS from "react-dayjs";
import { ReactComponent as LocationIcon } from "./../../assets/images/icon-location.svg";
import { ReactComponent as TwitterIcon } from "./../../assets/images/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "./../../assets/images/icon-company.svg";
import { ReactComponent as WebsiteIcon } from "./../../assets/images/icon-website.svg";
import "./GithubUser.scss";

const GithubUser = ({ result }) => {
  return (
    <div className="user__wrapper">
      <div className="user__details">
        <div className="user__details--left">
          <img
            src={`${result.avatar_url}`}
            alt={result.login}
            title={result.login}
          />
        </div>
        <div className="user__details--right">
          <div className="wrapper">
            <div className="user__details--name">
              <h1>
                <a href={result.html_url} rel="noreferrer" target="_blank">
                  {result.name ? result.name : result.login}
                </a>
              </h1>
              <p className="text--blue">@{result.login}</p>
            </div>
            <p className="user__joinedDate">
              Joined&nbsp;
              <DayJS format="D MMM YYYY">{result.created_at}</DayJS>
            </p>
          </div>
          <p className="user__bio">
            {result.bio ? result.bio : "This profile has no bio."}
          </p>
          <div className="user__info--card">
            <table>
              <tr>
                <th>Repos</th>
                <th>Followers</th>
                <th>Following</th>
              </tr>
              <tr>
                <td>{result.public_repos}</td>
                <td>{result.followers}</td>
                <td>{result.following}</td>
              </tr>
            </table>
          </div>
          <div className="user__info--socials">
            <div className="left">
              <div className="social">
                <LocationIcon />
                <p>{result.location ? result.location : "Not Available"}</p>
              </div>
              <div className="social">
                <WebsiteIcon />
                <p>{result.blog ? result.blog : "Not Avilable"}</p>
              </div>
            </div>
            <div className="right">
              <div className="social">
                <TwitterIcon />
                <p>
                  {result.twitter_username
                    ? result.twitter_username
                    : "Not Avilable"}
                </p>
              </div>
              <div className="social">
                <CompanyIcon />
                <p>{result.company ? result.company : "Not Avilable"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubUser;
