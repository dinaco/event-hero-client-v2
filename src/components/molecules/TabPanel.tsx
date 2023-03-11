import type { ReactNode } from 'react';
import { Box } from '@mui/material';

type TabPanelProps = {
  children: ReactNode;
  selectedTab: number;
  index: number;
  [other: string | number | symbol]: unknown;
};

const TabPanel = ({
  children,
  selectedTab,
  index,
  ...other
}: TabPanelProps) => {
  return (
    <Box
      role='tabpanel'
      hidden={selectedTab !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {selectedTab === index && children}
    </Box>
  );
};

export default TabPanel;
