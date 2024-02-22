// packmode:expert

ServerEvents.recipes(event => {
    const recipes = [
        { mod: 'computercraft' },
        { mod: 'shrink' },

        { id: 'minecraft:book' },
        { id: 'minecraft:leather_to_stripes' },
        { id: 'minecraft:stick' },
        { id: 'minecraft:golden_carrot' },
        { id: 'minecraft:glistering_melon_slice' },
        { id: 'minecraft:golden_apple' },
        { id: 'minecraft:lodestone' },
        { mod: 'quark', output: 'minecraft:furnace' },

        { id: 'mininggadgets:upgrade_empty' },

        { id: 'modularrouters:energy_upgrade' },
        { id: 'modularrouters:sender_module_1_alt' },

        { id: 'pedestals:ingot_gold_from_upgrades' },
        { id: 'pedestals:upgrades/breaker2' },
        { id: 'pedestals:upgrades/crafter1mk2' },
        { id: 'pedestals:upgrades/recycler' },
        { id: 'pedestals:upgrades/rfexpgen' },
        { id: 'pedestals:upgrades/rffuelgen' },

        { id: 'pneumaticcraft:explosion_crafting/compressed_iron_block' },
        { id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' },
        { id: 'pneumaticcraft:speed_upgrade' },
        { id: 'pneumaticcraft:reinforced_stone' },

        { mod: 'sophisticatedbackpacks' },

        { id: 'waystones:warp_dust' },
        { id: /create:crafting\/materials\/andesite_alloy/ },

        { output: 'tiab:timeinabottle' },
        { output: 'minecraft:nautilus_shell' },
        { output: 'bloodmagic:intermediatecuttingfluid' },

        { type: 'minecraft:crafting_shapeless', output: '#forge:dusts' },
        { type: 'minecraft:smelting', input: '#forge:raw_materials' },
        { type: 'minecraft:blasting', input: '#forge:raw_materials' },
        { type: 'integrateddynamics:drying_basin' },
        { type: 'integrateddynamics:mechanical_drying_basin' },
        { type: 'integrateddynamics:squeezer' },
        { type: 'integrateddynamics:mechanical_squeezer' },
    ]

    let amt = 0
    recipes.forEach(recipe => {
        event.remove(recipe)
        amt++
    })
    console.info(`Removed ${amt} recipes.`)
})