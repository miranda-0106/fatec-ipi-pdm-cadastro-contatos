import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.chave)}>
      <View style={estilos.itemNaLista}>
        <Text>{props.contato}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderBottomColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});

export default ContatoItem;