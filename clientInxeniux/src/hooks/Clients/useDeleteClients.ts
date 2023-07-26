import {useMutation, useQueryClient, UseMutationResult} from 'react-query';
import {basePath} from '../../config/basePath';

async function deleteClients(clientsIds: string[]): Promise<unknown> {
    const response = await fetch(`${basePath}/clients/delete-client`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientsIds)
    });

    return await response.json();
}

export function useDeleteClients(): UseMutationResult<unknown, unknown, string[], unknown> {
    const queryClient = useQueryClient();
    return useMutation(deleteClients, {
        onSuccess: async () => {
            return await queryClient.invalidateQueries(['clients']);
        }
    });
}
