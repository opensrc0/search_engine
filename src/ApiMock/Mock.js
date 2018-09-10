class Mock {
    search = async (source, query) => {
        let header = new Headers({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data'
        });
        return await fetch(`${source.searchApi}${query}`, {credentials: "omit", mode: 'cors', header: header})
        .then((response) => response.json())
        .then((response) => this.transform(response, source));
    }

    transform = (response, source) => {
        if(source.name === "hackerNews") return this.transformHackerNews(response, source);
        if(source.name === "wiki") return this.transformWiki(response, source);

        return response;
    }

    transformHackerNews = (response, source) => {
        return response.hits.map((value, index) => {
            return {
                sourceName: source.name,
                title: value.title || value.story_title,
                url: value.url || value.story_url,
                author: value.author,
            }
        })
    }

    transformWiki = (response) => {
        return response;
    }
}

export default new Mock();