const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@cursonodejs.7oiqgv9.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('Conexão com banco de dados feita com sucesso');
  } catch (error) {
    console.log('Ocorreu um erro ao se conectar com o banco de dados', error);
  }
};

module.exports = connectToDatabase;
