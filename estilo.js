import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },

  boxIcones: {
    width: 260,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
  },

  boxIconesTitulo: {
    fontWeight: "bold",
    marginBottom: 8,
  },

  iconesLista: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

export default estilos;