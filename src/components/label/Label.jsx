export const Label = ({ className, text, color }) => (
  <span className={className} style={{ backgroundColor: `var(--color-${color})` }}>
    {text}
  </span>
)
