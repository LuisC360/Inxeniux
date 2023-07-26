import React, {useState} from 'react';
import {Toolbar, Typography, IconButton, Tooltip, alpha} from '@mui/material';
import {AddCircleOutlineOutlined, Delete, FilterList, Edit} from '@mui/icons-material';
import ModalForm from './ModalForm';
import DeleteDialog from './DeleteDialog';

interface EnhancedTableToolbarProps {
    numSelected: number;
}

export default function EnhancedTableToolbar(props: EnhancedTableToolbarProps): JSX.Element {
    const {numSelected} = props;
    const [showModalForm, setShowModalForm] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const onPressAddButton = () => {
        setShowModalForm(!showModalForm);
    };

    const onPressDeleteOrCancel = () => {
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
                    <IconButton onClick={onPressAddButton}>
                        <AddCircleOutlineOutlined />
                    </IconButton>
                </Tooltip>
                {numSelected > 0 && numSelected < 2 ? (
                    <>
                        <Tooltip title='Edit'>
                            <IconButton onClick={onPressAddButton}>
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
            <ModalForm open={showModalForm} handleClose={onPressAddButton} />
            <DeleteDialog open={showDeleteDialog} numSelected={numSelected} handleClose={onPressDeleteOrCancel} />
        </>
    );
}
