import { data } from './data' //  используем начальные данные
import { Row } from './Row'

import './Table.css'

function Table() {
  const { users } = data

  /** Общий метод обработки нажатия Удалить */
  const onDelete = user => console.log(user)

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            /** Рендер строки - user: данные, onDelete: обработчик нажатия Удалить */
            <Row key={user._id} user={user} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
