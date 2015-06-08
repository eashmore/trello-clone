TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "/api/lists",

  model: TrelloClone.Models.List,

  comparator: function (list) {
    return list.get('ord');
  },

  getOrFetch: function (id) {
    var lists = this;
    var list = lists.get(id);
    if (list) {
      list.fetch();
    } else {
      list = new TrelloClone.Models.List({ id: id });
      list.fetch({
        success: function (){
          lists.add(list);
        }
      });
    }
    return list;
  }

});
