import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        const currHeight = this.imageRef.current.clientHeight
        const spans = Math.ceil(currHeight / 10)

        this.setState({ spans: spans })
    }

    render() {
        //destructure image object here
        const { alt_description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;
