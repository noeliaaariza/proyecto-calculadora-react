import PropTypes from "prop-types";
import "../css/BotonClear.css";

const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.handleClear}>
    {props.children}
  </div>
);

BotonClear.propTypes = {
  children: PropTypes.node,
  handleClear: PropTypes.func.isRequired,
};

export default BotonClear;
