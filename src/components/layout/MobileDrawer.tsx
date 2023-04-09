import { Close } from '@mui/icons-material';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

import { HEADER_LINKS } from '@/constant/headerLinks';

type MobileDrawerProps = {
  isOpen: boolean;
  toggleDrawer: Dispatch<SetStateAction<boolean>>;
};

const MobileDrawer = ({ isOpen, toggleDrawer }: MobileDrawerProps) => {
  const router = useRouter();

  return (
    <Drawer
      anchor='right'
      open={isOpen}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: { width: 300 },
      }}
    >
      <IconButton
        onClick={() => toggleDrawer(false)}
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          color: 'black',
          zIndex: 5,
        }}
      >
        <Close />
      </IconButton>
      <List sx={{ mt: '20px' }}>
        <nav className='mt-10 flex flex-col items-start justify-center'>
          {HEADER_LINKS.map((item) => (
            <ListItem
              key={item.name}
              sx={{
                '& .Mui-selected': {
                  background: '#ECECEC !important',
                  '&  div > span': {
                    fontWeight: 700,
                  },
                },
              }}
            >
              <Link href={item.link} passHref className='w-full'>
                <ListItemButton selected={router.asPath === item.link}>
                  <ListItemText
                    primary={item.name}
                    sx={{ textTransform: 'capitalize' }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </nav>
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
