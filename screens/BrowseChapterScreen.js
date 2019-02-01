import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ScrollView, View, Button } from 'react-native'

const styles = StyleSheet.create({
    row: {
        padding: 20,
    },
})

const ChapterRow = props => (
    <TouchableOpacity style={styles.row}
        onPress={() => props.onSelectChapter(props)}
    >
        <Text>{props.number}</Text>
    </TouchableOpacity>
)

const ChapterList = props => (
    <ScrollView>
        {props.book.chapters.map((chapter, index) => 
            <ChapterRow 
                chapter={chapter}
                number={index + 1} 
                key={index}
                onSelectChapter={props.onSelectChapter} 
            />
        )}
    </ScrollView>
)

export default class BrowseChapterScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam('book').book
    })

    render() {
        return (
            <View style={styles.container}>
                <ChapterList
                    book = {this.props.navigation.getParam('book')}
                    onSelectChapter = {(props) => this.props.navigation.navigate('Chapter', {
                        book: this.props.navigation.getParam('book').book,
                        number: props.number,
                    })}
                />
            </View>
        )

    }
}