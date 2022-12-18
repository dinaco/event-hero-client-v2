import { padStart } from 'lodash';

export const withOpacity = (color: string, opacity: number): string => {
  if ((color.length !== 4 && color.length !== 7) || !color.startsWith('#')) {
    throw new Error('Color must be hex format');
  }

  // Check if color is written in short hand, i.e: #FCO is equal to #FFCC00
  if (color.length === 4) {
    const [red, green, blue] = color.slice(1).split('');

    color = `#${red}${red}${green}${green}${blue}${blue}`;
  }

  // Cast the opacity into Hex representation
  const opacityAsHex = Math.round(opacity * 255).toString(16);

  return `${color}${padStart(opacityAsHex, 2, '0')}`;
};
