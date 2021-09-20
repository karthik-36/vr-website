import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { colors } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';






function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles({
  root: {
    backgroundColor: orange
  },
  tabs: {
    backgroundColor: orange
  },
  section: {
    marginLeft: "30%",
    marginRight: "30%",
  },
  label: {
  },
});


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.root} style={{ backgroundColor: "#f58e00" }} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Project 1" {...a11yProps(0)} />
          <Tab label="Project 2" {...a11yProps(1)} />
          <Tab label="Project 3" {...a11yProps(2)} />
          <Tab label="Student's Choice" {...a11yProps(3)} />
          <Tab label="Homework" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <section >
          <h1 style={{ textAlign: "center" }}>Project 1: Road to Nowhere</h1>
          <br />
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Introduction</h2>
          <br />
          <p> We basically have 2 cubes in real life called the merge cube (figure 1) and class cube (figure 2). Using the patterns present on each side of the cube we can project a 3d model on top which in our case has to represent a place/city on earth. So, I am going to represent Venice and Chernobyl for merge cube and class cube respectively.
          </p>
          <br />
          <p>
            <b>Venice:</b> The model's inspiration comes from a street in Venice with the iconic three-way lamps, a waterway with gondolas instead of roads with cars, and the St Mark's Campanile tower.
          </p>
          <br />
          <p>
            <b>Chernobyl:</b>  My original plan was to project a model of the abandoned Ferris wheel from Pripyat amusement park but not many people were aware of its existence and could not relate, so I went on and added a representation of the burning nuclear plant from "that incident".
          </p>
          <br />
          <p>Along with the knick-knacks, The model for Chernobyl can also be projected in a ground plane after you click on the "switch ground plane" button. this will make a roughly 1-meter cube model appear in the ground which you could walk and navigate through using your phone.</p>
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Demo Video</h2>
          <br />
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Source Code</h2>
          <br />
          <p><h3 style={{ color: "blue" }}> <a href="https://github.com/karthik-36/Knick-knack-AR">GitHub </a></h3></p>

          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Tools Used</h2>
          <br />
          <p><a href="https://unity.com/" target="_blank">Unity Game Engine (Version 2019.4.28f1)</a></p>
          <p><a href="https://developer.vuforia.com/downloads/sdk" target="_blank">Vuforia (Version 9.8)</a></p>

          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>How to use</h2>
          <br />
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Assets</h2>
          <br />
          <p>My own assets & list of all the assets that I <strike> stole  </strike>  borrowed from the internet.</p>
          <br />
          <ol>
            <li><div>
              <h3>Merge Cube - Venice</h3>
              <ol>
                <h4>Own models</h4>
                <li>
                Venice street lamps
                </li>
                <li>
                St Mark's Campanile tower
                </li>
              </ol>

              <br/>

              <ol>
                <h4>Internet models </h4>
                <li>
                <a href = "https://sketchfab.com/Hanesto">https://sketchfab.com/Hanesto</a>  : Multiple Venice buildings (homes)  by  Hanesto
                </li>
                <li>
                <a href = " https://free3d.com/user/garleth93">https://free3d.com/user/garleth93</a>  : boat by garleth93
                </li>
                <li>
                <a href = "https://free3d.com/user/andrijaalp">https://free3d.com/user/andrijaalp</a> : bridge by  andrijaalp
                </li>
                <li>
                <a href = "mixamo.com">mixamo.com</a>  : couple & man on the boat
                </li>
              </ol>

              <br/>

              <ol>
                <h4>Soundtrack </h4>
                <li>
                <a href = "https://www.youtube.com/watch?v=pOIBF-eIUEQ">https://www.youtube.com/watch?v=pOIBF-eIUEQ</a>  : Jesper Kyd - Back In Venice
                </li>
              </ol>
              <br/>
              <br/>
            </div></li>

            <li><div>
              <h3>Class Cube - Chernobyl</h3>
              <ol>
                <h4>Own models</h4>
                <li>
                Ferris wheel
                </li>
                <li>
                Burning nuclear reactor, Water hoses, Graphite on the ground
                </li>
              </ol>
              <br/>
              <ol>
                <h4>Internet models</h4>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
              </ol>
              <br/>
              <ol>
                <h4>Soundtrack</h4>
                <li>
                <a href = "https://www.youtube.com/watch?v=zxjjie1Ohio&ab_channel=JoJo%27sBizarreAdventures">https://www.youtube.com/watch?v=5AyhE26Hbls</a>  :  Stardust Crusaders OST - Omen
               
                </li>
              </ol>
            </div></li>
          </ol>

          <br />
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Inspiration for the models</h2>
          <br />
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Images/Phone Screenshots</h2>
          <br />
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>My thoughts on AR enhanced objects.</h2>
          <br />
          <br />


        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section >
          <h1 style={{ textAlign: "center" }}>Project 2: </h1>
        </section>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <section >
          <h1 style={{ textAlign: "center" }}>Project 3: </h1>
        </section>
      </TabPanel>
      <TabPanel value={value} index={3}>

        <section >
          <h1 style={{ textAlign: "center" }}>Student's choice: </h1>
        </section>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Homework:
      </TabPanel>
    </div>
  );
}