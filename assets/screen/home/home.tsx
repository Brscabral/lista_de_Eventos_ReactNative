import { View, Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";

export function Home(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.nameEvent}>Nome do evento</Text>
            <Text style={styles.date}>Sexta, 4 de novembro de 2022</Text>
            <View style={styles.form}>
                <TextInput style={styles.inputStyle}></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textPartcipante}>Participante</Text>
        </View>
        

    )
}
const styles = StyleSheet.create({
conteiner:{
    backgroundColor:"#131016",
    //height:'100%'
    flex:1,
    paddingHorizontal:24
},
nameEvent:{
    color:"white",
    fontSize:24,
    fontWeight:'bold',
    marginTop:45,

},
date:{
    color:"#6B6B6B",
    fontSize:18,
    marginBottom:34
},
form:{
    flexDirection:'row'

},
inputStyle:{
    backgroundColor:"#1F1E25",
    height:56,
    flex:1,
    marginRight:7,
    marginBottom:34
 
    
},
button:{
    backgroundColor:'#31CF67',
    width:56,
    height:56,
    justifyContent:'center',
    alignItems:'center',
},

textButton:{
color:'white',
},

textPartcipante:{
color:'white',
fontSize:20,
fontWeight:'bold',
}
})