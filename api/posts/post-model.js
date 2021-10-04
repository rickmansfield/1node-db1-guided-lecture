const db = require("../../data/db-config.js")

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  //SELECT * FROM posts 
  return db("posts")  
  //.select("contents").limit(3)
}

function getById(id) {
  //SELECT * FROM posts WHERE id = someid
  return db("posts").where("id", id).first()
  //alternative 
  //return db('posts').where({ id: id, otherThing: 'thing' }).first
  //without .first() you always get an ARRAY wich could be []
}

async function create({title, contents}) {
  //INSERT INTO posts (title, contents) VALUES ('newtitle', 'newvalue')
  const [id] = await db("posts").insert({title,contents})//returns [number] an array with the id of the new item
  console.log(id);
  const theGoodStuff = await getById(id)
  console.log(theGoodStuff);
  return getById(id)
}

//in Postgress
// async function create({title, contents}) {
//   const [id] = await db("posts").insert({title,contents}, ['id'])//returns [{ id: number}]
//   return getById(id)
// }

function update(id,{title,contents}) {
  //test if wired ...this way
  //return "update wired"

 //UPDATE posts SET title='foo', contents = 'bar' WHERE id = 1;
  // const stuff = await db('posts').where('id', id).update({ title, contents })
  // console.log(stuff);
  // return stuff;// will return the number of records updated. and is basically useless. so we have to alter the code like this... 
  return db('posts').where('id', id).update({ title, contents })
  .then(()=> {
    return getById(id)
  })
  //Alternative...if you use async on line 39 in front of "function"
  // await db("posts").where("id",id).update({title,contents})
  // return getById(id)
}

async function remove(id) {
    //test this way
  //return "update wired"
  //then ...
  //what does it return?
  //what to do to give back the deleted thing?
  return db('posts').where('id', id).del()
  //Answer...
  // const deletedPost = await getById(id)
  // await db("posts").where("id",id).delete()
  // return deletedPost
}
