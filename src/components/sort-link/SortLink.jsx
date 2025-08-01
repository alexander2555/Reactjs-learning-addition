export const SortLink = ({ className, onClick, children, sort }) => (
  <a href={sort} className={className} onClick={onClick} title='Сортировка'>
    {children}
  </a>
)
