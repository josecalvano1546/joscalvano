import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/components/parallaxStyle.js";
import oneImg from "../../assets/img/icons/react.svg";
// import twooImg from "../../assets/img/icons/redux.svg";
// import threeImg from "../../assets/img/icons/navigation.svg";

//React spring
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  //React spring
  const styles = useSpring({
    loop: { reverse: true },
    config: { duration: 2000 },
    from: { y: 20, x: 0 },
    to: { y: 50, x: 20 },
  });
  const styles2 = useSpring({
    loop: { reverse: true },
    config: { duration: 2500 },
    from: { y: 20, x: 0 },
    to: { y: 50, x: 20 },
  });
  const one2 = useSpring({
    loop: { reverse: true },
    config: { duration: 2000 },
    from: { y: 50, x: 40 },
    to: { y: 0, x: 10 },
  });

  const two = useSpring({
    loop: { reverse: true },
    config: { duration: 1700 },
    from: { y: 20, x: 0 },
    to: { y: 50, x: -9 },
  });
  const one = useSpring({
    loop: { reverse: true },
    config: { duration: 2500 },
    from: { y: 50, x: 40 },
    to: { y: 0, x: 10 },
  });
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      {children}
      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "20%",
          marginTop: window.innerWidth >= 600 ? "-10%" : "-30%",
          // backgroundColor: "#46e891",
          borderRadius: 16,
          ...styles,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>
      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "5%",
          marginTop: window.innerWidth >= 600 ? "10%" : "20%",
          // backgroundColor: "#80e502",
          borderRadius: 16,
          ...one,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>
      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "5%",
          marginTop: window.innerWidth >= 600 ? "-25%" : "-62%",
          // backgroundColor: "#720639",
          borderRadius: 16,
          ...two,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>

      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "35%",
          marginTop: window.innerWidth >= 600 ? "-20%" : "-75%",
          // backgroundColor: "#720639",
          borderRadius: 16,
          ...one2,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>
      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "90%",
          marginTop: window.innerWidth >= 600 ? "-20%" : "-62%",
          // backgroundColor: "#720639",
          borderRadius: 16,
          ...two,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>
      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "85%",
          marginTop: window.innerWidth >= 600 ? "10%" : "20%",
          // backgroundColor: "#720639",
          borderRadius: 16,
          ...styles2,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>
      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "60%",
          marginTop: window.innerWidth >= 600 ? "-10%" : "20%",
          // backgroundColor: "#80e502",
          borderRadius: 16,
          ...one,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>
      <animated.div
        style={{
          width: window.innerWidth >= 600 ? 40 : 30,
          height: window.innerWidth >= 600 ? 40 : 30,
          position: "absolute",
          marginLeft: "60%",
          marginTop: window.innerWidth >= 600 ? "-30%" : "-30%",
          // backgroundColor: "#80e502",
          borderRadius: 16,
          ...one2,
        }}
      >
        <img
          src={oneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
