import PropTypes from 'prop-types';

const Button = ({
  type, value, handleClick, children,
}) => (
  <button type={type ? 'submit' : 'button'} value={value} onClick={handleClick}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
