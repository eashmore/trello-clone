TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync remove", this.render);
    this.listenTo(this.collection, "add", this.addBoard);
    this.collection.each(this.addBoard.bind(this));
  },

  template: JST['boards/index'],

  addBoard: function (board) {
    var itemView = new TrelloClone.Views.BoardIndexItem({ model: board });
    this.addSubview(".index-list", itemView);
  },

  render: function () {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    var formView = new TrelloClone.Views.BoardForm({ collection: this.collection });
    this.$el.append(formView.render().$el);

    this.attachSubviews();
    return this;
  }
});
