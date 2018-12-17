import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main, Drawer, Home, Study, ContactMe, NotFound } from '../'
import { ReactJS } from '../Study/Components';

const Router = () => (
  <>
    <BrowserRouter>
      <>
        <Drawer />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/study" component={Study} />
            <Route exact path="/study/react-one" component={ReactJS} />
            <Route exact path="/study/react-two" component={ReactJS} />
            <Route exact path="/study/react-three" component={ReactJS} />
            <Route exact path="/study/react-foor" component={ReactJS} />
            <Route exact path="/study/react-five" component={ReactJS} />
            <Route exact path="/study/react-six" component={ReactJS} />
            <Route exact path="/contact" component={ContactMe} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </>
    </BrowserRouter>
  </>
)


    export default Router
