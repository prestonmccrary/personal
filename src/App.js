import React, { useEffect, useState } from 'react'
import {Flex, Box, Text, useColorMode, Icon, Heading, Button, IconButton, AspectRatio, useMediaQuery, HStack, Center} from '@chakra-ui/react'
import {BiSun, BiMoon} from 'react-icons/bi'
import {GoLightBulb, GoMarkGithub, GoLink} from 'react-icons/go'
import {FiLink, FiSun} from 'react-icons/fi'
import {DiReact, DiNodejsSmall, DiMongodb} from 'react-icons/di'

import {motion} from 'framer-motion'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { createBrowserHistory} from 'history'
import pattern from './pattern.svg'

import { use100vh } from 'react-div-100vh'


const MenuIcon = ({w, h, color}) => {
  return(
    <svg style={{cursor: 'pointer'}} width={w} height={h} viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3H3V1H1V3Z" fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 9H3V7H1V9Z" fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 15H3V13H1V15Z" fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H9V1H7V3Z"fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H15V1H13V3Z" fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 9H9V7H7V9Z" fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 9H15V7H13V9Z" fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 15H9V13H7V15Z" fill={color}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 15H15V13H13V15Z" fill={color}></path></svg>
  )
}

const Nav = ({isDark, toggleColorMode}) => {

  return(
      <Flex alignItems="center" justifyContent="space-between">

        <Box>
          <Link to="/">
            <Text color={isDark() ? 'white' : 'dark'} fontSize="normal" fontWeight="normal" letterSpacing="wide"> Preston McCrary </Text>
          </Link>
        </Box>

        <Flex w='65px' alignItems="center" justifyContent="space-between">

          <motion.div style={{ display: 'flex'}} whileHover={{rotate: isDark() ? 25 : 45, transition: {type: 'spring', delay: 0.1}}}>

            <Icon fontSize={isDark() ? '17px' : '18px'} cursor="pointer" onClick={toggleColorMode} as={isDark() ? GoLightBulb : BiMoon}/>

          </motion.div>

          <motion.div whileTap={{scale: 1}} style={{ display: 'flex'}} whileHover={{scale: 0.8, transition: {type: 'spring', delay: 0.1}}}>

            <MenuIcon w="20" h="20" color={isDark() ? 'white' : 'black'}/>

          </motion.div>

        </Flex>

      </Flex>
  )
}

const Hero = () => {

  const [mobile] = useMediaQuery("(max-width: 30em)")

  const [text, setText] = useState(1)

  const texts = [
    "a full stack developer and product designer in the bay area.",
    "a student studying EECS and Business at Berkeley MET.",
  ]

  useEffect(() => {
    changeText()
  }, [])

  const changeText = () => {
    
    setText(a => (a+1) % (texts.length ) )

    setTimeout(changeText, 7000)
  }


  return(
    <Flex h="600px" marginBottom="inherit" w="100%" alignItems="center">
      <Box w={["95%","90%"]} maxWidth="850px">
        <Heading style={{wordSpacing: '3px'}} fontSize={["2xl","4xl"]}  fontWeight="light"> 
          Hey, I'm Preston, <motion.span key={text} initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0, transition: {duration: 1.5, delay: 0.1}}} > {texts[text]}</motion.span> 
        </Heading>
        <Flex marginTop="6">
          <motion.div whileHover={{y: 3, transition: {type: 'spring'}}}>
            <Link to="/projects">
              <Button _focus={{boxShadow: 'none'}} variant="solid" marginRight="4" size={mobile ? 'md':'lg'}>My Work</Button>
            </Link>

          </motion.div>
          {/* <motion.div whileHover={{y: 3, transition: {type: 'spring'}}}>
            <Button _focus={{boxShadow: 'none'}} variant="solid" marginRight="4" size="lg">Contact 👋🏻 </Button>

          </motion.div> */}
          {/* <motion.div whileHover={{y: 3, transition: {type: 'spring'}}}>
            <IconButton _focus={{boxShadow: 'none'}} size="lg" variant="solid" icon={<Icon strokeWidth="1.5" fontSize="20px" as={FiFileText}/>} ></IconButton>

          </motion.div> */}
          <a href="https://github.com/prestonmccrary" target="_blank">
            <motion.div whileHover={{y: 3, transition: {type: 'spring'}}}>
              <IconButton _focus={{boxShadow: 'none'}} size={mobile ? 'md':'lg'} variant="solid"  icon={<Icon  fontSize="20px" as={GoMarkGithub}/>} ></IconButton>

            </motion.div>
          </a>


        </Flex>
      </Box>
    </Flex>
  )
}

