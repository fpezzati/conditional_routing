function Head() {
  var eventbus;
  function login() {
    eventbus.publish({ type: "login", value: true });
  }
  function logout() {
    eventbus.publish({ type: "login", value: false });
  }
  return {
    oncreate: function(vnode) {
      eventbus = this.eventbus;
    },
    view: function(vnode) {
      return m("div", [
        m("button", { onclick: function() {
          m.route.set("/foo")
        } }, "foo"),
        m("button", { onclick: function() {
          m.route.set("/bar")
        } }, "bar"),
        m("button", { onclick: login }, "login"),
        m("button", { onclick: logout }, "logout")
      ]);
    }
  }
}
