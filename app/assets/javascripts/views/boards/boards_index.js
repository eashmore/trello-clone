TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addBoard);
    this.collection.each(this.addBoard.bind(this));
  },

  events: {
    "click .new-board": "toNewForm"
  },

  template: JST['boards/index'],

  addBoard: function (board) {
    var itemView = new TrelloClone.Views.BoardIndexItem({ model: board });
    this.addSubview(".index-list", itemView);
  },

  render: function () {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  toNewForm: function () {
    Backbone.history.navigate("/boards/new", { trigger: true });
  }

});
