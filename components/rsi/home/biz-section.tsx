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
  useGeneratedLink?: boolean;
}

export function BizSection({
  productName,
  useGeneratedLink = false,
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
    <section className="ourBiz mx-8 flex flex-col gap-6 md:mx-16">
      {products.map((product, index) => (
        <Card
          className={`flex ${
            index % 2 === 0
              ? "flex-col h-60 md:flex-row max-md:h-auto"
              : "flex-col h-60 md:flex-row-reverse max-md:h-auto"
          } border-slate-200 dark:border-slate-700 rounded-none py-0`}
          key={index}
        >
          <img
            src={`img/${product.ProductName}.jpg`}
            alt="product image"
            className="w-full object-cover object-center h-60 md:w-1/2"
          />
          <div className="w-full flex flex-col justify-around p-4 md:w-1/2 md:h-60">
            <CardHeader>
              <CardTitle className="text-2xl">{product.ProductName}</CardTitle>
              <CardDescription>{product.Desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Origins: {product.Origin?.join(" | ") || "No origin available"}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={
                  useGeneratedLink
                    ? `/${product.ProductName.replace(/\s+/g, "")}`
                    : product.ProductLink ||
                      `/${product.ProductName.replace(/\s+/g, "")}`
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