const ProjectItem = ({project, isDark}) => {

  return(
    <Box mb="24">
      <motion.div whileHover={{y: 3, transition: {type: 'spring'}}}>
        <AspectRatio w="100%" ratio={1.61}>
          {/* // */}
          <Center  _hover={!isDark() && project.url && {boxShadow: 'md'}} borderRadius="md" filter={isDark() && project.url && "brightness(1.15) grayscale(0.65)" } bg={`url(${project.url})`} bgSize="cover" padding="6">
            {/* <Heading fontWeight="normal" color="white">HSE Apps</Heading> */}
            {project.logo &&
              
              <img style={{height: '90%', filter: isDark() && 'invert(1) grayscale(1)'}} src={project.logo}/>

            }
          </Center>
        </AspectRatio>
       
      </motion.div>

      <Box marginTop="8" w="100%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Heading style={{wordSpacing: '3px'}}  fontWeight="bold">
          {project.name}
          </Heading>
          <HStack>
            {project.link &&
              <motion.a whileHover={{y: -3}} target="_blank" href={project.link}>
                <Icon fontSize="xl" as={FiLink}/>

              </motion.a>
            }
            {project.gh &&
              <a target="_blank" href={project.gh}>
                <Icon fontSize="xl" as={GoMarkGithub}/>

              </a>
            }
          </HStack>


        </Flex>
        
        <Text fontSize={['sm', 'md']} marginTop="2" >
          {project.desc}
        </Text>

      </Box>
    </Box>
  )

}

const Pattern = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill={props.color} fill-rule="evenodd" d="M315 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM288 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM263 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM236 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM210 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM184 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM157 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM131 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM105 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM79 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM52 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM27 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM0 3V0h3v3H0zm0 27v-3h3v3H0zm0 25v-3h3v3H0zm0 27v-3h3v3H0zm0 26v-3h3v3H0zm0 26v-3h3v3H0zm0 26v-3h3v3H0zm0 27v-3h3v3H0zm0 26v-3h3v3H0zm0 26v-3h3v3H0zm0 27v-3h3v3H0zm0 25v-3h3v3H0zm0 27v-3h3v3H0z"/>
</svg>
)

const url = ""

