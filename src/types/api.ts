// テーブルの複合による型定義
import type { User, Tweet, Like, Bookmark, Comment, FollowRelationship, Password } from './entities';

//認証関連
export type LoginUserInput = Pick<User, 'email'> & Pick<Password, 'password'>
export type SignUpUser = Pick<User, 'name' | 'email'> & Password

// ユーザー・プロフィール関連
export type ProfileUserUpdate = Omit<User, 'id' | 'created_at' | 'updated_at'>
export type FollowingUserDetail = FollowRelationship & {
  following_user: Omit<User, 'email'>
}
export type FollowerUserDetail = FollowRelationship & {
  follower_user: Omit<User, 'email'>
}
export type ShowMyProfile = ProfileUserUpdate & Password & {
  followings: FollowingUserDetail[] // フォローしている人たちのリスト
  followers:  FollowerUserDetail[]  // フォロワーたちのリスト
}
export type ShowOtherProfile = Pick<User, 'name' | 'bio'> & {
  followings: FollowingUserDetail[] // フォローしている人たちのリスト
  followers:  FollowerUserDetail[]  // フォロワーたちのリスト
}

// ツイート関連
export type TweetCreate = Pick<Tweet, 'title' | 'content' | 'picture'>
export type TweetUpdate = Partial<TweetCreate>
export type TweetDetail = Tweet & {
  user: Omit<User, 'email'> // メールアドレスを隠して安全にする
  likes: Like[]
  bookmarks: Bookmark[]
  comments: (Comment & { user: Omit<User, 'email'>})[] // コメントした人の名前も画面に出せるように拡張
}

// コメント関連
export type CommentCreate = Pick<Comment, 'content'>
export type CommentUpdate = Partial<CommentCreate>

// アクション関連
export type ToggleLike = Pick<Like, 'user_id' | 'tweet_id'>
export type ToggleBookmark = Pick<Bookmark, 'user_id' | 'tweet_id'>
export type FollowUser = Omit<FollowRelationship, 'id'>
