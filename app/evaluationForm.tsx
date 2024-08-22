import { View ,Text,StyleSheet,ScrollView} from "react-native"
import { Stack } from "expo-router"
import { useLocalSearchParams } from 'expo-router';
import { useState } from "react";
import { RadioButton } from 'react-native-paper';
type EvaluationPropType = {
    name:string,
    field:string,
    id:string,
}
const EvaluationForm = () => {


  const [rating,setRating] = useState({
      rate1:"",
      rate2:"",
      rate3:"",
      rate4:"",
      rate5:"",
  })

    const {name,field,id} = useLocalSearchParams() as EvaluationPropType
  return (
    <ScrollView>
  
    <Stack.Screen options={{ title: "Evaluate Trainer" }} />
    <View >
        <View style={styles.detailsContainer}>
            <View style={{width:80,height:80,borderRadius:120,backgroundColor:"#F1EFEF"}}></View>
            <View style={{gap:1}}>
                <Text style={styles.cardName}>{name}</Text>
                <Text style={{fontSize:18}}>{field}</Text>
            </View>
        </View>

      
        <Text style={{fontSize:18}}>{rating.rate1}</Text>


        <View style={{padding:20}}>
          <View>
            <Text style={{fontSize:18,textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          
          <View>
          <RadioButton.Group onValueChange={newValue => setRating({...rating,rate1:newValue})} value={rating.rate1}>
           <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-evenly", marginTop:20}}>
              <View>
                <Text>Worst</Text>
                <RadioButton value="1" />
              </View>
              <View>
                <Text>Bad</Text>
                <RadioButton value="2" />
              </View>
              <View>
                <Text>Neutral</Text>
                <RadioButton value="3" />
              </View>

              <View>
                <Text>Good</Text>
                <RadioButton value="4" />
              </View>

              <View>
                <Text>Excellent</Text>
                <RadioButton value="5" />
              </View>
            </View>
          </RadioButton.Group>

                </View>
            
            </View>
        </View>

        {/* rate conatainer ends here */}



        
        <View style={{padding:20}}>
          <View>
            <Text style={{fontSize:18,textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          
          <View>
          <RadioButton.Group onValueChange={newValue => setRating({...rating,rate2:newValue})} value={rating.rate2}>
           <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-evenly", marginTop:20}}>
              <View>
                <Text>Worst</Text>
                <RadioButton value="1" />
              </View>
              <View>
                <Text>Bad</Text>
                <RadioButton value="2" />
              </View>
              <View>
                <Text>Neutral</Text>
                <RadioButton value="3" />
              </View>

              <View>
                <Text>Good</Text>
                <RadioButton value="4" />
              </View>

              <View>
                <Text>Excellent</Text>
                <RadioButton value="5" />
              </View>
            </View>
          </RadioButton.Group>

                </View>
            
            </View>
        </View>

        {/* rate conatainer ends here */}






      
        <View style={{padding:20}}>
          <View>
            <Text style={{fontSize:18,textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          
          <View>
          <RadioButton.Group onValueChange={newValue => setRating({...rating,rate3:newValue})} value={rating.rate3}>
           <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-evenly", marginTop:20}}>
              <View>
                <Text>Worst</Text>
                <RadioButton value="1" />
              </View>
              <View>
                <Text>Bad</Text>
                <RadioButton value="2" />
              </View>
              <View>
                <Text>Neutral</Text>
                <RadioButton value="3" />
              </View>

              <View>
                <Text>Good</Text>
                <RadioButton value="4" />
              </View>

              <View>
                <Text>Excellent</Text>
                <RadioButton value="5" />
              </View>
            </View>
          </RadioButton.Group>

                </View>
            
            </View>
        </View>

        {/* rate conatainer ends here */}


        

        <View style={{padding:20}}>
          <View>
            <Text style={{fontSize:18,textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          
          <View>
          <RadioButton.Group onValueChange={newValue => setRating({...rating,rate4:newValue})} value={rating.rate4}>
           <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-evenly", marginTop:20}}>
              <View>
                <Text>Worst</Text>
                <RadioButton value="1" />
              </View>
              <View>
                <Text>Bad</Text>
                <RadioButton value="2" />
              </View>
              <View>
                <Text>Neutral</Text>
                <RadioButton value="3" />
              </View>

              <View>
                <Text>Good</Text>
                <RadioButton value="4" />
              </View>

              <View>
                <Text>Excellent</Text>
                <RadioButton value="5" />
              </View>
            </View>
          </RadioButton.Group>

                </View>
            
            </View>
        </View>

        {/* rate conatainer ends here */}


      
        <View style={{padding:20}}>
          <View>
            <Text style={{fontSize:18,textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          
          <View>
          <RadioButton.Group onValueChange={newValue => setRating({...rating,rate5:newValue})} value={rating.rate5}>
           <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-evenly", marginTop:20}}>
              <View>
                <Text>Worst</Text>
                <RadioButton value="1" />
              </View>
              <View>
                <Text>Bad</Text>
                <RadioButton value="2" />
              </View>
              <View>
                <Text>Neutral</Text>
                <RadioButton value="3" />
              </View>

              <View>
                <Text>Good</Text>
                <RadioButton value="4" />
              </View>

              <View>
                <Text>Excellent</Text>
                <RadioButton value="5" />
              </View>
            </View>
          </RadioButton.Group>

                </View>
            
            </View>
        </View>

        {/* rate conatainer ends here */}
     
    </View>
    </ScrollView>
  )
}

export default EvaluationForm;



const styles = StyleSheet.create(
    {
  
      main: {
        flex: 1,
        paddingVertical:50,
        paddingHorizontal:20,
      },
  
      header:{
        fontSize:25,
      },
      detailsContainer:{
        width:"100%",
        backgroundColor:"white",
        flexDirection:"row",
        padding:20,
        alignItems:"center",
        gap:10
      },
      cardName:{
        fontSize:35,
        fontWeight:"900",
        color:"#444242"
      }
  
  
    }
  
   
  )