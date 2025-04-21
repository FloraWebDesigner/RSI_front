"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api_backend/product-api";
import { Button } from "../../ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface Product {
  ProductName: string;
  Desc?: string;
  Origin?: string[];
  ProductLink?: string;
}

interface ProductCardProps {
  productName?: string;
  useGeneratedLink?: boolean
}

export function BizSection({
  productName,
  useGeneratedLink = false 
}: ProductCardProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        const filteredProducts = productName
          ? data.filter((p) => p.ProductName === productName)
          : data;
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productName]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <section className="ourBiz mx-16 flex flex-col gap-6">
      {products.map((product, index) => (
        <Card
          className={`flex ${
            index % 2 === 0 ? "flex-row h-60 " : "flex-row-reverse h-60"
          } border-slate-200 dark:border-slate-700 rounded-none py-0`}
          key={index}
        >
          <img
            src={`img/${product.ProductName}.jpg`}
            alt="product image"
            className="w-1/2 object-cover object-center"
          />
          <div className="w-1/2 flex flex-col justify-around p-4">
            <CardHeader>
              <CardTitle className="text-2xl">{product.ProductName}</CardTitle>
              <CardDescription>{product.Desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Origins: {product.Origin?.join(" | ") || "No origin available"}
              </p>
            </CardContent>
            <CardFooter>
            <Link 
              href={
                useGeneratedLink 
                  ? `/${product.ProductName.replace(/\s+/g, "")}`
                  : product.ProductLink || `/${product.ProductName.replace(/\s+/g, "")}`
              } 
              passHref
            >
                <Button>
                  Learn More
                  <MoveUpRight />
                </Button>
              </Link>
            </CardFooter>
          </div>
        </Card>
      ))}
    </section>
  );
}
