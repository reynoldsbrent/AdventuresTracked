export type PortfolioGet = {
    tripId: number;
    tripName: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    legs: any;
    journals: any;
    photos: any;
}

export type PortfolioPost = {
    tripId: number;
}