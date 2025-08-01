import { useState } from 'react'

import { Button, Label, SortLink } from './components'
import { sortBy } from './utils'

import { data } from './data' // начальные данные

import './Table.css'

// колонки для рендеринга
const cols = {
  name: {
    title: 'Имя',
    sort: true,
  },
  age: {
    title: 'Возраст',
    sort: true,
  },
  qualities: {
    title: 'Качества',
    component: item => (
      <>
        {item.qualities.map(q => (
          <Label key={q._id} text={q.name} color={q.color} className='quality' />
        ))}
      </>
    ),
  },
  profession: {
    title: 'Профессия',
    component: item => <span>{item.profession.name}</span>,
    sort: item => item.profession.name,
  },
  delete: {
    title: 'Удалить',
    component: item => <Button onClick={() => console.log(item)}>Удалить</Button>,
  },
}

// получаем пользователей из начальных данных
const { users } = data

// добавляем метод для сортировки по колонке к массиву пользователей
users.sortBy = sortBy

export const Table = () => {
  const [sortCol, setSortCol] = useState('')
  const [sortDir, setSortDir] = useState(1)

  const onSort = e => {
    e.preventDefault()
    setSortCol(e.target.getAttribute('href') || '')
    setSortDir(-sortDir)
  }

  const renderColumn = (item, col) => {
    const component = cols[col].component
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
            {Object.keys(cols).map((col, i) => (
              <th key={i}>
                {cols[col].sort ? (
                  <SortLink className='sort-link' sort={col} onClick={onSort}>
                    {cols[col].title}
                    {sortCol === col && (
                      <span className='sort-icon'>&nbsp;{sortDir > 0 ? '↑' : '↓'}</span>
                    )}
                  </SortLink>
                ) : (
                  <span>{cols[col].title}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.sortBy(cols, sortCol, sortDir).map(user => (
            <tr key={user._id}>
              {Object.keys(cols).map((col, i) => (
                <td key={i}>{renderColumn(user, col)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
