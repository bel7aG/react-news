import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main, Drawer, Home, Study, ContactMe, NotFound } from '../'
import { ChapterOne, ChapterTwo, ChapterThree, ChapterFoor, ChapterFive, ChapterSix } from '../Study/Components';

const Router = () => (
  <>
    <BrowserRouter>
      <>
        <Drawer />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/study" component={Study} />
            <Route exact path="/study/react-one" component={ChapterOne} />
            <Route exact path="/study/react-two" component={ChapterTwo} />
            <Route exact path="/study/react-three" component={ChapterThree} />
            <Route exact path="/study/react-foor" component={ChapterFoor} />
            <Route exact path="/study/react-five" component={ChapterFive} />
            <Route exact path="/study/react-six" component={ChapterSix} />
            <Route exact path="/contact" component={ContactMe} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </>
    </BrowserRouter>
  </>
)


    export default Router
