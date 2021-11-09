import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { colors, Paper, Grid } from '@material-ui/core'
import { blue, orange } from '@material-ui/core/colors'
import ball8 from './images/8ball.jpeg'
import mergeCube from './images/merge cube.jpg'
import classCube from './images/class cube.jpeg'

import venice from './images/venice.jpeg'
import chernoFull from './images/cherno full.jpg'
import ferris from './images/ferris Wheel.jpg'
import waterHose from './images/water.jpeg'
import burning from './images/burning Reactor.jpg'
import lamp from './images/lamp.jpg'
import sttower from './images/sttower.jpg'
import full from './images/full.jpeg'

// npm run deploy

// project 2

import spa1 from './images2/spa1.png'
import spaw1 from './images2/spaw1.jpg'
import rangedMons from './images2/rangedMons.JPG';
import monster1ani from './images2/monster1ani.JPG';


import timer1 from './images2/timer1.jpg';
import goingOf from './images2/goingOf.jpg';
import tankSHed from './images2/tankSHed.jpg';
import eleche from './images2/eleche.jpg';
import recp from './images2/recp.jpg';
import officeSpawn from './images2/officeSpawn.jpg';
import aft from './images2/aft.jpg';
import furnace from './images2/furnace.jpg';
import furnaceL from './images2/furnaceL.jpg';
import holding from './images2/holding.jpg';
import ranged1 from './images2/ranged1.jpg';
import veins2 from './images2/veins2.jpg';
import shotgun1 from './images2/shotgun1.jpg';
import silver1 from './images2/silver1.jpg';
import baked1 from './images2/baked1.JPG';
import cal from './images2/cal.JPG';
import wCull from './images2/wCull.JPG';




<Grid
  container
  style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
>
  <Grid md={12} lg={12}>
    <div width="400">
      <img
        src={furnace}
        height="600"
        width="800"
        alt="Italian Trulli"
      />
      <figcaption>(1.furnace 2.coal 3.shovel) </figcaption>
    </div>
  </Grid>
</Grid>



