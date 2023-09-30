export enum ProductType {
  CARD = "CARD",
  KEYCHAIN = "KEYCHAIN",
  STICKER = "STICKER",
}

interface Product {
  _id: string;

  active: boolean;

  ownerId: string;

  type: ProductType;
}

export default Product;
