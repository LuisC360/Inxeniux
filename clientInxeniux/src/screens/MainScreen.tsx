import React from 'react';
import EnhancedTable from '../components/EnhancedTable';
import {useClients} from '../hooks/Clients/useClients';
import LoadingAndErrorCentered from '../components/LoadingAndErrorCentered';

export default function MainScreen(): JSX.Element {
    const {data, isLoading, isError, error} = useClients();
    return (
        <>
            <LoadingAndErrorCentered isLoading={isLoading} isError={isError} error={error} />
            {data != null && <EnhancedTable rows={data} />}
        </>
    );
}
