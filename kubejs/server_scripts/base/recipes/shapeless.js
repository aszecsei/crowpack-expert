ServerEvents.recipes(event => {
    const id_prefix = 'snowpocalypse:base/shapeless/'
    const recipes = [
        { output: 'minecraft:sticky_piston', inputs: ['minecraft:piston', '#forge:slimeballs'] },
        { output: 'minecraft:flint', inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'] },
        { output: 'minecraft:chest', inputs: ['#forge:chests/wooden'] },
    ]

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : fallback_id(event.shapeless(recipe.output, recipe.inputs), id_prefix);
    })
})