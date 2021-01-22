import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {

    componentDidUpdate() {
        console.log(this.props.images)
    }

    render() {
        //uses "destructuring" to select certain properties of each element of
        //the array, which are objects
        const img_thumbnails = this.props.images.map((image) =>
            <ImageCard key={image.id} image={image}/>
        )

        return <div className="image-list">{img_thumbnails}</div>
    }
}


export default ImageList;
