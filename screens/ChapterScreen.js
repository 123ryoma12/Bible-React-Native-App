import React from 'react';
import { Button, ScrollView, SectionList, FlatList, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'
import { getEsvText } from '../api'

export default class ChapterScreen extends React.Component {
  state = {
    passage: null,
  }


    static navigationOptions = ({navigation}) => ({
        headerTitle: `${navigation.getParam('book')} ${navigation.getParam('number')}`
    })
    
    componentDidMount() {
        this.getPassage()
    }

    getPassage = async () => {
        const result = await getEsvText(`${this.props.navigation.getParam('book')} ${this.props.navigation.getParam('number')}`)
        this.setState({passage: result})
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>{this.state.passage}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});
