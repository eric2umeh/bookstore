import PropTypes from 'prop-types';

const Button = ({ type, value, handleClick }) => (
  <input type={type ?? 'button'} value={value} onClick={handleClick} />
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
