// packmode:expert

ServerEvents.recipes(event => {
    const id_prefix = 'crowpack:expert/create/mixing/'
    const recipes = [
        {
            inputs: ['#forge:dusts/wood', Fluid.of('minecraft:water', 100)],
            output: Item.of('kubejs:wood_pulp', 2),
            id: `${id_prefix}wood_pulp`
        }
    ]

    recipes.forEach(recipe => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id)

        if (recipe.heated) {
            re.heated()
        } else if (recipe.superheated) {
            re.superheated()
        } else {

        }
    })
})