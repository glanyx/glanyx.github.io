import React from 'react'
import { styled, useMediaQuery, Slide } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

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
  clipPath: 'inset(0 0 0 0)',
  transition: 'clip-path 1s 1s ease-in-out',
}))

const Title = styled(Text)(() => ({
  left: '50%',
  top: '50%',
  position: 'absolute',
  clipPath: 'inset(0 100% 0 0)',
  transition: 'clip-path 1s ease-in-out',
  maxWidth: '100vw',
  textAlign: 'justify'
}))

const Wrapper = styled('div')(() => ({
  '&:hover': {
    '& #subtitle': {
      clipPath: 'inset(0 0 100% 0)',
      transition: 'clip-path 1s ease-in-out',
    },
    '& #title': {
      clipPath: 'inset(0 0 0 0)',
      transition: 'clip-path 1s 1s ease-in-out',
    },
  },
  position: 'relative',
}))

const Home = () => {

  const desktop = useMediaQuery('(min-width: 800px)')

  return(
    <Slide direction='right' in={true} mountOnEnter unmountOnExit>
      <Wrapper>
        <Subtitle id='subtitle'>Hi</Subtitle>
        <Title id='title' style={{
          whiteSpace: desktop ? undefined : 'break-spaces',
          fontSize: desktop ? 72 : 48
        }}>
          I'm Glanyx
        </Title>
        <p>
          <KeyboardArrowUpIcon className='animatedArrow' />
        </p>
      </Wrapper>
    </Slide>
  )
}

export default Home