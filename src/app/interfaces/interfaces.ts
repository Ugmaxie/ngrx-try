export interface CurrentGuest {
  name: string;
  phone: string;
  gender: string;
  drunker: boolean;
  canBeRemoved?: boolean;
}

export interface ResponseApp {
  title?: string;
  guest?: CurrentGuest;
  guests?: CurrentGuest[];
  pendingResponse?: boolean;
  error?: string;
}

export interface PartyTitle {
  title: string;
}
