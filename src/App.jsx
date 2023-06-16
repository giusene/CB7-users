import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import { users } from "./data/users.js";
import Modal from "./components/Modal";
import Img from "./assets/images.jpeg";

function App() {
  const [modal, setModal] = useState(null);

  return (
    <div>
      <Header setModal={setModal} titolo="Header" />
      {modal && <Modal data={modal} setModal={setModal} />}
      <UsersList listaUtenti={users} setModal={setModal} />
      <img src={Img} />
    </div>
  );
}

export default App;
