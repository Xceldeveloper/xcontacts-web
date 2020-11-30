export default {

    mounted() {

    },
    methods: {
        getContacts() {
            var contacts = localStorage.getItem('contacts')
            console.log(contacts)
            if (contacts == null) {
                return []
            } else {
                var res = JSON.parse(contacts)
                return res.sort((a, b) => a.name.localeCompare(b.name))
            }
        },

        getSearchedContacts() {
            var contacts = localStorage.getItem('search_query')
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

        setFavourite(id, state) {
            var array = JSON.parse(localStorage.getItem('contacts'));
            for (let index = 0; index < array.length; index++) {
                if (array[index].id == id) {
                    array[index].favourite = state
                    console.log(JSON.stringify(array[index].favourite))
                    var updated = JSON.stringify(array)
                    localStorage.setItem('contacts', updated)
                    break;
                }
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

        getContactInfo(id) {
            var contacts = localStorage.getItem('contacts');
            if (contacts == null) {

                return []

            } else {
                var res = JSON.parse(contacts)

                var rex = res.filter((item) => {
                    return item.id == id;
                });

                //  console.log(JSON.stringify(rex[0]))
                return rex[0]
            }
        },

        deleteContact(id) {
            var array = JSON.parse(localStorage.getItem('contacts'));
            for (let index = 0; index < array.length; index++) {
                if (array[index].id == id) {
                    array.splice(index, 1)//delete
                    var updated = JSON.stringify(array)
                    localStorage.setItem('contacts', updated)
                    break;
                }
            }
        },

        saveNewContact(contact) {
            var contacts = localStorage.getItem('contacts');
            if (contacts == null) {
                let contactx = []
                contactx.push(contact)
                let todb = JSON.stringify(contactx);
                try { localStorage.setItem('contacts', todb) } catch (err) { }
            } else {
                var res = JSON.parse(contacts)
                res.push(contact)
                let todb = JSON.stringify(res);
                try { localStorage.setItem('contacts', todb) } catch (err) { }
            }
        },

        updateContact(contact) {
            var array = JSON.parse(localStorage.getItem('contacts'));
            for (let index = 0; index < array.length; index++) {
                if (array[index].id == contact.id) {
                    array[index] = contact
                    var updated = JSON.stringify(array)
                    localStorage.setItem('contacts', updated)
                    break;
                }
            }
        },

        addToSearchHistory(contact) {
            var contacts = localStorage.getItem('search_query');
            if (contacts == null) {
                let contactx = []
                contactx.push(contact)
                let todb = JSON.stringify(contactx);
                try { localStorage.setItem('search_query', todb) } catch (err) {

                }
            } else {
                var res = JSON.parse(contacts)
                res.push(contact)
                let todb = JSON.stringify(res);
                try { localStorage.setItem('search_query', todb) } catch (err) {

                }
            }
        }

    }


}