import { data } from './data' //  используем начальные данные
import { Row } from './Row'

import './Table.css'

function Table() {
  /** Общий метод обработки нажатия Удалить */
  const onDelete = user => console.log(user)

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Удалить</td>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            /** Рендер строки - user: данные, onDelete: обработчик нажатия Удалить */
            <Row key={user._id} user={user} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
