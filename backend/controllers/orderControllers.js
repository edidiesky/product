// import Product from "../models/Product.js";
import dotenv from "dotenv";
dotenv.config();
import prisma from "../prisma/index.js";
import redisClient from "../utils/redisClient.js";

import expressAsyncHandler from "express-async-handler";

// User
const CreatePayment = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const { userId } = req.user;
  const { cartItems, amount, currency, sellerId } = req.body;
  const payment = await prisma.payment.create({
    data: {
      amount: amount,
      currency,
      userid: userId,
      sellerId: sellerId,
    },
  });
  // console.log(payment[0]);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ paymentid: payment[0] });
});

const GetPaymentHistoryForAdmin = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body
  const cacheKey = "order";

  const cachedOrder = await redisClient.get(cacheKey);
  if (cachedOrder) {
    return res.json(cachedOrder);
  } else {
    const payment = await prisma.payment.findMany({
      where: {
        sellerId: req.user.userId,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    await redisClient.set(cacheKey, payment, { EX: 3600 });

    res.status(200).json({ payment });
  }
});

const GetSinglePaymentDetails = expressAsyncHandler(async (req, res) => {
  // instantiate the form data from the request body

  const payment = await prisma.payment.findUnique({
    where: {
      id: req.params.id,
      userid: req.user?.userId,
    },
    include: {
      user: true,
      reservation: true,
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ payment });
});

const UpdatePaymentToFailed = expressAsyncHandler(async (req, res) => {
  const paymentId = req.params.id;

  // Update the payment status
  const payment = await prisma.payment.updateMany({
    where: {
      paymentGroupId: paymentId,
    },
    data: {
      status: "CANCELLED",
    },
  });

  // Fetch the updated payment records
  const updatedPaymentRecords = await prisma.payment.findMany({
    where: { paymentGroupId: paymentId },
  });

  // Update menu availability and served count
  const menuUpdates = updatedPaymentRecords.map(async ({ cartItems }) => {
    const updates = cartItems.map(async ({ menuid, totalCount }) => {
      // get the menu
      const menu = await prisma.menu.findFirst({
        where: { id: menuid },
      });
      if (!menu) {
        res.status(404);
        throw new Error("Such Menu do not exist");
      }
      return await prisma.menu.update({
        where: { id: menu?.id },
        data: {
          availabilityCount: menu?.availabilityCount - totalCount,
          servedCount: menu?.servedCount - totalCount,
        },
      });
    });
    return Promise.all(updates);
  });
  const updatedMenus = Promise.all(menuUpdates);

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({
    updatedMenus,
  });
});

const UpdatePaymentToSuccess = expressAsyncHandler(async (req, res) => {
  const paymentId = req.params.id;
  await prisma.payment.updateMany({
    where: { paymentGroupId: paymentId },
    data: { status: "CONFIRMED" },
  });
  const updatedPaymentRecords = await prisma.payment.findMany({
    where: { paymentGroupId: paymentId },
  });
  // console.log(updatedPaymentRecords);
  // check if the user has a cart
  const cart = await prisma.cart.findMany({
    where: { userid: req.user?.userId },
  });
  if (cart?.length > 0) {
    // delete the user cart
    await prisma.cart.deleteMany({
      where: { userid: req.user?.userId },
    });
  }

  res.status(200).json({ payment: updatedPaymentRecords });
});

export {
  CreatePayment,
  GetPaymentHistoryForAdmin,
  UpdatePaymentToFailed,
  GetSinglePaymentDetails,
  UpdatePaymentToSuccess,
};
