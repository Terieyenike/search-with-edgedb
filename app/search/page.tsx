import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

type Item = {
  id: string;
  name: string;
  imageId: string;
  price: number;
  description: string;
};

export default function Search() {
  const items: Item[] = [
    {
      id: uuidv4(),
      name: "Dark Down Jacket 1",
      imageId: "assets/images/dark_down_jacket_1.png",
      price: 69,
      description:
        "A sleek, insulated down jacket designed for chilly urban adventures. Its slim fit and dark hue make it a versatile addition to any winter wardrobe.",
    },
    {
      id: uuidv4(),
      name: "Dark Down Jacket 2",
      imageId: "assets/images/dark_down_jacket_2.png",
      price: 50,
      description:
        "This durable down jacket offers exceptional warmth with a touch of elegance. Perfect for those who demand both style and functionality in cold weather.",
    },
    {
      id: uuidv4(),
      name: "Dark Fleece Jacket 1",
      imageId: "assets/images/dark_fleece_jacket_1.png",
      price: 49,
      description:
        "Experience the cozy warmth of this dark fleece jacket. Ideal for layering, its soft texture and classic design ensure comfort and style on cooler days.",
    },
    {
      id: uuidv4(),
      name: "Dark Leather Jacket 1",
      imageId: "/assets/images/dark_leather_jacket_1.png",
      price: 55,
      description:
        "A timeless dark leather jacket that combines classic styling with rugged durability. Perfect for adding an edge to any outfit, rain or shine.",
    },
    {
      id: uuidv4(),
      name: "Dark Parka Jacket 1",
      imageId: "assets/images/dark_parka_jacket_1.png",
      price: 70,
      description:
        "Stay protected against the elements with this durable parka. Its insulated lining and fur-trimmed hood offer warmth and style in harsh conditions.",
    },
    {
      id: uuidv4(),
      name: "Dark Parka Jacket 2",
      imageId: "assets/images/dark_parka_jacket_2.png",
      price: 80,
      description:
        "This sleek parka features a waterproof exterior and a thermal interior, making it a must-have for winter escapades in the city or the mountains.",
    },
    {
      id: uuidv4(),
      name: "Dark Parka Jacket 3",
      imageId: "assets/images/dark_parka_jacket_3.png",
      price: 100,
      description:
        "With its adjustable features and multiple pockets, this parka blends practicality with modern aesthetics for the ultimate winter outerwear.",
    },
  ];
  console.log(items[0].imageId);
  return (
    <ul className='py-4 divide-y divide-zinc-100 bg-white shadow-md rounded-b-md'>
      {items.map((item) => (
        <Link key={item.id} href={`/products/${item.id}`}>
          <li className='mx-auto py-4 px-8 flex space-x-4'>
            <div className='relative flex items-center bg-zinc-100 rounded-lg h-40 w-40'>
              <Image
                fill
                loading='eager'
                alt={item.name}
                src={`/${item.imageId}`}
              />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
