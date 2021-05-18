import React from 'react';
import './header-style.css';
import SearchBar from '../searchBar/searchBar'

function Header(props) {
    return (
        <div>
            <div >
                <h1 className="Heading"> BookFinder </h1>
                <SearchBar getBookInfo={props.getBookInfo} setIsloading={props.setIsloading}/>
            </div>

        </div>
    )
}

export default Header;
