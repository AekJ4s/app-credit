// image
import thLocale from 'date-fns/locale/th'
import imgDefuault from './img/express/Default.gif'
import imgTakebyHand from './img/express/TakebyHand.gif'
import imgPacking from './img/express/Packing.gif'
import img1 from './img/express/EB630703358TH.jpg'
import img2 from './img/express/TH01025FBAFJ3A.jpg'
import img3 from './img/express/SlipThanadate.jpg'
import TH13075FBAWU9E from './img/express/TH13075FBAWU9E.jpg'
import TH01415FBA6T3B0 from './img/express/TH01415FBA6T3B0.jpg'
import TH04025FB92Z7A1 from './img/express/TH04025FB92Z7A1.jpg'
import TH01205FB8D15D from './img/express/TH01205FB8D15D.jpg'
import TH41085FBBK71A from './img/express/TH41085FBBK71A.jpg'
import TH01315FB9UC5A1 from './img/express/TH01315FB9UC5A1.jpg'
import TH01335FB7K9F from './img/express/TH01335FBB7K9F.jpg'
import slip1 from './img/express/ภูรีตา.jpg'
import TH01185FEVV39B0 from './img/express/TH01185FEVV39B0.jpg'
import TH03065FEW820C0 from './img/express/TH03065FEW820C0.jpg'
import { format } from 'date-fns'
const formattedDate = format(new Date(), 'dd MMMM yyyy', { locale: thLocale })
export const CreditDetail = [
  {
    from: {
      Name: 'Pureeta Homsakmongkol',
      Express: 'รับมือ',
      TrackID: '-',
      ImageExpress: <img src={slip1} width="100" height="50" />,
      Product: 'วอลเปเปอร์ 3D',
      Cost: 100,
      Date: format(new Date(2024, 3, 5), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'ToWyo INtah',
      Express: 'Flash',
      TrackID: 'TH01185FEVV39B0',
      ImageExpress: <img src={TH01185FEVV39B0} width="100" height="50" />,
      Product: 'รองเท้าบาส',
      Cost: 550,
      Date: format(new Date(2024, 3, 2), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Phattarabadee Pun',
      Express: 'Flash',
      TrackID: 'TH03065FEW820C0',
      ImageExpress: <img src={TH03065FEW820C0} width="100" height="50" />,
      Product: 'มูซีค',
      Cost: 250,
      Date: format(new Date(2024, 3, 2), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },

  {
    from: {
      Name: 'Lifeii Chen',
      Express: 'EMS',
      TrackID: 'EB630703358TH',
      ImageExpress: <img src={img1} width="100" height="50" />,
      Product: 'ปลั๊กไฟมือสอง',
      Cost: 400 + 102,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Wanvisa Venita',
      Express: 'Flash',
      TrackID: 'TH01025FBAFJ3A',
      ImageExpress: <img src={img2} width="100" height="50" />,
      Product: 'ปลั๊กไฟมือสอง',
      Cost: 200 + 50,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Thanadate Cheetos',
      Express: 'รับมือ',
      TrackID: '-',
      ImageExpress: <img src={img3} width="100" height="50" />,
      Product: ' โมเดล , ปลั๊กไฟ , ไฟLED',
      Cost: 500,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'ภัควรินทร์ วงศ์บวรโชติ',
      Express: 'รับมือ',
      TrackID: '-',
      ImageExpress: <img src={imgDefuault} width="100" height="50" />,
      Product: 'ปลั๊กไฟมือสอง',
      Cost: 500,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },

  {
    from: {
      Name: 'Folk Folkk',
      Express: 'Flash',
      TrackID: 'TH01315FB9UC5A1',
      ImageExpress: <img src={TH01315FB9UC5A1} width="100" height="50" />,
      Product: 'Ipad Air Case',
      Cost: 85,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Sakda Dussadeethammachote',
      Express: 'Flash',
      TrackID: 'TH01205FB8D15D',
      ImageExpress: <img src={TH01205FB8D15D} width="100" height="50" />,
      Product: 'สายแลนด์ CAT 8',
      Cost: 400 + 102,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Anusara Hmuimart ',
      Express: 'Flash',
      TrackID: 'TH41085FBBK71A',
      ImageExpress: <img src={TH41085FBBK71A} width="100" height="50" />,
      Product: 'ปลั๊กไฟ และ กระเป๋า',
      Cost: 200,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Kantorn Muangmon',
      Express: 'Flash',
      TrackID: 'TH13075FBAWU9E',
      ImageExpress: <img src={TH13075FBAWU9E} width="100" height="50" />,
      Product: 'หัวฝักบัว',
      Cost: 250,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Suwitcha Pleannoi ',
      Express: 'Flash',
      TrackID: 'TH01415FBA6T3B0',
      ImageExpress: <img src={TH01415FBA6T3B0} width="100" height="50" />,
      Product: 'ไวเรสชาร์จ + ไฟแขวน',
      Cost: 300,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Mu Assawamankong',
      Express: 'Flash',
      TrackID: 'TH01315FB9UC5A1',
      ImageExpress: <img src={TH01315FB9UC5A1} width="100" height="50" />,
      Product: 'กระเป๋า IKEA',
      Cost: 100,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Mui Moon',
      Express: 'Flash',
      TrackID: 'TH01315FB9UC5A1',
      ImageExpress: <img src={TH01335FB7K9F} width="100" height="50" />,
      Product: 'กระเป๋า UNDER',
      Cost: 100,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
  {
    from: {
      Name: 'Tharapon Watana-akkara',
      Express: 'รับมือ',
      TrackID: '-',
      ImageExpress: <img src={imgDefuault} width="100" height="50" />,
      Product: 'รองเท้าKEEN , ฟุตซอล',
      Cost: 1200,
      Date: format(new Date(2024, 3, 1), 'dd / MMMM / yyyy', {
        locale: thLocale,
      }),
    },
  },
]
