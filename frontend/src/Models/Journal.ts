export type JournalGet = {
    tripId: number;
    journalId: number;
    title: string;
    entry: string;
    createdAt: string;
    createdBy: string;
}

export type JournalPost = {
    tripId: number;
    title: string;
    entry: string;
}

export type JournalDelete = {
    id: number;
}