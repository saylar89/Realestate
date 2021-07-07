import { IApart } from "../../interfaces/property/apartment";
import { Property } from "./property";

export class Apartment extends Property implements IApart {
  type: string;
  bed: number;
  bath: number;
  //   master: number;
  //   pool: string;
  //   sauna: string;
  //   jacuzzi: string;
  //   parking: number;
  //   elevator: string;
  //   balcony: string;
  //   floor: number;
  //   age: number;
  //   roofGarden: string;
  //   videoDoor: string;
  //   cellar: number;
  //   heating: string;
  //   cooling: string;
  //   fireplace: string;
  //   smart: string;
  //   guard: string;
  //   cctv: string;

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
    // _master: number,
    // _pool: string,
    // _sauna: string,
    // _jacuzzi: string,
    // _parking: number,
    // _elevator: string,
    // _balcony: string,
    // _floor: number,
    // _age: number,
    // _roofGarden: string,
    // _videoDoor: string,
    // _cellar: number,
    // _heating: string,
    // _cooling: string,
    // _fireplace: string,
    // _smart: string,
    // _guard: string,
    // _cctv: string,
  ) {
    super(_id, _country, _city, _state, _location, _price, _sqm);
    this.type = _type;
    this.bed = _bed;
    this.bath = _bath;
  }
}
