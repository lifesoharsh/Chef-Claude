import { useState } from "react"
import IngredientsList from "./IngredientsList"
import HFRecipe from "./HFRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    async function getRecipe() {
        const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients)
        if (generatedRecipeMarkdown) {
            setRecipe(generatedRecipeMarkdown)
        }
    }

    function mapping(formData) {
        const newIng = formData.get("ing-name").trim()
        if (newIng) setIngredients(prevIngredients => [...prevIngredients, newIng])
    }

    return (
        <main>
            <form action={mapping} className="add-ingredient-form">
                <input id="ing-name" name="ing-name" type="text" placeholder="eg. Oregano"></input>
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
            {recipe && <HFRecipe recipe={recipe}/>}
        </main>
    )
}