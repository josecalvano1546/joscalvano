import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Work with us</h3>
          <Card carousel>
            <Carousel {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <a
                      style={{ color: "white", textDecoration: "underline" }}
                      href="https://www.shutterstock.com/es/search/similar/1926194834"
                    >
                      Ver este caso{" "}
                    </a>
                  </h4>
                </div>
              </div>
              <div>
                <img src={image2} alt="Second slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <a
                      style={{ color: "white", textDecoration: "underline" }}
                      href="https://www.shutterstock.com/es/search/similar/1926194834"
                    >
                      Ver este caso{" "}
                    </a>
                  </h4>
                </div>
              </div>
              <div>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <a
                      style={{ color: "white", textDecoration: "underline" }}
                      href="https://www.shutterstock.com/es/search/similar/1926194834"
                    >
                      Ver este caso{" "}
                    </a>
                  </h4>
                </div>
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
