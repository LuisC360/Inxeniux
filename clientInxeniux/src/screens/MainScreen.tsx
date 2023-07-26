import React from 'react';
import EnhancedTable from '../components/EnhancedTable';
import {Client} from '../types';

function createData(name: string, first_last_name: string, second_last_name: string, age: number, gender: string): Client {
    return {
        name,
        first_last_name,
        second_last_name,
        age,
        gender
    };
}

const rows = [
    createData('Dorian', 'Chavez', 'Garcia', 32, 'M'),
    createData('Inés', 'Rodriguez', 'Huanca', 25, 'F'),
    createData('Carlos Ignacio', 'Perez', 'Camarena', 24, 'M')
];

export default function MainScreen() {
    return (
        <>
            <EnhancedTable rows={rows} />
        </>
    );
}
