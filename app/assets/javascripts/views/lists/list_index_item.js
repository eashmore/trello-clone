TrelloClone.Views.ListIndexItem = Backbone.View.extend({
  template: JST["lists/index_item"],

  events: {
    'click .delete-link': 'deleteLink'
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);

    var cardsView = new TrelloClone.Views.CardsIndex({ collection: this.model.cards() });
    var panel = this.$el.find('.panel');
    panel.append(cardsView.render().$el);

    var cardForm = new TrelloClone.Views.CardForm({ list: this.model, collection: this.model.cards() });
    panel.append(cardForm.render().$el);

    return this;
  },

  deleteLink: function (event) {
    event.preventDefault();
    this.collection.remove(this.model);
    this.model.destroy();
  }
});
