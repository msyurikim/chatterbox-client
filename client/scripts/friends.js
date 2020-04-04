var Friends = {

  // friendsList: [];

  toggleStatus: function(username) {
    let clicked = false;
    var friend = document.getElementbyId(username);
    //$(".username").addEventListener('click', function() {
    friend.addEventListener('click', function() {
      clicked ? clicked = false : clicked = true;
    });
    return clicked;
  }

};