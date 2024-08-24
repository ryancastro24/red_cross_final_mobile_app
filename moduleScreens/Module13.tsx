import React from 'react'
import { View,ScrollView,Text ,Image,TouchableOpacity} from 'react-native'
import { router } from 'expo-router';
const Module13 = ({moduleId}:{moduleId:number}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:10}}>

            <Text style={{fontSize:18,textAlign:"justify"}}>Lifting and Carrying are dynamic processes. A patient can be moved to safety in many different ways, but no one way is best for every situation.
                The objective is to move a patient to safety without causing injury to either the patient or the first aider.
            </Text>

            
            <View style={{gap:10,marginTop:15}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Emergency Move</Text>
                <Text style={{fontSize:18,textAlign:"justify"}}>Is the movement of a patient to a safe place before initial assesment and care is provided typically because there is some potential danger</Text>
            </View>

            <View style={{gap:10,marginTop:15}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Non-Emergency Move</Text>
                <Text style={{fontSize:18,textAlign:"justify"}}>Is the movement of a patient when both the scene and the patient are stable.</Text>
            </View>



            <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>Generally: DO NOT move an injured or ill person while giving care except in the following situations:</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- When faced with immediate danger such as fire, lack of oxygen, risk of explosion or a collapsing structure. Give care only when it can be done safely.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- When there is a need to get to another person who may be a more serious problem. In this case, a person with minor injuries may be moved to reach someone needing immediate care.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- When it is necessary to give proper care. For example , if someone needs CPR, he or she might have to be moved from a bed because CPR needs to be performed on a firm, falt surface. If the surface or space is not adequate for giving the necessary care, the person should be moved.</Text>
                       
                    </View>
            </View >


        


        
            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Lifting and Moving Guidelines</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{fontSize:18,color:"white"}}>- Only attempt to move persons who you are sure you can comfortably handle.</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Bend your body at the knees and hips.</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Lift with your legs, not with your back</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Walk carefully using short steps</Text>
                            <Text style={{fontSize:18,color:"white"}}>- When possible, move forward rather than backward</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Always look where you are going</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Support the victim's head, neck and back, if necessary</Text>
                            <Text style={{fontSize:18,color:"white"}}>- If supine, lift and carry the patien's entire body as one unit</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Avoid bending or twisting a victim with a possible head,neck or back injury</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Use the log-roll technique when placing a blanket or a spine board under the patient in preparation for a carry.</Text>
                            
                          
                            
                        </View>
        </View>
                   



                   <View style={{gap:8,marginTop:20}}>

                        <Text style={{fontSize:22,fontWeight:"bold"}}>Lifting and Moving Techniques</Text>

                        <View style={{gap:8}}>

                        <View style={{gap:8}}>
                           
                            <Image style={{width:"100%",height:180}} source={require(`../assets/images/ankle drag.jpg`)}/>

                            <Text style={{fontSize:18,textAlign:"center"}}>Ankle Drag</Text>
                        </View>

                        <View style={{gap:8}}>
                            
                            <Image style={{width:"100%",height:180}} source={require(`../assets/images/armpit clothe drag.jpg`)}/>
                            <Text style={{fontSize:18,textAlign:"center"}}>Armpit Clothe Drag</Text>
                        </View>

                        <View style={{gap:8}}>
                           
                            <Image style={{width:"100%",height:180}} source={require(`../assets/images/assist to walk.jpg`)}/>
                            <Text style={{fontSize:18,textAlign:"center"}}>Assist to walk</Text>
                        </View>



                           
                            
                        </View>

                   </View>



            {/* insert table here */}




            <View style={{gap:15}}>


                <View style={{gap:8}}>
                  
                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/assiting a victim lying supine .jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Assisting a victim lying supine</Text>
                </View>


                <View style={{gap:8}}>
           
                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/bearer's along side.jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Bearer along side</Text>
                </View>
                

                <View style={{gap:8}}>
                    
                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/blacket carry.jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Blanket Carry</Text>
                </View>

                <View style={{gap:8}}>
                
                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/chair carry.jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Chair Carry</Text>
                </View>

                <View style={{gap:8}}>
                    
                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/extremitily carry.jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Extremitily Carry</Text>
                </View>



                <View style={{gap:8}}>
     
                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/extremity carry(hand as alitter).jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Extremitily Carry (hand as alitter)</Text>
                </View>



                
                <View style={{gap:8}}>
            
                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/firefighter carry.jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Firefigther Carry</Text>
                </View>

                 
                <View style={{gap:8}}>
                   
                      <Image style={{width:"100%",height:180}} source={require(`../assets/images/hammock carry.jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Hammock Carry</Text>
                </View>



                <View style={{gap:8}}>

                    <Image style={{width:"100%",height:180}} source={require(`../assets/images/pack strap carry.jpg`)}/>
                    <Text style={{fontSize:18,textAlign:"center"}}>Pack Strap Carry</Text>
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

export default Module13