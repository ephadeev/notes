import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import './dist/App.css';
import {getNotes} from './Redux/actions/notes-actions';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import CreateNote from './Components/CreateNote/CreateNote';
import Notes from './Components/Notes/Notes';

const App = ({getNotes, notes}) => {
  useEffect(() => getNotes(), []);

  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <Nav />
        <main className='main'>
          <CreateNote />
          <Switch>
          <Route path='/'>
            <Notes notes={notes} />
          </Route>
          <Route path='/tag/:index'>
            <Notes notes={notes} />
          </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

App.propTypes = {
  getNotes: PropTypes.func,
  notes: PropTypes.array
}

const mapStateToProps = state => {
  return {
      notes: state.notes.notes
  }
}

const mapDispatchToProps = {
  getNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(App);