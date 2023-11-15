import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
                <li className={styles.item}><a href='/'>Гаджеты и аксессуары</a></li>
                <hr className={styles.line}/>
                <li className={styles.item}><a href='/'>Бытовая техника</a></li>
                <hr className={styles.line}/>
                <li className={styles.item}><a href='/'>Прочее</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;