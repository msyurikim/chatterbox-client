var Rooms = {

  handleClick: function(event) {
    event.preventDefault();
    var roomName = document.getElementById("message").value;
    $('#rooms select').append(RoomsView.render({roomname: Messages.convertHTML(roomName)}));

  }

};