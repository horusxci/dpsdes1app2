import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button,Text, Alert } from "react-native";

const CalcSalary = () => {

  const [name, setName] = React.useState(null);
  const [lName, setLName] = React.useState(null);
  const [salary, setSal] = React.useState(0);
  const [netSalary, setNSal] = React.useState(0);

  const iss = 0.03;
  const afp = 0.04;
  const rent = 0.05;


  function calculate(){
    if(isNaN(salary)){
        Alert.alert("Por favor ingrese valor numerico en salairo");
        return;
    }

    let ns = salary-(salary*iss);
    ns = ns - (salary*afp);
    ns = ns - (salary*rent);

    setNSal(ns.toFixed(2));

  }


  return (
    <SafeAreaView style={styles.bg}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLName}        
        placeholder="Apellido"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSal}        
        placeholder="salario"
        keyboardType="numeric"
      />
        <Text style={styles.titleApp}>Salario Neto: ${netSalary}</Text>           
      <Button
        onPress={calculate}
        title="Calcular"
        color="#2d9667"          
    />      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  titleApp: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
    },
    bg:{
        backgroundColor: '#d1dbe0'
    }
   
});

AppRegistry.registerComponent("dps_t1_app2", () => CalcSalary);