var Gantt = (function () {
  var shifts = [];
  var eventbus = {};
  function handleDrop(item) {
//    item.preventDefault();
    var shift = item.dataTransfer.getData("shift");
    console.log(JSON.stringify(shift));
  }
  function handleDragOver(item) {
    item.preventDefault();
  }
  return {
    oncreate: function(vnode) {
      eventbus = this.eventbus;
      ShiftButtons.eventbus = this.eventbus;
      eventbus.subscribe({
        type: "addshift",
        handle: function(action) {
          var newShift = Object.create(TimeShift);
          newShift.eventbus = this.eventbus;
          newShift.setTimeShift({x: action.data.x, y: action.data.y, lasts: action.data.lasts});
          shifts.push(newShift);
        }
      });
    },
    view: function(vnode) {
      return m("div", [
        m(Head),
        m("div", {
          class: "gantt-board",
          ondrop: handleDrop,
          ondragover: handleDragOver
        }, shifts.map(function(shift) {
            return m(TimeShift, shift);
          })
        ),
        m(ShiftButtons)
      ]);
    }
  }
})();
