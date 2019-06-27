var EventBus = {
  handler: new Array,
  subscribe: function(actionHandler) {
    this.handler[actionHandler.type] = actionHandler;
  },
  publish: function(action) {
    this.handler[action.type].handle(action);
  }
}
