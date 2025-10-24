import { StyleSheet, View, Image, Text } from 'react-native';
import logo from '../imagens/logo.png';

export default function Topo() {
    return (

    
        <View style={styles.topo}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.logoTexto}> SuperMarkets</Text>
            <Text style={styles.sloganTexto}> Seu supermercado favorito em um só lugar!</Text>
        </View>


    )  
}

const styles = StyleSheet.create({
  topo: {
    alignItems: 'center',
  },
  logo: {
    width: '150px',
    height: '150px',
    marginTop: '30px',
    resizeMode: 'contain',
  },
  logoTexto: {
    fontSize: 25,
    color: '#000000ff',
    marginTop: '20px',
  },
  sloganTexto: {
    fontSize: 18,
    color: '#000000ff',
    marginTop: '10px',
  },
})