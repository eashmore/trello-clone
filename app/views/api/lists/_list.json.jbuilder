json.extract! list, :title, :id, :board_id, :ord

json.cards do
  json.array!(list.cards) do |card|
    json.partial! 'api/cards/card', card: card
  end
end
