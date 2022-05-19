import { Grid } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import FormCreateProduct from "../../../components/AdminPage/FormCreateProduct/FormCreateProduct";
import { StyledHeadingGroup } from "../../../components/AdminPage/FormCreateProduct/FormCreateProduct.styled";
import FormRowInput from "../../../components/AdminPage/FormCreateProduct/FormRowInput";
import Button from "@mui/material/Button";

import { useParams } from "react-router-dom";
import Toaster from "../../../components/Toaster/Toaster";
import { initialData, mobileFormField } from "./DataFormMobile";
import {
  createMobile,
  getDetailMobile,
  updateMobile,
} from "../../../api/Mobile.api";

function FormMobile({ edit }) {
  const [dataMobile, setDataMobile] = useState(initialData);
  const [toaster, setToaster] = useState({
    openToast: false,
    severity: "success",
    message: "",
  });

  const { id } = useParams();

  function handleChangeInput(e) {
    setDataMobile((pre) => ({
      ...pre,
      [e.target.getAttribute("name")]: e.target.value,
    }));
  }

  function handleCreate() {
    console.log(dataMobile);
    if (edit) {
      updateMobile(id, dataMobile).then((res) => {
        setToaster((pre) => ({
          openToast: true,
          severity: "success",
          message: "Edit mobile success",
        }));
      });
    } else {
      createMobile(dataMobile).then((res) => {
        setToaster((pre) => ({
          openToast: true,
          severity: "success",
          message: "Add new mobile success",
        }));
      });
    }
  }

  useLayoutEffect(() => {
    if (edit) {
      getDetailMobile(id).then((res) => setDataMobile(res.data));
    }
  }, [edit, id]);

  return (
    <FormCreateProduct>
      <StyledHeadingGroup variant="u-bold-24">
        Generate information :
      </StyledHeadingGroup>
      <Grid container alignItems="center" spacing={2}>
        {mobileFormField.map((item, index) => (
          <FormRowInput
            key={index}
            value={dataMobile[item.field]}
            type={item.type}
            name={item.field}
            title={item.title}
            placeholder={item.placeholder}
            onChange={handleChangeInput}
          />
        ))}
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: "50px" }}>
          <Button variant="contained" size="large" onClick={handleCreate}>
            {edit ? "Edit" : "Create"}
          </Button>
          <Button
            href="/admin/product/mobile"
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

export default FormMobile;
