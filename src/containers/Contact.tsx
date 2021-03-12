import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import { styled, fade, Slide } from '@material-ui/core'
import { AnimatedIcon } from '../components'

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: fade(theme.palette.common.white, 0.2),
  borderRadius: 50,
  padding: theme.spacing(1),
  overflow: 'hidden',
}))

const Contact = () => {

  return(
    <Slide direction='right' in={true} mountOnEnter unmountOnExit>
      <Wrapper>
        <AnimatedIcon color='#3B5998' to={'https://www.linkedin.com/in/mike-kornet/'}>
          <LinkedInIcon />
        </AnimatedIcon>
        <AnimatedIcon color='#000' to={'https://github.com/glanyx'}>
          <GitHubIcon />
        </AnimatedIcon>
        <AnimatedIcon color='#F59999' to={'mailto:contact@glanyx.com'}>
          <EmailIcon />
        </AnimatedIcon>
      </Wrapper>
    </Slide>
  )
}

export default Contact