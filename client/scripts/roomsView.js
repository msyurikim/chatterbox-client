var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.handleClick);
  },

  renderRooms: function(datum, rooms = []) {
    if (datum.roomname && !rooms.includes(datum.roomname)) {
      //move this to renderRooms function
      //pass in rooms = [], along with datum
      rooms.push(datum.roomname);
      let newRoom = RoomsView.render(datum);
      RoomsView.$select.append(newRoom);
    }
  },

  render: _.template(`
    <div class="#rooms select">
      <div class="roomname">
      </div>
    </div>
  `),

  renderRoom: function(roomname) {
    let newRoom = RoomsView.render(roomname);
    $('#rooms select').append(newRoom);
  }

};
