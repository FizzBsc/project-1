import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

export default function Page(){
    return(
        <div className='components'>
            <Navbar />
            <Main />
        </div>
    )
}