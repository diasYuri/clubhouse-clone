import { constants } from "../../_shared/constants.js"
import RoomController from "./util/controller.js"
import RoomSocketBuilder from "./util/roomSocket.js"
import View from "./util/view.js"

const room = {
    id: '0001',
    topic: 'JS Expert éh noix'
}

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-256.png',
    username: 'Yuri ' + Date.now()
}

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const roomInfo = {user, room}

await RoomController.initialize({
    socketBuilder,
    roomInfo,
    view: View
})



