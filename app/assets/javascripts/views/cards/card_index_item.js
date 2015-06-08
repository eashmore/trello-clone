TrelloClone.Views.CardIndexItem = Backbone.View.extend({
  template: JST["cards/index_item"],

  events: {
    'click button': 'destroyCard',
  },

  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    return this;
  },

  destroyCard: function (event) {
    event.preventDefault();
    this.remove();
    this.model.destroy();
  }
});
