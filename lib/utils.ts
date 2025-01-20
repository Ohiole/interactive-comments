import { Comments } from "./types";

export const increaseScore = (comments: Comments[] | Comments | null, id: number): Comments[] | Comments | null => {
  if (!comments) return null;

  if (Array.isArray(comments)) return comments.map((comment) =>
    comment.id === id ? { ...comment, score: comment.score + 1 } : comment
  );

  return { ...comments, score: comments.score + 1 };
};


export const decreaseScore = (comments: Comments[] | Comments | null, id: number): Comments[] | Comments | null => {
  if (!comments) return null;

  if (Array.isArray(comments)) return comments.map((comment) =>
    comment.id === id && comment.score > 0 ? { ...comment, score: comment.score - 1 } : comment
  );

  return comments.score > 0 ? { ...comments, score: comments.score - 1 } : comments;
};
