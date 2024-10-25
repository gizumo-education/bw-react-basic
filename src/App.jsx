import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Profile } from './components/Profile'
import { Country } from './components/Country'
import { Card } from './components/Card'


export const App = () => {
  return (
    <div>
    <img src={reactLogo} className={styles['react-logo']} />
    <h1>Hello React!</h1>

    {/* 以下に練習問題の回答を記述してください */}

    <hr />
    
    {/* Section4 */}
    <Button />
    <Button />
    <Button />

    <hr />

    {/* Section5 */}
    <Profile />
    
    <hr />

    {/* Section6 */}
    <Card>{/* 問2 */}
      <Country /> {/* 問1 */}
    </Card>
    

    <hr />
 


     




  </div>
  )
}