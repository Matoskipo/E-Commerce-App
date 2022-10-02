import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home,About,Wrapper,Cart,Checkout,PrivateRoute,ProductsPage,SingleProduct,Error} from './pages'

function App() {
  return(
     <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route exact path ='/about'>
          <About />
        </Route>
        <Route exact path ='/cart'>
          <Cart />
        </Route>
        <Route exact path ='/products'>
          <ProductsPage />
        </Route>
        <Route exact path='/products/:id'>
          <SingleProduct/>
          </Route>
        <Route exact path ='/checkout'>
          <Checkout />
        </Route>
        <Route exact path ='/checkout'>
          <Checkout />
        </Route>
        <Error  path = '*'>
          <Checkout />
        </Error>
      </Switch>
      <Footer/>
    </Router>
  )


}

export default App
