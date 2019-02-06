import React from 'react';
import { Button, ScrollView, SectionList, FlatList, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'
import { getEsvText } from '../api'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default class ChapterScreen extends React.Component {
    state = {
        passage: null,
    }


    static navigationOptions = ({ navigation }) => ({
        headerTitle: `${navigation.getParam('name')} ${navigation.getParam('number')}`
    })

    componentDidMount() {
        this.getPassage()

    }

    nextChapter = () => this.props.navigation.push('Chapter', {
        name: this.props.navigation.getParam('name'),
        number: this.props.navigation.getParam('number') + 1,
        verses: this.props.navigation.getParam('verses'),
        chapters: this.props.navigation.getParam('chapters'),
    })

    getPassage = async () => {
        // HAVE TO DO THIS BECAUSE CRAPPY API IGNORE CHAPTER NUMBER IF BOOK HAS ONLY ONE CHAPTER
        let name = this.props.navigation.getParam('name')
        let number = this.props.navigation.getParam('number')
        let one_chapter_books = ['Obadiah', 'Philemon', '2 John', '3 John', 'Jude']
        one_chapter_books.forEach(book => {
            if (name === book) {
                number = ''
            }
        })

        const query = `${name} ${number}`
        const result = await getEsvText(query)
        this.setState({ passage: result })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text selectable>{this.state.passage}</Text>
                    <Text selectable>Verse Count: {this.props.navigation.getParam('verses')}</Text>
                    <Text selectable>Chapter Count: {this.props.navigation.getParam('chapters')}</Text>
                    {
                        this.props.navigation.getParam('chapters') != this.props.navigation.getParam('number')
                        && <Button title="Next Chapter" onPress={this.nextChapter} />
                    }
                </ScrollView>

            </View>
        );
    }
}

