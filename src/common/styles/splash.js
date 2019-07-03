import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: 'Cochin',
    },
    textView: {
        position: "absolute",
        top: 0,
        left:0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    loginView: {
        position: "absolute",
        bottom: "20%",
        width: "70%",
        height: "25%",
        left: "15%",
        alignItems: "center",
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        flex:1,
    },
    footerView: {
        position: "absolute",
        bottom: 30,
        flex: 1,
        flexDirection: "row",
        width: "100%",
        padding: "auto",
        justifyContent: "space-around"
    },
    upView: {
        position: "absolute",
        top: 0,
        height: "50%",
        width: "100%",
        backgroundColor: "#55656B"
    }
});
export default styles;