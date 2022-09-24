import dashboardImg from "../../assets/dashboard.png";
import configImg from "../../assets/config.svg";
import vector from "../../assets/Vector.svg";
import vector1 from "../../assets/Vector-1.svg";
import vector2 from "../../assets/Vector-2.svg";

import "./styles.css";

export function Dashboard() {
  return (
    <div className="dashContainer">
      <nav className="navBar">
        <div className="navHeader">
          <img src={dashboardImg} alt="Workflow" />
        </div>
        <div className="containerOptions">
          <div className="options">
            <img src={configImg} alt="" />
            <p>Configurações</p>
          </div>
          <div className="options">
            <img src={vector} alt="" />
            <p>Dossiê</p>
          </div>
        </div>
      </nav>
      <section className="content"></section>
    </div>
  );
}
