import type { ReactNode } from 'react';
import { Box } from '@mui/material';

type TabPanelProps = {
  children: ReactNode;
  tabValue: number;
  index: number;
};

const TabPanel = ({
  children,
  tabValue,
  index,
  ...other
}: TabPanelProps): JSX.Element => {
  return (
    <div
      role='tabpanel'
      hidden={tabValue !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {tabValue === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabPanel;
