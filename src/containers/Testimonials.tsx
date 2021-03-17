import React, { useState } from 'react'
import { styled, makeStyles, useMediaQuery, fade, Slide, Button, Divider, Avatar } from '@material-ui/core'
import { ReactComponent as ParadoxLogo } from '../assets/paradox-interactive.svg'
import { ReactComponent as SegaLogo } from '../assets/sega-logo.svg'

const useStyles = makeStyles(theme => ({
  active: {
    transform: 'translateY(0)',
    '& #name': {
      opacity: 1,
      transition: 'all 300ms 300ms linear',
    }
  },
  inactive: {
    transform: 'translateY(19px)',
    transition: 'all 300ms linear',
    '&:hover': {
      transform: 'translateY(0)',
      '& #name': {
        opacity: 1,
        transition: 'all 300ms 300ms linear',
      }
    }
  },
  bannerActive: {
    transform: 'translateY(-200px)',
  },
  commentActive: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'all 500ms 500ms ease-in-out',
  },
  commentInactive: {
    transform: 'translateX(-100px)',
    opacity: 0,
    transition: 'all 500ms ease-in-out',
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 3),
    backgroundColor: theme.palette.common.white,
    borderRadius: 50
  },
  right: {
    width: '100%',
    textAlign: 'end'
  }
}))

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}))

const Banner = styled('div')(({ theme }) => ({
  height: '30%',
  width: '100%',
  backgroundColor: fade(theme.palette.common.white, 0.2),
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  transition: 'all 500ms linear',
}))

const StyledParadoxLogo = styled(ParadoxLogo)(() => ({
  height: 100,
  width: 'auto',
  transition: 'all 300ms linear',
}))

const StyledSegaLogo = styled(SegaLogo)(() => ({
  height: 100,
  width: 'auto',
  transition: 'all 300ms linear',
}))

const Logo = styled('img')(() => ({
  height: 100,
  width: 'auto',
  transition: 'all 300ms linear',
  borderRadius: 20
}))

const Client = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 400,
  borderRadius: 20
}))

const Text = styled('p')(({ theme }) => ({
  fontSize: 24,
  color: theme.palette.common.white,
  opacity: 0,
  textTransform: 'uppercase',
  letterSpacing: 3,
  transition: 'all 300ms linear',
}))

const CommentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '70vw',
  borderRadius: 25,
  backgroundColor: fade(theme.palette.common.white, 0.2),
  position: 'absolute',
  fontSize: 20,
  padding: theme.spacing(3),
  textAlign: 'start',
  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
  paddingBottom: theme.spacing(10)
}))

const CommentContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'start'
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  width: 2,
  borderRadius: 25,
  margin: theme.spacing(0, 3),
  boxShadow: 'inset -1px -1px 2px white'
}))

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  padding: theme.spacing(1, 3),
  backgroundColor: theme.palette.common.white,
  borderRadius: 50
}))

const StyledAvatar = styled(Avatar)(() => ({
  width: 100,
  height: 100,
}))

interface IClient {
  logo: React.ReactNode | string,
  name: string,
  comment: string
  avatar?: string
  url?: string
  author?: string
}

const clients: Array<IClient> = [
  // {
  //   logo: <StyledParadoxLogo />,
  //   name: 'Paradox Interactive',
  //   comment: 'Where\'s Carthage?',
  //   avatar: 'https://media.cdn.teamtailor.com/images/s3/teamtailor-production/employee_picture-v1/image_uploads/7193e500-9a6a-454c-806d-38f5dff25a6d/original.jpg',
  //   url: 'https://www.google.com/',
  //   author: 'Rodrigue Delrue'
  // },
  {
    logo: <StyledSegaLogo />,
    name: 'SEGA of America',
    comment: 'Mike has been very responsive to my requests and found competent solutions to every Discord problem I\'ve thrown at him. Any bugs or issues we\'ve run into have been solved swiftly, and he\'s always been very polite. I look forward to continuing to work with him on SEGA Discord servers!',
    avatar: 'https://giantbomb1.cbsistatic.com/uploads/square_small/46/462814/3182258-4728507772-latest',
    author: 'Danny Russell, Community Manager'
  },
  {
    logo: 'https://i.ytimg.com/vi/BROr5rEoRh4/maxresdefault.jpg',
    name: 'LeeandLie',
    comment: 'Mike is an incredibly reliable moderator and programmer for me and my team. From creating my Discord server from scratch, to moderating it for the better part of 3 years, Mike has been an integral part of its upkeep and success. It brings me such relief to know that I always have a reliable and knowledgeable person on my team to reach out to if any problems arise.',
    avatar: 'https://yt3.ggpht.com/ytc/AAUvwniNqBc9GD6nO8F1C927e9-mRRTB5xR3Yp2BiP2A0Q=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.leeandlie.com/',
    author: 'AmaLee',
  }
]

const Testimonies = () => {

  const classes = useStyles()
  const [active, setActive] = useState<string | null>(null)
  const desktop = useMediaQuery('(min-width: 800px)')

  const handleSelect = (event: any) => {
    setActive(event.currentTarget.value)
  }

  return(
    <Slide direction='right' in={true} mountOnEnter unmountOnExit>
      <Wrapper>
        <Banner className={active ? classes.bannerActive : ''}>
          {clients.map(client =>
            <Button value={client.name} disableRipple disableElevation variant='text' onClick={handleSelect} style={{ transform: desktop ? '' : 'scale(0.5)' }}>
              <Client className={client.name === active ? classes.active : classes.inactive}>
                {typeof(client.logo) === 'string' ? <Logo src={client.logo} /> : client.logo}
                {desktop && <Text id='name'>{client.name}</Text>}
              </Client>
            </Button>
          )}
        </Banner>
        {clients.map(client =>
          <Slide direction='right' in={client.name === active} timeout={{ enter: 500, exit: 300 }}>
            <CommentWrapper style={{
              maxWidth: desktop ? '40%' : '70vw',
              fontSize: desktop ? 18 : 12,
              top: desktop ? '60%': '45%',
            }}>
              {client.avatar &&
                <>
                  <CommentContent>
                    <StyledAvatar src={client.avatar} />
                    {client.url &&
                      <Button className={classes.button} target='_blank' href={client.url}>
                        Website
                      </Button>
                    }
                  </CommentContent>
                  <StyledDivider orientation='vertical' />
                </>
              }
              <CommentContent>
                <p>{client.comment}</p>
                {client.author && 
                  <p className={classes.right}>
                    {`- ${client.author}`}
                  </p>
                }
                <StyledButton onClick={() => setActive(null)}>
                  Close
                </StyledButton>
              </CommentContent>
            </CommentWrapper>
          </Slide>
        )}
      </Wrapper>
    </Slide>
  )
}

export default Testimonies