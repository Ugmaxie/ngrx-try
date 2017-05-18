import { Guest } from '../interfaces'

export class NewGuest {
  name: string;
  phone: string;
  gender: string;
  drunker: boolean;
  canBeRemoved?: boolean;

  constructor(guest: Guest) {
    this.name = guest.name;
    this.phone = guest.phone;
    this.gender = guest.gender;
    this.drunker = guest.drunker;
    this.canBeRemoved = guest.canBeRemoved;
  }
}
