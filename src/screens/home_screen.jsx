import { CategoryCard } from "../components/categories/category_card/category_card";
import { CategoryWidget } from "../components/categories/category_widget/category_widget";
import { Header } from "../components/header/header";
import { ProductCard } from "../components/products/product_card/product_card";

export const HomeScreen = () => {
    return (
        <div>
        <Header/>
        <CategoryWidget></CategoryWidget>
        <ProductCard
        title= "PALMERA RAPHIS"
        img= "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/568/884/products/lucas-plantas00891-8d3713440ec54af2e716483925373019-1024-1024.webp"
        desc= "Altura: 1,50 M aprox"
        price={45000}
        category= "Exterior"
        />

        </div>
    )
}