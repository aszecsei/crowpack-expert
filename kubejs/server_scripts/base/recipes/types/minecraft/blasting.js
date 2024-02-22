ServerEvents.recipes(event => {
    const id_prefix = 'crowpack:base/minecraft/blasting/'
    const recipes = [
        {
            input: '#forge:ores/netherite',
            output: Item.of('minecraft:netherite_scrap'),
            xp: 2.0,
            id: `${id_prefix}netherite_scrap`
        }
    ]
    recipes.forEach(recipe => {
        const re = event.blasting(recipe.output, recipe.input)
        if (recipe.xp) {
            re = re.xp(recipe.xp)
        }
        re = re.id(recipe.id)
    })
})