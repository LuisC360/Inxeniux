import {useMutation, useQueryClient} from 'react-query';
import {basePath} from '../../config/basePath';
import {Address, Client} from '../../types';
import {useState} from 'react';
import {CreateClientData} from '../../types';

async function createClient(data: CreateClientData): Promise<Client> {
    const requestData = {
        client: data.client,
        address: data.address
    };
    const response = await fetch(`${basePath}/clients/add-client`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
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
    const createClientWithCheck = async (client: Client, address: Address) => {
        if (!isCreating) {
            setIsCreating(true);
            const data = {client, address};
            await mutation.mutateAsync(data);
        }
    };

    return {...mutation, mutateAsync: createClientWithCheck};
}
