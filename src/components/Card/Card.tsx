import './Card.css';

const Card: React.FC<{ children: React.ReactNode, className: string }> = (props) => {
  const { children, className } = props
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export { Card };