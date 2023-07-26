import React from 'react';
import {Box, TableCell, TableHead, TableRow, TableSortLabel, Checkbox} from '@mui/material';
import {visuallyHidden} from '@mui/utils';
import {Client, HeadCell, Order} from '../types';

interface EnhancedTableHeadProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Client) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export default function EnhancedTableHead(props: EnhancedTableHeadProps): JSX.Element {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
    const createSortHandler = (property: keyof Client) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    const headCells: readonly HeadCell[] = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Nombre'
        },
        {
            id: 'first_last_name',
            numeric: false,
            disablePadding: true,
            label: 'Apellido Paterno'
        },
        {
            id: 'second_last_name',
            numeric: false,
            disablePadding: false,
            label: 'Apellido Materno'
        },
        {
            id: 'age',
            numeric: true,
            disablePadding: false,
            label: 'Edad'
        },
        {
            id: 'gender',
            numeric: false,
            disablePadding: false,
            label: 'Sexo'
        }
    ];

    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell padding='checkbox'>
                        <Checkbox
                            color='primary'
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{
                                'aria-label': 'select all desserts'
                            }}
                        />
                    </TableCell>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={'right'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component='span' sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </>
    );
}
