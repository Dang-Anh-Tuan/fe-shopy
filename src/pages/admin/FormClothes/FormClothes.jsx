import { Checkbox, fabClasses, Grid } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import FormCreateProduct from "../../../components/AdminPage/FormCreateProduct/FormCreateProduct";
import {
  StyledHeadingGroup,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "../../../components/AdminPage/FormCreateProduct/FormCreateProduct.styled";
import FormRowInput from "../../../components/AdminPage/FormCreateProduct/FormRowInput";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Toaster from "../../../components/Toaster/Toaster";
import { convertDataClothesToDataForm, convertDataFormToDataClothes, initialData } from "./DataFormClothes";
import {getDetailClothes} from "../../../api/Clothes.api"

function FormClothes({ edit }) {
  const initialDataClothesForm = convertDataClothesToDataForm(initialData);
  const [dataClothes, setDataClothes] = useState(initialDataClothesForm);
  const [listBrand, setListBrand] = useState([]);
  const [isNewBrand, setIsNewBrand] = useState(false);
  const [toaster, setToaster] = useState({
    openToast: false,
    severity: "success",
    message: "",
  });

  const { id } = useParams();

  function handleChangeInput(e) {
    setDataClothes((pre) => ({
      ...pre,
      [e.target.getAttribute("name")]: e.target.value,
    }));
  }

  function handleChangeBrand(e) {
    const idSelect = e.target.value;
    const brandSelected = listBrand.find((item) => item.id == idSelect);
    console.log(brandSelected);
    setDataClothes((pre) => ({
      ...pre,
      brandId: brandSelected.id,
      brandName: brandSelected.name,
      brandCountry: brandSelected.country,
    }));
  }

  function handleCreate() {
    if (isNewBrand) dataClothes.manufId = null;
    const data = convertDataFormToDataClothes(dataClothes);
    if (edit) {
      // updateLaptop(id, data).then((res) => {
      //   setToaster((pre) => ({
      //     openToast: true,
      //     severity: "success",
      //     message: "Edit clothes success",
      //   }));
      // });
    } else {
      // createLaptop(data).then((res) => {
      //   setToaster((pre) => ({
      //     openToast: true,
      //     severity: "success",
      //     message: "Add new clothes success",
      //   }));
      // });
    }
    console.log(dataClothes);
  }

  // useLayoutEffect(() => {
  //   getAllManuf().then((res) => setListBrand(res.data));
  // }, []);

  // useLayoutEffect(() => {
  //   if (listBrand.length > 0) {
  //     setDataClothes((pre) => ({
  //       ...pre,
  //       brandId: listBrand[0].id,
  //       brandName: listBrand[0].name,
  //       brandCountry: listBrand[0].country,
  //     }));
  //   }
  // }, [listBrand]);

  useLayoutEffect(() => {
    if (edit) {
      getDetailClothes(id).then((res) =>
        setDataClothes(convertDataClothesToDataForm(res.data))
      );
    }
  }, [edit, id]);

  return (
    <FormCreateProduct>
      <StyledHeadingGroup variant="u-bold-24">
        Generate information :
      </StyledHeadingGroup>
      <Grid container alignItems="center" spacing={2}>
        <FormRowInput
          onChange={handleChangeInput}
          value={dataClothes.color}
          name="color"
          title="Color"
          placeholder="Color ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataClothes.material}
          name="material"
          title="Material"
          placeholder="Material ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataClothes.size}
          name="size"
          title="Size"
          placeholder="Size ..."
        />
       
      </Grid>

      <StyledHeadingGroup variant="u-bold-24">Brand :</StyledHeadingGroup>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} alignItems="center" sx={{ display: "flex" }}>
          <Checkbox
            inputProps={{ "aria-label": "Create new publisher" }}
            size="large"
            checked={isNewBrand}
            onChange={() => setIsNewBrand(!isNewBrand)}
          />
          <StyledLabel variant="u-regular-20">
            Create new brand
          </StyledLabel>
        </Grid>

        <Grid item xs={2}>
          <StyledLabel variant="u-regular-20">Brand : </StyledLabel>
        </Grid>
        <Grid item xs={10}>
          <StyledSelect
            disabled={isNewBrand}
            onChange={handleChangeBrand}
            defaultValue={1}
          >
            {listBrand &&
              listBrand.map((item, index) => (
                <StyledOption key={index} value={item.id}>
                  {item.name}
                </StyledOption>
              ))}
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataClothes.brandName}
          name="brandName"
          title="Name"
          placeholder="Name ..."
          readonly={isNewBrand ? false : true}
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataClothes.brandCountry}
          name="brandCountry"
          title="Country"
          placeholder="Country ..."
          readonly={isNewBrand ? false : true}
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: "50px" }}>
          <Button variant="contained" size="large" onClick={handleCreate}>
            {edit ? "Edit" : "Create"}
          </Button>
          <Button
            href="/admin/product/clothes"
            variant="outlined"
            size="large"
            sx={{ marginLeft: "12px" }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Toaster
        openToast={toaster.openToast}
        severity={toaster.severity}
        message={toaster.message}
      />
    </FormCreateProduct>
  );
}

export default FormClothes;
