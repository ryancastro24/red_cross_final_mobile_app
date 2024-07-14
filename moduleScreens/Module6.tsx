import React from 'react'
import { View,ScrollView,Text,Image } from 'react-native';

const Module6 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:8}}>

        <View style={{width:"100%",backgroundColor:"#7E0303", padding:10,marginTop:15}}>
                    <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>
                        A wound is any physical injury involving a break in the layers of the skin. Wounds are generally classified as either closed or open.
                    </Text>
        </View>


           
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Complications</Text>
                        </View>
                        
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Bleeding</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Infection</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Tetanus</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Rabies</Text>
                       
                    </View>
        </View >





            <View style={{marginTop:20,gap:8}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Closed Wound</Text>

                <Text style={{fontSize:18,textAlign:"justify"}}>A closed wound is a wound where the outer layer of the skin is intact and the damage lies below the surface </Text>
                <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/1closed-wounds.jpg`)} />
            </View>


            <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Apply the ice pack</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Elevate the injured part</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Dont assume that all closed wounds are minor injuries</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Help the person to rest</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Do not give the person anything to eat or drunk</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Provide comfort and reassure the person</Text>
                       
                    </View>
        </View>






        
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Tender, swollen, bruised or hard areas of the body</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Rapid,weak pulse</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Skin that feels cool or moist or looks pale or bluish</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Vomiting of blood or coughing up blood</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Excessive thirst</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- An injured extremely that is blue or extremely pale</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Altered mental state</Text>
                       
                    </View>
        </View >






        
        <View style={{marginTop:20,gap:8}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Open wound</Text>
                <Text style={{fontSize:18,textAlign:"justify"}}>In an open wound , the outer layer of skin is broken. The break in the skin can be as minor as a scrape of the surface layer or as severe as a deep penetration</Text>

                <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/open wound2.jpg`)} />
            </View>




        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>General care for open wound includes controlling bleeding, preventing infection and using dressings and bandages correctly</Text>
                    </View>
        </View>
        


        

        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:20,fontWeight:"bold",}}>Minor Open Wounds</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18,}}>- Use a barrier between your hand and the wound</Text>
                        <Text style={{fontSize:18,}}>- Apply direct pressure</Text>
                        <Text style={{fontSize:18,}}>- Wash abrasions  and other superficial wounds</Text>
                        <Text style={{fontSize:18,}}>- Apply a Providone-iodine (PVP-1) antiseptic or if available, a triple antibiotic ointment or cream</Text>
                        <Text style={{fontSize:18,}}>- Cover the wound with a sterile dressing</Text>
                        <Text style={{fontSize:18,}}>- Wash your hands immediately afer giving care</Text>
                        
                    </View>
        </View>
        

        <View style={{marginTop:25,gap:8}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>Major Open Wounds</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18,}}>- Call the emergency number</Text>
                        <Text style={{fontSize:18,}}>- Put on PPE(Personal Protective Equipment)</Text>
                        <Text style={{fontSize:18,}}>- Control bleeding by applying direct pressure or employing a pressure bandage</Text>
                        <Text style={{fontSize:18,}}>- Monitor airway and breathing</Text>
                        <Text style={{fontSize:18,}}>- Cover the wound with a sterile dressing</Text>
                        <Text style={{fontSize:18,}}>- In cases where the injured party is in shock, keep him or her from experiencing chills or feeling overheated</Text>
                        <Text style={{fontSize:18,}}>- Have the person rest comfortably and provide reassurance</Text>
                        <Text style={{fontSize:18,}}>- Wash your hands immediately afer giving care</Text>
                    </View>
        </View>
        




          
        <View style={{marginTop:30,gap:8}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Burns</Text>
                <Text style={{fontSize:18,textAlign:"justify"}}>Burns are injuries in the skin and to other body tissues that is  caused  by heat, chemicals ,electricity , or radiation</Text>

                <Image style={{width:"100%",height:180,marginTop:20}}  source={require(`../assets/images/burns.jpg`)} />
            </View>





            <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Classification</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Superficial (first-degree) burns </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Partial-thickness (second-degree) burns</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Full-thickness (third-degree) burns</Text>
                       
                       
                    </View>
        </View >




    
        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management</Text>
          
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:20,fontWeight:"bold",}}>Thermal Burns</Text>
                        <Text style={{fontSize:18,}}>- Check the scene for safety</Text>
                        <Text style={{fontSize:18,}}>- Stop the burning by removing the victim from source of the burns</Text>
                        <Text style={{fontSize:18,}}>- Check for life-threatening conditions</Text>
                        <Text style={{fontSize:18,}}>- Call the burns with large amounts of cold running water</Text>
                        <Text style={{fontSize:18,}}>- Cover the burn loosely with a sterile dressing</Text>
                        <Text style={{fontSize:18,}}>- Prevent infection, Do not break blisters</Text>
                        <Text style={{fontSize:18,}}>- Apply a triple antibiotic ointment  if the person has no known allergies or sensitivities to the medication</Text>
                        <Text style={{fontSize:18,}}>- Take steps to minimize shock</Text>
                        <Text style={{fontSize:18,}}>- Comfort and reassure the victim</Text>
                        
                </View>


                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:20,fontWeight:"bold",}}>Chemical Burns</Text>
                        <Text style={{fontSize:18,}}>- Remove the chemical from the skin as quickly possible</Text>
                        <Text style={{fontSize:18,}}>- Flush the burn with large amounts of cool running water</Text>
                        <Text style={{fontSize:18,}}>- If an eye is burned by a chemical, flush the affected eye with water until advanced medical personnel take over</Text>
                        <Text style={{fontSize:18,}}>- If possible, have the person remove contaminated clothes to prevent the spread  of infection while you continue to flush area.</Text>
                        
                        
                </View>
        </View>
        


        <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>
                Critical Burns
            </Text>

            <Text style={{fontSize:18,color:"white"}}>
                    Critical burns are those burns that require immediate medical care. These are based on factors such as depth,are and location. The following are considered critical burns:
            </Text>


            <View style={{paddingLeft:8}}>

                    <Text style={{fontSize:18,color:"white"}}>
                        - Full thickness burns that cover more than five percent of the body's surface area
                    </Text>

                    <Text style={{fontSize:18,color:"white"}}>
                        - Partial thickness burns that cover more than 10 percent of the body's surface area or those that can be found in multiple locations.
                    </Text>

                    <Text style={{fontSize:18,color:"white"}}>
                        - Burns to the face, genitals and injuries that completely encircle the hands or feet which may cause possible constriction and prevent circulation.
                    </Text>

                    <Text style={{fontSize:18,color:"white"}}>
                        - Burns cause by chemicals, electricity and explosives.
                    </Text>


                    <Text style={{fontSize:18,color:"white"}}>
                        - Burns involving someone under five years old or older than five who have thinner skin and often burn severely.
                    </Text>

                    <Text style={{fontSize:18,color:"white"}}>
                        - Burns involving people with chronic medical problems such as heart or kidney ailments. People who may be undernourished. People whore are exposed to burn sources who may not be able to leave  the area.
                    </Text>



            </View>


        </View>







        <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:20,fontWeight:"bold",}}>Electric Burns</Text>
                        <Text style={{fontSize:18,}}>- Never go near the person until you are sure that he or she is no longer in contact with the power source</Text>
                        <Text style={{fontSize:18,}}>- Turn off the power at its source and be aware of life threathening conditions</Text>
                        <Text style={{fontSize:18,}}>- Call the local emergency number</Text>
                        <Text style={{fontSize:18,}}>- Be aware that electrocution can cause cardiac and respiratory emergencies</Text>
                        <Text style={{fontSize:18,}}>- Care for shock and thermal burns</Text>
                        <Text style={{fontSize:18,}}>- Look for entry and exist wounds and give appropriate care</Text>
                        <Text style={{fontSize:18,}}>- Remember that anyone suffering from electric shock requires advanced medical attention </Text>
                        
                </View>


                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:20,fontWeight:"bold",}}>Radiation Burns</Text>
                        <Text style={{fontSize:18,}}>- Care for a radiation burn, i.e sunburn, as you would for an thermal burn.</Text>
                        <Text style={{fontSize:18,}}>- Always cool the burn and protect the area from further damage by keeping  the person away from the burn source</Text>
                        
                </View>






            

            <View style={{marginTop:20,gap:8}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Bandaging</Text>

                <Text style={{fontSize:22,fontWeight:'bold',}}>General Bandagin Guidelines</Text>

                

                
        <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,}}>- Use a dressing that is large enough to extend at least one inch beyond the edge of the wound</Text>
                        <Text style={{fontSize:18,}}>- If body tissue or organs exposed, cover the wound with a dressing that will not stick, such as plastic wrap or moistered gauze.Then Secure the dressing with a bandage or adhesive tapes.</Text>
                        <Text style={{fontSize:18,}}>- If the bandage is over the joint, splint and makes a bully dressing so the joint remains immobilized. If there is no movement  of a wound over the joint, there should be improved healing and reduced scarring</Text>
                        <Text style={{fontSize:18,}}>- Check for feeling, wrath and color in the area below the injury site. Observe fingers and toes before and after applying the bandage</Text>
                        <Text style={{fontSize:18,}}>- A bandage should be snug, but not so tight as to interfere with circulation, either at the time of application of later if swelling occurs</Text>
                        <Text style={{fontSize:18,}}>- Do not cover fingers or toes. By keeping these parts uncovered, you will be able to see if the bandage is too light. If fingers or toes feel cool to the touch or seem to look pale or blue, the bandage may be too tight and should be loosened slightly.  </Text>
                        <Text style={{fontSize:18,}}>- Apply additional dressings and a supplementary bandage if blood soaks through  the first covering. Do not remove the blood-soaked bandages and dressings. Disturbing them may disrupt the information of a clot and restart the bleeding</Text>
                        <Text style={{fontSize:18,}}>- Bandaging techniques depends upon: </Text>

                                <View style={{paddingLeft:10}}>
                                    <Text style={{fontSize:18,}}>- Size and Location of the wound</Text>
                                    <Text style={{fontSize:18,}}>- Your first aid skills</Text>
                                    <Text style={{fontSize:18,}}>- Materials at hand</Text>
                                    
                                </View>
                        
                        
                </View>

            </View>


            <View style={{marginTop:20,gap:8}}>
                    <Text style={{fontSize:20,fontWeight:"bold",}}>Square Knot</Text>


                    <Text style={{fontSize:18,textAlign:"justify"}}>A Square Knot (or reef knot) is used to tie the ends of a triangular bandage. It is easy and quick to tie and untie. It is formed by tying a left-handed overhand knot and then a right-handed overhand knot, or vice versa. A common mnemonic for this procedure is 
                        <Text style={{fontWeight:"bold",fontSize:18,fontStyle:"italic",}}>"right over left, left over right, makes a knot both tidy and tight".</Text> 
                    
                    </Text>


                    <Image style={{width:"100%",height:180,marginTop:20}} source={require(`../assets/images/square knot.jpg`)} />
        
            </View>

            

            


        





        </View>

    </ScrollView>
  )
}

export default Module6