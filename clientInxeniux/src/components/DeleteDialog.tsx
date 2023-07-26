import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

interface DeleteDialogProps {
    open: boolean;
    numSelected: number;
    handleClose: () => void;
}

export default function DeleteDialog({open, numSelected, handleClose}: DeleteDialogProps): JSX.Element {
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
                <DialogTitle id='alert-dialog-title'>{'Eliminar cliente'}</DialogTitle>
                <DialogContent>
                    {numSelected < 2 ? (
                        <DialogContentText id='alert-dialog-description'>¿Está seguro de que desea eliminar al cliente?</DialogContentText>
                    ) : (
                        <DialogContentText id='alert-dialog-description'>
                            ¿Está seguro de que desea eliminar {numSelected} clientes?
                        </DialogContentText>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button>Aceptar</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
