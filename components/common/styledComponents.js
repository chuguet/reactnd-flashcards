import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'
import { gray, white, bluelight, blue, bluedark, bluegreendark } from '../../utils/colors'

export const BlueView = styled.View`
  background-color: ${blue};
  flex:1;
  align-items: center;
  justify-content: flex-start;
`
export const DeckView = styled.TouchableOpacity`
  flex:1;
  min-width: 100%;
  max-height: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${bluelight};
  margin-bottom:1px;
`
export const DeckTitleText = styled.Text`
  font-family: 'source-sans-pro-light';
  font-size: 25px;
  color: ${white};
`
export const DeckSubTitleText = styled.Text`
  font-family: 'source-sans-pro-light';
  font-size: 15px;
  color: ${white};
`
export const ButtonText = styled.Text`
  font-family: "source-sans-pro-light";
  color: ${white};
  font-size: 20px
`
export const GridTop = styled.View`
  align-content: flex-start;
  justify-content: flex-start;
  flex:1;
`
export const GridBottom = styled.View`
  align-items: center;
  flex:1;
  align-content: flex-end;
  justify-content: flex-end;
  padding-bottom:60px;
`
export const BigBlueText = styled.Text`
  color: ${white};
  font-family: "source-sans-pro-light";
  font-size: 40px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`
export const SmallBlueText = styled.Text`
  color: ${white};
  font-family: "source-sans-pro-light";
  font-size: 15px;
  text-align: center;
`
export const BlueLightView = BlueView.extend`
  background-color: ${bluelight}
`
export const Button = styled.TouchableOpacity`
  min-width: 50%;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom:15px;
  border-radius:5px;
  border-width:1px;
  border-color:${white};
  background-color: ${blue};
`

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const ButtonGreen = Button.extend`
  background-color: ${bluegreendark};
  margin-bottom: 50px;
`

export const GridFooter = styled.View`
align-items: center;
align-content: flex-end;
justify-content: flex-end;
  min-height: 110px;
  padding-bottom:10px;
`

export const MyTextInput = styled.TextInput.attrs({
    placeholderTextColor:gray,
    autoCorrect:false,
  })`
  height: 50px;
  width: 300px;
  color: ${white};
  font-size: 20px;
  font-family: "source-sans-pro-light";
  text-align: center;
  align-items: center;
`

export const MyKeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex:1;
  justify-content: center;
  align-items: center;
`
