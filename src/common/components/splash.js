import * as React from "react";
import { StyleSheet, View,Text, Image, Button } from "react-native";


class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showLogin: false
        }
    }
    componentDidMount(){
        const { showLogin } = this.props;
        this.setState({showLogin})
    }
    onLeftButtonClick = () => {
        const { showLogin } = this.state;
        if(!showLogin){
            this.setState({showLogin: true})
        }
    }
    render(){
        const {showButtons, style } = this.props
        const { showLogin } = this.state
        return(
        <View style={style}>
            <Image source = {require('../../images/splash3.png')} style={styles.image}/>
            { /* <View style={styles.upView}></View>*/}
            <View style={styles.textView}>
                { /* <Image source = {require('../../images/car.png')} style={{width: "50%"}}/>*/ }
                <Text style={styles.text}>
                    <Text style={{color: "#C4A751"}}>GRAB</Text>
                    <Text style={{color: "#FFFFFF"}}>CAB</Text>
                </Text>
            </View>
            { showButtons ?
            <View style={styles.footerView}>
                <View style={{backgroundColor: "#48668C", borderRadius: 10, width: "40%"}}>
                    <Button
                        onPress={this.onLeftButtonClick}
                        title={ showLogin? "Login" : "Enter As Driver" }
                        color="#FFFFFF"
                    />
                </View>
                <View style={{backgroundColor: "#F8C667", borderRadius: 10, width: "40%"}}>
                    <Button
                        onPress={this.onLeftButtonClick}
                        title={showLogin ? "Register" : "Enter As Rider"}
                        color="#FFFFFF"
                    />
                </View>
            </View> : null}
        </View>
    )}
}

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

export default Splash;