'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box, CircularProgress } from '@mui/material';
import { onAuthStateChange, signOut } from '../../lib/auth';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
      const router = useRouter();

        useEffect(() => {
            const unsubscribe = onAuthStateChange((user) => {
                  if (user) {
                          setUser(user);
                                } else {
                                        router.push('/login');
                                              }
                                                    setLoading(false);
                                                        });

                                                            return () => unsubscribe();
                                                              }, [router]);

                                                                const handleSignOut = async () => {
                                                                    try {
                                                                          await signOut();
                                                                                router.push('/');
                                                                                    } catch (error) {
                                                                                          console.error('Error signing out:', error);
                                                                                              }
                                                                                                };

                                                                                                  if (loading) {
                                                                                                      return (
                                                                                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                                                                                                                    <CircularProgress />
                                                                                                                          </Box>
                                                                                                                              );
                                                                                                                                }

                                                                                                                                  return (
                                                                                                                                      <Container maxWidth="lg">
                                                                                                                                            <Box sx={{ my: 4 }}>
                                                                                                                                                    <Typography variant="h4" component="h1" gutterBottom>
                                                                                                                                                              Welcome to your Dashboard, {user?.displayName || user?.email}
                                                                                                                                                                      </Typography>
                                                                                                                                                                              <Typography variant="body1" gutterBottom>
                                                                                                                                                                                        This is where you'll manage your pantry items.
                                                                                                                                                                                                </Typography>
                                                                                                                                                                                                        <Button variant="contained" color="primary" onClick={handleSignOut}>
                                                                                                                                                                                                                  Sign Out
                                                                                                                                                                                                                          </Button>
                                                                                                                                                                                                                                </Box>
                                                                                                                                                                                                                                    </Container>
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                      }
                                                

                                                          
                                                            

                                                      
                                                                
                                                                  
                                                                    
                                                                          
                                                                            
                                                                                            
                                                                                          

                                                                                                
                                                                                            
                                                                                                
                                                                                                                    
                                                                                                                        
                                                                                                                            
                                                                                                                              

                                                                                                                            
                                                                                                                            
                                                                                                                                            
                                                                                                                                            
                                                                                                                                                  
                                                                                                                                                                      
                                                                                                                                                                      
                                                                                                                                                                              
                                                                                                                                                                                        
                                                                                                                                                                                                      
                                                                                                                                                                                                          
                                                                                                                                                                                                                        
                                                                                                                                                                                                                                
                                                                                                                                                                                                                        