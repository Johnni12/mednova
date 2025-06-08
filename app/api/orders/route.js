import prisma from '../../../db/prisma';
import { paymentSchema } from '../lib/validation';

export async function GET(req) {
  try {
    const payments = await prisma.payment.findMany({
      include: { order: true },
    });
    return new Response(JSON.stringify(payments), { status: 200 });
  } catch (error) {
    console.error('Error fetching payments:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch payments' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    // Validate the incoming data using the reusable schema
    const { error, value } = paymentSchema.validate(data);
    if (error) {
      return new Response(JSON.stringify({ error: error.details[0].message }), { status: 400 });
    }

    // Check if the order exists
    const order = await prisma.order.findUnique({
      where: { id: value.orderId },
    });
    if (!order) {
      return new Response(
        JSON.stringify({ error: 'The specified order does not exist' }),
        { status: 404 }
      );
    }

    // Create a new payment using the validated data
    const newPayment = await prisma.payment.create({
      data: {
        orderId: value.orderId,
        amount: value.amount,
        method: value.method,
        paymentDate: value.paymentDate || new Date(),
      },
    });
    return new Response(JSON.stringify(newPayment), { status: 201 });
  } catch (error) {
    console.error('Error creating payment:', error);
    return new Response(JSON.stringify({ error: 'Failed to create payment' }), { status: 500 });
  }
}