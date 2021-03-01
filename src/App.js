import React from 'react'
import Header from './Header'
import Schedules from './Schedules'
import NewSchedules from './NewSchedules'

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='body vh-100'>
        <Header />
        <div className='Content container-md shadow-sm p-3 mb-5 bg-body rounded'>
          <Switch>
            <Route path='/' exact component={NewSchedules} />
            <Route path='/schedules' exact component={Schedules} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App