export const initialData = {
  id: null,
  color: "",
  material: "",
  size: "",
  brand: {
    id: null,
    name: "",
    country: "",
  },
};


export function convertDataClothesToDataForm(dataClothes) {
    const res = {
      ...dataClothes,
      brandId: dataClothes.brand.id,
      brandName: dataClothes.brand.name,
      brandCountry: dataClothes.brand.country,
    };
  
    delete res.brand;
  
    return res;
  }
  
  export function convertDataFormToDataClothes(dataClothesForm) {
    const res = {
      ...dataClothesForm,
      brand: {
        id: dataClothesForm.brandId,
        name: dataClothesForm.brandName,
        country: dataClothesForm.brandCountry,
      },
    };
  
    delete res.brandId;
    delete res.brandName;
    delete res.brandCountry;
    return res;
  }
  