import React from "react";

class ImageList extends React.Component {

    componentDidUpdate() {
        console.log(this.props.images)
    }

    render() {
        //uses "destructuring" to select certain properties of each element of
        //the array, which are objects
        const img_thumbnails = this.props.images.map(({id, urls, alt_description}) =>
            <img key={id} src={urls.thumb} alt={alt_description}/>
        )

        return <div>{img_thumbnails}</div>
    }
}


export default ImageList;
