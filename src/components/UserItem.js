import Card from './UI/Card';
import styles from './UserItem.module.css';

function UserItem(props) {
  return (
    <li className={styles['user-item']}>
      <Card className={styles['user-description']}>
        <h3>
          {props.name} - {props.age}
        </h3>
      </Card>
    </li>
  );
}

export default UserItem;
