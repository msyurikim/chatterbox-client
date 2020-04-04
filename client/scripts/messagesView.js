var MessagesView = {

  $chats: $('#chats'),
  //$submit: $('.submit');
  $message: $('#message'),

  initialize: function() {
    //Parse.create
    var create = function() {
      Parse.create(FormView.$form.$message);
      //MessagesView.renderMessage(FormView.$form.$message);
    };
    MessagesView.$chats.on('submit', create());
  },

  //originally render: function
  renderMessage: function(message) {
    console.log('renderMessage called');
    Parse.create(message);
    let newMessage = MessageView.render(message); //i did this
    $('#chats').append(newMessage);
    //$chats.append(newMessage);
  }

};