import * as React from 'react';
import { Link } from 'react-router-dom';
import { IFollower } from '../../shared/follower';
const css = require('./follower-list.css');

interface IFollowerListProps {
  followers: IFollower[];
  userName: string;
}

// const mockedFollowersResponse = {
{/*followers: [*/}
//     {
//       name: 'Ronen Amiel',
//       description: 'Creating tools for developers @WixEng',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1125692023770578945/XCMVbBOK_normal.png',
//       url: 'https://twitter.com/ronenamiel'
//     },
//     {
//       name: 'Vlada Leykin',
//       description: '',
//       imageSrc: 'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
//       url: 'https://twitter.com/VladaLeykin'
{/*},*/}
{/*{*/}
{/*name: 'Boring Coder',*/}
//       description: 'Django, React, JS. That\'s all folks!',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1133165385660813312/t41S8dwB_normal.jpg',
//       url: 'https://twitter.com/CoderBoring'
{/*},*/}
{/*{*/}
//       name: '::cmd /',
//       description: 'I\'m a song writer, programmer, and a rapper. +2347069605705',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1102357471635607552/TDPNH4Oq_normal.jpg',
//       url: 'https://twitter.com/ayodele2242'
//     },
//     {
//       name: 'Daniel Coldham',
//       description: 'I write Scala for @wix. Born in England, grew up in Israel, educated in the USA. Married to the amazing @tovahreva. Rock Chalk Jayhawk Go KU!',
//       imageSrc: 'http://pbs.twimg.com/profile_images/2722281203/7d1d6227f572726350f5516bee382631_normal.jpeg',
//       url: 'https://twitter.com/BritishDan'
//     },
//     {
//       name: 'reyu',
//       description: '',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1117323193407037440/Mad_U5R7_normal.jpg',
//       url: 'https://twitter.com/yuriyaqq'
//     },
//     {
{/*name: 'Telmen',*/}
{/*description: 'mobile/web developer',*/}
//       imageSrc: 'http://pbs.twimg.com/profile_images/986263569099452417/sr5BNnSv_normal.jpg',
//       url: 'https://twitter.com/telmen_m'
//     },
//     {
//       name: 'Noveletto',
//       description: 'אני ברזילאי שנמצא כאן כדי ללמוד מה פירושו של יהודי, כי אני רוצה ללמוד בישראל בשנה הבאה ...',
{/*imageSrc: 'http://pbs.twimg.com/profile_images/1140567056821235712/6X1kNpPd_normal.jpg',*/}
//       url: 'https://twitter.com/NovelettoR'
//     },
{/*{*/}
{/*name: 'ScalaUA Conference',*/}
{/*description: '',*/}
{/*imageSrc: 'http://pbs.twimg.com/profile_images/925046709817958400/d3-J4G2x_normal.jpg',*/}
{/*url: 'https://twitter.com/ScalaUA_Conf'*/}
{/*},*/}
//     {
//       name: 'Wix.com',
//       description: 'Connect with web professionals who are proudly creating Wix websites for clients. Be the first to hear about Wix\'s company & product updates. Support: @WixHelp',
{/*imageSrc: 'http://pbs.twimg.com/profile_images/1094944787143249921/yMR6fwak_normal.jpg',*/}
//       url: 'https://twitter.com/WixCommunity'
//     },
//     {
//       name: 'oded soffrin',
//       description: '',
//       imageSrc: 'http://pbs.twimg.com/profile_images/513971306547527680/QrzwgL4o_normal.jpeg',
{/*url: 'https://twitter.com/odedsoffrin'*/}
//     },
//     {
//       name: 'YGLF Lithuania',
{/*description: 'Frontend Conference by developers for developers. Schedule: https://t.co/WhDq46h72h',*/}
{/*imageSrc: 'http://pbs.twimg.com/profile_images/1074932793879224320/H_818cKX_normal.jpg',*/}
{/*url: 'https://twitter.com/yglf_lt'*/}
//     },
//     {
//       name: 'Tal Bebchuk',
//       description: 'Software developer @Wix',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1088356588619005957/R94Qjm2E_normal.jpg',
//       url: 'https://twitter.com/BebchukTal'
//     },
//     {
//       name: 'Felix Mosheev',
{/*description: '',*/}
{/*imageSrc: 'http://pbs.twimg.com/profile_images/844552928136441857/SIv6JLtt_normal.jpg',*/}
{/*url: 'https://twitter.com/felix_mosheev'*/}
//     },
//     {
//       name: 'Zombie Girl',
//       description: '',
//       imageSrc: 'http://pbs.twimg.com/profile_images/993881009404895233/QRmfvzGO_normal.jpg',
//       url: 'https://twitter.com/ZOMBIExGIRLx115'
//     },
//     {
//       name: 'Wix Webmaster',
//       description: 'https://t.co/KgtgDTWvVW is a Certified Wix Webmaster & Trainer. A highly experienced Wix Expert, based in Greater London. Get in touch!',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1027121845378662401/gD89WpiM_normal.jpg',
//       url: 'https://twitter.com/WixWebmaster'
//     },
//     {
{/*name: '𝙉𝙞𝙘𝙠 𝙍𝙞𝙗𝙖𝙡 @ 🇪🇸',*/}
{/*description: 'OSS, Linux, Web, front-end is what I ❤️ and do for a living as consultant & developer. Me and my family are digital nomads traveling the world! 👨\u200d👩\u200d👧\u200d👦🛫🌏',*/}
//       imageSrc: 'http://pbs.twimg.com/profile_images/526649198981042176/MqiApxMW_normal.jpeg',
//       url: 'https://twitter.com/elektronik2k5'
//     },
//     {
//       name: 'Relocation Work',
//       description: 'Follow us to get notified on the latest local and international jobs providing Relocation assistance (including visa sponsorship). #relocate #jobs #relocation',
//       imageSrc: 'http://pbs.twimg.com/profile_images/983035276422459392/3eUxHXJN_normal.jpg',
//       url: 'https://twitter.com/RelocationWork'
//     },
//     {
//       name: 'WixPark',
//       description: '',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1125494561290190848/5hXzqxNg_normal.png',
//       url: 'https://twitter.com/WixPark'
//     },
//     {
//       name: 'Eddie Erlich',
//       description: '',
//       imageSrc: 'http://pbs.twimg.com/profile_images/966760270218579968/_RQbRkGT_normal.jpg',
//       url: 'https://twitter.com/eddielius'
//     },
//     {
//       name: 'Soluto Engineering',
//       description: 'Empowering millions of people to get the most out of their technology.',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1005702530947604480/bvgscS6-_normal.jpg',
//       url: 'https://twitter.com/SolutoEng'
//     },
//     {
//       name: 'fainarus',
//       description: '',
//       imageSrc: 'http://pbs.twimg.com/profile_images/772826975425683456/-_NiTCjS_normal.jpg',
//       url: 'https://twitter.com/fainarus'
//     },
//     {
//       name: 'Andreas Kviby',
//       description: 'Tech and creative conceptualizer and father of many wonderful kids',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1083332537668251648/O2vDd8eh_normal.jpg',
//       url: 'https://twitter.com/wixshowcom'
//     },
//     {
//       name: 'Roi Bueno',
//       description: '',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1003506485022904320/iOTYkiPQ_normal.jpg',
//       url: 'https://twitter.com/RoiBueno'
//     },
//     {
//       name: 'Dmitry Karlinsky',
//       description: 'Scala developer at https://t.co/Pr4d4XGM1g (@WixEng) https://t.co/kE153zoPJc',
//       imageSrc: 'http://pbs.twimg.com/profile_images/3383645337/7752f33db2bf79c7e42ff1b87914ce28_normal.jpeg',
//       url: 'https://twitter.com/dkarlinsky'
//     },
//     {
//       name: 'Moran Weber',
//       description: 'Senior Developer at Wix | Social Psychologist | Speaker and a Writer',
//       imageSrc: 'http://pbs.twimg.com/profile_images/973858416702697473/TdVHwdbL_normal.jpg',
//       url: 'https://twitter.com/moranWeber'
//     },
//     {
//       name: 'ℜ𝔬𝔫𝔶 ℜ',
//       description: '--Full-Stack Developer-- runner and assumed nerd (runnerd?)-- movie, comics and classical music enthusiast.',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1142786093240205312/IwywYFMq_normal.jpg',
//       url: 'https://twitter.com/rrosen84'
//     },
//     {
//       name: 'Kevin Rood',
//       description: 'Freelance software developer (Rails, JS, React, C#). Available for hire. This account is used solely for business purposes.',
//       imageSrc: 'http://pbs.twimg.com/profile_images/378800000462619769/625d236b7056b931a72a7124de83b70c_normal.png',
//       url: 'https://twitter.com/kevin_rood'
//     },
//     {
//       name: 'BLOWIN NAWAF',
//       description: 'Technology',
//       imageSrc: 'http://pbs.twimg.com/profile_images/974203697847730176/m0w3Erx9_normal.jpg',
//       url: 'https://twitter.com/blowinnawaf'
//     },
//     {
//       name: 'Yuval Kesten',
//       description: 'Engineering Manager @FacebookTLV',
//       imageSrc: 'http://pbs.twimg.com/profile_images/1003332398837313536/W5MWAzRE_normal.jpg',
//       url: 'https://twitter.com/yuvalkesten'
//     }
//   ],
//   nextCursor: '1594803021483005124'
// };

export class FollowerList extends React.Component<IFollowerListProps> {

  public render() {
    const { userName, followers } = this.props;
    // const { followers } = mockedFollowersResponse;

    const renderFollower = (user, index) => (
      <div key={index} className={css.followerContainer}>
        <div className={css.imageContainer}>
          <img className={css.followerImage} src={user.imageSrc} />
        </div>
        <div className={css.detailsContainer}>
          <a className={css.followerName} href={user.url} target='_blank'>{user.name}</a>
          <p className={css.followerDescription}>{user.description}</p>
        </div>
      </div>
    );

    const renderFollowers = users => {
      return users.map((user, index) => renderFollower(user, index));
    };

    return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        { userName ? <h3>{`Here are the followers of ${userName}`}</h3> : null}
        { followers ? renderFollowers(followers) : null }
      </div>
    );
  }
}
