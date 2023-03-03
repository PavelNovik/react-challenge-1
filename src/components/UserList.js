import Card from './UI/Card';
import styles from './UserList.module.css';

const UserList = () => {
  return (
    <Card>
      <div className={`${styles['user-list']}`}>Hello from userList</div>
    </Card>
  );
};
export default UserList;
