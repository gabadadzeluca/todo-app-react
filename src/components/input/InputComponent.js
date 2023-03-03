import {useState} from 'react';
import styles from './InputComponent.module.css';

export default function InputComponent(props) {
  
  const[inputValue,setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      props.onClick(inputValue.trim());
      setInputValue('');
    }
  }
  
  return (
    <div className={styles.inputContainer}>
        <input type="text" placeholder="Note" value={inputValue} onChange={handleInputChange} className={styles.noteInput}/>
        <button className={styles.addTaskBtn} 
          onClick={handleButtonClick}
        >
        </button>
    </div>
  )
}
