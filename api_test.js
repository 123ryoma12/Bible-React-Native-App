const API_KEY = '50ac0857808920814bbef361f4fc5972bcd66017'
const API_URL = 'https://api.esv.org/v3/passage/text/?'
const request = require('request')
const queryString = require('query-string');
const fetch = require('node-fetch')

const getEsvText = async (passage) => {
    const query = {
        'q': passage,
        'include-headings': false,
        'include-footnotes': false,
        'include-verse-numbers': false,
        'include-short-copyright': false,
        'include-passage-references': false,
    }

    const url = API_URL + queryString.stringify(query)
    const requestOptions = {
        headers:  {
            'Authorization': `Token ${API_KEY}`
        }
    }

    const response = await fetch(url, requestOptions)
    const json = await response.json()
    console.log(json.passages[0])

    return json.passages[0]

}

const passage = getEsvText("2 Timothy 1")
// CONSTANTS
const books = require('./books.json')