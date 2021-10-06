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
export interface ITraderLetter {
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
export interface IAskingPrice {
  price: number;
  rate: number;
}
export interface IWeeksData {
  date: Date;
  price: number;
}
export interface IOrder {
  bidBalance: number[]; //판매 잔량
  askBalance: number[]; //구매 잔량
  askingPrice: IAskingPrice[]; //호가
  volumePower: number; //체결강도
  fillPrice: number[]; //체결가
  fillRate: number[]; //체결량
  shareVolume: number; //거래량
  tradeVolume: number; //거래금
  weeksHigh: IWeeksData; //52주 최고
  weeksLow: IWeeksData; //52주 최저
}
export interface IEventInformation {
  baseDay: Date; //기준일
  closingPrice: number; //전일종가
  lowestPrice: number; //전일최저가
  highestPrice: number; //전일최고가
  shareVolume: number; //거래량
  dividendRate: number; //배당수익률
  per: number;
  eps: number;
  pbr: number;
  bps: number;
}
export interface IMarket {
  event: IMarketEvent;
  order: IOrder;
  eventInformation: IEventInformation;
  traderOpinion: ITraderLetter[];
  tabState: "chart" | "order";
  orderState: "buy" | "cell";
  sharePrice: number; //현재가
  stock: number; //수량
  price: number; //금액
}

/**
 * 포트폴리오
 */
export interface IPortfolioSummary {
  investmentPrice:number;//투자금
  profitRate:number;//수익률
  profitPrice:number;
}
export interface IPortfolio {
  asset: number; //총 자산
  equity: number; //초기 자본금
  total: IPortfolioSummary; //전체
  stock: IPortfolioSummary; //주식
  coin: IPortfolioSummary; //코인

}
