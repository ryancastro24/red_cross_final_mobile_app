import React from 'react'
import { View,ScrollView,Text } from 'react-native'

const Module13 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:10}}>

            <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>Lifting and Carrying are dynamic processes. A patient can be moved to safety in many different ways, but no one way is best for every situation.
                The objective is to move a patient to safety without causing injury to either the patient or the first aider.
            </Text>

            
            <View style={{gap:10,marginTop:15}}>
                <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>Emergency Move</Text>
                <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>Is the movement of a patient to a safe place before initial assesment and care is provided typically because there is some potential danger</Text>
            </View>

            <View style={{gap:10,marginTop:15}}>
                <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>Non-Emergency Move</Text>
                <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>Is the movement of a patient when both the scene and the patient are stable.</Text>
            </View>



            <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>Generally: DO NOT move an injured or ill person while giving care except in the following situations:</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>- When faced with immediate danger such as fire, lack of oxygen, risk of explosion or a collapsing structure. Give care only when it can be done safely.</Text>
                        <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>- When there is a need to get to another person who may be a more serious problem. In this case, a person with minor injuries may be moved to reach someone needing immediate care.</Text>
                        <Text style={{color:"white",fontSize:18,textAlign:"justify"}}>- When it is necessary to give proper care. For example , if someone needs CPR, he or she might have to be moved from a bed because CPR needs to be performed on a firm, falt surface. If the surface or space is not adequate for giving the necessary care, the person should be moved.</Text>
                       
                    </View>
            </View >


        


        
            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Lifting and Moving Guidelines</Text>

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

                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Lifting and Moving Techniques</Text>

                        <View style={{gap:8}}>

                        <View style={{gap:8}}>
                            {/* <MyImage  imageSource={require(`../assets/ankle drag.jpg`)} /> */}
                            <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Ankle Drag</Text>
                        </View>

                        <View style={{gap:8}}>
                            {/* <MyImage  imageSource={require(`../assets/armpit clothe drag.jpg`)}/> */}
                            <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Armpit Clothe Drag</Text>
                        </View>

                        <View style={{gap:8}}>
                            {/* <MyImage  imageSource={require(`../assets/assist to walk.jpg`)}/> */}
                            <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Assist to walk</Text>
                        </View>



                           
                            
                        </View>

                   </View>



            {/* insert table here */}




            <View style={{gap:15}}>


                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/assiting a victim lying supine .jpg`)} /> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Assisting a victim lying supine</Text>
                </View>


                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/bearer's along side.jpg`)} /> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Bearer along side</Text>
                </View>
                

                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/blacket carry.jpg`)}/> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Blanket Carry</Text>
                </View>

                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/chair carry.jpg`)}/> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Chair Carry</Text>
                </View>

                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/extremitily carry.jpg`)}/> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Extremitily Carry</Text>
                </View>

                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/extremitily carry.jpg`)}/> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Extremitily Carry</Text>
                </View>


                <View style={{gap:8}}>
                    {/* <MyImage  imageSource={require(`../assets/extremity carry(hand as alitter).jpg`)}/> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Extremitily Carry (hand as alitter)</Text>
                </View>



                
                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/firefighter carry.jpg`)} /> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Firefigther Carry</Text>
                </View>

                 
                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/hammock carry.jpg`)} /> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Hammock Carry</Text>
                </View>



                <View style={{gap:8}}>
                    {/* <MyImage imageSource={require(`../assets/pack strap carry.jpg`)} /> */}
                    <Text style={{fontSize:18,textAlign:"center",color:"white"}}>Pack Strap Carry</Text>
                </View>






                

            
                
             
               
            

            </View>






        </View>
    </ScrollView>
  )
}

export default Module13