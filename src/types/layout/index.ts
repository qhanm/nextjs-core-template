1; // ** Type Imports
import { ReactNode } from 'react';
import { AppBarProps } from '@mui/material/AppBar';
import { Theme, SxProps, PaletteMode, Direction } from '@mui/material';
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';

type Layout = 'vertical' | 'horizontal' | 'blank' | 'blankWithAppBar';

type Skin = 'default' | 'bordered';

type Mode = PaletteMode | 'semi-dark';

type ContentWidth = 'full' | 'boxed';

type AppBar = 'fixed' | 'static' | 'hidden';

type Footer = 'fixed' | 'static' | 'hidden';

type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

type VerticalNavToggle = 'accordion' | 'collapse';

type HorizontalMenuToggle = 'hover' | 'click';

type BlankLayoutProps = {
  children: ReactNode;
};

type BlankLayoutWithAppBarProps = {
  children: ReactNode;
};

type NavSectionTitle = {
  auth?: boolean;
  action?: string;
  subject?: string;
  sectionTitle: string;
};

type NavGroup = {
  icon?: string;
  title: string;
  auth?: boolean;
  action?: string;
  subject?: string;
  badgeContent?: string;
  children?: (NavGroup | NavLink)[];
  badgeColor?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
};

type NavLink = {
  icon?: string;
  path?: string;
  title: string;
  auth?: boolean;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  badgeColor?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
};

type VerticalNavItemsType = (NavLink | NavGroup | NavSectionTitle)[];
type HorizontalNavItemsType = (NavLink | NavGroup)[];

type FooterProps = {
  sx?: SxProps<Theme>;
  content?: (props?: any) => ReactNode;
};

type VerticalLayoutProps = {
  appBar?: {
    componentProps?: AppBarProps;
    content?: (props?: any) => ReactNode;
  };
  navMenu: {
    lockedIcon?: ReactNode;
    unlockedIcon?: ReactNode;
    navItems?: VerticalNavItemsType;
    content?: (props?: any) => ReactNode;
    branding?: (props?: any) => ReactNode;
    afterContent?: (props?: any) => ReactNode;
    beforeContent?: (props?: any) => ReactNode;
    componentProps?: Omit<SwipeableDrawerProps, 'open' | 'onOpen' | 'onClose'>;
  };
};

type HorizontalLayoutProps = {
  appBar?: {
    componentProps?: AppBarProps;
    content?: (props?: any) => ReactNode;
    branding?: (props?: any) => ReactNode;
  };
  navMenu?: {
    sx?: SxProps<Theme>;
    navItems?: HorizontalNavItemsType;
    content?: (props?: any) => ReactNode;
  };
};

type Settings = {
  skin: Skin;
  mode: Mode;
  appBar?: AppBar;
  footer?: Footer;
  navHidden?: boolean; // navigation menu
  appBarBlur: boolean;
  direction: Direction;
  navCollapsed: boolean;
  themeColor: ThemeColor;
  contentWidth: ContentWidth;
  layout?: 'vertical' | 'horizontal';
  lastLayout?: 'vertical' | 'horizontal';
  verticalNavToggleType: VerticalNavToggle;
  toastPosition?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
};

type LayoutProps = {
  hidden: boolean;
  settings: Settings;
  children: ReactNode;
  footerProps?: FooterProps;
  contentHeightFixed?: boolean;
  scrollToTop?: (props?: any) => ReactNode;
  saveSettings: (values: Settings) => void;
  verticalLayoutProps: VerticalLayoutProps;
  horizontalLayoutProps?: HorizontalLayoutProps;
};

export type {
  Layout,
  Skin,
  Mode,
  PaletteMode,
  ContentWidth,
  AppBar,
  Footer,
  ThemeColor,
  VerticalNavToggle,
  HorizontalMenuToggle,
  BlankLayoutProps,
  BlankLayoutWithAppBarProps,
  NavSectionTitle,
  NavGroup,
  NavLink,
  VerticalNavItemsType,
  HorizontalNavItemsType,
  FooterProps,
  VerticalLayoutProps,
  HorizontalLayoutProps,
  Settings,
  LayoutProps,
};
