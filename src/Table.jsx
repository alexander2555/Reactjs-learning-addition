import { useState } from 'react'

import { Button, Label, SortLink } from './components'
import { sortBy } from './utils'

import { data } from './data' // используем начальные данные
import { cols as colsModel } from './model'

import './Table.css'

Array.prototype.sortBy = sortBy

export const Table = () => {
  const { users } = data // получаем пользователей из начальных данных

  const [sort, setSort] = useState('')

  // компоненты для рендеринга колонок
  colsModel.qualities.component = item => (
    <>
      {item.qualities.map(q => (
        <Label key={q._id} text={q.name} color={q.color} className='quality' />
      ))}
    </>
  )
  colsModel.delete.component = item => (
    <Button onClick={() => console.log(item)}>Удалить</Button>
  )

  const onSort = e => {
    e.preventDefault()
    setSort(e.target.getAttribute('href') || '')
  }

  const renderColumn = (item, col) => {
    const component = colsModel[col].component
    if (component && typeof component === 'function') {
      return component(item)
    }
    return item[col]
  }

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(colsModel).map((col, i) => (
              <th key={i}>
                {colsModel[col].sort ? (
                  <SortLink className='sort-link' sort={col} onClick={onSort}>
                    {colsModel[col].title}
                    <span className='sort-icon'>&nbsp;&#8597;</span>
                  </SortLink>
                ) : (
                  <span>{colsModel[col].title}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.sortBy(colsModel, sort).map(user => (
            <tr key={user._id}>
              {Object.keys(colsModel).map((col, i) => (
                <td key={i}>{renderColumn(user, col)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
