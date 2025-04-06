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
    Pakistan: "This is a manual description for Pakistan",
    Iran: "This is a manual description for Iran",
    Afghanistan: "This is a manual description for Afghanistan",
    Turkey: "This is a manual description for Turkey",
    India: "This is a manual description for India",
    Colombia: "This is a manual description for Colombia",
    Brazil: "This is a manual description for Brazil",
    Canada: "This is a manual description for Canada",
  };