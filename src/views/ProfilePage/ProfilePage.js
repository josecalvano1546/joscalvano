import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
// import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";

import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/faces/josePerfil.jpeg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import pdf from "../../assets/pdf/myfile.pdf";

import TeamSection from "views/LandingPage/Sections/TeamSection";
import WorkSection from "views/LandingPage/Sections/WorkSection";
const useStyles = makeStyles(styles);

export default function ProfilePage() {
  const classes = useStyles();
  // const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  document.addEventListener("DOMContentLoaded", function () {
    // array with texts to type in typewriter
    var dataText = ["Desarrollador Front-End ", "Desarrollador App móvil"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector("h6").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 200);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 800);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] === undefined) {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 2000);
      }
      // check if dataText[i] exists
      if (dataText[i] !== undefined && i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      } else {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 2000);
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
  return (
    <div>
      {/* <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      /> */}
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>José Calvano</h3>
                    <h6>Front-End developer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fab fa-linkedin-in"></i>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Soy José Calvano Ing. en sistemas de información y desarrollador
                front-end profesional con más de tres años de experiencia en la
                gestión, desarrollo y pruebas de aplicaciones web y móviles.
                Autodidacta, creativo y en busca de nuevos desafíos.
              </p>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <Button color="primary">
                    <a
                      href={pdf}
                      download="cv_JoseCalvano"
                      style={{ color: "white" }}
                    >
                      CV
                    </a>
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
