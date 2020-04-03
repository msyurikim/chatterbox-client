var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  //originally render: function
  renderMessage: function(message) {
    let newMessage = MessageView.render(message); //i did this
    $('#chats').append(newMessage);
  }

};