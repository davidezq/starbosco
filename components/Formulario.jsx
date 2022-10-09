import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Formulario() {

    const [selectedSize, setSelectedSize] = useState();
    const [selectedCafe, setSelectedCafe] = useState();
    const [selectedPago, setSelectedPago] = useState();
    const [selectedCantidad, setSelectedCantidad] = useState();
    
    const guardarCantidad = (cantidad) => {
        console.log(cantidad)
        selectedCantidad(cantidad)
    }

    return (
        <View style={styles.form}>

            <View>

                <Text>Tamaño del café</Text>

                <Picker //Tamaño del café
                    selectedValue={selectedSize}
                    onValueChange={(itemValue, itemIndex) =>{
                        console.log(itemValue)
                        setSelectedSize(itemValue)
        
                    }}>
                    <Picker.Item label="short 8 onz - $1.00" value={{tamaño:"8 onz",precio:1}} />
                    <Picker.Item label="tall 12 onz - $1.50" value={{tamaño:"12 onz",precio:1.5}} />
                    <Picker.Item label="grande 14 onz - $2.00" value={{tamaño:"14 onz",precio:2.0}} />
                </Picker>

            </View>

            <View>

                <Text>Tipo de café</Text>

                <Picker //Tipo del café
                    selectedValue={selectedCafe}
                    onValueChange={(itemValue, itemIndex) =>{
                        console.log(itemValue)
                        setSelectedCafe(itemValue)
        
                    }}>
                    <Picker.Item label="Mocha - $2.00" value={{tipo_cafe:"mocha",precio:2}}/>
                    <Picker.Item label="Te chai - $2.50" value={{tipo_cafe:"Te chai",precio:2.50}}/>
                    <Picker.Item label="Americano - $1.50" value={{tipo_cafe:"Americano",precio:1.50}}/>
                    <Picker.Item label="Frapper - $3.00" value={{tipo_cafe:"Frapper",precio:3.00}}/>
                </Picker>

            </View>

            <View>

                <Text>Forma de pago</Text>

                <Picker //Tipo de pago
                    selectedValue={selectedPago}
                    onValueChange={(itemValue, itemIndex) =>{
                        console.log(itemValue)
                        setSelectedPago(itemValue)
        
                    }}>
                    <Picker.Item label="efectivo" value="efectivo" />
                    <Picker.Item label="tarjeta de crédito" value="crédito" />
                </Picker>

            </View>

            <View>

                <Text>Cantidad</Text>
                    <TextInput
                        onChangeText={guardarCantidad}
                        keyboardType='number-pad'
                        />
            </View>

            <TouchableOpacity>
                <Text>Calcular</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    
})