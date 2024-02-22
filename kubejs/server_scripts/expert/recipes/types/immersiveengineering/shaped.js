// packmode:expert

ServerEvents.recipes(event => {
    const recipes = [
        {
            output: 'immersiveengineering:hammer',
            pattern: [
                ' CS',
                ' RC',
                'R  ',
            ],
            key: {
                C: '#forge:cobblestone',
                S: '#forge:string',
                R: '#forge:rods/wooden',
            },
            id: 'immersiveengineering:crafting/hammer'
        }
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})