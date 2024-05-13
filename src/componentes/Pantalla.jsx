import PropTypes from "prop-types";
import "../css/Pantalla.css";

const Pantalla = ({ input }) => <div className="input">{input}</div>;

Pantalla.propTypes = {
  input: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pantalla;
