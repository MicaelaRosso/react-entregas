import { CategoryCard } from "../components/categories/category_card/category_card";
import { CategoryWidget } from "../components/categories/category_widget/category_widget";
import { Header } from "../components/header/header";

export const HomeScreen = () => {
    return (
        <div>
        <Header/>
        <CategoryWidget></CategoryWidget>

        </div>
    )
}