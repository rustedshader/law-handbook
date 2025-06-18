import { BookOpen, Gavel, Scale, Users } from "lucide-react";

export const typeColors = {
  en: {
    Foundation: "bg-green-100 text-green-800 border-green-300",
    Implementation: "bg-blue-100 text-blue-800 border-blue-300",
    Amendment: "bg-orange-100 text-orange-800 border-orange-300",
    Judicial: "bg-purple-100 text-purple-800 border-purple-300",
  },
  hi: {
    आधार: "bg-green-100 text-green-800 border-green-300",
    कार्यान्वयन: "bg-blue-100 text-blue-800 border-blue-300",
    संशोधन: "bg-orange-100 text-orange-800 border-orange-300",
    न्यायिक: "bg-purple-100 text-purple-800 border-purple-300",
  },
} as const;

export type Lang = keyof typeof typeColors;
export type EnType = keyof (typeof typeColors)["en"];
export type HiType = keyof (typeof typeColors)["hi"];

export type TimelineEventEn = {
  year: string;
  date: string;
  title: string;
  description: string;
  type: EnType;
  icon: typeof BookOpen;
  importance: string;
};

export type TimelineEventHi = {
  year: string;
  date: string;
  title: string;
  description: string;
  type: HiType;
  icon: typeof BookOpen;
  importance: string;
};

