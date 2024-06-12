import React from 'react'
import { View,Text,StyleSheet,ScrollView,Image } from 'react-native'
const Module3 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:8}}>

            <Text style={{color:"white",fontSize:18}}>Chain of Survival</Text>
            <Text style={{fontWeight:"bold",fontSize:16,color:"white"}}>In Hospital Chain of Survival</Text>

            <View style={{gap:7,marginTop:15}}>
                 <Text style={{color:"white",fontSize:18}}>1.Surveillance and prevention</Text>
                 <Text style={{color:"white",fontSize:18}}>2.Recognition and activation of the emergency response system</Text>
                 <Text style={{color:"white",fontSize:18}}>3.Immediate high-quality CPR</Text>
                 <Text style={{color:"white",fontSize:18}}>4.Rapid Defibrillation</Text>
                 <Text style={{color:"white",fontSize:18}}>5.Advance life support and post arrest care</Text>
                            
            </View>


            <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/23.Cardiac arrest chain survival.jpg`)} />




            <View style={{gap:7,marginTop:15}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Out of Hospital Chain of Survival</Text>
                 <Text style={{color:"white",fontSize:18}}>1.Recognition and activation of emergency response</Text>
                 <Text style={{color:"white",fontSize:18}}>2.Immediate high quality CPR</Text>
                 <Text style={{color:"white",fontSize:18}}>3.Rapid Defibrillation</Text>
                 <Text style={{color:"white",fontSize:18}}>4.Basic and advanced emergency medical services</Text>
                 <Text style={{color:"white",fontSize:18}}>5.Advance Life Support and post arrest care</Text>
                            
            </View>



            <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/24.Heart Attack.jpg`)} />

            

            <View style={{marginTop:15,gap:8}}>
                <Text >Heart Attack</Text>
                <Text style={{color:"white",fontSize:18}}>Also called myocardial infarction, occurs when the blood and oxygen supply to the heart is reduced causing damage to the heart muscle and preventing blood from circulating effectively. It is usually caused by coronary heart disease.</Text>
            </View>


            <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/25.heart-attack-symptoms-in-men-and-women.jpg`)} />

            

              
        <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
           
            <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>The term "angina pectoris means literally "a constriction of the chest". Angina occurs when coronary arteries, which supply the heart muscle with blood, become narrowed and cannot carry sufficient blood to meet increased demands during exertion or excitement.</Text>
            
        </View >



            
        <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                    </View>
                    
                <View style={{paddingHorizontal:10}}>
                     <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/26.CPR.jpg`)}/>
                </View>
                <View style={{gap:7,marginTop:15,padding:10}}>
                    <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>What to look for:</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Chest pain, discomfort, or pressure.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Pain or discomfort becomes constant.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Some individuals may show no signs</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Discomfort in other areas of the upper body.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Pale or ashen (gray), skin especially around the face.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Damp sweat or may sweat heavily.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Feeling dizzy, nauseated or vomiting.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Fatigued, lightheaded or lose consciousness</Text>
                  
                                
                </View>
            
                </View >



                <Text style={{fontSize:20,fontWeight:"bold",marginTop:20,color:"white"}}>First Aid Management</Text>

                <View style={{gap:7}}>
                    <Text style={{fontSize:16,color:"white"}}>- Call the local emergency number immediately.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Have the person stop what he or she is doing and rest comfortably.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Loosen any tight or uncomfortable clothing.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Person who is experiencing chest pain may take prescribe aspirin.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Closely watch the person until advanced medical personnel take over.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Be prepared to perform CPR and use an AED, if available, once the person.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- loses consciousness and stops breathing.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- You can help by assisting patient with taking the prescribed medication.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Be calm and reassuring.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Talk to bystanders and if possible, to the person to get more information.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- Do not try to drive the person to the hospital. Patient could quickly get worse on the way.</Text>
                  
                                
                </View>



                <View style={{marginTop:20}}>
                    <Text style={{color:"white",fontSize:18}}>
                        Cardiac Arrest
                    </Text>
                </View>


                <Text style={{color:"white",fontSize:18}}>Occurs when the heart stops contracting and no blood circulates through the blood vessels and vital organs are deprived of oxygen.</Text>

                <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/27.Cardiac pulmonary resuscitation.jpg`)} />


                      
        <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
           
           <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>It is important to know that there are various types of cardiac arrest. In an emergency, however, it is not necessary to determine which type of cardiac arrest is present. Begin CPR immediately when you recognize cardiac arrest.</Text>
           
       </View >
                


        <Text style={{marginTop:15,fontSize:20,fontWeight:'bold',color:"white"}} >Cardio-Pulmonary Resuscitation</Text>
        <Text style={{color:"white",fontSize:18}}>a combination of chest compressions and rescue breaths. When the heart is not beating, chest compressions are needed to circulate blood containing oxygen.</Text>

        <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/28.Cardiac pulmonary resuscitation.jpg`)} />



        <Text style={{fontSize:20,fontWeight:"bold",marginTop:20,color:"white"}}>When to Start CPR</Text>


            <View style={{gap:7}}>
                    <Text style={{fontSize:16,color:"white"}}>- It is recommended that all patients in cardiac arrest receive resuscitation unless:</Text>
                    <Text style={{fontSize:16,color:"white"}}>- The patient has a valid "Do Not Attempt Resuscitation (DNAR) order.</Text>
                    <Text style={{fontSize:16,color:"white"}}>- The patient has signs of irreversible death: rigor mortis, decapitation, or dependent lividity,</Text>
                    <Text style={{fontSize:16,color:"white"}}>- No physiological benefit can be expected because the vital functions have deteriorated despite maximal therapy for such conditions as progressive septic or cardiogenic shock.</Text>
                    
            </View>



        

            
            <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>When to STOP Cardiopulmonary Resuscitation (CPR)</Text>
                    </View>
                    
              
                <View style={{gap:7,marginTop:15,padding:10}}>
                   
                    <Text style={{fontSize:16, color:"white"}}>- <Text style={{fontWeight:"bold"}}>Spontaneous</Text> signs of breathing and circulation are restored.</Text>
                    <Text style={{fontSize:16, color:"white"}}>- <Text style={{fontWeight:"bold"}}>Turned over</Text> to professional provider.</Text>
                    <Text style={{fontSize:16, color:"white"}}>- <Text style={{fontWeight:"bold"}}>Operator</Text> is exhausted and cannot continue CPR.</Text>
                    <Text style={{fontSize:16, color:"white"}}>- <Text style={{fontWeight:"bold"}}>Physician</Text> assumes responsibility.</Text>
                    <Text style={{fontSize:16, color:"white"}}>- <Text style={{fontWeight:"bold"}}>Scene</Text> becomes unsafe.</Text>
           
                  
                                
                </View>
            
                </View >



                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
           
                        <Text style={{color:"white",fontSize:20,lineHeight:20 ,marginTop:7 ,textAlign:"justify",fontWeight:"bold"}}>Chest compression only (Hands only) CPR</Text>
                        <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>is performed if a person is unwilling or unable to perform ventilation.</Text>
                
                
                        <Text style={{color:"white",fontSize:20,lineHeight:20 ,marginTop:15 ,textAlign:"justify",fontWeight:"bold"}}>Chest compression only (Hands only) CPR is recommended in the following circumstances:</Text>
                        <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>1. When a rescuer is unwilling or unable to perform mouth-to-mouth or rescue breathing.</Text>
                        <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>2. For use in dispatcher-assisted CPR instructions where the simplicity of this modified technique allow untrained bystanders to rapidly intervene.</Text>
               
                </View >



                <Text style={{color:"white",fontSize:18}}>Automated External Defibrillator (AED) AEDs are computerized devices that are attached to a pulseless victim with adhesive pads. They will recommend shock delivery only if the victim's heart rhythm is one that a shock can treat. AEDs give rescuers visual and voice prompts to guide rescuer actions.</Text>




                
                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
           
                        <Text style={{color:"white",fontSize:18, lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>In many cases however, CPR alone cannot correct the underlying heart problem: defibrillation delivered by an AED is needed, the electrical impulse allows the heart to develop spontaneous effective rhythm on its own.</Text>
                        
                </View >

                <View style={{gap:8,marginTop:15}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Integrating CPR and AED Use</Text>
                <Text style={{color:"white",fontSize:18}}>When arriving at the scene of a suspected cardiac arrest, rescuers must rapidly integrate CPR with use of the AED. Most of the time or two more rescuers are at the scene. In this case the rescuers can initiate these functions simultaneously:</Text>
                    
                    
                    <View style={{gap:7}}>
                            <Text style={{fontSize:16,color:"white"}}>- Activating the emergency response system and getting the AED</Text>
                            <Text style={{fontSize:16,color:"white"}}>- Performing CPR.</Text>
                            <Text style={{fontSize:16,color:"white"}}>- Operating the AED</Text>
                            <Text style={{fontSize:16,color:"white"}}>- 91Page</Text>
                            
                    </View>
                </View>




                      
                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Defibrillation</Text>
                        <Text style={{color:"white",fontSize:18, lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>Is the treatment of irregular, sporadic or absent heart rhythms by an electrical current to the heart.</Text>
                        
                        <View style={{gap:7,marginTop:15}}>
                                <Text style={{fontSize:16, color:"white"}}>- The most effective treatment for VF is electrical defibrillation.</Text>
                                <Text style={{fontSize:16, color:"white"}}>- The probability of successful defibrillation decreases quickly over time.</Text>
                                
                        </View>
                </View >


                
            
            <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Use AEDs immediately when victims have the following clinical findings:</Text>
                    </View>
                    
              
                <View style={{gap:7,padding:10}}>
                   
                    <Text style={{fontSize:16,color:"white"}}>- No Response</Text>
                    <Text style={{fontSize:16,color:"white"}}>- No Breathing</Text>
                    <Text style={{fontSize:16,color:"white"}}>- No Pulse</Text>
                    
                  
                                
                </View>
            
            </View >

                <View style={{marginTop:15,gap:15}}>
                         <Text style={{fontSize:20, fontWeight:"bold",color:"white"}}>Use of AED Pads</Text>
                         <View style={{gap:5}}>
                            <Text style={{fontSize:20, fontWeight:"bold",color:"white"}}>ADULT (Victims 9 Years of Age and Older)</Text>
                            <Text style={{color:"white",fontSize:18}}>- Use only adult pads (do NOT use child pads or a child key or switch for victims 8 years of age and older).</Text>
                         </View>

                         <View style={{gap:5}}>
                            <Text style={{fontSize:20, fontWeight:"bold",color:"white"}}>CHILD (Victims 1 to 8 Years of Age)</Text>
                           
                            <Text style={{color:"white",fontSize:18}}>- Use child pads if available. If you do not have child pads, you may use adult pads as long as the pads do not touch.</Text>
                            <Text style={{color:"white",fontSize:18}}>- If the AED has a key or switch that will deliver a child shock dose, turn the key or switch.</Text>
                            <Text style={{color:"white",fontSize:18}}>- For unwitnessed, out-of-hospital cardiac arrest in children, perform 5 cycles or 2 minutes of CPR before using and attaching the AED.</Text>
                            <Text style={{color:"white",fontSize:18}}>- For any in-hospital cardiac arrest or for any sudden collapse of a child out-of-hospital, use AED as soon as is available..</Text>
                         </View>


                         <View style={{gap:5}}>
                            <Text style={{fontSize:20, fontWeight:"bold"}}>Lone Rescuer with an AED</Text>
                            <Text style={{color:"white",fontSize:18}}>- The lone rescuer should quickly activate the emergency response system and get the AED</Text>
                            <Text style={{color:"white",fontSize:18}}>- The rescuer should then return to the victim and begin the steps of CPR.</Text>
                            <Text style={{color:"white",fontSize:18}}>- The AED should be used only if the victim does not respond, has no breathing, and has no pulse.</Text>
                        
                            <View style={{paddingLeft:15,marginTop:15}}>
                                <Text style={{fontSize:20,fontWeight:"bold"}}>There are 2 exceptions to this rule:</Text>
                                <Text style={{color:"white",fontSize:18}}>1.If the victim is an adult and a likely victim of asphyxial arrest, the rescuer should give 5 cycles of CPR before activating the emergency response system and getting AED. </Text>
                                <Text style={{color:"white",fontSize:18}}>2.If the victim is a child and the rescuer did not witness the arrest, the rescuer should give 5 cycles of CPR before activating the emergency response system and getting the AED. </Text>
                            </View>
                         </View>
                </View>

            
                <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Special situations when not to use AED</Text>
                    </View>
                    
              
                <View style={{gap:7,padding:10}}>
                   
                    <Text style={{fontSize:16,color:"white"}}>1.The victim is less than 1 year old.</Text>
                    <Text style={{fontSize:16,color:"white"}}>2.The victim has a bairy chest.</Text>
                    <Text style={{fontSize:16,color:"white"}}>3.The victim is immersed in water or water is covering the victim's chest.</Text>
                    <Text style={{fontSize:16,color:"white"}}>4.The victim has an implanted defibrillator or pacemaker.</Text>
                    <Text style={{fontSize:16,color:"white"}}>5.The victim has a transdermal patch or other on the surface of the skin where the AED electrode pads are placed.</Text>
                    
                  
                                
                </View>
            
                </View >



        
            
        </View>
    </ScrollView>
  )
}

export default Module3