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
        },
        {
            output: 'minecraft:blast_furnace',
            pattern: [
                'DDD',
                'DBD',
                'ACA',
            ],
            key: {
                A: 'minecraft:smooth_stone',
                B: 'minecraft:furnace',
                C: '#forge:coal_coke',
                D: '#minecraft:terracotta',
            },
            id: 'minecraft:blast_furnace'
        },
        {
            output: 'minecraft:piston',
            pattern: [
                'AAA',
                'BCB',
                'ADA',
            ],
            key: {
                A: '#forge:treated_wood_slab',
                B: '#forge:cobblestone',
                C: '#forge:dusts/redstone',
                D: 'create:piston_extension_pole',
            },
            id: 'minecraft:piston'
        },
        {
            output: 'minecraft:observer',
            pattern: [
                'BBB',
                'ACA',
                'BBB'
            ],
            key: {
                A: 'create:andesite_alloy',
                B: '#forge:treated_wood_slab',
                C: 'minecraft:comparator',
            },
            id: 'minecraft:observer'
        },
        {
            output: 'minecraft:compass',
            pattern: [
                'ABA',
                'CDC',
                'ACA',
            ],
            key: {
                A: '#forge:dyes/black',
                B: '#forge:ingots/iron',
                C: '#forge:ingots/tin',
                D: '#forge:dusts/redstone'
            },
            id: 'minecraft:compass'
        }
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })

})