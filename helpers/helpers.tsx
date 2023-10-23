import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

import CoursesIcon from '@/public/assets/icons/course.svg';
import ServicesIcon from '@/public/assets/icons/services.svg';
import BooksIcon from '@/public/assets/icons/books.svg';
import ProductsIcon from '@/public/assets/icons/products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
 { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
 { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
 { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
 { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];
