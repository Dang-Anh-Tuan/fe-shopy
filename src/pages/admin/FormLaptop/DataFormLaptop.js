export const initialData = {
  id: null,
  name: "",
  gpu: 0,
  cpu: 0,
  storageSize: 0,
  ram: 0,
  screenSize: 0,
  manuf: {
    id: null,
    name: "",
    country: "",
  },
};

export function convertDataLaptopToDataForm(dataLaptop) {
  const res = {
    ...dataLaptop,
    manufId: dataLaptop.manuf.id,
    manufName: dataLaptop.manuf.name,
    manufCountry: dataLaptop.manuf.country,
  };

  delete res.manuf;

  return res;
}

export function convertDataFormToDataLaptop(dataLaptopForm) {
  const res = {
    ...dataLaptopForm,
    manuf: {
      id: dataLaptopForm.manufId,
      name: dataLaptopForm.manufName,
      country: dataLaptopForm.manufCountry,
    },
  };

  delete res.manufId;
  delete res.manufName;
  delete res.manufCountry;
  return res;
}
