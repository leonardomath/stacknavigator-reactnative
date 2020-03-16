import React from 'react'
import { Text, Button } from 'react-native'

export default function Home({ navigation }) {
  return (
    <>
      <Text>Welcome</Text>
      <Button
        title="see perfil"
        onPress={() => navigation.navigate('Details', {
          username: 'Leo',
          age: 20
        })} />
    </>
  )
}