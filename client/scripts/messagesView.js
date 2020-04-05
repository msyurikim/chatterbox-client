var MessagesView = {

  $chats: $('#chats'),
  //$message: $('#message'),

  initialize: function() {

  },

  //originally render: function
  renderMessage: function(message) {
    if (message.text && message.username && message.roomname) {
      message.text = Messages.convertHTML(message.text);
      message.username = Messages.convertHTML(message.username);
      message.roomname = Messages.convertHTML(message.roomname);
      let newMessage = MessageView.render(message);
      if ($("#rooms select").val() === message.roomname) {
        $('#chats').append(newMessage);
      }
    }
    //$chats.append(newMessage);
  }

};