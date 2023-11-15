import PropTypes from 'prop-types';
import styles from '../Content.module.css';

function Product({image, discount, title, price, state}) {
    return (
        <div className={styles.item}>
            <div className={styles.image}><img alt='product' src={image}/></div>
            <div>
                <div className={styles.prices}>
                    <div className={styles.price}><b>{price} P</b></div>
                    {discount && <div className={styles.discount}>{discount} P</div>}
                </div>
                <div className={styles.title}>{title}</div>
                <div className={`${styles.button} ${state ? styles.button_inactive : styles.button_active}`}>
                    <a href='/'>
                        {
                            state ?
                                state === 'cart' ?
                                    'В корзине' :
                                    'Нет в наличии' :
                                'Купить'
                        }
                    </a>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    image: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.oneOf([PropTypes.number, null]),
    title: PropTypes.string,
    state: PropTypes.oneOf(['', 'cart', 'outOfStock']),
}

export default Product;