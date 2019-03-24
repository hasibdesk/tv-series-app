import React from "react";
import { Link } from "react-router-dom";

const SeriesList = props => {
  return (
    <div>
      <ul>
        {props.list.map(series => (
          <li key={series.show.id}>
            <Link to={`series/${series.show.id}`}>{series.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
