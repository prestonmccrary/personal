import React, { useEffect, useState } from 'react'
import {Flex, Box, Text, useColorMode, Icon, Heading, Button, IconButton, AspectRatio, useMediaQuery} from '@chakra-ui/react'
import {BiSun, BiMoon} from 'react-icons/bi'
import {GoLightBulb, GoMarkGithub, GoLink} from 'react-icons/go'
import {FiLink} from 'react-icons/fi'
import {DiReact, DiNodejsSmall, DiMongodb} from 'react-icons/di'

import {motion} from 'framer-motion'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { createBrowserHistory} from 'history'
import pattern from './pattern.svg'

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




  return(
    <Flex h="600px" marginBottom="inherit" w="100%" alignItems="center">
      <Box w={["95%","90%"]} maxWidth="850px">
        <Heading style={{wordSpacing: '3px'}} fontSize={["2xl","4xl"]}  fontWeight="light"> 
          Hey, I'm Preston, <motion.span initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0, transition: {duration: 1}}} >a student studying EECS and Business at Berkeley MET.</motion.span> 
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

const ProjectItem = ({name, link, desc, isDark}) => {

  return(
    <Box mb="24">
      <motion.div whileHover={{y: 3, transition: {type: 'spring'}}}>
        <AspectRatio w="100%" ratio={1.61}>
          <Box _hover={{boxShadow: 'md'}} borderRadius="md" filter={isDark() && "brightness(1.15) grayscale(0.65)"} bg={`url(${url})`} bgSize="cover" padding="6">
            {/* <Heading fontWeight="normal" color="white">HSE Apps</Heading> */}

          </Box>
        </AspectRatio>
       
      </motion.div>

      <Box marginTop="8" w="100%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Heading style={{wordSpacing: '3px'}}  fontWeight="bold">
            HSE Apps
          </Heading>
          <Box>
            <Icon fontSize="xl" mr="5" as={GoMarkGithub}/>
            <Icon fontSize="xl" as={FiLink}/>
          </Box>


        </Flex>
        
        <Text fontSize={['sm', 'md']} marginTop="2" >Led a team of 13 in development of a district wide software ecoystem massing over 3400 users. Applications digitalized course selection, club management, peer tutoring, and daily bell schedules. </Text>

      </Box>
    </Box>
  )

}

const Pattern = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill={props.color} fill-rule="evenodd" d="M315 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM288 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM263 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM236 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM210 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM184 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM157 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM131 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM105 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM79 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM52 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM27 3V0h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 26v-3h3v3h-3zm0 26v-3h3v3h-3zm0 27v-3h3v3h-3zm0 25v-3h3v3h-3zm0 27v-3h3v3h-3zM0 3V0h3v3H0zm0 27v-3h3v3H0zm0 25v-3h3v3H0zm0 27v-3h3v3H0zm0 26v-3h3v3H0zm0 26v-3h3v3H0zm0 26v-3h3v3H0zm0 27v-3h3v3H0zm0 26v-3h3v3H0zm0 26v-3h3v3H0zm0 27v-3h3v3H0zm0 25v-3h3v3H0zm0 27v-3h3v3H0z"/>
</svg>
)

const url = "http://www.shielsexton.com/wp-content/uploads/2015/12/DSF9892-Edit.jpg"

const Projects = ({isDark}) => {

  const [cardBreak] = useMediaQuery("(min-width: 1050px)")

   

  return(
    <Box w='95%' maxWidth="1400px" margin="auto">
    <Box textAlign="center" marginTop="20" marginBottom="20">
      <Heading fontWeight="normal">My Work</Heading>
    </Box>
    <Flex w="100%" margin="0px auto" marginBottom="32" justifyContent={cardBreak ? "space-between" : "center"} direction='row'>
      {cardBreak ?
      <>
        <Flex w="47%" direction="column">

        <ProjectItem isDark={isDark}/>
        <ProjectItem isDark={isDark}/>

        </Flex>

        <Flex w="47%" marginTop="60" direction="column">

        <ProjectItem isDark={isDark}/>
        <ProjectItem isDark={isDark}/>

        </Flex>
      </>

      :

        <Flex w={['100%', '80%']} direction="column">

        <ProjectItem isDark={isDark}/>
        <ProjectItem isDark={isDark}/>
        <ProjectItem isDark={isDark}/>
        <ProjectItem isDark={isDark}/>

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


  return (
    <Box overflow="hidden" minH="100vh" bg={isDark() ? "blackAlpha.800" : 'white'} w="100vw" position = "relative">
     
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
