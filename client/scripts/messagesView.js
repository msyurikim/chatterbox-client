var MessagesView = {

  $chats: $('#chats'),
  //$message: $('#message'),

  initialize: function() {

  },

  //originally render: function
  renderMessage: function(message) {
    if (message.text && message.username && message.roomname) {
      let newMessage = MessageView.render(message);
      $('#chats').append(newMessage);
    }
    //$chats.append(newMessage);
  }

};