import React from 'react'
import { View,ScrollView,Text ,Image,TouchableOpacity} from 'react-native'
import { router } from 'expo-router';
const Module5 = ({moduleId}:{moduleId:number}) => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={{gap:8}}>


        <View style={{marginTop:15}}>
          <Text style={{fontSize:18,textAlign:"justify"}}>Bleeding</Text>
        </View>

        
        <View style={{gap:8}}>
          <Text style={{fontSize:18,textAlign:"justify"}}>Bleeding is the loss of blood escaping from the circulatory system</Text>
          <Text style={{fontSize:18,textAlign:"justify"}}>Bleeding that is severe enough to critically reduce blood volume is life threathening.This can cause tissues  to die from the lack oxygen. Life threathening bleeding can either external or internal. External  bleeding occurs when a blood vessel is opened from the outside such as through a tear in the skin</Text>
          <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/1.bleeding.jpg`)} />
        </View>



        <View style={{marginTop:15}}>
          <Text style={{fontSize:22,fontWeight:"bold",}}>Techniques to Control Bleeding</Text>

          <View style={{gap:6,marginTop:10}}>
              <Text style={{fontSize:16,}}>- Direct Pressure</Text>
              <Text style={{fontSize:16,}}>- Pressure bandage</Text>
          </View>
       
        </View>




        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Types of Blood</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Arterial Bleeding</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Venous Bleeding</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Capillary Bleeding</Text>
                       
                    </View>
        </View >




        <View style={{marginTop:25}}>
          <Text style={{fontSize:18,textAlign:"justify"}}>Shock</Text>
        </View>

      
        <View style={{gap:8 }}>
          <Text style={{fontSize:18,textAlign:"justify"}}>Shock is a condition in which the circulatory system fails to deliver enough oxygen-rich blood  to the body's tissues  and vital organs</Text>
          <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/2.shock.jpg`)} />
        </View>




        <View style={{marginTop:15}}>
           <Text style={{fontSize:22,fontWeight:"bold",}}>Causes</Text>

            <View style={{marginTop:15,gap:10}}>
                <Text style={{fontSize:20,fontWeight:"bold",}}>1. Loss of blood volume</Text>
                <Text style={{fontSize:18,textAlign:"justify"}}>Blood or fluid loss from blood vessels  decreases blodd volume, usually  as result of bleeding, and  results in adequate perfusion</Text>
            </View>


            <View style={{marginTop:15,gap:10}}>
                <Text style={{fontSize:20,fontWeight:"bold",}}>2. Pump Failure</Text>
                <Text style={{fontSize:18,textAlign:"justify"}}>Poor pump function occurs when diseases or injury damages the heart</Text>
            </View>

            <View style={{marginTop:15,gap:10}}>
                <Text style={{fontSize:20,fontWeight:"bold",}}>3. Dilation of peripheral blood vessels</Text>
                <Text style={{fontSize:18,textAlign:"justify"}}>Even though blood vessels dilate normally, it is inadequate  to fill the system and provide efficient perfusion</Text>
            </View>
        </View>




        
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Restlessness or irritabilty</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Altered level of consciousness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Pale, ashen or greyish color, moist skin</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Rapid breathing</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Rapid and weak pulse</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Excessive thirst</Text>
                       
                    </View>
        </View >



        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Make the person lie down</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Control any external bleeding</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Legs may be raised 6 to 12 inches</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Help the person maintain normal body temperature</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Do not give the person anything to eat or drunk</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Reassure the person every so often.</Text>
                       
                    </View>
        </View>




          </View>

      <View>
        <TouchableOpacity
        onPress={() => {
            router.push("/moduleQuizContainer/[id]")
            router.setParams({moduleId:moduleId.toString()})
        }}
         style={{width:"100%",height:50,backgroundColor:"red" ,alignItems:"center",justifyContent:"center",borderRadius:3,marginTop:30}}>
            <Text style={{color:"white",fontSize:20}}>TAKE THE QUIZ</Text>
        </TouchableOpacity>
     </View>




    </ScrollView>
  )
}

export default Module5