import { useState, useEffect } from 'react';
import styles from './Header.module.css';


export default function HeaderComponent(props){
    const [date, setTime] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    
    return(
        <div className={styles.header}>
            <div className={styles.dateAndTimeDiv}>
                <p className={styles.date}>{dayOfWeek} {dayOfMonth}</p>
                <p className={styles.time}>{formattedTime}</p>
            </div>
        </div>
    )
}
