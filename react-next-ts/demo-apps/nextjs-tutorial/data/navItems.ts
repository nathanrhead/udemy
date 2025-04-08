export interface NavItem {
  id: number;
  name: string;
  url: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { id: 1, name: 'About', url: '/about' },
  { id: 2, name: 'Contact Us', url: '/info/contact' },
  { id: 3, name: 'Counter', url: '/counter' },
];
