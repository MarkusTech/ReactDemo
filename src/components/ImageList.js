import React from "react";
import "./ImageList.css"
import ImageCard from "./ImageCard";

const ImageList = ( props ) => {
    const images = props.images.map(
        (image) => {
            return <ImageCard key={image.id} image={image}/>
        }
    );
    return (
        <div className="container">
            <div className="image-list">
                {/* <img src="https://placeimg.com/640/480/nature"></img>
                    <img src="https://placeimg.com/640/480/animals"></img>
                    <img src="https://placeimg.com/640/480/people"></img>
                    <img src="https://placeimg.com/640/480/arch"></img> */}
                {/* ================================================== */}

                {/* to display the images output */}
                {images}


            </div>
        </div>
    );
}

export default ImageList;