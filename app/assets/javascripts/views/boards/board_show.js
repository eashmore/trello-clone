TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST["boards/show"],

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  addList: function (list) {
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    return this;
  }
});
