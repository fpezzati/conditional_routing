var TimeShift = (function(){
  var timeshift;
  function handleDrop(item) {
    console.log(JSON.stringify(item));
    item.preventDefault();
  }
  function handleDragOver(item) {
    item.preventDefault();
  }
  function handleDragStart(item) {
    item.dataTransfer.setData("shift", timeshift);
  }
  return {
    view: function(vnode) {
      return m("div", {
        class: "timeshift",
        style: {
//          top: vnode.attrs.shift.y+"px" ,
//          left: (vnode.attrs.shift.x + vnode.attrs.shift.lasts)+"px"
          top: timeshift.y+"px" ,
          left: (timeshift.x + timeshift.lasts)+"px"
        },
        ondrop: handleDrop,
        ondragover: handleDragOver,
        ondragstart: handleDragStart,
        draggable: "true"
      }, "shift");
    },
    setTimeShift: function(val) {
      timeshift = val;
    }
  }
})();
