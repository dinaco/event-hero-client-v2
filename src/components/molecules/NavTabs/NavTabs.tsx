import { Tabs, Tab } from '@mui/material';
import useNavTabs from './NavTabs.logic';
import { textAndIndicatorColor } from './NavTabs.static';

export type NavTabProps = {
  selectedTab: number;
  setSelectedTab: (newValue: number) => void;
  titles: string[];
  variant?: 'standard' | 'scrollable' | 'fullWidth';
};

function NavTabs({
  selectedTab,
  setSelectedTab,
  titles,
  variant = 'fullWidth',
}: NavTabProps) {
  const { handleTabSwitch } = useNavTabs({ selectedTab, setSelectedTab });

  return (
    <Tabs
      value={selectedTab}
      indicatorColor={textAndIndicatorColor}
      textColor={textAndIndicatorColor}
      onChange={handleTabSwitch}
      variant={variant}
    >
      {titles.map((title, index) => (
        <Tab label={title} key={index} />
      ))}
    </Tabs>
  );
}

export default NavTabs;
