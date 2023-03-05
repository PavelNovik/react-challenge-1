import styles from './Form.module.css';

const onSubmitHandler = (event) => {
  event.preventDefault();
};

const Form = () => {
  return (
    <form className={`${styles['user-form']}`} onSubmit={onSubmitHandler}>
      <div className={`${styles['form-input']}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={`${styles['form-input']}`}>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" min={0} step={1} />
      </div>
      <div className={`${styles['form-action']}`}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};
export default Form;
