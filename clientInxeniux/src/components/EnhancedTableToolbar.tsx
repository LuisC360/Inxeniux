import React, {useState} from 'react';
import {Toolbar, Typography, IconButton, Tooltip, alpha} from '@mui/material';
import {AddCircleOutlineOutlined, Delete, FilterList, Edit} from '@mui/icons-material';
import {useCreateClient} from '../hooks/Clients/useCreateClient';
import {useDeleteClients} from '../hooks/Clients/useDeleteClients';
import ModalForm from './ModalForm';
import DeleteDialog from './DeleteDialog';
import {Address, Client, CreateClientData} from '../types';

interface EnhancedTableToolbarProps {
    numSelected: number;
    selected: string[];
}

export default function EnhancedTableToolbar({numSelected, selected}: EnhancedTableToolbarProps): JSX.Element {
    const {mutate: createClient} = useCreateClient();
    const {mutate: deleteClients} = useDeleteClients();
    const [showModalForm, setShowModalForm] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const handleShowModal = () => {
        setShowModalForm(!showModalForm);
    };

    const onPressDeleteOrCancel = () => {
        setShowDeleteDialog(!showDeleteDialog);
    };

    const handleCreateClient = (client: Client, address: Address, event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.preventDefault();
        const clientData: CreateClientData = {
            client,
            address
        };
        createClient(clientData);
        setShowModalForm(!showModalForm);
    };

    const handleDeleteClients = () => {
        deleteClients(selected);
        setShowDeleteDialog(!showDeleteDialog);
    };

    return (
        <>
            <Toolbar
                sx={{
                    pl: {sm: 2},
                    pr: {xs: 1, sm: 1},
                    ...(numSelected > 0 && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
                    })
                }}
            >
                <Typography sx={{flex: '1 1 100%'}} variant='h6' id='tableTitle' component='div'>
                    Gestión de clientes
                </Typography>
                {numSelected > 0 ? (
                    <Typography sx={{flex: '1 1 100%'}} color='inherit' variant='subtitle1' component='div'>
                        {numSelected} seleccionados
                    </Typography>
                ) : null}
                <Tooltip title='Add'>
                    <IconButton onClick={handleShowModal}>
                        <AddCircleOutlineOutlined />
                    </IconButton>
                </Tooltip>
                {numSelected > 0 && numSelected < 2 ? (
                    <>
                        <Tooltip title='Edit'>
                            <IconButton onClick={handleShowModal}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete' onClick={onPressDeleteOrCancel}>
                            <IconButton>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </>
                ) : numSelected > 1 ? (
                    <Tooltip title='Delete'>
                        <IconButton onClick={onPressDeleteOrCancel}>
                            <Delete />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title='Filter list'>
                        <IconButton>
                            <FilterList />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
            <ModalForm open={showModalForm} onClosePress={handleShowModal} onCreatePress={handleCreateClient} />
            <DeleteDialog
                open={showDeleteDialog}
                numSelected={numSelected}
                onPressClose={onPressDeleteOrCancel}
                onPressAccept={handleDeleteClients}
            />
        </>
    );
}
