export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function createNewDeck (title) {
  return {
    type: CREATE_NEW_DECK,
    title,
  }
}

export function createNewCard (deckname, question, answer) {
  return {
    type: CREATE_NEW_CARD,
    deckname,
    question,
    answer,
  }
}

export function updateSuccess (deckname, correct){
  return{
    type: UPDATE_SUCCESS,
    deckname,
    correct,
  }
}
