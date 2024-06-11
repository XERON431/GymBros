// src/components/Header.tsx

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    GymBros
                </Typography>
                <Button color="inherit">
                    <Link href="/">Home</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/machines">Machines</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/about">About</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/contact">Contact</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
