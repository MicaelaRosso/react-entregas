import { CategoryCard } from "../../components/categories/category_card/category_card";
import { CategoryWidget } from "../../components/categories/category_widget/category_widget";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";
import { ProductCard } from "../../components/products/product_card/product_card";
import { ProductWidget } from "../../components/products/product_widget/product_widget";
import { HomeLayout } from "../../layout/home/home_layout";

export const HomeScreen = () => {
    return (
        <div>
        <Navbar/>
        <HomeLayout/>
        <Header/>
       { /*<CategoryWidget /> */}
       { /*<ProductCard/> */}
       { /*<ProductWidget/> */}
        <Footer/>
       

        </div>
    );
};