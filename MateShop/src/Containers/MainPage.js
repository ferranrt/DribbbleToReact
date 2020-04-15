import React, { useState } from 'react';
import { Block, Button, Typography } from '../Components';
import Header from '../Components/Header';
import CategoryPicker from '../Components/CategoryPicker';
import ProductsList from '../Components/ProductsList';
import Theme from '../Theme/Theme';

const data = [
  {
    name: 'Yerba Mate',
    products: [
      {
        name: 'Organic Yerba Mate',
        description: 'La Potente Energy',
        price: 4.45,
      },
      {
        name: 'Rosamonte Especial',
        description: 'With Stems (Con Palos)',
        price: 5.25,
      },
      {
        name: 'Sara Azul Extra',
        description: 'Smooth  Yerba Mate',
        price: 8.99,
      },

      {
        name: 'Verde Mate',
        description: 'Green Cactus',
        price: 6.99,
      },

      {
        name: 'Canarias Yerba Mate',
        description: 'Bumper Pack 10kg',
        price: 4.45,
      },
    ],
  },
  {
    name: 'Mate Cups',
    products: [
      { name: 'Dark Carved Natural', rating: 3, price: 6.99 },
      { name: 'Brazilian Mate Gourd', rating: 4, price: 10.99 },
      { name: 'Ceramic Mate Cup', rating: 3, price: 10.99 },
      { name: 'MATERO Vaqueta', rating: 4, price: 21.99 },
    ],
  },
  { name: 'Bombilla Mate', products: [] },
  { name: 'Indigo Mate', products: [] },
  { name: 'Luisito Mate', products: [] },
];
export default function MainPage() {
  const [previousCategory, setPreviousCategory] = useState(0);
  const [categorySelected, setCategorySelected] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const animEnded = () => {
    setStartAnimation(false);
    setCategorySelected(previousCategory);
  };

  // eslint-disable-next-line no-shadow
  const handleChange = (data, index) => {
    setStartAnimation(true);
    setPreviousCategory(index);
  };
  return (
    <Block block padding={Theme.sizes.BASE}>
      <Header color={Theme.colors.DARKGRAY.hex()} />
      <CategoryPicker onChangeSelection={handleChange} data={data} />
      <ProductsList
        prevIndex={previousCategory}
        currentIndex={categorySelected}
        startAnimation={startAnimation}
        animationEnded={animEnded}
        data={data[categorySelected].products}
      />
      <Block row middle>
        <Button shadow primary radius={50} padding={[10, 30]} margin={[5, 25]}>
          <Typography white>View More</Typography>
        </Button>
      </Block>
    </Block>
  );
}
