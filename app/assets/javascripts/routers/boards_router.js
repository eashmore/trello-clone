TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch();
  },

  routes: {
    "": "index",
    "boards/new": "new",
    "boards/:id": "show"
  },

  index: function () {
    var indexView = new TrelloClone.Views.BoardsIndex({ collection: this.collection });
    this._swapView(indexView);
  },

  new: function () {
    var formView = new TrelloClone.Views.BoardForm({ collection: this.collection });
    this._swapView(formView);
  },

  show: function (id) {
    var board = this.collection.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow( { model: board });
    this._swapView(showView);
  },



  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});