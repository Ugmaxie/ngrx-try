export interface Guest {
  name: string;
  phone: string;
  gender: string;
  drunker: boolean;
  canBeRemoved?: boolean;
}

export interface ResponseApp {
  title?: string;
  guest?: Guest;
  guests?: Guest[];
  pending?: boolean;
  error?: string;
}

export interface Title {
  title: string;
}
