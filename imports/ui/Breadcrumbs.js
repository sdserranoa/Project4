import React from 'react'

const BreadcrumbItem = ({ children, ...props }) => (
    <li className='breadcrumb-item' {...props}>
      {children}
    </li>
  )
  
  const Breadcrumb = (props) => {
    let children = React.Children.toArray(props.children)
  
    children = children.map((child, index) => (
      <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
    ))
  
  
  
    return <ol>{children}</ol>
  }
  
  export default Breadcrumb