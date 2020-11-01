import React, {useEffect} from 'react';
import './dist/App.css';
import {getNotes} from './Redux/actions/notes-actions';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import CreateNote from './Components/CreateNote/CreateNote';

const App = () => {
  useEffect(() => getNotes(), []);

  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <Nav />
        <main className='main'>
          <CreateNote />
          <div className='note'>
            <div className='note__content'>
              <h2 className='note__author'>Evgeniy Phadeev</h2>
              <p>some new note</p>
              <p className='note__tags'>#new</p>
            </div>
            <div className='note__settings'>
              <div className='note__icon-container'><i className="fas fa-times"></i></div>
              <div className='note__icon-container'><i className="fas fa-edit"></i></div>
            </div>
          </div>
          <div className='note'>
            <div className='note__content'>
              <h2 className='note__author'>Evgeniy Phadeev</h2>
              <p>some other new note</p>
              <p className='note__tags'>#new #other</p>
            </div>
            <div className='note__settings'>
              <div className='note__icon-container'><i className="fas fa-times"></i></div>
              <div className='note__icon-container'><i className="fas fa-edit"></i></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;