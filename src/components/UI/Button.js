import styles from './Button.module.css';

function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export default Button;
