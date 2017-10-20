import React from 'react'
import { View, StatusBar, Text } from 'react-native'
import styled from 'styled-components/native'
import Decks from './components/layout/Decks'
import Deck from './components/layout/Deck'
import Quiz from './components/layout/Quiz'
import addDeck from './components/layout/AddDeck'
import addCard from './components/layout/AddCard'
import { Constants } from 'expo'
import { blue, red, redlight, white, bluelight } from './utils/colors'
import { Font } from 'expo';
import { Asset, AppLoading } from 'expo';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/notifications'

export default class App extends React.Component {

  componentDidMount (){
    setLocalNotification()
  }

  render(){
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <StatusBarView>
            <StatusBar
              translucent
              backgroundColor={blue}
              barStyle="light-content"
            />
          </StatusBarView>
          <Stack/>
        </View>
      </Provider>
    )
  }

}

const Stack = StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'All Decks',
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
    }),
  },
  addDeck: {
    screen: addDeck,
    navigationOptions: {
      title: 'Add Deck',
    },
  },
  addCard: {
    screen: addCard,
    navigationOptions: {
      title: 'Add Card',
    },
  },
},{
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    }
  }
)

const StatusBarView = styled.View`
  height: ${Constants.statusBarHeight};
  background: ${ blue };
`
