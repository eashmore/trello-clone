TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST["boards/form"],

  tagName: "form",

  events: {
    'submit': "submit"
  },

  render: function () {
    var content = this.template;
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;
    var board = new TrelloClone.Models.Board();
    var attr = $(event.currentTarget).serializeJSON();
    debugger;
    board.set(attr);
    board.save([], {
      success: function () {
        that.collection.add(board);
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});
