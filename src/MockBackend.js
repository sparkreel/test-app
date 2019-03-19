import _ from 'lodash';

let Clients = [
    {id: 1, name: 'jane', email: 'jane@upshow.tv', age: 34, firstName: 'Jane', lastName: 'Doe', favoriteVenues: [2,5]},
    {id: 2, name: 'john', email: 'john@upshow.tv', age: 50, firstName: 'John', lastName: 'Doe', favoriteVenues: []},
    {id: 3, name: 'herschel', email: 'herschel@upshow.tv', age: 18, firstName: undefined, lastName: 'Herschel', favoriteVenues: [1,2]},
    {id: 4, name: 'bartholomew', email: 'barth@upshow.tv', age: undefined, firstName: 'Bartholomew', lastName: 'Peralta', favoriteVenues: [4]},
    {id: 5, name: 'kid', email: 'kid@upshow.tv', age: 5, firstName: '', lastName: '', favoriteVenues: []},
    ];
let Venues = [
    {id: 1, name: 'Rodelu'},
    {id: 2, name: 'Bilas'},
    {id: 3, name: 'WTF'},
    {id: 4, name: 'El Buen Gusto de lo Casero'},
    {id: 5, name: 'Pastas Roma'},
    ];

const MockBackend = {
    listClients: () => Clients,
    listVenues: () => Venues,
    getClient: (client_id) => _.find(Clients, ['id', client_id]),
    getVenue: (venue_id) => _.find(Venues, ['id', venue_id]),
    addClient: (client) => {
        if (typeof client.email != "string" || client.email === '') {
            throw new Error('Client email missing');
        }
        if (typeof client.name != "string" || client.name === '') {
            throw new Error('Client name missing');
        }
        client.id = _.max(Clients.map(c => c.id)) + 1;
        client.favoriteVenues = [];
        Clients.push(client);
        return client;
    },
    addVenue: (venue) => {
        venue.id = _.max(Venues.map(c => c.id)) + 1;
        Venues.push(venue);
        return venue;
    },
    getClientFavouriteVenues: (client_id) => {
        const client = MockBackend.getClient(client_id);
        return _.filter(Venues, (v) => client.favoriteVenues.includes(v.id))
    },
    addVenueToClient: (client_id, venue_id) => {
        const index = _.findIndex(Clients, ['id', client_id]);
        Clients[index].favoriteVenues.push(venue_id);
        return Clients[index];
    },
    removeVenueFromClient: (client_id, venue_id) => {
        const index = _.findIndex(Clients, ['id', client_id]);
        Clients[index].favoriteVenues = _.filter(Clients[index].favoriteVenues, i => i !== venue_id);
        return Clients[index];
    }
};

export default MockBackend;