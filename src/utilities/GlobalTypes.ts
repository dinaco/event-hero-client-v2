type Location = {
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
  orders: string[];
  products: string[];
  splashImg: string;
  staff: UserInfo[];
  takeOrders: boolean;
  updatedAt: string;
  description: string;
};

export type UserRoles =
  | 'customer'
  | 'app-admin'
  | 'event-admin'
  | 'event-staff';

export type UserInfo = {
  id: string;
  email: string;
  name: string;
  hashedPassword: string;
  profileImg?: string;
  balance: number;
  events: Event[];
  orders: string[];
  role: UserRoles;
  active: boolean;
  updatedAt: string;
};
