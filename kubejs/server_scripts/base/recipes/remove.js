ServerEvents.recipes(event => {
    const recipes = [
        { type: 'create:cutting', input: '#minecraft:logs' },
        { type: 'immersiveengineering:sawmill', input: '#minecraft:logs' },
        
        { type: 'mekanism:combining' },
        { type: 'minecraft:smelting', output: 'minecraft:obsidian' },
        { type: 'minecraft:blasting', output: 'minecraft:obsidian' },

        { type: 'minecraft:smelting', input: '#forge:ores' },
        { type: 'minecraft:blasting', input: '#forge:ores' },

        { type: 'minecraft:smelting', input: '#farmersdelight:tools/knives' },
        { type: 'minecraft:blasting', input: '#farmersdelight:tools/knives' },

        { type: 'minecraft:crafting_shaped', output: '#forge:gears' },

        { type: 'industrialforegoing:fluid_extractor' },
        { type: 'thermal:tree_extractor' },
        { type: 'thermal:compression_fuel' },

        { output: 'mekanism:combiner' },
        { output: 'mekanism:basic_combining_factory' },
        { output: 'mekanism:advanced_combining_factory' },
        { output: 'mekanism:elite_combining_factory' },
        { output: 'mekanism:ultimate_combining_factory' },

        { output: 'thermal:bamboo_block' },

        { id: /ars_nouveau:crush.*dye/ },
        { id: 'bloodmagic:smelting/ingot_netherite_scrap' },
        { id: 'bloodmagic:alchemytable/gunpowder' },

        { mod: 'occultism', 'type': 'occultism:miner' },
        { type: 'thermal:insolator' },
        { type: 'immersiveengineering:cloche' },

        { mod: 'gateways' },
    ]

    recipes.forEach(recipe => {
        event.remove(recipe)
    })
})