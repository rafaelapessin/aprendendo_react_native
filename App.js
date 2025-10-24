import { StyleSheet, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import "react-native-safe-area-context";

import carrefour from './src/imagens/carrefour.png';
import extra from './src/imagens/extra.png';
import bh from './src/imagens/bh.png';

import Topo from './src/componentes/Topo';
import Supermercado from './src/componentes/supermercado';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Topo/>
        <View style={styles.supermercados}>
          <Supermercado imagem={carrefour} nome="Carrefour" distancia="1200m"/>
          <Supermercado imagem={bh} nome="BH" distancia="800m"/>
          <Supermercado imagem={extra} nome="Extra" distancia="2400m"/>
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
  supermercados: {
    backgroundColor: '#ffaa00'
  },
});

