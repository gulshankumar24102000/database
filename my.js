
export const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Username',
        selector: row => row.username,
    },
    {
        name:'City',
    selector: row =>row.city,
    },
    {
        name:'Zipcode',
        selector: row => row.zipcode,
    },
];