import { useState } from "react";

function Navigation() {
  const [PaginaActual, setPaginaActual] = useState("");

  const cambiarValor = (valor) => {
    setPaginaActual(valor);
  };

  return (
    <ul>
      <li onClick={() => cambiarValor("Inicio")}>Inicio</li>
      <li onClick={() => cambiarValor("Acerca de nosotros")}>
        Acerca de nosotros
      </li>
      <li onClick={() => cambiarValor("Contacto")}>Contacto</li>
      <div>
        {PaginaActual === "Inicio" && <h1>AAAAAAAAAAAAAAAAAAAA</h1> }
        {PaginaActual === "Acerca de nosotros" && <h1>BBBBBBBBBBBBBBBBBB</h1> }
        {PaginaActual === "Contacto" && <h1>CCCCCCCCCCCCCCCCCCC</h1> }
      </div>
    </ul>
  );
}

export default Navigation;
