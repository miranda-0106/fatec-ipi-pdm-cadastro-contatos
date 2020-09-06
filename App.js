import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {

  const[contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(10);

  const adicionarContato = (contato, telefone) => {
    setContatos(contatos => {
        setContadorContatos(contadorContatos + 2);
        return [...contatos, {key: contadorContatos.toString(), nome: contato, telefone: telefone}]
    });
  }

  const removerContato = (keyASerRemovida) =>{
    setContatos(contatos => {
      return contatos.filter((contato) => {
         return contato.key !== keyASerRemovida
      })
    });
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <ContatoInput onAdicionarContato={adicionarContato}/>
        <FlatList 
          data={contatos}
          renderItem={
            (contato) => (
              <ContatoItem
                chave={contato.item.key} 
                contato={contato.item.key + ' - ' + contato.item.nome + ' - ' + contato.item.telefone} 
                onDelete={removerContato}
              />
            )
          }
        />      
    </View>
  );
}

const estilos = StyleSheet.create({
  entradaView: {
    marginBottom: 8
  },
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },

  telaPrincipalView: {
    padding: 50
  },
  contatoTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12,
    textAlign: 'center'
  }
})