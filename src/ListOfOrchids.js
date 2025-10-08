const ListOfOrchids = [
  {
    id: '1',
    name: 'Taichung Beauty',
    rating: 5,
    isSpecial: true,
    image: 'https://barritaorchids.com/cdn/shop/products/Cf592_1024x1024.jpg',
    color: 'Pink',
    origin: 'Taiwan',
    category: 'Cattleya'
  },
  {
    id: '2',
    name: 'Phalaenopsis Aphrodite',
    rating: 4,
    isSpecial: false,
    image: 'https://tse3.mm.bing.net/th/id/OIP.FzzjB4cguXndNDbE0UsM9AHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'White',
    origin: 'Philippines',
    category: 'Phalaenopsis'
  },
  {
    id: '3',
    name: 'Dendrobium Nobile',
    rating: 4,
    isSpecial: true,
    image: 'https://tse1.mm.bing.net/th/id/OIP.w5QOxxmTRx3KebKTj5C49gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Purple',
    origin: 'Himalaya',
    category: 'Dendrobium'
  },
  {
    id: '4',
    name: 'Vanda Coerulea',
    rating: 5,
    isSpecial: true,
    image: 'https://tse2.mm.bing.net/th/id/OIP.R-_Fuy1goXbD9txp4cTAxAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Blue',
    origin: 'India',
    category: 'Vanda'
  },
  {
    id: '5',
    name: 'Cymbidium Ensifolium',
    rating: 3,
    isSpecial: false,
    image: 'https://live.staticflickr.com/2883/12251376376_b491b22a71_b.jpg',
    color: 'Green',
    origin: 'China',
    category: 'Cymbidium'
  },
  {
    id: '6',
    name: 'Oncidium Sharry Baby',
    rating: 5,
    isSpecial: true,
    image: 'https://tse2.mm.bing.net/th/id/OIP.QPibuxdlIH-IiDRPgCUmlQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Red',
    origin: 'South America',
    category: 'Oncidium'
  },
  {
    id: '7',
    name: 'Paphiopedilum Maudiae',
    rating: 4,
    isSpecial: false,
    image: 'https://th.bing.com/th/id/R.d95d9fcb7be3ab15edab06b9a52473ca?rik=lJfpBzRV%2fhVb1A&riu=http%3a%2f%2fhybridorchid.la.coocan.jp%2fPaphiopedilum%2fPaphiopedilum+Maudiae%2fDSC09842.JPG&ehk=%2f32HEF00ywkTdj1hFM34ekwmroPsa7unlc2%2fXBHpV%2f0%3d&risl=&pid=ImgRaw&r=0',
    color: 'Green/White',
    origin: 'Hybrid',
    category: 'Paphiopedilum'
  },
  {
    id: '8',
    name: 'Miltonia Spectabilis',
    rating: 3,
    isSpecial: false,
    image: 'https://media.gettyimages.com/id/929199408/photo/miltonia-spectabilis-orchid.jpg?b=1&s=594x594&w=0&k=20&c=xCVfBZbSqJGGKlfqdX6MmzDwBnEdG1dpmia5qB0hVgc=',
    color: 'Purple/White',
    origin: 'Brazil',
    category: 'Miltonia'
  },
  {
    id: '9',
    name: 'Epidendrum Radicans',
    rating: 4,
    isSpecial: false,
    image: 'https://th.bing.com/th/id/OIP.du0DG_fBmlJfDjdHrGsGGQHaFh?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Orange',
    origin: 'Mexico',
    category: 'Epidendrum'
  },
  {
    id: '10',
    name: 'Brassavola Nodosa',
    rating: 5,
    isSpecial: true,
    image: 'https://peppyflora.com/wp-content/uploads/2023/01/Brassavola-Nodosa-Lady-of-The-Night-Orchid-3x4-Product-Peppyflora-01-a-Moz.jpg',
    color: 'White/Green',
    origin: 'Central America',
    category: 'Brassavola'
  },
  {
    id: '11',
    name: 'Cattleya Mossiae',
    rating: 5,
    isSpecial: true,
    image: 'https://tse1.mm.bing.net/th/id/OIP.vhE4FFBdftu7oeeZKsc15AHaFO?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Lilac',
    origin: 'Venezuela',
    category: 'Cattleya'
  },
  {
    id: '12',
    name: 'Encyclia Cochleata',
    rating: 4,
    isSpecial: false,
    image: 'https://tse4.mm.bing.net/th/id/OIP.cq8jOd6Tk6VIIqjCicNRQAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Green/Purple',
    origin: 'Florida',
    category: 'Encyclia'
  },
  {
    id: '13',
    name: 'Coelogyne Cristata',
    rating: 4,
    isSpecial: false,
    image: 'https://www.celaorchidee.it/wp-content/uploads/2017/11/Coelogyne-cristata-2.jpg',
    color: 'White',
    origin: 'Himalaya',
    category: 'Coelogyne'
  },
  {
    id: '14',
    name: 'Zygopetalum Intermedium',
    rating: 3,
    isSpecial: false,
    image: 'https://th.bing.com/th/id/R.aab8a9cea20e20bfaf76066d971dc05d?rik=Cv9xro1gRjYvgw&pid=ImgRaw&r=0',
    color: 'Brown/Green',
    origin: 'Brazil',
    category: 'Zygopetalum'
  },
  {
    id: '15',
    name: 'Stanhopea Tigrina',
    rating: 5,
    isSpecial: true,
    image: 'https://tse4.mm.bing.net/th/id/OIP.yI-lVzdh5NlykXp_jXqBuwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Yellow/Brown',
    origin: 'Mexico',
    category: 'Stanhopea'
  },
  {
    id: '16',
    name: 'Gongora Galeata',
    rating: 3,
    isSpecial: false,
    image: 'https://tse1.mm.bing.net/th/id/OIP.TG7tiXn1ybXUGdJuVSVrMAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: 'Yellow',
    origin: 'Central America',
    category: 'Gongora'
  }
];

export default ListOfOrchids;
