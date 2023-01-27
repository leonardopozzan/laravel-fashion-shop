import { reactive } from 'vue';

export const store = reactive({

    apiUrl: 'http://127.0.0.1:8000/api',
    imagePath: 'http://127.0.0.1:8000/storage/',

    menuItems: [
        {
            label: 'Home',
            routeName: 'home',
        },
        {
            label: 'Products',
            routeName: 'products',
        },
        {
            label: 'Contact',
            routeName: 'contact',
        },
        {
            label: 'About Us',
            routeName: 'home',
        },
    ],


    mainMenuItem: [

        'Contact US',
        'Help Center / FAQs',
        'Shipping',
        'Returns',
        'Cult Concierge',
        'Contact US',
        'Contact US',

    ],



    dropDownMenuItem: [

        {

            title: 'About',

            voices: [

                'About',
                'Careers',
                'Glossary',
                'People and Planet',

            ],

        },


        {

            title: 'Legal',

            voices: [

                'Terms & Conditions',
                'Privacy Policy',
                'Coockie Policy',
                'Modern Slavery Policy',
                'Accessibility',

            ],


        },


        {


            title: 'Find Out More',

            voices: [

                'Cult Status',
                'Promotions',
                'Affiliates',
                'Refer A Friend',

            ],

        },

    ],


});