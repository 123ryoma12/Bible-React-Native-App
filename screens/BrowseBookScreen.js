import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ScrollView, View, Button } from 'react-native'
import books from '../books.json'

const styles = StyleSheet.create({
    row: {
        padding: 20,
    },
})

const BookRow = props => (
    <TouchableOpacity style={styles.row}
        onPress={() => props.onSelectBook(props.book)}
    >
        <Text>{props.book.book}</Text>
    </TouchableOpacity>
)

const BookList = props => (
    <ScrollView>
        {books.map((book, index) => <BookRow book={book} key={index} onSelectBook={props.onSelectBook} />)}
    </ScrollView>
)


export default class BrowseBookScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <BookList
                onSelectBook = {(book) => this.props.navigation.navigate('BrowseChapter', {
                    book: book,
                })}
            />
        </View>)
        

    }
}