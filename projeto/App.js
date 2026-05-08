import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial';
import TelaTriologia1 from './componentes/TelaTriologia1';
import TelaTriologia2 from './componentes/TelaTriologia2';
import TelaTriologia3 from './componentes/TelaTriologia3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Tela Triologia 1" component={TelaTriologia1} />
        <Stack.Screen name="Tela Triologia 2" component={TelaTriologia2} />
        <Stack.Screen name="Tela Triologia 3" component={TelaTriologia3} />
      </NavigationContainer>
  );
}