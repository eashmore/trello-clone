TrelloClone.Views.CardsIndex = Backbone.CompositeView.extend({

  template: JST['cards/index'],

  events: {
    'sortstop': 'saveState'
  },

  initialize: function (options) {
    this.boardId = options.boardId;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addCard);
    this.collection.each(this.addCard.bind(this));
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.CardIndexItem( { model: card });
    this.addSubview('.cards-list', cardView);
  },

  render: function () {
    this.$el.html(this.template);
    this.$el.find('.cards-list').sortable({
      connectWith: '.cards-list',
      stop: function (event) {

      }
    });
    this.attachSubviews();
    return this;
  },

  saveState: function (event, ui) {
    debugger;

    // var board = TrelloClone.boards.get(this.boardId);
    // board.lists().each(function (list) {
    //   var ord = 1;
    //   list.cards().each(function (card) {
    //     card.set("ord", ord);
    //     card.save([]);
    //     ord += 1;
    //   });
    // });
  }
});
