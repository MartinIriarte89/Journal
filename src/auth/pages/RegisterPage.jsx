import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title="Registrate">
            <form action="">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Juan Perez"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@example.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 0 }} justifyContent="right">
                        <Grid item xs={12} sm={4}>
                            <Button variant="contained" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container direction='row' justifyContent='end' marginTop={2}>
                    <Typography marginRight={2}>¿Ya tienes cuenta?</Typography>
                    <Link
                        color='inherit'
                        to='/auth/login'
                        component={RouterLink}
                    >
                        Ingresa aquí
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
