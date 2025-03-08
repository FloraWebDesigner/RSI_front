import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { fetchData } from "./api";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";

export function BizSection() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData();
        const formattedData = data.products.map((product: any) => ({
          ProductName: product.ProductName,
          Desc: product.Desc,
          Origin: product.Origin.map((origin: any) => origin.originName),
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="ourBiz mx-16 flex flex-col gap-6" >
      {products.map((product, index) => (
        <Card
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } border-0 rounded-none py-0`}
          key={index}
        >
          <img
            src={`img/${product.ProductName}.png`}
            alt="product image"
            className="w-1/2"
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
              <Button>
                Learn More
                <MoveUpRight />
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </section>
  );
}
