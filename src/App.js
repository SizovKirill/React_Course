import React from 'react';
import './App.css';
import './components/css/header.scss';
import './components/css/sidebar.scss';
import './components/css/maincontent.scss';
import './components/css/profile.scss';
import './components/css/post.scss';
import './components/css/button.scss';
import './components/css/post__list.scss';

import Header from './components/header';
import Sidebar from './components/sidebar';
import Profile from './components/profile';


const App = () => {
    return ( 
    <div className="app__wrapper">
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
    );
} 

export default App;