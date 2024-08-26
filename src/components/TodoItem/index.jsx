import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  return isToday && <li className={styles.name}>{name} {isCompleted && '✔️'}</li>
}
    

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

// Boolean オブジェクトは論理値（true または false）を表します。is○○がで書かれる

// 1.PropTypesとcssモジュールをインポートする
// 2.TodoItemコンポーネントを定義する。TodoItemコンポーネントはname,isToday,isCompletedプロパティを受け取る。
// 3.isTodayがfalseの時（今日実施するタスクではないとき）nullを返してコンポーネントをレンダリングしない。
// 4.returnで<li>要素にタスクの名前が出ている場合(今日実施するタスクである場合)かつタスクが完了している場合はチェックをつける。