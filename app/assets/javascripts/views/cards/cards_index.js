TrelloClone.Views.CardsIndex = Backbone.CompositeView.extend({

  template: JST['cards/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync remove add", this.render);
    this.listenTo(this.collection, "add", this.addCard);
    this.collection.each(this.addCard.bind(this));
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.CardIndexItem( { model: card });
    this.addSubview('.cards-list', cardView);
  },

  render: function () {
    this.$el.html(this.template);
    this.attachSubviews();
    return this;
  }

});
