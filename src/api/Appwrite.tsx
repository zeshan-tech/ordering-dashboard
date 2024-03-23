export const productDbId = "65fd404cef1c64d56fcd";
export const productCollectionId = "65fd54fc2043a05deab8";
export const storeCollectionId = "65fd549431197b971a15";

import { Client, Databases, Account, ID } from "appwrite";

interface ApiProvider {
  sdk: { database: Databases; account: Account } | null;
  provider: () => { database: Databases; account: Account };
  createAccount: (email: string, password: string, name: string) => Promise<any>;
  getAccount: () => Promise<any>;
  createSession: (email: string, password: string) => Promise<any>;
  deleteCurrentSession: () => Promise<any>;
  createDocument: (databaseId: string, collectionId: string, data: Record<string, any>, permissions?: any) => Promise<any>;
  listDocuments: (databaseId: string, collectionId: string) => Promise<any>;
  updateDocument: (databaseId: string, collectionId: string, documentId: string, data: any) => Promise<any>;
  deleteDocument: (databaseId: string, collectionId: string, documentId: string) => Promise<any>;
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

  async createDocument(databaseId, collectionId, data, permissions) {
    return this.provider().database.createDocument(databaseId, collectionId, ID.unique(), data, permissions);
  },

  async listDocuments(databaseId, collectionId) {
    return this.provider().database.listDocuments(databaseId, collectionId);
  },

  async updateDocument(databaseId, collectionId, documentId, data) {
    return this.provider().database.updateDocument(databaseId, collectionId, documentId, data);
  },

  async deleteDocument(databaseId, collectionId, documentId) {
    return this.provider().database.deleteDocument(databaseId, collectionId, documentId);
  },
};

export default api;
