import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const s_i = 38;
  const c_i = "#6e6e6e";
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image
          style={estilos.imagem}
          source="https://img.icons8.com/doodle/1200/bart-simpson.jpg"        
        />
      </View>
      <View style={estilos.infos}>
        <View style={estilos.social}>
          <FontAwesome5 name="facebook"  size={s_i} color={c_i} />
          <FontAwesome5 name="instagram" size={s_i} color={c_i} />
          <FontAwesome5 name="whatsapp"  size={s_i} color={c_i} />
          <FontAwesome5 name="github"    size={s_i} color={c_i} />
          <FontAwesome5 name="tiktok"    size={s_i} color={c_i} />
        </View>
      </View>
      <View style={estilos.fotos}>
        <Text>Fotos</Text>
      </View>
      <View style={estilos.fotos}>
        <Text>Amigos</Text>
      </View>
    </View>
  );
}


const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingTop: 10
  },
  card:{
    width: 250,
    height: 250,
    borderColor: '#858585',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: '50%',
    padding:10,
    zIndex:1
  },
  imagem:{
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },
  infos:{
    width: '90%',
    marginTop: -125,
    zIndex: 0
  },
  social:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 125,
    padding:20
  }
}); 
