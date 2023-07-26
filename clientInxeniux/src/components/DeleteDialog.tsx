import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

interface DeleteDialogProps {
    open: boolean;
    numSelected: number;
    onPressClose: () => void;
    onPressAccept: () => void;
}

export default function DeleteDialog({open, numSelected, onPressClose, onPressAccept}: DeleteDialogProps): JSX.Element {
    return (
        <div>
            <Dialog open={open} onClose={onPressClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
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
                    <Button onClick={onPressAccept}>Aceptar</Button>
                    <Button onClick={onPressClose} autoFocus>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
