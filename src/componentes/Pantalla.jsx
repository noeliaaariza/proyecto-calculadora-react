import PropTypes from "prop-types";
import "../css/Pantalla.css";

const Pantalla = ({ input }) => <div className="input">{input}</div>;

Pantalla.propTypes = {
  input: PropTypes.string,
};

export default Pantalla;
