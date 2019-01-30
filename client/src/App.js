import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react'
import AdminProducts from './components/adminView/AdminProducts'
import NoMatch from './components/NoMatch';
import Product from './components/customerView/Product';
import Main from './components/customerView/Main';
import PaymentSuccess from './components/customerView/PaymentSuccess'
import CheckoutForm from './components/customerView/CheckoutForm';
import Products from './components/customerView/Products'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './components/customerView/Cart'
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import AdminInvoices from './components/adminView/AdminInvoices'
import AdminInvoice from './components/adminView/AdminInvoice'
import Admin from './components/adminView/Admin'

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/admin/invoices' component={AdminInvoices} />
          <ProtectedRoute exact path='/admin/invoices/:id' component={AdminInvoice} />
          <ProtectedRoute exact path='/admin' component={AdminProducts} />
          <Route exact path='/products/:id' component={Product} />
          <Route exact path='/customer/products' component={Products} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Main} />
          <Route exact path='/payment_success' component={PaymentSuccess} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
