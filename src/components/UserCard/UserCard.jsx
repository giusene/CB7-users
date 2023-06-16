import "./index.css";
import { useState } from "react";

const UserCard = ({ data, setModal }) => {
  const [test, setTest] = useState(true);

  const changeStatus = () => {
    setTest(prev => !prev);
  };

  return (
    <div className="UserCard">
      <button onClick={() => changeStatus()}>Attiva / Disattiva</button>

      <div className={`dot ${test ? "green" : "red"}`}></div>

      {/* {test ? <div className="dot green"></div> : <div className="dot red"></div>} */}

      {test ? <p>Abilitato</p> : <p>Disabilitato</p>}
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <button onClick={() => setModal(data)}>Details</button>
    </div>
  );
};

export default UserCard;
