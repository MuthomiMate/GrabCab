import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Splash from "./src/common/components/splash";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showNextPage: false,
    }
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState( { showNextPage: true } )
    }, 5000)
  }

  render(){
    const { showNextPage } = this.state;
    return (
      <Splash
        style={styles.container}
        showButtons={showNextPage}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
