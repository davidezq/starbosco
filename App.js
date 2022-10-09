import { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Title from './components/Title';
import Formulario from './components/Formulario';

export default function App() {
  const [resumen,setResumen] = useState(
    {
        cantidad_solicitada: 0,
        tamaño: 'asd',
        tipo_cafe:'asd',
        tipo_pago:'efectivo',
        descuento:0, //en porcentaje
        total_pagar:0
    }
  )

  return (
    <View style={styles.container}>
      <Title/>
      <Formulario/>
      <View style={styles.grid}>
          <Text style={styles.colmn}>Cantidad solicitada:</Text>
          <Text style={styles.colmn}>{resumen.cantidad_solicitada}</Text>
          <Text style={styles.colmn}>Tamaño:</Text>
          <Text style={styles.colmn}>{resumen.tamaño}</Text>
          <Text style={styles.colmn}>Tipo café:</Text>
          <Text style={styles.colmn}>{resumen.tipo_cafe}</Text>
          <Text style={styles.colmn}>Tipo de pago:</Text>
          <Text style={styles.colmn}>{resumen.tipo_pago}</Text>
          <Text style={styles.colmn}>Descuento %:</Text>
          <Text style={styles.colmn}>{resumen.descuento}</Text>
          <Text style={styles.colmn}>Total a pagar:</Text>
          <Text style={styles.colmn}>{resumen.total_pagar}</Text>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Constants.statusBarHeight,
    paddingHorizontal:"2.5%"
  },
  grid:{
    width:500,
    flexWrap:'wrap',
    flexDirection:'row'
  },
  colmn:{
    flexDirection:'row',
    flexGrow:1,
    flexBasis:"50%",
 }
});
