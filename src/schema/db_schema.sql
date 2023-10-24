CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE profiles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    username text null,
    constraint profiles_id_fkey foreign key (id) references auth.users (id)
);

CREATE TABLE posts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(), 
    profile_id uuid REFERENCES profiles(id), 
    title text NOT NULL, 
    content text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT current_timestamp,
    updated_at timestamp with time zone DEFAULT current_timestamp NOT NULL, 
    deleted_at timestamp with time zone, 
    author_id uuid NOT NULL
);

CREATE TRIGGER handle_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE TABLE tags (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(), 
    title text NOT NULL, 
    created_at timestamp with time zone DEFAULT current_timestamp 
);

CREATE TABLE post_tags (
    post_id uuid REFERENCES posts(id),
    tag_id uuid REFERENCES tags(id), 
    PRIMARY KEY (post_id, tag_id) 
);
