'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Create a theme instance.
const theme = createTheme({
  palette: {
      primary: {
            main: '#556cd6',
                },
                    secondary: {
                          main: '#19857b',
                              },
                                  background: {
                                        default: '#f5f5f5',
                                            },
                                              },
                                              });

                                              export default function RootLayout({ children }) {
                                                return (
                                                    <html lang="en">
                                                          <body>
                                                                  <ThemeProvider theme={theme}>
                                                                            <CssBaseline />
                                                                                      <Box
                                                                                                  sx={{
                                                                                                                display: 'flex',
                                                                                                                              flexDirection: 'column',
                                                                                                                                            minHeight: '100vh',
                                                                                                                                                        }}
                                                                                                                                                                  >
                                                                                                                                                                              <Header />
                                                                                                                                                                                          <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
                                                                                                                                                                                                        {children}
                                                                                                                                                                                                                    </Box>
                                                                                                                                                                                                                                <Footer />
                                                                                                                                                                                                                                          </Box>
                                                                                                                                                                                                                                                  </ThemeProvider>
                                                                                                                                                                                                                                                        </body>
                                                                                                                                                                                                                                                            </html>
                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                              }
