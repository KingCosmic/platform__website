import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import style from "./Organization.module.css";

import Button from "../../../common/Button";

export default function Organization() {
  return (
    <div className={style.Organization}>
      <h1>
        Our Organization
        <span style={{ fontSize: "1rem" }}> (for everyone)</span>
      </h1>
      Dev Launchers is a nonprofit intent on empowering young people from
      diverse communities
      <div className={style.CtaSection}>
        <h2 className={style.CtaSection_Title}>
          We love what we do. You should too!
        </h2>
        <div className={style.CtaSection_Content}>
          <div className={style.CtaSection_Description}>
            Your time is valuable, do something you love. Dev Launchers is built
            for people just like you, take a look around and join us!
          </div>
          <div className={style.CtaSection_ButtonArea}>
            <Link to={"/mentor-signup"}>
              <Button className={style.CtaSection_Button} doNothing>
                Become a Mentor
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.CtaSection}>
        <h2 className={style.CtaSection_Title}>
          Technology should be accessible
        </h2>
        <div className={style.CtaSection_Content}>
          <div className={style.CtaSection_Description}>
            We seek out individuals from diverse, underserved communities and
            empower them to create. Know a young person who's excited about
            technology? Send them our way!
          </div>
          <div className={style.CtaSection_ButtonArea}>
            <Button className={style.CtaSection_Button}>
              Nominate a Student
            </Button>
          </div>
        </div>
      </div>
      <div className={style.CtaSection}>
        <h2 className={style.CtaSection_Title}>We believe in Open Source</h2>
        <div className={style.CtaSection_Content}>
          <div className={style.CtaSection_Description}>
            Everything, from our platform to our curriculum to the projects we
            develop, is released to the open source community. We rely on
            contributors to grow our platform and continue serving our students!
          </div>
          <div className={style.CtaSection_ButtonArea}>
            <Button
              className={style.CtaSection_Button}
              href="https://github.com/dev-launchers"
            >
              Find us on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
