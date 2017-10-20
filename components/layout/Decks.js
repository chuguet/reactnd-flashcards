import React, {Component} from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import {
  BlueView,
  DeckView,
  DeckTitleText,
  DeckSubTitleText,
  ButtonGreen,
  ButtonText,
  GridTop,
  GridFooter
} from '../common/styledComponents'
import { Asset, AppLoading, Font } from 'expo';
import { getDecks } from '../../utils/api'
import { receiveDecks } from '../../actions'

class Decks extends Component {

  state = {
    isReady: false,
  };

  async _GetInitialDataAndCacheResourcesAsync(dispatch) {
    await getDecks().then((decks) => dispatch(receiveDecks(decks)))
    await Font.loadAsync({
      'source-sans-pro-light': require('../../assets/fonts/SourceSansPro-Light.ttf'),
    })
  }

  render() {
    const { decks, navigation } = this.props
    if (!this.state.isReady) {
      return(
        <AppLoading
          startAsync={() => this._GetInitialDataAndCacheResourcesAsync(this.props.dispatch)}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    } else {
      return(
        <BlueView>
          <GridTop>
            {Object.keys(decks).map((deckname) => (
              <DeckView key={deckname} onPress={() => navigation.navigate('Deck', { title: decks[deckname].title })}>
                <DeckTitleText>{decks[deckname].title}</DeckTitleText>
                <DeckSubTitleText>{decks[deckname].questions.length} Card(s)</DeckSubTitleText>
              </DeckView>
            ))}
          </GridTop>
          <GridFooter>
            <ButtonGreen onPress={() => navigation.navigate('addDeck')}>
              <ButtonText>Add Deck</ButtonText>
            </ButtonGreen>
          </GridFooter>
        </BlueView>
      )
    }
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)
