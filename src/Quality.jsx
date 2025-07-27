export const Quality = ({ name, color }) => {
  return (
    <span className='quality' style={{ backgroundColor: `var(--color-${color})` }}>
      {name}
    </span>
  )
}
