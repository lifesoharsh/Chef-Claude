function IngredientsList(props) {
    const ingredientsList = props.ingredients.map(item => <li className="list-item" key={item}>{item}</li>)

    return (
        <section>
            <h2>Ingredients at hand:</h2>
            <ul className="ingredients-list">
                {ingredientsList}
            </ul>

            {props.ingredients.length > 3 && <div className="get-recipe">
                <h4>Ready for a recipe?</h4>
                <div className="get-recipe-text">
                    <p>Generate a recipe from your list of ingredients.</p>
                    <button onClick={props.getRecipe} id="get-recipe-btn">Get a recipe!</button>
                </div>

            </div>}

        </section>
    )
}

export default IngredientsList