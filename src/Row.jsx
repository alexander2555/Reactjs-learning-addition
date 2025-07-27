import { Quality } from './Quality'

export const Row = ({ user, onDelete }) => {
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>
          {user.qualities.map(q => (
            <Quality key={q._id} name={q.name} color={q.color} />
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>
          <button onClick={() => onDelete(user)}>Удалить</button>
        </td>
      </tr>
    </>
  )
}
