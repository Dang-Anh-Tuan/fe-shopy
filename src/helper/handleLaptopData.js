export const convertLaptopJsonToLaptopDataGrid = (listLaptop) => {
    return listLaptop.map((item) => ({
      ...item,
      manufName: item.manuf.name,
      manufCountry: item.manuf.country,
    }));
  };
  