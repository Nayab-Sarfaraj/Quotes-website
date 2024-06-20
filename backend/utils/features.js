class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const input = this.queryStr.quote
      ? {
          quote: {
            $regex: this.queryStr.quote,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...input });

    return this;
  }
  filter() {
    const input = this.queryStr.category
      ? {
          category: {
            $regex: this.queryStr.category,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...input });

    return this;
  }
  auhtor() {
    const input = this.queryStr.author
      ? {
          author: {
            $regex: this.queryStr.author,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...input });

    return this;
  }
  pagination(productPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = (currentPage - 1) * productPerPage;
    this.query = this.query.find().limit(productPerPage).skip(skip);
    return this;
  }
}
module.exports = apiFeatures;
