import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style';

function Menu() {
  return (
    <View style={style.menuContainer}>
      <MenuItem label="Acessórios" />
      <MenuItem label="Comida" />
      <MenuItem label="Brinquedos" />
    </View>
  );
}

const MenuItem = ({ label }) => (
  <TouchableOpacity style={style.menuBotao}>
    <Text style={style.menuTexto}>{label}</Text>
  </TouchableOpacity>
);

export default Menu;
