import {Client,Account,Databases,Storage,Avatars} from 'appwrite';


export const appwriteconfig={

    projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url:import.meta.env.VITE_APPWRITE_PROJECT_URL,
    databaseId:import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
    savesCollectionId:import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    userCollectionId:import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    postsCollectionId:import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
    storageId:import.meta.env.VITE_APPWRITE_PROJECT_STORAGE_ID


}

export const client = new Client();
client.setProject(appwriteconfig.projectId);
client.setEndpoint(appwriteconfig.url);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
