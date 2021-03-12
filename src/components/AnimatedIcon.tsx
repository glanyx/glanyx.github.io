import React from 'react'
import { styled, makeStyles, IconButton } from '@material-ui/core'

interface IStyleProps {
  color: string
}

const useStyles = makeStyles(theme => ({
  overlay: ({ color }: IStyleProps) => ({
    color: color,
    clipPath: `inset(100% 0 0 0)`,
    transition: 'clip-path 1s ease',
  }),
  hidden: {
    color: theme.palette.common.white,
    clipPath: `inset(0 0 0 0)`,
    transition: 'clip-path 1s ease',
  },
  wrapper: {
    position: 'relative',
    '&:hover': {
      '& #overlay': {
        clipPath: 'inset(0 0 0 0)'
      },
      '& #backdrop': {
        clipPath: 'inset(0 0 100% 0)'
      },
    },
    '& svg': {
      fontSize: '2em'
    }
  }
}))

const InnerWrapper = styled('div')(() => ({
  position: 'absolute',
  left: '18%',
  top: '18%',
}))

const SecondWrapper = styled('div')(() => ({
}))

interface IAnimatedIcon extends IStyleProps{
  children: React.ReactNode,
  to?: string,
}

const AnimatedIcon = ({
  children,
  color,
  to,
}: IAnimatedIcon) => {

  const classes = useStyles({ color })

  return (
    <IconButton className={classes.wrapper} target='_blank' href={to || '#'}>
      <InnerWrapper id='overlay' className={classes.overlay}>
        {children}
      </InnerWrapper>
      <SecondWrapper id='backdrop' className={classes.hidden}>
        {children}
      </SecondWrapper>
    </IconButton>
  )
}

export default AnimatedIcon