import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  h1: {
    width: "100%",
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    color: "silver",
    fontWeight: "bold",
    marginTop: "2%",
  },

  text: {
    color: "silver",
    padding: "2%",
    flexWrap: "wrap",
  },
  searchPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262626",
  },
  searchPageCard: {
    backgroundColor: "#262626",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    width: "100%",
    padding: 20,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: "5%",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderBottomColor: "#333",
    color: "silver",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "silver",
    fontSize: 16,
  },
  searchBar__unclicked: {
    marginTop: "10%",
    padding: 10,
    flexDirection: "row",
    width: "100%",

    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#262626",

    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  caption: {
    color: "silver",
    padding: "2%",
    flexWrap: "wrap",
    backgroundColor: "#333",
  },
  contactButton: {
    color: "silver",
    backgroundColor: "#262626",
    padding: "2%",
    borderRadius: 23,
    alignItems: "center",
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "left", // Премества към десния край, използвайте 'flex-start' за ляв край
  },
  version: {
    color: "silver",

    width: "100%",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262626",
  },
  body: {
    backgroundColor: "#333",
    width: "100%",
    padding: "5%",
    alignItems: "center",
    borderRadius: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262626",
  },
  card: {
    backgroundColor: "#262626",
    color: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "silver",
  },
  description: {
    fontSize: 14,
    color: "silver",
  },
  details: {
    backgroundColor: "#262626",
    flex: 1,
    padding: "5%",
    alignItems: "center",
  },
  table: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
  },
  headerRow: {
    backgroundColor: "#f2f2f2",
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
  },
  cell: {
    flex: 1,
    color: "white",
  },
});
