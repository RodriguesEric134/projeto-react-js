import Cabecalho from "./components/Cabecalho";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import styles from "./app.module.css"

export default function App() {
  //Lista de links redes sociais

  let listaLinks = [<li>Github</li>, <li>X</li>, <li>Reddit</li>];

  return (
    <>
      <div className="container">
        <Cabecalho />

        <Outlet />
        <Footer listaProps={listaLinks} />
      </div>
    </>
  );
}
