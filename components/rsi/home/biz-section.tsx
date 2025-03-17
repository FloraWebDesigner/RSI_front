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

export function BizSection() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="ourBiz mx-16 flex flex-col gap-6">
      {products.map((product, index) => (
        <Card
          className={`flex ${
            index % 2 === 0 ? "flex-row h-60" : "flex-row-reverse h-60"
          } border-0 rounded-none py-0`}
          key={index}
        >
          <img
            src={`img/${product.ProductName}.jpeg`}
            alt="product image"
            className="w-1/2 object-cover object-center"
          />
          <div className="w-1/2 flex flex-col justify-around p-4">
            <CardHeader>
              <CardTitle className="text-2xl">{product.ProductName}</CardTitle>
              <CardDescription>{product.Desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Origins: {product.Origin.join(" | ")}</p>
            </CardContent>
            <CardFooter>
              <Link href={product.ProductLink} passHref>
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
