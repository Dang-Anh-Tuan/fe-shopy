export const initialData = {
  id: null,
  title: "",
  summary: "",
  num: 0,
  language: "",
  publisher: {
    id: null,
    name: "",
    address: "",
  },
  author: {
    id: null,
    name: "",
    country: "",
  },
  category: {
    id: null,
    name: "",
  },
};

export function convertDataBookToDataForm(dataBook) {
  const res = {
    ...dataBook,
    publisherId: dataBook.publisher.id,
    publisherName: dataBook.publisher.name,
    publisherAddress: dataBook.publisher.address,
    authorId: dataBook.author.id,
    authorName: dataBook.author.name,
    authorCountry: dataBook.author.country,
    categoryId: dataBook.category.id,
    categoryName: dataBook.category.name,
  };

  delete res.publisher;
  delete res.author;
  delete res.category;

  return res;
}

export function convertDataFormToDataBook(dataBookForm) {
  const res = {
    ...dataBookForm,
    publisher: {
      id: dataBookForm.publisherId,
      name: dataBookForm.publisherName,
      address: dataBookForm.publisherAddress,
    },
    author: {
      id: dataBookForm.authorId,
      name: dataBookForm.authorName,
      country: dataBookForm.authorCountry,
    },
    category: {
      id: dataBookForm.categoryId,
      name: dataBookForm.categoryName,
    },
  };

  delete res.publisherId;
  delete res.publisherName;
  delete res.publisherAddress;
  delete res.authorId;
  delete res.authorName;
  delete res.authorCountry;
  delete res.categoryId;
  delete res.categoryName;
  return res;
}

// export const dataField = [
// 	[
// 		"Generate information :",
// 		{
// 			field: "title",
// 			name: "title",
// 			title: "Title",
// 			type: "text",
// 			placeholder: "Title ...",
// 		},
// 		{
// 			field: "summary",
// 			name: "summary",
// 			title: "Summary",
// 			type: "text",
// 			placeholder: "Summary ...",
// 		},
// 		{
// 			field: "numOfPage",
// 			name: "numOfPage",
// 			title: "Number Of Page",
// 			type: "number",
// 			placeholder: "Number Of Page ...",
			
// 		},
// 		{
// 			field: "language",
// 			name: "language",
// 			title: "Language",
// 			type: "text",
// 			placeholder: "Language ...",
// 		}
// 	],
// 	[
// 		"Author :",
// 		{
// 			field: "title",
// 			name: "title",
// 			title: "Title",
// 			type: "text",
// 			placeholder: "Title ...",
// 		},
// 		{
// 			field: "summary",
// 			name: "summary",
// 			title: "Summary",
// 			type: "text",
// 			placeholder: "Summary ...",
// 		},
// 		{
// 			field: "numOfPage",
// 			name: "numOfPage",
// 			title: "Number Of Page",
// 			type: "number",
// 			placeholder: "Number Of Page ...",
			
// 		},
// 		{
// 			field: "language",
// 			name: "language",
// 			title: "Language",
// 			type: "text",
// 			placeholder: "Language ...",
// 		}
// 	]
 
  
// ];
