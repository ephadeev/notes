import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import './dist/App.css';
import {getNotes} from './Redux/actions/notes-actions';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Notes from './Components/Notes/Notes';
import FilteredNotes from './Components/Notes/FilteredNotes';

const App = ({getNotes}) => {
  useEffect(() => getNotes(), []);

  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <Nav />
        <main className='main'>
          <Route exact path='/'>
            <Notes />
          </Route>
          <Route path='/tag/:index' component={FilteredNotes} />
        </main>
      </div>
    </div>
  );
}

App.propTypes = {
  getNotes: PropTypes.func,
}

const mapDispatchToProps = {
  getNotes
}

export default connect(null, mapDispatchToProps)(App);