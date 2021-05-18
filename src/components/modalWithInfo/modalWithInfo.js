import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom'
import SliderComponent from '../sliderComponent/sliderComponent'

import './modalWithInfo-style.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function ModalWithInfo({ show, setShow, bookInfo, allSearchedBooks, setCurrentBookSelected }) {
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Book Info
        </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody ">
                    <div className="d-flex">
                        <div>
                            <img className="img-fluid bookHeadingPic" src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title} /><br />
                            {bookInfo.authors.map((author, i) => <p key={i} className="text-wrap fs-4 ">{author}</p>)}

                        </div>
                        <div className="w-75 ml-2">
                            <h4>{bookInfo.title}</h4>
                            <h5>{bookInfo.subtitle}</h5>
                            <p>{bookInfo.textSnippet}</p>
                            <div className="d-flex justify-content-sm-between flex-wrap">
                                <div>
                                    <h6 className="mt-3">Categories</h6>
                                    {
                                        bookInfo.categories.map((category, i) => <p className="text-wrap" key={i}>{category} </p>)
                                    }
                                </div>
                                <div>
                                    <h6 className="mt-3">Publisher</h6>
                                    {
                                        <p className="text-wrap">{bookInfo.publisher}</p>
                                    }
                                </div>
                                <div>
                                    <h6 className="mt-3">Published Date</h6>
                                    {
                                        <p className="text-wrap">{bookInfo.publishedDate}</p>
                                    }
                                </div>
                            </div>
                            <a href={bookInfo.infoLink} target="_blank" rel="noreferrer">

                            <button className="mt-3 p-2 googlePlay">

                                Google Play <i class="fab fa-google-play"></i>

                            </button>
                            </a>





                        </div>

                    </div>

                    <h3> Related Books </h3>

                    <Slider {...settings}>
                        {
                            allSearchedBooks.items.map((book, i) => <SliderComponent key={i} bookInfo={book} setCurrentBookSelected={setCurrentBookSelected} />)



                        }


                    </Slider>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default ModalWithInfo