function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles({
  root: {
    backgroundColor: orange,
  },
  tabs: {
    backgroundColor: orange,
  },
  section: {
    marginLeft: '30%',
    marginRight: '30%',
  },
  label: {},
})

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.root}
          style={{ backgroundColor: '#f58e00' }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Project 1" {...a11yProps(0)} />
          <Tab label="Project 2" {...a11yProps(1)} />
          <Tab label="Project 3" {...a11yProps(2)} />
          <Tab label="Student's Choice" {...a11yProps(3)} />
          <Tab label="Homework" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <title>HTML Elements Reference</title>
      <TabPanel value={value} index={0}>
        <section>
          <h1 style={{ textAlign: 'center' }}>Project 1: Road to Nowhere</h1>
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Introduction</h2>
          <br />
          <p>
            {' '}
            We basically have 2 cubes in real life called the merge cube (figure
            1) and class cube (figure 2). Using the patterns present on each
            side of the cube we can project a 3d model on top which in our case
            has to represent a place/city on earth. So, I am going to represent
            Venice and Chernobyl for merge cube and class cube respectively.
          </p>
          <br />
          <p>
            <b>Venice:</b> The model's inspiration comes from a street in Venice
            with the iconic three-way lamps, a waterway with gondolas instead of
            roads with cars, and the St Mark's Campanile tower.
          </p>
          <br />
          <p>
            <b>Chernobyl:</b> My original plan was to project a model of the
            abandoned Ferris wheel from Pripyat amusement park but not many
            people were aware of its existence and could not relate, so I went
            on and added a representation of the burning nuclear plant from
            "that incident".
          </p>
          <br />
          <p>
            Both the models show live weather of the place which is updated
            every 15 seconds, Also there is a magic-8-ball attached to both the
            knick-knacks which would show random slangs upon a rough 100 degree
            rotation on x or z axis.
          </p>
          <br />
          <p>
            Along with the knick-knacks, The model for Chernobyl can also be
            projected in a ground plane after you click on the "switch ground
            plane" button. this will make a roughly 1-meter cube model appear in
            the ground which you could walk and navigate through using your
            phone.
          </p>
          <br />
          <Grid container style={{ width: '125%', textAlign: 'center' }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img
                  src={mergeCube}
                  height="450"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(1. merge cube) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="500">
                <img
                  src={classCube}
                  height="450"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(2. class cube) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Demo Video</h2>
          <p style={{ textAlign: 'center' }}>(knick-Knack & ground plane)</p>
          <br />
          <div style={{ textAlign: 'center' }}>
            <iframe
              allowfullscreen="true"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              allow="fullscreen"
              width="1000"
              height="700"
              src="https://www.youtube.com/embed/O7-ifNvAnyo?start=70"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Source Code</h2>
          <br />
          <p>
            <h3 style={{ color: 'blue' }}>
              {' '}
              <a href="https://github.com/karthik-36/Knick-knack-AR">GitHub </a>
            </h3>
          </p>

          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Tools Used</h2>
          <br />
          <p>
            <a href="https://unity.com/" target="_blank">
              Unity Game Engine (Version 2019.4.28f1)
            </a>
          </p>
          <p>
            <a
              href="https://developer.vuforia.com/downloads/sdk"
              target="_blank"
            >
              Vuforia 9.8
            </a>
          </p>

          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>How to use</h2>
          <br />
          <ol>
            <h4>Instructions</h4>
            <li>
              Install unity and vuforia from the tools used section above.
            </li>
            <li>
              Clone the repo from the github link, click{' '}
              <a href="https://github.com/karthik-36/Knick-knack-AR">here</a>.
            </li>
            <li>
              Open Unity Hub => Add New project => location to wherever you
              cloned the project
            </li>
            <li>
              Make an account in Vuforia and add your own license key in unity
              by clicking on the scene "sceneKnickKnack" <br />
              then click on "AR Camera" in scene tab => "open vuforia
              configuration" in inspector => license key.
            </li>
            <li>
              now to generate apk file you have to go to <br /> file => build
              settings => select android => then "build" in bottom right corner.{' '}
              <br />
              this should generate the apk file.
            </li>
            <li>
              install the apk file into your android device & you are good to
              go.
            </li>
          </ol>
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Assets</h2>
          <br />
          <p>
            My own assets & list of all the assets that I{' '}
            <strike> stole </strike> borrowed from the internet.
          </p>
          <br />
          <ol>
            <li>
              <div>
                <h3>Merge Cube - Venice</h3>
                <ol>
                  <h4>Own models</h4>
                  <li>Venice street lamps</li>
                  <li>St Mark's Campanile tower</li>
                </ol>

                <br />

                <ol>
                  <h4>Internet models </h4>
                  <li>
                    <a href="https://sketchfab.com/Hanesto">
                      https://sketchfab.com/Hanesto
                    </a>
                    : Multiple Venice buildings (homes)  by  Hanesto
                  </li>
                  <li>
                    <a href=" https://free3d.com/user/garleth93">
                      https://free3d.com/user/garleth93
                    </a>
                    : boat by garleth93
                  </li>
                  <li>
                    <a href="https://free3d.com/user/andrijaalp">
                      https://free3d.com/user/andrijaalp
                    </a>{' '}
                    : bridge by  andrijaalp
                  </li>
                  <li>
                    <a href="mixamo.com">mixamo.com</a>  : couple & man on the
                    boat
                  </li>
                </ol>

                <br />

                <ol>
                  <h4>Soundtrack </h4>
                  <li>
                    <a href="https://www.youtube.com/watch?v=pOIBF-eIUEQ">
                      https://www.youtube.com/watch?v=pOIBF-eIUEQ
                    </a>
                    : Jesper Kyd - Back In Venice
                  </li>
                </ol>
                <br />

                <p>
                  <h4 style={{ marginLeft: '7%' }}>Own model images :</h4>
                </p>
                <br />
                <Grid
                  container
                  style={{
                    width: '105%',
                    textAlign: 'center',
                    marginLeft: '8%',
                  }}
                >
                  <Grid md={12} lg={5}>
                    <div width="400">
                      <img
                        src={lamp}
                        height="650"
                        width="400"
                        alt="Italian Trulli"
                      />
                      <figcaption>(3-way Lamp in venice) </figcaption>
                    </div>
                  </Grid>
                  <Grid md={12} lg={5}>
                    <div width="400">
                      <img
                        src={sttower}
                        height="650"
                        width="400"
                        alt="Italian Trulli"
                      />
                      <figcaption>(St Mark's Campanile tower) </figcaption>
                    </div>
                  </Grid>
                </Grid>
                <br />

                <br />
                <br />
              </div>
            </li>

            <li>
              <div>
                <h3>Class Cube - Chernobyl</h3>
                <ol>
                  <h4>Own models</h4>
                  <li>Ferris wheel</li>
                  <li>
                    Burning nuclear reactor, Water hoses, Graphite on the ground
                  </li>
                </ol>
                <br />
                <ol>
                  <h4>Internet models</h4>
                  <li>
                    <a href="https://free3d.com/user/bejek_2812">
                      https://free3d.com/user/bejek_2812
                    </a>{' '}
                    : factory by  bejek_2812
                  </li>
                  <li>
                    <a href="https://www.turbosquid.com/Search/Artists/Denzer01">
                      https://www.turbosquid.com/Search/Artists/Denzer01
                    </a>{' '}
                    : powerplant by Denzer01
                  </li>
                  <li>
                    <a href="https://www.turbosquid.com/Search/Artists/Soenke">
                      https://www.turbosquid.com/Search/Artists/Soenke
                    </a>{' '}
                    : firetruck without wheels by Soenke
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
                    <a href="https://www.youtube.com/watch?v=zxjjie1Ohio&ab_channel=JoJo%27sBizarreAdventures">
                      https://www.youtube.com/watch?v=5AyhE26Hbls
                    </a>
                    : Stardust Crusaders OST - Omen
                  </li>
                </ol>
              </div>
            </li>
          </ol>
          <br />
          <p>
            <h4 style={{ marginLeft: '7%' }}>Own model images :</h4>
          </p>
          <br />
          <Grid
            container
            style={{ width: '105%', textAlign: 'center', marginLeft: '8%' }}
          >
            <Grid md={12} lg={5}>
              <div width="400">
                <img
                  src={ferris}
                  height="650"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(Ferris Wheel) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="400">
                <img
                  src={burning}
                  height="650"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(burning reactor) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="400">
                <img
                  src={waterHose}
                  height="650"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(water hose & graphite) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>
            Inspiration for the models
          </h2>
          <br />

          <p>
            <h3>Nuclear plant & Ferris wheel of chernobyl :</h3>
          </p>
          <br />
          <Grid container style={{ width: '125%', textAlign: 'center' }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img
                  src="https://mini-adventures.com/wp-content/uploads/2020/01/chernobyl-tour-visit-1-1.jpg"
                  height="350"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>
                  (Abandoned Ferris wheel at Pripyat amusement park.){' '}
                </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="500">
                <img
                  src="https://i.insider.com/5cdb28de93a1523bc26e3052?width=600&format=jpeg&auto=webp"
                  height="350"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>
                  (Reactor 4 several months after the disaster.){' '}
                </figcaption>
              </div>
            </Grid>
          </Grid>

          <br />

          <p>
            My original plan was to project a model of the abandoned Ferris
            wheel from Pripyat amusement park but not many people were aware of
            its existence and could not relate, so I went on and added a
            representation of the burning nuclear plant from the nuclear
            disaster which took place in April 26, 1986.
          </p>

          <br />
          <p>
            <h4 style={{ marginLeft: '0px' }}>
              Custom Magic 8 ball slangs for Chernobyl's Knick-Knack:{' '}
            </h4>
          </p>

          <ol style={{ marginLeft: '30px' }}>
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
          <p>
            {' '}
            (sprite=number represents emojies used in unity. eg: 7) "you may
            proceed"'s image shown below)
          </p>
          <br />
          <Grid container style={{ width: '125%', textAlign: 'center' }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img src={ball8} height="550" width="400" alt="8 ball" />
                <figcaption>
                  (Random text after magic 8 ball rotation){' '}
                </figcaption>
              </div>
            </Grid>
          </Grid>

          <br />
          <br />
          <br />
          <br />
          <p>
            <h3>Street in Venice : </h3>
          </p>
          <br />
          <Grid container style={{ width: '125%', textAlign: 'center' }}>
            <Grid md={12} lg={5}>
              <div width="500">
                <img
                  src="https://images.fineartamerica.com/images-medium-large-5/lamppost-of-venice-prints-of-italy.jpg"
                  height="350"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(3-way street lamp in Venice) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="500">
                <img
                  src="https://live.staticflickr.com/3848/15255925626_d668ab6fdf_b.jpg"
                  height="350"
                  width="300"
                  alt="Italian Trulli"
                />
                <figcaption>(St Mark's Campanile tower) </figcaption>
              </div>
            </Grid>
          </Grid>

          <br />

          <p>
            The model's inspiration comes from a street in Venice with the
            iconic three-way lamps, a waterway with gondolas instead of roads
            with cars, and the St Mark's Campanile tower. Aim was to create a
            beautiful & romantic waterway with classic medival building
            surrounding it which resembles venice's true arcitecture.
          </p>

          <br />

          <figure></figure>

          <figure></figure>

          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>
            Images/Phone Screenshots
          </h2>
          <br />
          <br />
          <Grid
            container
            style={{ width: '105%', textAlign: 'center', marginLeft: '8%' }}
          >
            <Grid md={12} lg={5}>
              <div width="400">
                <img
                  src={chernoFull}
                  height="650"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(Chernobyl full image) </figcaption>
              </div>
            </Grid>
            <Grid md={12} lg={5}>
              <div width="400">
                <img
                  src={venice}
                  height="650"
                  width="400"
                  alt="Italian Trulli"
                />
                <figcaption>(Venice full image) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />

          <br />
          <Grid
            container
            style={{ width: '100%', textAlign: 'center', marginLeft: '1%' }}
          >
            <Grid md={12} lg={12}>
              <div width="400">
                <img src={full} height="450" width="900" alt="Italian Trulli" />
                <figcaption>(both knick-knacks together) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />

          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>
            My thoughts on AR enhanced objects.
          </h2>
          <br />
          <p>
            If AR Enhanced objects gain some traction in real life then most
            physical info display devices like Clocks and alarms, weather
            display devices would be blown out of existence. If AR can be
            integrated with glasses/contact lenses then I could see them
            replacing phones for a lot of basic functions as you don't really
            need to take out your phone again & again. In case of AR, the
            projections are just there!
          </p>

          <br />

          <p>
            And anything in the real world that is showing static/general
            information for the population eg in airports/train stations that
            show info for all flights and trains could now show info that is
            customized for you, like displaying only your departure
            terminal/your flight info & timings. Which would ease up things.
          </p>

          <br />

          <p>
            AR Enhanced objects could also be used as kids's toys (multiple toys
            in 1 knick-knack) or can be used as learning material. Like how we
            saw in this demo with the knick knack. I would say that it is the
            easiest(maybe the cheapest too) way to look around a 3d object.
          </p>

          <br />

          <p>
            We could also have AR-enhanced kitchens where every cooking
            container/bowl/plate/grill could be AR-enhanced. Want to learn a new
            recipe? Then the bowls could show how many teaspoons/cups are
            needed(to be added into it). You could get feedback in real-time for
            current temperature of food/what else to add in the container & what
            to do next. Maybe you could build and share your own recipes like
            this and other people could follow your recipe through AR and get a
            rating on food for how close they were to the original.
          </p>
          <br />
          <p>
            Now, this might be a bit way to far into the future but what if you
            could see your own body parts and AR would immediately show its
            current health status getting its readings from possible body
            augmentations?
          </p>
          <br />

          <p>
            Imagine a car dashboard or a bike helmet having an inbuilt AR
            enhancer. You could see which direction you need to go with AR
            pointers, Also AR could show the optimal path and speed(green to red
            multiple arrow indicators) that you should be going according to the
            road, similar to what we currently have in Racing Game tutorials.
            Also, you would not need to look down at your maps(on your phone or
            car's built-in screen) which may prevent a lot of accidents.
          </p>
          <br />
          <p>
            Interaction with these AR-enhanced objects would open up a new
            world. Presently its just us seeing 3d objects placed in our view
            but if we were able to accurately interact with our finger without
            or with minimum use of external sensors. The halo lens demo already
            showed some of this capability although it had a much narrow viewing
            angle.
          </p>
          <br />
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <section >
          <h1 style={{ textAlign: "center" }}>Project 2: </h1>
        </section> */}















































        <section>
          <h1 style={{ textAlign: 'center' }}>
            Project 2: (Don't Fear) The Reaper
          </h1>
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Introduction</h2>
          <br />

          <p>
            Welcome to project 2!, let me give you a bit of a context. We
            basically have ScareCo office, and they are responsible for helping
            users get rid of their phobias. Students can choose any phobia of
            their choice and try to help users suffering from their respective
            phobias.
          </p>
          <br />
          <p>
            The phobia I have chosen is <b>Teraphobia : Fear of monsters</b>
          </p>
          <br />
          <p>
            <b>Project description :</b> As a graduate student along with the
            ScareCo office phobia, we also need to make an outside world where
            the user could go after they open the door with their hand. For my
            project the user spawns outside the office on a road in the night
            when its raining(trying to create a spooky enviroiment). They would
            first have to make their way into the office using an elevator that
            goes down. (Yes, my ScareCo office is underground)
          </p>
          <br />
          <p>
            After reaching down and opening the door they would finally reach
            the ScareCo office where they would find a red button with a banner
            that says : "push the red button the start phobia simulation".
            Pushing the red button would bring in a transition wall that
            transforms the ScareCo office into the teraphobia simulation office.
            99% of the office structure is the same with some cubicles removed,
            floor and wall material changed, and new models added. The red
            button still stays in the simulated office enviroiment and acts as a
            safety switch. if the user ever feels overwhelmed with the
            teraphobia simulation they could come back and tap the red button
            which would end the simulation.
          </p>
          <br />
          <br />
          <p>
            <b>How would the user overcome teraphobia? </b>
          </p>

          <p>
            -The user's goal is to stay calm and carry out objectives as shown
            on the screen(bottom left corner) while being chased by a monster
            and doging fireballs from a second ranged monster. Every time the
            user finishes an objective they get a reward that helps them in
            their next objective. The user can't directly fight the monsters so
            they would have to try to find other ways of defeating them to
            overcome their teraphobia.
          </p>

          <br />
          <p>
            <b>In Simulation Objectives :</b> (Spoiler warning : please skip
            this if you have not seen my presentation or youtube video)
          </p>
          <ol>
            <li>
              Turn on the furnace -> the user has to grab a shovel and push the
              coal inside the furnace, then grab a fire torch and put it inside
              the furnace. <br />
              <b>(Rewards : Lights are switched on, shield unlocked)</b>
            </li>
            <li>
              Find a way to defeat the ranged monster -> the user has use the
              ladder and climb to the second floor and then they have to use
              some parkouring skills to climb the veins, go to the center turn
              around and jump on the chandelier, they then have to grab a iron
              rod on the chandelier and cut the fan, which then falls on the
              ranged monster, defeating it.
              <br />
              <b>(Reward : Shotgun unlocked)</b>
            </li>
            <li>
              Find a way to get the silver sword from the platform -> The user
              gets a shot gun from previous objective. they can't simply shoot
              at the monster to defeat it. That can only be done with a silver
              sword. The user can get the silver sword by shooting the platform
              ropes, which would make the sword fall down. <br />
              <b>(Reward : Silver Sword unlocked)</b>
            </li>
            <li>
              Defeat the melee monster -> grab and swing the silver sword at the
              monster.
              <br /> <b> (Reward : User fear monsters no more.) </b>
            </li>
          </ol>
          <br />
          <p>
            The user can go push the red button to come out of the simulation.
            (They could do this anytime they want).
          </p>
          <br />

          <Grid container style={{ width: '100%', textAlign: 'center' }}>
            <Grid xs={12}>
              <div width="1000">
                <img
                  src={spaw1}
                  height="620"
                  width="1000"
                  alt="Italian Trulli"
                />
                <figcaption>(spawn location) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Demo Video</h2>
          <p style={{ textAlign: 'center' }}>(My POV using Oculus Quest 2)</p>
          <br />
          <div style={{ textAlign: 'center' }}>
            <iframe width="1000" height="800" src="https://www.youtube.com/embed/NQU_2KeBxQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Source Code</h2>
          <br />
          <p>
            <h3 style={{ color: 'blue' }}>
              {' '}
              <a href="https://github.com/karthik-36/ScareCo">GitHub </a>
            </h3>
          </p>

          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Tools Used</h2>
          <br />
          <p>
            <a href="https://unity.com/" target="_blank">
              Unity Game Engine (Version 2019.4.28f1)
            </a>
          </p>
          <p>
            <a href="https://www.vrtk.io/" target="_blank">
              VRTK v4
            </a>
          </p>

          <p>
            <a
              href="https://www.autodesk.in/products/3ds-max/overview"
              target="_blank"
            >
              Autodesk - 3DS MAX
            </a>
          </p>

          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>How to use</h2>
          <br />
          <ol>
            <h4>Instructions</h4>
            <li>
              Install the above mentioned version of Unity. All required files for VRTK & 3D models are already included in the project.
            </li>
            <li>
              Clone the repo from the github link, click{' '}
              <a href="https://github.com/karthik-36/ScareCo">here</a>.
            </li>

            <li>
              Open the project in Unity.
            </li>

            <li>
                If the scene isn't loaded by default, go to Assets-> ScareCo17 Final. Double click on the Scene to load the Scene.
              There are other Scenes named ScareCo :number: where number is ranging from 0 to 16. If you want to see the project progression maybe you could have a look at these scenes as well.
            </li>
            <li>
              This project uses a Virtual Reality Toolkit VRTK v4, used for building Virtual Reality apps in Unity. If you want to know more about VRTK use this  <a href="https://www.vrtk.io/" target="_blank">
                link
              </a>
            </li>
            <li>
              There are 2 ways to run the project: 1) through headset 2) using the Spatial Simulator
            </li>
            <li>
              To run via headset you have to go to file -> build settings -> Android. If by default your platform is not android then choose android and click on "switch platform", this process will take some time as you would be downloading Android SDK. Now in run device make sure that you change from default device to quest device ID. then hit build and run. The first time process will take some time, but the consecutive runs would be much faster.
              You need to select yes on "allow debugging from this computer" in your quest device when the prompt is shown & keep the usb plugged in at all times while the application is being loaded. Also make sure developer mode in quest is turned on.

              <br />
              <br />

              Once the build is complete, the app will automatically start on your headset and if it doesn't, then in the oculus main menu click the 3x3 dot matrix icon to open up Apps then  -> Unknown Sources -> com.CS428Fall2021.Project2ScareCoSampleCode'. use your controller to select the app, which should launch after a short delay.

            </li>
            <li>
              To use Spatial Simulator, you need to click on CameraRigs.SpatialSimulator in scene hirerchy and enable it(not active by default).
              Then simply click on play.

              <ol>VRTK Simulator key bindings:

                <li>WASD keys for movement in four directions </li>
                <li>Q to teleport to a location</li>
                <li>Alt to use the controllers. Left click to grad a grabbable object and left click again to release it.</li>
                <li>In controller mode, you can move along the axes using Control and Alt. Tab to switch between the left and right controllers. </li>
              </ol>



            </li>
          </ol>
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Assets</h2>
          <br />
          <p>
            My own assets & list of all the assets that I borrowed from the
            internet.
          </p>
          <br />
          <ol>
            <h4>Own models - Inside ScareCo office</h4>
            <li>Fire torch</li>

            <li>Timer watch,  Fps watch   </li>

            <li>Silver sword</li>

            <li>Ceiling fan   </li>
            <li>Chandelier</li>
            <li>Red Button & Platform</li>
            <li>Fire torch & Shield rack</li>
            <li>Silver Sword platform</li>
          </ol>

          <br />

          <ol>
            <h4>Internet models - Inside ScareCo office</h4>
            <li>
              <a href="https://free3d.com/user/justdoit">
                https://free3d.com/user/justdoit
              </a>
              : Window
            </li>
            <li>
              <a href="https://www.cgtrader.com/vaahoanimators">
                https://www.cgtrader.com/vaahoanimators
              </a>
              : Veins (plant)
            </li>
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/Reece-Taylor">
                https://www.turbosquid.com/Search/Artists/Reece-Taylor
              </a>{' '}
              : Deer skeleton head
            </li>

            {/* <li>
              <a href="mixamo.com">mixamo.com</a>  : Medival tripod
            </li> */}
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/Fat-Crayon">
                https://www.turbosquid.com/Search/Artists/Fat-Crayon
              </a>
              : Clock
            </li>
            <li>
              <a href="https://www.cgtrader.com/free-3d-models/furniture/other/round-top-fireplace">
                https://www.cgtrader.com/free-3d-models/furniture/other/round-top-fireplace
              </a>
              : Furnace
            </li>
            <li>
              <a href="https://www.cgtrader.com/bartalambane">
                https://www.cgtrader.com/bartalambane
              </a>
              : Pipe & Generator
            </li>
            <li>
              <a href="https://assetstore.unity.com/publishers/16823">
                https://assetstore.unity.com/publishers/16823
              </a>
              : Shotgun store
            </li>
            <li>
              <a href="https://assetstore.unity.com/publishers/37272">
                https://assetstore.unity.com/publishers/37272
              </a>
              : Table
            </li>
            <li>
              <a href="https://www.cgtrader.com/vilitay">
                https://www.cgtrader.com/vilitay
              </a>
              : Railing
            </li>
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/avatarcristy">
                https://www.turbosquid.com/Search/Artists/avatarcristy
              </a>
              : Shield
            </li>
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/Darklink-Kyle">
                https://www.turbosquid.com/Search/Artists/Darklink-Kyle
              </a>
              : pillar
            </li>
            <li>
              <a href="https://free3d.com/user/hgbckone">
                https://free3d.com/user/hgbckone
              </a>
              : Shovel
            </li>
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/FATIH-ORHAN">
                https://www.turbosquid.com/Search/Artists/FATIH-ORHAN
              </a>
              : Coal
            </li>
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/w1050263">
                https://www.turbosquid.com/Search/Artists/w1050263
              </a>
              : Spot light Emitter
            </li>
            <li>
              <a href="https://www.mixamo.com/#/?page=3&query=&type=Character">
                https://www.mixamo.com/#/?page=3&query=&type=Character{' '}
              </a>
              - Maynard : Melee Monster
            </li>
            <li>
              <a href="https://www.mixamo.com/#/?page=3&query=&type=Character">
                https://www.mixamo.com/#/?page=3&query=&type=Character
              </a>
              - Drake : Ranged Monster
            </li>
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/bariacg">
                https://www.turbosquid.com/Search/Artists/bariacg
              </a>
              : Charactor hands
            </li>
            <li>
              <strike>
                <a href="https://www.cgtrader.com/shiromani">
                  https://www.cgtrader.com/shiromani
                </a>
                : Left & right hand{' '}
              </strike>{' '}
              (Removed due to fps drop)
            </li>

            <li>
              <strike>
                <a href="https://www.turbosquid.com/Search/Artists/DTG-Amusements">
                  https://www.turbosquid.com/Search/Artists/DTG-Amusements
                </a>
                : Chandelier & 6x Candle lights{' '}
              </strike>{' '}
              (Removed due to fps drop)
            </li>
          </ol>
          <br />



          <br />

          <ol>
            <h4>Own models - Outside ScareCo office</h4>
            <li>Terrain</li>
            <li>Road(excluding texture)   </li>
            <li>Elevator platform</li>
            <li>ScareCo entrance shed & elevator chamber </li>
            <li>2x Door</li>
          </ol>
          <br />

          <ol>
            <h4>Internet models - Outside ScareCo office</h4>
            <li>
              <a href="https://www.cgtrader.com/cbspicer">
                https://www.cgtrader.com/cbspicer
              </a>
              : Low Poly Car 1
            </li>

            <li>
              <a href="https://free3d.com/user/taskirmaz">
                https://free3d.com/user/taskirmaz
              </a>
              : Street light
            </li>
            <li>
              <a href="https://assetstore.unity.com/publishers/7730">
                https://assetstore.unity.com/publishers/7730
              </a>{' '}
              : Tree
            </li>
            <li>
              <a href="https://www.cgtrader.com/azdimension">
                https://www.cgtrader.com/azdimension
              </a>
              : Fence
            </li>
            <li>
              <a href="https://www.cgtrader.com/breton32">
                https://www.cgtrader.com/breton32
              </a>
              : Plant & pot
            </li>
            <li>
              <a href="https://www.cgtrader.com/akerstudio">
                https://www.cgtrader.com/akerstudio
              </a>
              : Reception table
            </li>
            <li>
              <a href="https://www.turbosquid.com/Search/Artists/heaven99">
                https://www.turbosquid.com/Search/Artists/heaven99
              </a>
              : Chair
            </li>
            <li>
              <a href="https://www.mixamo.com/#/?page=2&type=Character">
                {' '}
                https://www.mixamo.com/#/?page=2&type=Character
              </a>
              - Joe : Receptionist
            </li>
            <li>
              <a href="https://www.turbosquid.com/FullPreview/Index.cfm/ID/547814">
                https://www.turbosquid.com/FullPreview/Index.cfm/ID/547814
              </a>
              : Telephone
            </li>
            <li>
              <a href="https://www.cgtrader.com/luccasfreitas">
                https://www.cgtrader.com/luccasfreitas
              </a>
              : Laptop
            </li>
            <li>
              <a href="https://free3d.com/user/printable_models">
                https://free3d.com/user/printable_models
              </a>
              : Deer
            </li>
            <li>
              <a href="https://free3d.com/user/delirek">
                https://free3d.com/user/delirek
              </a>
              : Cyber truck
            </li>
            <li>
              <a href="https://www.cgtrader.com/bob1938">
                https://www.cgtrader.com/bob1938
              </a>
              : Roof
            </li>
            <li>
              <a href="https://www.cgtrader.com/jhon-elder">
                https://www.cgtrader.com/jhon-elder
              </a>
              : Gate
            </li>
            <li>
              <a href="https://www.cgtrader.com/animatedheaven">
                https://www.cgtrader.com/animatedheaven
              </a>
              : Water tower
            </li>
            <li>
              <a href="https://www.cgtrader.com/ginleepa">
                https://www.cgtrader.com/ginleepa
              </a>
              : Road Railing
            </li>
            <li>
              <strike>
                {' '}
                <a href="https://www.cgtrader.com/bhaskarkumarsingh">
                  https://www.cgtrader.com/bhaskarkumarsingh
                </a>
                :Tesla 3 Car
              </strike>{' '}
              (Removed due to fps drop)
            </li>
            <li>
              <strike>
                {' '}
                <a href="https://free3d.com/user/storque12">
                  https://free3d.com/user/storque12
                </a>
                : Volkswagan Car
              </strike>{' '}
              (Removed due to fps drop)
            </li>
          </ol>
          <br />
          <ol>
            <h4>Textures packs & prefabs</h4>
            <li>https://assetstore.unity.com/packages/2d/textures-materials/metals/yughues-free-metal-materials-12949 - Metal texture pack</li>
            <li>https://assetstore.unity.com/packages/2d/textures-materials/wood/yughues-free-wooden-floor-materials-13213 - Wooden texture pack </li>
            <li>https://assetstore.unity.com/publishers/1669  - WAR FX pack</li>
          </ol>
          <br />
          <ol>
            <h4>Soundtrack </h4>
            <li>
              <a href="https://www.youtube.com/watch?v=9qLWf2j_bKk&ab_channel=SoundChaser%27sSoundEffects-Topic">
                https://www.youtube.com/watch?v=9qLWf2j_bKk&ab_channel=SoundChaser%27sSoundEffects-Topic
                :
              </a>
              Monster Sound Effect
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=7O6ec8IaBzc&ab_channel=SoundEffects">
                https://www.youtube.com/watch?v=7O6ec8IaBzc&ab_channel=SoundEffects
                :
              </a>
              User Breathing
            </li>

            <li>
              <a href="https://www.youtube.com/watch?v=j428Qb49IHs&ab_channel=SoundEffectDatabase">
                https://www.youtube.com/watch?v=j428Qb49IHs&ab_channel=SoundEffectDatabase
                :
              </a>
              Fire sound
            </li>


            <li>
              <a href="https://www.youtube.com/watch?v=j428Qb49IHs&ab_channel=SoundEffectDatabase">
                https://www.youtube.com/watch?v=j428Qb49IHs&ab_channel=SoundEffectDatabase
                :
              </a>
              Static noise from transition wall
            </li>

            <li>
              <a href="https://www.youtube.com/watch?v=1nD3Sp_saz4&ab_channel=ESNProductions">
                https://www.youtube.com/watch?v=1nD3Sp_saz4&ab_channel=ESNProductions
                :
              </a>
              Horror Ambient background music
            </li>



            <li>
              <a href="https://www.youtube.com/watch?v=ZwjpG5e7ZXw&ab_channel=Soundchips">
                https://www.youtube.com/watch?v=ZwjpG5e7ZXw&ab_channel=Soundchips
                :
              </a>
              Shotgun Blast
            </li>

            <li>
              <a href="https://www.youtube.com/watch?v=T9HYqBLS8Xg&ab_channel=FreeSounds">
                https://www.youtube.com/watch?v=T9HYqBLS8Xg&ab_channel=FreeSounds
                :
              </a>
              Ranged monster casting fireball sound
            </li>


            <li>
              <a href="https://www.youtube.com/watch?v=BowWinCmk6I&ab_channel=SoundEffectDatabase">
                https://www.youtube.com/watch?v=BowWinCmk6I&ab_channel=SoundEffectDatabase
                :
              </a>
              Fan noise
            </li>




            <br />

            <br />
            <h2 style={{ textAlign: 'center', color: 'blue' }}>
              Images/Oculus Screenshots
            </h2>
            <br />
            <br />
            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={timer1}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1. low poly car 2. timer watch 3. fps watch 4. tree  5. road railing 6. charactor hands) </figcaption>
                </div>
              </Grid>
            </Grid>
            <br />
            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={goingOf}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.deer 2.street light 3.gate 4.ScareCo fence 5.terrain ) </figcaption>
                </div>
              </Grid>

            </Grid>

            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={tankSHed}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.cyber truck 2.ScareCo entrance & door 3. water tower ) </figcaption>
                </div>
              </Grid>

            </Grid>
            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={eleche}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.elevator platform 2.elevator chamber 3. elevator down button ) </figcaption>
                </div>
              </Grid>

            </Grid>
            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={recp}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.reception desk 2.telephone 3.laptop 4.receptionist 5.plant 6.chair 7.double doors ) </figcaption>
                </div>
              </Grid>

            </Grid>
            <br />
            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={officeSpawn}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1. red button & platform) </figcaption>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={aft}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.fire torch 2.Shield 3.pillars 4.window & broken window(monster spawn area) 5.clock) </figcaption>
                </div>
              </Grid>
            </Grid>


            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={furnace}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.furnace 2.coal 3.shovel) </figcaption>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={furnaceL}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.furnace(after being lit)) </figcaption>
                </div>
              </Grid>
            </Grid>


            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={holding}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.melee monster chasing you  2.deer skeleton head 3. silver sword platform (hung by rope)4. 2x spotlights) </figcaption>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={ranged1}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.ranged monster throwing fireballs at you  2.fan) </figcaption>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={veins2}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.climbable veins  2.chandelier) </figcaption>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={shotgun1}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.shotgun 2. pipe (above furnace) 3. generator (hard left)) </figcaption>
                </div>
              </Grid>
            </Grid>


            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={silver1}
                    height="600"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(1.silver sword 2.table (left)) </figcaption>
                </div>
              </Grid>
            </Grid>






            <ol>


              <h3>- 5 of the models that have appropriate physics and collliders  </h3>
              <li> Fire torch </li>
              <li> Shotgun</li>
              <li> Shotgun slugs </li>
              <li> Coal </li>
              <li> Shovel</li>
              <li> Monster 1 & 2</li>
              <li> Silver sword</li>
              <li> Chandelier rod</li>
              <li> Shield</li>
              <li> Fireball</li>
            </ol>
            <br />

            <ol>
              <h3>- 4 new lights for the room  </h3>
              <p>(note : all my lights are baked and shadows are disabled to pump more fps, fire torch is 1 exception)</p>
              <li> Fire torch </li>
              <li> furnce (after being lit by user)</li>
              <li> spot light 1 </li>
              <li> spot light 2</li>
              <li> chandelier 1</li>
              <li> chandelier 2</li>
              <li> Directional light (night)</li>
            </ol>
            <br />

            <ol>
              <h3>- 2 objects that produce new objects : </h3>
              <li> Shotgun instansiates bullets and muzzle flash </li>
              <li> Ranged monster spawns ~15 seconds after the red button is pressed then instansiates fireball directed at player every 2.3 seconds(invokeRepeating used)</li>
            </ol>
            <br />

            <ol>
              <h3>- 2 of the models should be animated and move, or move some of their parts  : </h3>
              <li> monster 1 -melee </li>
              <img
                src={monster1ani}
                height="550"
                width="600"
                alt="Italian Trulli"
              />
              <figcaption>(melee monster animation state diagram) </figcaption>
              <li> monster 2 -ranged <div width="500">
                <img
                  src={rangedMons}
                  height="550"
                  width="600"
                  alt="Italian Trulli"
                />
                <figcaption>(ranged monster animation state diagram) </figcaption>
              </div></li>
              <li> ceiling fan</li>
              <li> elevator</li>
              <li> silver sword platform</li>
            </ol>
            <br />



            <ol>
              <h3>- 5 of the models models with physics need to be grabbable / droppable / tossable    </h3>
              <li> fire torch </li>
              <li> Shotgun</li>
              <li> shovel</li>
              <li> silver sword</li>
              <li> Chandalier rod</li>
              <li> Shield</li>
            </ol>
            <br />



            <ol>

              <h3>- 4 unique special sounds </h3>
              <li> fire torch fire sound (louder when you get closer)</li>
              <li> monster sound (louder when you get closer)</li>
              <li> Fan spining noise(louder when you get closer)</li>
              <li> breathing (overall)</li>
              <li> shotgun gunshot (sound effect upon firing)</li>
              <li> fireball (cast sound effect upon shooting)</li>
            </ol>
            <br />











          </ol>



          <figure></figure>



          <br />
          <p>
            <h2 style={{ textAlign: 'center', color: 'blue' }}>
              Fps & Optimization
            </h2>
          </p>
          <br />

          <p>
            The first time I tested my app in class there were certain areas(explained below) that caused massive fps drops to 10 - 15 frames per sec especially near the 6x candle chandelier. Some other places where I experienced drops were near the tesla 3 & Volkswagon car which I later removed. I used my fps watch to investigate all the areas in my project (as shown in the video) and was able to get consistent 72 fps on my friend's quest 2.

          </p>
          <br />
          <p>

            In the video below I used my fps watch to show how I got only 20-ish fps when I look at the 6x candle lights on the chandelier then the fps watch goes back to 72 when I look back at the wall. I had no idea that this was a problem when I was using the inbuilt spatial simulator. The 20 fps that I got was on a quest 2 device. In Quest 1 you could expect 30% - 40% lower fps compared to quest 2 as when I tested in class I was getting only 10 - 15 fps along with a lot of screen tear(factoring in the almost 2x performance upgrade along with the higher render resolution of the quest 2).
          </p>
          <br />
          <div style={{ textAlign: 'center' }}>
            <iframe width="1000" height="800" src="https://www.youtube.com/embed/PSs30UZYCwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <ol style={{ marginLeft: '30px' }}>
            <br />
            <p>
              <h3>- 3 steps that greatly helped me increase fps</h3>
            </p>
            <br />
            <li><b>Occlusion culling : </b>Basically means don't render what you dont see. We have to open Occlusion culling window and then we have to set a parameter for minimum bake cube size(my project was set to 1) and click on bake. Camera Demo shown in the image below. </li>
            <br />
            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >

              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={wCull}
                    height="450"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(Scene image without culling, everything to the sides and behind the camera are behind are being rendered) </figcaption>
                </div>
                <br />
              </Grid>

              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={cal}
                    height="450"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(almost nothing is rendered behind and to the sides of the camera giving us some sweet fps) </figcaption>
                </div>
              </Grid>
            </Grid>
            <br />
            <li><b>Baked lighting:</b>  The light texture is written onto the reflective surface texture when you bake lights. For baking lights first, click on all the light sources of your choice & change from realtime light source to baked, and after that click on window -> rendering -> lighting settings -> generate lighting (the process will take some time). Using baked lighting means that there are no dynamic lights and more memory is consumed but this gives us a healthy fps boost. I have also disabled shadows for most of the light sources. This means our application won't look as good as it could but we need to remember that at the end of the day oculus is a mobile device and has limited hardware capabilities </li>
            <br />
            <Grid
              container
              style={{ width: '80%', textAlign: 'center', marginLeft: '8%' }}
            >
              <Grid md={12} lg={12}>
                <div width="400">
                  <img
                    src={baked1}
                    height="450"
                    width="800"
                    alt="Italian Trulli"
                  />
                  <figcaption>(all lights used were baked and not real time) </figcaption>
                </div>
              </Grid>
            </Grid>
            <br />
            <li><b>Reducing the number of polygons</b> : I removed most of the high poly modals as shown in the assets used tab and replaced them with low polygon modals to improve fps, I also decreased terrain texture resolution outdoors from 512 x 512 to 32 x 32. It makes the terrrain look a bit more "edgy" but again, fps!</li>

          </ol>
          <br />
          <br />
          <p>
            <h2 style={{ textAlign: 'center', color: 'blue' }}>
              My thoughts on how viewing and interacting with your world is
              different in the simulator and the headset.
            </h2>
          </p>
          <br />
          <p>Context: For testing VR apps on unity we have an in-built vrtk simulator gameObject called spatial simulator, quite useful to test out quick and small features but is a bit hard to use(i feel). For how to use the spatial controller you can check out the instructions given above(on install and use section).</p> <br />
          <Grid
            container
            style={{ width: '90%', textAlign: 'center', marginLeft: '8%' }}
          >
            <Grid md={12} lg={12}>
              <div width="700">
                <img
                  src={spa1}
                  height="450"
                  width="700"
                  alt="Italian Trulli"
                />
                <figcaption>(spatial controller image) </figcaption>
              </div>
            </Grid>
          </Grid>
          <br />

          <p>
            For this project, we need to run our phobia simulator in a headset, and for my phobia, I would have to help the user get over their fear of monsters. For testing our project we cant use oculus or any other headset all the time because some people simply don't have it or even if they do then it easily takes around 3-4 minutes to build and run your app on the headset. So we usually test with the spatial simulator that is an inbuilt headset and hand controller simulator where the user can use WASD keys and mouse input.
          </p>
          <br />
          <p>
            Testing out small things like collision triggers and simple tasks like pressing buttons is a lot faster with the spatial simulator. simply put the camera near the to-be-tested area then debug. There are limitations, however.
            it is extremely hard and slow to climb the ladder or do any kind of parkour with your hand like climbing veins. Using the simulator feels like you are playing a normal computer game. For keyboard users you are restricted only to 4 directions, whereas in the headset you have 360 degrees of motion, It was so frustrating that I had to go to my friend's place or the classroom whenever I wanted to test out parkouring. And not just parkouring, interacting with a more complex object like the shotgun is also Difficult.
            Another drawback is the fps counter. When you test in a simulator, you are using the computer's hardware which is a lot more powerful. So the frame rates you receive can be deceiving. If there is any object/lighting that is causing fps to drop then you won't be immediately able to pick it up on the simulator. Imagine my surprise when I saw 10 fps the first time I tested on the classroom's oculus.
          </p>
          <br />
          <p>
            Loading Your application onto the VR is far more immersive when compared with the spatial simulator. You feel lost in your world. Some of my friends who tried using my application legit got scared when they first saw the monster towering over them. navigation is far more superior in the VR headset. Interacting with objects is on a whole new level in the headset. The ones I enjoyed the most were swinging the sword at the monster, shooting the shotgun, and opening the door that I build. All interactions grab/throw/shoot/use/push/parkour feel a lot more immersive and you get a good exercise in the VR compared with the simulator
            The fps you get are accurate and you can generally assume that other users may get roughly the same amount of fps in the respective areas. Drawbacks are that it takes a lot of time to load applications & if by chance you left the spatial simulator active in your scene hierarchy then you would have to cancel(canceling build again takes more than a minute) and build again, I am pretty sure most of the folks in class have experienced this.
            I don't feel good spending too much time on VR, sometimes I feel dizzy whenever I fall or go down the elevator in the VR, especially if I test it at night, which affects my sleep cycle.
          </p>
          <br />
          <p>
            To conclude I feel that if you want to test out some basic stuff then we could stick to the spatial simulator. For the complex interactions and fps testing, you would need a headset as no simulator could give you such experience.
          </p>

          <br />
        </section>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        <section>
          <h1 style={{ textAlign: 'center' }}>Project 3: </h1>
        </section>
      </TabPanel> */}
      <TabPanel value={value} index={3}>



        <section style = {{fontSize : '16px'}}>
          <h1 style={{ textAlign: 'center' }}>Student's choice</h1>
          <h1 style={{ textAlign: 'center' }}>The Climb 2</h1>
          <br />
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Introduction</h2>
          <br />

          {/* - Introduction to what it is
    - 
    - 
    -  */}


          <p>
            {' '}
            The Climb 2 brings the fun of mountaineering alive with all-new city-style maps (lacking in the previous part), new events, and more. Ascend epic peaks, navigate tremendous caves, scale skyscrapers, and find out shortcuts as you discover your direction to the pinnacle. You can compete with other players in multiplayer and post new records to leaderboards.
          </p>
          <br />
          <p>
            I did get a chance to play The Climb 2 for a few hours so the critique below would be a mix of my experience and other user reviews from occasional players. The game is beautiful, with fantastic sound and gorgeous landscapes. The feeling of heights and solitude is meditative and relaxing, and the game holds your focus and works as a pretty immersive escape (after unchecking all the HUD options and disabling the button jumping). It is also a light shoulder workout, which is good for my rehab. If this is what you are after, get it. (Also, it is way better than Richie's Plank for new VR users. Just put them on the first city stage and say "climb", then watch them freak when they look down.)</p>
          <p>
          It’s a straightforward game, you're a climber with the easy task of scaling the mountains or rock formations before you. With nothing however your hands and your wits, you have got the flexibility to try to do what looks like not possible feats for many normal folks. As you progress on the trail before you, the sport places you in an associate degree nearly zen-like state. when the issue will increase, you build a level of confidence that creates you're feeling superb. this is often quite an exploit considering the whole goal of the sport is solely to climb to the highest of every space. the sport is de-escalated into multiple areas: the Bay, the Canyon, and therefore the Alps. each of the areas is de-escalated into 3 increasing difficulties with new challenges at every flip. If you create it through those every space conjointly has 2 extra unlockable levels that actually crank up the issue additionally. The Climb will do a really sensible job at simulating the various handholds that a true life climber would bump into in a very real setting. From full hand grip to specific technical grips, the folks at Crytek went all out planning this game. Some grips even have toxic plants that drain your energy or break apart if you keep them in one place for quite a number of seconds. This forces you to stay the sport perpetually moving forward.
          </p>

          <br/>
       
          <br />

          <br />


          <br />
          {/* <Grid
            container
            style={{ width: '100%', textAlign: 'center', marginLeft: '1%' }}
          >
            <Grid md={12} lg={12}>
              <div width="400">
                <img src={full} height="450" width="900" alt="Italian Trulli" />
                <figcaption>(both knick-knacks together) </figcaption>
              </div>
            </Grid>
          </Grid> */}

          <div style={{ position: 'center', padding: '60px' }}>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/YSNPalIihiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <h2 style={{ textAlign: 'center', color: 'blue' }}>Why is it a good use of VR or AR?</h2>
          <br/>
          <p> The Climb 2 offers excellent simulation or realistic exprience by retaining a hard and fast tempo and contracting unique upper body muscle tissues as I climb, I’ve discovered The Climb 2 to be an amazing device for operating out the triceps, shoulders, even the abs in case you sincerely decide to the roleplay. For a further challenge, you may wear wrist weights for your climbs. I have noticed that the faster you try to climb the more energy is drained exponentially and you frequently need to take breaks to revcover. </p>
          <p>  There are ways to make the exprence even more realistic in VR by tying a resistance band to the ceiling attached to your hand/controllers which could actually give resistance while pulling yourself up</p>
          <br/>
          <p>The game is built with cryengine and is optimised well. I did not expect this level of graphics on a standalone quest device. The enviroimental surroundings are on par with AAA titles from PC. </p>
          <br/>

          <br/>
          <p><h4>IGN's Climb 2 review :</h4></p>
          <div style={{ position: 'center', padding: '60px' }}>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/qNiPO6oIU1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <br/>
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Who are its intended users?</h2>
     
          <br/>
          <p>The Climb 2 is made for the motive of entertainment & fitness. So The target audience here are gamers, fitness enthusiasts and for those who love mountaineering and parkour. It is a somewhat unique game having similarities only with its prequel the Climb 2016. Its good exercise, and offers a super exprience to people who want to exprience mountain climbing and also, its way cheaper then having to buy all the mountaineering equipment. levels in climb 2 are 10 - 15 mins long so its good for users aiming to get a quick workout. Also if the user wants to get over their fear of heights then, This is the game for them. </p>
          <br/>
          <p>
          The Climb 2 also offer 2 modes as per player preferance: <br/>
          <br/>
          <b>Casual: </b> where if the user wants a more simulated exprience. A lot easier than professional mode as there is no stamina management involed and the youer could just hang off a ledge for infinite amount of time
          <br/>
          <br/>
          <b>Professional: </b>where you get a more realistic exprience as it involves chalking your hands and stamina balancing between hands. If you fail to balance you fall off the ledge.  
          </p>
          <br/>

          <p> Some fitness oriented users have taken their game to the next level by tying Resistance bands to their hands and waists to increase the difficulty and get a good shoulder workout in the process, Also some others users use wrist weights to increase difficulty scaling.</p>
          <p><a href = "https://www.reddit.com/r/OculusQuest/comments/mdnvid/using_body_resistance_bands_makes_for_an_insane/"> User using a Resistance band </a></p>
          
          <br/>

          <h2 style={{ textAlign: 'center', color: 'blue' }}>What are the issues (positive and negative) with it?</h2>
          <p><h3>Pros</h3></p>
          <ul>
            <li> <p> 1) The level Design is phenominal, you would expect that climbing a building would be mundane(like in spider man games) but a lot of horizontal movements were added like rotating ad banners, elevators, ziplines etc which makes the game lot more intresting</p></li> 
              <li>  <p>2) The Climb 2 is quite realistic(expect for some areas mentioned in cons) with actions ranging from the player having to put chalk on their hands for temporary grip to them having to carefully maintain their stamina meter for each of their hands when single hand hanging or when they grap a sharp ledge.  </p></li>
              <li>  <p>3) For the average User it takes around 10 - 15 mins to finish a level, so If you want a quick, non time consuming workout and want to entertain yourself in the process then you could get the game's worth.  </p></li>
              <li>    <p>4) The Levels are predefined but sometimes you can get a dynamic exprience as there are multiple ways to reach your objective(the peak through lots of checkpoints) and finish the level, you would come accross lots of shortcuts(if you can find them)  </p></li>
              <li>    <p>5) Audio Design is superb not just for climbing but various other effects like high speed winds blowing through you makes you feel cold even tho the room temprature is the same, Sounds of Jets flying, snakes hissing in the canyons, buckets randomly falling from building, wolves howling is all on the mark. </p></li>
              <li>    <p>6) The events that animate the surroundings (swaing ladders, cracking wooden logs etc) creates an immersive exprience.</p></li>
            </ul>
          

          <br/>

          <p><h3>Cons</h3></p>

          <p>1) While your upper movement feels quite natural your lower body does not feel natural at all. For example when jumping to another ledge horizontically you sling shot your self with your arms but your legs stay as is and that feels wrong and caused me to lose balance sometimes(motion sickness) <br/></p>

          <p>2) I noticed that in some areas of the map where you have to make use of a monkey bar(or a look alike structure) your body is ignored completely, as in it is full possible for you to go over the monkey bar without your body blocking you. </p>
       
          <p>3) One of the main issue is that its quite gamified gamified (well that is the point of games) sometimes some of the manuvers feel unrealistic especially if you failed to grab  a ledge and fall down at a high speed then you are still able to grab a ledge which does not feel natural  </p>
          <p>4) Having just 15 levels, The climb is quite short with not so great replay value, unlike some other rythm based games where you can enjoy the music while you play the same level over and over again. The location of the ledges remain the same when you replay the level so if you had played it once then you already know where you have to go(apart from a few hard to discover shorcuts).</p>

          <p>5) Even if you have acute signs of Acrophobia, then this game wont suit you as if looking down after reaching a certain height might cause uneasiness  </p>

          <p>6) In multiplayer follow all you could do is follow the ghost of another player and try to beat their record. There is no real time race/marathon which takes the fun out</p>

          <p>7) In the fitness department, unlike other fitness based games, only you upper body gets the workout while your lower body akwardly is standing still most of the time.</p>

          <p>8) There have been immersion breaking instances where my head would go inside a mountain to give an all black view. </p>
   

      


       
          <h2 style={{ textAlign: 'center', color: 'blue' }}>Sources</h2>



          
          <p>
            <ul>
            <li>The Climb 2 - trailer- <span style = {{color : 'blue'}}>https://www.youtube.com/watch?v=YSNPalIihiE&ab_channel=Oculus </span> </li>
              <li>The Climb 2 - Launch Developer Live Stream - <span style = {{color : 'blue'}}> https://www.youtube.com/watch?v=41FIH32fu5w&ab_channel=TheClimb </span> </li>
              <li>The Climb 2 - Developer Diary 'New Heights' - <span style = {{color : 'blue'}}> https://www.youtube.com/watch?v=vBqUQ6rFsv4&ab_channel=TheClimb </span> </li>
              <li>The Climb Dev Diary 3: Summit -<span style = {{color : 'blue'}}> https://www.youtube.com/watch?v=-vL9eoHVNCQ&ab_channel=TheClimb  </span> </li>
              <li>IGN review - The climb 2 -<span style = {{color : 'blue'}}>https://www.youtube.com/watch?v=qNiPO6oIU1c&ab_channel=IGN</span> </li>
              <li>Climb 2 + Resistance Bands -<span style = {{color : 'blue'}}> https://www.reddit.com/r/OculusQuest/comments/mdnvid/using_body_resistance_bands_makes_for_an_insane/ </span> </li>
              <li>Weight Extensions- <span style = {{color : 'blue'}}>https://www.amazon.com/wrist-weights/s?k=wrist+weights </span> </li>
            </ul>
          </p>

          <br />

          <br />

        </section>

      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Homework:
      </TabPanel> */}
    </div>
  )
}
