// packmode: expert

ServerEvents.recipes(event => {
    const idRemovals = [
        'immersiveengineering:crafting/component_iron',
        'immersiveengineering:crafting/component_steel',
        'immersiveengineering:crafting/concrete',
        'immersiveengineering:crafting/concrete2',
        'immersiveengineering:mixer/concrete',
        /immersiveengineering:crafting\/plate_/,
        'immersiveengineering:crafting/cokebrick',
        'immersiveengineering:crafting/blastbrick',
        'immersiveengineering:crafting/alloybrick',
        'immersiveengineering:generator_fuel/biodiesel',
        'immersiveengineering:generator_fuel/creosote',

        'modularrouters:energy_upgrade',
        'modularrouters:sender_module_1_alt',

        'pedestals:ingot_gold_from_upgrades',
        'pedestals:upgrades/breaker2',
        'pedestals:upgrades/crafter1mk2',
        'pedestals:upgrades/recycler',
        'pedestals:upgrades/rfexpgen',
        'pedestals:upgrades/rffuelgen',

        'sophisticatedbackpacks:feeding_upgrade',
        'sophisticatedbackpacks:advanced_feeding_upgrade',
        'sophisticatedbackpacks:auto_smelting_upgrade',
        'sophisticatedbackpacks:pump_upgrade',
        'sophisticatedbackpacks:advanced_pump_upgrade',
        'sophisticatedbackpacks:xp_pump_upgrade',
        'sophisticatedbackpacks:advanced_compacting_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        'sophisticatedbackpacks:refill_upgrade',

        'minecraft:book',
        'minecraft:leather_to_stripes',
        'minecraft:stick',
        'minecraft:golden_carrot',
        'minecraft:glistering_melon_slice',
        'minecraft:golden_apple',
        'minecraft:lodestone',

        'waystones:warp_dust',
    ]

    const outputRemovals = [
        'tiab:timeinabottle',
        'minecraft:nautilus_shell',
    ]

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    })

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    })

    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'thermal' });
    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'immersiveengineering' });
})