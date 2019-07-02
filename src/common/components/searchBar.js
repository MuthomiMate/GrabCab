import React from "react";
import { View, StyleSheet,} from "react-native";
import GooglePlaces from "./GooglePlacesAutoComplete";

const SearchBar= () =>{
    return (
        <View style={styles.container}>
            <View style={{padding: 10, paddingTop: 0, paddingBottom: 0}}>
                <View style={styles.border}>
                    <GooglePlaces
                        placeholder="Where From ?"
                        id="from"
                    />
                </View>
            </View>
            <View style={{padding: 10, paddingTop: 0, flexDirection: "row", justifyContent: "space-between"}}>
                <GooglePlaces
                    placeholder="Drop Where ?"
                    id="to"
                />
            </View>
        </View>
    )
}
export default SearchBar;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#0A0F10"
    },
    border: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
