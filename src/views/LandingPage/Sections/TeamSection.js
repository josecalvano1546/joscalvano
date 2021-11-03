import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import App from "../../../assets/pdf/PorVos.apk";
import team1 from "assets/img/porvos.webp";
import team2 from "assets/img/surfProyect.webp";
import team3 from "assets/img/book.webp";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Portafolio</h3>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Por vos
                <br />
                <small className={classes.smallTitle}>Móvil / Web</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Es una red social que promueve la ayuda entre personas.{" "}
                  <a href={App}>Descarga la app aquí</a>. <br /> También cuenta
                  con un panel de administración de usuarios.{" "}
                  <a href="https://porvos-ef6a1.web.app/#/login">Ver sitio</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-react"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Surf proyect
                <br />
                <small className={classes.smallTitle}>Web</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Es una página web adaptativa que surge como resultado de las
                  prácticas implementando la libreria greensock.js{" "}
                  <a href="https://sad-stonebraker-d34069.netlify.app">
                    Ver sitio{" "}
                  </a>
                  <br />
                  <br />
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-react"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Reservas
                <br />
                <small className={classes.smallTitle}>Móvil</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Es una aplicación móvil de reservas de hoteles. Surge como
                  resultado de las prácticas del curso de react native.{" "}
                  <a href="#pablo">Ver GitHub</a>
                  <br />
                  <br />
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-react"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
