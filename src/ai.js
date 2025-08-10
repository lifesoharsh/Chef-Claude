export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const generatedRecipeMarkdown = await fetch("/api/recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: ingredientsArr })
        })
        const data = await generatedRecipeMarkdown.json()
        return data.recipe
    } catch (err) {
        console.error(err.message)
    }
}