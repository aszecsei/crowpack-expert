// packmode:expert

ServerEvents.recipes(event => {
    const id_prefix = 'crowpack:expert/minecraft/shapeless/'
    const recipes = [
        
    ]

    recipes.forEach(recipe => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
    })
})