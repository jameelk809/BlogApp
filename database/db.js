import mongoose from "mongoose"



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-qxbbh2c-shard-00-00.xjmo8vb.mongodb.net:27017,ac-qxbbh2c-shard-00-01.xjmo8vb.mongodb.net:27017,ac-qxbbh2c-shard-00-02.xjmo8vb.mongodb.net:27017/?ssl=true&replicaSet=atlas-zqdo6n-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    }catch (error){
        console.log('Error while Connecting', error);
    }
}


export default Connection;