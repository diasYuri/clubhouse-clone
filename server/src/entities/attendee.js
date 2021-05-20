export default class Attendee {
  constructor({ id, username, img, isSpeaker, room, peerId }) {
    this.id = id
    this.username = username
    this.img = img
    this.isSpeaker = isSpeaker
    this.room = room
    this.peerId = peerId
  }
}