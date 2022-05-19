import { Checkbox, Grid } from "@mui/material";
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
  convertDataBookToDataForm,
  convertDataFormToDataBook,
  initialData,
} from "./DataFormBook";
import {
  createBook,
  getAllAuthor,
  getAllCategory,
  getAllPublisher,
  getDetailBook,
  updateBook,
} from "../../../api/Book.api";
import Toaster from "../../../components/Toaster/Toaster";
import { useParams } from "react-router-dom";

function FormBook({ edit }) {
  const initialDataBookForm = convertDataBookToDataForm(initialData);
  const [dataBook, setDataBook] = useState(initialDataBookForm);
  const [listAuthor, setListAuthor] = useState([]);
  const [listPublisher, setListPublisher] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [isNewPublisher, setIsNewPublisher] = useState(false);
  const [isNewAuthor, setIsNewAuthor] = useState(false);
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [toaster, setToaster] = useState({
    openToast: false,
    severity: "success",
    message: "",
  });

  const { id } = useParams();

  function handleChangeInput(e) {
    setDataBook((pre) => ({
      ...pre,
      [e.target.getAttribute("name")]: e.target.value,
    }));
  }

  function handleChangePublisher(e) {
    const idSelect = e.target.value;
    const publisherSelected = listPublisher.find((item) => item.id == idSelect);
    setDataBook((pre) => ({
      ...pre,
      publisherId: publisherSelected.id,
      publisherName: publisherSelected.name,
      publisherAddress: publisherSelected.address,
    }));
  }

  function handleChangeAuthor(e) {
    const idSelect = e.target.value;
    const authorSelected = listAuthor.find((item) => item.id == idSelect);
    setDataBook((pre) => ({
      ...pre,
      authorId: authorSelected.id,
      authorName: authorSelected.name,
      authorCountry: authorSelected.country,
    }));
  }

  function handleChangeCategory(e) {
    const idSelect = e.target.value;
    const categorySelected = listCategory.find((item) => item.id == idSelect);
    setDataBook((pre) => ({
      ...pre,
      categoryId: categorySelected.id,
      categoryName: categorySelected.name,
    }));
  }

  function handleCreate() {
    if (isNewPublisher) dataBook.publisherId = null;
    if (isNewAuthor) dataBook.authorId = null;
    if (isNewCategory) dataBook.categoryId = null;
    const data = convertDataFormToDataBook(dataBook);
    if (edit) {
      updateBook(id, data).then((res) => {
        setToaster((pre) => ({
          openToast: true,
          severity: "success",
          message: "Edit book success",
        }));
      });
    } else {
      createBook(data).then((res) => {
        setToaster((pre) => ({
          openToast: true,
          severity: "success",
          message: "Add new book success",
        }));
      });
    }
  }

  useLayoutEffect(() => {
    getAllAuthor().then((res) => setListAuthor(res.data));
    getAllPublisher().then((res) => setListPublisher(res.data));
    getAllCategory().then((res) => setListCategory(res.data));
  }, []);

  useLayoutEffect(() => {
    if (listAuthor.length > 0) {
      setDataBook((pre) => ({
        ...pre,
        authorId: listAuthor[0].id,
        authorName: listAuthor[0].name,
        authorCountry: listAuthor[0].country,
      }));
    }
    if (listPublisher.length > 0) {
      setDataBook((pre) => ({
        ...pre,
        publisherId: listPublisher[0].id,
        publisherName: listPublisher[0].name,
        publisherAddress: listPublisher[0].address,
      }));
    }
    if (listCategory.length > 0) {
      setDataBook((pre) => ({
        categoryId: listCategory[0].id,
        categoryName: listCategory[0].name,
      }));
    }
  }, [listAuthor, listCategory, listPublisher]);

  useLayoutEffect(() => {
    if (edit) {
      getDetailBook(id).then((res) =>
        setDataBook(convertDataBookToDataForm(res.data))
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
          value={dataBook.title}
          name="title"
          title="Title"
          placeholder="Title ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.summary}
          name="summary"
          title="Summary"
          placeholder="Summary ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.num}
          name="num"
          type="number"
          title="Number Of Page"
          placeholder="Number Of Page ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.language}
          name="language"
          title="Language"
          placeholder="Language ..."
        />
      </Grid>

      <StyledHeadingGroup variant="u-bold-24">Publisher :</StyledHeadingGroup>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} alignItems="center" sx={{ display: "flex" }}>
          <Checkbox
            inputProps={{ "aria-label": "Create new publisher" }}
            size="large"
            checked={isNewPublisher}
            onChange={() => setIsNewPublisher(!isNewPublisher)}
          />
          <StyledLabel variant="u-regular-20">Create new publisher</StyledLabel>
        </Grid>

        <Grid item xs={2}>
          <StyledLabel variant="u-regular-20">Publisher : </StyledLabel>
        </Grid>
        <Grid item xs={10}>
          <StyledSelect
            value={dataBook.publisherId}
            disabled={isNewPublisher}
            onChange={handleChangePublisher}
          >
            {listPublisher &&
              listPublisher.map((item, index) => (
                <StyledOption key={index} value={item.id}>
                  {item.name}
                </StyledOption>
              ))}
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.publisherName}
          name="publisherName"
          title="Name"
          placeholder="Name ..."
          readonly={isNewPublisher ? false : true}
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.publisherAddress}
          name="publisherAddress"
          title="Address"
          placeholder="Address ..."
          readonly={isNewPublisher ? false : true}
        />
      </Grid>

      <StyledHeadingGroup variant="u-bold-24">Author :</StyledHeadingGroup>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} alignItems="center" sx={{ display: "flex" }}>
          <Checkbox
            inputProps={{ "aria-label": "Create new author" }}
            size="large"
            checked={isNewAuthor}
            onChange={() => setIsNewAuthor(!isNewAuthor)}
          />
          <StyledLabel variant="u-regular-20">Create new author</StyledLabel>
        </Grid>

        <Grid item xs={2}>
          <StyledLabel variant="u-regular-20">Author : </StyledLabel>
        </Grid>
        <Grid item xs={10}>
          <StyledSelect
            value={dataBook.authorId}
            disabled={isNewAuthor}
            onChange={handleChangeAuthor}
          >
            {listAuthor &&
              listAuthor.map((item, index) => (
                <StyledOption key={index} value={item.id}>
                  {item.name}
                </StyledOption>
              ))}
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.authorName}
          name="authorName"
          title="Name"
          placeholder="Name ..."
          readonly={isNewAuthor ? false : true}
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.authorCountry}
          name="authorCountry"
          title="Country"
          placeholder="Country ..."
          readonly={isNewAuthor ? false : true}
        />
      </Grid>

      <StyledHeadingGroup variant="u-bold-24">Category :</StyledHeadingGroup>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} alignItems="center" sx={{ display: "flex" }}>
          <Checkbox
            inputProps={{ "aria-label": "Create new category" }}
            size="large"
            checked={isNewCategory}
            onChange={() => setIsNewCategory(!isNewCategory)}
          />
          <StyledLabel variant="u-regular-20">Create new category</StyledLabel>
        </Grid>

        <Grid item xs={2}>
          <StyledLabel variant="u-regular-20">Category : </StyledLabel>
        </Grid>
        <Grid item xs={10}>
          <StyledSelect
            value={dataBook.categoryId}
            disabled={isNewCategory}
            onChange={handleChangeCategory}
          >
            {listCategory &&
              listCategory.map((item, index) => (
                <StyledOption key={index} value={item.id}>
                  {item.name}
                </StyledOption>
              ))}
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.categoryName}
          name="categoryName"
          title="Name"
          placeholder="Name ..."
          readonly={isNewCategory ? false : true}
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: "50px" }}>
          <Button variant="contained" size="large" onClick={handleCreate}>
            Create
          </Button>
          <Button
            href="/admin/product/book"
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

export default FormBook;
