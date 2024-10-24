import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";

// @description  Get all product
// @route  GET /product
// @access  Public
const GetAllProduct = asyncHandler(async (req, res) => {
  const Product = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  return res.json(Product);
});

// @description  Get all product for the Admin
// @route  GET /product/admin
// @access  Private
const GetAllAdminProducts = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 4;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const totalProduct = await prisma.product.count({});

  const Product = await prisma.product.findMany({
    skip: skip,
    take: limit,
    where: {
      userid: req.user?.userId,
    },
    include: {
      user: true,
    },
  });

  const noOfPages = Math.ceil(totalProduct / limit);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ Product, noOfPages, totalProduct });
});

// @description  Create product
// @route  POST /product
// @access  Private
const CreateProducts = asyncHandler(async (req, res) => {
  const Product = await prisma.product.create({
    data: {
      userid: req.user?.userId,
      ...req.body,
    },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  return res.json(Product);
});

// @description  Get a single product
// @route  GET /product/:id
// @access  Public
const GetSingleProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const Product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });

  if (!Product) {
    res.status(404);
    throw new Error("The Product does not exist");
  }
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  return res.json(Product);
});

// @description  Update a single product
// @route  PUT /product/:id
// @access  Private
const UpdateProduct = asyncHandler(async (req, res) => {
  const updateProduct = await prisma.product.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ updateProduct });
});

// @description  Delete a single product
// @route  DELETE /product/:id
// @access  Private
const DeleteProduct = asyncHandler(async (req, res) => {
  const Product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!Product) {
    res.status(404);
    throw new Error("The Product does not exist");
  }
  await prisma.product.delete({
    where: { id: req.params.id },
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ msg: "The Product has been successfully deleted" });
});


export {
  GetAllProduct,
  CreateProducts,
  GetSingleProduct,
  DeleteProduct,
  GetAllAdminProducts,
  UpdateProduct,
};
