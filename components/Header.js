'use client';

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { onAuthStateChange, signOut } from '../lib/auth';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [user, setUser] = useState(null);
    const router = useRouter();

      useEffect(() => {
          const unsubscribe = onAuthStateChange((user) => {
                setUser(user);
                    });

                        return () => unsubscribe();
                          }, []);

                            const handleSignOut = async () => {
                                try {
                                      await signOut();
                                            router.push('/');
                                                } catch (error) {
                                                      console.error('Error signing out:', error);
                                                          }
                                                            };

                                                              return (
                                                                  <Box sx={{ flexGrow: 1 }}>
                                                                        <AppBar position="static">
                                                                                <Toolbar>
                                                                                          <IconButton
                                                                                                      size="large"
                                                                                                                  edge="start"
                                                                                                                              color="inherit"
                                                                                                                                          aria-label="menu"
                                                                                                                                                      sx={{ mr: 2 }}
                                                                                                                                                                >
                                                                                                                                                                            <MenuIcon />
                                                                                                                                                                                      </IconButton>
                                                                                                                                                                                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                                                                                                                                                                            Pantry Manager
                                                                                                                                                                                                                      </Typography>
                                                                                                                                                                                                                                {user ? (
                                                                                                                                                                                                                                            <>
                                                                                                                                                                                                                                                          <Button color="inherit" component={Link} href="/dashboard">Dashboard</Button>
                                                                                                                                                                                                                                                                        <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
                                                                                                                                                                                                                                                                                    </>
                                                                                                                                                                                                                                                                                              ) : (
                                                                                                                                                                                                                                                                                                          <>
                                                                                                                                                                                                                                                                                                                        <Button color="inherit" component={Link} href="/login">Login</Button>
                                                                                                                                                                                                                                                                                                                                      <Button color="inherit" component={Link} href="/register">Register</Button>
                                                                                                                                                                                                                                                                                                                                                  </>
                                                                                                                                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                                                                                                                                                    </Toolbar>
                                                                                                                                                                                                                                                                                                                                                                          </AppBar>
                                                                                                                                                                                                                                                                                                                                                                              </Box>
                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                }
                  
                                      
                                            
                                                                  
                                                                  
                                                                                        
                                                                                                    
                                                                                                          
                                                                                                                  
                                                                                                                              
                                                                                                                                  
                                                                                                                                                    
                                                                                                                                                        
                                                                                                                                                                      
                                                                                                                                                                                      
                                                                                                                                                                                            
                                                                                                  
                                                                                                                                        