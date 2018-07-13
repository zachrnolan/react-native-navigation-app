import { Navigation } from 'react-native-navigation'
import Home from './screens/Home'
import Profile from './screens/Profile'

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('Profile', () => Profile)
}
