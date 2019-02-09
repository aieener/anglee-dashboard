import React, { Component } from 'react';
import $ from 'jquery';

class NewYorkTimesPage extends Component {
    state = {
        articles: [],
        apiKey: 'OQr3kIYAhimfbgYm72j0lSCmIJuahUkd',
        page: 1,
        error: false
    }

    getSearchUrl(searchQuery, page) {
        let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        url += '?' + $.param({
            'api-key' : this.state.apiKey,
            'q':  searchQuery,
            'page' : page,
        })
        return url;
    }

    componentDidMount() {
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=345f60dfe08547e2b7dbd49637e0a9e2'
        $.ajax({
            url: url,
            type : 'GET',
            success: function (data) {
                console.log(data);
            },
            error:function (err) {
                alert(JSON.stringify(err));
            }
        });
    }

    render() {
        return (
            <h1 className='text-center'>This is the New York Times page!</h1>
        )
    }
}

export default NewYorkTimesPage;