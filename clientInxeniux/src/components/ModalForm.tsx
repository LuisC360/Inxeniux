import React, {useState} from 'react';
import {Dialog, DialogContent} from '@material-ui/core';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Stack, TextField, Typography} from '@mui/material';
import {genders, roomType, montlyIncome, yearlyTravels, favoriteBooks} from '../constants/constants';

interface ModalFormProps {
    open: boolean;
    handleClose: () => void;
}

export default function ModalForm({open, handleClose}: ModalFormProps): JSX.Element {
    return (
        <Dialog open={open} fullWidth>
            <DialogContent>
                <Typography marginBottom={1} variant='h6'>
                    Nuevo cliente
                </Typography>
                <Box sx={{border: 1, borderRadius: 4, borderColor: '#f08334'}} padding={3} marginBottom={2}>
                    <Typography marginBottom={1}>Generales</Typography>
                    <TextField label='Nombre' id='outlined-basic' variant='outlined' style={{width: 490, marginBottom: 20}} />
                    <TextField label='Apellido Paterno' id='outlined-basic' variant='outlined' style={{width: 490, marginBottom: 20}} />
                    <TextField label='Apellido Materno' id='outlined-basic' variant='outlined' style={{width: 490, marginBottom: 20}} />
                    <FormGroup row style={{justifyContent: 'space-between'}}>
                        <TextField label='Edad' id='outlined-basic' variant='outlined' style={{flex: 0.4}} />
                        <TextField id='outlined-basic' select label='Sexo' defaultValue={genders[0].value} style={{flex: 0.4}}>
                            {genders.map((gender) => (
                                <MenuItem key={gender.value} value={gender.value}>
                                    {gender.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormGroup>
                </Box>
                <Box sx={{border: 1, borderRadius: 4, borderColor: '#f08334'}} padding={3} marginBottom={2}>
                    <Typography marginBottom={1}>Dirección</Typography>
                    <TextField label='Calle' id='outlined-basic' variant='outlined' style={{width: 490, marginBottom: 20}} />
                    <FormGroup row style={{justifyContent: 'space-between', marginBottom: 20}}>
                        <TextField label='No. Exterior' id='outlined-basic' variant='outlined' style={{flex: 0.4}} />
                        <TextField label='No. Interior' id='outlined-basic' variant='outlined' style={{flex: 0.4}} />
                    </FormGroup>
                    <TextField label='Colonia' id='outlined-basic' variant='outlined' style={{width: 490, marginBottom: 20}} />
                    <FormGroup row style={{justifyContent: 'space-between'}}>
                        <TextField label='No. Exterior' id='outlined-basic' variant='outlined' style={{flex: 0.4}} />
                        <TextField label='No. Interior' id='outlined-basic' variant='outlined' style={{flex: 0.4}} />
                    </FormGroup>
                </Box>
                <Box sx={{border: 1, borderRadius: 4, borderColor: '#f08334'}} padding={3} marginBottom={2}>
                    <Typography marginBottom={1}>Particulares</Typography>
                    <FormGroup row style={{marginBottom: 10}}>
                        <Typography marginRight={6}>Intereses Personales:</Typography>
                        <FormGroup row style={{justifyContent: 'center'}}>
                            <FormControlLabel value='start' control={<Checkbox />} label='Musica' labelPlacement='end' />
                            <FormControlLabel value='start' control={<Checkbox />} label='Cine' labelPlacement='end' />
                            <FormControlLabel value='start' control={<Checkbox />} label='Modelado' labelPlacement='end' />
                            <FormControlLabel value='start' control={<Checkbox />} label='Compras' labelPlacement='end' />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup row style={{marginBottom: 20}}>
                        <Typography marginRight={6}>Destinos Preferidos:</Typography>
                        <FormGroup row style={{justifyContent: 'center'}}>
                            <FormControlLabel value='start' control={<Checkbox />} label='Desierto' labelPlacement='end' />
                            <FormControlLabel value='start' control={<Checkbox />} label='Playa' labelPlacement='end' />
                            <FormControlLabel value='start' control={<Checkbox />} label='Ciudad' labelPlacement='end' />
                            <FormControlLabel value='start' control={<Checkbox />} label='Montaña' labelPlacement='end' />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup row style={{justifyContent: 'space-between', marginBottom: 20}}>
                        <TextField id='outlined-basic' select label='Tipo de casa' defaultValue={roomType[0].value} style={{flex: 0.4}}>
                            {roomType.map((room) => (
                                <MenuItem key={room.value} value={room.value}>
                                    {room.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id='outlined-basic'
                            select
                            label='Ingreso mensual'
                            defaultValue={montlyIncome[0].value}
                            style={{flex: 0.4}}
                        >
                            {montlyIncome.map((income) => (
                                <MenuItem key={income.value} value={income.value}>
                                    {income.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormGroup>
                    <FormGroup row style={{justifyContent: 'space-between'}}>
                        <TextField
                            id='outlined-basic'
                            select
                            label='Viajes al año'
                            defaultValue={yearlyTravels[0].value}
                            style={{flex: 0.4}}
                        >
                            {yearlyTravels.map((travelsRange) => (
                                <MenuItem key={travelsRange.value} value={travelsRange.value}>
                                    {travelsRange.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id='outlined-basic'
                            select
                            label='Libros Favoritos'
                            defaultValue={favoriteBooks[0].value}
                            style={{flex: 0.4}}
                        >
                            {favoriteBooks.map((book) => (
                                <MenuItem key={book.value} value={book.value}>
                                    {book.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormGroup>
                </Box>
                <Stack spacing={2} direction='row' flexDirection={'row-reverse'}>
                    <Button variant='contained' style={{marginLeft: 4}}>
                        Guardar
                    </Button>
                    <Button variant='contained' style={{marginRight: 4}} onClick={handleClose}>
                        Cancelar
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}
