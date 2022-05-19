export const convertClothesJsonToClothesDataGrid = (listClothes) => {
    return listClothes.map((item) => ({
      ...item,
      brandName: item.brand.name,
    }));
  };
  