import React, { useState } from 'react';
import './results-style.css';
import Modal from '../modalWithInfo/modalWithInfo'
function Results(props) {
    const [show, setShow] = useState(false);
    const [currentBookSelected, setCurrentBookSelected] = useState(null);
    const bookInfo = { ...props.volumeInfo, ...props.searchInfo }
    return (
        <React.Fragment>

            <div className="resultsCard" onClick={() => {
                setShow(true);
                setCurrentBookSelected(bookInfo)
            }}>
                <img className="img-fluid" src={props.volumeInfo?.imageLinks?.thumbnail || "https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg"} alt={props.volumeInfo.title} /><br />
                <p className="text-wrap fs-4 ">{props.volumeInfo?.title || "No Title"}</p>



            </div>
            {
                currentBookSelected && <Modal show={show} setShow={setShow} bookInfo={currentBookSelected} allSearchedBooks={props.allSearchedBooks} setCurrentBookSelected={setCurrentBookSelected} />
            }

        </React.Fragment>


    )
}

export default Results
