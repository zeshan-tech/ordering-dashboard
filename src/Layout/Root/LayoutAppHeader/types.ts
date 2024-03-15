export interface IAddNewStoreInput {
  name: string;
  logoUrl: string;
}

export interface IStore {
  ID: string;
  name: string;
  type: string;
  active: boolean;
  logoUrl: string;
  hyperlink: string;
  backgroundImageUrl: string;
}
