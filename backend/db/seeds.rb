# install -> gem install faker
# then run shotgun again
# type require faker in gemfile
require "faker"
puts Faker::Verb.base + " " + Faker::Name.name


100.times do 
    Fav_food.create(fav_food: Faker::Verb.base + " " + Faker::Name.name, category_id: )
end