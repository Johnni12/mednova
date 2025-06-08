import prisma from '../../../db/prisma';
import { paymentSchema } from '../../../utils/validation';

export async function GET(req) {
  try {
    const payments = await prisma.payment.findMany({
      include: { order: true },
    });
    return new Response(JSON.stringify(payments), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
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

    // Create a new payment using the validated data
    const newPayment = await prisma.payment.create({ data: value });
    return new Response(JSON.stringify(newPayment), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}