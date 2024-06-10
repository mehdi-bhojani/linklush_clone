import mongoose from 'mongoose';

export async function connect() {
  try {
    mongoose.connect(process.env.MANGO_URI!);
    mongoose.connection.on('connected', () => {
      console.log('MongoDb connrected');
    });

    mongoose.connection.on('error', (err) => {
      console.log('MongoDb error' + err);
      process.exit();
    });
  } catch (error: any) {
    console.log(error);
  }
}
