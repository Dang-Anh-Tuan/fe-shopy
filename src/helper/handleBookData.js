export const convertBookJsonToBookDataGrid = (listBook) => {
  return listBook.map((item) => ({
    ...item,
    authorName: item.author.name,
    categoryName: item.category.name,
    publisherName: item.publisher.name,
  }));
};
