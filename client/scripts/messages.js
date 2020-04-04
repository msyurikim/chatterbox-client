var Messages = {


  convertHTML: function(input) {
    var chars = input.split('');
    //var newChars =
    chars.forEach(function(char) {
      //Convert & to &amp;, Convert < to &lt;, Convert > to &gt;, Convert " to &quot;, Convert ' to &#x27;, Convert / to &#x2F;
      if (char === '&') {
        char = '&amp;';
      } else if (char === '<') {
        char = '&lt;';
      } else if (char === '>') {
        char = '&gt;';
      } else if (char === '"') {
        char = '&quot;';
      } else if (char === "'") {
        char = '&#x27;';
      } else if (char === '/') {
        char = '&#x2F;';
      }
    });
    return chars.join('');
  },

  update: function() {
    App.initialize();
  }

  // update: function(data) {
  //   for (var i = 0; i < data['results'].length; i++) {
  //     MessagesView.renderMessage(data['results'][i]);
  //   }
  // }

};