
import { View,ScrollView,Text ,Image} from 'react-native'

const Module9 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={{gap:8}}>

            <View>
                <Text style={{fontSize:18,textAlign:"justify"}}>Types</Text>
            </View>

            <View style={{gap:8}}>

                <Text style={{fontSize:18,textAlign:"justify"}}>
                    A <Text style={{fontWeight:"bold"}}>strain</Text> or pulled muscles caused by the overstretching and tearing of muscles or tendons.
                    This usually involves muscles in the neck, back tight or the back of the lower leg.
                </Text>
                

                <Text style={{fontSize:18,textAlign:"justify"}}>
                    A <Text style={{fontWeight:"bold"}}>sprain</Text> is the tearing of ligaments at a joint. The joints most easily injured are the ankle, knee, wrist and fingers.
                </Text>


                
                <Text style={{fontSize:18,textAlign:"justify"}}>
                    A <Text style={{fontWeight:"bold"}}>fracture</Text> is a complete break, a chip or crack  in a bone. 
                    In general fractures are not life threatening. However, a breakage in the large bones, a severed artery,
                    and difficulties in breathing are dangerous signals to look out for. A fracture is either closed or open.
                    
                </Text>


                <Image style={{width:"100%",height:180,marginTop:20}}   source={require(`../assets/images/Strain.jpg`)}  />
            </View> 

                         
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms </Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Pain</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Significant bruising and swelling </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Significant deformity </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Inability to use affected body part normally </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Bone fragments sticking out of a wound</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Grating sensation after bearing a bone pop or snap</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Cold numb and tingly sensations on the injured area</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- When the cause of injury suggests that it may be severe</Text>
                       
                    </View>
            </View >



            
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management </Text>
                
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold",}}>- R - Rest</Text>
                        <Text style={{fontSize:18,fontWeight:"bold",}}>- I - Immobilize</Text>
                        <Text style={{fontSize:18,fontWeight:"bold",}}>- C - Cold</Text>
                        <Text style={{fontSize:18,fontWeight:"bold",}}>- E - Elevate</Text>
                        
                                               
                </View>

          
             </View>



        </View>
    </ScrollView>
  )
}

export default Module9