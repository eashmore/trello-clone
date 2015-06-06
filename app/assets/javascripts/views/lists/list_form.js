TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST["lists/form"],

  tagName: 'form',

  events: {
    "click button": "newList"
  },

  render: function () {
    this.$el.html(this.template({ board_id: this.model.get('id') }));

    return this;
  },

  newList: function (event) {
    event.preventDefault();
    var list = new TrelloClone.Models.List();
    var attr = this.$el.serializeJSON();

    var that = this;
    list.set(attr);

    list.save([], {
      success: function () {
        that.collection.add(list);
        Backbone.history.navigate("/boards/" + list.get('board_id'), { trigger: true });
      }
    });

  }
});
