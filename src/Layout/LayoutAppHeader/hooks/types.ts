export interface IAddNewStoreInput {
  name: string;
  logoUrl: string;
}

export interface IGetAllStoresOutput {
  ID: string;
  name: string;
  type: string;
  active: boolean;
  logoUrl: string;
  hyperlink: string;
  backgroundImageUrl: string;
}
