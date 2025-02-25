import { AvailableLanguage } from '../i18n';
import { Theme } from '../variables';
import { IReactionGroups, IUser } from './adapter';

export type InputPosition = 'top' | 'bottom';

export type CommentOrder = 'oldest' | 'newest';

export interface ITokenRequest {
  session: string;
}

export interface ITokenResponse {
  token: string;
}

export interface IRepoConfig {
  origins?: string[];
  originsRegex?: string[];
  defaultCommentOrder?: CommentOrder;
}

export interface IDiscussionData {
  id: string;
  url: string;
  locked: boolean;
  repository: {
    nameWithOwner: string;
  };
  reactionCount: number;
  totalCommentCount: number;
  totalReplyCount: number;
  reactions: IReactionGroups;
}

export interface IMessage<T> {
  giscus: T;
}

// giscus-to-parent messages
export interface IErrorMessage {
  error: string;
}

export interface IMetadataMessage {
  discussion: IDiscussionData;
  viewer: IUser;
}

// parent-to-giscus messages
export interface ISetConfigMessage {
  setConfig: {
    theme?: Theme;
    repo?: string;
    term?: string;
    number?: number;
    category?: string;
    reactionsEnabled?: boolean;
    emitMetadata?: boolean;
    inputPosition?: InputPosition;
    lang?: AvailableLanguage;
  };
}
