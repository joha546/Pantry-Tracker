'use client';

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { signIn } from '../../lib/auth';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); const router = useRouter();

      const handleSubmit = async (e) => {
          e.preventDefault();
          setError('');
              try {
                    await signIn(email, password);
                          // Redirect to dashboard or handle successful login
                          console.log('User signed in'); // Log successful login
                          router.push('/dashboard');
                              } catch (error) {
                                    console.error('Error signing in:', error);
                                          // Handle error (show message to user, etc.)
                                          setError(error.message);
                                              }
                                                };

                                                  return (
                                                      <Container maxWidth="xs">
                                                            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                    <Typography component="h1" variant="h5">
                                                                              Sign in
                                                                                      </Typography>
                                                                                      {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
                                                                                              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                                                                                        <TextField
                                                                                                                    margin="normal"
                                                                                                                                required
                                                                                                                                            fullWidth
                                                                                                                                                        id="email"
                                                                                                                                                                    label="Email Address"
                                                                                                                                                                                name="email"
                                                                                                                                                                                            autoComplete="email"
                                                                                                                                                                                                        autoFocus
                                                                                                                                                                                                                    value={email}
                                                                                                                                                                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                    <TextField
                                                                                                                                                                                                                                                                margin="normal"
                                                                                                                                                                                                                                                                            required
                                                                                                                                                                                                                                                                                        fullWidth
                                                                                                                                                                                                                                                                                                    name="password"
                                                                                                                                                                                                                                                                                                                label="Password"
                                                                                                                                                                                                                                                                                                                            type="password"
                                                                                                                                                                                                                                                                                                                                        id="password"
                                                                                                                                                                                                                                                                                                                                                    autoComplete="current-password"
                                                                                                                                                                                                                                                                                                                                                                value={password}
                                                                                                                                                                                                                                                                                                                                                                            onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                                                                                                                                                                                <Button
                                                                                                                                                                                                                                                                                                                                                                                                            type="submit"
                                                                                                                                                                                                                                                                                                                                                                                                                        fullWidth
                                                                                                                                                                                                                                                                                                                                                                                                                                    variant="contained"
                                                                                                                                                                                                                                                                                                                                                                                                                                                sx={{ mt: 3, mb: 2 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Sign In
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </Button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </Box>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </Box>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </Container>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }