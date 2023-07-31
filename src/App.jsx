import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import Button from './components/Button/index';
import Profile from './components/Profile/index';
import Country from './components/Country/index';
import Card from './components/Card/index';
import TodoItem from './components/TodoItem/index';
import LanguageList from './components/LanguageList/index';
import AlertButton from './components/AlertButton/index';
import InputField from './components/InputField/index';
import CharacterImage from './components/CharacterImage/index';

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

      {/* section7練習問題 */}
      <ul>
        <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
        <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
        <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
      </ul>
      <hr />

      {/* section8練習問題 */}
      <LanguageList />
      <hr />

      {/* section9練習問題 */}
      <AlertButton />
      <hr />

      {/* section10練習問題 */}
      <InputField />
      <hr />

      {/* section11練習問題 */}
      <CharacterImage />
      <hr />
    </div>
  );
};

