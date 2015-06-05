TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  parse: function (board) {
    if(board.lists) {
      this.lists().set(board.lists);
      delete board.lists;
    }
    return board;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], { board: this });
    }
    return this._lists;
  }

});
