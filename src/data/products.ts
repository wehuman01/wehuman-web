export type ProductId = 'awedot' | 'awewarm' | 'aweshare';

export interface ProductMeta {
  id: ProductId;
  number: string;
  name: string;
  href: string;
  sourceHref: string;
  mark: 'orbit' | 'ember' | 'network';
}

export const products: ProductMeta[] = [
  {
    id: 'awedot',
    number: '01',
    name: 'awedot',
    href: 'https://awedot.wehuman.top/',
    sourceHref: 'https://github.com/mugpeng/awedot',
    mark: 'orbit',
  },
  {
    id: 'awewarm',
    number: '02',
    name: 'awewarm',
    href: 'https://github.com/wehuman01/awewarm',
    sourceHref: 'https://github.com/wehuman01/awewarm',
    mark: 'ember',
  },
  {
    id: 'aweshare',
    number: '03',
    name: 'aweshare',
    href: 'https://github.com/wehuman01/aweshare',
    sourceHref: 'https://github.com/wehuman01/aweshare',
    mark: 'network',
  },
];
