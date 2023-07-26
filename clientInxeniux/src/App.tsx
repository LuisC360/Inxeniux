import React from 'react';
import './App.css';
import MainScreen from './screens/MainScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            notifyOnChangeProps: 'tracked'
        }
    }
});

function App(): JSX.Element {
    return (
        <QueryClientProvider client={client}>
            <div className='App'>
                <MainScreen />
            </div>
        </QueryClientProvider>
    );
}

export default App;
