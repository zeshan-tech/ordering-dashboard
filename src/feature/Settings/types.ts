export interface IAddNewStoreInput {
  name: string;
  logoUrl: string;
  backgroundImageUrl: string;
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

export interface IUpdateStoreInput {
  name: string;
  active: boolean;
  logoUrl: string;
  backgroundImageUrl: string;
}
