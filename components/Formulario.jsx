import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Formulario({resumen, setResumen}) {

    const [selectedSize, setSelectedSize] = useState("8 onz,1");
    const [selectedCafe, setSelectedCafe] = useState("mocha,2");
    const [selectedPago, setSelectedPago] = useState("efectivo,15%");
    const [selectedCantidad, setSelectedCantidad] = useState(0);

    const guardarCantidad = (cantidad) => {
        setSelectedCantidad(cantidad)
    }

    const handleCalcular = () =>{
        const cantidad_solicitada = selectedCantidad
        const [tamaño,precioTamaño] = selectedSize.split(',')
        const [tipo_cafe,precioCafe] = selectedCafe.split(',')
        const [tipo_pago,descuento] = selectedPago.split(',')
        const totalSinDescuento = ( Number( precioTamaño ) + Number( precioCafe ) ) * Number(cantidad_solicitada)
        const descuentoCalculado = totalSinDescuento * ( Number( descuento.slice(0,-1) ) / 100 )
        const total_pagar = (totalSinDescuento - descuentoCalculado).toFixed(2)

        const nuevoResumen = {
            cantidad_solicitada,
            tamaño,
            tipo_cafe,
            tipo_pago,
            descuento, //en porcentaje
            total_pagar
        }

        setResumen(nuevoResumen)
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
                    <Picker.Item label="short 8 onz - $1.00" value={"8 onz,1"} />
                    <Picker.Item label="tall 12 onz - $1.50" value={"12 onz,1.50"} />
                    <Picker.Item label="grande 14 onz - $2.00" value={"14 onz,2.00"} />
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
                    <Picker.Item label="Mocha - $2.00" value={"mocha,2"}/>
                    <Picker.Item label="Te chai - $2.50" value={"Te chai,2.50"}/>
                    <Picker.Item label="Americano - $1.50" value={"Americano,1.50"}/>
                    <Picker.Item label="Frapper - $3.00" value={"Frapper,3.00"}/>
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
                    <Picker.Item label="efectivo" value="efectivo,15%" />
                    <Picker.Item label="tarjeta de crédito" value="crédito,5%" />
                </Picker>

            </View>

            <View>

                <Text>Cantidad</Text>
                    <TextInput
                        onChangeText={guardarCantidad}
                        keyboardType='number-pad'
                        />
            </View>
            {
                selectedCantidad > 0 ? (
                    <TouchableOpacity onPress={handleCalcular}>
                        <Text>Calcular</Text>
                    </TouchableOpacity>
                ):(
                    ""
                )

            }

        </View>
    )
}

const styles = StyleSheet.create({
    
})