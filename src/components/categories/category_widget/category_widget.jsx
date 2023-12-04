/*ES EL COMPONENTE QUE MAPEA A TODAS LAS CARDS*/
import { categories } from "../../../data/categories"
import { CategoryCard } from "../category_card/category_card"
import { CategoriasWrapper } from "./styles"
import { CategoriasContainer } from "./styles"

export const CategoryWidget = () => {
    return (
        <CategoriasWrapper>
            <h2>Categorias</h2>
            <CategoriasContainer>
                {
                    categories.map((item) =><CategoryCard key={item.id} {...item}/>)
                }
            </CategoriasContainer>
        </CategoriasWrapper>
    )
} 