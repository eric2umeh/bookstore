import PropTypes from 'prop-types';

const Button = ({
  type, value, handleClick, children, dataId,
}) => (
  <button type={type ? 'submit' : 'button'} value={value} data-id={dataId} onClick={handleClick}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
