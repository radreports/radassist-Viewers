import React from 'react';
// Icons

import arrowDown from './../../assets/icons/arrow-down.svg';
import calendar from './../../assets/icons/calendar.svg';
import cancel from './../../assets/icons/cancel.svg';
import chevronDown from './../../assets/icons/chevron-down.svg';
import chevronRight from './../../assets/icons/chevron-right.svg';
import iconNavStudies from './../../assets/icons/icon-nav-studies.svg';
import infoLink from './../../assets/icons/info-link.svg';
import launchArrow from './../../assets/icons/launch-arrow.svg';
import launchInfo from './../../assets/icons/launch-info.svg';
import listBullets from './../../assets/icons/list-bullets.svg';
import logoOhifSmall from './../../assets/icons/logo-ohif-small.svg';
import magnifier from './../../assets/icons/magnifier.svg';
import notificationwarningDiamond from './../../assets/icons/notificationwarning-diamond.svg';
import panelLeft from './../../assets/icons/panel-left.svg';
import panelRight from './../../assets/icons/panel-right.svg';
import settings from './../../assets/icons/settings.svg';
import sorting from './../../assets/icons/sorting.svg';
import sortingActiveDown from './../../assets/icons/sorting-active-down.svg';
import sortingActiveUp from './../../assets/icons/sorting-active-up.svg';

const ICONS = {
  'arrow-down': arrowDown,
  calendar: calendar,
  cancel: cancel,
  'chevron-down': chevronDown,
  'chevron-right': chevronRight,
  'icon-nav-studies': iconNavStudies,
  'info-link': infoLink,
  'launch-arrow': launchArrow,
  'launch-info': launchInfo,
  'list-bullets': listBullets,
  'logo-ohif-small': logoOhifSmall,
  magnifier: magnifier,
  'notificationwarning-diamond': notificationwarningDiamond,
  'panel-left': panelLeft,
  'panel-right': panelRight,
  settings: settings,
  'sorting-active-down': sortingActiveDown,
  'sorting-active-up': sortingActiveUp,
  sorting: sorting,
};

/**
 * Return the matching SVG Icon as a React Component.
 * Results in an inlined SVG Element. If there's no match,
 * return `null`
 */
export default function getIcon(key, props) {
  if (!key || !ICONS[key]) {
    return React.createElement('div', null, 'Missing Icon');
  }

  return React.createElement(ICONS[key], props);
}

export { ICONS };
