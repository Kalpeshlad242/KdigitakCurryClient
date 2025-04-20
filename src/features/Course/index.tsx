import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../Login/slice'; // Assuming you have a logout action in your auth slice

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to clear user data
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard!
      </Typography>
      <Typography variant="body1" paragraph>
        This is a protected page that only authenticated users can access.
      </Typography>

      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
