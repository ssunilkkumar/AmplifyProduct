/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      productCode
      seller
      ratingID
      rating {
        id
        one
        two
        three
        four
        five
        createdAt
        updatedAt
      }
      fitID
      fit {
        id
        type
        model
        createdAt
        updatedAt
      }
      materialID
      material {
        id
        closures
        fabric
        fit
        length
        maintrend
        multipack
        neck
        occasion
        pattern
        createdAt
        updatedAt
      }
      sizeID
      size {
        id
        s
        m
        l
        xl
        createdAt
        updatedAt
      }
      detailID
      detail {
        id
        detailone
        detailtwo
        detailthree
        detailfour
        detailfive
        detailsix
        createdAt
        updatedAt
      }
      imageID
      image {
        id
        imgone
        imgtwo
        imgthree
        imgfour
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      productCode
      seller
      ratingID
      rating {
        id
        one
        two
        three
        four
        five
        createdAt
        updatedAt
      }
      fitID
      fit {
        id
        type
        model
        createdAt
        updatedAt
      }
      materialID
      material {
        id
        closures
        fabric
        fit
        length
        maintrend
        multipack
        neck
        occasion
        pattern
        createdAt
        updatedAt
      }
      sizeID
      size {
        id
        s
        m
        l
        xl
        createdAt
        updatedAt
      }
      detailID
      detail {
        id
        detailone
        detailtwo
        detailthree
        detailfour
        detailfive
        detailsix
        createdAt
        updatedAt
      }
      imageID
      image {
        id
        imgone
        imgtwo
        imgthree
        imgfour
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      productCode
      seller
      ratingID
      rating {
        id
        one
        two
        three
        four
        five
        createdAt
        updatedAt
      }
      fitID
      fit {
        id
        type
        model
        createdAt
        updatedAt
      }
      materialID
      material {
        id
        closures
        fabric
        fit
        length
        maintrend
        multipack
        neck
        occasion
        pattern
        createdAt
        updatedAt
      }
      sizeID
      size {
        id
        s
        m
        l
        xl
        createdAt
        updatedAt
      }
      detailID
      detail {
        id
        detailone
        detailtwo
        detailthree
        detailfour
        detailfive
        detailsix
        createdAt
        updatedAt
      }
      imageID
      image {
        id
        imgone
        imgtwo
        imgthree
        imgfour
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      one
      two
      three
      four
      five
      createdAt
      updatedAt
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      one
      two
      three
      four
      five
      createdAt
      updatedAt
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      one
      two
      three
      four
      five
      createdAt
      updatedAt
    }
  }
`;
export const createFit = /* GraphQL */ `
  mutation CreateFit(
    $input: CreateFitInput!
    $condition: ModelFitConditionInput
  ) {
    createFit(input: $input, condition: $condition) {
      id
      type
      model
      createdAt
      updatedAt
    }
  }
`;
export const updateFit = /* GraphQL */ `
  mutation UpdateFit(
    $input: UpdateFitInput!
    $condition: ModelFitConditionInput
  ) {
    updateFit(input: $input, condition: $condition) {
      id
      type
      model
      createdAt
      updatedAt
    }
  }
`;
export const deleteFit = /* GraphQL */ `
  mutation DeleteFit(
    $input: DeleteFitInput!
    $condition: ModelFitConditionInput
  ) {
    deleteFit(input: $input, condition: $condition) {
      id
      type
      model
      createdAt
      updatedAt
    }
  }
`;
export const createSize = /* GraphQL */ `
  mutation CreateSize(
    $input: CreateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    createSize(input: $input, condition: $condition) {
      id
      s
      m
      l
      xl
      createdAt
      updatedAt
    }
  }
`;
export const updateSize = /* GraphQL */ `
  mutation UpdateSize(
    $input: UpdateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    updateSize(input: $input, condition: $condition) {
      id
      s
      m
      l
      xl
      createdAt
      updatedAt
    }
  }
`;
export const deleteSize = /* GraphQL */ `
  mutation DeleteSize(
    $input: DeleteSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    deleteSize(input: $input, condition: $condition) {
      id
      s
      m
      l
      xl
      createdAt
      updatedAt
    }
  }
`;
export const createDetail = /* GraphQL */ `
  mutation CreateDetail(
    $input: CreateDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    createDetail(input: $input, condition: $condition) {
      id
      detailone
      detailtwo
      detailthree
      detailfour
      detailfive
      detailsix
      createdAt
      updatedAt
    }
  }
`;
export const updateDetail = /* GraphQL */ `
  mutation UpdateDetail(
    $input: UpdateDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    updateDetail(input: $input, condition: $condition) {
      id
      detailone
      detailtwo
      detailthree
      detailfour
      detailfive
      detailsix
      createdAt
      updatedAt
    }
  }
`;
export const deleteDetail = /* GraphQL */ `
  mutation DeleteDetail(
    $input: DeleteDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    deleteDetail(input: $input, condition: $condition) {
      id
      detailone
      detailtwo
      detailthree
      detailfour
      detailfive
      detailsix
      createdAt
      updatedAt
    }
  }
`;
export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
      id
      closures
      fabric
      fit
      length
      maintrend
      multipack
      neck
      occasion
      pattern
      createdAt
      updatedAt
    }
  }
`;
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
      id
      closures
      fabric
      fit
      length
      maintrend
      multipack
      neck
      occasion
      pattern
      createdAt
      updatedAt
    }
  }
