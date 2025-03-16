import { Product } from "./types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://rsi-backend-us1f.onrender.com/api/data");
    const data = await res.json();
    console.log("my api data return:", data);

    return data.products.map((product: any) => ({
      ProductName: product.ProductName,
      Desc: product.Desc,
      Origin: product.Origin.map((origin: any) => origin.originName),
      ManufactoringProcess: product.ManufactoringProcess.map((manufactoringProcess: any) => manufactoringProcess.manufactoringProcessName),
      RawMaterial: product.RawMaterial.map((rawMaterial:any) => rawMaterial.rawMaterialName),
      Type: product.Type.map((type:any) => type.typeName),
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
