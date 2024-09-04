// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  data?: {
    featuredProducts?: any[];
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const ProductsCollection = await client.db("NEWS").collection("Products");
    let featuredProducts: any[] = [];

    const featuredProductsQuery = await ProductsCollection
      // .find({ isFeatured: true })
      .find({})
      .limit(30);

    await featuredProductsQuery.forEach((doc: any) => {
      const dateAdded = new Date(doc._id.getTimestamp()).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      featuredProducts.push({...doc, dateAdded});
    });

    if (!featuredProducts || featuredProducts.length === 0) {
      return res.status(200).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {
        featuredProducts
      }
    });
  } catch (error) {
    console.log('error get-data: ', error);
    res.status(500).json({ success: false });
  }
}