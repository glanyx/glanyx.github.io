import React, { useState } from 'react'
import { styled, useMediaQuery, makeStyles, Divider, Button, Avatar } from '@material-ui/core'
import Picture from '../assets/ME.png'

const useStyles = makeStyles(theme => ({
  wrapperActive: {
    transform: 'translateX(0)',
  },
  wrapperInactive: {
    transform: 'translateX(100%)',
  },
  frontActive: {
    clipPath: 'inset(0 0 0 0)',
  },
  frontInactive: {
    clipPath: 'inset(0 100% 0 0)',
  },
  backActive: {
    clipPath: 'inset(0 0 0 0)',
  },
  backInactive: {
    clipPath: 'inset(0 0 0 100%)',
  },
}))

interface ICardProps {
  front: React.ReactNode
  back: React.ReactNode
}

const Wrapper = styled('div')(({ theme }) => ({
  height: 240,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  padding: theme.spacing(0, 3)
}))

const OuterWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
}))

const AvatarWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
}))

const InnerWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: 'inherit',
  textAlign: 'end',
  height: '100%',
  justifyContent: 'center',
}))

const VerticalDivider = styled(Divider)(({ theme }) => ({
  width: 10,
  height: 'inherit',
  backgroundColor: theme.palette.common.white,
}))

const ContentWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'block',
  flexDirection: 'column',
  textAlign: 'end',
  width: 'inherit',
  transition: 'clip-path 500ms linear',
}))

const DividerWrapper = styled('div')(() => ({
  width: '100%',
  position: 'absolute',
  height: 'inherit',
  transition: 'transform 500ms linear',
}))

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(5),
  padding: theme.spacing(1, 4),
  backgroundColor: theme.palette.common.white,
  borderRadius: 50,
  width: 200
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  margin: theme.spacing(3)
}))

const Card = ({
  front,
  back
}: ICardProps) => {

  const classes = useStyles()
  const [flipped, setFlipped] = useState<boolean>(false)
  const desktop = useMediaQuery('(min-width: 800px)')

  return (
    <OuterWrapper>
      <AvatarWrapper>
        <Wrapper>
          <InnerWrapper>
            <ContentWrapper className={flipped ? classes.frontInactive : classes.frontActive} id='front'>
              {front}
            </ContentWrapper>
            <ContentWrapper className={flipped ? classes.backActive : classes.backInactive} id='back'>
              {back}
            </ContentWrapper>
          </InnerWrapper>
          <DividerWrapper className={flipped ? classes.wrapperActive : classes.wrapperInactive}>
            <VerticalDivider orientation='vertical' />
          </DividerWrapper>
        </Wrapper>
        {desktop &&
          <StyledAvatar src={Picture} />
        }
      </AvatarWrapper>
      <StyledButton onClick={() => setFlipped(!flipped)}>More</StyledButton>
    </OuterWrapper>
  )
}

export default Card