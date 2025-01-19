export interface User {
    image: { png: string ; webp: string };
    username: string;
}

export interface Comments {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo?: string,
    replies: Comments[]; // Assuming replies are structured similarly to comments
}

export interface Data {
    currentUser: User;
    comments: Comments[];
}