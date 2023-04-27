import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer 
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
          >
            Allan
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(month => (
              <ListItem key={month} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                      <Grid container>
                        <ListItemText primary={ month } />
                        <ListItemText secondary={ 'Lorem, ipsum dolor.' }/>
                      </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>


    </Box>
  )
}
