var FormView = {

  $form: $('form'),
  $message: $('#message'),

  initialize: function() {
    //console.log(FormView.$form);
    //console.log(FormView.$message);
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //var inputs = document.getElementbyId("send").elements;
    var data = document.getElementById("send").elements;
    var msg = Messages.convertHTML(data["message"].value);
    var user = Messages.convertHTML(App.username);
    console.log(msg);
    console.log(user);
    //var newMessage = FormView.$message;
    var newMessage = {
      username: user,
      text: msg,
      roomname: 'something'
    };
    Parse.create(newMessage);
    Messages.update();
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};