import { MongoClient } from 'mongodb';

export async function connectToDatabase(){
   const client = MongoClient.connect('mongodb+srv://malhar:fEMmpuKfAReNfMQd@cluster0.fi1ky.mongodb.net/userauth?retryWrites=true&w=majority');
   return client
}