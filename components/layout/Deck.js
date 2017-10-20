import React, {Component} from 'react'
import { connect } from 'react-redux'
import { GridTop, GridBottom, BigBlueText, SmallBlueText, BlueLightView, Button, ButtonGreen, ButtonText } from '../common/styledComponents'

class Deck extends Component {

  render(){
    const {decks, navigation} = this.props
    const currentdeck = decks[navigation.state.params.title]

    return(
      <BlueLightView>
        <GridTop>
          <BigBlueText>
            {navigation.state.params.title}
          </BigBlueText>
          <SmallBlueText>
            {currentdeck.questions.length} Card(s)
          </SmallBlueText>
        </GridTop>
        <GridBottom>
          <Button onPress={() => navigation.navigate('addCard', {id: currentdeck.title})}>
            <ButtonText>Add Card</ButtonText>
          </Button>
          { currentdeck.questions.length > 0 &&
            <ButtonGreen onPress={() => navigation.navigate('Quiz', { title: `${currentdeck.title} Quiz`, id: currentdeck.title, counter: 0 })} >
              <ButtonText>Start Quiz {currentdeck.title}</ButtonText>
            </ButtonGreen>
          }
        </GridBottom>
      </BlueLightView>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Deck)
