import { Checkbox, Grid } from "@mui/material";
import React, { useState } from "react";
import FormCreateProduct from "../../../components/AdminPage/FormCreateProduct/FormCreateProduct";
import {
  StyledHeadingGroup,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "../../../components/AdminPage/FormCreateProduct/FormCreateProduct.styled";
import FormRowInput from "../../../components/AdminPage/FormCreateProduct/FormRowInput";
import Button from "@mui/material/Button";
import { convertDataBookToDataForm, convertDataFormToDataBook, initialData } from "./DataFormBook";

function FormBook() {
  const initialDataBookForm = convertDataBookToDataForm(initialData);
  const [dataBook, setDataBook] = useState(initialDataBookForm);
  const [isNewPublisher, setIsNewPublisher] = useState(false);
  const [isNewAuthor, setIsNewAuthor] = useState(false);
  const [isNewCategory, setIsNewCategory] = useState(false);

  function handleChangeInput(e) {
    setDataBook((pre) => ({
      ...pre,
      [e.target.getAttribute("name")]: e.target.value,
    }));
  }

  function handleCreate(){
    if(isNewPublisher) dataBook.publisherId = null;
    if(isNewAuthor) dataBook.authorId = null;
    if(isNewCategory) dataBook.categoryId = null;
    const data  = convertDataFormToDataBook(dataBook)
    console.log(data);

  }

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
          value={dataBook.publicationDate}
          name="publicationDate"
          type="date"
          title="Publication Date"
          placeholder="Publication Date ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.numOfPage}
          name="numOfPage"
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
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.dimensions}
          name="dimensions"
          title="Dimensions"
          placeholder="Dimensions ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.weight}
          name="weight"
          type="number"
          title="Weight"
          placeholder="Weight ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.editor}
          name="editor"
          title="Editor"
          placeholder="Editor ..."
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
          <StyledSelect value={dataBook.publisherId} disabled={isNewPublisher}>
            <StyledOption value="1">Kim dong</StyledOption>
            <StyledOption value="1">Kim dong</StyledOption>

            <StyledOption value="1">Kim dong</StyledOption>
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.publisherName}
          name="publisherName"
          title="Name"
          placeholder="Name ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.publisherAddress}
          name="publisherAddress"
          title="Address"
          placeholder="Address ..."
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
          <StyledSelect value={dataBook.authorId} disabled={isNewAuthor}>
            <StyledOption value="1">NamCao</StyledOption>
            <StyledOption value="1">NamCao</StyledOption>

            <StyledOption value="1">NamCao</StyledOption>
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.authorName}
          name="authorName"
          title="Name"
          placeholder="Name ..."
        />
        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.authorBiography}
          name="authorBiography"
          title="Biography"
          placeholder="Biography ..."
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
          <StyledSelect value={dataBook.categoryId} disabled={isNewCategory}>
            <StyledOption value="1">Khoa hoc</StyledOption>
            <StyledOption value="1">Nghe Thuat</StyledOption>

            <StyledOption value="1">Ther</StyledOption>
          </StyledSelect>
        </Grid>

        <FormRowInput
          onChange={handleChangeInput}
          value={dataBook.categoryType}
          name="categoryType"
          title="Type"
          placeholder="Name ..."
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
    </FormCreateProduct>
  );
}

export default FormBook;
