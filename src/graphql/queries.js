/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        one
        two
        three
        four
        five
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFit = /* GraphQL */ `
  query GetFit($id: ID!) {
    getFit(id: $id) {
      id
      type
      model
      createdAt
      updatedAt
    }
  }
`;
export const listFits = /* GraphQL */ `
  query ListFits(
    $filter: ModelFitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        model
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSize = /* GraphQL */ `
  query GetSize($id: ID!) {
    getSize(id: $id) {
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
export const listSizes = /* GraphQL */ `
  query ListSizes(
    $filter: ModelSizeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        s
        m
        l
        xl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDetail = /* GraphQL */ `
  query GetDetail($id: ID!) {
    getDetail(id: $id) {
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
export const listDetails = /* GraphQL */ `
  query ListDetails(
    $filter: ModelDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMaterial = /* GraphQL */ `
  query GetMaterial($id: ID!) {
    getMaterial(id: $id) {
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
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imgone
        imgtwo
        imgthree
        imgfour
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
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
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          fitID
          materialID
          sizeID
          detailID
          imageID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
