import React from 'react'
import { Header } from 'semantic-ui-react'

export default function MainHeader({title}) {
  return (
      <Header as="h1" >{title}</Header>
  )
}
