// import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Route , Switch
} from 'react-router-dom'
import React, { useEffect } from 'react'
import './reset.css'
import './index.css'
// import ___ from './components/___/'
import Header from './components/Header/'
import Footer from './components/Footer/'
import MainPage from './components/MainPage/'
import HomePage from './components/HomePage/'
import axios from 'axios';



function App () {

  useEffect(
    () => {
      
      axios
      .get('api/all')
      .then( res => {
        console.log(res.data)
      })
      .catch( err => {
        console.log(err)
      })

    },
    [ ]
  )

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/main">
            <MainPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );

}



const root = document.getElementById('root');
ReactDOM.render( <App /> , root )
// serviceWorker.unregister();