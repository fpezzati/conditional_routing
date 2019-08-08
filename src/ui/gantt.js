var Gantt = (function () {
  var shifts = [];
  var eventbus = {};
  function addshift(evt) {
    eventbus.publish({
      type: "addshift",
      data: { "x": evt.offsetX, "y": evt.offsetY, "lasts": 100 }
    });
  }
  return {
    oncreate: function(vnode) {
      eventbus = this.eventbus;
      TimeShift.eventbus = this.eventbus;
      eventbus.subscribe({
        type: "addshift",
        handle: function(action) {
          var newShift = Object.create(TimeShift);
          newShift.x = action.data.x;
          newShift.y = action.data.y;
          newShift.lasts = action.data.lasts;
          shifts.push(newShift);
        }
      });
    },
    view: function(vnode) {
      return m("div", [
        m(Head),
        m("div", { class: "gantt-board", onclick: addshift }, shifts.map(function(shift) {
            return m(TimeShift, shift);
          })
        )
      ]);
    }
  }
})();