const Projects = ({isDark}) => {

  const [cardBreak] = useMediaQuery("(min-width: 1050px)")

  const [selected,setSelected] = useState('Organizations')

  const buttons = ['Organizations', 'Projects']
  

  const projects1 = [
    {
      name: "HSE Apps", 
      desc: "Led a team of 13 in development of a district wide software ecoystem massing over 3400 users. Applications digitalized course selection, club management, peer tutoring, and daily bell schedules during the COVID-19 pandemic.", 
      url: "http://www.shielsexton.com/wp-content/uploads/2015/12/DSF9892-Edit.jpg",
      link: "https://hseapps.org"
    },

  ]

  const projects2 = [
    {
      name: "Indiana Hax", 
      desc: "Led a 6 man team in hosting three indianapolis based hackathons, recieved sponsorship from a local makerspace and hack club.", 
      url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Indianapolis-1872528.jpg",
      link: "https://indianahax.org"
    }
  ]

  const coding1 = [
    {
      name: "HSE Key", 
      desc: "Single sign-on authentication and utility service built for the HSE Apps ecosystem. Written in JavaScript using Node and Express, and deployed through GCP with a GitHub Actions CI pipeline.", 
      logo: "https://cdn.discordapp.com/attachments/626507510085320725/847956544473006121/thickerr.png",
      gh: "https://github.com/hse-apps/hse-key"
    },
    {
      name: "HSE Clubs", 
      desc: "Student club management and discovery platform that implemented a large role-based authorization model, SMS announcements, and custom club membership policies. Built using the MERN stack and Twilio's SMS API, and then deployed through Netlify and GCP.", 
      logo: "https://hseapps.org/static/media/Clubs.3abde7c3.png",
      gh: "https://github.com/hse-apps/club-client",
      link: "https://hseclubs.com"
    }
  ]

  const coding2 = [
    {
      name: "HSE Tutoring", 
      desc: "Real-time tutoring application that implemented both text and voice communications along with session history and reporting. Built using the MERN stack and Socket.io/Agora for real-time functionality, and then deployed through Netlify and GCP. ", 
      logo: "https://hseapps.org/static/media/Tutoring.b38d3dfd.png",
      gh: "https://github.com/hse-apps/tutoring-client",
      link: "https://hsetutoring.com"
    }
  ]

  const displayMap = {
    'Projects': [coding1, coding2],
    'Organizations': [projects1, projects2],
    'Academic': []
  }

  


  return(
    <Box w='95%' maxWidth="1400px" margin="auto">
    <Flex direction="column" alignItems="center" textAlign="center" marginTop="20" marginBottom="20">
      <Heading fontWeight="normal">My Work</Heading>
      <HStack marginTop="8" gridGap="4">
        {buttons.map((a,i) => <Button _focus={{boxShadow: 'none'}} onClick={()=>setSelected(a)} variant={selected == a ? 'solid' : 'ghost'}>{a}</Button> )}
      </HStack>
    </Flex>
    <Flex w="100%" margin="0px auto" marginBottom="32" justifyContent={cardBreak ? "space-between" : "center"} direction='row'>
      {cardBreak ?
      <>
        <Flex w="47%" direction="column">

        {displayMap[selected][0].map(p => <ProjectItem project={p} isDark={isDark}/>)}

        </Flex>

        <Flex w="47%" marginTop="60" direction="column">

        {displayMap[selected][1].map(p => <ProjectItem project={p} isDark={isDark}/>)}


        </Flex>
      </>

      :

        <Flex w={['100%', '80%']} direction="column">

        {coding1.concat(coding2).map(p => <ProjectItem project={p} isDark={isDark}/>)}

        </Flex>

      }
    
      
     
     
    </Flex>
    </Box>
  )
}

function App() {

  const {colorMode, toggleColorMode} = useColorMode()

  const history = createBrowserHistory();

  useEffect(() => {
    console.log(history)
  })
  const isDark = () => {
    return colorMode == 'dark'
  }
  

  const h = use100vh()

  return (
    <Box overflow="hidden" minH={h} bg={isDark() ? "blackAlpha.800" : 'white'} w="100vw" position = "relative">
     
        <Pattern style={{position: 'absolute', bottom: '-200px', right: '-80px'}} color={isDark() ?'white' : "blackAlpha.800" } width="350" height="350"/>
        <Box paddingTop={["10","16"]} paddingBottom={["10","16"]}  w="85%" h="100%" margin="auto">

          <Router>
            <Nav isDark={isDark} toggleColorMode={toggleColorMode}/>

            <Switch>
              <Route exact path="/" render={() => <Hero/> }/>
              <Route exact path="/projects" render={() => <Projects isDark={isDark}/> }/>

            </Switch>
          </Router>

          
        </Box>
    </Box>
  );
}

export default App;
