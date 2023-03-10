// This is file is for the case suppose we want to put the lot of data which is present in mock-data.json in the database

import { readFile } from 'fs/promises';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';
import PropertyModel from "./models/PropertyModel.js"

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    const jsonProducts = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    );
    await PropertyModel.create(jsonProducts);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
