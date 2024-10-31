import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  hy: {
    translation: {
      "specialOffers": "Հատուկ առաջարկներ",
      "forHome": "Տան համար",
      "forBusiness": "Բիզնեսի համար",
      "aboutUs": "Մեր մասին",
      "pay": "Վճարել",
      "help": "Օգնություն",
      "joinNow": "Միացի՛ր Հիմա",


      "JoinAnnualAllIn": "Միացի՛ր All in տարեկան III-ին ♡ 4950 դրամով՝ 9900-ի փոխարեն",
      "WelcomeToOvio": "Բարի գալուստ OVIO",
      "FeelTheGame": "Զգա՛ խաղը, փոխի՛ր իրականությունը",
      "JoinNow": "Միացիր հիմա",


      "WhyOvio": "Ինչու՞ OVIO",
      "Reliable": "Հուսալի է",
      "Stable": "Կայուն է",
      "Trustworthy": "Վստահելի է",
      "Innovative": "Նորարար է",
      "Flexible": "Ճկուն է",
      "Feature1": "Երեք միջազգային կապուղիներ դեպի Ռուսաստան և Եվրոպա",
      "Feature2": "Համացանցի դիվերսիֆիկացված միջազգային ռեսուրսներ",
      "Feature3": "Տասնյակ հազարավոր բաժանորդներ ՀՀ 19 քաղաքներում",
      "Feature4": "Արդի տեխնոլոգիական լուծումներ և ծառայություններ",
      "Feature5": "Ծառայությունների ընտրության լայն հնարավորություն",

      "comforteTitle": "Մեզ հետ հարմար է",
      "comforteHome": "Տան համար",
      "comfortePhoneService": "Հեռախոսային սպասարկում",
      "comforteBusiness": "Ձեզ հաջողակ բիզնեսի համար",
      "comforteHomeText": "OVIO-ն իր բարձրորակ ծառայություններով առաջարկում է լավագույն լուծումը Ձեր տան ինտերնետի, հեռախոսակապի և հեռուստատեսության համար:",
      "comfortePhoneText": "Զանգահարի՛ր 060 46 00 00 և կատարի՛ր",
      "comforteBusinessText": "Ձեզ հաջողակ բիզնեսի համար",

      "arajarknerTitle": "Հատուկ առաջարկներ",
      "arajarknerText1Slide1": "4950 ֏՝ 3 ամիս 50% զեղչված գնով",
      "arajarknerText2Slide1": "Միացի՛ր All in տարեկան III փաթեթին 4950 ֏՝ 3 ամիս 50% զեղչված գնով",
      "arajarknerText1Slide2": "Վերածի՛ր հին և թույլ համակարգիչը, պլանշետը կամ սմարթֆոնը սուպեր արագ սարքի մեկ քլիքով",
      "arajarknerText2Slide2": "GFN.AM ամպային խաղային ծառայության Premium բաժանորդագրություն",
      "arajarknerText1Slide3": "OVIO-ն և Վեգան ներկայացնում են",
      "arajarknerText2Slide3": "Կատարի՛ր գնումներ ՄԵԾԱԾԱԽ գներով Վեգայից` դառնալով OVIO-ի բաժանորդ",
      "arajarknerText1Slide4": "Շաբաթ-կիրակին OVIO-ի հետ",
      "arajarknerText2Slide4": "weekend-ը նոր արագություններով",


      'title1': "Տվյալների կենտրոն",
      'title2': "Տեսահսկում բիզնեսի համար",
      'description1': "Ձեր տվյալները՝ Հայաստանի հզորագույն և խոշորագույն Տվյալների մշակման կենտրոնում",
      'description2': "Ապահովե՛ք անվտանգություն և պահե՛ք Ձեր բիզնեսը հսկողության տակ",
      'buttonText': "Իմացիր ավելին",


      'sectionsTitle': "Կայքի բաժինները",
      'serviceMapTitle': "Սպասարկման քարտեզ",
      'qualityControlTitle': "Որակի վերահսկում",
      'purposePlaceholder': "Գրել նպատակը",
      'namePlaceholder': "Ձեր անունը",
      'emailPlaceholder': "Ձեր էլ․ փոստի հասցեն",
      'phonePlaceholder': "Հեռ․ 091XXXXXX",
      'messagePlaceholder': "Ձեր հաղորդագրությունը",
      'submitButtonText': "Ուղարկել",
      'websiteSections': [
        "Տան համար",
        "Հատուկ առաջարկներ",
        "All in փաթեթներ",
        "Ինտերնետ",
        "Հեռախոսակապ",
        "Հեռախոսային սպասարկում",
        "Գրասենյակներ և ծածկույթ",
        "Բիզնեսի համար",
        "Օպերատորներ",
        "Օգնություն",
        "Պայմաններ",
        "Արխիվ",
        "Աշխատատեղեր",
        "Այլ աշխատանքներ",
        "Այլ",
      ],
      
      "joinNowAfter":'Գրանցում',
      'nameOfJoin':"Անուն",
      "postOfJoin":"Էլ․ հասցե",
      "passwordOfJoin":"Գաղտնաբառ",


      places: {
        "OVIO Head Office": "OVIO գլխավոր գրասենյակ",
        "Khaghaghuyan 1, city Abovyan": "Խաղաղության 1, Աբովյան քաղաք",
        "OVIO Data Center": "OVIO տվյալների կենտրոն",
        "city Abovyan, str. Red Army 7": "Աբովյան քաղաք, Ռազմական 7",
        "Arabkir Corporate Department": "Արաբկիրի կորպորատիվ բաժին",
        "24/15 Azatutyan, BPlaza": "24/15 Ազատության, BPlaza",
        "Ajapnyak": "Աջափնյակ",
        "14/8 Margaryan str.": "14/8 Մարգարյան",
        "Avan": "Ավան",
        "220/10 Khudyakov str.": "220/10 Խուդյակով",
        "Arabkir": "Արաբկիր",
        "Davtashen": "Դավթաշեն",
        "13/1 Tigran Petrosyan str.": "13/1 Տիգրան Պետրոսյան",
        "Erebuni": "Երևան",
        "20 Erebuni str.": "20 Երևան",
        "Kentron": "Կենտրոն",
        "28 Nalbandyan str. (Republic Square)": "28 Նալբանդյան, (Հանրապետության հրապարակ)",
        "Malatia-Sebastia": "Մալաթիա-Սեբաստիա",
        "86/1 Malatia str.": "86/1 Մալաթիա",
        "Nor-Nork": "Նոր-Նորք",
        "19/79 Gayi str.": "19/79 Գայի",
        "Shengavit": "Շենգավիտ",
        "6 Garegin Nzhdeh str.": "6 Գարեգին Նժդեհ",
        "Abovyan": "Աբովյան",
        "4/4 Hatis str.": "4/4 Հատիս",
        "Ashtarak": "Աշտարակ",
        "9 Proshyan str.": "9 Պռոշյան",
        "Ararat": "Արարատ",
        "57/1-1 Shahumyan str.": "57/1-1 Շահումյան",
        "Armavir": "Արմավիր",
        "7 Hanrapetutyan str.": "7 Հանրափետության",
        "Artashat": "Արտաշատ",
        "August 23 str., b. 58": "Օգոստոսի 23, b. 58",
        "Gyumri": "Գյումրի",
        "8, Bagratunyats sq.": "8, Բագրատունյաց ք.",
        "Masis": "Մասիս",
        "5/1 Hanrapetutyan str..": "5/1 Հանրափետության",
        "Hrazdan": "Հրազդան",
        "62/7 August 23 str.": "62/7 Օգոստոսի 23",
        "Kapan": "Կապան",
        "3 Shahumyan str.": "3 Շահումյան",
        "Ijevan": "Իջևան",
        "5/5 A. Meliqbekyan str.": "5/5 Ա. Մելիքբեկյան",
        "Dilijan": "Դիլիջան",
        "80 Myasnikyan str.": "80 Մյասնիկյան",
    },

    }
  },
  en: {
    translation: {
      "specialOffers": "Special Offers",
      "forHome": "For Home",
      "forBusiness": "For Business",
      "aboutUs": "About Us",
      "pay": "Pay",
      "help": "Help",
      "joinNow": "Join Now",


      "JoinAnnualAllIn": "Join the All-in Annual III ♡ for 4950 AMD instead of 9900",
      "WelcomeToOvio": "Welcome to OVIO",
      "FeelTheGame": "Feel the game, change the reality",
      "JoinNow": "Join now",

      "WhyOvio": "Why OVIO ??",
      "Reliable": "Reliable",
      "Stable": "Stable",
      "Trustworthy": "Trustworthy",
      "Innovative": "Innovative",
      "Flexible": "Flexible",
      "Feature1": "Three international connections to Russia and Europe",
      "Feature2": "Diversified international internet resources",
      "Feature3": "Tens of thousands of subscribers in 19 cities in Armenia",
      "Feature4": "Modern technological solutions and services",
      "Feature5": "A wide range of service options",

      "comforteTitle": "It’s comfortable with us",
      "comforteHome": "For Home",
      "comfortePhoneService": "Telephone Service",
      "comforteBusiness": "For Your Successful Business",
      "comforteHomeText": "OVIO provides the best solution for your home internet, telephone, and television with its high-quality services.",
      "comfortePhoneText": "Call 060 46 00 00 and make it happen",
      "comforteBusinessText": "For your successful business",


      "arajarknerTitle": "Special Offers",
      "arajarknerText1Slide1": "4950 ֏ for 3 months at a 50% discounted price",
      "arajarknerText2Slide1": "Join the All in annual III package for 4950 ֏ for 3 months at a 50% discounted price",
      "arajarknerText1Slide2": "Transform your old and weak computer, tablet, or smartphone into a super-fast device with one click",
      "arajarknerText2Slide2": "Premium subscription for the GFN.AM cloud gaming service",
      "arajarknerText1Slide3": "OVIO and Vegan present",
      "arajarknerText2Slide3": "Shop at HUGE discounts from Vega by becoming an OVIO subscriber",
      "arajarknerText1Slide4": "Weekend with OVIO",
      "arajarknerText2Slide4": "New speeds for the weekend",


      'title1': "Data Center",
      'title2': "Surveillance for Business",
      'description1': "Your data at Armenia's most powerful and largest Data Processing Center.",
      'description2': "Ensure security and keep your business under control.",
      'buttonText': "Learn More",


      'sectionsTitle': "Website Sections",
      'serviceMapTitle': "Service Map",
      'qualityControlTitle': "Quality Control",
      'purposePlaceholder': "Enter Purpose",
      'namePlaceholder': "Your Name",
      'emailPlaceholder': "Your Email Address",
      'phonePlaceholder': "Phone: 091XXXXXX",
      'messagePlaceholder': "Your Message",
      'submitButtonText': "Send",
      'websiteSections': [
        "For Home",
        "Special Offers",
        "All-In Packages",
        "Internet",
        "Telephony",
        "Phone Service",
        "Offices and Coverage",
        "For Business",
        "Operators",
        "Help",
        "Terms",
        "Archive",
        "Job Vacancies",
        "Other Works",
        "Other",
      ],


      "joinNowAfter":'Registrate',
      'nameOfJoin':"Name",
      "postOfJoin":"El. post",
      "passwordOfJoin":"Password",

      
      places: {
        "OVIO Head Office": "OVIO Head Office",
        "Khaghaghuyan 1, city Abovyan": "Khaghaghuyan 1, city Abovyan",
        "OVIO Data Center": "OVIO Data Center",
        "city Abovyan, str. Red Army 7": "city Abovyan, str. Red Army 7",
        "Arabkir Corporate Department": "Arabkir Corporate Department",
        "24/15 Azatutyan, BPlaza": "24/15 Azatutyan, BPlaza",
        "Ajapnyak": "Ajapnyak",
        "14/8 Margaryan str.": "14/8 Margaryan str.",
        "Avan": "Avan",
        "220/10 Khudyakov str.": "220/10 Khudyakov str.",
        "Arabkir": "Arabkir",
        "Davtashen": "Davtashen",
        "13/1 Tigran Petrosyan str.": "13/1 Tigran Petrosyan str.",
        "Erebuni": "Erebuni",
        "20 Erebuni str.": "20 Erebuni str.",
        "Kentron": "Kentron",
        "28 Nalbandyan str. (Republic Square)": "28 Nalbandyan str. (Republic Square)",
        "Malatia-Sebastia": "Malatia-Sebastia",
        "86/1 Malatia str.": "86/1 Malatia str.",
        "Nor-Nork": "Nor-Nork",
        "19/79 Gayi str.": "19/79 Gayi str.",
        "Shengavit": "Shengavit",
        "6 Garegin Nzhdeh str.": "6 Garegin Nzhdeh str.",
        "Abovyan": "Abovyan",
        "4/4 Hatis str.": "4/4 Hatis str.",
        "Ashtarak": "Ashtarak",
        "9 Proshyan str.": "9 Proshyan str.",
        "Ararat": "Ararat",
        "57/1-1 Shahumyan str.": "57/1-1 Shahumyan str.",
        "Armavir": "Armavir",
        "7 Hanrapetutyan str.": "7 Hanrapetutyan str.",
        "Artashat": "Artashat",
        "August 23 str., b. 58": "August 23 str., b. 58",
        "Gyumri": "Gyumri",
        "8, Bagratunyats sq.": "8, Bagratunyats sq.",
        "Masis": "Masis",
        "5/1 Hanrapetutyan str..": "5/1 Hanrapetutyan str.",
        "Hrazdan": "Hrazdan",
        "62/7 August 23 str.": "62/7 August 23 str.",
        "Kapan": "Kapan",
        "3 Shahumyan str.": "3 Shahumyan str.",
        "Ijevan": "Ijevan",
        "5/5 A. Meliqbekyan str.": "5/5 A. Meliqbekyan str.",
        "Dilijan": "Dilijan",
        "80 Myasnikyan str.": "80 Myasnikyan str.",
    },



    }
  }
};


const defaultLanguage = localStorage.getItem('language') || 'hy';


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'hy',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;