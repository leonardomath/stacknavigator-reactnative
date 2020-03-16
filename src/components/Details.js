import React from 'react'
import { Text } from 'react-native'

export default function Details({ route }) {

  const { username } = route.params
  const { age } = route.params

  return (
    <Text>User Profile {username}, {age} years old</Text>
  )
}