import Card from './UI/Card';
import styles from './UserItem.module.css';

function UserItem(props) {
  return (
    <li className={styles['user-item']}>
      <Card>
        <div>
          <h2>
            {props.name} - {props.age}
          </h2>
        </div>
      </Card>
    </li>
  );
}

export default UserItem;