`;
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
      id
      closures
      fabric
      fit
      length
      maintrend
      multipack
      neck
      occasion
      pattern
      createdAt
      updatedAt
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      imgone
      imgtwo
      imgthree
      imgfour
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      imgone
      imgtwo
      imgthree
      imgfour
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      imgone
      imgtwo
      imgthree
      imgfour
      createdAt
      updatedAt
    }
  }
`;
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      productID
      productItem {
        id
        name
        description
        price
        productCode
        seller
        ratingID
        rating {
          id
          one
          two
          three
          four
          five
          createdAt
          updatedAt
        }
        fitID
        fit {
          id
          type
          model
          createdAt
          updatedAt
        }
        materialID
        material {
          id
          closures
          fabric
          fit
          length
          maintrend
          multipack
          neck
          occasion
          pattern
          createdAt
          updatedAt
        }
        sizeID
        size {
          id
          s
          m
          l
          xl
          createdAt
          updatedAt
        }
        detailID
        detail {
          id
          detailone
          detailtwo
          detailthree
          detailfour
          detailfive
          detailsix
          createdAt
          updatedAt
        }
        imageID
        image {
          id
          imgone
          imgtwo
          imgthree
          imgfour
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      productID
      productItem {
        id
        name
        description
        price
        productCode
        seller
        ratingID
        rating {
          id
          one
          two
          three
          four
          five
          createdAt
          updatedAt
        }
        fitID
        fit {
          id
          type
          model
          createdAt
          updatedAt
        }
        materialID
        material {
          id
          closures
          fabric
          fit
          length
          maintrend
          multipack
          neck
          occasion
          pattern
          createdAt
          updatedAt
        }
        sizeID
        size {
          id
          s
          m
          l
          xl
          createdAt
          updatedAt
        }
        detailID
        detail {
          id
          detailone
          detailtwo
          detailthree
          detailfour
          detailfive
          detailsix
          createdAt
          updatedAt
        }
        imageID
        image {
          id
          imgone
          imgtwo
          imgthree
          imgfour
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      productID
      productItem {
        id
        name
        description
        price
        productCode
        seller
        ratingID
        rating {
          id
          one
          two
          three
          four
          five
          createdAt
          updatedAt
        }
        fitID
        fit {
          id
          type
          model
          createdAt
          updatedAt
        }
        materialID
        material {
          id
          closures
          fabric
          fit
          length
          maintrend
          multipack
          neck
          occasion
          pattern
          createdAt
          updatedAt
        }
        sizeID
        size {
          id
          s
          m
          l
          xl
          createdAt
          updatedAt
        }
        detailID
        detail {
          id
          detailone
          detailtwo
          detailthree
          detailfour
          detailfive
          detailsix
          createdAt
          updatedAt
        }
        imageID
        image {
          id
          imgone
          imgtwo
          imgthree
          imgfour
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
