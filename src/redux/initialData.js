import { v4 } from 'uuid';

const initialData = {
  books: [
    {
      id: v4(),
      title: 'El Ingenioso Hidalgo Don Quijote de La Mancha',
      author: 'Miguel de Cervantes',
      genre: 'Novel',
    },
    {
      id: v4(),
      title: 'The Call of Cthulhu',
      author: 'Howard Philips Lovecraft',
      genre: 'Horror',
    },
    {
      id: v4(),
      title: 'The Illiad',
      author: 'Homer',
      genre: 'Epic Poetry',
    },
  ],
  categories: [],
};

export default initialData;
