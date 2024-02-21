PlayerEvents.loggedIn(event => {
    const startingItemsGameStage = 'starting_items'
    const randomWaystone = () => {
        const waystones = ['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone']
        return waystones[Math.floor(Math.random() * waystones.length)]
    }

    if (!event.hasGameStage(startingItemsGameStage)) {
        console.info(`Giving starting items to ${event.player.name}`)
        event.player.give(Item.of('ftbquests:book'))
        event.player.give(Item.of(randomWaystone()))
        event.player.give(Item.of('minecraft:flint_and_steel'))
        
        event.player.setEquipment('head', Item.of('minecraft:leather_helmet'))
        event.player.setEquipment('chest', Item.of('minecraft:leather_chestplate'))
        event.player.setEquipment('legs', Item.of('minecraft:leather_leggings'))
        event.player.setEquipment('feet', Item.of('minecraft:leather_boots'))
        
        event.player.setOffHandItem(Item.of('minecraft:lantern'))
        
        event.addGameStage(startingItemsGameStage)
    }
})