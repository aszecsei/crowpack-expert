// packmode:expert

ServerEvents.recipes(event => {
    const recipes = [
        {
            output: 'entangled:block',
            pattern: [
                'ABC',
                'BDB',
                'CBA',
            ],
            key: {
                A: 'botania:corporea_spark',
                B: 'botania:red_string',
                C: 'botania:red_string_container',
                D: 'botania:corporea_spark_master'
            },
            id: 'entangled:block'
        },
        {
            output: 'entangled:item',
            pattern: [
                ' BA',
                ' CB',
                'D  ',
            ],
            key: {
                A: 'endersdelight:ender_shard',
                B: 'botania:red_string',
                C: 'botania:dreamwood_twig',
                D: 'botania:dreamwood_wand',
            },
            id: 'entangled:item'
        }
    ]
    
    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})