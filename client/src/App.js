import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react'
import Products from './components/adminView/Products'
import NoMatch from './components/NoMatch';
import Product from './components/customerView/Product';
import CheckoutForm from './components/customerView/CheckoutForm';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path='/admin/products' component={Products} />
        <Route exact path='/products/:id' component={Product} />
        <Route exact path='/checkout' component={CheckoutForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
