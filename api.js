import queryString from 'query-string'
const API_KEY = '50ac0857808920814bbef361f4fc5972bcd66017'
const API_URL = 'https://api.esv.org/v3/passage/text/?'

export const getEsvText = async (passage) => {
    const query = {
        'q': passage,
        'include-headings': false,
        'include-footnotes': false,
        'include-verse-numbers': true,
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
    console.log(json)

    return json.passages[0]

}