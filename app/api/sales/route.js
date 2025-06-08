import prisma from '../../../db/prisma';
import { orderSchema } from '../lib/validation';

export async function GET(req) {
  try {
    const orders = await prisma.order.findMany({
      include: { customer: true, products: true, payments: true },
    });
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch orders' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    // Validate the incoming data using the reusable schema
    const { error, value } = orderSchema.validate(data);
    if (error) {
      return new Response(JSON.stringify({ error: error.details[0].message }), { status: 400 });
    }

    // Check if the customer exists
    const customer = await prisma.customer.findUnique({
      where: { id: value.customerId },
    });
    if (!customer) {
      return new Response(
        JSON.stringify({ error: 'The specified customer does not exist' }),
        { status: 404 }
      );
    }

    // Create a new order with associated products
    const newOrder = await prisma.order.create({
      data: {
        customerId: value.customerId,
        orderDate: value.orderDate || new Date(),
        status: value.status,
        products: {
          create: value.products.map((product) => ({
            productId: product.productId,
            quantity: product.quantity,
          })),
        },
      },
    });
    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return new Response(JSON.stringify({ error: 'Failed to create order' }), { status: 500 });
  }
}