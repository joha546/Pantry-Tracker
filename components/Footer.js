import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                    Pantry Manager
                          </Typography>
                                <Typography
                                        variant="subtitle1"
                                                align="center"
                                                        color="text.secondary"
                                                                component="p"
                                                                      >
                                                                              Organize your kitchen, reduce waste, and cook smarter
                                                                                    </Typography>
                                                                                          <Typography variant="body2" color="text.secondary" align="center">
                                                                                                  {'Copyright © '}
                                                                                                          <Link color="inherit" href="https://your-website.com/">
                                                                                                                    Your Website
                                                                                                                            </Link>{' '}
                                                                                                                                    {new Date().getFullYear()}
                                                                                                                                            {'.'}
                                                                                                                                                  </Typography>
                                                                                                                                                      </Box>
                                                                                                                                                        );
                                                                                                                                                        }