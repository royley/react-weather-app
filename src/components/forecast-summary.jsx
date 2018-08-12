import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastSummary = props => (
  <div>
    <div className="forecast-summary__date">
      <span>
        {moment(props.date).format('ddd Do MMM')}
      </span>
    </div>
    <div className="forecast-summary__temperature">
      <span>
        {props.temperature}
      </span>
    </div>
    <div className="forecast-summary__description">
      <span>
        {props.description}
      </span>
    </div>
    <div className="forecast-summary__icon">
      <span>
        {props.icon}
      </span>
    </div>
  </div>
  )

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default ForecastSummary
