import React from 'react'
import './searchBar-Style.css';

import axios from 'axios';
function SearchBar(props) {
    const API_KEY = process.env.REACT_APP_API_KEY

    const searchBusinesses = (e) => {
        props.setIsloading(true);
        e.preventDefault();
        const { search } = e.target;
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search.value}&key=${API_KEY}`).then((res) => {

            props.setIsloading(false);
            props.getBookInfo(res.data);

        }).catch(err => {
            props.setIsloading(false);
            console.log(err);
        })
    }


    return (
        <div>
            <form className="input-group mb-3" onSubmit={searchBusinesses}>

                <input type="text" name="search" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Search" />

                <button type="submit" className="input-group-text" id="inputGroup-sizing-default"><i className="fas fa-search"></i></button>
            </form>
        </div>
    )
}

export default SearchBar;
