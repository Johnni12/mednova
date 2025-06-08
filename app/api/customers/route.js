import prisma from '../../../db/prisma';
import { customerSchema } from '../lib/validation';

export async function GET(req) {
  try {
    const customers = await prisma.customer.findMany();
    return new Response(JSON.stringify(customers), { status: 200 });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch customers' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    // Validate the incoming data using the reusable schema
    const { error, value } = customerSchema.validate(data);
    if (error) {
      return new Response(JSON.stringify({ error: error.details[0].message }), { status: 400 });
    }

    // Check for duplicate customer by email
    const existingCustomer = await prisma.customer.findUnique({
      where: { email: value.email },
    });
    if (existingCustomer) {
      return new Response(
        JSON.stringify({ error: 'A customer with this email already exists' }),
        { status: 409 }
      );
    }

    // Create a new customer using the validated data
    const newCustomer = await prisma.customer.create({ data: value });
    return new Response(JSON.stringify(newCustomer), { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return new Response(JSON.stringify({ error: 'Failed to create customer' }), { status: 500 });
  }
}