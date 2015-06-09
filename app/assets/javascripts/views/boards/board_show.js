TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST["boards/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .delete-button": "deleteBoard"
  },

  addList: function (list) {
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    var listIndexView = new TrelloClone.Views.ListsIndex({ model: this.model, collection: this.model.lists() });
    this.$el.find('.list-index').html(listIndexView.render().$el);

    return this;
  },

  deleteBoard: function () {
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("" , { trigger: true });
      }
    });
  }
});
