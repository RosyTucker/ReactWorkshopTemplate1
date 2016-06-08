import React from 'react';

import '../../sass/home.scss';

const data = {
    title: 'Search',
    searchButtonText: 'Search',
    searchFieldPlaceholder: 'some search',
    moreButtonText: 'More',
    results: [
        { id: 1, link: '/somelink1', content: 'Some result 1' },
        { id: 2, link: '/somelink2', content: 'Some result 2' },
        { id: 3, link: '/somelin3', content: 'Some result 3' }
    ]
};


const SearchResult = ({ link, resultContent }) => (
    <li><a href={link} className="search-result">{resultContent}</a></li>
);

const SearchResults = ({ results }) => {
    const resultItems = results.map(result => (
        <SearchResult key={result.id} link={result.link} resultContent={result.content} />
    ));

    return (
        <ul className="search-results">
            {resultItems}
        </ul>
    );
};

const Home = () => (
    <div className="search">
        <h1>{data.title}</h1>
        <div className="search-bar">
            <form>
                <input type="text" placeholder={data.searchFieldPlaceholder}/>
                <button>{data.searchButtonText}</button>
            </form>
        </div>
        <SearchResults results={data.results} />
        <a href="" className="search-load-more">{data.moreButtonText}</a>
    </div>
);

export default Home;
