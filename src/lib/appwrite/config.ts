import {Client,Account,Databases,Storage,Avatars} from 'appwrite';


export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    databaseId: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    postsCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
    storageId: import.meta.env.VITE_APPWRITE_PROJECT_STORAGE_ID,
  };

  export const client = new Client()
  .setEndpoint(appwriteConfig.url) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId); // Your project ID


  export const account = new Account(client);
  export const databases = new Databases(client);
  export const storage = new Storage(client);
  export const avatars = new Avatars(client);

  console.log('Appwrite Project ID:', import.meta.env.VITE_APPWRITE_PROJECT_ID);
console.log('Appwrite Project URL:', import.meta.env.VITE_APPWRITE_URL);
