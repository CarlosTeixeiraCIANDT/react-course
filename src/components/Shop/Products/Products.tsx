import { ProductItem } from "./ProductItem/ProductItem";

import styles from "./Products.module.css";

const Products: React.FC = () => {
    return (
        <section className={styles.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                <ProductItem
                    item={{
                        title: "Test",
                        price: 6,
                        description: "This is a first product - amazing!",
                    }}
                />
            </ul>
        </section>
    );
};

export { Products };
