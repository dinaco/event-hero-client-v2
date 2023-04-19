export type Location = {
  city: string;
  country: string;
  state: string;
};

export type Event = {
  active: boolean;
  admins: string[];
  createdAt: string;
  customers: UserInfo[];
  date: string;
  id: string;
  location: Location;
  name: string;
  orders: Order[];
  products: Product[];
  splashImg: string;
  staff: UserInfo[];
  takeOrders: boolean;
  updatedAt: string;
  description: string;
};

export type Order = {
  id: string;
  total: number;
  bgColor: string;
  status: string;
  products: Product[];
  event: Event;
  customer: UserInfo;
  staff: UserInfo;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  name: string;
  productImg: string;
  manufacturer: string;
  price: number;
  event: Event;
  active: boolean;
  orders: Order[];
  createdAt: string;
  updatedAt: string;
};

export type UserRoles =
  | 'customer'
  | 'app-admin'
  | 'event-admin'
  | 'event-staff';

export type UserInfo = {
  _id: string;
  id: string;
  email: string;
  name: string;
  profileImg?: string;
  balance: number;
  events: Event[];
  orders: Order[];
  role: UserRoles;
  active: boolean;
  updatedAt: string;
};
