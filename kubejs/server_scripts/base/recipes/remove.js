ServerEvents.recipes(event => {
    event.remove({ type: 'immersiveengineering:sawmill', input: '#minecraft:logs' })

    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' })
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' })

    event.remove({ type: 'minecraft:smelting', input: '#forge:ores' })
    event.remove({ type: 'minecraft:blasting', input: '#forge:ores' })

    event.remove({ type: 'minecraft:smelting', input: '#forge:dusts' })
    event.remove({ type: 'minecraft:blasting', input: '#forge:dusts' })

    event.remove({ type: 'minecraft:smelting', input: '#farmersdelight:tools/knives' })
    event.remove({ type: 'minecraft:blasting', input: '#farmersdelight:tools/knives' })

    event.remove({ type: 'thermal:tree_extractor' })

    const outputRemovals = [
        'minecraft:sticky_piston',
    ]

    const idRemovals = [
        'immersiveengineering:crafting/stick_steel',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_iron',
        'immersiveengineering:crusher/bone_meal',
        /immersiveengineering:crafting\/hammercrushing/,
        'immersivepetroleum:distillationtower/oilcracking',
        'immersiveengineering:crafting/coal_coke_to_coke',
        'immersiveengineering:crafting/coke_to_coal_coke',

        'minecraft:crystal_glass',
        'minecraft:bone_pile_from_bone_pile_block',

        'pedestals:pedestal_cobblegen/blackstone',

        'thermal:machine/smelter/smelter_alloy_netherite',
        'thermal:machine/press/packing2x2/press_honeycomb_packing',
        'thermal:machine/refinery/refinery_crude_oil',
        'thermal:machine/centrifuge/centrifuge_honeycomb',
        'thermal:machine/centrifuge/centrifuge_oil_red_sand',
        'thermal:machine/centrifuge/centrifuge_oil_sand',
        'thermal:machine/plugins/create/pulverizer_create_zinc_ore',
        'thermal:machine/plugins/mekanism/pulverizer_mek_osmium_ore',
        'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log',
        'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log',
        'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
        'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
        'thermal:storage/sugar_cane_from_block',
        'thermal:devices/plugins/byg/tree_extractor_byg_rainbow_eucalyptus',
        'thermal:devices/plugins/byg/tree_extractor_byg_mahogany',
        'thermal:devices/plugins/byg/tree_extractor_byg_baobab',
        'thermal:devices/tree_extractor/tree_extractor_jungle',
        'thermal:signalum_dust_4',
        'thermal:rubber_3',
        'thermal:smelting/cured_rubber_from_smelting',
        'thermal:storage/sulfur_block',
        'thermal:gunpowder_4',
        'thermal:machine/press/unpacking/press_coal_coke_unpacking',
        'thermal:machine/press/packing2x2/press_clay_packing',
        'thermal:machine/press/unpacking/press_clay_unpacking',
        'thermal:machine/press/packing2x2/press_quartz_packing',
        'thermal:machine/press/unpacking/press_quartz_unpacking',
        'thermal:machine/press/packing2x2/press_slag_packing',
        'thermal:machine/press/unpacking/press_slag_unpacking',
        'thermal:compat/industrialforegoing/bottler_essence',

        'supplementaries:strings_recipe',
    ]

    var regexIdRemovals = [
        /thermal:compat\/\w+\/\w+_ore/,

        /thermal:storage\/\w+_block/,
        /thermal:storage\/\w+_ingot_from_nuggets/,
        /thermal:storage\/\w+_nugget_from_ingot/,

        /immersiveengineering:crafting\/ingot_\w+_to_storage_\w+/,
        /immersiveengineering:crafting\/ingot_\w+_to_nugget_\w+/,
        /immersiveengineering:crafting\/nugget_\w+_to_ingot_\w+/,
        /immersiveengineering:crafting\/storage_\w+_to_ingot_\w+/,
    ]

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    })

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    })

    regexIdRemovals.forEach((removal) => {
        event.remove({ id: removal });
    })

    disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    })

    event.remove({
        output: '/\\w+:\\w+_gear$/',
        type: 'minecraft:crafting_shaped'
    })

    event.remove({ type: 'thermal:insolator' })
    event.remove({ type: 'immersiveengineering:cloche' })
    
    event.remove({
        input: '#forge:ores/zinc',
        type: 'thermal:smelter'
    })
    event.remove({
        input: '#forge:ores/osmium',
        type: 'thermal:smelter'
    })
    event.remove({
        input: '#forge:ores/uranium',
        type: 'thermal:smelter'
    })
    event.remove({
        input: '#forge:ores/aluminum',
        type: 'thermal:smelter'
    })
    event.remove({
        input: '#forge:ores/nickel',
        type: 'thermal:smelter'
    })

    event.remove({
        input: 'minecraft:fire_charge',
        mod: 'thermal',
        type: 'minecraft:crafting_shapeless'
    })

    event.remove({ type: 'pedestals:pedestal_crushing', output: '#forge:dyes' })
    event.remove({ type: 'thermal:centrifuge', output: '#forge:dyes' })
    event.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' })
})