export const timelineEvents: {
  en: TimelineEventEn[];
  hi: TimelineEventHi[];
} = {
  en: [
    {
      year: "1949",
      date: "November 26, 1949",
      title: "Constitution Adopted",
      description:
        "The Constituent Assembly of India adopted the Constitution of India.",
      type: "Foundation",
      icon: BookOpen,
      importance: "Historic Milestone",
    },
    {
      year: "1950",
      date: "January 26, 1950",
      title: "Constitution Comes into Effect",
      description:
        "The Constitution of India came into force, making India a sovereign, democratic republic.",
      type: "Implementation",
      icon: Scale,
      importance: "Republic Day",
    },
    {
      year: "1951",
      date: "June 18, 1951",
      title: "First Amendment Act, 1951",
      description:
        "Introduced reasonable restrictions on the freedom of speech and expression, and added the Ninth Schedule to protect land reform laws from judicial review.",
      type: "Amendment",
      icon: Gavel,
      importance: "Freedom of Speech & Land Reforms",
    },
    {
      year: "1951",
      date: "October 5, 1951",
      title: "Shankari Prasad v. Union of India",
      description:
        "The Supreme Court upheld the validity of the First Amendment and ruled that Parliament has the power to amend Fundamental Rights.",
      type: "Judicial",
      icon: Scale,
      importance: "Parliament's Amending Power",
    },
    {
      year: "1955",
      date: "April 27, 1955",
      title: "Fourth Amendment Act, 1955",
      description:
        "Modified Article 31 and 31A to empower the state to acquire private property for public purposes and placed certain laws in the Ninth Schedule.",
      type: "Amendment",
      icon: Gavel,
      importance: "Property Rights",
    },
    {
      year: "1967",
      date: "February 27, 1967",
      title: "I.C. Golaknath v. State of Punjab",
      description:
        "The Supreme Court held that Fundamental Rights are 'transcendental and immutable' and that Parliament has no power to amend them.",
      type: "Judicial",
      icon: Scale,
      importance: "Supremacy of Fundamental Rights",
    },
    {
      year: "1971",
      date: "November 5, 1971",
      title: "24th Amendment Act, 1971",
      description:
        "Restored the power of Parliament to amend any part of the Constitution, including Fundamental Rights, effectively overturning the Golaknath case ruling.",
      type: "Amendment",
      icon: Gavel,
      importance: "Restoration of Parliamentary Power",
    },
    {
      year: "1973",
      date: "April 24, 1973",
      title: "Kesavananda Bharati v. State of Kerala",
      description:
        "The Supreme Court established the 'Basic Structure' doctrine, holding that Parliament can amend the Constitution but cannot alter its basic features.",
      type: "Judicial",
      icon: Scale,
      importance: "Basic Structure Doctrine",
    },
    {
      year: "1975",
      date: "August 10, 1975",
      title: "39th Amendment Act, 1975",
      description:
        "Placed the election of the President, Vice President, Prime Minister, and Speaker of the Lok Sabha beyond the scrutiny of the courts.",
      type: "Amendment",
      icon: Gavel,
      importance: "Emergency Period Legislation",
    },
    {
      year: "1976",
      date: "December 18, 1976",
      title: "42nd Amendment Act, 1976",
      description:
        "Known as the 'Mini-Constitution,' it made wide-ranging changes, including adding 'Socialist,' 'Secular,' and 'Integrity' to the Preamble and introducing Fundamental Duties.",
      type: "Amendment",
      icon: BookOpen,
      importance: "Major Overhaul",
    },
    {
      year: "1978",
      date: "April 30, 1979",
      title: "44th Amendment Act, 1978",
      description:
        "Reversed many of the changes made by the 42nd Amendment and removed the Right to Property from the list of Fundamental Rights.",
      type: "Amendment",
      icon: Gavel,
      importance: "Post-Emergency Restoration",
    },
    {
      year: "1980",
      date: "July 31, 1980",
      title: "Minerva Mills v. Union of India",
      description:
        "The Supreme Court invalidated parts of the 42nd Amendment and reiterated the 'Basic Structure' doctrine, emphasizing judicial review as a basic feature.",
      type: "Judicial",
      icon: Scale,
      importance: "Supremacy of the Constitution",
    },
    {
      year: "1985",
      date: "February 15, 1985",
      title: "52nd Amendment Act, 1985",
      description:
        "Introduced the Tenth Schedule, laying down the process for disqualifying legislators for defection.",
      type: "Amendment",
      icon: Users,
      importance: "Anti-Defection Law",
    },
    {
      year: "1989",
      date: "March 28, 1989",
      title: "61st Amendment Act, 1988",
      description:
        "Lowered the voting age for elections to the Lok Sabha and state legislative assemblies from 21 to 18 years.",
      type: "Amendment",
      icon: Users,
      importance: "Youth Suffrage",
    },
    {
      year: "1992",
      date: "November 16, 1992",
      title: "Indra Sawhney & Others v. Union of India",
      description:
        "Upheld reservations for Other Backward Classes (OBCs) and set a 50% cap on total reservations.",
      type: "Judicial",
      icon: Scale,
      importance: "Mandal Commission & Reservation Policy",
    },
    {
      year: "1993",
      date: "April 24, 1993",
      title: "73rd Amendment Act, 1992",
      description:
        "Granted constitutional status to Panchayati Raj institutions, ensuring a three-tier structure of local self-government in rural areas.",
      type: "Amendment",
      icon: Users,
      importance: "Rural Local Governance",
    },
    {
      year: "1993",
      date: "June 1, 1993",
      title: "74th Amendment Act, 1992",
      description:
        "Granted constitutional status to urban local bodies (Municipalities), aimed at strengthening urban self-governance.",
      type: "Amendment",
      icon: Users,
      importance: "Urban Local Governance",
    },
    {
      year: "1994",
      date: "March 11, 1994",
      title: "S. R. Bommai v. Union of India",
      description:
        "The Supreme Court laid down guidelines to prevent the misuse of Article 356 (President's Rule) in states.",
      type: "Judicial",
      icon: Scale,
      importance: "Federalism & State Autonomy",
    },
    {
      year: "2002",
      date: "December 12, 2002",
      title: "86th Amendment Act, 2002",
      description:
        "Made elementary education a fundamental right for children between the ages of 6 and 14.",
      type: "Amendment",
      icon: BookOpen,
      importance: "Right to Education",
    },
    {
      year: "2004",
      date: "February 19, 2004",
      title: "89th Amendment Act, 2003",
      description:
        "Bifurcated the National Commission for Scheduled Castes and Scheduled Tribes into two separate bodies.",
      type: "Amendment",
      icon: Users,
      importance: "Social Justice",
    },
    {
      year: "2015",
      date: "May 28, 2015",
      title: "100th Amendment Act, 2015",
      description:
        "Ratified the land boundary agreement between India and Bangladesh.",
      type: "Amendment",
      icon: Gavel,
      importance: "International Agreement",
    },
    {
      year: "2016",
      date: "September 8, 2016",
      title: "101st Amendment Act, 2016",
      description:
        "Introduced the Goods and Services Tax (GST), a comprehensive indirect tax, to create a single national market.",
      type: "Amendment",
      icon: Scale,
      importance: "Tax Reform",
    },
    {
      year: "2017",
      date: "August 24, 2017",
      title: "K.S. Puttaswamy v. Union of India",
      description:
        "The Supreme Court declared the Right to Privacy as a fundamental right protected under the Constitution.",
      type: "Judicial",
      icon: Scale,
      importance: "Right to Privacy",
    },
    {
      year: "2018",
      date: "August 11, 2018",
      title: "102nd Amendment Act, 2018",
      description:
        "Granted constitutional status to the National Commission for Backward Classes (NCBC).",
      type: "Amendment",
      icon: Users,
      importance: "Empowerment of Backward Classes",
    },
    {
      year: "2018",
      date: "September 6, 2018",
      title: "Navtej Singh Johar v. Union of India",
      description:
        "The Supreme Court decriminalized consensual homosexual acts between adults by reading down Section 377 of the Indian Penal Code.",
      type: "Judicial",
      icon: Scale,
      importance: "LGBTQ+ Rights",
    },
    {
      year: "2019",
      date: "January 14, 2019",
      title: "103rd Amendment Act, 2019",
      description:
        "Introduced a 10% reservation for Economically Weaker Sections (EWS) in educational institutions and public employment.",
      type: "Amendment",
      icon: Users,
      importance: "Economic Reservation",
    },
    {
      year: "2020",
      date: "January 25, 2020",
      title: "104th Amendment Act, 2019",
      description:
        "Extended the reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha and State Assemblies and removed the reserved seats for the Anglo-Indian community.",
      type: "Amendment",
      icon: Users,
      importance: "Extension of Reservations",
    },
    {
      year: "2021",
      date: "August 18, 2021",
      title: "105th Amendment Act, 2021",
      description:
        "Restored the power of state governments to identify and specify Socially and Educationally Backward Classes (SEBCs).",
      type: "Amendment",
      icon: Users,
      importance: "State Autonomy in Reservation",
    },
    {
      year: "2022",
      date: "November 7, 2022",
      title: "Janhit Abhiyan v. Union of India",
      description:
        "The Supreme Court, by a 3-2 majority, upheld the validity of the 103rd Constitutional Amendment, which introduced 10% reservation for Economically Weaker Sections (EWS) in education and government jobs.",
      type: "Judicial",
      icon: Scale,
      importance: "EWS Reservation Upheld",
    },
    {
      year: "2023",
      date: "September 28, 2023",
      title: "106th Amendment Act, 2023",
      description:
        "Known as the Nari Shakti Vandan Adhiniyam, this act reserves one-third of all seats for women in the Lok Sabha, State Legislative Assemblies, and the Delhi Legislative Assembly. The implementation is contingent on a future census and delimitation exercise.",
      type: "Amendment",
      icon: Users,
      importance: "Women's Reservation Act",
    },
    {
      year: "2024",
      date: "February 15, 2024",
      title: "Association for Democratic Reforms v. Union of India",
      description:
        "The Supreme Court struck down the anonymous Electoral Bonds scheme as unconstitutional, stating it violated the voters' right to information.",
      type: "Judicial",
      icon: Scale,
      importance: "Electoral Transparency",
    },
  ],
  hi: [
    {
      year: "1949",
      date: "26 नवंबर, 1949",
      title: "संविधान अपनाया गया",
      description: "भारत की संविधान सभा ने भारत के संविधान को अपनाया।",
      type: "आधार",
      icon: BookOpen,
      importance: "ऐतिहासिक मील का पत्थर",
    },
    {
      year: "1950",
      date: "26 जनवरी, 1950",
      title: "संविधान लागू हुआ",
      description:
        "भारत का संविधान लागू हुआ, जिससे भारत एक संप्रभु, लोकतांत्रिक गणराज्य बन गया।",
      type: "कार्यान्वयन",
      icon: Scale,
      importance: "गणतंत्र दिवस",
    },
    {
      year: "1951",
      date: "18 जून, 1951",
      title: "पहला संशोधन अधिनियम, 1951",
      description:
        "भाषण और अभिव्यक्ति की स्वतंत्रता पर उचित प्रतिबंध लगाए गए, और भूमि सुधार कानूनों को न्यायिक समीक्षा से बचाने के लिए नौवीं अनुसूची जोड़ी गई।",
      type: "संशोधन",
      icon: Gavel,
      importance: "भाषण की स्वतंत्रता और भूमि सुधार",
    },
    {
      year: "1951",
      date: "5 अक्टूबर, 1951",
      title: "शंकर प्रसाद बनाम भारत संघ",
      description:
        "सर्वोच्च न्यायालय ने पहले संशोधन की वैधता को बरकरार रखा और फैसला सुनाया कि संसद को मौलिक अधिकारों में संशोधन करने की शक्ति है।",
      type: "न्यायिक",
      icon: Scale,
      importance: "संसद की संशोधन शक्ति",
    },
    {
      year: "1955",
      date: "27 अप्रैल, 1955",
      title: "चौथा संशोधन अधिनियम, 1955",
      description:
        "सार्वजनिक उद्देश्यों के लिए निजी संपत्ति का अधिग्रहण करने के लिए राज्य को सशक्त बनाने के लिए अनुच्छेद 31 और 31ए को संशोधित किया गया और कुछ कानूनों को नौवीं अनुसूची में रखा गया।",
      type: "संशोधन",
      icon: Gavel,
      importance: "संपत्ति के अधिकार",
    },
    {
      year: "1967",
      date: "27 फरवरी, 1967",
      title: "आई.सी. गोलकनाथ बनाम पंजाब राज्य",
      description:
        "सर्वोच्च न्यायालय ने माना कि मौलिक अधिकार 'पारलौकिक और अपरिवर्तनीय' हैं और संसद को उनमें संशोधन करने की कोई शक्ति नहीं है।",
      type: "न्यायिक",
      icon: Scale,
      importance: "मौलिक अधिकारों की सर्वोच्चता",
    },
    {
      year: "1971",
      date: "5 नवंबर, 1971",
      title: "24वां संशोधन अधिनियम, 1971",
      description:
        "मौलिक अधिकारों सहित संविधान के किसी भी हिस्से में संशोधन करने की संसद की शक्ति को बहाल किया, प्रभावी रूप से गोलकनाथ मामले के फैसले को पलट दिया।",
      type: "संशोधन",
      icon: Gavel,
      importance: "संसदीय शक्ति की बहाली",
    },
    {
      year: "1973",
      date: "24 अप्रैल, 1973",
      title: "केशवानंद भारती बनाम केरल राज्य",
      description:
        "सर्वोच्च न्यायालय ने 'मूल संरचना' सिद्धांत की स्थापना की, यह मानते हुए कि संसद संविधान में संशोधन कर सकती है लेकिन इसकी मूल विशेषताओं में बदलाव नहीं कर सकती है।",
      type: "न्यायिक",
      icon: Scale,
      importance: "मूल संरचना सिद्धांत",
    },
    {
      year: "1975",
      date: "10 अगस्त, 1975",
      title: "39वां संशोधन अधिनियम, 1975",
      description:
        "राष्ट्रपति, उपराष्ट्रपति, प्रधानमंत्री और लोकसभा अध्यक्ष के चुनाव को अदालतों की जांच के दायरे से बाहर रखा गया।",
      type: "संशोधन",
      icon: Gavel,
      importance: "आपातकाल अवधि विधान",
    },
    {
      year: "1976",
      date: "18 दिसंबर, 1976",
      title: "42वां संशोधन अधिनियम, 1976",
      description:
        "'लघु-संविधान' के रूप में जाना जाता है, इसने व्यापक बदलाव किए, जिसमें प्रस्तावना में 'समाजवादी', 'धर्मनिरपेक्ष' और 'अखंडता' को जोड़ना और मौलिक कर्तव्यों को प्रस्तुत करना शामिल है।",
      type: "संशोधन",
      icon: BookOpen,
      importance: "प्रमुखยกเครื่อง",
    },
    {
      year: "1978",
      date: "30 अप्रैल, 1979",
      title: "44वां संशोधन अधिनियम, 1978",
      description:
        "42वें संशोधन द्वारा किए गए कई बदलावों को उलट दिया और संपत्ति के अधिकार को मौलिक अधिकारों की सूची से हटा दिया।",
      type: "संशोधन",
      icon: Gavel,
      importance: "आपातकाल के बाद बहाली",
    },
    {
      year: "1980",
      date: "31 जुलाई, 1980",
      title: "मिनर्वा मिल्स बनाम भारत संघ",
      description:
        "सर्वोच्च न्यायालय ने 42वें संशोधन के कुछ हिस्सों को अमान्य कर दिया और 'मूल संरचना' सिद्धांत को दोहराया, जिसमें न्यायिक समीक्षा को एक मूल विशेषता के रूप में जोर दिया गया।",
      type: "न्यायिक",
      icon: Scale,
      importance: "संविधान की सर्वोच्चता",
    },
    {
      year: "1985",
      date: "15 फरवरी, 1985",
      title: "52वां संशोधन अधिनियम, 1985",
      description:
        "दसवीं अनुसूची प्रस्तुत की, जिसमें दलबदल के लिए विधायकों को अयोग्य ठहराने की प्रक्रिया निर्धारित की गई।",
      type: "संशोधन",
      icon: Users,
      importance: "दलबदल विरोधी कानून",
    },
    {
      year: "1989",
      date: "28 मार्च, 1989",
      title: "61वां संशोधन अधिनियम, 1988",
      description:
        "लोकसभा और राज्य विधानसभाओं के चुनावों के लिए मतदान की आयु 21 से घटाकर 18 वर्ष कर दी गई।",
      type: "संशोधन",
      icon: Users,
      importance: "युवा मताधिकार",
    },
    {
      year: "1992",
      date: "16 नवंबर, 1992",
      title: "इंद्रा साहनी और अन्य बनाम भारत संघ",
      description:
        "अन्य पिछड़ा वर्ग (ओबीसी) के लिए आरक्षण को बरकरार रखा और कुल आरक्षण पर 50% की सीमा तय की।",
      type: "न्यायिक",
      icon: Scale,
      importance: "मंडल आयोग और आरक्षण नीति",
    },
    {
      year: "1993",
      date: "24 अप्रैल, 1993",
      title: "73वां संशोधन अधिनियम, 1992",
      description:
        "पंचायती राज संस्थाओं को संवैधानिक दर्जा प्रदान किया, जिससे ग्रामीण क्षेत्रों में स्थानीय स्वशासन की त्रिस्तरीय संरचना सुनिश्चित हुई।",
      type: "संशोधन",
      icon: Users,
      importance: "ग्रामीण स्थानीय शासन",
    },
    {
      year: "1993",
      date: "1 जून, 1993",
      title: "74वां संशोधन अधिनियम, 1992",
      description:
        "शहरी स्थानीय निकायों (नगर पालिकाओं) को संवैधानिक दर्जा प्रदान किया, जिसका उद्देश्य शहरी स्वशासन को मजबूत करना है।",
      type: "संशोधन",
      icon: Users,
      importance: "शहरी स्थानीय शासन",
    },
    {
      year: "1994",
      date: "11 मार्च, 1994",
      title: "एस. आर. बोम्मई बनाम भारत संघ",
      description:
        "सर्वोच्च न्यायालय ने राज्यों में अनुच्छेद 356 (राष्ट्रपति शासन) के दुरुपयोग को रोकने के लिए दिशानिर्देश निर्धारित किए।",
      type: "न्यायिक",
      icon: Scale,
      importance: "संघवाद और राज्य स्वायत्तता",
    },
    {
      year: "2002",
      date: "12 दिसंबर, 2002",
      title: "86वां संशोधन अधिनियम, 2002",
      description:
        "6 से 14 वर्ष की आयु के बच्चों के लिए प्रारंभिक शिक्षा को मौलिक अधिकार बनाया।",
      type: "संशोधन",
      icon: BookOpen,
      importance: "शिक्षा का अधिकार",
    },
    {
      year: "2004",
      date: "19 फरवरी, 2004",
      title: "89वां संशोधन अधिनियम, 2003",
      description:
        "राष्ट्रीय अनुसूचित जाति और अनुसूचित जनजाति आयोग को दो अलग-अलग निकायों में विभाजित किया।",
      type: "संशोधन",
      icon: Users,
      importance: "सामाजिक न्याय",
    },
    {
      year: "2015",
      date: "28 मई, 2015",
      title: "100वां संशोधन अधिनियम, 2015",
      description: "भारत और बांग्लादेश के बीच भूमि सीमा समझौते की पुष्टि की।",
      type: "संशोधन",
      icon: Gavel,
      importance: "अंतर्राष्ट्रीय समझौता",
    },
    {
      year: "2016",
      date: "8 सितंबर, 2016",
      title: "101वां संशोधन अधिनियम, 2016",
      description:
        "वस्तु एवं सेवा कर (जीएसटी) की शुरुआत की, जो एक व्यापक अप्रत्यक्ष कर है, ताकि एक एकल राष्ट्रीय बाजार बनाया जा सके।",
      type: "संशोधन",
      icon: Scale,
      importance: "कर सुधार",
    },
    {
      year: "2017",
      date: "24 अगस्त, 2017",
      title: "के.एस. पुट्टस्वामी बनाम भारत संघ",
      description:
        "सर्वोच्च न्यायालय ने निजता के अधिकार को संविधान के तहत संरक्षित एक मौलिक अधिकार घोषित किया।",
      type: "न्यायिक",
      icon: Scale,
      importance: "निजता का अधिकार",
    },
    {
      year: "2018",
      date: "11 अगस्त, 2018",
      title: "102वां संशोधन अधिनियम, 2018",
      description:
        "राष्ट्रीय पिछड़ा वर्ग आयोग (एनसीबीसी) को संवैधानिक दर्जा प्रदान किया।",
      type: "संशोधन",
      icon: Users,
      importance: "पिछड़ा वर्ग का सशक्तिकरण",
    },
    {
      year: "2018",
      date: "6 सितंबर, 2018",
      title: "नवतेज सिंह जौहर बनाम भारत संघ",
      description:
        "सर्वोच्च न्यायालय ने भारतीय दंड संहिता की धारा 377 को कम करके वयस्कों के बीच सहमति से समलैंगिक कृत्यों को अपराध की श्रेणी से बाहर कर दिया।",
      type: "न्यायिक",
      icon: Scale,
      importance: "एलजीबीटीक्यू+ अधिकार",
    },
    {
      year: "2019",
      date: "14 जनवरी, 2019",
      title: "103वां संशोधन अधिनियम, 2019",
      description:
        "शैक्षणिक संस्थानों और सार्वजनिक रोजगार में आर्थिक रूप से कमजोर वर्गों (ईडब्ल्यूएस) के लिए 10% आरक्षण की शुरुआत की।",
      type: "संशोधन",
      icon: Users,
      importance: "आर्थिक आरक्षण",
    },
    {
      year: "2020",
      date: "25 जनवरी, 2020",
      title: "104वां संशोधन अधिनियम, 2019",
      description:
        "लोकसभा और राज्य विधानसभाओं में अनुसूचित जातियों और अनुसूचित जनजातियों के लिए सीटों के आरक्षण को बढ़ाया और एंग्लो-इंडियन समुदाय के लिए आरक्षित सीटों को हटा दिया।",
      type: "संशोधन",
      icon: Users,
      importance: "आरक्षण का विस्तार",
    },
    {
      year: "2021",
      date: "18 अगस्त, 2021",
      title: "105वां संशोधन अधिनियम, 2021",
      description:
        "राज्य सरकारों की सामाजिक और शैक्षिक रूप से पिछड़े वर्गों (एसईबीसी) की पहचान करने और उन्हें निर्दिष्ट करने की शक्ति को बहाल किया।",
      type: "संशोधन",
      icon: Users,
      importance: "आरक्षण में राज्य की स्वायत्तता",
    },
    {
      year: "2022",
      date: "7 नवंबर, 2022",
      title: "जनहित अभियान बनाम भारत संघ",
      description:
        "सुप्रीम कोर्ट ने 3-2 के बहुमत से 103वें संवैधानिक संशोधन की वैधता को बरकरार रखा, जिसने शिक्षा और सरकारी नौकरियों में आर्थिक रूप से कमजोर वर्गों (EWS) के लिए 10% आरक्षण की शुरुआत की।",
      type: "न्यायिक",
      icon: Scale,
      importance: "EWS आरक्षण बरकरार",
    },
    {
      year: "2023",
      date: "28 सितंबर, 2023",
      title: "106वां संशोधन अधिनियम, 2023",
      description:
        "नारी शक्ति वंदन अधिनियम के रूप में जाना जाने वाला यह अधिनियम लोकसभा, राज्य विधानसभाओं और दिल्ली विधानसभा में महिलाओं के लिए सभी सीटों में से एक-तिहाई आरक्षित करता है। इसका कार्यान्वयन भविष्य की जनगणना और परिसीमन प्रक्रिया पर निर्भर है।",
      type: "संशोधन",
      icon: Users,
      importance: "महिला आरक्षण अधिनियम",
    },
    {
      year: "2024",
      date: "15 फरवरी, 2024",
      title: "एसोसिएशन फॉर डेमोक्रेटिक रिफॉर्म्स बनाम भारत संघ",
      description:
        "सुप्रीम कोर्ट ने गुमनाम चुनावी बांड योजना को असंवैधानिक करार देते हुए रद्द कर दिया और कहा कि यह मतदाताओं के सूचना के अधिकार का उल्लंघन करता है।",
      type: "न्यायिक",
      icon: Scale,
      importance: "चुनावी पारदर्शिता",
    },
  ],
};
