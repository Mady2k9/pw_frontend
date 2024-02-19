export interface dData {
  _id: string;
  status: boolean;
  menuTitle: string;
  menuRedirectionUrl: string;
  menuItems: [
    {
      menuIcon: string;
      menuRedirectionUrl: string;
      menuTitle: string;
    },
  ];
}
export interface dheader {
  menuTitle: string;
  menuIcon: string;
  menuRedirectionUrl: string;
}

export interface HeaderData {
  data: HeaderItemsData[];
}

export interface HeaderItemsData {
  displayOrder: number;
  menuItems: MenuTitleData[];
  menuRedirectionUrl?: string;
  menuTitle: string;
  status: boolean;
  _id: string;
}

export interface MenuTitleData {
  menuTitle: string;
  menuItems: MenuItemsData[];
  _id: string;
}

export interface MenuItemsData {
  menuTitle: string;
  menuIcon: string;
  menuRedirectionUrl: string;
}
