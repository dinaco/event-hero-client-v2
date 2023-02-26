import { Tabs, Tab } from '@mui/material';
import type { SyntheticEvent } from 'react';

type NavTabProps = {
  selectedTab: number;
  setSelectedTab: any;
  titles: string[];
  variant?: 'standard' | 'scrollable' | 'fullWidth';
};

type HandleChangeBetweenForms = (
  e: SyntheticEvent<Element, Event>,
  newTabValue: number
) => void;

function NavTabs({
  selectedTab,
  setSelectedTab,
  titles,
  variant,
}: NavTabProps) {
  const handleChange: HandleChangeBetweenForms = (e, newTabValue) => {
    e.preventDefault();
    setSelectedTab(newTabValue);
  };

  return (
    <Tabs
      value={selectedTab}
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
