import styles from './Form.module.css';
import Card from './UI/Card';
const Form = () => {
  return (
    <Card>
      <form className={`${styles['user-form']}`}>
        <div className="form-field">
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-input">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
          </div>
          <div className="form-action">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </Card>
  );
};
export default Form;
