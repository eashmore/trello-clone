TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch();
  },

  routes: {
    "": "index",
    "boards/:id": "show"
  },

  index: function () {
    var indexView = new TrelloClone.Views.BoardsIndex({ collection: TrelloClone.boards });
    this._swapView(indexView);
  },

  show: function (id) {
    var board = TrelloClone.boards.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow( { model: board });
    this._swapView(showView);
  },



  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
