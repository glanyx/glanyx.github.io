import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, About, Testimonials, Contact } from './containers'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/testimonials'>
        <Testimonials />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </Switch>
  )
}

export default Routes