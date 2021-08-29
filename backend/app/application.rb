class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/fav_foods/) && req.get?
      fav_foods = Fav_food.all
      return [200, { 'Content-Type' => 'application/json' }, [ fav_foods.to_json ]]
    elsif req.path.match(/fav_foods/) && req.post?
      data = JSON.parse req.body.read
      print data
      fav_food = Fav_food.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [ fav_food.to_json ]]      
      
    elsif req.delete?
      puts req.path_info
      id = req.path_info.split('/fav_foods').last
      fav_food = Task.find(id)
      fav_food.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: 'Fav_food deleted'}.to_json ]]      
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
