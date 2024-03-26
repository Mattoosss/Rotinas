import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Header from "./components/header";
import Card from "./components/card";

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <Card
        porcentagem="45%"
        titulo="leitura"
        imagem="https://napratica.org.br/wp-content/uploads/2019/10/livros-mais-usados.jpg"
        texto="Eu leio durante a semana"
      ></Card>
      <Card
        porcentagem="40%"
        titulo="futebol"
        imagem="https://senasaude.com.br/wp-content/uploads/2017/05/dicas-praticar-futebol.jpg"
        texto="Jogo futebol diariamente na semana"
      ></Card>
      <Card
        porcentagem="35%"
        titulo="comida"
        imagem="https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg"
        texto="Eu almoço 2 vezes por dia"
      ></Card>
      <Card
        porcentagem="50%"
        titulo="dormir"
        imagem="https://conteudo.imguol.com.br/c/entretenimento/4f/2022/03/23/sono-homem-dormindo-jovem-dormir-cama-cochilo-1648043908636_v2_450x450.jpg"
        texto="Eu durmo durante 8 horas todos os dias"
      ></Card>
      <Card
        porcentagem="55%"
        titulo="trabalhar"
        imagem="https://blog.portalpos.com.br/app/uploads/2023/03/trabalhar-equipe-pessoas-dificeis.jpg."
        texto="Eu trabalho 6 horas durante 6 dias na semana"
      ></Card>
      <Card
        porcentagem="30%"
        titulo="banho"
        imagem="https://blog.colombo.com.br/wp-content/uploads/2022/12/tomando-banho-ok-.jpg"
        texto="Tomo banho diariamente"
      ></Card>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CAF0F8",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
     marginTop: 15,
  },

  cardTarefa: {
    marginTop: 20,
    backgroundColor: "#A8DADC",
    width: "100%",
    height: 125,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },

  tituloCard: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1d3557",
  },

  textoCard: {
    fontSize: 10,
    marginTop: 5,
  },

  imagemCard: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
});
