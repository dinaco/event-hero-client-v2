import { useCallback } from 'react';
import type { SyntheticEvent } from 'react';
import type { NavTabProps } from './NavTabs';

type HandleChangeBetweenForms = (
  e: SyntheticEvent<Element, Event>,
  newTabValue: number
) => void;

function useNavTabs({
  selectedTab,
  setSelectedTab,
}: Pick<NavTabProps, 'selectedTab' | 'setSelectedTab'>) {
  const handleTabSwitch: HandleChangeBetweenForms = useCallback(
    (e, newTabValue) => {
      e.preventDefault();
      setSelectedTab(newTabValue);
    },
    [selectedTab]
  );

  return {
    handleTabSwitch,
  };
}

export default useNavTabs;
