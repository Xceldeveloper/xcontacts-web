export default {

    mounted() {

    },
    methods: {
        getContacts() {
            var contacts = localStorage.getItem('contacts')
            console.log(contacts)
            if (contacts == null) {
                return [{
                    id: 1,
                    name: "Overcomer Emaitor",
                    avatar: "",
                    favourite: false,
                },
                {
                    id: 23,
                    name: "Jack Dorsey",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: true,
                },
                {
                    id: 2,
                    name: "Larry Paige",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: false,
                },
                {
                    id: 4,
                    name: "Elon Musk",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: true,
                },
                {
                    id: 1,
                    name: "Overcomer Emaitor",
                    avatar: "",
                    favourite: false,
                },
                {
                    id: 23,
                    name: "Jack Dorsey",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: true,
                },
                {
                    id: 2,
                    name: "Larry Paige",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: false,
                },
                {
                    id: 4,
                    name: "Elon Musk",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: true,
                }
            ]
            } else {
                var res = JSON.stringify(contacts)
                return res
            }
        },

        getFavourites() {
            var contacts = localStorage.getItem('contacts');
            if (contacts == null) {

                contacts = [{
                    id: 1,
                    name: "Overcomer Emaitor",
                    avatar: "",
                    favourite: false,
                },
                {
                    id: 23,
                    name: "Jack Dorsey",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: true,
                },
                {
                    id: 2,
                    name: "Larry Paige",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: false,
                },
                {
                    id: 4,
                    name: "Elon Musk",
                    avatar:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
                    favourite: true,
                }]

                return contacts.filter((item) => {
                    return item.favourite;
                });

            } else {
                var res = JSON.stringify(contacts)

                return res.filter((item) => {
                    return item.favourite;
                });
            }
        }
    }


}