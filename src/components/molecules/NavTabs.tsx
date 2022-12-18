import { Tabs, Tab } from '@mui/material';
import type { HandleChangeBetweenForms } from '../global/TabbedAuthForm';

type NavTabProps = {
  tabValue: number;
  handleChange: HandleChangeBetweenForms;
  titles: string[];
  variant?: 'standard' | 'scrollable' | 'fullWidth';
};

function NavTabs({ tabValue, handleChange, titles, variant }: NavTabProps) {
  return (
    <Tabs
      value={tabValue}
      indicatorColor='primary'
      textColor='primary'
      onChange={handleChange}
      variant={variant}
    >
      {titles.map((title, index) => (
        <Tab label={title} key={index} />
      ))}
    </Tabs>
  );
}

export default NavTabs;
