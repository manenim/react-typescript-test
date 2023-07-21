import React from 'react'

interface ChildProps {
    color: string;
    onClick: () => void;
    children: React.ReactNode
}

export const Child: React.FC<ChildProps> = ({color, onClick, children}) => {
    return (
      <div>
            <div>Hi there</div>
            {children}
          <button onClick={onClick}>Click me</button>
      </div>
  )
}

