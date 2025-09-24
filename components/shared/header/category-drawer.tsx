import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
// import { getAllCategories } from '@/lib/actions/product.actions';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

const CategoryDrawer = async () => {
  // const categories = await getAllCategories();
  const categories = [
    { category: 'Electronics', _count: 10 },
    { category: 'Clothing', _count: 20 },
    { category: 'Home & Garden', _count: 15 },
    { category: 'Sports & Outdoors', _count: 8 },
    { category: 'Books', _count: 12 },
    { category: 'Beauty & Personal Care', _count: 18 },
    { category: 'Toys & Games', _count: 25 },
    { category: 'Automotive', _count: 6 },
    { category: 'Health & Wellness', _count: 14 },
    { category: 'Pet Supplies', _count: 22 },
    { category: 'Office Supplies', _count: 11 },
    { category: 'Food & Beverage', _count: 9 },
    { category: 'Furniture', _count: 7 },
    { category: 'Tools & Hardware', _count: 13 },
    { category: 'Baby & Kids', _count: 16 },
    { category: 'Jewelry & Accessories', _count: 19 },
    { category: 'Art & Collectibles', _count: 23 },
    { category: 'Musical Instruments', _count: 5 },
    { category: 'Gourmet Food', _count: 17 },
    { category: 'Travel & Luggage', _count: 21 },
    { category: 'Stationery', _count: 3 },
  ];

  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <Button variant='outline'>
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-full max-w-sm'>
        <DrawerHeader>
          <DrawerTitle>Select a category</DrawerTitle>
          <div className='space-y-1 mt-4'>
            {categories.map((x) => (
              <Button
                variant='ghost'
                className='w-full justify-start'
                key={x.category}
                asChild
              >
                <DrawerClose asChild>
                  <Link href={`/search?category=${x.category}`}>
                    {x.category} ({x._count})
                  </Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
