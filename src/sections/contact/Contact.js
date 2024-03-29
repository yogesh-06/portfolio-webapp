import { Icon } from "@iconify/react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import React from "react";
import Page from "../../components/Page";
import ContactForm from "../contact/ContactForm.js";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 42,
    fontWeight: 640,
    // '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
    [theme.breakpoints.up("md")]: {
      fontSize: 90,
      fontWeight: 550,
    },
  },
  subtitle: {
    // fontSize: 35,
    [theme.breakpoints.up("md")]: {
      // fontSize: 70,
      fontWeight: 650,
    },
  },
  summary: {
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      // fontWeight: 650,
    },
  },
  textfield: {
    fontFamily: "-apple-system,system-ui",
    color: "#fff",
    fontSize: 18,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      // fontWeight: 650,
    },
  },
  placeholder: {
    color: "#fff",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Container
      id="contact"
      maxWidth="xl"
      sx={{ px: { xs: 3, md: 15 }, py: { md: 30, xs: 15 } }}
    >
      <Page num="04." title="Get In Touch" xs={50} md={300} />
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={5}
        sx={{ my: { xs: 0, md: 3 } }}
      >
        <Grid item xs={12} md={6} lg={6} height={400} width={100}>
          <div
            // class="mapouter"
            style={{
              position: "relative",
              textAlign: "right",
              height: "100%",
              width: "100%",
            }}
          >
            <div
              // class="gmap_canvas"
              style={{
                overflow: "hidden",
                background: "none!important",
                height: "100%",
                width: "100%",
              }}
            >
              <iframe
                title="Prasad Circle, Gangapur Road, Nashik"
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=st colony, gangapur road, nashik&t=&z=18&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://2yu.co">2yu</a>
              {/* </br> */}
              <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
            </div>
          </div>
          <Card sx={{ maxWidth: "100%", borderRadius: 0 }}>
            <CardActionArea>
              <script
                src="https://platform.linkedin.com/badges/js/profile.js"
                async
                defer
                type="text/javascript"
              ></script>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <div>
                    <a
                      className="badge-base__link LI-simple-link"
                      href="https://in.linkedin.com/in/pathfinder06?trk=profile-badge"
                    >
                      Say hello
                    </a>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    Here's the links 👇🏻
                    <br />
                  </Typography>
                </Typography>
                <ListItem disablePadding sx={{ mb: 0.3 }}>
                  <ListItemIcon>
                    <Icon
                      icon="logos:whatsapp-icon"
                      width={18}
                      height={18}
                      color="#f59816"
                    />
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    <a href="https://wa.me/9765618373 ">
                      https://wa.me/9765618373
                    </a>
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Icon
                      icon="logos:google-gmail"
                      width={18}
                      height={18}
                      color="#f59816"
                    />
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    <a href="yogeshdpawar.06@gmail.com">
                      yogeshdpawar.06@gmail.com
                    </a>
                  </Typography>
                </ListItem>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6} marginTop={{ xs: 20, md: 0 }}>
          <Typography
            variant="h1"
            className={classes.subtitle}
            sx={{
              color: "#ccd6f6",
              fontFamily: "system-ui",
              // marginTop: 2,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            component="div"
            className={classes.summary}
            sx={{
              // mt: 3,
              // width: { md: 400, lg: 600 },
              color: "#8892b0",
              fontFamily: "-apple-system,system-ui",
            }}
          >
            I'm currently open to new job opportunities and can join
            immediately. Feel free to reach out with any opportunities or
            questions!
          </Typography>

          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
