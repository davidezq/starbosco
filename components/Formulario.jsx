import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Formulario({resumen, setResumen}) {

    const PORCENTAJE = 100;

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
        const descuentoCalculado = totalSinDescuento * ( Number( descuento.slice(0,-1) ) / PORCENTAJE )
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

                <Text style={styles.label}>Tamaño del café</Text>

                <Picker //Tamaño del café
                    style={styles.picker}
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

                <Text style={styles.label}>Tipo de café</Text>

                <Picker //Tipo del café
                    style={styles.picker}
                    selectedValue={selectedCafe}
                    onValueChange={(itemValue) =>{
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

                <Text style={styles.label}>Forma de pago</Text>

                <Picker //Tipo de pago
                    style={styles.picker}
                    selectedValue={selectedPago}
                    onValueChange={(itemValue) =>{
                        console.log(itemValue)
                        setSelectedPago(itemValue)
        
                    }}>
                    <Picker.Item label="efectivo" value="efectivo,15%" />
                    <Picker.Item label="tarjeta de crédito" value="crédito,5%" />
                </Picker>

            </View>

            <View>

                <Text style={styles.label}>Cantidad</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={guardarCantidad}
                        keyboardType='number-pad'
                        />
            </View>
            {
                selectedCantidad > 0 ? (
                    <TouchableOpacity style={styles.btnCalcular} onPress={handleCalcular}>
                        <Text style={styles.lblBtn}>Calcular</Text>
                    </TouchableOpacity>
                ):(
                    ""
                )

            }

        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor:'green',
        padding:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    label:{
        fontSize:20,
        color:'white'
    },
    lblBtn:{
        fontSize:20,
        textAlign:'center',
        color:"white"
    },
    btnCalcular:{
        marginTop:20,
        backgroundColor:'#1f3a31',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    input:{
        padding:5,
        backgroundColor:'white',
        color:'black'
    },
    picker:{
        padding:5,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'white',
        marginBottom:20
    }
})