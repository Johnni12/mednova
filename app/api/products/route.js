import prisma from '../../../db/prisma';
import { productSchema } from '../lib/validation';

export async function GET(req) {
  try {
    const products = await prisma.product.findMany();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    // Validate the incoming data using the reusable schema
    const { error, value } = productSchema.validate(data);
    if (error) {
      return new Response(JSON.stringify({ error: error.details[0].message }), { status: 400 });
    }

    // Check for duplicate product by name
    const existingProduct = await prisma.product.findUnique({
      where: { name: value.name },
    });
    if (existingProduct) {
      return new Response(
        JSON.stringify({ error: 'A product with this name already exists' }),
        { status: 409 }
      );
    }

    // Create a new product using the validated data
    const newProduct = await prisma.product.create({ data: value });
    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);

    // Handle Prisma unique constraint error
    if (error.code === 'P2002') {
      return new Response(
        JSON.stringify({ error: 'A product with this name already exists' }),
        { status: 409 }
      );
    }

    return new Response(JSON.stringify({ error: 'Failed to create product' }), { status: 500 });
  }
}