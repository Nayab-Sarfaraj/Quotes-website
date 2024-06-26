const Quote = require("../models/quoteSchema");
const ErrorHandler = require("../utils/errorHandler");
const apiFeatures = require("../utils/features");
const getAllQuotes = async (req, res, next) => {
  try {
    const apifeature = new apiFeatures(Quote.find(), req.query)
      .filter()
      .auhtor();

    const quotes = await apifeature.query;

    const authors = {};
    const categories = {};
    quotes.forEach((quote) => {
      const author = quote.author;
      const category = quote.category;
      authors[author] = author;
      categories[category] = category;
    });
    const authorArr = Object.keys(authors);
    const categoryArr = Object.keys(categories);
    return res.json({
      quotes,
      authorArr,
      categoryArr,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
};
const createQuote = async (req, res, next) => {
  try {
    const { quote, category } = req.body;
    if (!quote) return next(new ErrorHandler("Text is required", 401));
    if (!category) return next(new ErrorHandler("Category is required", 402));
    const newQuote = await Quote(req.body);
    const savedQuote = await newQuote.save();
    console.log(savedQuote);
    return res.json(newQuote);
  } catch (error) {
    console.log("error is :", error);
    return next(new ErrorHandler(error.message, 401));
  }
};
const getQuotes = async (req, res, next) => {
  try {
    console.log("i am being called");
    const productPerPage = 6;

    const apifeature = new apiFeatures(Quote.find(), req.query)
      .search()
      .filter()
      .auhtor()
      .pagination(productPerPage);

    const quotes = await apifeature.query;
    console.log(quotes);
    if (!quotes) return next(new ErrorHandler("No quotes exist ", 400));

    return res.status(200).json(quotes);
  } catch (error) {
    console.log("error is :", error);
    return next(new ErrorHandler(error.message, 401));
  }
};

const deleteQuote = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    if (!id) return next(new ErrorHandler("Id is required", 401));
    const quote = await Quote.findByIdAndDelete(id);
    return res.json(quote);
  } catch (error) {
    console.log("error is :", error);
    return next(new ErrorHandler(error.message, 401));
  }
};
const updateQuote = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(req.params);
    if (!id) return next(new ErrorHandler("Id is required", 401));

    const quote = await Quote.findByIdAndUpdate(id, req.body, { new: true });

    return res.json(quote);
  } catch (error) {
    console.log("error is :", error);
    return next(new ErrorHandler(error.message, 401));
  }
};
const getSingleQuote = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) return next(new ErrorHandler("Id is required", 401));
    console.log("the id is " + id);
    const quote = await Quote.findOne({ _id: id });
    if (!quote) return next(new ErrorHandler("Quote does not exist", 401));
    return res.json({
      success: true,
      quote,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 401));
  }
};
module.exports = {
  createQuote,
  getQuotes,
  deleteQuote,
  updateQuote,
  getAllQuotes,
  getSingleQuote,
};
