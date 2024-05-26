import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account, appwriteconfig, avatars, database } from "./config";

export async function createUserAccount(user:INewUser){
    try {
        const newAccount= await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        if(!newAccount) throw Error;
        const avatarUrl=avatars.getInitials(user.name);
        const newUser = await saveUserToDB({
            accountId:newAccount.$id,
            name:newAccount.name,
            email:newAccount.email,
            imageUrl:avatarUrl,

        })
        return newUser
    } catch (error) {
        console.log(error);
        return error;
        
    }
}
export async function saveUserToDB(user:{
    accountId:string;
    name:string;
    email:string;
    imageUrl:URL;
    userName?:string;
}){
    try {
        const newUSer = await database.createDocument(
            appwriteconfig.databaseId,
            appwriteconfig.userCollectionId,
            ID.unique(),
            user,
        )
        return newUSer

    }

    catch (error) {
        console.log(error);

    }
}

export async function SignInAccount(user:{email:string;password:string}){
    try {
        const session= await account.createEmailSession(
            user.email,
            user.password
        )
        return session
        
       
    } catch (error) {
        console.log(error);
        return error;
        
    }
}