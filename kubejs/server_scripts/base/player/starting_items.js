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
        
        event.addGameStage(startingItemsGameStage)
    }
})