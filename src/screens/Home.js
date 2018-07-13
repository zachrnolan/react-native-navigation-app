import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class Home extends Component {
  goToProfile = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Profile',
        passProps: {
          text: 'Some props that we are passing'
        },
        options: {
          topBar: {
            title: {
              text: 'Profile!'
            }
          }
        }
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={this.goToProfile} style={styles.button}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    marginTop: 20,
  }
})
