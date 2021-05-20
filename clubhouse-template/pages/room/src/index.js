import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socket.js"

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespace.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected!', user))
  .setOnUserDisconnected((user) => console.log('user disconnect!', user))
  .build()


  
  const room = {
    id: "001",
    topic: 'JS Expert'
  }
  
  
  const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-256.png',
    username: 'Yuri '+ Date.now()
  }

socket.emit(constants.events.JOIN_ROOM, {user, room})