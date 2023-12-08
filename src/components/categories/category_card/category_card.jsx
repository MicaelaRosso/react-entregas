import { BorderDecoration, CardCategoria } from "./styles"

export const CategoryCard = ({img, title, category}) => {
    return (
        <CardCategoria
        whileTap={{scale: 1.30}}>
            <img src={img} alt={category} />
            <h2>{title}</h2>
            <BorderDecoration></BorderDecoration>
        </CardCategoria>
    )
}