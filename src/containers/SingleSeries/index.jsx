import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/Loader";

class SingleSeries extends Component {
  state = {
    show: null
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data: show } = await Axios.get(
      `http://api.tvmaze.com/shows/${id}?embed=episodes`
    );
    this.setState({ show });
  }
  render() {
    const { show } = this.state;
    return (
      <div className="container">
        {show === null && <Loader />}
        {show !== null && (
          <div className="row">
            <div className="col-3 offset-md-3">
              <img src={show.image.medium} alt="" />
            </div>
            <div className="col-4 text-left">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Name</strong>: {show.name}
                </li>
                <li className="list-group-item">
                  <strong>Premiered</strong>: {show.premiered}
                </li>
                <li className="list-group-item">
                  <strong>Rating</strong>: {show.rating.average}
                </li>
                <li className="list-group-item">
                  <strong>Episodes</strong>: {show._embedded.episodes.length}
                </li>
                <li className="list-group-item">
                  <strong>Language</strong>: {show.language}
                </li>
                <li className="list-group-item">
                  <strong>Episodes</strong>: {show._embedded.episodes.length}
                </li>
              </ul>

              <Link to="/">
                <p className="text-right">{"<<"} Back to Homepage</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
