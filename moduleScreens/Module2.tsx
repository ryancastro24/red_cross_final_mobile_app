import React from 'react'
import { View,Text,ScrollView,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { router } from 'expo-router';
const Module2 = ({moduleId}:{moduleId:number}) => {
  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:7}}>

            <Text style={{fontSize:18}}>
            An emergency scene can be overwhelming. In order for the first aider to help effectively, it is important that actions have to be prioritized and planned well
            </Text>


            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:18}}>
                    Scene Size-up
                </Text>

                <Image style={{width:"100%",height:180}}  source={require(`../assets/images/11.scene size up (injured ).jpg`)}/>
            </View>


            <View style={{gap:8,paddingLeft:10,marginTop:15}}>
                <Text style={{fontSize:18}}>I. Scene Safety</Text>
                <Text style={{fontSize:18}}>II. Knowing What Happened</Text>
                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:18}}>- Cause of Injury</Text>
                    <Text style={{fontSize:18}}>- Nature of Illness</Text>
                </View>
                <Text style={{fontSize:18}}>III. Role of bystanders</Text>
                <Text style={{fontSize:18}}>IV. Number of casualties</Text>
                <Text style={{fontSize:18}}>V. Asking permission or consent</Text>
            </View>




            
            <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>To obtain consent, do the following:</Text>
                    </View>
                    <View style={{padding:10}}>
                            <View style={{gap:7}}>
                                <Text style={{fontSize:18}}>- Identify yourself to the victim.</Text>
                                <Text style={{fontSize:18}}>- State your level of training.</Text>
                                <Text style={{fontSize:18}}>- Ask the victim whether you may help.</Text>
                                <Text style={{fontSize:18}}>- Explain what you observe.</Text>
                                <Text style={{fontSize:18}}>- Explain what you plan to do.</Text>
                        </View>

                    </View>
            
                </View >




                <View style={{marginTop:15,gap:8}}>
                        <Text style={{fontSize:18}}>
                            Primary Assessment
                        </Text>

                        <Image style={{width:"100%",height:180}} source={require(`../assets/images/12.Pulse rate.jpg`)} />
                 </View>

                 <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>1.Assessing Responsiveness: </Text>
                    <Text style={{fontSize:16,fontStyle:"italic"}}>A patient's response level can be summarized in the AVPU mnemonic as follows:</Text>
                    
                    <View style={{gap:7}}>
                                <Text style={{fontSize:18}}>- <Text style={{fontWeight:"bold"}}>A</Text>- Alert</Text>
                                <Text style={{fontSize:18}}>- <Text style={{fontWeight:"bold"}}>V</Text>- Responsive to Voice</Text>
                                <Text style={{fontSize:18}}>- <Text style={{fontWeight:"bold"}}>P</Text>- Responsive to Pain</Text>
                                <Text style={{fontSize:18}}>- <Text style={{fontWeight:"bold"}}>U</Text>- Unresponsive/Unconscious</Text>
                             
                        </View>
                        
                 </View>




                    
                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
                    <Text style={{fontSize:23,fontWeight:"bold",color:"white"}}>Primary assessment</Text>
                    <Text style={{fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify",color:"white"}}>can be done with the patient in the position in which you find him or her,  and begins with checking the patient's responsiveness.</Text>
                    
                </View >



                
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>2.Activate Medical Help </Text>
                    <Text style={{fontSize:16,fontStyle:"italic"}}>Ask someone to call for local emergency number and get an Automated External Defibrillator (AED).</Text>
    
                 </View>



                      
                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
                    <Text style={{fontSize:23,fontWeight:"bold",color:"white"}}>Call First or Care First </Text>
                    <Text style={{fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify",color:"white"}}>If you are ALONE, it is important to know when to call during emergencies. Call First situations are likely to be cardiac emergencies, where time is a critical factor. In Care First situations, the conditions are often are related to breathing emergencies.</Text>
                    
                </View >




            

                <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Information to be remembered in activating medical help:</Text>
                    </View>
                    <View style={{padding:10}}>
                            <View style={{gap:7}}>
                                <Text style={{fontSize:18}}>- What happened?</Text>
                                <Text style={{fontSize:18}}>- Location of emergency?</Text>
                                <Text style={{fontSize:18}}>- Number of persons injured or ill?</Text>
                                <Text style={{fontSize:18}}>- Cause and extent of injury and nature of illness and first aid given?</Text>
                                <Text style={{fontSize:18}}>- Telephone number from where call is made?</Text>
                                <Text style={{fontSize:18}}>- Name of person who called medical help (person must identify him/herself and hang up the phone last)</Text>
                        </View>

                    </View>
            
                </View >



                 
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold" }}>3. Airway </Text>
                    <Text style={{fontSize:16,fontStyle:"italic" }}>An open airway allows air to enter the lungs for the person to breathe. If the airway is blocked, the person cannot breathe.</Text>
                    <Image style={{width:"100%",height:180}}  source={require(`../assets/images/13.calling nimber.jpg`)}/>
                    <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/14.airway.png`)}/>
                 </View>


                    
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>4. Breathing </Text>
                    <Text style={{fontSize:16,fontStyle:"italic"}}>While maintaining an open airway, quickly check an unconscious person for breathing by doing the Look, Listen and Feel (LLF) technique for no more than 10 seconds.</Text>
                    <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/15.breathing.jpg`)}/>
                 </View>



                 <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>5. Circulation </Text>
                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Pulse</Text>
                        <Text style={{fontSize:16}}>Check for definitive pulse at carotid area for adult or child, while brachial for infant (Applicable for Professional Rescuers and Healthcare Providers).</Text>
                    </View>
                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Bleeding</Text>
                        <Text style={{fontSize:16}}>Quickly look for severe bleeding by looking over the person's body from head to toe for signals such as blood-soaked clothing or blood spurting out of a wound.</Text>
                    </View>
                    <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/16 pulse.jpg`)}/>

                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Shock</Text>
                        <Text style={{fontSize:16}}>If left untreated, shock can lead to death. Always look for the signals of shock whenever you are giving care.</Text>
                    </View>
                    
                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Skin color, temperature and moisture</Text>
                        <Text style={{fontSize:16}}>Assessment of skin temperature, color, and condition can tell you more about the patient's circulatory system.</Text>
                    </View>


                    <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/17.bleeding.jpg`)}/>
                 </View>


                
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:18}}>
                    Secondary Assessment
                </Text>

                <Text style={{fontSize:18}}>If you determine that an injured or ill person is not in an immediately life-threatening condition, you can begin to check for other conditions that may need care.</Text>
            </View>

            
            <View style={{gap:6,marginTop:15}}>
                <Text style={{fontSize:18}}><Text style={{fontWeight:"bold"}}>Interviewing</Text> the person and bystanders</Text>
                <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/18 .intervingjpg.jpg`)} />
            </View>


            <View style={{gap:6,marginTop:15}}>
                <Text style={{fontSize:18}}>Checking the person from <Text style={{fontWeight:"bold"}}>Head to Toe</Text></Text>
                <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/19.checking head to toe.jpg`)} />
            </View>

            <View style={{gap:6,marginTop:15}}>
                <Text style={{fontSize:18}}>Checking for <Text style={{fontWeight:"bold"}}>Vital Signs</Text></Text>
                <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/20.checking head to toe.jpg`)} />
            </View>
            


               
            <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>To gain essential information about the patient's medical history, ask the patient questions based on the SAMPLE approach:</Text>
                    </View>
                    <View style={{padding:10}}>
                            <View style={{gap:7}}>
                                <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>S</Text> - Signs of symptoms</Text>
                                <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>A</Text> - Allergies</Text>
                                <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>M</Text> - Medications</Text>
                                <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>P</Text> - Pertinent past medical history</Text>
                                <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>L</Text> - Last intake and output</Text>
                                <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>E</Text> - Events leading up to the injury or illness</Text>
                                
                        </View>

                    </View>
            
                </View >

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

export default Module2