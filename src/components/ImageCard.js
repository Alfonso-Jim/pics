import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10) + 11;

    this.setState({ spans });
  };

  render() {
    const {
      alt_description,
      created_at,
      description,
      likes,
      urls,
    } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <div className="ui card">
          <div className="image">
            <img ref={this.imageRef} alt={description} src={urls.regular} />
          </div>

          <div className="content">
            <div className="description">{alt_description}</div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Posted on: {created_at.slice(0, -15)}
            </span>
            <span>
              <i className="red heart icon"></i>
              {likes} likes
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
