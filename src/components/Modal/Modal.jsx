import "./index.css";
const Modal = ({ data, setModal }) => {
  return (
    <div className="Modal">
      <button onClick={() => setModal(null)}>X</button>
      <h2>Details:</h2>
      <p>name: {data.name}</p>
      <p>username: {data.username}</p>
      <p>phone: {data.phone}</p>
      <p>website: {data.website}</p>
    </div>
  );
};

export default Modal;
