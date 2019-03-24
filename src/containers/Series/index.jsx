import React, { Component } from "react";
import Axios from "axios";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  onHandleInputChange = async e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    const { data: series } = await Axios.get(
      `http://api.tvmaze.com/search/shows?q=${e.target.value}`
    );
    this.setState({ series, isFetching: false });
    console.log(series);
  };
  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <input
          className="mb-3"
          value={seriesName}
          type="text"
          onChange={this.onHandleInputChange}
        />
        {series.length === 0 && seriesName.trim() === "" && (
          <p className="">Please Enter Your Favourite TV Series!</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV Series Found With That Name . Please Try With Valid Name</p>
        )}
        {isFetching && <Loader />}
        <SeriesList list={series} />
      </div>
    );
  }
}

export default Series;
