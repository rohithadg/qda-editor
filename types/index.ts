export interface Code {
  id: string;
  name: string;
  color: string;
  createdAt: string;
}

export interface Excerpt {
  id: string;
  content: string;
  startPos: number;
  endPos: number;
  color?: string;
  codes: string[];
  createdAt: string;
}

export interface Document {
  id: string;
  content: any;
  codes: Code[];
  excerpts: Excerpt[];
  updatedAt: string;
}
