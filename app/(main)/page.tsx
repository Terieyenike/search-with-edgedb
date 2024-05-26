import Image from "next/image";
import Link from "next/link";
import createClient from "edgedb";
import e from "@/dbschema/edgeql-js";

// type Item = {
//   id: string;
//   name: string;
//   imageId: string;
//   price: number;
//   description: string;
// };

const client = createClient();

export default async function Home() {
  const selectItems = e.select(e.SearchItem, () => ({
    id: true,
    name: true,
    imageId: true,
    price: true,
    description: true,
  }));
  const items = await selectItems.run(client);

  return (
    <ul className='py-4 divide-y divide-zinc-100 bg-white shadow-md rounded-b-md'>
      {items.map((item) => (
        <Link key={item.id} href={`/products/${item.id}`}>
          <li className='mx-auto py-4 px-8 flex space-x-4'>
            <div className='relative flex items-center bg-zinc-100 rounded-lg h-40 w-40'>
              <Image fill loading='eager' alt={item.name} src={item.imageId} />
            </div>
            <div className='w-full flex-1 space-y-2 py-1'>
              <h1 className='text-lg font-medium text-gray-900'>{item.name}</h1>
              <p className='prose prose-sm text-gray-500 line-clamp-3'>
                {item.description}
              </p>

              <p className='text-base font-medium text-gray-900'>
                ${item.price.toFixed(2)}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
