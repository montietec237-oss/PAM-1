import { Image } from 'expo-image';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const s_i = 22;
  const c_i = "#6e6e6e";

  return (
    <ScrollView style={estilos.container}>
      
      {/* Header */}
      <View style={estilos.header}>
        <Image
          style={estilos.capa}
          source="https://picsum.photos/800/300"
        />
      </View>

      {/* Perfil */}
      <View style={estilos.perfilArea}>
        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source="https://img.icons8.com/doodle/1200/bart-simpson.jpg"
          />
        </View>

        <Text style={estilos.nome}>Bart Simpson</Text>
        <Text style={estilos.bio}>Skatista | Bagunceiro | Springfield</Text>

        {/* Botões */}
        <View style={estilos.botoes}>
          <TouchableOpacity style={estilos.btn}>
            <Text style={estilos.btnTexto}>Seguir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btn2}>
            <Text style={estilos.btnTexto2}>Mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats */}
      <View style={estilos.stats}>
        <View style={estilos.statItem}>
          <Text style={estilos.statNumero}>120</Text>
          <Text>Posts</Text>
        </View>
        <View style={estilos.statItem}>
          <Text style={estilos.statNumero}>2.3k</Text>
          <Text>Seguidores</Text>
        </View>
        <View style={estilos.statItem}>
          <Text style={estilos.statNumero}>180</Text>
          <Text>Seguindo</Text>
        </View>
      </View>

      {/* Social Icons */}
      <View style={estilos.social}>
        <FontAwesome5 name="facebook" size={s_i} color={c_i} />
        <FontAwesome5 name="instagram" size={s_i} color={c_i} />
        <FontAwesome5 name="whatsapp" size={s_i} color={c_i} />
        <FontAwesome5 name="github" size={s_i} color={c_i} />
        <FontAwesome5 name="tiktok" size={s_i} color={c_i} />
      </View>

      {/* Grid de Fotos */}
      <View style={estilos.grid}>
        {[...Array(9)].map((_, i) => (
          <Image
            key={i}
            style={estilos.gridImg}
            source={`https://picsum.photos/200?random=${i}`}
          />
        ))}
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },

  header:{
    width: '100%',
    height: 180,
  },

  capa:{
    width: '100%',
    height: '100%',
  },

  perfilArea:{
    alignItems:'center',
    marginTop: -60
  },

  card:{
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden'
  },

  imagem:{
    width: '100%',
    height: '100%',
  },

  nome:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10
  },

  bio:{
    color:'#666',
    marginBottom:10
  },

  botoes:{
    flexDirection:'row',
    gap:10,
    marginTop:10
  },

  btn:{
    backgroundColor:'#0095f6',
    paddingHorizontal:20,
    paddingVertical:8,
    borderRadius:8
  },

  btnTexto:{
    color:'#fff',
    fontWeight:'bold'
  },

  btn2:{
    borderWidth:1,
    borderColor:'#ccc',
    paddingHorizontal:20,
    paddingVertical:8,
    borderRadius:8
  },

  btnTexto2:{
    fontWeight:'bold'
  },

  stats:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    paddingHorizontal:20
  },

  statItem:{
    alignItems:'center'
  },

  statNumero:{
    fontWeight:'bold',
    fontSize:16
  },

  social:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    paddingHorizontal:40
  },

  grid:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20
  },

  gridImg:{
    width:'33.33%',
    height:120
  }
});