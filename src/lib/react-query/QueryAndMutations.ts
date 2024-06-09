import{
    useQuery,
    useMutation,
    useQueryClient,
    useIsFetching,
    useInfiniteQuery

}from '@tanstack/react-query';
import { SignInAccount, createUserAccount, signOutAccount } from '../appwrite/api';
import { INewUser } from '@/types';

export const useCreateUserAccountMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
}
export const useSignInAccount = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (user: {
            email: string;
            password: string;
        }) => SignInAccount(user),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
}
export const useSignOutAccount = () => {
    return useMutation({
      mutationFn: signOutAccount,
    });
  };
