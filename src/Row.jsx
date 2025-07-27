export const Row = ({ user, onDelete }) => {
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>
          <button onClick={() => onDelete(user)}>Удалить</button>
        </td>
      </tr>
    </>
  )
}
