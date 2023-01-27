const mongodb=require('mongodb');
const MongodbClient=mongodb.MongoClient;
let db;
const MongoConnect=callback=>{
    MongodbClient.connect('mongodb+srv://ambika:oTDlz8dHhUfWGjua@cluster0.jfpwzp3.mongodb.net/shop?retryWrites=true&w=majority')
.then(client=>{
    console.log('Connected!');
    db=client.db();
    callback()
})
.catch(err=>{
    console.log('err');
    throw err;
})
}

const getDb=()=>{
    if(db){
     return db;
    }
    throw 'No database found';
}

exports.MongoConnect=MongoConnect;
exports.getDb=getDb;