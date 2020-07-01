import React from 'react';

class Stars extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      starPercentage: '0',
      averageRating: 0,
      currentProduct: 5,
    };
  }

  componentDidMount() {
    const { currentProduct } = this.state;
    fetch(`http://52.26.193.201:3000/reviews/${currentProduct}/list`)
      .then((res) => res.json())
      .then((data) => this.setState({
        reviews: data.results,
      }))
      .then(() => this.averageStarRating());
  }

  averageStarRating() {
    const { reviews } = this.state;
    let ratingSum = 0;
    reviews.map((review) => {
      ratingSum += review.rating;
    });
    if (ratingSum) {
      const averageRating = ratingSum / reviews.length;
      const starPercentage = (averageRating / 5) * 100;
      this.setState({
        starPercentage,
        averageRating,
      });
    }
  }

  render() {
    const { starPercentage, averageRating } = this.state;
    const widthStyle = {
      width: `${starPercentage}%`,
    };
    return (
      <div className="starsParent">
        <h6 className="mb-0 lead">
          {(averageRating).toFixed(1)}
          {' '}
          Stars
        </h6>
        <div className="stars-outer">
          <div className="stars-inner" style={widthStyle} />
        </div>
        <span className="number-rating" />
      </div>
    );
  }
}

export default Stars;
