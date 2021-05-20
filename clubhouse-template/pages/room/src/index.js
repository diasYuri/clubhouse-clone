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
    id: Date.now(),
    topic: 'JS Expert'
  }
  
  
  const user = {
    img= '',
    username: 'Yuri Dias'
  }

socket.emit(constants.events.JOIN_ROOM, {user, room})