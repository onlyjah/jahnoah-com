export const topicNames=['yoga','art','tech'] as const;
export type Topic=typeof topicNames[number];
type Feature={label:string;headline:string;consultation:string;bookingUrl?:string;paymentUrl?:string;banner?:{src:string;alt:string;credit:string;creditUrl:string};video?:{id:string;title:string}};
export const topicFeatures:Record<Topic,Feature>={
  yoga:{label:'Yoga',headline:'Certified Yoga Instructor - SmaiTawi, Sema Institute, Dec 2023',consultation:'Yoga',video:{id:'BWpE8tcZOT4',title:'Love More and the Rest Will Come'}},
  art:{label:'Art',headline:'Art is the remedy',consultation:'Art'},
  tech:{label:'Tech',headline:'Systems Solutions',consultation:'Technology'},
};
