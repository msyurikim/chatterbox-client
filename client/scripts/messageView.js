var MessageView = {

  render: _.template(`
      <div class="chat">
        <div id="username">
          <%= username %>
        </div>
        <div id="text">
          <%= text %>
        </div>
      </div>
    `)

};