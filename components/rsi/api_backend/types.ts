export interface Product {
    ProductName: string;
    ProductLink: string;
    Desc?: string;
    Origin?: string[];
    ManufactoringProcess?: string[];
    RawMaterials?: string[];
    Type?: string[];
  }

export interface Origin{
  Desc?: string;
  OriginName: string;
  id: string;
  lat?: number;
  lng?: number;
}

export const manualDescriptions: Record<string, string> = {
    Pakistan: "Handmade Manufacturing",
    Iran: "Handmade Manufacturing",
    Afghanistan: "Handmade Manufacturing",
    Turkey: "Handmade Manufacturing",
    India: "Handmade Manufacturing",
    Colombia: "Handmade Manufacturing",
    Brazil: "Handmade Manufacturing",
    Canada: "Handmade Manufacturing",
  };