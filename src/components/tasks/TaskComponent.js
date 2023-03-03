import { useState } from 'react';
import styles from './Task.module.css';

export default function TaskComponent(props) {
    const{task, date, taskObj, removeTask} = props;
    const[checked, setChecked] = useState(false);
    
    const handleDelete = () =>{
        if(checked) removeTask(taskObj);
    }
    return (
    <div className={styles.taskContainer}>
        <div>
            <p className={styles.task}>{task}</p>
            <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.buttonsDiv}> {/* div for buttons */}
            <input type="checkbox" className={styles.checkbox} onClick={()=>setChecked(!checked)}/>
            <button className={styles.delete} onClick={handleDelete}></button>
        </div>
    </div>
  )
}
