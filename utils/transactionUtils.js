// transactionUtil.js

exports.calculateOffset = (page, perPage) => {
    return (page - 1) * perPage;
  };
  
  exports.calculateTotalPages = (totalCount, perPage) => {
    return Math.ceil(totalCount / perPage);
  };
  