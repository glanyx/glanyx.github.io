import React, { useEffect, useState } from 'react'
import { styled, useMediaQuery, makeStyles, Slide } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  main: {
    clipPath: 'inset(0 100% 0 0)',
    transition: 'clip-path 1s ease-in-out',
  },
  sub: {
    clipPath: 'inset(0 0 0 0)',
    transition: 'clip-path 1s 1s ease-in-out',
  },
  activeMain: {
    clipPath: 'inset(0 0 0 0)',
    transition: 'clip-path 1s 1s ease-in-out',
  },
  activeSub: {
    clipPath: 'inset(0 0 100% 0)',
    transition: 'clip-path 1s ease-in-out',
  }
}))

const Text = styled('h2')(() => ({
  fontSize: 72,
  textTransform: 'uppercase',
  letterSpacing: 10,
  transform: 'translate(-50%, -50%)',
  whiteSpace: 'nowrap',
  cursor: 'default',
  userSelect: 'none'
}))

const Subtitle = styled(Text)(() => ({
  left: '50%',
  top: '50%',
  position: 'absolute',
}))

const Title = styled(Text)(() => ({
  left: '50%',
  top: '50%',
  position: 'absolute',
  maxWidth: '100vw',
  textAlign: 'justify'
}))

const Wrapper = styled('div')(() => ({
  position: 'relative',
}))

const Home = () => {

  const classes = useStyles()
  const desktop = useMediaQuery('(min-width: 800px)')
  const [type, setType] = useState<string>(classes.main)

  useEffect(() => {
    setTimeout(() => {
      setType(type === classes.main ? classes.activeMain : classes.main)
    }, 5000)
  })

  return(
    <Slide direction='right' in={true} mountOnEnter unmountOnExit>
      <Wrapper>
        <Subtitle className={type} id='subtitle'>Hi</Subtitle>
        <Title className={type === classes.main ? classes.sub : classes.activeSub} id='title' style={{
          whiteSpace: desktop ? undefined : 'break-spaces',
          fontSize: desktop ? 72 : 48
        }}>
          I'm Glanyx
        </Title>
      </Wrapper>
    </Slide>
  )
}

export default Home