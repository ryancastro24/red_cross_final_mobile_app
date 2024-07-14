import React from 'react'
import { View,ScrollView,Text, Image} from 'react-native'

const Module7 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{gap:10}}>

            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:5}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"justify",color:"white"}}>Poison is any substance that can cause injury , illness or death when introduced into the body. Poisonous include solids, liquids and vapours . A poison can enter the body through four ways, ingestion, inhalation,injection and absortion.</Text>
            </View>


          <View style={{gap:8,marginTop:15}}>
            <Text style={{fontSize:18,textAlign:"justify"}}>Ingested Poison</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>Poisoning by ingestion is considered any substance that's harmful to the  body when ingested, whether intentionally  or unintentionally</Text>
          </View>
          

            <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white "}}>Poisoning by Ingestion</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>1.Food Poisoning </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>2.Caustics</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>3.Hydrocarbons</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>4.Drug Overdose</Text>
                       
                       
                    </View>
            </View >




            



    
        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management</Text>
          
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- If the person is in a toxic area, remove the person from the scene</Text>
                        <Text style={{fontSize:18}}>- Check the person's level of consciousness and breathing</Text>
                        <Text style={{fontSize:18}}>- Check for any life-threatening conditions.</Text>
                        <Text style={{fontSize:18}}>- Ask questions to get more information if the person is conscious</Text>
                        <Text style={{fontSize:18}}>- Look for any containers and take them with you to the telephone area</Text>
                        <Text style={{fontSize:18}}>- Call the National Poison Management and Control Center (NPMCC) or the local/regional 
                                                       poison control center and follow the directions of the NPMCC or local/regional poison control center</Text>
                        <Text style={{fontSize:18}}>- If unable to contact the NPMCC or local/regional poison center, bring the patient immediately to the hospital</Text>
                        <Text style={{fontSize:18}}>- DO NOT give  the person anything to eat or drink.Do not induce vomitting unless instructed by medical professional</Text>
                        <Text style={{fontSize:18}}>- Save more samples of the person's vomit if you do not know how to classify the poison</Text>
                        <Text style={{fontSize:18}}>- A person who has swallowed a caustic substance should not be made to vomit</Text>
                        <Text style={{fontSize:18}}>- DO NOT dilute acids with water, especially sulfric acid.</Text>
                        <Text style={{fontSize:18}}>- The Department of Health recommends giving six to eight egg whites to child and eight to twelve egg whites to an adult who has ingested watusi.</Text>
                        
                </View>


             </View>


            
          <View style={{gap:8,marginTop:15}}>
            <Text style={{fontSize:18,textAlign:"justify"}}>Inhaled Poison</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>Poisoning by inhalation occurs when a person breathes in toxic fumes</Text>

              <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/1. Poisoning.jpg`)}  />
          </View>




            
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Poisoning by Inhalation</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>1.Carbon Monoxide- gasoline fumes</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>2.Cyanide- metal cleaners</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>3.Chlorine-multi-purpose</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>4.Tear Gas</Text>
                       
                       
                    </View>
            </View >






          
        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management</Text>
          
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Remove the victims from the toxic environment </Text>
                        <Text style={{fontSize:18}}>- Open all doors and windows</Text>
                        <Text style={{fontSize:18}}>- Maintain a patient's airway if the victim in unconscious</Text>
                        <Text style={{fontSize:18}}>- Seek Medical attention</Text>
                       
                        
                </View>


             </View>






             
          <View style={{gap:8,marginTop:25}}>
            <Text style={{fontSize:18,textAlign:"justify"}}>Injected Poison</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>Injected Poisons enter the body through the bites or stings of insects, spiders, ticks, snakes and some marine life.
              It could also enter the body through the insertion of a hypodermic needle.
            </Text>

             
          </View>






                
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Poisoning by Injection</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>1.Snakebites</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>2.Bee Stings</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>3.Marine life with Poisonous spines</Text>
                       
                    </View>
            </View >





          
                
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management For Snakenbites</Text>
                
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Reassure the patient who may be very anxious</Text>
                        <Text style={{fontSize:18}}>- Avoid any interference with the bite wound such as incising, rubbing,vigirous cleaning, massaging, or applying herbs or chemicals to it.</Text>
                        <Text style={{fontSize:18}}>- Immobilize the patient's body by laying him/her down in a comfortable and safe position</Text>
                        <Text style={{fontSize:18}}>- A broad elastic roller bandage should be used  to cover the bitten limb</Text>
                        <Text style={{fontSize:18}}>- Do not remove the trousers as the movement of doing so will only assist the venom into entering the blood stream</Text>
                        <Text style={{fontSize:18}}>- Do not attempt to kill the snake as this may be dangerous.</Text>

                        
                        <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/1.Snakebites.jpg`)}  />
                        
                </View>


             </View>



                  
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management For Bee Stings</Text>
                
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Remove anyh visible stinger</Text>
                        <Text style={{fontSize:18}}>- Wash the site with soap and water.</Text>
                        <Text style={{fontSize:18}}>- Cover the site with a dressing </Text>
                        <Text style={{fontSize:18}}>- Apply a cold pack to the area to reduce pain and swelling.</Text>
                        <Text style={{fontSize:18}}>- Call the local emergency number if the person has any trouble breathing or shows any other signals of anaphylaxis</Text>
                        

                        <Image style={{width:"100%",height:180,marginTop:20}}   source={require(`../assets/images/2.Bee Strings.jpg`)} />
                       
                        
                </View>


             </View>






             <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management For Marine Life with poisonous spines</Text>
                
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Immerse the wound in  45°C water, or as can be tolerated, for 30 to 90 minutes</Text>
                        <Text style={{fontSize:18}}>- Soak the affected area in vinegar</Text>
                        <Text style={{fontSize:18}}>- Leave an inaccessible spine alone and only if it hasn't  penetrated a joint, nerve or blood vessel.</Text>
                        <Text style={{fontSize:18}}>- Clean the wound with an antiseptic solution</Text>
                        <Text style={{fontSize:18}}>- Washing out remaining venom and pieces  of spine will help minimize damage,speed healing, and prevent infection.</Text>
                        

                        <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/3. Marine Life with poisonous spines.jpg`)}  />
                       
                        
                </View>


             </View>





                
          <View style={{gap:8,marginTop:25}}>
            <Text style={{fontSize:18,textAlign:"justify"}}>Absorbed Poison</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>
              An Absorbed Poison enters the body after it comes in contact with the skin
            </Text>

             
          </View>







                    
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Poisoning by Absorption</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>1.Jellyfish Stings</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>2.Stinging Nettles or Nettle Trees</Text>
                       
                    </View>
            </View >





            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management For Jellyfish Stings</Text>
                
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Limit Further discharge by minimizing patient movement</Text>
                        <Text style={{fontSize:18}}>- Wash out wounds or injury with vinegar </Text>
                        <Text style={{fontSize:18}}>- Remove any remnant of allergen such as jellyfish tentacles and other foreign materials by scraping them off</Text>
                        <Text style={{fontSize:18}}>- Keep the patient warm</Text>
                                               
                </View>

          
             </View>

             

             <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>To care for victim who has come into contact with a poisonous plant</Text>
                
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Remove contaminated clothing and jewelry which may constrict circulation when swelling occurs</Text>
                        <Text style={{fontSize:18}}>- Rinse the affected area immediately</Text>
                        <Text style={{fontSize:18}}>- Seek medical advice if a rash or weeping lesion(oozing sore) develops.</Text>
                        <Text style={{fontSize:18}}>- Soothe the area with medicated lotions</Text>   
                        <Text style={{fontSize:18}}>- Stop or reduce itching with antihistamine that will dry up the lesions.</Text>   
                        <Text style={{fontSize:18}}>- Advice the victim to see a physician if the condition worsens and large areas of the body or the face are affected</Text>   
                        <Text style={{fontSize:18}}>- Give care for severe allergic reactions if it does develop.</Text>   
                </View>

             

 
             </View>



























            </View>


    </ScrollView>
  )
}

export default Module7