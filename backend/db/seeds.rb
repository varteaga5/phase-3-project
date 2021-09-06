# install -> gem install faker
# then run shotgun again
# type require faker in gemfile
# require "faker"
# puts Faker::Verb.base + " " + Faker::Name.name


# 100.times do 
#     Fav_food.create(fav_food: Faker::Verb.base + " " + Faker::Name.name, category_id: )
# end
puts "Clearing old data..."
Category.destroy_all
Fav_food.destroy_all

puts "Seeding Categories..."

# create categories
cat1 = Category.create(name: "American")
cat2 = Category.create(name: "Mexican")
cat3 = Category.create(name: "Asian")
cat4 = Category.create(name: "other")

puts "Seeding tasks..."

# create tasks
Fav_food.create(name: "Burger", category: cat1)
Fav_food.create(name: "Burrito", category: cat2)
Fav_food.create(name: "chicken on a stick", category: cat3)
Fav_food.create(name: "gyros", category: cat4)

puts "Done!"