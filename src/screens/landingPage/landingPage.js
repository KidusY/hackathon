import React, { useState } from 'react'
import Header from '../../components/header/header';
import Results from '../../components/results/results';
import spinner from '../../assets/1481 (2).gif'
import './landingPage-style.css'
function LandingPage() {
    const [books, setBooks] = useState(null);

    const [isLoading, setIsloading] = useState(false);


    const getBookInfo = (bookInfo) => {
        setBooks(bookInfo);
    }


    return (
        <div className="container">
            <Header getBookInfo={getBookInfo} setIsloading={setIsloading}/>

            {
                isLoading ? <img src={spinner} alt="spinner"  className="spinner"/> :
                    <React.Fragment>
                        {
                            books &&
                            <div className='d-flex flex-wrap container justify-content-evenly'>
                                {
                                    books.items.map((book, i) => <Results key={i} {...book} allSearchedBooks={books} />)

                                }
                            </div>

                        }
                    </React.Fragment>
            }







        </div>
    )
}

export default LandingPage;
