import styles from './UserList.module.css';
import UserItem from './UserItem';

const UserList = (props) => {
  return (
    <ul className={`${styles['user-list']}`}>
      {props.users.map((user) => (
        <UserItem key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};
export default UserList;
