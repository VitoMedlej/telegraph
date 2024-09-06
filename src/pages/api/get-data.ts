import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  data?: {
    featuredProducts?: any[];
  };
  total?: number; // Total number of products available
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const ProductsCollection = await client.db("NEWS").collection("Products");

    // Get the category and page from the query parameter
    const { category, page = '1' } = req.query;

    // Convert page to a number and set items per page
    const currentPage = parseInt(page as string, 12) || 1;
    const perPage = 12; // Number of products per page (adjust as needed)
    const skip = (currentPage - 1) * perPage;
  

    // Build the filter object
    let filter: any = {  };

    // Only add category filter if it's a valid non-empty string
    if (category && typeof category === 'string' && category.trim() !== '') {
      filter.category = category; // Add category filter if provided
    }

    // Count total items for pagination info
    const total = await ProductsCollection.countDocuments(filter);

    // Fetch products with pagination (skip and limit)
    const featuredProductsQuery = await ProductsCollection
      .find(filter)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(perPage);

    let featuredProducts: any[] = [];
    await featuredProductsQuery.forEach((doc: any) => {
      const dateAdded = new Date(doc._id.getTimestamp()).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      featuredProducts.push({ ...doc, dateAdded });
    });

    // If no products are found
    if (!featuredProducts || featuredProducts.length === 0) {
      return res.status(200).json({ success: false });
    }

    // Return paginated products with total count
    res.status(200).json({
      success: true,
      data: {
        featuredProducts
      },
      total // Total number of products matching the filter
    });
  } catch (error) {
    console.log('error get-data: ', error);
    res.status(500).json({ success: false });
  }
}
