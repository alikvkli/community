import categoryImage1 from '@/images/categories/1.jpg';
import categoryImage2 from '@/images/categories/2.jpg';
import categoryImage3 from '@/images/categories/3.jpg';
import categoryImage4 from '@/images/categories/4.jpg';
import categoryImage5 from '@/images/categories/5.jpg';
import categoryImage6 from '@/images/categories/6.jpg';
import categoryImage7 from '@/images/categories/7.jpg';


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
        name: "Assembly",
        slug: 'assembly',
        image: categoryImage3
    },
    {
        id: 4,
        name: "Catering",
        slug: 'catering',
        image: categoryImage4
    },
    {
        id: 5,
        name: "Repair",
        slug: 'repair',
        image: categoryImage5
    },
    {
        id: 6,
        name: "Electrical",
        slug: 'electrical',
        image: categoryImage6
    },
    {
        id: 7,
        name: "Technical Service",
        slug: 'technical-service',
        image: categoryImage7
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
        image: interestedServices1,
        slug: 'catering'
    },
    {
        id: 2,
        name: 'Cleaning',
        image: interestedServices2,
        slug: 'cleaning'
    },
    {
        id: 3,
        name: 'Assembly',
        image: interestedServices3,
        slug: 'assembly'
    },
]

export const youMayAlsoLikeData = [
    {
        id: 1,
        name: 'Repair',
        image: categoryImage5
    },
    {
        id: 2,
        name: 'Technical Service',
        image: categoryImage7
    },
    {
        id: 3,
        name: 'Dressmaker',
        image: categoryImage2
    },
    {
        id: 4,
        name: 'Electrical',
        image: categoryImage6
    }
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
