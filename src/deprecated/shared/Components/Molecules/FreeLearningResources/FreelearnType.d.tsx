export interface FreeLernItems {
  menuItems: menuItemsDatas[];
  section: number;
  status: boolean;
  _id: string;
}
export interface menuItemsDatas {
  menuTitle: string;
  menuItems: FreeLerningInternal[];
  id: string;
}
export interface FreeLerningInternal {
  menuTitle: string;
  redirectionUrl: string;
}
export interface MenuLastItemsType {
  description: string;
  menuTitle: string;
  id: string;
}
