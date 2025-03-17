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
  OriginName: string;
  id?: string;
}