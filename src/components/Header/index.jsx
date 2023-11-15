import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.title}><a href='/'>Intocode Coding Shopcamp</a></div>
            <div className={styles.cart}><a href='/'><img alt='cart' src='./assets/cart.svg'/></a></div>
        </div>
    );
}

export default Header;