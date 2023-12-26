import Proptypes from "prop-types"
import styles from "./Button.module.css";
function Button ({text, onClick}){
    return (
        <button
        className={styles.btn}
        onClick = {onClick}
        >{text}</button>
    )
}

Button.propTypes = {
    text: Proptypes.string.isRequired,
} 
export default Button;