import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react'
// import Products from './components/adminView/Products'
import NoMatch from './components/NoMatch';
import Products from './components/customerView/Products'

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        {/* <Route exact path='/admin/products' component={Products} /> */}
        <Route exact path='/customer/products' component={Products} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)



export default App
