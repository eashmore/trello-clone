TrelloClone.Views.ListsIndex = Backbone.CompositeView.extend({
  template: JST['lists/index'],

  initialize: function () {
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'add', this.addList);

    this.collection.each(this.addList.bind(this));
  },

  addList: function (list) {
    var listView = new TrelloClone.Views.ListIndexItem({ model: list, collection: this.collection });
    this.addSubview('.list-list', listView);
  },

  render: function () {
    this.$el.html(this.template);

    var formView = new TrelloClone.Views.ListForm({ model: this.model, collection: this.collection });
    this.$el.append(formView.render().$el);

    this.$el.find('.list-list').sortable();

    this.attachSubviews();

    return this;
  }

});
