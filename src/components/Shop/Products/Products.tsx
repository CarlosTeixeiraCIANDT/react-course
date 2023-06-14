import { Item } from "../../../model/item";
import { ProductItem } from "./ProductItem/ProductItem";

import styles from "./Products.module.css";

const DUMMY_DATA: Item[] = [
    {
        id: 1,
        title: "Product 1",
        description: "desc prod",
        price: 6,
    },
    {
        id: 2,
        title: "Product 2",
        description: "desc prod",
        price: 12,
    },
];

const Products: React.FC = () => {
    return (
        <section className={styles.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_DATA.map((product) => (
                    <ProductItem item={product} key={product.id} />
                ))}
            </ul>
        </section>
    );
};

export { Products };
