import PropTypes from "prop-types";
import "../css/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

Boton.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
};

export default Boton;
