ItemEvents.modification(event => {
    const increaseStackSize = [
        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:egg',

        // signs
        /minecraft:\w+_sign/,
    ]

    event.modify(increaseStackSize, item => {
        item.setMaxStackSize(64)
    })
})