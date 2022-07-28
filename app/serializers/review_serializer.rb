class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating

  belongs_to :user
  belongs_to :item
end
