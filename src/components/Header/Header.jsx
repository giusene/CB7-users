// eslint-disable-next-line react/prop-types
const Header = ({ titolo, setModal }) => {
  const login = () => {
    setModal({
      login: "login",
    });
  };

  return (
    <div>
      <p>{titolo}</p>
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default Header;
