// packmode:expert

ServerEvents.recipes(event => {
    const id_prefix = 'crowpack:expert/create/pressing/'
    const recipes = [
        {
            output: 'minecraft:paper',
            inputs: ['kubejs:wood_pulp'],
            id: `${id_prefix}paper`
        }
    ]

    recipes.forEach(recipe => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id)
    })
})