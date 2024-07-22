export type LegGet = {
    legId: number;
    tripId: number;
    departureAirportId: string;
    arrivalAirportId: string;
    departureDate: string;
    arrivalDate: string;
    distanceMiles: number;
    createdAt: string;
}

export type LegPost = {
    tripId: number;
    departureAirportId: string;
    arrivalAirportId: string;
    departureDate: string;
    arrivalDate: string;
}