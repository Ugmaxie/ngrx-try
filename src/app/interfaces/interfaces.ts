export interface Guest {
  name: string;
  phone: string;
  gender: string;
  drunker: boolean;
  canBeRemoved?: boolean;
}

export interface GuestData {
  payload: {
    addNewGuest?: Guest,
    removeGuest?: Guest
  };
  type: string;
}

export interface PartyTitle {
  payload: {
    setNewTitle: string;
  },
  type: string;
}

export interface ResponseApp {
  guests?: Guest[];
  setNewTitle?: string;
  type: string;
  pending?: boolean;
}
