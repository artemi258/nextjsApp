import { useState } from 'react';
import { Button, Htag, P, Tag } from '../../components';
import Rating from '../../components/Rating/Rating';
import { getMenu } from '@/helpers/requests';
import { Input } from '@/components/Input/Input';

export default async function Home(): Promise<JSX.Element> {
 //  const [rating, setRating] = useState<number>(4);
 return (
  <main>
   <Htag tag='h1'>TEXT</Htag>
   <Button arrow='right' appearance='primary'>
    Узнать подробнее
   </Button>
   <Button arrow='down' appearance='ghost'>
    Узнать подробнее
   </Button>
   <P fz='14'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi, officia aliquid sed
    accusamus voluptas magnam tempora quis. Maxime sed molestiae illum deserunt dolor, repellat
    voluptatem consequuntur laudantium ut dolorem?
   </P>
   <P>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi, officia aliquid sed
    accusamus voluptas magnam tempora quis. Maxime sed molestiae illum deserunt dolor, repellat
    voluptatem consequuntur laudantium ut dolorem?
   </P>
   <P fz='18'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nisi, officia aliquid sed
    accusamus voluptas magnam tempora quis. Maxime sed molestiae illum deserunt dolor, repellat
    voluptatem consequuntur laudantium ut dolorem?
   </P>
   <Tag>маленький</Tag>
   <Tag size='m'>Большой</Tag>
   <Tag color='red'>red</Tag>
   <Tag color='green'>Green</Tag>
   <Tag>Ghost</Tag>
   <Tag color='primary'>Primary</Tag>
   {/* <Rating isEditable rating={rating} setRating={setRating} /> */}
   <Input placeholder='тест' />
  </main>
 );
}
