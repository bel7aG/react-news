import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main, Drawer, Home, Chapters, ContactMe, NotFound } from '../'

const Router = () => (
  <BrowserRouter>
    <>
      <Drawer />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chapters" component={Chapters} />
          <Route exact path="/contact" component={ContactMe} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  </BrowserRouter>
)

export default Router
