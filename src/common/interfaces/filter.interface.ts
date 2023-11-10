export interface IFilterStates {
  search: string;
  price: IPrice;
  services: IServices;
  propertyType: IPropertyType;
  more: IMore;
}

export interface IPrice {
  min: number;
  max: number;
}

export interface IServices {
  bed: number;
  bath: number;
}

export interface IPropertyType {
  house: boolean;
  apartment: boolean;
}

export interface IMore {
  pet: boolean;
  min: number;
  max: number;
  parking: boolean;
  garage: boolean;
}
