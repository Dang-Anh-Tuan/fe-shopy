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
import {
  convertDataLaptopToDataForm,
  convertDataFormToDataLaptop,
  initialData,
} from "./DataFormLaptop";
import {
  createLaptop,
  getAllManuf,
  getDetailLaptop,
  updateLaptop,
} from "../../../api/Laptop.api";
import { useParams } from "react-router-dom";
import Toaster from "../../../components/Toaster/Toaster";

function FormLaptop({ edit }) {
  const initialDataLaptopForm = convertDataLaptopToDataForm(initialData);
  const [dataLaptop, setDataLaptop] = useState(initialDataLaptopForm);
  const [listManuf, setListManuf] = useState([]);
  const [isManuf, setIsManuf] = useState(false);
  const [toaster, setToaster] = useState({
    openToast: false,
    severity: "success",
    message: "",
  });

  const { id } = useParams();

  function handleChangeInput(e) {
    setDataLaptop((pre) => ({
      ...pre,
      [e.target.getAttribute("name")]: e.target.value,
    }));
  }

  function handleCreate() {
    if (isManuf) dataLaptop.manufId = null;
    const data = convertDataFormToDataLaptop(dataLaptop);
    if (edit) {
      updateLaptop(id, data);
    } else {
      createLaptop(data).then((res) => {
        setToaster((pre) => ({
          openToast: true,
          severity: "success",
          message: "Add new laptop success",
        }));
      });
    }
  }


  useLayoutEffect(() => {
    getAllManuf().then((res) => setListManuf(res.data));
  }, []);

  useLayoutEffect(() => {
    if (listManuf.length > 0) {
      setDataLaptop((pre) => ({
        ...pre,
        manufId: listManuf[0].id,
      }));
    }
  }, [listManuf]);

  useLayoutEffect(() => {
    if (edit) {
      getDetailLaptop(id).then((res) =>
        setDataLaptop(convertDataLaptopToDataForm(res.data))
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
          value={dataLaptop.name}
          name="name"
          title="name"
          placeholder="Name ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataLaptop.gpu}
          type="number"
          name="gpu"
          title="Gpu"
          placeholder="Gpu ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataLaptop.cpu}
          type="number"
          name="cpu"
          title="Cpu"
          placeholder="Cpu ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataLaptop.storageSize}
          type="storageSize"
          name="storageSize"
          title="Storage Size"
          placeholder="StorageSize ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataLaptop.ram}
          type="number"
          name="ram"
          title="Ram"
          placeholder="Ram ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataLaptop.screenSize}
          type="number"
          name="screenSize"
          title="Screen Size"
          placeholder="screen Size ..."
        />
      </Grid>

      <StyledHeadingGroup variant="u-bold-24">Manufacture :</StyledHeadingGroup>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} alignItems="center" sx={{ display: "flex" }}>
          <Checkbox
            inputProps={{ "aria-label": "Create new publisher" }}
            size="large"
            checked={isManuf}
            onChange={() => setIsManuf(!isManuf)}
          />
          <StyledLabel variant="u-regular-20">
            Create new manufacture
          </StyledLabel>
        </Grid>

        <Grid item xs={2}>
          <StyledLabel variant="u-regular-20">Manufacture : </StyledLabel>
        </Grid>
        <Grid item xs={10}>
          <StyledSelect
            name="manufId"
            disabled={isManuf}
            onChange={handleChangeInput}
            defaultValue={1}
          >
            {listManuf &&
              listManuf.map((item, index) => (
                <StyledOption key={index} value={item.id}>
                  {item.name}
                </StyledOption>
              ))}
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataLaptop.manufName}
          name="manufName"
          title="Name"
          placeholder="Name ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataLaptop.manufCountry}
          name="manufCountry"
          title="Country"
          placeholder="Country ..."
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: "50px" }}>
          <Button variant="contained" size="large" onClick={handleCreate}>
            {edit ? "Edit" : "Create"}
          </Button>
          <Button
            href="/admin/product/laptop"
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

export default FormLaptop;
