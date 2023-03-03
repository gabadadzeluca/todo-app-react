import { formatDistanceToNow, parseISO } from 'date-fns';
import TaskComponent from './TaskComponent';
import styles from './Task.module.css';

export default function TaskContainer(props) {
  const {tasks, removeTask} = props;
  return (
    <div className={styles.taskList}>
      { 
        tasks.map(object=>{
          const formattedDate = formatDistanceToNow(parseISO(object.date), { addSuffix: true });
          return (
            <TaskComponent task={object.task} date={formattedDate} taskObj={object} removeTask={removeTask} />
          )
        })
      }     
    </div>
  )
}
