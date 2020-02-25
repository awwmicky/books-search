// import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import React, { useEffect } from 'react'
import './index.css'
// import ___ from './components/___/'
import Header from './components/Header/'
import Main from './components/Main/'
import Footer from './components/Footer/'
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
      <Header />
      <Main />
      <Footer />
    </div>
  );

}



const root = document.getElementById('root');
ReactDOM.render( <App /> , root )
// serviceWorker.unregister();