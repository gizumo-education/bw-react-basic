import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button';
import { Profile } from './components/Profile';

<div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}
    </div>
    
    export const App = () => {
      return (
        <div>
          <img src={reactLogo} className={styles['react-logo']} />
          <h1>Hello React!</h1>
          <hr />
          <Button className={styles.button}>Button</Button>
          <Button className={styles.button}>Button</Button>
          <Button className={styles.button}>Button</Button>
          <hr />
          <Profile/>
        </div>
      )
    };
  
    
