
import { View,ScrollView,Text,TouchableOpacity} from 'react-native'
import { router } from 'expo-router';
const Module11 = ({moduleId}:{moduleId:number}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:10}}>



        <View style={{gap:8,marginTop:15}}>
            <Text style={{fontSize:18,textAlign:"justify"}}>Heart Related Emergencies</Text>
            <Text style={{fontSize:22,}}>Heat Cramps</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>Heat cramps are painful involuntary muscle cramps that can occur during and after exercise or work in hot environment</Text>
       
        </View>




          

        <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management </Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,}}>- Remove the patient from the hot environment.</Text>
                        <Text style={{fontSize:18,}}>- Encourage the patient to drink a beverage containing salt.</Text>
                        <Text style={{fontSize:18,}}>- If ORS packets are not available, make an oral rehydration solution</Text>
                        <Text style={{fontSize:18,}}>- Stretch the affected muscle and massage the area once the spasm has passed.</Text>
                        
                                               
                </View>

          
             </View>




        <View style={{gap:10}}>
             <Text style={{fontSize:22,}}>Heat Exhaustion</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>Heat Exhaustion is a milder form of a heat-related illness that can develop after exposure to high temperature. This may also be a result of inadequate fluid intake or the insufficient replacement of fluids</Text>
       
        </View>




        
                    
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Heavy Sweating</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Paleness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Muscle Cramps</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Tiredness and weakness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Dizziness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Headache</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Nusea or vomitting</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Fainting</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Cool,moist skin</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Fast, weak pulse rate</Text>
                       
                    </View>
            </View >




            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management </Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,}}>- Remove the patient from the hot environment. Fan the body, place ice bags, or spray water on the skin</Text>
                        <Text style={{fontSize:18,}}>- Start oral rehydration with a beverage containing saltm, or make them drink an Oral Rehydration Solution (ORS).</Text>
                        
                        
                                               
                </View>

          
             </View>




            
        <View style={{gap:10}}>
             <Text style={{fontSize:22,}}>Heat Stroke</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>Heat Stroke is a form of hyperthemia prolonged exposure to high temperatures can contribute to failure of the body's temperature control system.</Text>
       
        </View>



                   
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Strange behavior, headaches , dizziness, hallucinations, confusion, agitation, disorientation and coma</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- High body temperature</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Absence of sweating</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Red, hot, dry and flushed skin</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Rapid pulse and difficulty breathing</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Nusea or vomitting,fatigue and weakness</Text>
                        
                       
                    </View>
            </View >



            
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management </Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,}}>- Call or have someone call the local emergency number</Text>
                        <Text style={{fontSize:18,}}>- Move the person into a cool place, a shaded area, or an air-condition room</Text>
                        <Text style={{fontSize:18,}}>- Cool the patient immediately by immersing him/her in water</Text>
                        <Text style={{fontSize:18,}}>- If water immersion is not possible or is delayed , the following actions can be performed:
                            Douse the patient with copious amounts of cold water, spray the patient with water, fan the  patient, or cover the patient
                            with ice towels or surround the patient with ice bags.
                        </Text>
                        <Text style={{fontSize:18,}}>- Respond to any life-threatening conditions that may come about</Text>
                         
                </View>

          
             </View>




        <View style={{gap:8,marginTop:15}}>
            <Text style={{fontSize:18,textAlign:"justify"}}>Cold-Related Emergencies</Text>
            <Text style={{fontSize:22,}}>Hyporthermia</Text>
            <Text style={{fontSize:18,textAlign:"justify"}}>Hyporthermia is the general cooling of the entire body. In hyporthermia, body temperature drops below 35°C</Text>
       
        </View>

                  
            
                           
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Shivering (may be absent in later stages of hyporthermia)</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Numbness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Glassy stare or blank expression</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Apathy or decreasing level of consciousness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Weakness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- impaired judgement</Text>
                        
                    </View>
            </View >




            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management </Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,}}>- Gently move the person to warm place.</Text>
                        <Text style={{fontSize:18,}}>- Care for any life-threatening conditions.</Text>
                        <Text style={{fontSize:18,}}>- Call the local emergency number</Text>
                        <Text style={{fontSize:18,}}>- Remove any wet clothing and dry the person.</Text>
                        <Text style={{fontSize:18,}}>- Warm the person by wrapping him/her in blankets or by replacing the person's clothes with dry clothing (passive re-warming)</Text>
                        <Text style={{fontSize:18,}}>- If available, apply heat pads or other heat sources to the body</Text>
                        <Text style={{fontSize:18,}}>- Do not warm the person too quickly, such as by immersing him or her in warm water. Rapid warming may cause dangerous heart rhythms.</Text>
                        <Text style={{fontSize:18,}}>- If the person is alert, give warm liquids that do not contain alcohol or caffeine.</Text>
                         
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

export default Module11