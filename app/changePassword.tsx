import {View,Text,TextInput,TouchableOpacity} from 'react-native'


const ChangePassword = () => {
    return (
        <View style={{paddingVertical:40,paddingHorizontal:20}}>

            <View>
                <Text style={{fontSize:18,fontWeight:300}}>Enter Password to Confirm</Text>

                <TextInput

                    placeholder='Enter Password'
                    style={{
                        fontSize:18,
                        backgroundColor:"white",
                        height:45,
                        padding:10,
                        marginTop:10,
                        borderRadius:2,

                    }}
                />

                <TouchableOpacity style={{
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:"red",
                    height:60,
                    marginTop:10
                    }}>
                    <Text style={{color:"white",fontWeight:900,fontSize:18}}>CONFIRM PASSWORD</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}


export default ChangePassword;