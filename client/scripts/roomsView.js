var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  //originally empty render
  render: _.template(`
    <div class="#rooms select">
      <div class="roomname">
      </div>
    </div>
  `),

  //created function
  renderRoom: function(roomname) {
    let newRoom = RoomsView.render(roomname);
    $('#rooms select').append(newRoom);
  }

};
