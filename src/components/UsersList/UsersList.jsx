import UserCard from "../UserCard";

const UsersList = ({ listaUtenti, setModal }) => {
  return (
    <div>
      {listaUtenti.map(user => {
        return <UserCard data={user} key={user.id} setModal={setModal} />;
      })}
    </div>
  );
};

export default UsersList;
