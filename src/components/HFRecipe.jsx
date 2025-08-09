import {marked} from "marked"

export default function HFRecipe({ recipe }) {
    return (
        <section className="recipe">
            <h2>Recommended Recipe</h2>
            <div dangerouslySetInnerHTML={{ __html: marked.parse(recipe) }} />
        </section>
    )
}
