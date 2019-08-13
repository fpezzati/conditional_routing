var Gantt = (function () {
  var shifts = [];
  var eventbus = {};
  return {
    oncreate: function(vnode) {
      eventbus = this.eventbus;
      TimeShift.eventbus = this.eventbus;
      ShiftButtons.eventbus = this.eventbus;
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
        m("div", { class: "gantt-board" }, shifts.map(function(shift) {
            return m(TimeShift, shift);
          })
        ),
        m(ShiftButtons)
      ]);
    }
  }
})();
