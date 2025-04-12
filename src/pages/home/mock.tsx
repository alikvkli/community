import categoryImage1 from '@/images/categories/1.jpg';
import categoryImage2 from '@/images/categories/2.jpg';
import categoryImage3 from '@/images/categories/3.jpg';
import categoryImage4 from '@/images/categories/4.jpg';


import interestedServices1 from '@/images/services/service_1.png';
import interestedServices2 from '@/images/services/service_2.png';
import interestedServices3 from '@/images/services/service_3.png';

import featuredService1 from '@/images/services/1.png';
import featuredService2 from '@/images/services/2.jpg';

export const categoryListData = [
    {
        id: 1,
        name: "Cleaning",
        slug: 'cleaning',
        image: categoryImage1
    },
    {
        id: 2,
        name: "Dressmaker",
        slug: 'dressmaker',
        image: categoryImage2
    },
    {
        id: 3,
        name: "Repair",
        slug: 'repair',
        image: categoryImage3
    },
    {
        id: 4,
        name: "Catering",
        slug: 'catering',
        image: categoryImage4
    }
]

export const recentServiceData = [
    {
        title: 'Furniture assembly',
        payment: 'Paid by Vodafone pay',
        price: '489€',
        star: '4.9 earned',
        date: '3/4/2025'
    },
    {
        title: 'Furniture assembly',
        payment: 'Paid by Vodafone pay',
        price: '489€',
        star: '4.9 earned',
        date: '3/4/2025'
    },
    {
        title: 'Furniture assembly',
        payment: 'Paid by Vodafone pay',
        price: '489€',
        star: '4.9 earned',
        date: '3/4/2025'
    },
    {
        title: 'Furniture assembly',
        payment: 'Paid by Vodafone pay',
        price: '489€',
        star: '4.9 earned',
        date: '3/4/2025'
    }
]

export const interestedServiceData = [
    {
        id: 1,
        name: 'Catering',
        image: interestedServices1
    },
    {
        id: 2,
        name: 'Cleaning',
        image: interestedServices2
    },
    {
        id: 3,
        name: 'Assembly',
        image: interestedServices3
    },
]



export const featuredServiceData = [
    {
        id: 1,
        favorite: false,
        title: 'Furniture assembly',
        description: 'Service starting at 489€',
        image: featuredService1
    },
    {
        id: 2,
        favorite: true,
        title: 'Dress shortening',
        description: 'Service starting at 489€',
        image: featuredService2

    }
]
