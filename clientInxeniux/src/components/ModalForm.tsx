import React, {useState} from 'react';
import {Dialog, DialogContent} from '@material-ui/core';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Stack, TextField, Typography} from '@mui/material';
import {genders, roomType, monthlyIncome, yearlyTravels, favoriteBooks} from '../constants/constants';

interface ModalFormProps {
    open: boolean;
    handleClose: () => void;
}

export default function ModalForm({open, handleClose}: ModalFormProps): JSX.Element {
    // User
    const [name, setName] = useState('');
    const [firstLastName, setFirstLastName] = useState('');
    const [secondLastName, setSecondLastName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(genders[0].value);
    // Address
    const [street, setStreet] = useState('');
    const [extNumber, setExtNumber] = useState(0);
    const [intNumber, setIntNumber] = useState(0);
    const [colony, setColony] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [state, setState] = useState('');
    // Interests
    const [personalInterests, setPersonalInterests] = useState<string[]>([]);
    const [preferredDestinations, setPreferredDestinations] = useState<string[]>([]);
    const [houseType, setHouseType] = useState(roomType[0].value);
    const [income, setIncome] = useState(monthlyIncome[0].value);
    const [travels, setTravels] = useState(yearlyTravels[0].value);
    const [books, setBooks] = useState(favoriteBooks[0].value);

    const handleNumber = (newValue: string, field: string) => {
        const regex = /^[0-9\b]+$/;
        if (field === 'age' && (newValue === '' || (regex.test(newValue) && newValue.length > 0 && newValue.length < 3))) {
            const newAge = parseInt(newValue);
            setAge(newAge);
        } else if (newValue === '' || (regex.test(newValue) && newValue.length > 0 && newValue.length < 5)) {
            if (field === 'ext_number') {
                const newExtNumber = parseInt(newValue);
                setExtNumber(newExtNumber);
            } else if (field === 'int_number') {
                const newIntNumber = parseInt(newValue);
                setIntNumber(newIntNumber);
            }
        }
    };

    const handleTextInput = (newText: string, field: string) => {
        const regexLetters = /^[a-zA-Z\s]+$/;
        if (newText === '' || regexLetters.test(newText)) {
            switch (field) {
                case 'name':
                    setName(newText);
                    break;
                case 'first_last_name':
                    setFirstLastName(newText);
                    break;
                case 'second_last_name':
                    setSecondLastName(newText);
                    break;
                case 'street':
                    setStreet(newText);
                    break;
                case 'colony':
                    setColony(newText);
                    break;
                case 'municipality':
                    setMunicipality(newText);
                    break;
                case 'state':
                    setState(newText);
                    break;
                default:
                    break;
            }
        }
    };

    const handleMultiSelectionChange = (newValue: string, isChecked: boolean, type: string) => {
        if (isChecked) {
            if (type === 'interest') {
                setPersonalInterests((prevInterests) => [...prevInterests, newValue]);
            } else {
                setPreferredDestinations((prevDestinations) => [...prevDestinations, newValue]);
            }
        } else {
            if (type === 'interest') {
                setPersonalInterests((prevInerests) => prevInerests.filter((interest) => interest !== newValue));
            } else {
                setPreferredDestinations((prevDesinations) => prevDesinations.filter((destination) => destination !== newValue));
            }
        }
    };

    return (
        <Dialog open={open} fullWidth>
            <DialogContent>
                <Typography marginBottom={1} variant='h6'>
                    Nuevo cliente
                </Typography>
                <Box sx={{border: 1, borderRadius: 4, borderColor: '#f08334'}} padding={3} marginBottom={2}>
                    <Typography marginBottom={1}>Generales</Typography>
                    <TextField
                        label='Nombre'
                        id='outlined-basic'
                        variant='outlined'
                        value={name}
                        onChange={(e) => handleTextInput(e.target.value, 'name')}
                        style={{width: 490, marginBottom: 20}}
                    />
                    <TextField
                        label='Apellido Paterno'
                        id='outlined-basic'
                        variant='outlined'
                        value={firstLastName}
                        onChange={(e) => handleTextInput(e.target.value, 'first_last_name')}
                        style={{width: 490, marginBottom: 20}}
                    />
                    <TextField
                        label='Apellido Materno'
                        id='outlined-basic'
                        variant='outlined'
                        value={secondLastName}
                        onChange={(e) => handleTextInput(e.target.value, 'second_last_name')}
                        style={{width: 490, marginBottom: 20}}
                    />
                    <FormGroup row style={{justifyContent: 'space-between'}}>
                        <TextField
                            label='Edad'
                            id='outlined-basic'
                            variant='outlined'
                            type='number'
                            onChange={(e) => handleNumber(e.target.value, 'age')}
                            value={age}
                            style={{flex: 0.4}}
                        />
                        <TextField
                            id='outlined-basic'
                            select
                            label='Sexo'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            style={{flex: 0.4}}
                        >
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
                    <TextField
                        label='Calle'
                        id='outlined-basic'
                        variant='outlined'
                        value={street}
                        onChange={(e) => handleTextInput(e.target.value, 'street')}
                        style={{width: 490, marginBottom: 20}}
                    />
                    <FormGroup row style={{justifyContent: 'space-between', marginBottom: 20}}>
                        <TextField
                            label='No. Exterior'
                            id='outlined-basic'
                            variant='outlined'
                            type='number'
                            value={extNumber}
                            onChange={(e) => handleNumber(e.target.value, 'ext_number')}
                            style={{flex: 0.4}}
                        />
                        <TextField
                            label='No. Interior'
                            id='outlined-basic'
                            variant='outlined'
                            type='number'
                            value={intNumber}
                            onChange={(e) => handleNumber(e.target.value, 'int_number')}
                            style={{flex: 0.4}}
                        />
                    </FormGroup>
                    <TextField
                        label='Colonia'
                        id='outlined-basic'
                        variant='outlined'
                        value={colony}
                        onChange={(e) => handleTextInput(e.target.value, 'colony')}
                        style={{width: 490, marginBottom: 20}}
                    />
                    <FormGroup row style={{justifyContent: 'space-between'}}>
                        <TextField
                            label='Municipio'
                            id='outlined-basic'
                            variant='outlined'
                            value={municipality}
                            onChange={(e) => handleTextInput(e.target.value, 'municipality')}
                            style={{flex: 0.4}}
                        />
                        <TextField
                            label='Estado'
                            id='outlined-basic'
                            variant='outlined'
                            value={state}
                            onChange={(e) => handleTextInput(e.target.value, 'state')}
                            style={{flex: 0.4}}
                        />
                    </FormGroup>
                </Box>
                <Box sx={{border: 1, borderRadius: 4, borderColor: '#f08334'}} padding={3} marginBottom={2}>
                    <Typography marginBottom={1}>Particulares</Typography>
                    <FormGroup row style={{marginBottom: 10}}>
                        <Typography marginRight={6}>Intereses Personales:</Typography>
                        <FormGroup row style={{justifyContent: 'center'}}>
                            <FormControlLabel
                                value='Musica'
                                control={
                                    <Checkbox
                                        checked={personalInterests.includes('Musica')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'interest')}
                                    />
                                }
                                label='Musica'
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value='Cine'
                                control={
                                    <Checkbox
                                        checked={personalInterests.includes('Cine')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'interest')}
                                    />
                                }
                                label='Cine'
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value='Modelado'
                                control={
                                    <Checkbox
                                        checked={personalInterests.includes('Modelado')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'interest')}
                                    />
                                }
                                label='Modelado'
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value='Compras'
                                control={
                                    <Checkbox
                                        checked={personalInterests.includes('Compras')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'interest')}
                                    />
                                }
                                label='Compras'
                                labelPlacement='end'
                            />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup row style={{marginBottom: 20}}>
                        <Typography marginRight={6}>Destinos Preferidos:</Typography>
                        <FormGroup row style={{justifyContent: 'center'}}>
                            <FormControlLabel
                                value='start'
                                control={
                                    <Checkbox
                                        checked={preferredDestinations.includes('Desierto')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'destination')}
                                    />
                                }
                                label='Desierto'
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value='start'
                                control={
                                    <Checkbox
                                        checked={preferredDestinations.includes('Playa')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'destination')}
                                    />
                                }
                                label='Playa'
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value='start'
                                control={
                                    <Checkbox
                                        checked={preferredDestinations.includes('Ciudad')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'destination')}
                                    />
                                }
                                label='Ciudad'
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value='start'
                                control={
                                    <Checkbox
                                        checked={preferredDestinations.includes('Montaña')}
                                        onChange={(e) => handleMultiSelectionChange(e.target.value, e.target.checked, 'destination')}
                                    />
                                }
                                label='Montaña'
                                labelPlacement='end'
                            />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup row style={{justifyContent: 'space-between', marginBottom: 20}}>
                        <TextField
                            id='outlined-basic'
                            select
                            label='Tipo de casa'
                            value={houseType}
                            onChange={(e) => setHouseType(e.target.value)}
                            style={{flex: 0.4}}
                        >
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
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            style={{flex: 0.4}}
                        >
                            {monthlyIncome.map((income) => (
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
                            value={travels}
                            onChange={(e) => setTravels(e.target.value)}
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
                            value={books}
                            onChange={(e) => setBooks(e.target.value)}
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
