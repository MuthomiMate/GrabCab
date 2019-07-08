import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_PLACES_API_KEY } from "react-native-dotenv"; uncomment once tests fixed
import { TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";




class GooglePlaces extends Component{
    constructor(props){
        super(props)
        this.state ={
            to: "",
            from: ""
        }
    }
    componentDidMount(){

    }

    onLocationSelect = (location, id) => {
        let region = {
            latitudeDelta: 0.0072,
            longitudeDelta: 0.00721
        }
        if(id === "from"){
            Object.assign(region, location);
            this.setState({from: region});
        }
        else{
            Object.assign(region, location);
            this.setState({to: region});
        }

    }

    renderClearButton = (id) => {
        const {from , to } = this.state;
        if((id === "from" && from !== "") ||(id === "to" && to !== "")){
            return (
                <TouchableOpacity style={styles.clearView} onPress={ () => { this.GooglePlacesRef.setAddressText("")} } >
                    <Icon name="clear" size={15} type="material-icons" color="black"/>
                </TouchableOpacity>
            )
        }
     }
    render = () => {
        const GOOGLE_PLACES_API_KEY = "some-key" // to be refactored
        const { placeholder, id } = this.props;
        const {to,  from } = this.state
        return (
            <GooglePlacesAutocomplete
                    ref={(instance) => { this.GooglePlacesRef = instance }}
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'search'}
                    listViewDisplayed={false}
                    fetchDetails={true}
                    renderRightButton={()=>this.renderClearButton(id)}
                    onPress={(data, details = null) => {
                                this.onLocationSelect(details.geometry.location, id);
                            }}
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: "en",
                        components: 'country:ke'
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    placeholder={placeholder}
                    debounce={200}
                    styles={{
                        textInputContainer: {
                        backgroundColor: "#0A0F10"
                        },
                        textInput: {
                            backgroundColor: "#0A0F10",
                            color: "white"
                        },
                        description: {
                        fontWeight: 'bold',
                        color: "white",
                        },
                        predefinedPlacesDescription: {
                        color: "white"
                        },
                        listView: {
                            zIndex: 500,
                        },
                    }}
                />
        )
    }
}
const styles = StyleSheet.create({
    clearView: {
        height: 20,
        width: 20,
        top: 10,
        borderRadius: 40,
        backgroundColor: "white",
        justifyContent: "center"
    }
})

export default GooglePlaces;