import React, { useState } from 'react'
import { styled, useMediaQuery, makeStyles, Slide, Button, Avatar, Divider } from '@material-ui/core'
import Picture from '../assets/ME.png'

const useStyles = makeStyles(() => ({
  dividerActive: {
    transform: 'translateX(-630px)'
  },
  dividerInactive: {
    transform: 'translateX(0)'
  },
  mainActive: {
    clipPath: 'inset(0 0 0 0)',
  },
  mainInactive: {
    clipPath: 'inset(0 0 0 100%)',
  },
  subActive: {
    clipPath: 'inset(0 100% 0 0)',
  },
  subInactive: {
    clipPath: 'inset(0 0 0 0)',
  },
}))

const Wrapper = styled('div')(() => ({
  width: '40%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}))

const InnerWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  height: '20%',
}))

const StyledAvatar = styled(Avatar)(() => ({
  width: 100,
  height: 100
}))

const SwapWrapper = styled('div')(() => ({
  position: 'relative',
  width: '30vw',
  height: 150,
}))

const ContentWrapper = styled('div')(() => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'end',
  width: '100%',
  transition: 'clip-path 500ms linear',
  paddingRight: 25
}))

const VerticalDivider = styled(Divider)(({ theme }) => ({
  width: 10,
  height: '100%',
  margin: theme.spacing(0, 3),
  backgroundColor: theme.palette.common.white,
  transition: 'transform 500ms linear',
}))

const StyledHeader = styled('h3')(() => ({
  position: 'relative'
}))

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(5),
  padding: theme.spacing(1, 4),
  backgroundColor: theme.palette.common.white,
  borderRadius: 50,
}))

const About = () => {

  const classes = useStyles()
  const [active, setActive] = useState<boolean>(false)
  const desktop = useMediaQuery('(min-width: 800px)')

  return(
    <Slide direction='right' in={true} mountOnEnter unmountOnExit>
      <Wrapper>
        <InnerWrapper>
          <SwapWrapper>
            <ContentWrapper className={desktop ? active ? classes.mainActive : classes.mainInactive : classes.mainActive} style={{
              fontSize: desktop ? 'calc(10px + 2vmin)' : 14
            }}>
              <StyledHeader>Mike Kornet | Glanyx</StyledHeader>
              <p>Software Engineer</p>
              <p>Fullstack Web Development | Discord Bots</p>
              <p>React | Node.js | TypeScript | Python | Java</p>
            </ContentWrapper>
            <ContentWrapper className={desktop ? active ? classes.subActive : classes.subInactive : classes.subActive}>
              <StyledHeader>Mike Kornet | Glanyx</StyledHeader>
              <p>London | United Kingdom</p>
              <p>Loves Cats</p>
            </ContentWrapper>
          </SwapWrapper>
          <VerticalDivider className={active ? classes.dividerActive : classes.dividerInactive} orientation='vertical' />
          <StyledAvatar src={Picture} />
        </InnerWrapper>
        {desktop && <StyledButton onClick={() => setActive(!active)}>More</StyledButton>}
      </Wrapper>
    </Slide>
  )
}

export default About