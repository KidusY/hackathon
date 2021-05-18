import React from 'react';
import './sliderComp-Style.css';


function SliderComponent({ bookInfo, setCurrentBookSelected}) {

    return (
        <div className="m-2 sliderComp" onClick={()=>{
            setCurrentBookSelected({ ...bookInfo.volumeInfo, ...bookInfo.searchInfo})
        }}>
            <img className="img-fluid" src={bookInfo?.volumeInfo?.imageLinks?.thumbnail || "https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg"} alt={bookInfo.title} /><br />
            <h4>{bookInfo.volumeInfo.title}</h4>
        </div>
    )
}

export default SliderComponent;
