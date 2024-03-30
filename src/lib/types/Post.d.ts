export interface Post {
  id: string;
  title: string;
  content?: string;
  images?: ImageFile[];
  imageSrc?: string[];
  imageName?: string;
  dateCreated?: string;
  categories?: Categories[];
}

export interface PostsState {
  items: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface Categories {
  id: any;
  title: string;
}
