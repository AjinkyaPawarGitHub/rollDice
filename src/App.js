import { StyleSheet, Text, View , Image, TouchableOpacity, Pressable} from 'react-native'
import React, { useState } from 'react'


import dice01 from '../assets/One.png'
import dice02 from '../assets/Two.png'
import dice03 from '../assets/Three.png'
import dice04 from '../assets/Four.png'
import dice05 from '../assets/Five.png'
import dice06 from '../assets/Six.png'


const Dice = ({ imageUrl }) => {
    return (
      <View>
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    );
  };


 



export default function App() 
{
  const [diceImage , setDiceImage] = useState(dice01)

  function rollDiceOnTap()
{
  

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
        case 1:
            {
                setDiceImage(dice01)
            }
            
            break;

            case 2:
                {
                    setDiceImage(dice02)
                }
                
                break;
                
                case 3:
                    {
                        setDiceImage(dice03)
                    }
                    
                    break;

                    case 4:
                        {
                            setDiceImage(dice04)
                        }
                        
                        break;

                        case 5:
                            {
                                setDiceImage(dice05)
                            }
                            
                            break;

                            case 6:
                                {
                                    setDiceImage(dice06)
                                }
                                
                                break;

                                default:
                                    {
                                        setDiceImage(dice01)
                                    }

                                    break;
    
        
    }
} 



   
  return (
    <View style={styles.container}>
        <Dice imageUrl = {diceImage}></Dice>

        
            <Pressable onPress={rollDiceOnTap}>
            <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
            </Pressable>
        
      

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF2F2',
    },
    diceContainer: {
      margin: 12,
    },
    diceImage: {
      width: 200,
      height: 200,
    },
    rollDiceBtnText: {
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: '#E5E0FF',
      fontSize: 16,
      color: '#8EA7E9',
      fontWeight: '700',
      textTransform: 'uppercase',
    },
  });