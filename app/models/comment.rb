class Comment < ApplicationRecord
  belongs_to :post
  has_one :user, through: :post

  validates :body, presence: true
  validates :post_id, presence: true
end
