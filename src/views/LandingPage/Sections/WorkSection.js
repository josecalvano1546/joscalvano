import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
export default function WorkSection() {
  const [alert, setAlert] = useState(false);
  const myFunction = () => {
    {
      console.log("se ejecuta");
    }
    setAlert(true);
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h3 className={classes.title}>Salúdame</h3>
          <h4 className={classes.description}>
            Contacta conmigo, responderé a la brevedad.
          </h4>
          <form name="contact" method="POST" data-netlify="true">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <input type="hidden" name="form-name" value="contact" />
                <CustomInput
                  labelText="Tu nombre"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Tu correo"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Tu mensaje"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <div data-netlify-recaptcha="true"></div>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  type="submit"
                  color="primary"
                  onClick={() => myFunction()}
                >
                  Enviar
                </Button>
              </GridItem>
            </GridContainer>
          </form>
          <div>
            {alert ? (
              <SnackbarContent
                message={
                  <span>
                    <b>CORREO ENVIADO:</b> Se envio el correo con éxito.
                  </span>
                }
                close
                color="success"
                icon={Check}
              />
            ) : null}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
