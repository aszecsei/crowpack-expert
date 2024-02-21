ServerEvents.recipes(event => {
    const id_prefix = 'snowpocalypse:base/recipes/replace_input/'

    const recipes = [
        {
            replaceTarget: { id: 'entangled:block' },
            toReplace: 'minecraft:chest',
            replaceWith: '#forge:chests/wooden'
        },
        {
            replaceTarget: {},
            toReplace: 'thermal:cinnabar',
            replaceWith: '#forge:gems/cinnabar'
        },
        {
            replaceTarget: {},
            toReplace: 'thermal:sulfur',
            replaceWith: '#forge:gems/sulfur'
        },
        {
            replaceTarget: {},
            toReplace: 'thermal:apatite',
            replaceWith: '#forge:gems/apatite'
        },
        {
            replaceTarget: {},
            toReplace: 'thermal:niter',
            replaceWith: '#forge:gems/niter'
        },
        {
            replaceTarget: {},
            toReplace: 'thermal:bitumen',
            replaceWith: '#forge:gems/bitumen'
        },
        {
            replaceTarget: {},
            toReplace: 'thermal:coal_coke',
            replaceWith: '#forge:gems/coal_coke'
        },
        {
            replaceTarget: {},
            toReplace: 'immersiveengineering:slag',
            replaceWith: '#forge:slag'
        },
        {
            replaceTarget: {},
            toReplace: 'thermal:slag',
            replaceWith: '#forge:slag'
        },
        {
            replaceTarget: {},
            toReplace: 'farmersdelight:fried_egg',
            replaceWith: '#forge:cooked_eggs'
        },
        {
            replaceTarget: {},
            toReplace: 'farmersdelight:brown_mushroom_colony',
            replaceWith: '#forge:mushroom_colonies/brown'
        },
        {
            replaceTarget: {},
            toReplace: 'farmersdelight:red_mushroom_colony',
            replaceWith: '#forge:mushroom_colonies/red'
        },
        {
            replaceTarget: {},
            toReplace: 'farmersdelight:wheat_dough',
            replaceWith: '#forge:doughs'
        },
        {
            replaceTarget: {},
            toReplace: 'minecraft:iron_ore',
            replaceWith: '#forge:ores/iron'
        },
        {
            replaceTarget: {},
            toReplace: 'minecraft:gold_ore',
            replaceWith: '#forge:ores/gold'
        },
        {
            replaceTarget: {},
            toReplace: 'pedestals:dustflour',
            replaceWith: '#forge:dusts/flour'
        },
        {
            replaceTarget: {},
            toReplace: 'minecraft:nether_bricks',
            replaceWith: '#forge:netherbricks'
        },
        {
            replaceTarget: {type: 'minecraft:crafting_shapeless'},
            toReplace: 'minecraft:stone',
            replaceWith: '#forge:stone'
        },
        {
            replaceTarget: {type: 'minecraft:crafting_shaped'},
            toReplace: 'minecraft:netherrack',
            replaceWith: '#forge:netherrack'
        },
    ]

    sharedDies.forEach((die) => {
        var dieTag = `#thermal:crafting/dies/${die.thermalName}`;
        event.replaceInput({}, `immersiveengineering:mold_${die.immersiveEngineeringName}`, dieTag);
        event.replaceInput({}, `thermal:press_${die.thermalName}_die`, dieTag);
    })
    thermalDies.forEach((dieName) => {
        event.replaceInput({}, `thermal:press_${dieName}_die`, `#thermal:crafting/dies/${dieName}`);
    })
    immersiveEngineeringDies.forEach((dieName) => {
        event.replaceInput({}, `immersiveengineering:mold_${dieName}`, `#thermal:crafting/dies/${dieName}`);
    })

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    })
})