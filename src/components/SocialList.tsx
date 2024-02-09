import React from "react";
import Mail from "../assets/mail.svg";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Mail"
        href="mailto:chinmaychahar@gmail.com"
        target="_blank"
        rel="noopener"
      >
        <Mail width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="LinkedIn"
        href={`https://www.linkedin.com/in/chinmay-chahar`}
        target="_blank"
        rel="noopener"
      >
        <LinkedIn width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 1em;
        }
      `}</style>
    </div>
  );
}
