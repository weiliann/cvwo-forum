# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.destroy_all
Post.destroy_all
Comment.destroy_all

n = 10
n.times do
  u = User.create(name: Faker::Name.name)
  p = u.posts.create(
    title: Faker::Lorem.sentence(word_count: 12),
    body: Faker::Lorem.paragraph_by_chars(number: 500),
    category: Faker::Lorem.word
  )
  Faker::Number.within(range: 5..10).times do
    p.comments.create!(
      body: Faker::Lorem.paragraph,
      user_id: Faker::Number.between(from: 1, to: User.count)
    )
  end
end
