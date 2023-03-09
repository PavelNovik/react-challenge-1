import Card from './UI/Card';
import styles from './UserList.module.css';
import UserItem from './UserItem';

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card className={`${styles['user-list']}`}>
        <h2>No anybody</h2>
      </Card>
    );
  }
  return (
    <Card className={`${styles['user-list']}`}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
