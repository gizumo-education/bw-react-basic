import reactLogo from './assets/react.svg'
import React from 'react';
import styles from './App.module.css'
import { Profile } from './components/Profile'


export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']}/>
      <p>React Lessonへようこそ</p>
      <hr />
      <Profile />
    </div>
  )
};