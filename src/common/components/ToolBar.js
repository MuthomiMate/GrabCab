import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Icon } from "react-native-elements"

const ToolBar = ({iconName, iconSize, iconType, iconColor, text, leftIcon, onleftIconPress, onRightIconClick, textColor }) => {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
            <View style={styles.detailsView} >
                <View>
                    {iconName ? <Icon onPress={ onRightIconClick } name={iconName} size={iconSize} type={iconType} color={iconColor} />: null }
                </View>
                <View>
                    {text ? <Text style={{color: textColor}} onPress={ onRightIconClick }>{text}</Text>: null}
                </View>
                <View>
                    {leftIcon ? <Icon name={iconName} size={iconSize} type={iconType} color={iconColor} /> : null }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#0A0F10",
        height: "30%"
    },
    detailsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: "10%"
    }
})
export default ToolBar;