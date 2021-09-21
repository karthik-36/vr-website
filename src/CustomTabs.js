import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { colors, Paper, Grid } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import ball8 from './images/8ball.jpeg';
import mergeCube from './images/merge cube.jpg';
import classCube from './images/class cube.jpeg';

import venice from './images/venice.jpeg';
import chernoFull from './images/cherno full.jpg';
import ferris from './images/ferris Wheel.jpg';
import waterHose from './images/water.jpeg';
import burning from './images/burning Reactor.jpg';
import lamp from './images/lamp.jpg';
import sttower from './images/sttower.jpg';
import full from './images/full.jpeg';




// npm run deploy



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
          <p>Both the models show live weather of the place which is updated every 15 seconds, Also there is a magic-8-ball attached to both the knick-knacks which would show random slangs upon a rough 100 degree rotation on x or z axis.</p>
          <br />
          <p>Along with the knick-knacks, The model for Chernobyl can also be projected in a ground plane after you click on the "switch ground plane" button. this will make a roughly 1-meter cube model appear in the ground which you could walk and navigate through using your phone.</p>
          <br />
          <Grid container style={{ width: "125%", textAlign: "center" }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src={mergeCube} height="450" width="400" alt="Italian Trulli" />
                <figcaption>(1. merge cube) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src={classCube} height="450" width="400" alt="Italian Trulli" />
                <figcaption>(2. class cube) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />
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
          <ol>
            <h4>Instructions</h4>
            <li>
              Install unity and vuforia from the tools used section above.
            </li>
            <li>
              Clone the repo from the github link, click <a href="https://github.com/karthik-36/Knick-knack-AR">here</a>.
            </li>
            <li>
              Open Unity Hub => Add New project => location to wherever you cloned the project
            </li>
            <li>
              Make an account in Vuforia and add your own license key in unity by clicking on the scene "sceneKnickKnack" <br />
              then click on "AR Camera" in scene tab => "open vuforia configuration" in inspector => license key.
            </li>
            <li>
              now to generate apk file you have to go to  <br /> file => build settings => select android => then "build" in bottom right corner. <br />
              this should generate the apk file.
            </li>
            <li>
              install the apk file into your android device & you are good to go.
            </li>
          </ol>
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

              <br />

              <ol>
                <h4>Internet models </h4>
                <li>
                  <a href="https://sketchfab.com/Hanesto">https://sketchfab.com/Hanesto</a>  : Multiple Venice buildings (homes)  by  Hanesto
                </li>
                <li>
                  <a href=" https://free3d.com/user/garleth93">https://free3d.com/user/garleth93</a>  : boat by garleth93
                </li>
                <li>
                  <a href="https://free3d.com/user/andrijaalp">https://free3d.com/user/andrijaalp</a> : bridge by  andrijaalp
                </li>
                <li>
                  <a href="mixamo.com">mixamo.com</a>  : couple & man on the boat
                </li>
              </ol>

              <br />

              <ol>
                <h4>Soundtrack </h4>
                <li>
                  <a href="https://www.youtube.com/watch?v=pOIBF-eIUEQ">https://www.youtube.com/watch?v=pOIBF-eIUEQ</a>  : Jesper Kyd - Back In Venice
                </li>
              </ol>
              <br />

              <p><h4 style={{ marginLeft: "7%" }}>Own model images :</h4></p>
              <br />
              <Grid container style={{ width: "105%", textAlign: "center", marginLeft: "8%" }}>
                <Grid md={12} lg={5}>
                  <div width="400">
                    <img src={lamp} height="650" width="400" alt="Italian Trulli" />
                    <figcaption>(3-way Lamp in venice) </figcaption>
                  </div>
                </Grid>
                <Grid md={12} lg={5}>
                  <div width="400">
                    <img src={sttower} height="650" width="400" alt="Italian Trulli" />
                    <figcaption>(St Mark's Campanile tower) </figcaption>
                  </div>
                </Grid>
              </Grid>
              <br />


              <br />
              <br />
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
              <br />
              <ol>
                <h4>Internet models</h4>
                <li>
                  <a href="https://free3d.com/user/bejek_2812">https://free3d.com/user/bejek_2812</a> : factory by  bejek_2812
                </li>
                <li>
                  <a href="https://www.turbosquid.com/Search/Artists/Denzer01">https://www.turbosquid.com/Search/Artists/Denzer01</a> : powerplant by Denzer01
                </li>
                <li>
                  <a href="https://www.turbosquid.com/Search/Artists/Soenke">https://www.turbosquid.com/Search/Artists/Soenke</a> : firetruck without wheels  by Soenke
                </li>
                <li>
                  <a href="mixamo.com">mixamo.com</a> : fireman
                </li>
              </ol>
              <br />

              <br />
              <ol>
                <h4>Soundtrack</h4>
                <li>
                  <a href="https://www.youtube.com/watch?v=zxjjie1Ohio&ab_channel=JoJo%27sBizarreAdventures">https://www.youtube.com/watch?v=5AyhE26Hbls</a>  :  Stardust Crusaders OST - Omen

                </li>
              </ol>
            </div></li>
          </ol>
          <br />
          <p><h4 style={{ marginLeft: "7%" }}>Own model images :</h4></p>
          <br />
          <Grid container style={{ width: "105%", textAlign: "center", marginLeft: "8%" }}>
            <Grid md={12} lg={5}>
              <div width="400">
                <img src={ferris} height="650" width="400" alt="Italian Trulli" />
                <figcaption>(Ferris Wheel) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="400">
                <img src={burning} height="650" width="400" alt="Italian Trulli" />
                <figcaption>(burning reactor) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="400">
                <img src={waterHose} height="650" width="400" alt="Italian Trulli" />
                <figcaption>(water hose & graphite) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Inspiration for the models</h2>
          <br />

          <p><h3>Nuclear plant & Ferris wheel of chernobyl :</h3></p>
          <br />
          <Grid container style={{ width: "125%", textAlign: "center" }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src="https://mini-adventures.com/wp-content/uploads/2020/01/chernobyl-tour-visit-1-1.jpg" height="350" width="400" alt="Italian Trulli" />
                <figcaption>(Abandoned Ferris wheel at Pripyat amusement park.) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src="https://i.insider.com/5cdb28de93a1523bc26e3052?width=600&format=jpeg&auto=webp" height="350" width="400" alt="Italian Trulli" />
                <figcaption>(Reactor 4 several months after the disaster.) </figcaption>
              </div>
            </Grid>
          </Grid>


          <br />

          <p>
            My original plan was to project a model of the abandoned Ferris wheel from Pripyat amusement park but not many people were aware of its existence and could not relate, so I went on and added a representation of the burning nuclear plant from the nuclear disaster which took place in April 26, 1986.
          </p>



          <br />
          <p><h4 style={{ marginLeft: "0px" }}>Custom Magic 8 ball slangs for Chernobyl's Knick-Knack: </h4></p>

          <ol style={{ marginLeft: "30px" }}>
            <li>"Could you repeat that?"</li>
            <li>"My sources say yes "</li>
            <li>"nope nope nope sprite=10"</li>
            <li>"YeS oF CoUrSe yOu CaN"</li>
            <li>"no sprite=9"</li>
            <li>"i don't think so sprite=9"</li>
            <li>"You may proceed sprite=3"</li>
            <li>"aahh hell naw"</li>
            <li>"if you say so!"</li>
            <li>"Yup Absolutely!"</li>
          </ol>
          <br />
          <p> (sprite=number represents emojies used in unity. eg: 7) "you may proceed"'s image shown below)</p>
          <br />
          <Grid container style={{ width: "125%", textAlign: "center" }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src={ball8} height="550" width="400" alt="8 ball" />
                <figcaption>(Random text after magic 8 ball rotation) </figcaption>
              </div>
            </Grid>
          </Grid>

          <br />
          <br />
          <br />
          <br />
          <p><h3>Street in Venice : </h3></p>
          <br />
          <Grid container style={{ width: "125%", textAlign: "center" }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src="https://images.fineartamerica.com/images-medium-large-5/lamppost-of-venice-prints-of-italy.jpg" height="350" width="400" alt="Italian Trulli" />
                <figcaption>(3-way street lamp in Venice) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src="https://live.staticflickr.com/3848/15255925626_d668ab6fdf_b.jpg" height="350" width="300" alt="Italian Trulli" />
                <figcaption>(St Mark's Campanile tower) </figcaption>
              </div>
            </Grid>
          </Grid>

          <br />

          <p>
            The model's inspiration comes from a street in Venice with the iconic three-way lamps, a waterway with gondolas instead of roads with cars, and the St Mark's Campanile tower.
            Aim was to create a beautiful & romantic waterway with classic medival building surrounding it which resembles venice's true arcitecture.
          </p>

          <br />

          <figure>

          </figure>

          <figure>

          </figure>

          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>Images/Phone Screenshots</h2>
          <br />
          <br />
          <Grid container style={{ width: "105%", textAlign: "center", marginLeft: "8%" }}>
            <Grid md={12} lg={5}>
              <div width="400">
                <img src={chernoFull} height="650" width="400" alt="Italian Trulli" />
                <figcaption>(Chernobyl full image) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="400">
                <img src={venice} height="650" width="400" alt="Italian Trulli" />
                <figcaption>(Venice full image) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />

          <br />
          <Grid container style={{ width: "100%", textAlign: "center", marginLeft: "1%" }}>
            <Grid md={12} lg={12}>
              <div width="400">
                <img src={full} height="450" width="900" alt="Italian Trulli" />
                <figcaption>(both knick-knacks together) </figcaption>
              </div>
            </Grid>

          </Grid>
          <br />

          <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>My thoughts on AR enhanced objects.</h2>
          <br />
         <p> Probably Clocks and alarms/physical weather displays would be blown out of existence.
          And anything in the real world that is showing static/general information for eg in airports/train stations could show info which is customised for you, like your departure terminal/your flight info & timings only   kitchen plate guide
          Now this might be a bit way to far into the future but what if you could see your own body parts and AR would immediately show its current health status getting its readings from possible body augmentations?
          We often keep checking our phones to get these kind of data but with AR glasses  get your current location.
          interaction with these  would open up a new world . presently its just us seeing  by recognising our finger location   halo lens demo  already showed some of this  capability although it had a much narrow viewing angle.</p>

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