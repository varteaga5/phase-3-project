require 'json'
require 'pry'
class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    # checks if the path is foods and is a get request
    if req.path.match(/FoodList/) && req.get?
      # creates an array of foods
      fav_foods = Fav_food.all.map do |food|
        puts "this is food.name", food.name
        puts "this is food.category.name", food.category.name
        {id: food.id, name: food.name, category: food.category.name}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:fav_foods => fav_foods}.to_json ]]
      
      # checks if the path is foods and is a post request
    elsif req.path.match(/FoodList/) && req.post?
      # creates data
      data = JSON.parse req.body.read
      puts "this is data", data
      category = Category.find_by(name: data["category"])
      
      fav_food = Fav_food.create(name: data["name"], category: category)
      res_food = {id: fav_food.id, name: fav_food.name, category: fav_food.category.name}
      return [200, { 'Content-Type' => 'application/json' }, [ {:fav_food => res_food}.to_json ]]      
      
    elsif req.delete?
      puts req.path_info
      id = req.path.split('/FoodList/').last
      puts "this is id", id
      Fav_food.find(id).delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: 'Fav_food deleted'}.to_json ]]      
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
