import PropTypes from 'prop-types'
import styles from './index.module.css'

export const Card = ({children}) => {
  return (
    <div className={styles.card}>{children}</div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}

{/*src/components/Card/index.jsx のCardコンポーネントでchildren propsを受け取り、JSX内で使用すること
src/App.jsx にCardコンポーネントをインポートして、問題1で src/App.jsx に記述したCountryコンポーネントをCardコンポーネントのchildrenとなるように記述すること
前回までの練習問題で記述した内容は削除せずに追記すること
以下のように<hr />の記述を追加して区切り線をつけ、見やすい形にしてください*/}