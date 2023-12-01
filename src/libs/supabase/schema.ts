export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      post_tags: {
        Row: {
          post_id: string;
          tag_id: string;
        };
        Insert: {
          post_id: string;
          tag_id: string;
        };
        Update: {
          post_id?: string;
          tag_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "post_tags_post_id_fkey";
            columns: ["post_id"];
            referencedRelation: "posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "post_tags_tag_id_fkey";
            columns: ["tag_id"];
            referencedRelation: "tags";
            referencedColumns: ["id"];
          },
        ];
      };
      posts: {
        Row: {
          author_id: string;
          content: string;
          created_at: string | null;
          deleted_at: string | null;
          description: string | null;
          id: string;
          profile_id: string | null;
          title: string;
          updated_at: string;
        };
        Insert: {
          author_id: string;
          content: string;
          created_at?: string | null;
          deleted_at?: string | null;
          description?: string | null;
          id?: string;
          profile_id?: string | null;
          title: string;
          updated_at?: string;
        };
        Update: {
          author_id?: string;
          content?: string;
          created_at?: string | null;
          deleted_at?: string | null;
          description?: string | null;
          id?: string;
          profile_id?: string | null;
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "posts_profile_id_fkey";
            columns: ["profile_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          id: string;
          username: string | null;
        };
        Insert: {
          id?: string;
          username?: string | null;
        };
        Update: {
          id?: string;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      tags: {
        Row: {
          created_at: string | null;
          id: string;
          title: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          title: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      create_article_and_tags:
        | {
            Args: {
              user_id: string;
              article_title: string;
              article_content: string;
              article_thumbnail: string;
              tag_titles: string[];
            };
            Returns: undefined;
          }
        | {
            Args: {
              user_id: string;
              article_title: string;
              article_content: string;
              article_thumbnail: string;
              is_publish: boolean;
              tag_titles: string[];
            };
            Returns: undefined;
          };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
