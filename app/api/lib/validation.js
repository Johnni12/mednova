import Joi from 'joi';

// Validation schema for Customer
export const customerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required(),
  address: Joi.string().max(255).optional(),
});

// Validation schema for Payment
export const paymentSchema = Joi.object({
  orderId: Joi.number().integer().required(),
  amount: Joi.number().positive().required(),
  method: Joi.string().valid('Card', 'Cash', 'Bank Transfer').required(),
  paymentDate: Joi.date().optional(),
});

// Validation schema for Product
export const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  price: Joi.number().positive().required(),
  stockQuantity: Joi.number().integer().min(0).required(),
});
// Validation schema for Sale
export const saleSchema = Joi.object({
    productId: Joi.number().integer().required(),
    amount: Joi.number().positive().required(),
    date: Joi.date().optional(),
  });

// Validation schema for Order
export const orderSchema = Joi.object({
  customerId: Joi.number().integer().required(),
  orderDate: Joi.date().optional(),
  status: Joi.string().valid('Pending', 'Completed', 'Cancelled').required(),
  products: Joi.array().items(
    Joi.object({
      productId: Joi.number().integer().required(),
      quantity: Joi.number().integer().min(1).required(),
    })
  ).required(),
});