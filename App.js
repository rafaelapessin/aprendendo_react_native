import {StyleSheet, View, FlatList} from 'react-native';
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
          <FlatList 
          data={supermercados.lista} 
          renderItem={({item}) => <Supermercado {...item}/>}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
  },
  supermercados: {
    backgroundColor: '#ff8400ff',
    width: '100%',
  },
});

const gerarNumAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const supermercados ={
  titulo: 'Supermercados',
  // lista é um array de objetos
  lista: [
    {
      imagem: carrefour,
      nome: 'Carrefour',
      distancia: gerarNumAleatorio(1, 1500) + 'metros',
    },
    {
      imagem: bh,
      nome: 'BH',
      distancia: gerarNumAleatorio(1, 1500) + 'metros',
    },
    {
      imagem: extra,
      nome: 'Extra',
      distancia: gerarNumAleatorio(1, 1500) + 'metros',
    }
  ]
}