import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  data?: {
    post?: any; // Replace 'any' with a more specific type if available
  };
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  console.log('id: ', id);

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  if (typeof id !== 'string') {
    return res.status(400).json({ success: false, message: 'Invalid ID' });
  }

  try {
    const ProductsCollection = await client.db("NEWS").collection("Products");

    const post = await ProductsCollection.findOne({_id:new ObjectId(`${id}`)});

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    res.status(200).json({
      success: true,
      data: {
        post
      }
    });
  } catch (error) {
    console.log('error get-data by ID: ', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}