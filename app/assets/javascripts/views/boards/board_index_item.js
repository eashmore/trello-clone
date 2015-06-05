TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  template: JST["boards/index_item"],

  events: {
    "click li": "toShow"
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    return this;
  },

  toShow: function (event) {
    event.preventDefault();
    Backbone.history.navigate("boards/" + this.model.get('id'), { trigger: true });
  }
});
