import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { styled, fade, makeStyles, Slide, Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.common.white,
    letterSpacing: 5,
    lineHeight: 2,
    transition: 'font-size 300ms',
    '&:hover': {
      fontSize: '1.3em'
    }
  }
}))

const StyledButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  left: 10,
  color: theme.palette.common.white,
  zIndex: 1100
}))

const Menu = styled('div')(() => ({
  display: 'flex',
  width: '50%',
  height: '100vh',
  backgroundColor: fade('#616161', 0.6),
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  backdropFilter: 'blur(4px)',
  boxShadow: '0 3px 10px 2px black'
}))

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  zIndex: 1000,
}))

const Expansion = styled('div')(({ theme }) => ({
  width: '50%',
}))

const Nav = () => {

  const classes = useStyles()

  const [open, setOpen] = useState<boolean>(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return(
    <>
      <Slide direction='right' in={open}>
        <Wrapper>
          <Menu>
            <Button className={classes.button} component={Link} to='/' onClick={toggleOpen}>
              Home
            </Button>
            <Button className={classes.button} component={Link} to='/about' onClick={toggleOpen}>
              About
            </Button>
            <Button className={classes.button} component={Link} to='/testimonials' onClick={toggleOpen}>
              Testimonials
            </Button>
            <Button className={classes.button} component={Link} to='/contact' onClick={toggleOpen}>
              Contact
            </Button>
          </Menu>
          <Expansion onClick={toggleOpen} />
        </Wrapper>
      </Slide>
      <StyledButton aria-label='navigation' onClick={toggleOpen}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </StyledButton>
    </>
  )
}

export default Nav