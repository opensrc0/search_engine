export const sourceList = ['hackerNews', 'wiki', 'test'];

export const sourceConfig = {
    hackerNews: {
        name: 'hackerNews',
        searchApi: 'http://hn.algolia.com/api/v1/search?query=',
        userApi: '',
    },
    wiki: {
        name: 'wiki',
        searchApi: 'https://en.wikipedia.org/w/api.php?action=opensearch&fromat=json&search=',
        userApi: '',
    },
    test: {
        name: 'hackerNews',
        searchApi: 'http://hn.algolia.com/api/v1/search?query=',
        userApi: '',
    },
};