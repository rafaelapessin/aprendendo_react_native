import { StyleSheet, Text, View, Image } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import "react-native-safe-area-context";


import logo from './src/imagens/logo.png';
import carrefour from './src/imagens/carrefour.png';
import extra from './src/imagens/extra.png';
import bh from './src/imagens/bh.png';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
          <View style={styles.topo}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.logoTexto}> SuperMarkets</Text>
            <Text style={styles.sloganTexto}> Seu supermercado favorito em um só lugar!</Text>
          </View>
        
        <View style={styles.supermercados}>

          <View style={styles.supermercado}>
              <Image source={carrefour} style={styles.logoMercado}/>
              <Text>Carrefour</Text>
              <Text>Distância: 1200 metros</Text>
          </View>

          <View style={styles.supermercado}>
              <Image source={bh} style={styles.logoMercado}/>
              <Text>BH</Text>
              <Text>Distância: 800 metros</Text>
          </View>

          <View style={styles.supermercado}>
              <Image source={extra} style={styles.logoMercado}/>
              <Text>Extra</Text>
              <Text>Distância: 2400 metros</Text>
          </View>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9e15ccff',
    alignItems: 'center',
  },
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
    color: '#fff',
    marginTop: '20px',
  },
  sloganTexto: {
    fontSize: 18,
    color: '#181616ff',
    marginTop: '10px',
  },
  supermercados: {
    backgroundColor: '#ffaa00'
  },
  supermercado: {
    
  },
  logoMercado: {
    width: '50px',
    height: '50px',
    resizeMode: 'contain',
  }
});
