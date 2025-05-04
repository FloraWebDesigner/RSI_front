import { Product } from "./types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://rsi-backend-kl8gfthcr-floras-projects-0cf04884.vercel.app/apivercel/data");
    const data = await res.json();
    console.log("product data:", data);

    return data.products.map((product: any) => ({
      ProductName: product.ProductName,
      Desc: product.Desc,
      ProductLink: product.ProductLink,
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
