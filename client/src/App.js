import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react'
import Products from './components/adminView/Products'
import NoMatch from './components/NoMatch';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path='/admin/products' component={Products} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)



export default App
