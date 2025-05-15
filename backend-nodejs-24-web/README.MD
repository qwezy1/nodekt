curl -X POST http://localhost:5000/product/search \
-H "Content-Type: application/json" \
-d '{"title":"phone","filter_items":[1,2,3],"order":"asc","filter":"price","offset":0,"limit":10}'
{"status":200,"text":"OK","body":[]}%  

ну выдало, значит работает