export interface Timestamp {
  created_at: Date
  updated_at: Date
}

export interface User extends Timestamp {
  id: number
  name: string
  email: string
  bio: string | null
}

export interface Tweet extends Timestamp {
  id: number
  user_id: number
  title: string
  content: string
  picture: string
}

export interface Like extends Timestamp {
  id: number
  user_id: number
  tweet_id: number
}

export interface Bookmark extends Timestamp {
  id: number
  user_id: number
  tweet_id: number
}

export interface Comment extends Timestamp {
  id: number
  user_id: number
  tweet_id: number
  content: string
}

export interface BlockRelationship extends Timestamp {
  id: number
  blocking_id: number
  blocked_id: number
}

export interface FollowRelationship extends Timestamp {
  id: number
  following_id: number
  follower_id: number
}

export interface Password {
  password: string
  password_confirmation: string
}
