var App = (function() {
  var login;
  function isLoggedIn(component) {
    if(login) {
      return component;
    } else {
      m.route.set("/hey");
    }
  }
  return {
    oninit: function(vnode) {
      EventBus.subscribe({
        type: "login",
        handle: function(action) {
          console.log("incoming action: " + JSON.stringify(action));
          login = action.value;
        }
      });
    },
    oncreate: function(vnode) {
      Foo.eventbus = EventBus;
      Bar.eventbus = EventBus;
      Hey.eventbus = EventBus;
      Gantt.eventbus = EventBus;
      m.route(document.body, "/hey", {
        "/foo": {
          onmatch: function(args, requestedPath, route) { return isLoggedIn(Foo); }
        },
        "/bar": {
          onmatch: function(args, requestedPath, route) { return isLoggedIn(Bar); }
        },
        "/gantt": {
          onmatch: function(args, requestedPath, route) { return isLoggedIn(Gantt); }
        },
        "/hey": Hey
      });
    },
    view: function(vnode) {
      return m("div", "home..");
    }
  };
})();
