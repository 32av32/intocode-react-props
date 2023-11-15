import styles from './Content.module.css';
import Product from "./Product";

function Content() {
    return (
        <div className={styles.container}>
            <Product image={'https://ishop124.ru/wp-content/uploads/2022/10/macbook-pro-spacegray1.jpg'}
                     price={97000}
                     discount={100000}
                     title={'MacBook'}
                     state={''} />
            <Product image={'https://img.mvideo.ru/Pdb/30052890b.jpg'}
                     price={70000}
                     title={'IPhone 12'}
                     state={'cart'} />
            <Product image={'https://c.dns-shop.ru/thumb/st1/fit/300/300/612527e6ea84f851072a8830583924ea/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg'}
                     price={90000}
                     discount={110000}
                     title={'Samsung s23'}
                     state={'outOfStock'} />
            <Product image={'https://ishop124.ru/wp-content/uploads/2022/10/macbook-pro-spacegray1.jpg'}
                     price={97000}
                     discount={100000}
                     title={'MacBook'}
                     state={''} />
            <Product image={'https://ishop124.ru/wp-content/uploads/2022/10/macbook-pro-spacegray1.jpg'}
                     price={97000}
                     discount={100000}
                     title={'MacBook'}
                     state={''} />
            <Product image={'https://ishop124.ru/wp-content/uploads/2022/10/macbook-pro-spacegray1.jpg'}
                     price={97000}
                     discount={100000}
                     title={'MacBook'}
                     state={''} />
        </div>
    );
}

export default Content;