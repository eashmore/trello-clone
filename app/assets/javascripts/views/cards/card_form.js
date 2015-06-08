TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/form'],

  tagName: 'form',

  events: {
    'click button': 'submit'
  },

  initialize: function (options){
    this.list = options.list;
  },

  render: function () {
    var ord = 0;
    if (this.collection.length) {
      ord = this.collection.last().get('ord');
    }
    var list_id = this.list.get('id');
    var content = this.template({ list_id: list_id, ord: ord + 1 });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;
    var attrs = this.$el.serializeJSON();
    var card = new TrelloClone.Models.Card();
    card.set(attrs);
    card.save([],{
      success: function () {
        that.collection.add(card);
      }
    });
  }
});
