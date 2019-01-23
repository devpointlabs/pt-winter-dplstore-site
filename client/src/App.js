import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react'
import AdminProducts from './components/adminView/AdminProducts'
import NoMatch from './components/NoMatch';
import Product from './components/customerView/Product';
import CheckoutForm from './components/customerView/CheckoutForm';
import Products from './components/customerView/Products'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './components/customerView/Cart'

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin/products' component={AdminProducts} />
        <Route exact path='/products/:id' component={Product} />
        <Route exact path='/checkout' component={CheckoutForm} />
        <Route exact path='/customer/products' component={Products} />
        <Route exact path='/cart/' component={Cart} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;