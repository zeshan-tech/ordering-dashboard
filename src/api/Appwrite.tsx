export const productDbId = "65fd404cef1c64d56fcd";
export const productCollectionId = "65fd54fc2043a05deab8";
export const categoryCollectionId = "65fd41142dfe160e9e36";
export const variantCollectionId = "65fd5605e560bcce5862";
export const storeCollectionId = "65fd549431197b971a15";

import { Client, Databases, Account, ID } from "appwrite";

interface ApiProvider {
  sdk: { database: Databases; account: Account } | null;
  provider: () => { database: Databases; account: Account };
  createAccount: (email: string, password: string, name: string) => Promise<any>;
  getAccount: () => Promise<any>;
  createSession: (email: string, password: string) => Promise<any>;
  deleteCurrentSession: () => Promise<any>;
  createDocument: <T>(databaseId: string, collectionId: string, data: Record<string, any>, permissions?: any, ID?: string) => Promise<T>;
  listDocuments: <T>(databaseId: string, collectionId: string, queries?: string[]) => Promise<T>;
  getDocument: <T>(databaseId: string, collectionId: string, documentId: string) => Promise<T>;
  updateDocument: <T>(databaseId: string, collectionId: string, documentId: string, data: Record<string, any>) => Promise<T>;
  deleteDocument: <T>(databaseId: string, collectionId: string, documentId: string) => Promise<T>;
  createMultipleDocuments: <T>(databaseId: string, collectionId: string, records: Record<string, any>[], permissions?: any) => Promise<T[]>;
}

const api: ApiProvider = {
  sdk: null,

  provider() {
    if (this.sdk) {
      return this.sdk;
    }
    const appwrite = new Client();
    // TODO: it will update by .env
    appwrite.setEndpoint("https://cloud.appwrite.io/v1").setProject("65fd3ed09d2aff44e36f");
    const account = new Account(appwrite);
    const database = new Databases(appwrite);

    this.sdk = { database, account };
    return this.sdk;
  },

  async createAccount(email, password, name) {
    return this.provider().account.create("unique()", email, password, name);
  },

  async getAccount() {
    const account = this.provider().account;
    return account.get();
  },

  async createSession(email, password) {
    return this.provider().account.createEmailPasswordSession(email, password);
  },

  async deleteCurrentSession() {
    return this.provider().account.deleteSession("current");
  },

  async createDocument<T>(databaseId: string, collectionId: string, data: Record<string, any>, permissions?: any, id?: string): Promise<T> {
    return this.provider().database.createDocument(databaseId, collectionId, id ?? ID.unique(), data, permissions) as T;
  },

  async listDocuments<T>(databaseId: string, collectionId: string, queries?: string[]): Promise<T> {
    return this.provider().database.listDocuments(databaseId, collectionId, queries) as T;
  },

  async getDocument<T>(databaseId: string, collectionId: string, documentId: string): Promise<T> {
    return this.provider().database.getDocument(databaseId, collectionId, documentId) as T;
  },

  async updateDocument<T>(databaseId: string, collectionId: string, documentId: string, data: Record<string, any>): Promise<T> {
    return this.provider().database.updateDocument(databaseId, collectionId, documentId, data) as T;
  },

  async deleteDocument<T>(databaseId: string, collectionId: string, documentId: string): Promise<T> {
    return this.provider().database.deleteDocument(databaseId, collectionId, documentId) as T;
  },

  async createMultipleDocuments<T>(databaseId: string, collectionId: string, records: Record<string, any>[], permissions?: any): Promise<T[]> {
    const createdDocuments: T[] = [];

    for (const record of records) {
      const createdDocument = await api.createDocument<T>(databaseId, collectionId, record, permissions);
      createdDocuments.push(createdDocument);
    }

    return createdDocuments;
  },
};

export default api;
