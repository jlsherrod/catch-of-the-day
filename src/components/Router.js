import React from 'react'
import { BrowerRouter, Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import StorePicker from './StorePicker'
import App from './App'
import NotFound from './NotFound'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
