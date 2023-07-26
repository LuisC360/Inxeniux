import {useMutation, useQueryClient, UseMutationResult} from 'react-query';
import {basePath} from '../../config/basePath';

async function createClient() {
    const response = await fetch(`${basePath}/clients/`, {});

    return await response.json();
}

export function useCreateCLient() {
    const queryClient = useQueryClient();

    return useMutation(createClient, {
        onSuccess: async () => {
            return await queryClient.invalidateQueries('clients');
        }
    });
}
