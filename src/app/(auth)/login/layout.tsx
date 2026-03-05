import React from 'react'
import AuthLayout from '../AuthLayout'

const layout = async({children}:{children:React.ReactNode}) => {
  return <AuthLayout imageUrl="/signin.webp">{children}</AuthLayout>
  
}

export default layout;