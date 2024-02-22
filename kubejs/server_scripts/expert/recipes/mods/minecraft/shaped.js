// packmode:expert

ServerEvents.recipes(event => {

    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: [
                'AAA',
                'ABA',
                'AAA',
            ],
            key: {
                A: '#forge:cobblestone',
                B: '#minecraft:coals'
            },
            id: 'minecraft:furnace'
        }
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })

})