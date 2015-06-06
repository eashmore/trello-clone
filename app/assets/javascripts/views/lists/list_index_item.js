TrelloClone.Views.ListIndexItem = Backbone.View.extend({
  template: JST["lists/index_item"],

  tagName: 'li',

  events: {
    'click .delete-link': 'deleteLink'
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);

    return this;
  },

  deleteLink: function (event) {
    event.preventDefault();
    this.collection.remove(this.model);
    this.model.destroy();
  }
});
