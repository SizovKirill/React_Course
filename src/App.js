import React from 'react';
import './App.css';
import Header from './header';
import Technologies from'./technologies';
import Footer from './footer';
import Menu_sidebar from './menu_sudebar';
import Contacts from './contacts';


const App = () => {
    return ( 
    <div>
      <Header />
      <Menu_sidebar/>     
      <Contacts/>
      <Technologies/>
      <Footer/>
    </div>
    );
} 

export default App;