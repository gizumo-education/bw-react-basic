import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  return (
    <>
      {/* 解答 */}
      {/* [ A  ?                        B(true)                        : C(false) ] */}
      {isToday ? <li className={styles.name}>{name} {isCompleted ? '✔︎' : ''}</li> : ''}
      {/* <li className={styles.name}>{name}</li> */}
      {/* falseの場合 */}
    </>
  )
};
//＊ [ A ? B(true) : C(false) ]

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

////条件
// ・○src/components/TodoItem/index.jsx のTodoItemコンポーネントに記述すること 
// ・TodoItemコンポーネントはToDoのリスト1つ1つを出しわけするためのコンポーネントです。

//   - ToDoを今日実施する場合（isToday propsがtrueの場合）のみ、li要素を返し、ToDo名を表示すること
//   - すでにToDoが完了している場合（isCompleted propsがtrueの場合）、liタグの中で、ToDo名に続けて「✔︎」の文字列をつなげて表示すること（未完了の場合は、ToDo名のみを表示します）

// ・src/App.jsx にTodoItemコンポーネントをインポートし、以下のようにTodoItemコンポーネントを3個追記し、画面に表示された時に、ToDoの出しわけができている状態になっていること
// 前回までの練習問題で記述した内容は削除せずに追記すること


//元
// export const TodoItem = ({ name, isToday, isCompleted }) => {
//   return<li className={styles.name}>{name}</li> ＊＊＊
// }

// TodoItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   isToday: PropTypes.bool.isRequired,
//   isCompleted: PropTypes.bool.isRequired,
// }





