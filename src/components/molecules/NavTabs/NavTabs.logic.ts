import type { SyntheticEvent } from 'react';
import type { NavTabProps } from './NavTabs';

type HandleChangeBetweenForms = (
  e: SyntheticEvent<Element, Event>,
  newTabValue: number
) => void;

function useNavTabs({ setSelectedTab }: Pick<NavTabProps, 'setSelectedTab'>) {
  const handleChange: HandleChangeBetweenForms = (e, newTabValue) => {
    e.preventDefault();
    setSelectedTab(newTabValue);
  };

  return {
    handleChange,
  };
}

export default useNavTabs;
