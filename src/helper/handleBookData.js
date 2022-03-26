export const convertBookJsonToBookDataGrid = (listBook) => {
  return listBook.map((item) => ({
    ...item,
    authorName: item.author.name,
    categoryType: item.category.type,
    publisherName: item.publisher.name,
  }));
};
