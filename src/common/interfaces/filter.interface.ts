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
  area: IArea;
  parking: boolean;
  garage: boolean;
}

export interface IArea {
  min: number;
  max: number;
}
