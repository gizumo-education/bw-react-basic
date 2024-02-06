import React from 'react';
import reactLogo from './assets/react.svg';  // Reactロゴの画像パス
import styles from './App.module.css';  // スタイルシートのインポート
import { Button } from './components/Button/index.jsx';
import { Profile } from './components/Profile/index.jsx';
import { Card } from './components/Card/index.jsx';
import { Country } from './components/Country/index.jsx';
import { TodoItem } from './components/TodoItem/index.jsx';
import { LanguageList } from './components/LanguageList/index.jsx';
import { AlertButton } from './components/AlertButton/index.jsx';
import { InputField } from './components/InputField/index.jsx';
import { CharacterImage } from './components/CharacterImage/index.jsx';


export const App = () => {
  const countryInfo = {
    url: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
    name: 'アメリカ',
  };

  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} alt="React Logo" />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <hr />
      <Button />
      <Button />
      <Button />

      <hr />
      <Profile />

      <hr />
      <Card>
        <Country info={countryInfo} width={120} height={80} />
      </Card>

      <hr />
      <ul>
        <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
        <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
        <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
      </ul>

      <hr />
      <LanguageList />

      <hr />
      <AlertButton />

      <hr />
      <InputField />

      <hr />
      <CharacterImage />

    </div>
  );
};