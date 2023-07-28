import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import Button from './components/Button/index';
import Profile from './components/Profile/index';
import Country from './components/Country/index';
import Card from './components/Card/index';

export const App = () => {
  return (
    <div>
      {/* section3練習問題 */}
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>
      <hr />

      {/* section4練習問題 */}
      <Button />
      <Button />
      <Button />
      <hr />

      {/* section5練習問題 */}
      <Profile />
      <hr />

      {/* section6練習問題 */}
      <Country
        info={{
          imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
          name: 'アメリカ',
        }}
        width={200}
        height={150}
      />
      <hr />

      {/* section6練習問題_2 */}
      <Card>
        <Country
          info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ',
          }}
          width={200}
          height={150}
        />
      </Card>
      <hr />

    </div>
  );
};

