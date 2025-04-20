import React from 'react';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Define the type for the Layout props to accept children
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ padding: '16px' }}>EduDash</Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem component={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/instructor">
            <ListItemText primary="Instructor List" />
          </ListItem>
          <ListItem component={Link} to="/courses">
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem component={Link} to="/lectures">
            <ListItemText primary="Lectures" />
          </ListItem>
          <ListItem component={Link} to="/logout">
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      
      {/* Render the content (children) here */}
      <main style={{ marginLeft: 240, padding: '20px' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
