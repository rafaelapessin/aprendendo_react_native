import { StyleSheet, View, Image, Text } from 'react-native';

export default function Supermercado({imagem, nome, distancia}) {
    return (
        <View style={styles.supermercado}>
            <Image source={imagem} style={styles.logoMercado}/>
            <Text>{nome}</Text>
            <Text>Distância: {distancia}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  supermercado: {
    marginTop: '30%',
    marginLeft: '30%',
    width: '40%',
    position: 'relative',
    backgroundColor: '#ffaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoMercado: {
    width: '70px',
    height: '70px',
    resizeMode: 'contain',
  }
});