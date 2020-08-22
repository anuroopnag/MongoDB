show dbs
use DBMS
show collections
db.restaurants.find().pretty()
db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1});
db.restaurants.find({},{"_id":0,"restaurant_id":1,"name":1,"borough":1,"cuisine":1});
db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"_id":0,"address.zipcode":1});
db.restaurants.find({"borough":"Bronx"});
db.restaurants.find({"borough": "Bronx"}).limit(5);
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}});
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90,$lt:100}}}});
db.restaurants.find({"address.coord":{$lt:-95.754168}});
db.restaurants.find(
                           {
                             "cuisine" : {$ne : "American "},
                             "grades.score" :{$gt: 70},
                             "address.coord" : {$lt : -65.754168}
                            }
                     );
db.restaurants.find( {
                             "cuisine" : {$ne : "American "},
                             "grades.grade" :"A",
                             "borough": {$ne : "Brooklyn"}
                       } 
                    ).sort({"cuisine":-1});
db.restaurants.find(
{name: /^Wil/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
});
db.restaurants.find(
{name: /ces$/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
});
db.restaurants.find(
{"name": /.*Reg.*/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
});
db.restaurants.find(
{ 
"borough": "Bronx" , 
$or : [
{ "cuisine" : "American " },
{ "cuisine" : "Chinese" }
]});
db.restaurants.find(
{"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
});
db.restaurants.find(
{"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
db.restaurants.find({"grades":{$elemMatch:{"score":{$lte:10}}}});
db.restaurants.find(
{$or: [
  {name: /^Wil/}, 
  {"$and": [
       {"cuisine" : {$ne :"American "}}, 
       {"cuisine" : {$ne :"Chinees"}}
   ]}
]}
,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}
);
db.restaurants.find( 
                {
                 "grades.date": ISODate("2014-08-11T00:00:00Z"), 
                 "grades.grade":"A" , 
                 "grades.score" : 11
                }, 
                {"restaurant_id" : 1,"name":1,"grades":1}
             );

db.restaurants.find( 
                      { "grades.1.date": ISODate("2014-08-11T00:00:00Z"), 
                        "grades.1.grade":"A" , 
                        "grades.1.score" : 9
                      }, 
                       {"restaurant_id" : 1,"name":1,"grades":1}
                   );
db.restaurants.find( 
                      { 
                        "address.coord.1": {$gt : 42, $lte : 52}
                      },
                        {"restaurant_id" : 1,"name":1,"address":1,"coord":1}
                   );
db.restaurants.find().sort({"name":1});
db.restaurants.find().sort({"name":-1});
db.restaurants.find().sort({"cuisine":1,"borough" : -1,});
db.restaurants.find({"address.street" : { $exists : true }});
db.restaurants.find({"address.coord" : {$type :"double"}});
db.restaurants.find({"grades.score" :{$mod : [7,0]}},{"restaurant_id" : 1,"name":1,"grades":1});
db.restaurants.find(
                   { name : 
                     { $regex : "mon.*", $options: "i" } 
                   },
                       {
                         "name":1,
                         "borough":1,
                         "address.coord":1,
                         "cuisine" :1
                        }
                   );
db.restaurants.find(
                   { name : 
                     { $regex : /^Mad/i, } 
                   },
                       {
                         "name":1,
                         "borough":1,
                         "address.coord":1,
                         "cuisine" :1
                        }
                   );
use games
db.createCollection("games")
show collections
db.games.insert([{"Name":"Call Of duty WWII","Genre":"Action","Rating":100},{"Name":"Call Of duty Modern Ops","Genre":"Action","Rating":100},
{"Name":"Assasin's Creed","Genre":"Action","Rating":100},{"Name":"F1","Genre":"Racing","Rating":100},{"Name":"Fifa","Genre":"Sports","Rating":100}])
db.games.find().pretty()
db.games.findOne({"Name":"F1"})
db.games.find().sort({"Rating":-1}).limit(3)
db.games.update({"Name":"Call Of duty WWII"},{$set:{"achievements":["Game Master","Speed Demon"]}})
db.games.update({"Name":"Call Of duty Modern Ops"},{$set:{"achievements":["Game Master","Speed Demon"]}})
db.games.save({"Name":"F1","achievements":["Game Master","Speed Demon"]})
db.games.find({$and:[{"achievements":"Game Master"},{"achievements":"Speed Demon"}]})
db.games.find({"achievements":["Game Master","Speed Demon"]})
db.games.find({},{"achievements":1,"_id":0})
show dbs
