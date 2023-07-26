import {useQuery, UseQueryResult} from 'react-query';
import {basePath} from '../../config/basePath';
import {Client} from '../../types';

async function getClients(): Promise<Client[]> {
    const response = await fetch(`${basePath}/clients/`, {
        method: 'GET'
    });

    return await response.json();
}

export function useClients(): UseQueryResult<Client[], unknown> {
    return useQuery('clients', getClients);
}
