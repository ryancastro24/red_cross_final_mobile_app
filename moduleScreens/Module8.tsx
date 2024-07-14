import React from 'react'
import { View,ScrollView,Text,Image } from 'react-native'

const Module8 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{gap:8}}>



            <View>
                <Text style={{fontSize:18,textAlign:"justify"}}>Types</Text>
            </View>


            <View style={{gap:8,marginTop:15}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Head Injury</Text>    
                <Text style={{fontSize:18,textAlign:"justify"}}>A head injury is potentially dangerous,if not properly treated, injuries that seem minor could become life threatening. Head injuries include scalp wounds , skull fructures and brain injuries.</Text>
            </View>


            <View style={{gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Concussion</Text>    
                <Text style={{fontSize:18,textAlign:"justify"}}>
                    A concussion involves a temporary loss of brain function from a blow received by a victim to the head. 
                    Loss of consciousness may not always occur, but it's after-effects can be easily recognized.
                </Text>
            </View>


            <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/head injury.jpg`)} />

            <View style={{gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Spinal Injury </Text>    
                <Text style={{fontSize:18,textAlign:"justify"}}>
                   Spine injuries often fracture the vertebrate and sprain the ligaments
                </Text>
            </View>



            
                    
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Prevent injuries to the head, neck and back by practicing these safety guidelines: </Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Wear safety belts (lap and shoulders restraints) and place children in car safety seats</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Wear approved helmets, eyewear, faceguards and mouth guards </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Climb steps carefully to prevent slipping or falling  </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Obey rules in sports and recreational activities</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Avoid inappropriate alcohol use</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Inspect work and recreational equipment regularly</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Think and talk about safety.</Text>
                       
                    </View>
            </View >





          










        </View>

    </ScrollView>
  )
}

export default Module8