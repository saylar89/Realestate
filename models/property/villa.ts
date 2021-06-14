import { IVilla } from "../../interfaces/property/villa";
import { Property } from "./property";

export class Villa extends Property implements IVilla {
  type: string;
  bed: number;
  bath: number;

  constructor(
    _id: string,
    _country: string,
    _city: string,
    _state: string,
    _location: string,
    _price: number,
    _sqm: number,
    _type: string,
    _bed: number,
    _bath: number
  ) {
    super(_id, _country, _city, _state, _location, _price, _sqm);
    this.type = _type;
    this.bed = _bed;
    this.bath = _bath;
  }
}
