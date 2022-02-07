import React from 'react'
import { styled } from '@material-ui/core'
import { Card } from '../components'

const StyledHeader = styled('h3')(() => ({
  position: 'relative'
}))

const About = () => {

  return(
    <>
      <Card
        front={
          <>
            <StyledHeader>Mike Kornet | Glanyx</StyledHeader>
            <p>Software Engineer</p>
            <p>Fullstack Web Development | Discord Bots</p>
            <p>React | Node.js | TypeScript | Python | Java</p>
          </>
        }
        back={
          <>
            <StyledHeader>Mike Kornet | Glanyx</StyledHeader>
            <p>London | United Kingdom</p>
            <p>Loves Cats</p>
          </>
        }
      />
    </>
  )
}

export default About