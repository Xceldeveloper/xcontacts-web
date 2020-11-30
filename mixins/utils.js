export default {

    mounted() {

    },
    methods: {
        getContacts() {
            var contacts = localStorage.getItem('contacts')
            //console.log(contacts)
            if (contacts == null) {
                return []
            } else {
                var res = JSON.parse(contacts)
                return res.sort((a, b) => a.name.localeCompare(b.name))
            }
        },

        getFavourites() {
            var contacts = localStorage.getItem('contacts');
            if (contacts == null) {

                return []

            } else {
                var res = JSON.parse(contacts)

                var rex = res.filter((item) => {
                    return item.favourite;
                });

                return rex.sort((a, b) => a.name.localeCompare(b.name))
            }
        },

        getPriority(priority) {
            var contacts = localStorage.getItem('contacts');
            if (contacts == null) {

                return []

            } else {
                var res = JSON.parse(contacts)

                var rex = res.filter((item) => {
                    return item.priority.indexOf(priority) != -1;
                });

                return rex.sort((a, b) => a.name.localeCompare(b.name))
            }
        },

        saveNewContact(contact) {
            var contacts = localStorage.getItem('contacts');
            if (contacts == null) {
                let contactx = []
                contactx.push(contact)
                let todb = JSON.stringify(contactx);
                localStorage.setItem('contacts', todb)
            } else {
                var res = JSON.parse(contacts)
                res.push(contact)
                let todb = JSON.stringify(res);
                localStorage.setItem('contacts', todb)
            }
        },

    }


}