var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll(function(data) {
      console.log(data);
      var rooms = [];
      data.results.forEach(function(datum) {
        if (datum.roomname && !rooms.includes(datum.roomname)) {
          //move this to renderRooms function
          //pass in rooms = [], along with datum
          rooms.push(datum.roomname);
          let newRoom = RoomsView.render(datum);
          RoomsView.$select.append(newRoom);
        }
      });
    });
  },

  //renderRooms: func

  //originally empty render
  render: _.template(`
    <option><%= roomname%></option>
  `)

};
