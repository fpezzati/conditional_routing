var TimeShift = (function(){
  var timeshift;
  function handleDrop(item) {
    console.log(JSON.stringify(item));
    item.preventDefault();
  }
  function handleDragOver(item) {
    console.log("handle drag over");
    item.preventDefault();
  }
  function handleDragStart(item) {
    item.dataTransfer.setData("shift", JSON.stringify(timeshift));
  }
  function initResizeObserver() {
    new ResizeObserver(handleResize).observe(document.getElementById(timeshift.id));
  }
  function handleResize(shift) {
    console.log("resize happened.");
    if(shift && shift.contentRect) timeshift.lasts = shift.contentRect.width;
  }
  return {
    view: function(vnode) {
      timeshift = vnode.attrs;
      setTimeout(initResizeObserver, 500);
      return m("div", {
        id: timeshift.id,
        class: "timeshift",
        style: {
          top: timeshift.y+"px" ,
          left: timeshift.x+"px"
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
