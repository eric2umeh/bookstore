import PropTypes from 'prop-types';

const ProgressBar = ({ percentage }) => {
  const calcValue = 220 - (220 * percentage) / 100;

  return (
    <div className="box">
      <div className="circle">
        <svg>
          <circle
            fill="none"
            strokeWidth="3"
            stroke="#e8e8e8"
            strokeDasharray="220"
            strokeDashoffset="0"
            cx="35"
            cy="35"
            r="35"
          />
          <circle
            fill="none"
            strokeWidth="3"
            stroke="#0290ff"
            strokeDasharray="220"
            strokeDashoffset={calcValue}
            cx="35"
            cy="35"
            r="35"
          />
        </svg>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
