/**
 * 회원
 */
export interface IMember {
  email: string;
  password: string;
  nickname: string;
  bio?: string;
  thumbnail?: string;
  tag?: ITag[];
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IJoinStep1 {
  email: string;
  certifyCode: number;
}

export interface IJoinStep2 {
  password: string;
  passwordCheck: string;
}

export interface ICertifyPhoneNumber {
  phone: string;
  certifyCode: number;
}

/**
 * 홈
 */
export interface IStock {
  id: number;
  thumbnail: string;
  name: string;
  persent: number;
  chartData: number[];
  sortedType: "상승" | "하락" | "거래량";
}
export interface ICoin {
  id: number;
  thumbnail: string;
  name: string;
  persent: number;
  chartData: number[];
}
export interface ITradPost {
  id: number;
  tag: ITag[];
  title: string;
  price: number;
  profile: IProfileInfo;
}
export interface IFluencedTrader {
  id: number;
  status: "구매" | "판매";
  name: string;
  tag: string;
}

/**
 * 피드
 */
export interface ITag {
  id: number;
  name: string;
  type: string;
}
export interface IProfileInfo {
  id: number;
  name: string;
  thumbnail: string;
  tagList: ITag[];
}
export interface IFeed {
  id: number;
  profile: IProfileInfo;
  thumbmail: string;
  tagList: ITag[];
  title: string;
  contents: string;
  status: "판매하기" | "구매하기" | "관심";
  isBookmarked: boolean;
}

/**
 * 피드상세
 */
export interface IEvent {
  id: number;
  thumbnail: string;
  price: number;
  percent: number;
}
export interface IComment {
  id: number;
  thumbnail: string;
  parent: number | null;
  name: string;
  createDate: string;
  content: string;
  isMyComment: boolean;
}
export interface ICommentPost {
  feedId: number;
  userId: number;
  parentId: number | null;
  content: string;
}
export interface IFeedDetail {
  id: number;
  tagList: ITag[];
  title: string;
  createDate: string;
  count: number;
  event: IEvent;
  thumbnail: string;
  content: string;
  commentList: IComment[];
}

/*마켓 */
export interface IMarketEvent extends IEvent {
  eventCode: string;
  changePrice: number;
}
export interface IMarket {
  event: IMarketEvent;
}
