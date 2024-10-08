import React from 'react'
import { View,ScrollView,Text ,Image,TouchableOpacity} from 'react-native'
import { router } from 'expo-router';
const Module10 = ({moduleId}:{moduleId:number}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{gap:10}}>



            <View style={{gap:8}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Stroke</Text>

                <Text style={{fontSize:18,textAlign:"justify"}}>A stroke is a disruption of blood flow to a part of the brain which cause permanent damage to the brain tissue. This is also called a cerebrovascular accident (CVA).</Text>
              <Image style={{width:"100%",height:180,marginTop:20}}   source={require(`../assets/images/stroke.jpg`)} />

            </View>


            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6,gap:8}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Assesement </Text>

                        <Text style={{fontSize:18,color:"white"}}>For Stroke Assesment , think F.A.S.T, which stands for the following: </Text>

                        <View style={{gap:8}}>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>F - Face</Text>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>A - Arm</Text>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>S - Speech</Text>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>T - Time</Text>
                        </View>
            </View>


            

            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management </Text>
                <Text style={{fontSize:18}}>Recognize the "signals" and take actions:</Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,}}>- Call the local emegency number immediately Minutes count!</Text>
                        <Text style={{fontSize:18,}}>- Have the person stop what he or she is doing and have them rest comfortably by sitting or lying down</Text>
                        <Text style={{fontSize:18,}}>- Give the  victim supportive  care and reassurance</Text>
                        <Text style={{fontSize:18,}}>- Be prepared  to perform CPR if the victim becomes unresponsive</Text>
                        
                                               
                </View>

          
             </View>





            

                    
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Sudden numbness or weakness in the face, arm or leg, especially on one side of body.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Sudden confusion, trouble speaking or understanding.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Sudden trouble seeing with one or both eyes.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Sudden trouble walking, dizzines, loss of balance or coordination.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Sudden severe headache with no known cause.</Text>
                       
                    </View>
            </View >









            <View style={{gap:8}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Diabetic Emegergencies</Text>

                <Text style={{fontSize:18,textAlign:"justify"}}>Diabitis is the inability of the body to change sugar(glocuse) from food into energy.</Text>
              <Image style={{width:"100%",height:180,marginTop:20}}   source={require(`../assets/images/diabetes.jpg`)} />

            </View>




            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6,gap:8}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Types & Causes</Text>

                        <View style={{gap:8}}>
                            <Text style={{fontSize:18,color:"white"}}>- Too much sugar in the blood (hyperglycemia). The person may not  have taken enough insulin or may be reacting adversely to a large meal that is high in carbohydrates.</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Too little sugar in the blood (hypoglycemia). The  person may have taken too much insulin.</Text>
                            
                        </View>
            </View>





                     
            <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- First check and determine if there are any life-threatening condition.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- A person with diabeties who is experiencing  a diabetic emergency must be instructed to test his or her blood glocose level.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- A victim experiencing  a diabetic emergency due to hypoglycemia must be encougrage to treat himself/herself 
                          with food or drink that contains sugar. The same action is advised if the condition still is to be determined or still remains unknown (Are they hypogycemia or hyperglycemia?).
                        </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- If the diabetic person is concious and is able to swallow  and then states that they need sugar.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- If the person in unconscious or is about to lose consciousness call the local emergency number. Maintain  open airway and do not give anything by mouth.</Text>
                       
                    </View>
            </View >







            <View style={{gap:8}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Seizures</Text>

                <Text style={{fontSize:18,textAlign:"justify"}}>Seizure is when the normal functions of the brain are disrupted by injury, disease, fever, poisoning, or infection, and the electrical activity of the brain becomes irregular.</Text>
            
            </View>



           <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Types & Causes</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{fontSize:18,color:"white"}}>- Choronic - This condition occurs suddenly and without warning</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Fertile - This condition brings about a rapid increase in body temperature </Text>
                        </View>
          </View>





            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>First Aid Management </Text>
                <Text style={{fontSize:18,}}>Recognize the "signals" and take actions:</Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Reassure the victim that you are going to help</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Remove nearby objects that might cause injury</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Protect the victim's head by placing a thinly folded towel or piece of clothing beneath it.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Do not hold or restrain the patient when a  seizure is in progress</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Do not place anything between the victim's teeth or put anything in the victim's mouth.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Loosen clothing and fan the victim if the seizure  was caused by a sudden rise in body temperature.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Ensure that the victim's airway is open and check for breathing and other injuries once the seizure is over.</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Stay and watch over the victim until the victim is fully conscious</Text>
                        
                                               
                </View>

          
             </View>





           <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Unusual sensations or feelings such as visual hallucination</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Irregular breathing patterns</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Drooling</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Upward rolling of the eyes</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Rigid body</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Sudden , uncontrollable , ryhthmic muscle contractions and convulsions</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Decrease level of responsiveness</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Loss of bladder or bowed control</Text>
                       
                    </View>
            </View >









        

            <View style={{gap:8,marginTop:20}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Anaphylaxis</Text>

                <Text style={{fontSize:18,textAlign:"justify"}}>An allergy i caused by the over-activity of the immune system against specific antigens.</Text>
              

            </View>



          
           <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Causes</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{fontSize:18,color:"white"}}>- Bee or insect venom</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Pollen </Text>
                            <Text style={{fontSize:18,color:"white"}}>- Animal dander</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Latex</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Certain antibodies and drugs </Text>
                            <Text style={{fontSize:18,color:"white"}}>- Certain foods like nuts , peanuts shelfish and dairy products </Text>
                        </View>
          </View>




          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Skin becomes swollen and turns red</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Difficulty in breathing , wheezing or shortness of breath </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Tight Feeling in the chest and throat</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Swelling of the face, throat or tongue</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Weakness, dizziness or confusion</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Rashes or hives</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Low blood pressure</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Shock</Text>
                       
                    </View>
            </View >




        
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management </Text>
                <Text style={{fontSize:18}}>Recognize the "signals" and take actions:</Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Call the local emergency number</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Calm and reassure the person</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Help the person to rest in the most confortable position breathing</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Monitor the person's breathing. Look for any changes in his or her condition</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Assist the person with the use of a prescribed epinephrine auto-injector, if available</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Give care for life-threatening emergencies</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Document any changes in the person's condition over time</Text>
                      
                        
                                               
                </View>

          
             </View>





        

             <View style={{gap:8,marginTop:30}}>
                <Text style={{fontSize:18,textAlign:"justify"}}>Fainting</Text>

                <Text style={{fontSize:18,textAlign:"justify"}}>Fainting is a partial or complete loss of consciousness resulting from a temporary reduction of blood flow to the brain.</Text>
              

            </View>








        
            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Causes</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{fontSize:18,color:"white"}}>- An emotionaly stressful event</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Pain </Text>
                            <Text style={{fontSize:18,color:"white"}}>- Specific medical conditions such as heart disease</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Standing for long periods of time or overexertion</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Pregnant wowen and the elderly are more likely than others to faint when suddenly changing positions</Text>
                            
                        </View>
          </View>





          
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",color:"white"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Light-headedness or dizziness </Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Signs of shock, such as pale, cool or moist skin</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Nausea and numbness or tingling in the fingers and toes</Text>
                       
                    </View>
            </View >





          
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management </Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Position the victim on his or her back</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Keep the victim in a lying position</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Loosen any restrictive clothing,such as a tie or a buttone-up collar</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Check for any other life-threatening and non-life-threatening conditions</Text>
                        <Text style={{fontSize:18,textAlign:"justify"}}>- Do not give the victim anyhting to eat or drink</Text>
                        
                      
                        
                                               
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

export default Module10