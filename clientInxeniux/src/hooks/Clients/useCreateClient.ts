import {useMutation, useQueryClient} from 'react-query';
import {basePath} from '../../config/basePath';
import {Client} from '../../types';
import {useState} from 'react';

async function createClient(client: Client): Promise<Client> {
    const response = await fetch(`${basePath}/clients/add-client`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    });

    return await response.json();
}

export function useCreateClient() {
    const [isCreating, setIsCreating] = useState(false);
    const queryClient = useQueryClient();

    const mutation = useMutation(createClient, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('clients');
            setIsCreating(false);
        }
    });

    const createClientWithCheck = async (client: Client) => {
        if (!isCreating) {
            setIsCreating(true);
            await mutation.mutateAsync(client);
        }
    };

    return {...mutation, mutateAsync: createClientWithCheck};
}
