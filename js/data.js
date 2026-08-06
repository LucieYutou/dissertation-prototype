// This file brings together the item, source and media data created from the CSV files.
// Run the converter again after changing any of those CSV files.

const ITEMS = [
  {
    "id": "item_001",
    "date": "1959",
    "displayDate": "1959",
    "sortDate": "1959-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Year only. No exact event date is given in the source.",
    "title": "Stibbs begins pressing for a University Computing Laboratory",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "People",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Walter Stibbs argued that modern astronomy required substantial computing facilities and later pressed for a computing laboratory at the University.",
    "whyItMatters": "The need for a local computing laboratory first emerged from the demands of astronomy and scientific research.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_002"
    ],
    "media": [
      "m_069"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. The story can begin with astronomy creating pressure for local computing. Supports the astronomy-driven origin of the Computing Laboratory. Evidence quote: modern astronomy and astrophysics required substantial computing facilities Original item ID: E001."
  },
  {
    "id": "item_002",
    "date": "1960",
    "displayDate": "1960",
    "sortDate": "1960-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Useful for early programming-language history. Date is approximate because the source discusses the IBM 1620 period. No exact event date is given in the source. The source says the compiler was obtained from Nancy University, but does not give a precise acquisition date. Approximate date.",
    "title": "ALGOL 60 compiler from Nancy University",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "An ALGOL 60 compiler was obtained from Nancy University, but it was never made to work completely in the St Andrews IBM 1620 environment.",
    "whyItMatters": "The compiler’s failure at St Andrews reveals how difficult it was to transfer software between early computer systems.",
    "relatedPeople": [
      "item_006 Tony Davie"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_003",
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for early programming-language history. Date is approximate because the source discusses the IBM 1620 period. Original item ID: item_005. | From prototype content dataset.xlsx sheet 'software_network_systems'. Could support a small story about the difficulty of using a compiler whose reserved words were in French. Cole states that all reserved words in this ALGOL 60 compiler were in French. Original item ID: SYS003. | Merged duplicate original rows: item_002; item_003"
  },
  {
    "id": "item_003",
    "date": "1960",
    "displayDate": "1960",
    "sortDate": "1960-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Cole states that an early version of ELIZA was available, but does not give a precise date. Approximate date.",
    "title": "ELIZA",
    "itemType": "software_network_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "Jack Cole’s account notes that an early version of ELIZA was available during this period.",
    "whyItMatters": "Its presence records an early encounter with conversational AI at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_003"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Cole describes ELIZA as a program simulating a psychotherapy conversation Original item ID: SYS004."
  },
  {
    "id": "item_004",
    "date": "1960",
    "displayDate": "1960",
    "sortDate": "1960-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Year only. No exact event date is given in the source.",
    "title": "FORTRAN and SPS on the IBM 1620",
    "itemType": "digital_resource",
    "themeTags": [
      "Build the School",
      "Technology",
      "Humanities Computing",
      "Research & Public Impact"
    ],
    "summary": "FORTRAN II-D compilers and the Symbolic Programming System were part of the IBM 1620 software environment used by the Computing Laboratory.",
    "whyItMatters": "FORTRAN and SPS made the IBM 1620 a practical system for programming as well as calculation.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_003",
      "src_001",
      "src_005"
    ],
    "media": [
      "m_009"
    ],
    "imageNote": "",
    "internalNote": "[item_004] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Date is approximate because the source describes the IBM 1620 period rather than a specific day. Original item ID: item_003. | From prototype content dataset.xlsx sheet 'software_network_systems'. Cole describes the IBM 1620 software as largely based on Fortran roots, with good Fortran II-D compilers and associated mathematical and statistical packages. Original item ID: SYS001. | Merged duplicate original rows: item_005; item_006 | [item_005] From prototype content dataset.xlsx sheet 'software_network_systems'. Carson describes a resident Monitor system incorporating a Symbolic Programming System assembler and a Fortran compiler; Cole also refers to assembly language use on the IBM 1620. Original item ID: SYS002. | From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: The source page contains an image of a punched card from a 1620 SPS program. Original item ID: item_004. | Merged duplicate original rows: item_007; item_008 | Merged during duplicate/content-related consolidation with: item_005."
  },
  {
    "id": "item_006",
    "date": "1960",
    "displayDate": "1960",
    "sortDate": "1960-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Role is unclear from the report and should be checked before using as a major person entry. Approximate date. No exact event date is given in the source.",
    "title": "Tony Davie",
    "itemType": "person",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "People",
      "Everyday Life in School"
    ],
    "summary": "Tony Davie is mentioned in relation to early efforts to use the ALGOL compiler obtained from Nancy University.",
    "whyItMatters": "Davie’s recollection helps document the difficulties of adapting the Nancy ALGOL compiler to the IBM 1620.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_003",
      "src_001"
    ],
    "media": [
      "m_007"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Could support a small story about the difficulty of using the French ALGOL compiler. Supports his connection with the ALGOL compiler Evidence quote: despite valiant efforts from Mr Davie Original item ID: P005."
  },
  {
    "id": "item_007",
    "date": "1960",
    "displayDate": "1960",
    "sortDate": "1960-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Stibbs indicated at his 1959 appointment interview that he would press for a computing laboratory. Year only. No exact event date is given in the source.",
    "title": "Walter Stibbs",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Research & Public Impact",
      "Firsts and Milestones",
      "People",
      "Places and Institutions"
    ],
    "summary": "Walter Stibbs pushed for the establishment of a University Computing Laboratory and chaired the Senate Computer Committee advising on the computing service.",
    "whyItMatters": "Stibbs turned the computing needs of astronomy into a wider proposal for a University Computing Laboratory.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_002",
      "src_005",
      "src_007"
    ],
    "media": [
      "m_001"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. astronomy’s need for computing helped lead to the creation of the Computing Laboratory. Supports Stibbs’ role in advocating for the Computing Laboratory. Evidence quote: I would be pressing hard for a computing laboratory in the University. Original item ID: P001."
  },
  {
    "id": "item_008",
    "date": "1960-10",
    "displayDate": "October 1960",
    "sortDate": "1960-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Start date refers to joining the University Observatory; Computing Laboratory management role became central in 1964–65. Month only. No exact event date is given in the source.",
    "title": "T. R. Carson",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Firsts and Milestones",
      "People",
      "Places and Institutions"
    ],
    "summary": "T. R. Carson worked with Stibbs and helped plan and manage the early Computing Laboratory and IBM 1620 service.",
    "whyItMatters": "Carson helped move the project from technical planning into the daily operation of the first computing service.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_002",
      "src_005",
      "src_008"
    ],
    "media": [
      "m_002"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Carson helped turn the plan for local computing into a working service. Supports Carson’s role in managing the early laboratory. Evidence quote: Dr Carson was relieved of teaching duties during the session 1964–65 to manage the Computing Laboratory. Original item ID: P002."
  },
  {
    "id": "item_009",
    "date": "1964-10",
    "displayDate": "October 1964",
    "sortDate": "1964-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Delivered in early October 1964; formal inauguration took place in December 1964; full-time service started on 4 January 1965; the machine later moved to the Mathematics Institute in December 1967 and remained in operation until the end of February 1970. No exact delivery date is given in the source.",
    "title": "IBM 1620 Model II begins computing at St Andrews",
    "itemType": "equipment; event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Technology",
      "Research & Public Impact",
      "Firsts and Milestones",
      "Places and Institutions"
    ],
    "summary": "The IBM 1620 Model II arrived in October 1964 and became St Andrews’ first local computer. It supported the University’s computing service from January 1965, first in the Observatory and later in the Mathematics Institute, until February 1970.",
    "whyItMatters": "The IBM 1620 gave St Andrews its own local computing service for the first time.",
    "relatedPeople": [
      "item_008 T. R. Carson",
      "item_413 Sheila Hill"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_005",
      "src_001",
      "src_002",
      "src_003",
      "src_006",
      "src_009"
    ],
    "media": [
      "m_004",
      "m_005",
      "m_009"
    ],
    "imageNote": "",
    "internalNote": "[item_009] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Combines the equipment item and institutional milestone to avoid duplication. Strong opening item for the representative equipment timeline. Original item ID: item_001. | [item_010] From prototype content dataset.xlsx sheet 'hardware_devices'. Configuration included a Model II CPU, console typewriter, core storage, three disk storage drives, card reader/punch, printer, two printing card punches, and card sorter. It used decimal architecture and disk-based storage. Original item ID: H001. From prototype content dataset.xlsx sheet 'events'. Good visual milestone for timeline: the machine arrives before the formal service begins. Supports the delivery date and location. Evidence quote: delivered to the University Observatory early in October 1964 Original item ID: E002. Merged from original item IDs: item_011. | Merged during duplicate/content-related consolidation with: item_010."
  },
  {
    "id": "item_011",
    "date": "1964-10",
    "displayDate": "October 1964",
    "sortDate": "1964-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The IBM 1620 was delivered to the University Observatory in early October 1964; Carson states that the new computing laboratory was set up in the Scott Lang Building of the University Observatory. Approximate date. No exact event date is given in the source.",
    "title": "University Observatory",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The IBM 1620 and the early Computing Laboratory were initially housed in the Scott Lang Building of the University Observatory.",
    "whyItMatters": "This location directly links astronomy and the early computing service.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson",
      "item_413 Sheila Hill"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_002",
      "src_005",
      "src_006"
    ],
    "media": [
      "m_005"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG002."
  },
  {
    "id": "item_012",
    "date": "1964-12",
    "displayDate": "December 1964",
    "sortDate": "1964-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Month only. No exact event date is given in the source.",
    "title": "Computing Laboratory formally opened",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Firsts and Milestones",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Principal Sir Malcolm Knox visited the Computing Laboratory in December 1964 for a brief ceremony of inauguration.",
    "whyItMatters": "The ceremony gave the new Computing Laboratory formal recognition within the University.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson"
    ],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service"
    ],
    "sources": [
      "src_002"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Could be used as a short timeline moment before service launch. Evidence quote: visited by [Principal] Sir Malcolm Knox in December 1964 for a brief ceremony of inauguration Original item ID: E003."
  },
  {
    "id": "item_013",
    "date": "1965",
    "displayDate": "1965",
    "sortDate": "1965-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Cole’s account states that joint seminars between the Computing Laboratory, Computational Science, and the Dundee University Computing Laboratory were held for a number of years commencing in 1965. Year only. No exact event date is given in the source.",
    "title": "Dundee University Computing Laboratory",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Dundee University Computing Laboratory was involved in joint seminars with St Andrews computing groups from 1965.",
    "whyItMatters": "Dundee is part of the regional network of early computing activity around St Andrews.",
    "relatedPeople": [
      "item_414 Jack Cole"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_009"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Could support a local-to-global or regional collaboration theme. Evidence quote: Joint Seminars between the the Computing Laboratory, Computational Science and the Dundee University Computing Laboratory were held for a number of years commencing in 1965 Original item ID: ORG011."
  },
  {
    "id": "item_014",
    "date": "1965-01",
    "displayDate": "January 1965",
    "sortDate": "1965-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "This is reported in 2011 but refers to the 1960s. It can be placed in the early period or kept here as a source-history item.",
    "title": "Photograph of the IBM 1620 rediscovered",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "In 2011, the Newsletter reported the rediscovery of a photograph showing the IBM 1620 Model II used by the early computing service.",
    "whyItMatters": "The rediscovered photograph provides a rare visual record of St Andrews’ first computer and its early working environment.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_163"
    ],
    "media": [
      "m_005"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This is reported in 2011 but refers to the 1960s. It can be placed in the early period or kept here as a source-history item. Original item ID: item_240."
  },
  {
    "id": "item_015",
    "date": "1965-01",
    "displayDate": "January 1965",
    "sortDate": "1965-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "She accepted the post in 1964; full-time service began on 4 January 1965. Exact date. No exact event date is given in the source. Use 4 January 1965 as the service start date; job offer was in June 1964.",
    "title": "Sheila Hill becomes the first computer operator",
    "itemType": "event; person",
    "themeTags": [
      "People",
      "Places and Institutions",
      "Everyday Life in School",
      "Build the School",
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Sheila Hill was the first computer operator for the IBM 1620 service at St Andrews.",
    "whyItMatters": "Hill’s appointment records the skilled operational work required to keep the early service running.",
    "relatedPeople": [
      "item_413 Sheila Hill",
      "item_007 Walter Stibbs"
    ],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service"
    ],
    "sources": [
      "src_001",
      "src_006"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Strong candidate for a hidden-figures or operator-perspective story. Supports Hill’s appointment as computer operator. Very useful for hidden figures, labour, and everyday computing themes. Evidence quote: He was offering me the post of computer operator for the new IBM 1620 computer. Original item ID: P003. From prototype content dataset.xlsx sheet 'events'. Very suitable for a hidden-figures narrative. Evidence quote: the post of computer operator for the new IBM 1620 computer Original item ID: E005. Merged from original items: item_017; item_018."
  },
  {
    "id": "item_019",
    "date": "1965–66",
    "displayDate": "1965–66",
    "sortDate": "1965-01-01",
    "datePrecision": "academic_year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Cole’s account gives this as activity during session 1965–66. Date certainty: academic_year No exact event date is given in the source.",
    "title": "Programming courses in FORTRAN and SPS",
    "itemType": "software_system",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "During the 1965–66 session, Laboratory staff taught courses in FORTRAN and SPS alongside the computing service.",
    "whyItMatters": "The Computing Laboratory provided training as well as computing services, showing early teaching and user-support functions.",
    "relatedPeople": [],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service"
    ],
    "sources": [
      "src_009"
    ],
    "media": [
      "m_009"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Original item ID: item_002. | From prototype content dataset.xlsx sheet 'teaching_curriculum'. Could support a beginner-user or everyday-computing story. Supports early programming-course activity. Evidence quote: giving courses on programming in Fortran and SPS Original item ID: TC002. | Merged duplicate original rows: item_026; item_027"
  },
  {
    "id": "item_016",
    "date": "1965-01-04",
    "displayDate": "4 January 1965",
    "sortDate": "1965-01-04",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact event date stated in the source.",
    "title": "Computing Laboratory begins full-time service",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Firsts and Milestones",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The University of St Andrews Computing Laboratory began full-time normal operation on 4 January 1965.",
    "whyItMatters": "From January 1965, computing became a regular University service rather than an experimental installation.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson",
      "item_413 Sheila Hill",
      "item_414 Jack Cole"
    ],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service"
    ],
    "sources": [
      "src_005",
      "src_006",
      "src_002",
      "src_003"
    ],
    "media": [
      "m_004",
      "m_005"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Strong opening timeline event for the prototype. Evidence quote: The Computing Laboratory began full-time normal operation on Monday, 4 January 1965. Original item ID: E004. From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG003. Merged from original items: item_014; item_019."
  },
  {
    "id": "item_413",
    "date": "1965-01-04",
    "displayDate": "4 January 1965",
    "sortDate": "1965-01-04",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "She accepted the post in 1964; full-time service began on 4 January 1965.",
    "title": "Sheila Hill",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People",
      "Equipment & Infrastructure",
      "Everyday Life in School"
    ],
    "summary": "Sheila Hill was the first computer operator for the IBM 1620 service at St Andrews.",
    "whyItMatters": "Hill’s account describes the practical knowledge and daily work needed to operate the first computing service.",
    "relatedPeople": [],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service"
    ],
    "sources": [
      "src_001",
      "src_006"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P003; related to item_015 and the IBM 1620 service."
  },
  {
    "id": "item_017",
    "date": "1965-10",
    "displayDate": "October 1965",
    "sortDate": "1965-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Cole’s account states that David Wishart was part of the computing service staff at the beginning of October 1965 and that he later enrolled for a part-time MSc which was converted to a PhD. Month only. No exact event date is given in the source.",
    "title": "David Wishart",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Research & Public Impact",
      "People"
    ],
    "summary": "David Wishart worked in the Computing Laboratory as a computer/punch operator and later programmer/computer operator, while also undertaking postgraduate research connected to CLUSTAN and numerical taxonomy.",
    "whyItMatters": "Wishart’s career moved from operating the computer to using it for postgraduate research in statistics.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_009",
      "src_011"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Story angle: a Computing Laboratory staff role developed into postgraduate research and a cluster analysis system. Supports Wishart’s staff role in the Computing Laboratory Evidence quote: Mr Wishart was promoted to programmer/computer operator Original item ID: P006."
  },
  {
    "id": "item_018",
    "date": "1965-10",
    "displayDate": "October 1965",
    "sortDate": "1965-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Month only. No exact event date is given in the source.",
    "title": "Jack Cole appointed Director of the Computing Laboratory",
    "itemType": "event; person",
    "themeTags": [
      "Build the School",
      "People",
      "Places and Institutions",
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Jack Cole was appointed Director of the Computing Laboratory in October 1965.",
    "whyItMatters": "He represents the transition from establishing a computing service to developing a more formal institutional computing presence.",
    "relatedPeople": [
      "item_414 Jack Cole",
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_002",
      "src_003"
    ],
    "media": [
      "m_003"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Could be used as a bridge figure between early service provision and later Computer Science development. Supports Cole’s appointment as Director. Evidence quote: appointed as its Director in October 1965 Original item ID: P004. From prototype content dataset.xlsx sheet 'events'. Useful bridge event from early service to institutional development. Original item ID: E006. Merged from original items: item_021; item_022."
  },
  {
    "id": "item_414",
    "date": "1965-10",
    "displayDate": "October 1965",
    "sortDate": "1965-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Month only.",
    "title": "Jack Cole",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People",
      "Places and Institutions"
    ],
    "summary": "Jack Cole was appointed Director of the Computing Laboratory in October 1965.",
    "whyItMatters": "Under Cole’s leadership, the Computing Laboratory developed as both a University service and an academic centre.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_002",
      "src_003",
      "src_036",
      "src_037",
      "src_047",
      "src_057"
    ],
    "media": [
      "m_003"
    ],
    "imageNote": "Black-and-white portrait photograph of Professor Jack Cole.",
    "internalNote": "Added from prototype people P004; related to item_018, item_196, item_215, and item_353."
  },
  {
    "id": "item_020",
    "date": "1966",
    "displayDate": "1966",
    "sortDate": "1966-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Cole’s account states that the first two full-time postgraduate students were enrolled for the MSc degree in 1966.",
    "title": "Computational Science postgraduate work begins",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Teaching & Student Use",
      "Research & Public Impact"
    ],
    "summary": "Postgraduate work in Computational Science began with the enrolment of the first two full-time MSc students in 1966.",
    "whyItMatters": "The first MSc students brought postgraduate teaching and research into the work of the Computing Laboratory.",
    "relatedPeople": [
      "item_017 David Wishart"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_009"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'."
  },
  {
    "id": "item_021",
    "date": "1967-12",
    "displayDate": "December 1967",
    "sortDate": "1967-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Month only. No exact event date is given in the source.",
    "title": "Computing Laboratory moved to the Mathematics Institute",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Place...",
      "Places and Institutions",
      "Techno..."
    ],
    "summary": "In December 1967, the Computing Laboratory moved from the University Observatory to a specially adapted room in the Mathematics Institute.",
    "whyItMatters": "The move gave the expanding Computing Laboratory a new dedicated base.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson"
    ],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service"
    ],
    "sources": [
      "src_001",
      "src_002",
      "src_009",
      "src_013"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_021] From prototype content dataset.xlsx sheet 'events'. Could be part of a machin... | [item_022] From prototype content dataset.xlsx sheet 'places_organisations'. Original it... | Merged during duplicate/content-related consolidation with: item_022."
  },
  {
    "id": "item_023",
    "date": "1968",
    "displayDate": "1968",
    "sortDate": "1968-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "University of Cambridge",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Cambridge was one of the external computing sites mentioned during discussions about replacing the IBM 360/44.",
    "whyItMatters": "Cambridge helps show that St Andrews computing was connected to a wider UK academic computing environment.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_009"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'."
  },
  {
    "id": "item_024",
    "date": "1969",
    "displayDate": "1969",
    "sortDate": "1969-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "SRC009 and SRC013 describe 44PS as part of the IBM 360/44 software environment",
    "title": "44PS",
    "itemType": "software_network_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Places and Institutions..."
    ],
    "summary": "44PS was a batch operating system used on the IBM 360/44.",
    "whyItMatters": "44PS is part of the IBM 360/44 software environment at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_009",
      "src_013"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'."
  },
  {
    "id": "item_025",
    "date": "1969",
    "displayDate": "1969",
    "sortDate": "1969-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Distinguished Lecture Series begins with Algol ’68",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact"
    ],
    "summary": "The Distinguished Lecture Series began in 1969 with W. van der Poel’s lecture on Algol ’68.",
    "whyItMatters": "The series brought external advanced computing research into St Andrews and supported students’ exposure to current developments.",
    "relatedPeople": [
      "item_414 Jack Cole"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_009",
      "src_010",
      "src_049"
    ],
    "media": [
      "m_008"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'."
  },
  {
    "id": "item_026",
    "date": "1969",
    "displayDate": "1969",
    "sortDate": "1969-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "RAX",
    "itemType": "software_network_system",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Humanities Computing"
    ],
    "summary": "RAX provided time-sharing and remote access on the IBM 360/44.",
    "whyItMatters": "RAX helps explain how users accessed computing resources before the VAX transition.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_009",
      "src_012",
      "src_013"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'."
  },
  {
    "id": "item_027",
    "date": "1969-04",
    "displayDate": "April 1969",
    "sortDate": "1969-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Month of installation stated in the original dataset.",
    "title": "IBM 360/44 installed",
    "itemType": "event; equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Firsts and Milestones",
      "Places and Institutions"
    ],
    "summary": "The IBM 360/44 was installed in April 1969 as the second central University computer in St Andrews and replaced the IBM 1620 as the main University computing system.",
    "whyItMatters": "The installation significantly increased computing capacity and introduced video character displays in place of slower terminal arrangements.",
    "relatedPeople": [
      "item_414 Jack Cole",
      "item_028 Robin Erskine"
    ],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service"
    ],
    "sources": [
      "src_001",
      "src_009",
      "src_013"
    ],
    "media": [
      "m_010",
      "m_011"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'."
  },
  {
    "id": "item_028",
    "date": "1969-04",
    "displayDate": "April 1969",
    "sortDate": "1969-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Robin Erskine",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Firsts and Milestones",
      "People",
      "Places and Institutions"
    ],
    "summary": "Robin Erskine was appointed Computer Manager shortly after the IBM 360/44 was installed. A later source caption identifies him as Director of the Computing Laboratory.",
    "whyItMatters": "His career links the installation of the IBM 360/44 with the later management of the Computing Laboratory.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_009"
    ],
    "media": [
      "m_010"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'."
  },
  {
    "id": "item_029",
    "date": "1970",
    "displayDate": "1970",
    "sortDate": "1970-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Cole’s account connects Wishart’s PhD with the implementation of CLUSTAN.",
    "title": "CLUSTAN and cluster analysis research",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "David Wishart’s postgraduate research concerned numerical taxonomy and cluster analysis, and Cole’s account identifies his thesis subject as the implementation of CLUSTAN.",
    "whyItMatters": "CLUSTAN is an early example of computing research at St Andrews producing a reusable software system.",
    "relatedPeople": [
      "item_017 David Wishart"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_009",
      "src_011"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'."
  },
  {
    "id": "item_030",
    "date": "1970",
    "displayDate": "1970",
    "sortDate": "1970-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The report screenshot mentions remote access arrangements to computers in Aberdeen; the April 1980 newsletter mentions Aberdeen TSS terminals in the VAX changeover context. Approximate date. No exact event date is given in the source.",
    "title": "University of Aberdeen",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Aberdeen was one of the external computing sites reached through remote-access and terminal arrangements.",
    "whyItMatters": "St Andrews still relied on computing facilities in Aberdeen even while its own systems were being upgraded.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_012"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Could support a local-to-global / remote-access story. Evidence quote: the Aberdeen TSS terminals and the Dundee DEC System 10 terminals will remain in their current locations Original item ID: ORG012."
  },
  {
    "id": "item_031",
    "date": "1970-02",
    "displayDate": "February 1970",
    "sortDate": "1970-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the Chronological Report and related source material. No exact day is given in the source.",
    "title": "IBM 1620 sold and Honeywell 316 front-end processor purchased",
    "itemType": "event; equipment",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Places and Institutions",
      "Technology",
      "Research & Public Impact",
      "Firsts and Milestones"
    ],
    "summary": "The IBM 1620 was sold for £19,000 at the end of February 1970, and the money was used to purchase a Honeywell 316 front-end processor for the IBM 360/44. The Honeywell 316 controlled eight teletypes and performed other functions.",
    "whyItMatters": "Selling the IBM 1620 helped fund a new front-end processor, which expanded terminal access to the IBM 360/44.",
    "relatedPeople": [],
    "relatedEquipment": [
      "item_009 IBM 1620 Model II and the start of St Andrews computing service",
      "item_027 IBM 360/44 installed"
    ],
    "sources": [
      "src_001",
      "src_009",
      "src_013"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'hardware_devices'. Could support a story about terminals, remote access, and hidden infrastructure behind user access. Used as a front-end processor on the IBM 360/44 to control eight teletypes. Supports Honeywell 316 function and relationship to IBM 360/44. Evidence quote: Honeywell 316 which was utilised as a front end processor on the 360/44 to control 8 teletypes Original item ID: H003. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Date is approximate. This is useful for showing how the IBM 360/44 system depended on supporting devices, not just the main machine. Original item ID: item_009. Merged from original items: item_039; item_040. From prototype content dataset.xlsx sheet 'events'. Could be used to show how old machines were repurposed financially into new infrastructure. Supports the sale of the IBM 1620 and purchase of the Honeywell 316. Evidence quote: it was sold for £19,000 and this money was used to purchase a Honeywell 316 Original item ID: E011. Merged from original item IDs: item_034."
  },
  {
    "id": "item_032",
    "date": "1970-05",
    "displayDate": "May 1970",
    "sortDate": "1970-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Cole’s account states that Computer Board support increased the staff complement to 16 in May 1970. Month only. No exact event date is given in the source.",
    "title": "Computing Laboratory staff increased to 16",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "People",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "With Computer Board support, the Computing Laboratory staff increased to 16 in May 1970.",
    "whyItMatters": "The staff increase reflects the rapid expansion of computing services and institutional support after the IBM 360/44 installation.",
    "relatedPeople": [
      "item_414 Jack Cole",
      "item_028 Robin Erskine"
    ],
    "relatedEquipment": [
      "item_027 IBM 360/44 installed"
    ],
    "sources": [
      "src_001",
      "src_009"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Could be used to show how infrastructure growth required human staffing growth. Supports the date and scale of the staff increase. Evidence quote: With Computer Board support the staff of the Laboratory were increased in May 1970 to 16 Original item ID: E010."
  },
  {
    "id": "item_033",
    "date": "1971",
    "displayDate": "1971",
    "sortDate": "1971-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Official School history gives the year only. Year only.",
    "title": "First Computer Science degree awarded at St Andrews",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "The first degree in Computer Science at St Andrews was awarded in 1971.",
    "whyItMatters": "It marks the point when Computer Science became a degree subject at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_048"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. The teaching story moves from computing service and postgraduate work to a Computer Science degree. Supports the 1971 degree milestone. This does not conflict with the 1966 MSc-student entry: 1966 records enrolment of first full-time postgraduate students, while 1971 is the official first Computer Science degree awarded milestone. Evidence quote: The first degree in Computer Science at St Andrews was awarded in 1971. Original item ID: E050."
  },
  {
    "id": "item_034",
    "date": "1972",
    "displayDate": "1972",
    "sortDate": "1972-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Turner’s own account says he left Oxford in 1972 for a lectureship at St Andrews. Year only. No exact event date is given in the source.",
    "title": "David Turner",
    "itemType": "person",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "People"
    ],
    "summary": "David Turner joined St Andrews in 1972 and invented SASL during a programming language theory course.",
    "whyItMatters": "Turner brought early functional programming research into teaching at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_014"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Story angle: SASL grew out of teaching programming language theory at St Andrews. Supports Turner’s arrival at St Andrews and the context for SASL. Evidence quote: I left Oxford in 1972 for a lectureship at St Andrews Original item ID: P007."
  },
  {
    "id": "item_035",
    "date": "1972",
    "displayDate": "1972",
    "sortDate": "1972-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The 2005 IBM 360/44 newsletter article states that the IBM 360/44 was transferred to the new John Honey Building in mid-1972. Approximate date. No exact event date is given in the source.",
    "title": "John Honey Building",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "The IBM 360/44 was transferred to the John Honey Building in mid-1972.",
    "whyItMatters": "The move made the John Honey Building a new base for the University’s central computer.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_013",
      "src_001"
    ],
    "media": [
      "m_007"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Could connect machine rooms with the later coffee-area culture. Original item ID: ORG010."
  },
  {
    "id": "item_036",
    "date": "1972–1973",
    "displayDate": "1972–1973",
    "sortDate": "1972-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Turner’s own account says he joined St Andrews in 1972 and invented SASL during a programming language theory course; implementation followed by Easter 1973. Approximate date. No exact event date is given in the source.",
    "title": "SASL functional programming language",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "SASL was invented by David Turner after he joined St Andrews and was used for functional programming teaching.",
    "whyItMatters": "SASL grew out of teaching at St Andrews and later became part of the wider development of functional programming.",
    "relatedPeople": [
      "item_034 David Turner",
      "item_006 Tony Davie"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_014"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'. Story angle: a teaching notation became part of the wider history of functional programming languages. Turner states that SASL was used for teaching functional programming. Supports Turner’s account of inventing SASL at St Andrews. Evidence quote: During that course I invented a simple notation based on the applicative subset of PAL. Original item ID: PR004. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for programming-language history. Original item ID: item_011. Merged from original items: item_046; item_047."
  },
  {
    "id": "item_037",
    "date": "1975",
    "displayDate": "1975",
    "sortDate": "1975-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Early statistical and graphical software services",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "Early software services included GLIM, NAG Mark 4, ALGOL W graph plotting and Playtime.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_058"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This is a software ecosystem item rather than a single device. Original item ID: item_015."
  },
  {
    "id": "item_038",
    "date": "1975",
    "displayDate": "1975",
    "sortDate": "1975-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event details are taken from the 1975 Newsletter annual index.",
    "title": "Interdata RJE and remote job entry",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Computing Laboratory used Interdata remote job entry and provided remote access to external computing services.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_058"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event details are taken from the 1975 Newsletter annual index. Original item ID: item_012."
  },
  {
    "id": "item_039",
    "date": "1975-05",
    "displayDate": "May 1975",
    "sortDate": "1975-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1975 Newsletter index.",
    "title": "Texas Instruments ASR 733 cassette terminal",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The University had a Texas Instruments ASR 733 cassette terminal by 1975.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_058"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1975 Newsletter index. Original item ID: item_014."
  },
  {
    "id": "item_040",
    "date": "1975-06",
    "displayDate": "June 1975",
    "sortDate": "1975-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1975 Newsletter index entries.",
    "title": "Digital GT40 display",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "A Digital GT40 formed part of the graphics equipment in use by 1975.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_058"
    ],
    "media": [
      "m_034"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1975 Newsletter index entries. Original item ID: item_013."
  },
  {
    "id": "item_041",
    "date": "1976",
    "displayDate": "1976",
    "sortDate": "1976-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The Chronological Report gives 1976 for Beetham’s association with the Computing Laboratory; Year only. No exact event date is given in the source.",
    "title": "Computing support expands into arts and humanities research",
    "itemType": "project",
    "themeTags": [
      "Build the School",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Chronological Report describes cooperation between the Computing Laboratory and arts/humanities researchers, including Mike Beetham helping researchers apply computing technology to their problems.",
    "whyItMatters": "The collaboration brought computing methods into arts and humanities research at St Andrews.",
    "relatedPeople": [
      "item_414 Jack Cole",
      "item_042 Mike Beetham"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'. Story angle: computing at St Andrews supported textual analysis, computational linguistics, and humanities research as well as science. This claim should be traced to the Chronological Report’s original footnote source before being used as a major public-facing claim. Supports the Chronological Report’s account of collaboration between the Computing Laboratory and arts/humanities researchers, including computational linguistics tools. The original footnote source still needs to be checked. Evidence quote: working on computational linguistics tools like machine translators from Russian to English and concordance programs Original item ID: PR007."
  },
  {
    "id": "item_042",
    "date": "1976",
    "displayDate": "1976",
    "sortDate": "1976-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The Chronological Report states that Beetham associated himself with the Computing Laboratory in 1976; the original footnote source should be checked. Year only. No exact event date is given in the source.",
    "title": "Mike Beetham",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Humanities Computing",
      "Research & Public Impact",
      "People"
    ],
    "summary": "In 1976, Mike Beetham worked with the Computing Laboratory to help arts researchers use computing in their research.",
    "whyItMatters": "Beetham helped arts researchers find practical ways to use computing in their work.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Story angle: computing was used not only for science but also for arts and humanities research. Supports Beetham’s association with the Computing Laboratory, but this currently comes from the Chronological Report rather than a separate external source in this batch. Evidence quote: Dr Mike Beetham ... ‘associated’ himself with the computing laboratory Original item ID: P009."
  },
  {
    "id": "item_043",
    "date": "1976",
    "displayDate": "1976",
    "sortDate": "1976-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Text editing and character handling with RAX",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "RAX included text editing, typewriter simulation and character-code functions.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_059"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful background for later EBCDIC/ASCII conversion, Greek printing and multilingual text handling. Original item ID: item_017."
  },
  {
    "id": "item_044",
    "date": "1976-06",
    "displayDate": "June 1976",
    "sortDate": "1976-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1976 Newsletter index.",
    "title": "Curve drawing and line-printer graphics with GHOST",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "GHOST was used for curve drawing and graphical output on line printers..",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_059"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1976 Newsletter index. Original item ID: item_016."
  },
  {
    "id": "item_045",
    "date": "1977-10",
    "displayDate": "October 1977",
    "sortDate": "1977-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the October 1977 Newsletter index entry.",
    "title": "Digitiser purchased for the computer service",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "A digitiser was purchased for the computer service as a graphical input device.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_060"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 1977 Newsletter index entry. Original item ID: item_018."
  },
  {
    "id": "item_046",
    "date": "1978",
    "displayDate": "1978",
    "sortDate": "1978-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1978 Newsletter index.",
    "title": "FAMULUS information storage and retrieval package",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "FAMULUS was listed as an information storage and retrieval package",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_062"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1978 Newsletter index. Original item ID: item_020."
  },
  {
    "id": "item_047",
    "date": "1978-02",
    "displayDate": "February 1978",
    "sortDate": "1978-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Online information retrieval in the University Library",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The University Library evaluated online information retrieval as an alternative or supplement to printed indexes and abstracts. Databases included BLAISE-MEDLINE, ESA-RECON, SDC-ORBIT, Lockheed-DIALOG, SCISEARCH and HIST ABS.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_061"
    ],
    "media": [
      "m_070"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong early digital humanities / library information retrieval item, especially because HIST ABS connects to historical research. Original item ID: item_019."
  },
  {
    "id": "item_048",
    "date": "1978-05",
    "displayDate": "May 1978",
    "sortDate": "1978-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Motorola M6800 cross-assembler",
    "itemType": "event",
    "themeTags": [
      "Technology"
    ],
    "summary": "A Motorola M6800 cross-assembler was available by 1978.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_062"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for early microprocessor / development-tool history. Original item ID: item_021."
  },
  {
    "id": "item_049",
    "date": "1978-10",
    "displayDate": "October 1978",
    "sortDate": "1978-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the October 1978 Newsletter index entry.",
    "title": "Computer aids to learning languages",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Computers were beginning to be explored as tools for language teaching and learning.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_062"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 1978 Newsletter index entry. Original item ID: item_022."
  },
  {
    "id": "item_050",
    "date": "1979",
    "displayDate": "1979",
    "sortDate": "1979-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The Chronological Report states that the Texan Burroughs Corporation used SASL for software of a hardware combinator reduction machine in 1979. Year only. No exact event date is given in the source.",
    "title": "Burroughs Corporation",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Chronological Report connects Burroughs Corporation with industrial interest in SASL.",
    "whyItMatters": "",
    "relatedPeople": [
      "item_034 David Turner"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Could support a local-to-global programming language story. could only confirm the merger detail from Chronological Report Original item ID: ORG014."
  },
  {
    "id": "item_051",
    "date": "1979",
    "displayDate": "1979",
    "sortDate": "1979-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Graphics and mathematical software accessed",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "Software available in 1979 included GINO-F, GINOGRAF, SURFACE II, NAG, PAFEC, GENSTAT and SIMULA.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_063"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for the early graphics / visualisation software line. Original item ID: item_026."
  },
  {
    "id": "item_052",
    "date": "1979",
    "displayDate": "1979",
    "sortDate": "1979-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Current materials connect Morrison with S-algol in 1979 and PS-algol in 1983. Year only. No exact event date is given in the source.",
    "title": "Ron Morrison",
    "itemType": "person",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "People"
    ],
    "summary": "Ron Morrison is associated with S-algol and later PS-algol-related work at St Andrews.",
    "whyItMatters": "His work on S-algol and PS-algol made him an important figure in programming-language research at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_015"
    ],
    "media": [
      "m_020",
      "m_007"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Story angle: programming language research at St Andrews moved from ALGOL-family design toward persistence and database-oriented programming. Supports Morrison’s connection with S-algol and St Andrews programming language research. The John Honey Coffee area image caption identifies Ron Morrison as being in the back row, second from left. Evidence quote: S-algol Original item ID: P008."
  },
  {
    "id": "item_053",
    "date": "1979",
    "displayDate": "1979",
    "sortDate": "1979-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The S-algol Reference Manual is dated 1979. The Chronological Report also links Morrison with S-algol in 1979. Year only. No exact event date is given in the source.",
    "title": "S-algol",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "S-algol was an ALGOL-family programming language associated with Ron Morrison’s programming language research at St Andrews.",
    "whyItMatters": "S-algol became the basis for PS-algol and later work on persistent programming.",
    "relatedPeople": [
      "item_052 Ron Morrison",
      "item_414 Jack Cole",
      "item_006 Tony Davie"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_015"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'. Story angle: Morrison’s language-design work created a platform for later persistent programming language research. The manual links S-algol to later PS-algol-related work. Supports S-algol as a programming language in the ALGOL tradition. Evidence quote: S-algol Original item ID: PR005."
  },
  {
    "id": "item_054",
    "date": "1979-03",
    "displayDate": "March 1979",
    "sortDate": "1979-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1979 Newsletter index.",
    "title": "Tektronix graphics terminal",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "A Tektronix terminal provided graphical display facilities by 1979.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_063"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1979 Newsletter index. Original item ID: item_023."
  },
  {
    "id": "item_055",
    "date": "1979-07",
    "displayDate": "July 1979",
    "sortDate": "1979-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Microfiche output",
    "itemType": "event",
    "themeTags": [
      "Technology"
    ],
    "summary": "Microfiche output appears in the 1979 Newsletter index, showing an early form of large-scale document or output preservation.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_063"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for the material history of output and archiving. Original item ID: item_024."
  },
  {
    "id": "item_056",
    "date": "1979-08",
    "displayDate": "August 1979",
    "sortDate": "1979-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1979 Newsletter index.",
    "title": "Microprocessor development system",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "A microprocessor development system appears in the 1979 Newsletter index, connecting the central computing environment with emerging microprocessor work.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_063"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1979 Newsletter index. Original item ID: item_025."
  },
  {
    "id": "item_057",
    "date": "1980",
    "displayDate": "1980",
    "sortDate": "1980-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Chronological Report places this trend in the 1980s and 1990s; no exact date is supplied. Approximate date. No exact event date is given in the source.",
    "title": "AI and expert systems research develops at St Andrews",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Technology"
    ],
    "summary": "The report states that research interest in artificial intelligence, including expert systems and OCR-related systems, began to grow during the 1980s and 1990s.",
    "whyItMatters": "The growth of expert systems and OCR expanded AI research at St Andrews beyond the earlier use of ELIZA.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Useful as a thematic event, but needs external corroboration before public use. Currently supported only by Chronological Report p. 14–15. could only confirm this trend from Chronological Report p. Original item ID: E033."
  },
  {
    "id": "item_058",
    "date": "1980",
    "displayDate": "1980",
    "sortDate": "1980-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Chronological Report says this happened in the same year as the March 1980 microcomputer purchase; no exact date is given. Year only. No exact event date is given in the source.",
    "title": "Computing Laboratory conducts census of University-owned machines",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "Because many machines were being purchased around the University, the Computing Laboratory had to conduct a census to determine how many machines were actually owned.",
    "whyItMatters": "The census shows how quickly computer ownership was spreading beyond a few central machines.",
    "relatedPeople": [],
    "relatedEquipment": [
      "item_061 Cromemco System 3 and Digital MINC delivered"
    ],
    "sources": [
      "src_001",
      "src_016"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Strong anecdote for showing decentralisation of computing. Chronological Report p. 10 is the direct source for the census; Original item ID: E015."
  },
  {
    "id": "item_059",
    "date": "1980",
    "displayDate": "1980",
    "sortDate": "1980-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Chronological Report presents this as a period trend rather than a single dated event. Approximate date. No exact event date is given in the source.",
    "title": "Computing interest expands in arts and sciences",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "Computing facilities were increasingly used outside the laboratory and computational sciences, including by arts, humanities, medicine, biblical criticism and modern languages users.",
    "whyItMatters": "Computing was now being used across the arts, humanities, medicine and languages, rather than only for scientific work.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_021",
      "src_023"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Useful section-level event for the arts/sciences material. Report provides the broad trend; SRC021 and SRC023 provide concrete examples of arts/language computing. Treat this as a period-level contextual event Original item ID: E032."
  },
  {
    "id": "item_060",
    "date": "1980",
    "displayDate": "1980",
    "sortDate": "1980-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The April 1980 newsletter states that the IBM 360/44 was replaced by a Digital Equipment dual-processor VAX 11/780 system. The Chronological Report image caption gives 1982 for the VAX780 photograph. Year only. No exact event date is given in the source.",
    "title": "VAX 11/780 system",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Firsts and Milestones",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The VAX 11/780 system replaced the IBM 360/44 during the 1980 changeover.",
    "whyItMatters": "The VAX replaced the IBM 360/44 and began a new phase of central computing at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_012"
    ],
    "media": [
      "m_006"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'hardware_devices'. Could be used with the report’s thunderstorm anecdote to show the fragility of old infrastructure during transition. The April 1980 newsletter describes a Digital Equipment dual-processor VAX 11/780 system and changeover arrangements from the IBM 360/44. Supports the VAX 11/780 replacement claim. The VAX image source is currently only identified in the Chronological Report. Evidence quote: replacement of the IBM 360/44 with a Digital Equipment dual-processor VAX 11/780 system Original item ID: H004."
  },
  {
    "id": "item_062",
    "date": "1980",
    "displayDate": "1980",
    "sortDate": "1980-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The April 1980 newsletter states that introductory VAX lectures and demonstrations were planned for 19–30 May 1980, the IBM 360/44 service ended on 30 June 1980, and full service on both VAX machines was planned from 1 September 1980. No single exact event date covers the whole changeover.",
    "title": "Users prepare for the move from IBM 360/44 to VAX",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School",
      "Firsts and Milestones",
      "Places and Institutions"
    ],
    "summary": "In 1980 the Computing Laboratory changed over from the IBM 360/44 to a Digital Equipment dual-processor VAX 11/780 system. The transition included introductory lectures and demonstrations on the VAX facilities, the termination of the IBM 360/44 service on 30 June, and later full courses on the VAX and its available languages.",
    "whyItMatters": "The lectures and courses helped users adapt to the new VAX system.",
    "relatedPeople": [
      "item_028 Robin Erskine"
    ],
    "relatedEquipment": [
      "item_060 VAX 11/780 system",
      "item_027 IBM 360/44 installed"
    ],
    "sources": [
      "src_012",
      "src_009",
      "src_001"
    ],
    "media": [
      "m_010",
      "m_011"
    ],
    "imageNote": "",
    "internalNote": "[item_062] From prototype content dataset.xlsx sheet 'teaching_curriculum'. Could support a story about users adapting to new computing systems. Supports planned VAX training courses. Evidence quote: Full courses on the VAX, its facilities and available languages will be given from October onwards. Original item ID: TC004. | [item_063] From prototype content dataset.xlsx sheet 'events'. Could be paired with the image described in Cole’s account as the last day of the IBM 360/44. Supports exact end date of IBM 360/44 service. Evidence quote: The date of 30th June for the termination of the 360/44 service is therefore a firm date. Original item ID: E013. | [item_066] From prototype content dataset.xlsx sheet 'events'. Could be used as a dramatic infrastructure story because the Chronological Report describes a thunderstorm nearly causing the old IBM 360/44 to fail before changeover. Supports the 1980 VAX changeover. The thunderstorm story appears in SRC001. Evidence quote: replacement of the IBM 360/44 with a Digital Equipment dual-processor VAX 11/780 system Original item ID: E012. | Merged during duplicate/content-related consolidation with: item_063; item_066."
  },
  {
    "id": "item_061",
    "date": "1980-03",
    "displayDate": "March 1980",
    "sortDate": "1980-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the March 1980 newsletter issue. No exact delivery date is given in the source.",
    "title": "Cromemco System 3 and Digital MINC delivered",
    "itemType": "event; equipment",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Firsts and Milestones",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Cromemco System 3 and Digital MINC systems had been delivered to the Computing Laboratory, with users invited to contact Phillip Robertson to use or discuss the systems.",
    "whyItMatters": "",
    "relatedPeople": [
      "item_402 Phillip Robertson"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_016"
    ],
    "media": [
      "m_036",
      "m_037"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Useful as the opening event for the 1980s personal computing section. Evidence quote: The Cromemco System 3 and the Digital MINC systems have now been delivered. Original item ID: E014. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the March 1980 Newsletter. Original item ID: item_028. Original item ID: item_029. Merged from original items: item_072; item_073; item_074. From prototype content dataset.xlsx sheet 'hardware_devices'. Explore the arrival of the Cromemco System 3 as an early sign that computing at St Andrews was beginning to move beyond large central machines into smaller, more experimental microprocessor systems. Original item ID: H005. Explore the Digital MINC as part of the same early microprocessor moment: why were these smaller systems useful, who was expected to try them, and how did users learn what they could do? Evidence quote: The Cromemco System 3 and the Digital MINC systems have now been delivered. Original item ID: H006. Merged from original item IDs: item_365; item_371."
  },
  {
    "id": "item_064",
    "date": "1980-07",
    "displayDate": "July 1980",
    "sortDate": "1980-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Multi-month transition; the April 1980 Newsletter gives specific changeover details.",
    "title": "IBM 360/44 to VAX systems transition",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "During the 1980 changeover, Digital Equipment VAX systems replaced the IBM 360/44.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_012"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Multi-month transition; the April 1980 Newsletter gives specific changeover details. Original item ID: item_027."
  },
  {
    "id": "item_065",
    "date": "1980-08",
    "displayDate": "August 1980",
    "sortDate": "1980-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the August 1980 Newsletter index entry.",
    "title": "VAX acceptance trials",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Acceptance trials were carried out as the new VAX systems were brought into service.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_064"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the August 1980 Newsletter index entry. Original item ID: item_030."
  },
  {
    "id": "item_067",
    "date": "1980-11",
    "displayDate": "November 1980",
    "sortDate": "1980-11-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the November 1980 Newsletter index entry.",
    "title": "GHOST-80 graphical output system",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "GHOST-80 was a graphical output system used at St Andrews.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_064"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the November 1980 Newsletter index entry. Original item ID: item_031."
  },
  {
    "id": "item_068",
    "date": "1980-12",
    "displayDate": "December 1980",
    "sortDate": "1980-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "SRCnet",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "SRCnet is listed in the 1980 Newsletter index.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_064"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Original item ID: item_032."
  },
  {
    "id": "item_069",
    "date": "1981",
    "displayDate": "1981",
    "sortDate": "1981-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "DLS archive gives year-level date only. Useful for text production and scholarly publishing history. No exact event date is given in the source.",
    "title": "Computer Typesetting with TeX",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The 1981 Distinguished Lecture Series included a lecture on computer typesetting with TeX.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_049"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: DLS archive gives year-level date only. Useful for text production and scholarly publishing history. Original item ID: item_036."
  },
  {
    "id": "item_070",
    "date": "1981-03",
    "displayDate": "March 1981",
    "sortDate": "1981-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the March 1981 Newsletter index.",
    "title": "QUME high-quality printers",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "QUME high-quality printers appear in the 1981 Newsletter index, representing high-quality text output before later laser-printing and desktop-publishing systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_065"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the March 1981 Newsletter index. Original item ID: item_033."
  },
  {
    "id": "item_071",
    "date": "1981-08",
    "displayDate": "August 1981",
    "sortDate": "1981-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Report says the University began considering installation in August 1981 and that the ring had been installed by 1984; April 1987 newsletter discusses Cambridge Ring problems. Date certainty: mixed No exact event date is given in the source. Event not given with a specific day; time is taken from the 1981 Newsletter index entries.",
    "title": "Cambridge Ring network",
    "itemType": "software_network_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Cambridge Ring network was considered from 1981, installed by 1984 according to the report, and later became the subject of support/performance concerns in 1987.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_019",
      "src_065"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Keep distinction between report-based installation chronology and externally documented 1987 support issues. Original item ID: SYS007. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1981 Newsletter index entries. Original item ID: item_034. Merged from original items: item_084; item_086."
  },
  {
    "id": "item_072",
    "date": "1981-08",
    "displayDate": "August 1981",
    "sortDate": "1981-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from Chronological Report p. 11–12. Month only. No exact event date is given in the source.",
    "title": "Post Office Packet Switching Service access",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "St Andrews gained access to the Post Office packet-switching network in August 1981.",
    "whyItMatters": "This gave St Andrews users access to remote computing services before the University joined JANET.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_065",
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: source detail should be treated as network-history context. Original item ID: item_035. | From prototype content dataset.xlsx sheet 'software_network_systems'. could only confirm this exact date/detail from Chronological Report p. 11–12. Original item ID: SYS017. | Merged duplicate original rows: item_094; item_095"
  },
  {
    "id": "item_073",
    "date": "1982–1986",
    "displayDate": "1982–1986",
    "sortDate": "1982-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date range reflects related newsletter index references from 1982 and 1986. No single exact event date covers the whole ecosystem.",
    "title": "Microcomputers and office software spread across the University",
    "itemType": "equipment",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "During the 1980s, a growing range of microcomputers and office programs entered use across the University, including the Intertec Superbrain, IBM PC/XT, Sinclair QL, WordStar, Turbo Pascal and dBase III.",
    "whyItMatters": "Microcomputers and office software brought computing closer to individual users and everyday work.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_066",
      "src_071"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_073] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This is a grouped ecosystem item rather than a single device. Original item ID: item_039. | [item_092] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This is a grouped ecosystem item rather than a single device. Original item ID: item_063. | Merged during duplicate/content-related consolidation with: item_092."
  },
  {
    "id": "item_074",
    "date": "1982-05",
    "displayDate": "May 1982",
    "sortDate": "1982-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the May 1982 Newsletter index. Event not given with a specific day; time is taken from the 1984 Newsletter index.",
    "title": "National facilities for computing in the Arts",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "National facilities for computing in the Arts appear again in the 1984 Newsletter index, reinforcing the continuity of UK arts-computing support.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_066",
      "src_068"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the May 1982 Newsletter index. Original item ID: item_041. | From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1984 Newsletter index. Original item ID: item_051. | Merged duplicate original rows: item_098; item_111"
  },
  {
    "id": "item_075",
    "date": "1982-10",
    "displayDate": "October 1982",
    "sortDate": "1982-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the October 1982 Newsletter index.",
    "title": "GIGI colour graphics terminal and Benson electrostatic plotter",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The GIGI colour terminal and Benson electrostatic plotter added new options for displaying and producing graphics.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_066"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 1982 Newsletter index. Original item ID: item_037."
  },
  {
    "id": "item_076",
    "date": "1982-10",
    "displayDate": "October 1982",
    "sortDate": "1982-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the October 1982 Newsletter index. Strong early digital humanities item.",
    "title": "Oxford Concordance Package",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The Oxford Concordance Package supported the analysis of literary and linguistic texts.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_066"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 1982 Newsletter index. Strong early digital humanities item. Original item ID: item_040."
  },
  {
    "id": "item_077",
    "date": "1982-12",
    "displayDate": "December 1982",
    "sortDate": "1982-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1982 Newsletter index entries.",
    "title": "ICL PERQ workstation and VAX file transfer",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Files could be transferred between the ICL PERQ workstation and the central VAX system.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_066"
    ],
    "media": [
      "m_039"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1982 Newsletter index entries. Original item ID: item_038."
  },
  {
    "id": "item_078",
    "date": "1983",
    "displayDate": "1983",
    "sortDate": "1983-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1983 Newsletter index.",
    "title": "ALLC course on computing in the humanities",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "An ALLC course on computing in the humanities appears in the 1983 Newsletter index, giving a direct early humanities-computing education link.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_067"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1983 Newsletter index. Original item ID: item_043."
  },
  {
    "id": "item_079",
    "date": "1983",
    "displayDate": "1983",
    "sortDate": "1983-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "BBC Micro and early microcomputer ecosystem",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The University’s growing microcomputer provision included BBC, Torch, IBM and Zenith systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_067"
    ],
    "media": [
      "m_040"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This is a grouped device-ecosystem item. Original item ID: item_042."
  },
  {
    "id": "item_080",
    "date": "1983",
    "displayDate": "1983",
    "sortDate": "1983-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "DLS archive gives year-level date only. No exact event date is given in the source.",
    "title": "Computer Algebra DLS",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The 1983 Distinguished Lecture Series included a lecture on computer algebra.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_049"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: DLS archive gives year-level date only. Original item ID: item_044."
  },
  {
    "id": "item_081",
    "date": "1983",
    "displayDate": "1983",
    "sortDate": "1983-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The Chronological Report gives 1983 for PS-algol. The S-algol Reference Manual also records that S-algol was used as the basis for PS-algol in 1983 as part of the PISA project. Year only. No exact event date is given in the source. Date comes from the existing material organisation data. Useful as programming-language research context.",
    "title": "PS-algol and persistent programming research",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Technology"
    ],
    "summary": "PS-algol was built on the S-algol lineage and was associated with persistent programming research at St Andrews.",
    "whyItMatters": "",
    "relatedPeople": [
      "item_052 Ron Morrison"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_015"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'. Story angle: PS-algol changed how programs handled long-lived data by building persistence into the language model. The report states that PS-algol found users in academia and industry; verify the specific industry-use claim before prominent use. This quote comes from the Chronological Report; use SRC015 for S-algol lineage context. Evidence quote: PS-algol was the world’s first persistent programming language Original item ID: PR006. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Date comes from the existing material organisation data. Useful as programming-language research context. Original item ID: item_045. Merged from original items: item_095; item_096."
  },
  {
    "id": "item_082",
    "date": "1984",
    "displayDate": "1984",
    "sortDate": "1984-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1984 Newsletter index.",
    "title": "BBC Micro cassette data transfer to VAX",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Data stored on BBC Micro cassettes could be transferred to the VAX.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_068"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1984 Newsletter index. Original item ID: item_048."
  },
  {
    "id": "item_083",
    "date": "1984",
    "displayDate": "1984",
    "sortDate": "1984-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from Chronological Report p. 12. Year only. No exact event date is given in the source.",
    "title": "JANET connection",
    "itemType": "event; system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The report states that by 1984 St Andrews had gained connectivity with JANET, enabling email, file transfer and remote access over the network.",
    "whyItMatters": "JANET connected St Andrews to the wider UK academic network and its shared services.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_068",
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact connection details should be checked further if this becomes a major network-history node. Original item ID: item_050. | From prototype content dataset.xlsx sheet 'software_network_systems'. could only confirm the exact 1984 connection date from Chronological Report p. 12. Original item ID: SYS008. | Merged duplicate original rows: item_108; item_109"
  },
  {
    "id": "item_084",
    "date": "1984",
    "displayDate": "1984",
    "sortDate": "1984-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1984 Newsletter index.",
    "title": "Library terminal cluster",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "A cluster of terminals brought access to computing facilities into the University Library.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_068"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1984 Newsletter index. Original item ID: item_046."
  },
  {
    "id": "item_085",
    "date": "1984-02",
    "displayDate": "February 1984",
    "sortDate": "1984-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "NEC Spinwriter",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The NEC Spinwriter offered higher-quality printed output than standard printers.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_068"
    ],
    "media": [
      "m_041"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for the printing and text-output equipment timeline. Original item ID: item_047."
  },
  {
    "id": "item_086",
    "date": "1984-08",
    "displayDate": "August 1984",
    "sortDate": "1984-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1984 Newsletter index.",
    "title": "Cambridge Ring, PACX and JANET",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Cambridge Ring, PACX and JANET appear in the 1984 Newsletter index, showing the development of local and national academic networking infrastructure.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_068"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1984 Newsletter index. Original item ID: item_049."
  },
  {
    "id": "item_087",
    "date": "1985",
    "displayDate": "1985",
    "sortDate": "1985-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1985 Newsletter index.",
    "title": "Expert systems",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Expert systems appear in the 1985 Newsletter index, showing emerging interest in AI and knowledge-based systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_069"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1985 Newsletter index. Original item ID: item_055."
  },
  {
    "id": "item_088",
    "date": "1985",
    "displayDate": "1985",
    "sortDate": "1985-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Microcomputer expansion in 1985",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Microcomputer provision expanded in 1985 with equipment from Acorn, Apricot, Epson, IBM and Sinclair.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_069"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This is a grouped device-ecosystem item. Original item ID: item_054."
  },
  {
    "id": "item_089",
    "date": "1985-11",
    "displayDate": "November 1985",
    "sortDate": "1985-11-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the November 1985 Newsletter index.",
    "title": "KERMIT file transfer protocol",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "KERMIT appears in the 1985 Newsletter index as a file-transfer protocol, connecting microcomputers, terminals and central systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_069"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the November 1985 Newsletter index. Original item ID: item_053."
  },
  {
    "id": "item_090",
    "date": "1985-12",
    "displayDate": "December 1985",
    "sortDate": "1985-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "VAX system and disk-capacity upgrades",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Upgrades to the VAX processors, SAVA memory and user disk space increased the capacity of the central service.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_069"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This is a grouped infrastructure-upgrade item. Original item ID: item_052."
  },
  {
    "id": "item_091",
    "date": "1986",
    "displayDate": "1986",
    "sortDate": "1986-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1986 Newsletter index.",
    "title": "Graphics Kernel System",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "GKS, the Graphics Kernel System, appears in the 1986 Newsletter index, connecting St Andrews graphics work to wider graphics standards.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_071"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1986 Newsletter index. Original item ID: item_061."
  },
  {
    "id": "item_093",
    "date": "1986-07",
    "displayDate": "July 1986",
    "sortDate": "1986-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the July 1986 Newsletter. Strong representative storage-equipment item.",
    "title": "DEC TU78 magnetic tape drive replaces TU77",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "A TU77 magnetic tape drive on SAVA was replaced by a DEC TU78. The TU78 could read and write 6250bpi or 1600bpi tapes, improving storage density and compatibility.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_070"
    ],
    "media": [
      "m_043"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the July 1986 Newsletter. Strong representative storage-equipment item. Original item ID: item_056."
  },
  {
    "id": "item_094",
    "date": "1986-07",
    "displayDate": "July 1986",
    "sortDate": "1986-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong “computing enters the humanities” item. Event not given with a specific day; time is taken from the July 1986 Newsletter.",
    "title": "Humanities Communication Newsletter introduced to Arts departments",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The Humanities Communication Newsletter was introduced to Arts departments, with topics including LANGANAL, a computer-assisted Old French/English Dictionary, archaeology computing and the National Sound Archive.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_070"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong “computing enters the humanities” item. Event not given with a specific day; time is taken from the July 1986 Newsletter. Original item ID: item_059."
  },
  {
    "id": "item_095",
    "date": "1986-07",
    "displayDate": "July 1986",
    "sortDate": "1986-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong non-English text / early digital humanities / scholarly writing item. Event not given with a specific day; time is taken from the July 1986 Newsletter.",
    "title": "Nota Bene multilingual word processor",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Nota Bene was trialled on an IBM PC/XT. It supported German, French and Spanish display and printing, and included indexed notes and text-base functions for academic writing.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_070"
    ],
    "media": [
      "m_044"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong non-English text / early digital humanities / scholarly writing item. Event not given with a specific day; time is taken from the July 1986 Newsletter. Original item ID: item_058."
  },
  {
    "id": "item_096",
    "date": "1986-07",
    "displayDate": "July 1986",
    "sortDate": "1986-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong data migration and character-encoding item. Event not given with a specific day; time is taken from the July 1986 Newsletter.",
    "title": "Punched cards converted to VAX/VMS disk files",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Punched cards from the IBM 360/44 era were converted into VAX/VMS disk files, with automatic EBCDIC to ASCII conversion.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_070"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong data migration and character-encoding item. Event not given with a specific day; time is taken from the July 1986 Newsletter. Original item ID: item_057."
  },
  {
    "id": "item_097",
    "date": "1986-08",
    "displayDate": "August 1986",
    "sortDate": "1986-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the 1986 Newsletter index.",
    "title": "GHOST-80 and Tektronix T4662 pen plotter",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "GHOST-80 produced output through the Tektronix T4662 pen plotter.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_071"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the 1986 Newsletter index. Original item ID: item_060."
  },
  {
    "id": "item_098",
    "date": "1986-10",
    "displayDate": "October 1986",
    "sortDate": "1986-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the October 1986 newsletter issue. The source says the system had recently been purchased, but no exact purchase date is given.",
    "title": "Apple Desktop Publishing System with Macintosh Plus and LaserWriter Plus",
    "itemType": "equipment",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Firsts and Milestones",
      "Places and Institutions",
      "Technology",
      "Humanities Computing",
      "Research & Public Impact",
      "Teaching & Student Use"
    ],
    "summary": "The Computing Laboratory purchased an Apple Desktop Publishing System consisting of a Macintosh Plus, LaserWriter Plus, Macintosh 800K External Drive and Macintosh Hard Disk 20.",
    "whyItMatters": "The system introduced graphical desktop publishing and high-quality laser printing to the Computing Laboratory.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_017"
    ],
    "media": [
      "m_045"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_098] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 1986 Newsletter. Strong equipment item for DTP and scholarly publishing. Original item ID: item_062. | From prototype content dataset.xlsx sheet 'hardware_devices'. Use the Apple Desktop Publishing System to tell a story about computing becoming visibly useful for communication, layout, printing and document production, not only numerical or scientific work. Bundle listed in source: Macintosh Plus, LaserWriter Plus, Macintosh 800K External Drive, Macintosh Hard Disk 20. Evidence quote: The Computing Laboratory has recently purchased an Apple Desktop Publishing System. Original item ID: H007. | Merged duplicate original rows: item_125; item_386 From prototype content dataset.xlsx sheet 'events'. Pairs well with later Macintosh virus and language-support stories. Original item ID: E016. Merged from original item IDs: item_348. | [item_099] From prototype content dataset.xlsx sheet 'hardware_devices'. Use the LaserWriter Plus to explore how printing and desktop publishing changed the material outputs of computing: posters, handouts, newsletters, course materials and other polished documents. Original item ID: H009. | [item_100] From prototype content dataset.xlsx sheet 'hardware_devices'. Explore the Macintosh Plus as a doorway into graphical, user-facing computing at St Andrews, especially when compared with earlier terminal-based or mainframe-style use. Original item ID: H008. | Merged during duplicate/content-related consolidation with: item_099; item_100."
  },
  {
    "id": "item_101",
    "date": "1987–1988",
    "displayDate": "1987–1988",
    "sortDate": "1987-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date range is based on the February and April 1987 newsletter reports on the planned Zenith classroom and the January 1988 workshop schedule. No exact opening date is given in the sources.",
    "title": "Networked Zenith PCs in the North Street classroom",
    "itemType": "event; equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School",
      "Firsts and Milestones"
    ],
    "summary": "The Old Union Building in North Street was planned as the location for a computer classroom with about 15 Zenith 159 workstations, and by January 1988 the Old Union PC Classroom was used for MS-DOS and Microsoft Word workshops.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_019",
      "src_001",
      "src_020",
      "src_018"
    ],
    "media": [
      "m_046"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Pairs with M012 as a visual of wider student computing access, although M012 itself has date unknown. External April 1987 newsletter confirms location, machine type, approximate number and network plan; Chronological Report p. 10 summarises this as a 1987 classroom with 15 networked Zenith PCs. M012 is related but not a verified photograph of this exact classroom. Original item ID: E018. From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG016. From prototype content dataset.xlsx sheet 'teaching_curriculum'. Original item ID: TC006. From prototype content dataset.xlsx sheet 'software_network_systems'. Source mentions North Star hardware and Novell Netware software. Original item ID: SYS009. Merged from original items: item_435; item_436; item_437; item_438. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the February 1987 Newsletter. Strong teaching-equipment item. Original item ID: item_064. Evidence quote: It has been agreed that the Zenith Z-159 personal computer will be used as the standard workstation in the new computer classroom. Original item ID: TC005. | From prototype content dataset.xlsx sheet 'events'. Good technical lead-in to the Old Union classroom. Original item ID: E017. | Merged duplicate original rows: item_483; item_485 From prototype content dataset.xlsx sheet 'hardware_devices'. Explore the Zenith Z-159 as the machine that turned personal computing into teaching infrastructure: a standard workstation, in a classroom, networked for shared use rather than owned by one specialist user. Source describes MS-DOS, Enhanced Colour Graphics Adapter, hard disk capacity and networking plans. Original item ID: H010. Merged from original items: item_468; item_469. Merged from original item IDs: item_105; item_437."
  },
  {
    "id": "item_102",
    "date": "1987-02",
    "displayDate": "February 1987",
    "sortDate": "1987-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong early digital humanities / literary computing item. Event not given with a specific day; time is taken from the February 1987 Newsletter.",
    "title": "ALLC Journal and humanities computing",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The ALLC Journal was recommended to Arts departments. Topics included bilingual dictionaries, minority languages, literary text analysis, Shakespeare and Marlowe vocabulary analysis, and a Chaucer thesaurus.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_018"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong early digital humanities / literary computing item. Event not given with a specific day; time is taken from the February 1987 Newsletter. Original item ID: item_066."
  },
  {
    "id": "item_103",
    "date": "1987-02",
    "displayDate": "February 1987",
    "sortDate": "1987-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong non-English text and printing-equipment item. Event not given with a specific day; time is taken from the February 1987 Newsletter.",
    "title": "Epson SQ-2000 Greek character package",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "A Greek character package was created for the Epson SQ-2000 inkjet printer using BBC BASIC. The program could potentially be adapted for the Epson FX-80.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_018"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong non-English text and printing-equipment item. Event not given with a specific day; time is taken from the February 1987 Newsletter. Original item ID: item_065."
  },
  {
    "id": "item_104",
    "date": "1987-03",
    "displayDate": "March 1987",
    "sortDate": "1987-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Amstrad PC1512 hard disk backup issue",
    "itemType": "event; equipment",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A fault in the backup program affected the hard-disk version of the Amstrad PC1512. Corrected MS-DOS utilities were later provided.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_072"
    ],
    "media": [
      "m_049"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful as evidence of PC adoption and maintenance problems in the late 1980s. Original item ID: item_069."
  },
  {
    "id": "item_105",
    "date": "1987-03",
    "displayDate": "March 1987",
    "sortDate": "1987-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Apple LaserWriter access from VAX",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Apple LaserWriter became usable from the VAX environment through a Macintosh in the Computing User Area, initially using Diablo 630 daisywheel printer emulation.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_072"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Important for the shift from mechanical printing to laser printing and desktop publishing. Original item ID: item_067."
  },
  {
    "id": "item_106",
    "date": "1987-03",
    "displayDate": "March 1987",
    "sortDate": "1987-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong humanities computing and academic-networking item. Event not given with a specific day; time is taken from the March 1987 Newsletter.",
    "title": "HUMBUL humanities bulletin board",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "St Andrews users could access the HUMBUL humanities bulletin board at Leicester through VMS PAD using CALL LE.HUMBUL.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_072"
    ],
    "media": [
      "m_071"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong humanities computing and academic-networking item. Event not given with a specific day; time is taken from the March 1987 Newsletter. Original item ID: item_068."
  },
  {
    "id": "item_107",
    "date": "1987-03-11",
    "displayDate": "11 March 1987",
    "sortDate": "1987-03-11",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "The April 1987 newsletter reports a Computer Users Committee meeting held on 11 March 1987. Exact date. No exact event date is given in the source.",
    "title": "CAMTEC controversy over Cambridge Ring",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Computer Users Committee discussed Cambridge Ring connection problems, unreliable CAMTEC software and an unsatisfactory relationship with CAMTEC, including concerns that CAMTEC was marketing Ethernet products while support for Cambridge Ring technology suffered.",
    "whyItMatters": "The discussion records the technical and contractual problems the University faced when developing its local network.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_019"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Useful for showing the messiness of early networking procurement and support. Evidence quote: The relationship with CAMTEC was unsatisfactory - they now marketed other products (such as Ethernet) to the detriment of their support for Cambridge Ring technology. Original item ID: E020."
  },
  {
    "id": "item_108",
    "date": "1987-04",
    "displayDate": "April 1987",
    "sortDate": "1987-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the April 1987 newsletter issue naming Novell NetWare in the planned classroom network. No exact implementation date is given in the source.",
    "title": "Novell NetWare classroom network software",
    "itemType": "software_network_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Novell Netware software was planned for the Old Union computer classroom network.",
    "whyItMatters": "NetWare allowed classroom computers to share files, printers and other network resources.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_019"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Original item ID: SYS010."
  },
  {
    "id": "item_109",
    "date": "1987-04-11",
    "displayDate": "11 April 1987",
    "sortDate": "1987-04-11",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact event dates are given in the Newsletter. Useful for humanities computing and teaching history.",
    "title": "Computers, Communication and the Undergraduate",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "A Southampton conference addressed the introduction of computing into the humanities curriculum.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_072"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact event dates are given in the Newsletter. Useful for humanities computing and teaching history. Original item ID: item_070."
  },
  {
    "id": "item_110",
    "date": "1987-05",
    "displayDate": "May 1987",
    "sortDate": "1987-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the May 1987 Newsletter.",
    "title": "IBM PS/2 and IBM 6150 demonstration",
    "itemType": "software_system; equipment; event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "IBM demonstrated the Personal System/2 range, including PS/2 Models 30 and 50, and the RISC-based IBM 6150 system.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_073"
    ],
    "media": [
      "m_050"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the May 1987 Newsletter. Original item ID: item_071."
  },
  {
    "id": "item_111",
    "date": "1987-05",
    "displayDate": "May 1987",
    "sortDate": "1987-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong text-retrieval and database item. Event not given with a specific day; time is taken from the May 1987 Newsletter.",
    "title": "Memex Textract text retrieval system",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Memex Textract was installed for testing on a MicroVAX in the Chemistry Department. It could store large amounts of compressed text and support complex searching across databases.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_073"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong text-retrieval and database item. Event not given with a specific day; time is taken from the May 1987 Newsletter. Original item ID: item_073."
  },
  {
    "id": "item_112",
    "date": "1987-06",
    "displayDate": "June 1987",
    "sortDate": "1987-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Discontinuation of the Data Preparation Service",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The Data Preparation Service was discontinued. Users were encouraged to enter data on IBM PCs or BBC micros and then transfer it to the VAX systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_074"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for showing the shift from centralised data preparation to user-managed data entry. Original item ID: item_076."
  },
  {
    "id": "item_113",
    "date": "1987-06",
    "displayDate": "June 1987",
    "sortDate": "1987-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Kermit with IBM PC",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "MS-DOS Kermit supported file transfer between IBM PCs and VAX systems, as well as VT100 terminal emulation.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_074"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for microcomputer-to-central-system connectivity. Original item ID: item_075."
  },
  {
    "id": "item_114",
    "date": "1987-06",
    "displayDate": "June 1987",
    "sortDate": "1987-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong non-English text and scholarly typography item. Event not given with a specific day; time is taken from the June 1987 Newsletter.",
    "title": "Macintosh fonts for scholarly and non-English text",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Boston College Font Project Release 4.0 for Macintosh provided fonts for Cyrillic, Armenian, Greek and Western-language scholarly transliteration.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_074"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong non-English text and scholarly typography item. Event not given with a specific day; time is taken from the June 1987 Newsletter. Original item ID: item_074."
  },
  {
    "id": "item_115",
    "date": "1987-06-25",
    "displayDate": "25 June 1987",
    "sortDate": "1987-06-25",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the Newsletter. Useful for RISC and microcomputer history.",
    "title": "Acorn RISC-based machines presentation",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Acorn representatives visited St Andrews to introduce forthcoming Acorn machines based on a RISC processor.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_073"
    ],
    "media": [
      "m_051"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the Newsletter. Useful for RISC and microcomputer history. Original item ID: item_072."
  },
  {
    "id": "item_116",
    "date": "1987-07",
    "displayDate": "July 1987",
    "sortDate": "1987-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the July 1987 newsletter issue. No exact installation date is given in the source.",
    "title": "DEC MicroVAX II computer and DECnet expansion",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A DEC MicroVAX II was installed to maintain a VAX/VMS service while the main SAVA system was upgraded, and DECnet connected machines including SAVA, SAVB, SAVC, STAR and CRAB.",
    "whyItMatters": "The MicroVAX and DECnet expansion increased network capacity while helping services continue during system upgrades..",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_075"
    ],
    "media": [
      "m_052"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_116] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong representative hardware item. Event not given with a specific day; time is taken from the July 1987 Newsletter. Original item ID: item_077. | [item_117] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for a network or relationship visualisation. Original item ID: item_078. | Merged during duplicate/content-related consolidation with: item_117."
  },
  {
    "id": "item_118",
    "date": "1987-07",
    "displayDate": "July 1987",
    "sortDate": "1987-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "GINO graphics software withdrawal discussion",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "GINO graphics software was considered for withdrawal because most graphics use had moved to GHOST-80 or SURFACE-II.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_075"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for showing software lifecycle and replacement. Original item ID: item_082."
  },
  {
    "id": "item_119",
    "date": "1987-07",
    "displayDate": "July 1987",
    "sortDate": "1987-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Macintosh Plus and AppleTalk cluster",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A second Macintosh Plus was added to the AppleTalk network. The Macs could share a LaserWriter, and software included MacWrite, MacDraw, Cricket Graph, SuperPaint, PageMaker and MacTerminal.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_075"
    ],
    "media": [
      "m_053"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong GUI, desktop-publishing and network-printing item. Original item ID: item_080."
  },
  {
    "id": "item_120",
    "date": "1987-07",
    "displayDate": "July 1987",
    "sortDate": "1987-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "New version of SURFACE II",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "SURFACE II supported contour maps, wireframe surfaces, device-independent graphics files, GHOST-80 gridfiles and 23 Hershey character fonts.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_075"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong early scientific-visualisation software item. Original item ID: item_083."
  },
  {
    "id": "item_121",
    "date": "1987-07",
    "displayDate": "July 1987",
    "sortDate": "1987-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong teaching-infrastructure item. Event not given with a specific day; time is taken from the July 1987 Newsletter.",
    "title": "North Street Computer Classroom",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The North Street Computer Classroom contained 15 networked workstations, file storage and printing facilities, with software including word processing, spreadsheet, data management, MINITAB, Basic and Pascal.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_075"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong teaching-infrastructure item. Event not given with a specific day; time is taken from the July 1987 Newsletter. Original item ID: item_079."
  },
  {
    "id": "item_122",
    "date": "1987-07",
    "displayDate": "July 1987",
    "sortDate": "1987-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "UNIRAS graphics software",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "The UNIRAS graphics suite included UNIGRAPH, UNIMAP, UNIEDIT, RASPAK, GEOPAK, BIZPAK, BIZMAP, GIMAGE and UNIGKS.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_075"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Important for the graphics and information-visualisation software line. Original item ID: item_081."
  },
  {
    "id": "item_123",
    "date": "1987-10",
    "displayDate": "October 1987",
    "sortDate": "1987-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Computer consumables list",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The consumables list included Epson SQ2000 inkjet cartridges, Apple LaserWriter toner, Apple ImageWriter ribbons, NEC Spinwriter ribbons, DEC TK50 tape cartridges and magnetic tapes.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_076"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful as equipment-ecosystem evidence rather than a single device item. Original item ID: item_084."
  },
  {
    "id": "item_124",
    "date": "1987-11",
    "displayDate": "November 1987",
    "sortDate": "1987-11-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Six Macintosh Plus computers in User Area",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The User Area contained six Macintosh Plus computers connected through AppleTalk to a LaserWriter and ImageWriter. Main software included PageMaker, MacTeX and MacTerminal.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_077"
    ],
    "media": [
      "m_053"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong Macintosh / DTP / terminal-access item. Original item ID: item_085."
  },
  {
    "id": "item_125",
    "date": "1987-11-18",
    "displayDate": "18 November 1987",
    "sortDate": "1987-11-18",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact meeting date is given in the Newsletter.",
    "title": "Computer Users Committee meeting",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The meeting covered Cambridge Ring, IBM-compatible classrooms, Macintosh facilities, LaserWriter access, JANET, GHOST-80 PostScript output and scanner requirements.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_078"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact meeting date is given in the Newsletter. Original item ID: item_088."
  },
  {
    "id": "item_126",
    "date": "1987-12",
    "displayDate": "December 1987",
    "sortDate": "1987-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Acorn Archimedes 300 series",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The Acorn Archimedes 300 series was described as a 32-bit RISC-based microcomputer, with models including the 305 and 310M.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_078"
    ],
    "media": [
      "m_051"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong representative RISC microcomputer item. Original item ID: item_090."
  },
  {
    "id": "item_127",
    "date": "1987-12",
    "displayDate": "December 1987",
    "sortDate": "1987-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the December 1987 Newsletter.",
    "title": "Planning for Computers and Teaching in the Humanities",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "Planning for CATH 88 followed the Computers and Teaching in the Humanities event held in 1987.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_078"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the December 1987 Newsletter. Original item ID: item_089."
  },
  {
    "id": "item_128",
    "date": "1987-12",
    "displayDate": "December 1987",
    "sortDate": "1987-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "STEM Science and Technology Employment Database",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "St Andrews users could complete an online questionnaire for the STEM database through SAVA or SAVB.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_078"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Early online database / questionnaire item. Original item ID: item_087."
  },
  {
    "id": "item_129",
    "date": "1987-12",
    "displayDate": "December 1987",
    "sortDate": "1987-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "VAX terminal line speed increase",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "VAX terminal lines were improved from 1200 baud to up to 2400 baud, involving Gandalf PACX, Cambridge Ring, STDMs and modems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_078"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for terminal-access and network-infrastructure history. Original item ID: item_086."
  },
  {
    "id": "item_130",
    "date": "1988",
    "displayDate": "1988",
    "sortDate": "1988-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Based on the 1988 LAN diagram reproduced in the report. Year only. No exact event date is given in the source. The diagram caption in Chronological Report gives 1988; no exact creation date is visible. Models are visible in the diagram reproduced in Chronological Report p. 12.",
    "title": "The Departmental LAN and Sun Workstations",
    "itemType": "event; equipment; system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "A diagram titled “Department of Computational Science SUN Workstations” documents the department LAN network, including Ethernet, JANET, VAX/bridge links, VME bus equipment and named workstations.",
    "whyItMatters": "Provides a visual snapshot of networked departmental computing by 1988.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [
      "m_013"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Details visible in M013 could only confirm this l from Chronological Report Original item ID: SYS018. From prototype content dataset.xlsx sheet 'events'. Strong visual media item for explaining the networking boom. Chronological Report p. 12 is the only confirmed source for the image and caption. could only confirm this diagram from Chronological Report p. 12; Original item ID: E021. From prototype content dataset.xlsx sheet 'hardware_devices'. Use the SUN workstation network diagram to tell the story of departmental computing becoming a connected ecosystem, with named machines, shared infrastructure and links between local workstations, Ethernet, VAX and JANET. The diagram includes named workstations and visible Sun model labels This row is based on the chronological report. Original item ID: H011. Merged from original items: item_143; item_144; item_145."
  },
  {
    "id": "item_131",
    "date": "1988-02",
    "displayDate": "February 1988",
    "sortDate": "1988-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "BBC BASIC interpreter for IBM PCs",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "A BBC BASIC interpreter for IBM PCs was purchased, allowing BBC Micro BASIC programs to move to IBM-compatible PCs with CGA graphics support.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_079"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for teaching-software migration from BBC Micro to IBM-compatible PCs. Original item ID: item_095."
  },
  {
    "id": "item_132",
    "date": "1988-02",
    "displayDate": "February 1988",
    "sortDate": "1988-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the January 1988 newsletter schedule for Candlemas Term workshops. No exact workshop day is given in the source.",
    "title": "MS-DOS and Microsoft Word workshops in the Old Union PC Classroom",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "Introductory MS-DOS and Microsoft Word workshops were held in the Old Union PC Classroom using Zenith personal computers.",
    "whyItMatters": "Confirms that the classroom was not just planned but actively used for practical software training.",
    "relatedPeople": [],
    "relatedEquipment": [
      "item_101 Old Union / North Street PC classroom with networked Zenith workstations"
    ],
    "sources": [
      "src_020",
      "src_018"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Original item ID: SYS012. From prototype content dataset.xlsx sheet 'events'. Helps connect hardware provision with student/staff skills training. External January 1988 newsletter confirms the Old Union PC Classroom, Zenith microcomputers, MS-DOS and Microsoft Word training. Original item ID: E019. From prototype content dataset.xlsx sheet 'teaching_curriculum'. Original item ID: TC007. Merged from original items: item_147; item_149; item_151. Original item ID: SYS011. Original item ID: TC008. Merged from original item IDs: item_102; item_399."
  },
  {
    "id": "item_133",
    "date": "1988-02",
    "displayDate": "February 1988",
    "sortDate": "1988-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "New archive system",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "A new archive system was in use, with plans to integrate Archive-2000, annual forced archive tapes and the older user-controlled archive.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_079"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for storage and file-preservation history. Original item ID: item_091."
  },
  {
    "id": "item_134",
    "date": "1988-02",
    "displayDate": "February 1988",
    "sortDate": "1988-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "UNIRAS site licence",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "St Andrews adopted UNIRAS site licences covering VAX/VMS and IBM PC/AT versions.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_079"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Important for graphics and visualisation software infrastructure. Original item ID: item_093."
  },
  {
    "id": "item_135",
    "date": "1988-03-09",
    "displayDate": "9 March 1988",
    "sortDate": "1988-03-09",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the Newsletter. Strong DTP, scanning and cross-platform equipment item.",
    "title": "Scotsys Macintosh demonstration",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "Scotsys demonstrated Apple Macintosh hardware and software, including Macintosh II, LaserWriter II NT, ImageWriter Letter Quality, Data Copy 730 scanner, Apple Tape Streamer and an MS-DOS card.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_079"
    ],
    "media": [
      "m_057"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the Newsletter. Strong DTP, scanning and cross-platform equipment item. Original item ID: item_094."
  },
  {
    "id": "item_136",
    "date": "1988-03-15",
    "displayDate": "15 March 1988",
    "sortDate": "1988-03-15",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact demonstration date is given in the Newsletter.",
    "title": "IBM personal computer range demonstration",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "IBM planned to demonstrate its personal computer range, including PS/2 systems, desktop-publishing equipment and optical disk storage.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_079"
    ],
    "media": [
      "m_050"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact demonstration date is given in the Newsletter. Original item ID: item_092."
  },
  {
    "id": "item_137",
    "date": "1988-05-20",
    "displayDate": "20 May 1988",
    "sortDate": "1988-05-20",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact event date is given in the Newsletter. Strong humanities-computing teaching item.",
    "title": "Information Technology in Arts and Humanities courses",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "A one-day conference focused on evaluating the use of information technology in Arts and Humanities courses.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_079"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact event date is given in the Newsletter. Strong humanities-computing teaching item. Original item ID: item_096."
  },
  {
    "id": "item_138",
    "date": "1988-06",
    "displayDate": "June 1988",
    "sortDate": "1988-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the June 1988 newsletter issue. No exact event date is given in the source.",
    "title": "CLUSTAN Analysis of an Arabic Historical Text",
    "itemType": "research_project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School",
      "Places and Institutions"
    ],
    "summary": "The Department of Mediaeval History used CLUSTAN to analyse a large Arabic document relating to Baghdad, linking historical research, text analysis and computing methods.",
    "whyItMatters": "The project shows how historians were already using computing to analyse large texts in the 1980s.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_021"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_138] From prototype content dataset.xlsx sheet 'events'. This can be one of the strongest “computing in the arts” stories. Chronological Report p. 13 gives the project description; SRC021 is the specific June 1988 newsletter issue to verify against. Original item ID: E025. From prototype content dataset.xlsx sheet 'projects_research'. Useful as a flagship humanities-computing story because it links Arabic scholarship, language support and computational analysis. Reduced the need for transliteration, which could have taken time and introduced errors. Project details are currently grounded in Chronological Report p. 13 and SRC021 Original item ID: PR008. Merged from original item IDs: item_370. | [item_374] From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG018. | Merged during duplicate/content-related consolidation with: item_374."
  },
  {
    "id": "item_139",
    "date": "1988-11",
    "displayDate": "November 1988",
    "sortDate": "1988-11-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong library digitisation and online catalogue item. Event not given with a specific day; time is taken from the November 1988 Newsletter.",
    "title": "SAULCAT online library catalogue",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "SAULCAT, the machine-readable St Andrews University Library Catalogue, became accessible from terminals on the University network and externally through JANET.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_022"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong library digitisation and online catalogue item. Event not given with a specific day; time is taken from the November 1988 Newsletter. Original item ID: item_097."
  },
  {
    "id": "item_140",
    "date": "1988-11",
    "displayDate": "November 1988",
    "sortDate": "1988-11-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the November 1988 newsletter issue. No exact start date is given in the source.",
    "title": "Confectionery sales introduced through Computing Laboratory secretary",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "A selection of well-known confectionery brands became available from the Computing Laboratory secretary at below recommended retail prices.",
    "whyItMatters": "This small detail gives a glimpse of everyday life in the Computing Laboratory as the department grew.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_022"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Good light-touch cultural detail between more technical events. External November 1988 newsletter confirms confectionery sales. Evidence quote: A selection of well-known brands of confectionery is now available from the Computing Laboratory secretary, at below recommended retail prices. Original item ID: E023."
  },
  {
    "id": "item_141",
    "date": "1988-11",
    "displayDate": "November 1988",
    "sortDate": "1988-11-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the November 1988 newsletter issue. No exact infection or clean-up date is given in the source.",
    "title": "nVIR Virus Found on University Macintoshes",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Misuse and Security",
      "Technology"
    ],
    "summary": "The nVIR virus was found on Macintosh 2 in the Computing Laboratory Cluster; some Macintosh Classroom system disks were contaminated, and system disks were protected with Vaccine.",
    "whyItMatters": "The incident was an early local example of the security problems that came with wider personal-computer use",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_022"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Useful for “computer crime” and Macintosh culture sections. External November 1988 newsletter confirms nVIR, Vaccine and affected Macintosh systems. Evidence quote: Recently a virus called nVIR has been introduced by person or persons unknown onto the Macintoshes in St Andrews. Original item ID: E022. From prototype content dataset.xlsx sheet 'software_network_systems'. Original item ID: SYS014. Original item ID: SYS013. Merged from original item IDs: item_431; item_442."
  },
  {
    "id": "item_142",
    "date": "1988-12",
    "displayDate": "December 1988",
    "sortDate": "1988-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Licence began in December 1988; reported in February 1989.",
    "title": "SPSS/PC+ site licence",
    "itemType": "software_system",
    "themeTags": [
      "Build the School",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Computing Laboratory purchased an SPSS/PC+ site licence through CHEST for teaching, research, educational development and administration.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Licence began in December 1988; reported in February 1989. Original item ID: item_107."
  },
  {
    "id": "item_143",
    "date": "1988-12",
    "displayDate": "December 1988",
    "sortDate": "1988-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Data refers to November–December 1988, reported in the January 1989 Newsletter.",
    "title": "VAX system serviceability figures",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Serviceability figures for SAVA, SAVB and SAVC covered maintenance periods, backup dumps and hardware faults during November and December 1988.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_081"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Data refers to November–December 1988, reported in the January 1989 Newsletter. Original item ID: item_102."
  },
  {
    "id": "item_144",
    "date": "1988-12",
    "displayDate": "December 1988",
    "sortDate": "1988-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "VAX/VMS Version 5 delayed",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "VAX/VMS Version 5 had been received but the service was expected to remain on VAX/VMS 4.7 until at least the Easter vacation in 1989.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_080"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful as an operating-system transition item. Original item ID: item_098."
  },
  {
    "id": "item_145",
    "date": "1988-12",
    "displayDate": "December 1988",
    "sortDate": "1988-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Word counting with Microsoft Word",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Microsoft Word users could count words by saving a document as an ASCII file and running WORDS.COM. The method was used in Modern History.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_080"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for text-processing and historical writing practice. Original item ID: item_099."
  },
  {
    "id": "item_146",
    "date": "1989-01",
    "displayDate": "January 1989",
    "sortDate": "1989-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 1989 Newsletter.",
    "title": "EARN and EAN gateways for network mail",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "St Andrews users could send network mail using VMS MAIL and POST through EARN and EAN gateways.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_081"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 1989 Newsletter. Original item ID: item_100."
  },
  {
    "id": "item_147",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "ARCHIVE-2000 place-holding file issue",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "ARCHIVE-2000 created temporary placeholder files for items waiting to be restored. Users were warned not to delete them.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for archive-system and user-support history. Original item ID: item_105."
  },
  {
    "id": "item_148",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Disk space shortage on SAVA and SAVB",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Users were warned about disk-space shortages on VAX systems and advised to remove old file versions, object files, journal files and MAIL files.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for storage-management history. Original item ID: item_104."
  },
  {
    "id": "item_149",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Floppy disk media conversion facilities",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Usernote 27 described supported media and file conversion, including 5.25-inch IBM PC disks, 3.5-inch Macintosh disks, MS-Word, MacWord and other formats.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for cross-platform data and document migration. Original item ID: item_114."
  },
  {
    "id": "item_150",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the February 1989 newsletter issue. No exact event date is given in the source.",
    "title": "NISS Bulletin Board, NISS Catalogue and Oxford Text Archive records",
    "itemType": "digital_resource",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology",
      "Humanities Computing"
    ],
    "summary": "The NISS Bulletin Board was accessible over JANET, and the NISS Catalogue added improved functionality and sample records from the Oxford Text Archive.",
    "whyItMatters": "These services gave St Andrews users online access to catalogues, information and electronic texts held elsewhere.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_150] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for networked information-service history. Original item ID: item_116. | [item_151] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong connection between networked information services and digital text archives. Original item ID: item_115. | Merged during duplicate/content-related consolidation with: item_151."
  },
  {
    "id": "item_152",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Network mail via UUCP, EARN/BITNET and JANET",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Problems with UUCP hosts encouraged users to use the Rutherford EARN/BITNET gateway instead. A MAILSHARE help file provided instructions.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for early email and gateway complexity. Original item ID: item_110."
  },
  {
    "id": "item_153",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Online NEWS on VAX systems",
    "itemType": "software_system",
    "themeTags": [
      "Build the School",
      "Technology"
    ],
    "summary": "VAX users could use the NEWS command to read online summaries of Computing Laboratory Newsletter issues.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for early internal online information publishing. Original item ID: item_113."
  },
  {
    "id": "item_154",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Time is taken from the February 1989 Newsletter; several future dates are mentioned.",
    "title": "Replacement of computing facilities",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The Computing Laboratory prepared a Strategy Submission and Operational Requirement for replacing computing facilities in 1990.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Time is taken from the February 1989 Newsletter; several future dates are mentioned. Original item ID: item_103."
  },
  {
    "id": "item_155",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "SPSS/PC+ technical requirements",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "SPSS/PC+ required 512K memory for the base system and 640K for optional modules, with a hard disk requirement of several megabytes.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for PC software and statistical-computing history. Original item ID: item_108."
  },
  {
    "id": "item_156",
    "date": "1989-02",
    "displayDate": "February 1989",
    "sortDate": "1989-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "VAX/VMS password security guidance",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Following unsuccessful login attempts, users were advised to strengthen their VAX/VMS passwords.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for early system-security history. Original item ID: item_109."
  },
  {
    "id": "item_157",
    "date": "1989-03",
    "displayDate": "March 1989",
    "sortDate": "1989-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "BBC Model B computer for sale",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "A BBC Model B computer with a 40-track disk drive was offered for sale.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_083"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Low-priority device-ecosystem evidence. Original item ID: item_119."
  },
  {
    "id": "item_158",
    "date": "1989-03",
    "displayDate": "March 1989",
    "sortDate": "1989-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Macintosh computers in the Library cluster",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Four Macintosh Plus computers were installed in the Library Level 2 terminal-cluster area, replacing some BBC microcomputers. Additional Macintosh, ImageWriter and LaserWriter facilities were planned.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_083"
    ],
    "media": [
      "m_053"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong Library / Macintosh / DTP access item. Original item ID: item_117."
  },
  {
    "id": "item_159",
    "date": "1989-03",
    "displayDate": "March 1989",
    "sortDate": "1989-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "NAME facility privacy change",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The VAX/VMS NAME facility was changed so users could no longer look up full names from usernames, while surname-to-username lookup for mail remained available.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_083"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for identity, privacy and multi-user system history. Original item ID: item_118."
  },
  {
    "id": "item_160",
    "date": "1989-03-01",
    "displayDate": "1 March 1989",
    "sortDate": "1989-03-01",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact effective date is given in the Newsletter.",
    "title": "Telecom Gold and Telex service number changes",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The University Library announced that Telecom Gold and Telex service numbers would change on 1 March 1989.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact effective date is given in the Newsletter. Original item ID: item_106."
  },
  {
    "id": "item_161",
    "date": "1989-03-02",
    "displayDate": "2 March 1989",
    "sortDate": "1989-03-02",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact seminar dates are given in the Newsletter.",
    "title": "Computational Science seminars",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Seminars included “The Meiko Computing Surface”, “Computer aided design” and “Computing and Groups”.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_081"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact seminar dates are given in the Newsletter. Original item ID: item_101."
  },
  {
    "id": "item_162",
    "date": "1989-04",
    "displayDate": "April 1989",
    "sortDate": "1989-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the April 1989 newsletter issue. No exact installation date is given in the source.",
    "title": "Chinese font installed on Macintosh number 2",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology",
      "Everyday Life in School",
      "Build the School",
      "Places and Institutions",
      "People"
    ],
    "summary": "Dr Butler of the Department of Chemistry agreed to install a simplified Chinese font on Macintosh number 2, making the machine useful for non-English text support.",
    "whyItMatters": "The font made it possible to display and print simplified Chinese on a University Macintosh.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_023"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_162] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong non-English text / Chinese character support item. Original item ID: item_125. From prototype content dataset.xlsx sheet 'events'. Good small event for showing global-language and humanities-oriented computing support. External April 1989 newsletter confirms the Chinese font item. Evidence quote: Dr Butler of the Chemistry Department has agreed to install his Chinese font on Macintosh number 2 in the User Area of the John Honey building. Original item ID: E024. From prototype content dataset.xlsx sheet 'software_network_systems'. Source describes it as based on the Pinyin Romanisation system. Original item ID: SYS015. Merged from original item IDs: item_360; item_417. | [item_373] From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG017. | [item_376] From prototype content dataset.xlsx sheet 'people'. Explore cross-departmental software adaptation: why did a Chemistry staff member create or hold a Chinese font, and who needed Chinese-language computing at St Andrews in 1989? Evidence quote: Dr Butler of the Chemistry Department has agreed to install his Chinese font on Macintosh number 2 in the User Area of the John Honey building. Original item ID: P013. | Merged during duplicate/content-related consolidation with: item_373; item_376."
  },
  {
    "id": "item_163",
    "date": "1989-04",
    "displayDate": "April 1989",
    "sortDate": "1989-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Floppy disk file transfer service",
    "itemType": "software_system",
    "themeTags": [
      "Build the School",
      "Technology"
    ],
    "summary": "The Computing Laboratory offered a service for transferring files between MS-DOS disks and other systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_023"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for cross-media file transfer history. Original item ID: item_123."
  },
  {
    "id": "item_164",
    "date": "1989-04",
    "displayDate": "April 1989",
    "sortDate": "1989-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Network mail address translation over JANET",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "EARNHELP and ADDRESSTABLE converted external email addresses into formats that could pass through JANET gateways.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_023"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for early email-network interoperability. Original item ID: item_124."
  },
  {
    "id": "item_165",
    "date": "1989-04",
    "displayDate": "April 1989",
    "sortDate": "1989-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Old archive tapes deletion and Archive-2000 migration",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Users were warned that older user-controlled archives and forced archive tapes from 1984–1987 would be overwritten after 1 October 1989 unless files were transferred to Archive-2000.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_023"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for file preservation and archive migration. Original item ID: item_122."
  },
  {
    "id": "item_166",
    "date": "1989-04-09",
    "displayDate": "9 April 1989",
    "sortDate": "1989-04-09",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact workshop dates are given. Strong early digital humanities and non-English text item.",
    "title": "Micro-OCP workshops",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Micro-OCP, the IBM PC version of the Oxford Concordance Program, could generate word lists, indexes and concordances from multilingual and multi-alphabet texts.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact workshop dates are given. Strong early digital humanities and non-English text item. Original item ID: item_111."
  },
  {
    "id": "item_167",
    "date": "1989-04-11",
    "displayDate": "11 April 1989",
    "sortDate": "1989-04-11",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact lecture date from the Distinguished Lecture Series record.",
    "title": "Distinguished Lecture Course on Database Programming Languages",
    "itemType": "teaching_curriculum",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Distinguished Lecture Series included the open lecture course “Database Programming Languages” on 11 April 1989.",
    "whyItMatters": "The course made current research in database programming languages available to a wider University audience.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_085",
      "src_082"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_167] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the DLS archive. Connects to the April 1989 open lecture course. Original item ID: item_133. | [item_168] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact dates are given. Can connect to the DLS archive entry for 11 April 1989. Original item ID: item_112. | Merged during duplicate/content-related consolidation with: item_168."
  },
  {
    "id": "item_169",
    "date": "1989-04-19",
    "displayDate": "19 April 1989",
    "sortDate": "1989-04-19",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact demonstration date is given. Useful for expert systems / knowledge-management history.",
    "title": "GENERIS Intelligent Knowledgebase Management System demonstration",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "Deductive Systems Ltd demonstrated GENERIS, an Intelligent Knowledgebase Management System, in the John Honey Building.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_023"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact demonstration date is given. Useful for expert systems / knowledge-management history. Original item ID: item_126."
  },
  {
    "id": "item_170",
    "date": "1989-05-09",
    "displayDate": "9 May 1989",
    "sortDate": "1989-05-09",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact demonstration date is given.",
    "title": "IBM equipment demonstration",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "IBM demonstrated its current range of personal computers and peripherals in the John Honey Building.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_023"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact demonstration date is given. Original item ID: item_127."
  },
  {
    "id": "item_171",
    "date": "1989-06",
    "displayDate": "June 1989",
    "sortDate": "1989-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Electronic publishing report",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Meetings on electronic publishing covered Macintosh and IBM PC systems, PostScript printing, PageMaker, TeX, SGML, Microsoft Word, Ethernet and hypertext.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_084"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong text production / desktop publishing / scholarly publishing item. Original item ID: item_132."
  },
  {
    "id": "item_172",
    "date": "1989-06",
    "displayDate": "June 1989",
    "sortDate": "1989-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Ingres for IBM-compatible PCs",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Ingres for IBM-compatible PCs was made available for research, teaching, administration and larger VAX projects. Requirements included IBM PC-compatible hardware, 640K RAM and hard-disk space.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_084"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong database-software item. Original item ID: item_129."
  },
  {
    "id": "item_173",
    "date": "1989-06",
    "displayDate": "June 1989",
    "sortDate": "1989-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Micro-OCP for multilingual text analysis",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Micro-OCP could generate concordances, indexes and word lists from multilingual and multi-alphabet texts, supporting language, literature and social-science research.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_084"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong early digital humanities / non-English text item. Original item ID: item_130."
  },
  {
    "id": "item_174",
    "date": "1989-06",
    "displayDate": "June 1989",
    "sortDate": "1989-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "North Street advisory support for Arts",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Dr Lorna Weatherill became full-time in a role supporting IBM-compatible PC applications in the North Street Classroom, especially but not exclusively for Arts users.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_084"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful person/service role item for Arts computing support. Original item ID: item_131."
  },
  {
    "id": "item_175",
    "date": "1989-06-12",
    "displayDate": "12 June 1989",
    "sortDate": "1989-06-12",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Clear week-level date. Important OS transition item.",
    "title": "VAX/VMS upgraded to Version 5.1",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "SAVA, SAVB, SAVC and SAULCAT were upgraded to VAX/VMS Version 5.1. Full service returned after hardware problems on SAVA and SAVB.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_084"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Clear week-level date. Important OS transition item. Original item ID: item_128."
  },
  {
    "id": "item_176",
    "date": "1989-07-05",
    "displayDate": "5 July 1989",
    "sortDate": "1989-07-05",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact workshop dates are given. Useful for mathematical and research software history.",
    "title": "IUSC workshop on Algebraic Computing",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The workshop covered computer algebra software including Reduce, Maple, Macsyma, muMATH, Derive and Mathematica.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_083"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact workshop dates are given. Useful for mathematical and research software history. Original item ID: item_120."
  },
  {
    "id": "item_177",
    "date": "1989-10",
    "displayDate": "October 1989",
    "sortDate": "1989-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is tentative; time is taken from the March 1989 Newsletter.",
    "title": "Advanced Computing for the Social Sciences",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A planned conference / workshop covered supercomputing, parallel processing, satellite imagery, expert systems, natural language processing, databases, information retrieval and networks for social-science research.",
    "whyItMatters": "The course introduced social-science researchers to computing methods that could support their own research.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_083"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Date is tentative; time is taken from the March 1989 Newsletter. Original item ID: item_121."
  },
  {
    "id": "item_178",
    "date": "1990",
    "displayDate": "1990",
    "sortDate": "1990-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Chronological Report gives the 1990s but no exact year. Approximate date. No exact event date is given in the source.",
    "title": "GIS introduction for arts and sciences users",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "GIS was introduced for work in archaeology, geology, ancient history and marine biology.",
    "whyItMatters": "GIS offered researchers in subjects such as archaeology, geology and marine biology new ways to work with spatial data.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'projects_research'. This row is currently supported only by Chronological Report p. 13–14. Original item ID: PR009."
  },
  {
    "id": "item_179",
    "date": "1992–2002",
    "displayDate": "1992–2002",
    "sortDate": "1992-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Official School history gives the year only; Ursula Martin profile gives the 1992–2002 St Andrews period. Year only. Years refer to her St Andrews professorship as stated in her Oxford profile.",
    "title": "Ursula Martin appointed Professor of Computer Science",
    "itemType": "event; person",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology",
      "People"
    ],
    "summary": "In 1992, Ursula Martin became the University of St Andrews’ first female professor. She remained Professor of Computer Science until 2002.",
    "whyItMatters": "Martin’s appointment made her the University’s first female professor and placed her in a leading role in the development of Computer Science at St Andrews.",
    "relatedPeople": [
      "item_421 Ursula Martin"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_048",
      "src_050",
      "src_054"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. A key appointment marks both Computer Science development and a University-wide milestone. Supports Ursula Martin’s St Andrews period and the official 1992 milestone. The School About page says first female professor since 1413; Ursula Martin’s Oxford profile says she was Professor at St Andrews from 1992 to 2002. Evidence quote: She was a Professor at the University of St Andrews (1992 - 2002). Original item ID: E051. From prototype content dataset.xlsx sheet 'people'. A former St Andrews professor returns in 2017 to speak on computer history and women’s often-ignored contributions. Supports Martin’s St Andrews professorship and the official 1992 milestone. Official School page describes the 1992 first-female-professor milestone; Oxford profile identifies Ursula Martin’s St Andrews professorship. Original item ID: P029. Merged from original items: item_194; item_195."
  },
  {
    "id": "item_421",
    "date": "1992–2002",
    "displayDate": "1992–2002",
    "sortDate": "1992-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Years refer to Ursula Martin’s St Andrews professorship as stated in her Oxford profile.",
    "title": "Ursula Martin",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People",
      "Research & Public Impact"
    ],
    "summary": "Ursula Martin was Professor of Computer Science at St Andrews from 1992 to 2002 and was the University’s first female professor.",
    "whyItMatters": "Martin’s appointment was significant for both the development of Computer Science and the history of women academics at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_048",
      "src_050",
      "src_054"
    ],
    "media": [
      "m_023"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P029; related to item_179 and item_339."
  },
  {
    "id": "item_180",
    "date": "1995-04-20",
    "displayDate": "20 April 1995",
    "sortDate": "1995-04-20",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the DLS archive. No exact event date is given in the source.",
    "title": "DLS: Distributed Multimedia Communications",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The DLS archive records “Distributed Multimedia Communications”, connecting St Andrews’ research-theme history with later video-conferencing and networked media infrastructure.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_086"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the DLS archive. Original item ID: item_134."
  },
  {
    "id": "item_181",
    "date": "1996",
    "displayDate": "1996",
    "sortDate": "1996-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is based on the Chronological Report statement “By 1996”. No exact event date is given in the source.",
    "title": "Computing Laboratory and Management Information Services become IT Services",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Computing Laboratory was merged with Management Information Services to create Information Technology Services.",
    "whyItMatters": "The merger created a broader University service covering both academic computing and administrative information systems.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Useful endpoint for the department-culture section. Chronological Report p. 15 is the current source. could only confirm this detail from Chronological Report p. 15; Original item ID: E031."
  },
  {
    "id": "item_182",
    "date": "1996-03",
    "displayDate": "March 1996",
    "sortDate": "1996-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the March 1996 newsletter warning. No exact incident date is given in the source.",
    "title": "Copyright warning after unauthorised material on university web server",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Misuse and Security",
      "Technology",
      "Local to Global",
      "People",
      "Research & Public Impact",
      "Places and Institutions"
    ],
    "summary": "JANET-CERT circulated a warning after copyright material appeared on a university web server; the case involved more than a hundred newspapers and magazines and referenced monitoring by organisations including the Federation Against Software Theft and the Software Publishers Association.",
    "whyItMatters": "The incident showed that publishing on University web servers also required rules on copyright and responsible use.",
    "relatedPeople": [
      "item_430 Dennis Jackson"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_024"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_182] From prototype content dataset.xlsx sheet 'events'. Strong bridge from technical access to online policy and conduct. External March 1996 newsletter article directly supports the copyright-material warning and names FAST / SPA. Original item ID: E026. | [item_371] From prototype content dataset.xlsx sheet 'people'. Explore how national bodies such as JANET-CERT and UKERNA shaped local university internet policy before web governance became routine. Original item ID: P014. | [item_380] From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG023. | [item_390] From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG022. | [item_408] From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG024. | Merged during duplicate/content-related consolidation with: item_371; item_380; item_390; item_408."
  },
  {
    "id": "item_183",
    "date": "1996-08",
    "displayDate": "August 1996",
    "sortDate": "1996-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the August 1996 Newsletter. Strong UNIX/Web infrastructure item.",
    "title": "Distributed UNIX village server model",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "IT Services’ UNIX systems were based on Sun hardware and a distributed “village server” model, with servers located around the University and central services including the World-Wide Web.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_087"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the August 1996 Newsletter. Strong UNIX/Web infrastructure item. Original item ID: item_135."
  },
  {
    "id": "item_184",
    "date": "1996-08",
    "displayDate": "August 1996",
    "sortDate": "1996-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Electronic publishing and WWW Codes of Practice",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "IT Services prepared draft Codes of Practice for electronic publishing and the University WWW system, noting that web pages function as worldwide publications.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_090"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for early institutional web publishing and copyright awareness. Original item ID: item_140."
  },
  {
    "id": "item_185",
    "date": "1996-08",
    "displayDate": "August 1996",
    "sortDate": "1996-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "FaTMAN and Scottish Cross-Connect",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The Fife and Tayside Metropolitan Area Network expanded, and Scottish HE MANs were linked through 155 Mbps Scottish Cross-Connect links.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_088"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong regional academic-network infrastructure item. Original item ID: item_136."
  },
  {
    "id": "item_186",
    "date": "1996-08",
    "displayDate": "August 1996",
    "sortDate": "1996-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Ingres DBMS upgraded to version 6.4/05",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The Ingres relational database system on the IT Services database server was upgraded to version 6.4/05.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_089"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful database infrastructure item. Original item ID: item_138."
  },
  {
    "id": "item_187",
    "date": "1996-08",
    "displayDate": "August 1996",
    "sortDate": "1996-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the August 1996 newsletter issue. No exact event date is given in the source.",
    "title": "Ingres DBMS upgrade and networked database access",
    "itemType": "digital_resource",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Ingres DBMS was upgraded to version 6.4/05, while Ingres/Net and Impromptu supported database access across IT Services’ distributed UNIX village server model.",
    "whyItMatters": "The upgrade allowed databases to be accessed across the University’s growing UNIX network.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_089",
      "src_088"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_187] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Important shift from central database systems to desktop graphical querying. Original item ID: item_139. | [item_188] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the August 1996 Newsletter. Original item ID: item_137. | Merged during duplicate/content-related consolidation with: item_188."
  },
  {
    "id": "item_189",
    "date": "1996-11",
    "displayDate": "November 1996",
    "sortDate": "1996-11-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the November 1996 newsletter article. No exact incident date is given in the source.",
    "title": "Offensive junk email incident reaches St Andrews users",
    "itemType": "event",
    "themeTags": [
      "Research & Public Impact",
      "Misuse and Security",
      "Technology"
    ],
    "summary": "A serious offensive email incident reached forty-nine members of the University, prompting advice about junk mail and restraint in responding.",
    "whyItMatters": "The incident made clear that wider email access also created new problems involving misuse and moderation.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_025"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Strong local example of early spam / unwanted email harms. External November 1996 article confirms the incident and the number of affected University members. Original item ID: E027."
  },
  {
    "id": "item_190",
    "date": "1997–2012",
    "displayDate": "1997–2012",
    "sortDate": "1997-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Exact course start dates are given. Useful for web-based teaching history.",
    "title": "TALiSMAN online course: Using the WWW for Teaching and Learning",
    "itemType": "event",
    "themeTags": [
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "TALiSMAN offered a six-week online course on using the World-Wide Web for teaching and learning.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_092"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact course start dates are given. Useful for web-based teaching history. Original item ID: item_143."
  },
  {
    "id": "item_191",
    "date": "1997–2000",
    "displayDate": "1997–2000",
    "sortDate": "1997-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date range is based on April 1997 and February 2000 newsletter articles about Y2K compliance and the local transition. No single exact event date is given in the sources.",
    "title": "Year 2000 compliance / Y2K preparation and transition",
    "itemType": "software_network_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "The IT Services Newsletter discussed Year 2000 compliance and CHEST efforts to obtain supplier assurances that products complied with BSI Year 2000 conformity requirements.",
    "whyItMatters": "The smooth transition depended on extensive checks and updates carried out before the year 2000.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_027",
      "src_028"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Includes compliance checking, supplier assurances, and local troubleshooting/preparation. Original item ID: SYS016. From prototype content dataset.xlsx sheet 'events'. Strong closing event for the 1981–2000 section. External February 2000 article confirms the quiet transition, minor problems and credit to preparation. Original item ID: E030. Good setup event before the 2000 outcome update. External April 1997 article confirms the compliance concern and CHEST context. Original item ID: E029. Merged from original item IDs: item_435; item_436."
  },
  {
    "id": "item_192",
    "date": "1997-02",
    "displayDate": "February 1997",
    "sortDate": "1997-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "COPAC online library catalogue access",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "COPAC provided unified access to major UK and Irish research library catalogues through both WWW and Telnet interfaces.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_094"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong library information-retrieval item, connecting 1978 online retrieval and 1988 SAULCAT. Original item ID: item_145."
  },
  {
    "id": "item_193",
    "date": "1997-02",
    "displayDate": "February 1997",
    "sortDate": "1997-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Purdie Sun/UNIX village upgrade",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The Purdie Sun/UNIX village was upgraded with a Sun Ultra 140 compute server, an upgraded Sparc2 file server, Sparcstation 4, SLC X-terminal, IPC print server and laser printer.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_091"
    ],
    "media": [
      "m_060"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong representative server and workstation infrastructure item. Original item ID: item_141."
  },
  {
    "id": "item_194",
    "date": "1997-02",
    "displayDate": "February 1997",
    "sortDate": "1997-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Solaris 2.5.1 and workstation Windows interface",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The upgraded Purdie village ran Solaris 2.5.1, and users encountered a Windows interface rather than the old command-line dialogue.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_091"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for UNIX platform and user-interface change. Original item ID: item_142."
  },
  {
    "id": "item_195",
    "date": "1997-02",
    "displayDate": "February 1997",
    "sortDate": "1997-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "The Data Archive for social sciences and humanities",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Data Archive collected, preserved and disseminated computer-readable datasets for social-science and humanities research, holding more than 7,000 datasets.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_093"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong humanities/social-science data infrastructure item. Original item ID: item_144."
  },
  {
    "id": "item_196",
    "date": "1997-06",
    "displayDate": "June 1997",
    "sortDate": "1997-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the June 1997 IT Services article. The source says Jack Cole died recently but does not give the exact death date.",
    "title": "Professor Jack Cole’s death reported by IT Services",
    "itemType": "event; person",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "People",
      "Technology"
    ],
    "summary": "IT Services published an obituary note for Professor Jack Cole, remembering him as Director of the Computing Laboratory from 1965 and as a formative figure in Computer Science at St Andrews.",
    "whyItMatters": "The report records the death of one of the leading figures in the early development of computing at St Andrews.",
    "relatedPeople": [
      "item_414 Jack Cole"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_026"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Strong biographical and emotional event for the timeline. External June 1997 IT Services article confirms the report of death and institutional significance, but not the exact death date. Evidence quote: Professor Jack Cole died recently at the age of 72. Original item ID: E028."
  },
  {
    "id": "item_197",
    "date": "1997-09",
    "displayDate": "September 1997",
    "sortDate": "1997-09-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "SARA remote access service",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "SARA allowed users to connect home computers to the University network, JANET and the Internet using modems and telephone lines, including V34+ 33.6 Kbps modem support and ISDN 2 capability.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_095"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong home-networking and remote-access infrastructure item. Original item ID: item_146."
  },
  {
    "id": "item_198",
    "date": "1998-01",
    "displayDate": "January 1998",
    "sortDate": "1998-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Bute Photo Unit film output upgrade",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The Bute Photo Unit upgraded 35 mm computer-generated film output with a new film recorder and an additional PC to handle more file formats and reduce PC-to-Mac conversion problems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_098"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for image output, presentation media and cross-platform file conversion. Original item ID: item_149."
  },
  {
    "id": "item_199",
    "date": "1998-01",
    "displayDate": "January 1998",
    "sortDate": "1998-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Performing Arts Data Service user survey",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "PADS, one of the Arts and Humanities Data Service providers, aimed to collect and promote performing-arts digital data resources for music, film, video, broadcasting, theatre and dance research and teaching.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_096"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong digital humanities / AHDS item. Original item ID: item_147."
  },
  {
    "id": "item_200",
    "date": "1998-01",
    "displayDate": "January 1998",
    "sortDate": "1998-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Psychology and Bute server upgrades",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Psychology and Bute villages were upgraded to paired Sun Ultra Enterprise 150 systems, separating compute-server and file-server functions and running Solaris 2.6.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_097"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong representative server infrastructure item. Original item ID: item_148."
  },
  {
    "id": "item_201",
    "date": "1998-01",
    "displayDate": "January 1998",
    "sortDate": "1998-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Multiple exact dates are listed in the Newsletter; can be split later if needed.",
    "title": "TALiSMAN workshops and video-conferencing courses",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "TALiSMAN offered workshops and conferences on online learning environments, library and information services, web sound and vision, JavaScript and video conferencing.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_099"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Multiple exact dates are listed in the Newsletter; can be split later if needed. Original item ID: item_150."
  },
  {
    "id": "item_202",
    "date": "1998-03",
    "displayDate": "March 1998",
    "sortDate": "1998-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Exact effective date is 1 April 1998. Useful for graphics-software lifecycle.",
    "title": "UNIRAS removed from centrally maintained Sun systems",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The UNIRAS licence ended in March 1998, and UNIRAS was removed from centrally maintained Sun systems from 1 April 1998.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_100"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact effective date is 1 April 1998. Useful for graphics-software lifecycle. Original item ID: item_151."
  },
  {
    "id": "item_203",
    "date": "1998-04-15",
    "displayDate": "15 April 1998",
    "sortDate": "1998-04-15",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the DLS archive. Strong IR theme item. No exact event date is given in the source.",
    "title": "DLS: Information Retrieval",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The DLS lecture “Information Retrieval: its models, its evaluation and its multimedia applications” connected St Andrews’ research-theme history with information retrieval and multimedia applications.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_101"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the DLS archive. Strong IR theme item. Original item ID: item_152."
  },
  {
    "id": "item_204",
    "date": "1998-05",
    "displayDate": "May 1998",
    "sortDate": "1998-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "St Andrews wins Ingres Site of the Year",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "St Andrews received an Ingres Site of the Year award for work including the Data Warehouse and online Course Catalogue, using Ingres database technology and web interfaces.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_102"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong database / web application item. Original item ID: item_153."
  },
  {
    "id": "item_205",
    "date": "1998-06",
    "displayDate": "June 1998",
    "sortDate": "1998-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Sun systems documentation",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Sun UNIX Solaris 2.6 documentation and compiler manuals for C, C++, Fortran and Pascal were available through the Library and via Sun AnswerBook / HTML documentation from networked computers.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_103"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for UNIX software, online documentation and programming environment history. Original item ID: item_154."
  },
  {
    "id": "item_206",
    "date": "1999",
    "displayDate": "1999",
    "sortDate": "1999-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Official School history gives the year only. Year only.",
    "title": "School of Computer Science established",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The School of Computer Science was established in 1999 following separation from the School of Mathematics.",
    "whyItMatters": "This is the key institutional formation point for the modern School of Computer Science.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_048"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Computer Science becomes a separate School after developing within broader institutional structures. Supports the establishment of the School and its separation from Mathematics. Evidence quote: The School of Computer Science was established in 1999 following its separation from the School of Mathematics. Original item ID: E052."
  },
  {
    "id": "item_207",
    "date": "1999-01",
    "displayDate": "January 1999",
    "sortDate": "1999-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the January 1999 newsletter article. No exact implementation date is given in the source.",
    "title": "Oracle and UNIX administrative computing systems selected",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Technology",
      "Research & Public Impact"
    ],
    "summary": "The University selected UNIX- and Oracle-based systems for finance, student records and payroll and personnel administration.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_104"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Dolphin contract was signed on 26 January 1999. Useful administrative systems and database item. Original item ID: item_155. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: This overlaps with item_156 but can be retained if you want a broader “systems transition” entry. Otherwise item_156 is enough. Original item ID: item_157. Merged from original item IDs: item_203."
  },
  {
    "id": "item_208",
    "date": "1999-02-12",
    "displayDate": "12 February 1999",
    "sortDate": "1999-02-12",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact pilot dates are given. Useful teaching-support and computer-classroom item.",
    "title": "Supported Classrooms Scheme",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "IT Services piloted evening supported computer classrooms in Butts Wynd, helping students use IT skills training material and word-processing tools.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_105"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact pilot dates are given. Useful teaching-support and computer-classroom item. Original item ID: item_156."
  },
  {
    "id": "item_209",
    "date": "2000-01",
    "displayDate": "January 2000",
    "sortDate": "2000-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2000 Newsletter. Useful for teaching infrastructure and access-control history.",
    "title": "24-hour computer room access system",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "Several computer rooms were upgraded with electronic door-access mechanisms using standard University ID cards, supporting 24-hour student access to computing facilities.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_106"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2000 Newsletter. Useful for teaching infrastructure and access-control history. Original item ID: item_158."
  },
  {
    "id": "item_210",
    "date": "2000-01",
    "displayDate": "January 2000",
    "sortDate": "2000-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2000 Newsletter. Connects to the 1996 St Mary’s College video-conferencing room.",
    "title": "Videoconferencing for teaching and learning",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "TALiSMAN and LTDI produced case studies and guidance on the use of videoconferencing in teaching and learning, linked to Scottish MANs video-conferencing facilities.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_107"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2000 Newsletter. Connects to the 1996 St Mary’s College video-conferencing room. Original item ID: item_159."
  },
  {
    "id": "item_211",
    "date": "2000-03-01",
    "displayDate": "1 March 2000",
    "sortDate": "2000-03-01",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the DLS archive. Useful for connecting IBM 1620 disk packs, magnetic tapes, RA81 disks, Archive-2000 and later RAID storage. No exact event date is given in the source.",
    "title": "DLS: Computer Storage Systems",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The DLS archive records a lecture on Computer Storage Systems, linking St Andrews’ research-theme history with storage infrastructure.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_108"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the DLS archive. Useful for connecting IBM 1620 disk packs, magnetic tapes, RA81 disks, Archive-2000 and later RAID storage. Original item ID: item_160."
  },
  {
    "id": "item_212",
    "date": "2001-01",
    "displayDate": "January 2001",
    "sortDate": "2001-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2001 Newsletter. Good teaching-software item.",
    "title": "Finesse and TAGS learning software",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Newsletter mentioned Computer Science projects Finesse and TAGS as software products related to managed learning environments and computer-based learning.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_109"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2001 Newsletter. Good teaching-software item. Original item ID: item_162."
  },
  {
    "id": "item_213",
    "date": "2001-01",
    "displayDate": "January 2001",
    "sortDate": "2001-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2001 Newsletter. Useful for the pre-WebCT/Moodle teaching-technology line.",
    "title": "Survey of IT use in teaching and learning",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "IT Services surveyed academic staff about the use of IT in teaching and learning, including online assessment, discussion groups, resource collections, multiple-choice question software and anti-plagiarism tools.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_109"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2001 Newsletter. Useful for the pre-WebCT/Moodle teaching-technology line. Original item ID: item_161."
  },
  {
    "id": "item_214",
    "date": "2001-12-12",
    "displayDate": "12 December 2001",
    "sortDate": "2001-12-12",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the DLS archive. Useful for SGML, TEI XML, RPS online and digital repository links. No exact event date is given in the source.",
    "title": "DLS: XML as a data standard",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The DLS lecture “XML - a data standard for well-behaved programmers?” connects the School’s research-theme history with structured text, data standards and later TEI/XML humanities projects.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_110"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the DLS archive. Useful for SGML, TEI XML, RPS online and digital repository links. Original item ID: item_163."
  },
  {
    "id": "item_215",
    "date": "2002–2005",
    "displayDate": "2002–2005",
    "sortDate": "2002-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The School moved into the purpose-built Jack Cole Building in 2004, and the Jack Cole Building and The Gateway were officially opened on 18 March 2005. The wider building project developed across 2002–2005.",
    "title": "Jack Cole Building and The Gateway opened on the North Haugh",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Firsts and Milestones",
      "Places and Institutions",
      "Technology",
      "People",
      "Humanities Computing",
      "Local to Global"
    ],
    "summary": "The School moved into the new Jack Cole Building on the North Haugh in 2004. It was officially opened on 18 March 2005 by First Minister Jack McConnell, alongside the adjacent Gateway building.",
    "whyItMatters": "",
    "relatedPeople": [
      "item_052 Ron Morrison",
      "item_414 Jack Cole",
      "item_415 Jack McConnell",
      "item_421 Ursula Martin",
      "item_364 Brian Lang",
      "item_398 Murray Cole",
      "item_381 Graham Kirby"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_038",
      "src_036",
      "src_037",
      "src_048",
      "src_044",
      "src_001"
    ],
    "media": [
      "m_015",
      "m_016",
      "m_025",
      "m_026"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_215] From prototype content dataset.xlsx sheet 'projects_research'. A building as a symbol of the school’s expansion. Provided a dedicated modern home for part of the School of Computer Science. Evidence quote: “The new building will provide an ideal environment for a modern computer science department.” Original item ID: PR010. | From prototype content dataset.xlsx sheet 'places_organisations'. Use as the main setting for the New Millennium section. Evidence quote: “The Jack Cole Building is named after the first Professor of Computer Science at St Andrews...” Original item ID: ORG028. | Merged duplicate original rows: item_246; item_262 | [item_226] From prototype content dataset.xlsx sheet 'events'. The School gains a dedicated building named after its founding figure. Supports the 2004 move into the Jack Cole Building; SRC050 supports the 2005 official opening context for the same building. Evidence quote: The School moved into the purpose-built Jack Cole building in 2004. Original item ID: E053. | [item_237] From prototype content dataset.xlsx sheet 'events'. A new home for Computer Science becomes a public ceremony. Evidence quote: “The building was opened on 18th March 2005, by the First Minister, Jack McConnell.” Original item ID: E037. | [item_238] From prototype content dataset.xlsx sheet 'places_organisations'. A double opening links Management and Computer Science. Evidence quote: “officially opened two state-of-the-art buildings...” Original item ID: ORG029. | [item_392] From prototype content dataset.xlsx sheet 'people'. Explore computing as public investment and civic ceremony. The quote supports his role in the building-opening event. Evidence quote: “Scotland’s First Minister Jack McConnell officially opened two state-of-the-art buildings at the University of St Andrews today.” Original item ID: P018. | [item_405] From prototype content dataset.xlsx sheet 'places_organisations'. Departmental growth becomes visible through buildings and classrooms. Evidence quote: “the Jack Cole Building, the ‘smart’ new home of part of the School of Computer Science” Original item ID: ORG030. | [item_406] From prototype content dataset.xlsx sheet 'places_organisations'. A paired investment with Computer Science. Evidence quote: “home to the University’s School of Management and Computer Science respectively” Original item ID: ORG031. | [item_391] From prototype content dataset.xlsx sheet 'people'. Explore family memory in institutional commemoration. The quote supports the person’s presence and identity description, but not a full name. Evidence quote: “Plaque commemorating the opening of the building, 2005. From left to right, Brian Lang the Principal, second from the left is Jack Cole’s wife...” Original item ID: P020. | [item_365] From prototype content dataset.xlsx sheet 'places_organisations'. Keep as a possible follow-up only. Original item ID: ORG035. | Merged during duplicate/content-related consolidation with: item_226; item_237; item_238; item_392; item_405; item_406; item_391; item_365."
  },
  {
    "id": "item_216",
    "date": "2002–2005",
    "displayDate": "2002–2005",
    "sortDate": "2002-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date range reflects the database starting in November 2002 and continuing as an online research information project in later newsletter references. No single exact event date is given in the source.",
    "title": "Development of the Online Research Expertise Database",
    "itemType": "digital_resource",
    "themeTags": [
      "Research & Public Impact",
      "Technology",
      "Equipment & Infrastructure",
      "People",
      "Places and Institutions"
    ],
    "summary": "Anna Clements began developing the Research Expertise database in November 2002, with support from Business Improvements staff including Hamish Lawson.",
    "whyItMatters": "The database brought information about researchers, expertise and publications together in one place, reducing the need to collect the same information repeatedly.",
    "relatedPeople": [
      "item_416 Hamish Lawson",
      "item_429 Anna Clements",
      "item_417 Jeremy Upton",
      "item_418 Janet Aucock",
      "item_363 Birgit Plietzsch"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_040"
    ],
    "media": [
      "m_017"
    ],
    "imageNote": "",
    "internalNote": "[item_216] From prototype content dataset.xlsx sheet 'software_network_systems'. A database for describing research people and outputs. Included research expertise, skills, keywords, qualifications, honours, publications and RAE-related data. Evidence quote: “The database now covers academic staff across the University and includes research expertise, skills...” Original item ID: SYS025. From prototype content dataset.xlsx sheet 'projects_research'. Research administration becomes a web/data project. Aimed to reduce duplicated data collection and centralise research expertise data. Evidence quote: “One of the main aims of the project is to provide a central University-wide repository of research expertise data...” Original item ID: PR012. | From prototype content dataset.xlsx sheet 'events'. Research information becomes a database story. Evidence quote: “Hamish Lawson and Anna Clements in Business Improvements have recently started work on a project to make the Research Expertise database available on-line.” Original item ID: E044. | Merged duplicate original rows: item_456; item_457 Merged from original item IDs: item_411. | [item_360] From prototype content dataset.xlsx sheet 'people'. Explore hidden database labour behind research management. The quote supports her role in creating the database. Evidence quote: “The database started life in November 2002 and was developed by Anna Clements in her role as Database Officer at Research and Enterprise Services.” Original item ID: P023. | [item_366] From prototype content dataset.xlsx sheet 'places_organisations'. The office behind research data systems. Evidence quote: “Hamish Lawson and Anna Clements in Business Improvements...” Original item ID: ORG032. | [item_383] From prototype content dataset.xlsx sheet 'people'. Explore who built the research-information infrastructure. The quote supports Lawson’s role in the project. Evidence quote: “Hamish Lawson and Anna Clements in Business Improvements have recently started work on a project to make the Research Expertise database available on-line.” Original item ID: P022. | Merged during duplicate/content-related consolidation with: item_360; item_366; item_383."
  },
  {
    "id": "item_217",
    "date": "2002-09-12",
    "displayDate": "12 September 2002",
    "sortDate": "2002-09-12",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact go-live date is given. Strong document digitisation, database and scanning-equipment item.",
    "title": "DocMan goes live",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "DocMan went live on 12 September 2002. Student documents were scanned, indexed and stored in an Oracle database with a Python web interface. Hardware included a Panasonic KVS6050 scanner, Sun Fire 280R server, Sun Storedge RAID Array and Sun Netra web server.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_111"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact go-live date is given. Strong document digitisation, database and scanning-equipment item. Original item ID: item_164."
  },
  {
    "id": "item_218",
    "date": "2002-11-07",
    "displayDate": "7 November 2002",
    "sortDate": "2002-11-07",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "This is the publication date of the University news article reporting the building plans. The same article says proposals were presented at a public meeting on 30 October 2002. Exact date. No exact event date is given in the source.",
    "title": "Plans for new Computer Science building unveiled",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Firsts and Milestones",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The University unveiled plans for a new two-storey Computer Science building on the North Haugh.",
    "whyItMatters": "The plans responded to the School’s growth and prepared the way for a purpose-built teaching and research building.",
    "relatedPeople": [
      "item_052 Ron Morrison"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_038"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. The building begins as a response to growth. Evidence quote: “The University of St Andrews has unveiled plans for a new state-of-the-art Computer Science building.” Original item ID: E036."
  },
  {
    "id": "item_219",
    "date": "2002-12",
    "displayDate": "December 2002",
    "sortDate": "2002-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the December 2002 newsletter article. No exact service launch date is given in the source.",
    "title": "ScienceDirect access and early use at St Andrews",
    "itemType": "system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Technology",
      "Equipment & Infrastructure"
    ],
    "summary": "ScienceDirect provided St Andrews users with online access to full text from over 1,100 Elsevier journals, and users downloaded 30,509 articles during the first ten months of the service’s availability.",
    "whyItMatters": "Digital journal access made research literature measurable and immediately available online.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_039"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. The scientific web measured in article downloads. Online full-text journal platform from Elsevier. Evidence quote: “online access to the full-text of over 1,100 Elsevier journals” Original item ID: SYS024. From prototype content dataset.xlsx sheet 'projects_research'. Downloads show research moving onto the web. Supported University research through full-text digital access. Evidence quote: “online access to the full-text of over 1,100 Elsevier journals” Original item ID: PR011. Merged from original items: item_231; item_232. From prototype content dataset.xlsx sheet 'events'. The scientific web becomes measurable in downloads. Evidence quote: “During the first ten months of the service's availability to St Andrews, March to December 2002, a total of 30,509 articles... were downloaded...” Original item ID: E043. Merged from original item IDs: item_216."
  },
  {
    "id": "item_220",
    "date": "2003",
    "displayDate": "2003",
    "sortDate": "2003-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The source says remaining NT4 classrooms would be upgraded in summer 2003; no exact implementation date is given. Date certainty: season_only No exact event date is given in the source. The article says the remaining Windows NT4 classrooms would be upgraded “this summer”; this is a planned upgrade period, not an exact event date. Date certainty: season_only",
    "title": "University classroom computers upgraded to Windows 2000",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School",
      "Places and Institutions"
    ],
    "summary": "Remaining Windows NT4 based classrooms were to be upgraded to the Windows 2000 classroom build developed the previous summer.",
    "whyItMatters": "The upgrade replaced the older NT4 system and gave University classrooms a more current computing environment.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_029"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Classrooms move to a managed desktop. Core applications included Internet Explorer 6, Office 2000, communications programs and media viewers. Evidence quote: “The core applications in the Windows 2000 system are Internet Explorer 6, Office 2000...” Original item ID: SYS019. From prototype content dataset.xlsx sheet 'events'. Classroom PCs become centrally managed infrastructure. Evidence quote: “This summer, the remaining Windows NT4 based classrooms will be upgraded to the Windows 2000 ‘classroom build’ developed last summer.” Original item ID: E034. Merged from original items: item_235; item_236."
  },
  {
    "id": "item_221",
    "date": "2003-05",
    "displayDate": "May 2003",
    "sortDate": "2003-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the May 2003 newsletter issue. The system is described as written in-house the previous summer, but no exact creation date is given.",
    "title": "PXENADS",
    "itemType": "system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "PXENADS allowed classroom PCs to boot onto the network and be reinstalled or wiped without visiting each machine with physical media.",
    "whyItMatters": "PXENADS allowed classroom computers to be reinstalled and maintained through the network, without working on each machine individually.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_029"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. The maintenance system behind the classroom. Pre-boot eXecution Environment Networked Application Delivery System. Evidence quote: “The PXENADS or Pre-boot eXecution Environment Networked Application Delivery System allows for the maintenance of the PCs without having to visit them.” Original item ID: SYS020."
  },
  {
    "id": "item_222",
    "date": "2003-08",
    "displayDate": "August 2003",
    "sortDate": "2003-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the August 2003 Newsletter. Strong early wireless-network item.",
    "title": "Library wireless network service",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The University Library introduced wireless network access using IEEE 802.11b, providing shared 11 Mbps wireless access for Windows 2000 / XP laptops with wireless cards.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_113"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the August 2003 Newsletter. Strong early wireless-network item. Original item ID: item_166."
  },
  {
    "id": "item_223",
    "date": "2003-08",
    "displayDate": "August 2003",
    "sortDate": "2003-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the August 2003 Newsletter. Useful for digitised teaching records and library services.",
    "title": "Past examination papers online",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "Around 3,500–4,000 past examination papers were scanned as PDF images and made accessible online through Oracle database and DocMan technology.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_112"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the August 2003 Newsletter. Useful for digitised teaching records and library services. Original item ID: item_165."
  },
  {
    "id": "item_224",
    "date": "2003-09",
    "displayDate": "September 2003",
    "sortDate": "2003-09-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; consultation deadline was 31 October 2003.",
    "title": "SuperJANET 5 requirements analysis",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "SuperJANET 5 entered its requirements-analysis stage, and FaTMAN and the University were invited to provide feedback.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_115"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; consultation deadline was 31 October 2003. Original item ID: item_168."
  },
  {
    "id": "item_225",
    "date": "2003-09",
    "displayDate": "September 2003",
    "sortDate": "2003-09-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the September 2003 Newsletter. Useful for learning-platform and student-system integration.",
    "title": "WebCT and SITS interface",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "WebCT was automatically connected with the SITS student-record system so students could be enrolled in WebCT courses based on module information from SITS.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_114"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the September 2003 Newsletter. Useful for learning-platform and student-system integration. Original item ID: item_167."
  },
  {
    "id": "item_227",
    "date": "2004–2101",
    "displayDate": "2004–2101",
    "sortDate": "2004-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The project participation began in May 2003; reported in the January 2004 Newsletter. Useful for repository history.",
    "title": "HaIRST eprints project",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "St Andrews Library participated in the HaIRST project to pilot open-access institutional repository services using eprints software, metadata and PDF conversion.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_117"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: The project participation began in May 2003; reported in the January 2004 Newsletter. Useful for repository history. Original item ID: item_170."
  },
  {
    "id": "item_228",
    "date": "2004-01",
    "displayDate": "January 2004",
    "sortDate": "2004-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2004 Newsletter. Useful for academic writing and reference-management software.",
    "title": "EndNote volume licence",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "LIS organised a volume licence for EndNote after surveying staff demand, covering both Windows and Macintosh versions.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_116"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2004 Newsletter. Useful for academic writing and reference-management software. Original item ID: item_169."
  },
  {
    "id": "item_229",
    "date": "2004-06",
    "displayDate": "June 2004",
    "sortDate": "2004-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the June 2004 Newsletter. Useful for library storage and shared collection infrastructure.",
    "title": "CASS collaborative academic store",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "St Andrews participated in the Collaborative Academic Store for Scotland pilot, moving less-used journals to a shared external academic store.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_119"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the June 2004 Newsletter. Useful for library storage and shared collection infrastructure. Original item ID: item_172."
  },
  {
    "id": "item_230",
    "date": "2004-06-21",
    "displayDate": "21 June 2004",
    "sortDate": "2004-06-21",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact workshop date is 21 June 2004. Strong digital humanities training item.",
    "title": "Arts and Humanities computing workshop",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A workshop for Arts and Divinity staff and postgraduate students introduced resources including the Oxford Text Archive and Humbul Humanities Hub.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_118"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact workshop date is 21 June 2004. Strong digital humanities training item. Original item ID: item_171."
  },
  {
    "id": "item_231",
    "date": "2004-12",
    "displayDate": "December 2004",
    "sortDate": "2004-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the December 2004 Newsletter. Strong network-infrastructure item.",
    "title": "Backbone network upgraded to 10Gbps",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The University backbone network upgrade was completed, and the backbone was reported as running at 10 Gbps.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_120"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the December 2004 Newsletter. Strong network-infrastructure item. Original item ID: item_173."
  },
  {
    "id": "item_232",
    "date": "2005–2007",
    "displayDate": "2005–2007",
    "sortDate": "2005-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date range is based on December 2005 and April 2007 newsletter articles discussing VPN guidance and expansion. No exact service launch date is given in the sources.",
    "title": "Virtual Private Network (VPN) guidance and expansion",
    "itemType": "system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School",
      "Humanities Computing"
    ],
    "summary": "The VPN gave people working away from St Andrews secure access to University email, licensed Library resources and other restricted services.",
    "whyItMatters": "The VPN allowed staff and students to use restricted University services while working away from campus.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_042",
      "src_043"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Work from home before remote work was normal. Cisco VPN client used for authenticated access to University network services. Evidence quote: “Using Virtual Private Network (VPN) technology, members of the University who are at home or away from St Andrews can have secure access...” Original item ID: SYS026. From prototype content dataset.xlsx sheet 'events'. Remote working begins with broadband and VPN. Evidence quote: “You can set up a Virtual Private Network (VPN), which gives you a St Andrews IP address...” Original item ID: E046. VPN shifts from workaround to broader service. Evidence quote: “We have therefore increased ten-fold the number of slots on the network available for VPN users.” Original item ID: E047. Merged from original item IDs: item_429; item_430."
  },
  {
    "id": "item_233",
    "date": "2005-01",
    "displayDate": "January 2005",
    "sortDate": "2005-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2005 Newsletter. Useful for audiovisual teaching collections.",
    "title": "Film Studies DVD and video collection",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "The Library began planning DVD and video collections for the new Film Studies department, including cataloguing, security, copyright and licensing issues.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_122"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2005 Newsletter. Useful for audiovisual teaching collections. Original item ID: item_175."
  },
  {
    "id": "item_234",
    "date": "2005-01",
    "displayDate": "January 2005",
    "sortDate": "2005-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2005 Newsletter.",
    "title": "Wireless network named “tsunami”",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The University wireless network service was known as “tsunami”, including service in the Library and other locations.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_123"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2005 Newsletter. Original item ID: item_176."
  },
  {
    "id": "item_235",
    "date": "2005-01",
    "displayDate": "January 2005",
    "sortDate": "2005-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2005 Newsletter.",
    "title": "e-Vision for SITS",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "The University purchased e-Vision as a web application for the SITS central student-record system, allowing student and staff data to be displayed and collected through the web.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_121"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2005 Newsletter. Original item ID: item_174."
  },
  {
    "id": "item_236",
    "date": "2005-03",
    "displayDate": "March 2005",
    "sortDate": "2005-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the March 2005 newsletter article. No exact event date is given in the source.",
    "title": "e-Science and EGEE Across Science and the Arts",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Technology",
      "Equipment & Infrastructure",
      "Places and Institutions",
      "People"
    ],
    "summary": "The newsletter introduced grid computing, e-Science and the EGEE project, including a European e-Science perspective from Guy Warner at the National e-Science Centre and an arts-subject perspective from William Kilbride of AHDS Archaeology, University of York.",
    "whyItMatters": "The discussion presented large-scale digital infrastructure as useful to arts and humanities research as well as science.",
    "relatedPeople": [
      "item_419 Guy Warner",
      "item_420 William Kilbride"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_041"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_236] From prototype content dataset.xlsx sheet 'projects_research'. Grid computing as a new research imagination. Linked local readers to wider e-Science, EGEE and arts computing debates. Evidence quote: “Grids are another service that is build on top of the Internet.” Original item ID: PR013. From prototype content dataset.xlsx sheet 'software_network_systems'. Grid computing widens the research network. Grids can share computational power and manage distributed data. Evidence quote: “grids can be used to share computational power... and ... distributed data” Original item ID: SYS031. From prototype content dataset.xlsx sheet 'events'. Grids expand the idea of the Internet for research. Evidence quote: “For some years now the UK has been investing increasing amounts of money into investigating and developing grids for academic research, an area of computing that has become known as e-Science.” Original item ID: E045. Merged from original item IDs: item_439; item_440. | [item_358] From prototype content dataset.xlsx sheet 'places_organisations'. Arts computing meets grid computing. Evidence quote: “Dr William Kilbride (AHDS Archaeology, University of York)” Original item ID: ORG039. | [item_378] From prototype content dataset.xlsx sheet 'places_organisations'. European grids come into local awareness. Evidence quote: “the Enabling Grids for E-sciencE (EGEE) project” Original item ID: ORG040. | [item_382] From prototype content dataset.xlsx sheet 'people'. Explore external experts shaping local e-Science ideas. The quote supports Warner’s role and affiliation. Evidence quote: “The first article by Dr Guy Warner (National e-Science Centre, Edinburgh) will focus on the European context of e-Science.” Original item ID: P027. | [item_400] From prototype content dataset.xlsx sheet 'places_organisations'. External expertise enters local computing debate. Evidence quote: “Dr Guy Warner (National e-Science Centre, Edinburgh)” Original item ID: ORG038. | [item_414] From prototype content dataset.xlsx sheet 'people'. Explore how e-Science was translated for arts subjects. The quote supports Kilbride’s role and topic. Evidence quote: “Dr William Kilbride (AHDS Archaeology, University of York) ... discusses e-Science from the perspective of arts subjects.” Original item ID: P028. | Merged during duplicate/content-related consolidation with: item_358; item_378; item_382; item_400; item_414."
  },
  {
    "id": "item_239",
    "date": "2005-05",
    "displayDate": "May 2005",
    "sortDate": "2005-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific opening day; time is taken from the May 2005 Newsletter. Exhibition continued until 10 June. Strong equipment-history item.",
    "title": "Computers in St Andrews: 40 years on exhibition",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "A Library exhibition marked 40 years of computing service at St Andrews, displaying equipment and media including IBM 1620, IBM 360/44, Digital VAX 11/780, old terminals, storage media, punched cards, paper tape and CDs.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_124"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific opening day; time is taken from the May 2005 Newsletter. Exhibition continued until 10 June. Strong equipment-history item. Original item ID: item_177."
  },
  {
    "id": "item_240",
    "date": "2005-05",
    "displayDate": "May 2005",
    "sortDate": "2005-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the May 2005 Newsletter. Useful for historical collections and metadata.",
    "title": "Sir Steven Runciman library catalogue",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Sir Steven Runciman’s collection of around 4,000 books was added to the Library catalogue, including provenance information and pre-1800 title indexing.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_125"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the May 2005 Newsletter. Useful for historical collections and metadata. Original item ID: item_178."
  },
  {
    "id": "item_241",
    "date": "2005-05",
    "displayDate": "May 2005",
    "sortDate": "2005-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the May 2005 newsletter issue. No exact event date is given in the source.",
    "title": "ePrints initiative with the University Library",
    "itemType": "digital_resource",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology",
      "People",
      "Local to Global",
      "Places and Institutions"
    ],
    "summary": "Jeremy Upton and Janet Aucock led the University Library’s ePrints initiative to provide online access to research outputs.",
    "whyItMatters": "ePrints made University research outputs easier to store, manage and access online.",
    "relatedPeople": [
      "item_417 Jeremy Upton",
      "item_418 Janet Aucock"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_040",
      "src_039"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_241] From prototype content dataset.xlsx sheet 'software_network_systems'. Publication data meets repository work. Institutional repository initiative mentioned as a linked system/project. Evidence quote: “the ePrints initiative being led by Jeremy Upton and Janet Aucock in the Library” Original item ID: SYS029. | [item_393] From prototype content dataset.xlsx sheet 'people'. Explore Library staff as digital research infrastructure builders. The quote supports Aucock’s role in the ePrints initiative. Evidence quote: “the ePrints initiative being led by Jeremy Upton and Janet Aucock in the Library” Original item ID: P025. | [item_394] From prototype content dataset.xlsx sheet 'people'. Explore the Library’s role in research data systems. The quote supports Upton’s role in the ePrints initiative. Evidence quote: “the ePrints initiative being led by Jeremy Upton and Janet Aucock in the Library” Original item ID: P024. | [item_413] From prototype content dataset.xlsx sheet 'places_organisations'. Research support moves online through Library systems. Evidence quote: “the Library in support of University research” Original item ID: ORG033. | Merged during duplicate/content-related consolidation with: item_393; item_394; item_413."
  },
  {
    "id": "item_242",
    "date": "2005-06",
    "displayDate": "June 2005",
    "sortDate": "2005-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the June 2005 Newsletter. Strong library-interface hardware item.",
    "title": "SAULCAT terminals replaced",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Ageing SAULCAT terminals were replaced by custom-built low-power diskless mini-ITX PCs using PXE boot, Debian GNU/Linux and Mozilla Firefox kiosk mode.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_127"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the June 2005 Newsletter. Strong library-interface hardware item. Original item ID: item_180."
  },
  {
    "id": "item_243",
    "date": "2005-06-16",
    "displayDate": "16 June 2005",
    "sortDate": "2005-06-16",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is 16 June 2005. Strong e-Research / digital humanities infrastructure item.",
    "title": "Towards e-Research computing workshop",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The workshop introduced e-Research and grid computing, including EGEE, Diligent, National Grid Service and a session on e-Research in the arts and humanities.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_126"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is 16 June 2005. Strong e-Research / digital humanities infrastructure item. Original item ID: item_179."
  },
  {
    "id": "item_244",
    "date": "2005-08",
    "displayDate": "August 2005",
    "sortDate": "2005-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Licence signed in August 2005; reported in September 2005. Strong teaching digitisation item.",
    "title": "CLA digitisation licence for WebCT readings",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "A three-year trial licence allowed Library staff to digitise limited copyright material for teaching and deliver it through WebCT courses.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_128"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Licence signed in August 2005; reported in September 2005. Strong teaching digitisation item. Original item ID: item_181."
  },
  {
    "id": "item_245",
    "date": "2005-09",
    "displayDate": "September 2005",
    "sortDate": "2005-09-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the September 2005 Newsletter. Very strong digital humanities infrastructure item.",
    "title": "Arts Research and Teaching Server",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The ARTS server supported Faculty of Arts electronic research and teaching projects, including TEI XML bibliographical databases, CALL tools, RSS and links to Humbul / Virtual Training Suite resources.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_129"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the September 2005 Newsletter. Very strong digital humanities infrastructure item. Original item ID: item_182."
  },
  {
    "id": "item_246",
    "date": "2005-09",
    "displayDate": "September 2005",
    "sortDate": "2005-09-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the September 2005 Newsletter.",
    "title": "National e-Science developments for the Arts",
    "itemType": "event",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "e-Science infrastructure offered arts researchers ways to work with large image, audio and video files, distributed data and remote computing resources.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_130"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the September 2005 Newsletter. Original item ID: item_183."
  },
  {
    "id": "item_247",
    "date": "2005-10",
    "displayDate": "October 2005",
    "sortDate": "2005-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the October 2005 newsletter issue reporting the standard PC model. No exact purchase date is given in the source.",
    "title": "Lenovo S51 ThinkCentre selected as standard University PC",
    "itemType": "event; equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "The S51 ThinkCentre had a Pentium 3.2 GHz processor, 1 GB memory, 80 GB disk and CD-writer/DVD-reader combo device.",
    "whyItMatters": "Using one standard model made it easier to provide and support computers across classrooms and public areas.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_030"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'hardware_devices'. Use as a concrete example of mid-2000s everyday computing. Normally supplied with a 17-inch LCD screen display; used in public areas and teaching rooms. Evidence quote: “The model chosen, the S51 ThinkCentre, has a Pentium 3.2 GHz processor, 1 GB memory, 80 GB disk...” Original item ID: H012. From prototype content dataset.xlsx sheet 'events'. Modern PCs become ordinary infrastructure. Evidence quote: “The model chosen, the S51 ThinkCentre, has a Pentium 3.2 GHz processor, 1 GB memory, 80 GB disk...” Original item ID: E035. Merged from original items: item_422; item_423."
  },
  {
    "id": "item_248",
    "date": "2006",
    "displayDate": "2006",
    "sortDate": "2006-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Exact workshop date is 7 November 2006.",
    "title": "Digital images workshop",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "A workshop addressed digital images for Art History, History and Classics, including image database design, online delivery and digital image management.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_133"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact workshop date is 7 November 2006. Original item ID: item_186."
  },
  {
    "id": "item_249",
    "date": "2006-01",
    "displayDate": "January 2006",
    "sortDate": "2006-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2006 Newsletter. Useful public-computing infrastructure item.",
    "title": "PCs for student use exceed 550",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "LIS refreshed classroom hardware and expanded public PCs, including 35 PCs and two printers in the Gateway and 12 updated PCs in Edgecliffe.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_131"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2006 Newsletter. Useful public-computing infrastructure item. Original item ID: item_184."
  },
  {
    "id": "item_250",
    "date": "2006-05",
    "displayDate": "May 2006",
    "sortDate": "2006-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the May 2006 Newsletter. Strong digital humanities / image database item.",
    "title": "Digital images for research and teaching in the Arts",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "IT Services planned support for Arts projects to create image databases for research and teaching, including guidance on copyright, storage and retrieval.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_132"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the May 2006 Newsletter. Strong digital humanities / image database item. Original item ID: item_185."
  },
  {
    "id": "item_251",
    "date": "2006-12",
    "displayDate": "December 2006",
    "sortDate": "2006-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Exact migration date is 23 November 2006. Strong network-infrastructure item. Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "Migration to SuperJANET5",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "FaTMAN migrated from SuperJANET4 to SuperJANET5, increasing the FaTMAN–JANET connection from 622 Mbps to 2.5 Gbps and improving resilience.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_134"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact migration date is 23 November 2006. Strong network-infrastructure item. Original item ID: item_187."
  },
  {
    "id": "item_252",
    "date": "2007",
    "displayDate": "2007",
    "sortDate": "2007-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the October 2007 Newsletter. Useful mobile-computing item.",
    "title": "Mobile communications and smartphones",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "IT Services discussed mobile phones, smartphones, PDAs, Wi-Fi / GPRS / 3G cards, NotifyLink, Meeting Maker synchronisation and Palm / Windows Mobile devices.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_031"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 2007 Newsletter. Useful mobile-computing item. Original item ID: item_192."
  },
  {
    "id": "item_253",
    "date": "2007",
    "displayDate": "2007",
    "sortDate": "2007-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific opening day; time is taken from the October 2007 Newsletter. Exhibition continued until 19 December 2007.",
    "title": "Treasures from Special Collections exhibition",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The Library Special Collections exhibition displayed manuscripts, rare printed books, photographic collections, University muniments, a Greek papyrus and early printed works.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_138"
    ],
    "media": [
      "m_062"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific opening day; time is taken from the October 2007 Newsletter. Exhibition continued until 19 December 2007. Original item ID: item_191."
  },
  {
    "id": "item_254",
    "date": "2007-01",
    "displayDate": "January 2007",
    "sortDate": "2007-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2007 Newsletter. Arts research / teaching requests were routed to the Arts Computing Adviser.",
    "title": "MySQL service for websites",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "IT Services provided MySQL 5.0 facilities for Schools, Units and Student Societies to support database-backed websites using PHP or Perl.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_135"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2007 Newsletter. Arts research / teaching requests were routed to the Arts Computing Adviser. Original item ID: item_188."
  },
  {
    "id": "item_255",
    "date": "2007-06",
    "displayDate": "June 2007",
    "sortDate": "2007-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Exact presentation date is 14 November 2007. Exact presentation date is 5 July 2007. Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "Image database project presentation",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A presentation showed online image database software developed for research and teaching needs after the image database project had run for six months.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_139",
      "src_136"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact presentation date is 14 November 2007. Original item ID: item_193. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact presentation date is 5 July 2007. Original item ID: item_189. Merged from original items: item_263; item_267."
  },
  {
    "id": "item_256",
    "date": "2007-10",
    "displayDate": "October 2007",
    "sortDate": "2007-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the October 2007 newsletter issue. No exact device-arrival date is given in the source.",
    "title": "University evaluates staff smartphone use for email and calendar access",
    "itemType": "event",
    "themeTags": [
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "IT Services published guidance on mobile phones and smartphones for email, calendars, web access, Meeting Maker and NotifyLink.",
    "whyItMatters": "The review helped the University decide how smartphones should be supported and used securely for work.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_031"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. Mobile devices become work infrastructure. Evidence quote: “There has been a great deal of interest among staff at the University in the purchase of smartphones.” Original item ID: E039."
  },
  {
    "id": "item_257",
    "date": "2008-01",
    "displayDate": "January 2008",
    "sortDate": "2008-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2008 Newsletter. Strong teaching-equipment and language-learning item.",
    "title": "Expansion and Upgrading of Computer Classrooms",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "Several computer classrooms were updated: 53 PCs in Bute, 20 PCs in Butts Wynd, 22 PCs in United College, and a Buchanan Multimedia Centre with 33 student stations and Televic hardware/software for foreign-language teaching.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_140"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2008 Newsletter. Strong teaching-equipment and language-learning item. Original item ID: item_194."
  },
  {
    "id": "item_258",
    "date": "2008-03",
    "displayDate": "March 2008",
    "sortDate": "2008-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific launch day; time is taken from the March 2008 Newsletter. Very strong history / non-English text / digital humanities item.",
    "title": "Records of the Parliaments of Scotland online",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "RPS online provided a digital edition of pre-1707 Scottish Parliament records using Folio Views, SGML and TEI P4 XML, including Latin, French, Gaelic and Scots materials with English translation.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_143"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific launch day; time is taken from the March 2008 Newsletter. Very strong history / non-English text / digital humanities item. Original item ID: item_197."
  },
  {
    "id": "item_259",
    "date": "2008-03",
    "displayDate": "March 2008",
    "sortDate": "2008-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the March 2008 Newsletter. Useful for virtual-world teaching technology.",
    "title": "Virtual worlds: Second Life and education",
    "itemType": "event",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Second Life was considered as a possible teaching environment, although network restrictions and frequent software updates made it difficult to use.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_141"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the March 2008 Newsletter. Useful for virtual-world teaching technology. Original item ID: item_195."
  },
  {
    "id": "item_260",
    "date": "2008-03-31",
    "displayDate": "31 March 2008",
    "sortDate": "2008-03-31",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Effective date is 31 March 2008; reported in June 2007.",
    "title": "AHDS funding to cease",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "AHRC and JISC decided to cease funding the Arts and Humanities Data Service, affecting digital curation, metadata standards and repository infrastructure for arts and humanities research data.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_137"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Effective date is 31 March 2008; reported in June 2007. Original item ID: item_190."
  },
  {
    "id": "item_261",
    "date": "2008-04-01",
    "displayDate": "1 April 2008",
    "sortDate": "2008-04-01",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact change date is 1 April 2008. Strong digital humanities infrastructure item. Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "End of the Arts and Humanities Data Service",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "The AHDS ceased to exist as a national organisation from 1 April 2008. Former subject centres included Archaeology Data Service, History Data Service, Oxford Text Archive, Performing Arts Data Service and Visual Arts Data Service.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_142"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact change date is 1 April 2008. Strong digital humanities infrastructure item. Original item ID: item_196."
  },
  {
    "id": "item_262",
    "date": "2008-05",
    "displayDate": "May 2008",
    "sortDate": "2008-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the May 2008 Newsletter. The service began in late 2006.",
    "title": "Digital Research Repository",
    "itemType": "event",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Digital Research Repository, based on DSpace, supported OAI-PMH v2.0, Dublin Core metadata, PDF deposits and electronic theses.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_144"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the May 2008 Newsletter. The service began in late 2006. Original item ID: item_198."
  },
  {
    "id": "item_263",
    "date": "2008-09",
    "displayDate": "September 2008",
    "sortDate": "2008-09-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the September 2008 Newsletter. Strong institutional digital humanities support item.",
    "title": "Developer for Arts and Humanities Computing Projects",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "IT Services established a Developer for Arts and Humanities Computing Projects post to support electronic research projects and teaching tools in the Faculty of Arts. Examples included RPS, Pronunciamiento, image database work and online CALL.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_145"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the September 2008 Newsletter. Strong institutional digital humanities support item. Original item ID: item_199."
  },
  {
    "id": "item_264",
    "date": "2008-09",
    "displayDate": "September 2008",
    "sortDate": "2008-09-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the September 2008 Newsletter.",
    "title": "Development of a Personalised University Web Dashboard",
    "itemType": "project",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A Business Intelligence project planned a personalised staff/student web-based dashboard using the open-source uPortal platform.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_146"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the September 2008 Newsletter. Original item ID: item_200."
  },
  {
    "id": "item_265",
    "date": "2008-11-06",
    "displayDate": "6 November 2008",
    "sortDate": "2008-11-06",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the DLS archive. Useful for HCI and visualisation context. No exact event date is given in the source.",
    "title": "DLS: Human-Computer Interaction",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Alan Dix gave the DLS lecture “Human-Computer Interaction: as it was, as it is, and as it may be”.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_147"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the DLS archive. Useful for HCI and visualisation context. Original item ID: item_201."
  },
  {
    "id": "item_266",
    "date": "2008-12",
    "displayDate": "December 2008",
    "sortDate": "2008-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the December 2008 Newsletter.",
    "title": "Elgg and the Administrative Systems Project",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Administrative Systems Project focused on data management and used the open-source social networking tool Elgg to provide blogs, wikis, communities and file-sharing.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_148"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the December 2008 Newsletter. Original item ID: item_202."
  },
  {
    "id": "item_267",
    "date": "2008-12",
    "displayDate": "December 2008",
    "sortDate": "2008-12-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "IT Services Newsletter Marks Its 35th Year",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Newsletter marked 35 years of publication, noting that it had documented major changes in St Andrews’ computing services, hardware, software and support.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_149"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful as source provenance for the project. Original item ID: item_203."
  },
  {
    "id": "item_268",
    "date": "2009",
    "displayDate": "2009",
    "sortDate": "2009-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the 2009 newsletter context. The source says Confluence had been installed and was being piloted, but no exact purchase or installation date is given.",
    "title": "Confluence wiki and blogging software licensed and piloted",
    "itemType": "software_system",
    "themeTags": [
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "The University bought a Confluence licence and piloted wiki and blogging services with spaces, groups, RSS feeds and access restrictions.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_034"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 2009 Newsletter. Original item ID: item_209. From prototype content dataset.xlsx sheet 'software_network_systems'. The University builds its own social publishing space. Enterprise-level wiki and blogging solution using spaces, groups, access restrictions and RSS feeds. Evidence quote: “Confluence is an enterprise-level wiki and blogging solution...” Original item ID: SYS021. From prototype content dataset.xlsx sheet 'events'. A University-run answer to blogs and wikis. Evidence quote: “we have taken out a licence for Confluence.” Original item ID: E041. Merged from original items: item_388; item_389. Merged from original item IDs: item_363."
  },
  {
    "id": "item_269",
    "date": "2009",
    "displayDate": "2009",
    "sortDate": "2009-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Exact implementation date is given. Useful web-security item.",
    "title": "Encrypted password protection for web pages",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "IT Services planned a bulk update to .htaccess and htaccess.acl files so password-protected pages would use encrypted password entry.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_034"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact implementation date is given. Useful web-security item. Original item ID: item_210."
  },
  {
    "id": "item_270",
    "date": "2009",
    "displayDate": "2009",
    "sortDate": "2009-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the October 2009 Newsletter.",
    "title": "New Helpdesk software procurement",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "Edinburgh, St Andrews and Abertay Dundee worked together to procure new helpdesk software to replace older Call Management Software.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_034"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 2009 Newsletter. Original item ID: item_211."
  },
  {
    "id": "item_271",
    "date": "2009",
    "displayDate": "2009",
    "sortDate": "2009-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the October 2009 Newsletter.",
    "title": "Watsonia online IT training materials",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "IT Services provided downloadable Watsonia training materials for Office, Photoshop, Dreamweaver, InDesign, GoogleMail and related software.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_034"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 2009 Newsletter. Original item ID: item_213."
  },
  {
    "id": "item_272",
    "date": "2009-02",
    "displayDate": "February 2009",
    "sortDate": "2009-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the February 2009 newsletter issue. No exact workshop date is given in the source.",
    "title": "Five-day workshop on Web 2.0 for e-Research",
    "itemType": "teaching",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Local to Global",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "A five-day workshop introduced researchers to Web 2.0 tools for online research and collaboration.",
    "whyItMatters": "The workshop helped researchers explore new online tools for sharing information and working together.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_033"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'teaching_curriculum'. Training for the research web. Evidence quote: “Five-day workshop on Web 2.0 for e-Research” Original item ID: TC009."
  },
  {
    "id": "item_273",
    "date": "2009-02",
    "displayDate": "February 2009",
    "sortDate": "2009-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the February 2009 newsletter issue. No exact connection date is recorded in this row.",
    "title": "University connection to JANET and Internet",
    "itemType": "system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Local to Global",
      "Technology"
    ],
    "summary": "FaTMAN and related network infrastructure connected the University to JANET and the wider Internet.",
    "whyItMatters": "The arrangement provided several network routes, helping the University remain connected if one route failed.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_033"
    ],
    "media": [
      "m_018"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. The diagram behind the scientific web. Network connectivity and resilience through academic/regional network infrastructure. Evidence quote: “University connection to JANET and the Internet” Original item ID: SYS030."
  },
  {
    "id": "item_274",
    "date": "2009-04",
    "displayDate": "April 2009",
    "sortDate": "2009-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the April 2009 Newsletter. Strong Art History / History / image database item.",
    "title": "Corpus of Scottish Medieval Parish Churches online",
    "itemType": "software_system",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The AHRC-funded Corpus of Scottish Medieval Parish Churches project published an online resource using the University image database, VRA Core 4.0 metadata, 1,154 images and 105 sites.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_150"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the April 2009 Newsletter. Strong Art History / History / image database item. Original item ID: item_204."
  },
  {
    "id": "item_275",
    "date": "2009-04",
    "displayDate": "April 2009",
    "sortDate": "2009-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the April 2009 Newsletter. Useful research-information infrastructure item.",
    "title": "Research Information System project",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "St Andrews and Aberdeen jointly procured a web-based Research Information System to replace Research Expertise and integrate information on publications, projects, income, students and research staff.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_150"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the April 2009 Newsletter. Useful research-information infrastructure item. Original item ID: item_205."
  },
  {
    "id": "item_276",
    "date": "2009-06",
    "displayDate": "June 2009",
    "sortDate": "2009-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the June 2009 Newsletter. Useful accessibility and language-materials item.",
    "title": "Alternative Format Suite",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "The Alternative Format Suite produced accessible digital formats for print-disabled students, with special difficulty noted for foreign-language materials and complex diagrams.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_151"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the June 2009 Newsletter. Useful accessibility and language-materials item. Original item ID: item_207."
  },
  {
    "id": "item_277",
    "date": "2009-06",
    "displayDate": "June 2009",
    "sortDate": "2009-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the June 2009 Newsletter. Useful information-security item.",
    "title": "Phishing and spear phishing warning",
    "itemType": "event",
    "themeTags": [
      "Technology"
    ],
    "summary": "Staff and students were warned about phishing and spear-phishing attacks designed to steal University account details.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_151"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the June 2009 Newsletter. Useful information-security item. Original item ID: item_206."
  },
  {
    "id": "item_278",
    "date": "2009-06-01",
    "displayDate": "1 June 2009",
    "sortDate": "2009-06-01",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact start date is given. Useful support-role item.",
    "title": "Academic Liaison Librarian for Social Sciences",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Natalie Thompson began as Academic Liaison Librarian for Social Sciences, supporting library resources, information literacy, web skills and collections development.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_151"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact start date is given. Useful support-role item. Original item ID: item_208."
  },
  {
    "id": "item_279",
    "date": "2009-11-12",
    "displayDate": "12 November 2009",
    "sortDate": "2009-11-12",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "The October 2009 newsletter lists this training course for Thursday, 12 November 2009. Exact date. No exact event date is given in the source.",
    "title": "Writing wikis, blogs and RSS feeds with Confluence",
    "itemType": "teaching",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "The IT training course “Writing wikis, blogs and RSS feeds with Confluence” was scheduled in the October 2009 newsletter.",
    "whyItMatters": "The course helped staff use Confluence to create wikis, blogs and RSS feeds for sharing information online.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_034"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'teaching_curriculum'. Learning to write the social web. Evidence quote: “Writing wikis, blogs and RSS feeds with Confluence (Thursday, 12 November 2009, 10am to 1pm, Swallowgate IT training room)” Original item ID: TC010."
  },
  {
    "id": "item_280",
    "date": "2009-11-13",
    "displayDate": "13 November 2009",
    "sortDate": "2009-11-13",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "",
    "title": "IT training during Reading Week",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "IT Services offered Reading Week training on research data protection, Microsoft Office, Access databases, Confluence wiki/blog/RSS and Dreamweaver CS4.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_034"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact training week is given. Useful digital-skills training item. Original item ID: item_212."
  },
  {
    "id": "item_281",
    "date": "2009-11-13",
    "displayDate": "13 November 2009",
    "sortDate": "2009-11-13",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact meeting dates are given. Useful for research-information systems.",
    "title": "euroCRIS meeting at St Andrews",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "St Andrews hosted a euroCRIS meeting on Current Research Information Systems, CERIF and standardised research-information exchange.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_034"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact meeting dates are given. Useful for research-information systems. Original item ID: item_214."
  },
  {
    "id": "item_282",
    "date": "2010",
    "displayDate": "2010",
    "sortDate": "2010-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Year only. No exact event date is given in the source.",
    "title": "New Communication and Development Practices in the Web Team",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology",
      "Research & Public Impact"
    ],
    "summary": "The Web team used Twitter and a blog for communication and also adopted Agile and Scrum working practices to organise web development work.",
    "whyItMatters": "The Web team adopted new ways to communicate with users and organise its development work.k.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_152"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_282] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 2010 Newsletter. Original item ID: item_217. | [item_283] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the October 2010 Newsletter. Original item ID: item_215. | Merged during duplicate/content-related consolidation with: item_283."
  },
  {
    "id": "item_284",
    "date": "2010",
    "displayDate": "2010",
    "sortDate": "2010-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Reported in October 2010; the migration happened during the summer. Strong teaching-platform item.",
    "title": "Transition from WebCT to Moodle and MMS",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "The University moved from WebCT to Moodle and MMS during the summer, with much higher early use of Moodle and MMS than previous WebCT request levels.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_152"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Reported in October 2010; the migration happened during the summer. Strong teaching-platform item. Original item ID: item_216."
  },
  {
    "id": "item_285",
    "date": "2010-07-22",
    "displayDate": "22 July 2010",
    "sortDate": "2010-07-22",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact article/reporting date for the replacement is stated in the source.",
    "title": "Identity Management Begins Replacing UserReg",
    "itemType": "software_system",
    "themeTags": [
      "Firsts and Milestones",
      "Technology",
      "Everyday Life in School",
      "Research & Public Impact"
    ],
    "summary": "A new Identity Management system replaced the older UserReg system of shell scripts and FORTRAN programs, taking over account creation and management.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_032"
    ],
    "media": [
      "m_019"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. User accounts become integrated infrastructure. Evidence quote: “The new IdM system took over full control of account creation and management from UserReg on 22 July.” Original item ID: E048. From prototype content dataset.xlsx sheet 'projects_research'. The hidden system behind every account. Improved account provisioning, deprovisioning, scalability and integration with services such as Active Directory. Evidence quote: “The new IdM system took over full control of account creation and management from UserReg on 22 July.” Original item ID: PR014. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact takeover date was 22 July 2010; reported in February 2011. Strong systems-infrastructure item. Original item ID: item_223. From prototype content dataset.xlsx sheet 'software_network_systems'. The hidden machinery of digital identity. Event-driven IdM engine fed directory services and managed provisioning/deprovisioning. Evidence quote: “the IdM engine essentially acts as a central ‘broker’, or ‘hub’...” Original item ID: SYS027. Merged from original items: item_294; item_295; item_296; item_297."
  },
  {
    "id": "item_286",
    "date": "2010-10",
    "displayDate": "October 2010",
    "sortDate": "2010-10-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is reported as mid-October 2010 in the October 2010 Newsletter.",
    "title": "Unimail staff email migration and Office upgrades",
    "itemType": "event",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Staff email migration to Unimail began in mid-October 2010, alongside upgrades to Microsoft Office 2010 / 2011 and the use of an online information form.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_152"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Date is reported as mid-October 2010 in the October 2010 Newsletter. Original item ID: item_218."
  },
  {
    "id": "item_287",
    "date": "2011",
    "displayDate": "2011",
    "sortDate": "2011-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the Chronological Report image caption and estimated image metadata. No exact class date is given in the source.",
    "title": "Students using Apple desktop computers in a Jack Cole Building teaching lab",
    "itemType": "hardware",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School",
      "Research & Public Impact"
    ],
    "summary": "Students are shown using rows of Apple desktop computers in a Jack Cole Building teaching lab, likely for a CS1002 class.",
    "whyItMatters": "The photograph records the computers and teaching environment used by students in the Jack Cole Building.",
    "relatedPeople": [
      "item_410 Tom Dalton",
      "item_381 Graham Kirby"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [
      "m_014"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'hardware_devices'. Use the lab image to show everyday modern computing. Exact Apple model is not confirmed from the image or report. The source is the full Chronological Report, p. 16. This row is based on the chronological report. Evidence quote: “Students in the Jack Cole Building using modern computing equipment, 2011.” Original item ID: H013. From prototype content dataset.xlsx sheet 'teaching_curriculum'. A classroom view of modern Computer Science teaching. Evidence quote: “This looks like a CS1002 class.” Original item ID: TC011. From prototype content dataset.xlsx sheet 'events'. A visual snapshot of everyday computing education. Exact external media source not found; source remains Chronological Report. Evidence quote: “Students in the Jack Cole Building using modern computing equipment, 2011.” Original item ID: E038. Merged from original item IDs: item_277; item_420."
  },
  {
    "id": "item_288",
    "date": "2011-01",
    "displayDate": "January 2011",
    "sortDate": "2011-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2011 Newsletter. Useful data-visualisation / BI item.",
    "title": "QlikView version 10 upgrade",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "The QlikView team upgraded the University’s Business Intelligence software to version 10, adding new chart types, web viewing and plugin customisation.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_153"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2011 Newsletter. Useful data-visualisation / BI item. Original item ID: item_220."
  },
  {
    "id": "item_289",
    "date": "2011-01",
    "displayDate": "January 2011",
    "sortDate": "2011-01-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the January 2011 Newsletter.",
    "title": "iSaint for staff",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The iSaint personalised web portal was expanded for staff, bringing together Moodle, MMS, e-Vision, Library records and online examination papers.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_153"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the January 2011 Newsletter. Original item ID: item_219."
  },
  {
    "id": "item_290",
    "date": "2011-01-24",
    "displayDate": "24 January 2011",
    "sortDate": "2011-01-24",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact migration date is given. Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "Meeting Maker data migrated to Unimail",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Meeting Maker data was migrated to Unimail on 24 January 2011, and Meeting Maker / NotifyLink servers were shut down.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_032"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact migration date is given. Original item ID: item_226."
  },
  {
    "id": "item_291",
    "date": "2011-02",
    "displayDate": "February 2011",
    "sortDate": "2011-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the February 2011 newsletter issue. The source says the University had purchased use of BES, but no exact purchase date is given.",
    "title": "Blackberry Enterprise Server purchased for Unimail",
    "itemType": "event; system; equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "The University purchased Blackberry Enterprise Server to support secure email and calendar synchronisation between Blackberry devices and Unimail.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_032"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the February 2011 Newsletter. Original item ID: item_221. From prototype content dataset.xlsx sheet 'software_network_systems'. BlackBerry support joins institutional email. BES enabled secure connection to Unimail and remote synchronisation of email and calendar information. Evidence quote: “Blackberry Enterprise Server (BES)... connect them securely to the Unimail system” Original item ID: SYS023. From prototype content dataset.xlsx sheet 'events'. BlackBerry becomes part of institutional email. Evidence quote: “the University has also purchased the use of a Blackberry Enterprise Server (BES).” Original item ID: E040. Merged from original item IDs: item_352; item_428."
  },
  {
    "id": "item_292",
    "date": "2011-02",
    "displayDate": "February 2011",
    "sortDate": "2011-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the February 2011 newsletter issue. No exact event date is given in the source.",
    "title": "Digital Audio and Video for Teaching and Feedback",
    "itemType": "digital_resource",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "IT Services explored ways to store and deliver digital audio and video and asked staff how these media were used in research, teaching and feedback.",
    "whyItMatters": "The project addressed the growing use of audio and video in teaching, research and student feedback.",
    "relatedPeople": [
      "item_363 Birgit Plietzsch"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_032"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_292] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the February 2011 Newsletter. Original item ID: item_222. | From prototype content dataset.xlsx sheet 'projects_research'. Video becomes institutional infrastructure. Would support research and teaching uses of digital media. Evidence quote: “IT Services is planning to implement a technical solution that meets a wide range of requirements related to the storage and delivery of digital video across the University.” Original item ID: PR015. | Merged duplicate row: item_297 | [item_295] From prototype content dataset.xlsx sheet 'teaching_curriculum'. Teaching needs drive media infrastructure. Evidence quote: “we are also keen to learn from research and teaching staff directly about their academic uses of digital audio and video.” Original item ID: TC012. | Merged during duplicate/content-related consolidation with: item_295."
  },
  {
    "id": "item_293",
    "date": "2011-02",
    "displayDate": "February 2011",
    "sortDate": "2011-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the February 2011 Newsletter.",
    "title": "Planning the Second Phase of Identity Management",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Phase 2 planned to connect IdM to systems including the Library, access control, Moodle and MMS, with roles, self-service password reset and sponsored accounts.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_032"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the February 2011 Newsletter. Original item ID: item_224."
  },
  {
    "id": "item_294",
    "date": "2011-02",
    "displayDate": "February 2011",
    "sortDate": "2011-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the February 2011 Newsletter.",
    "title": "Software Asset Management pilot",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "IT Services ran a Software Asset Management pilot to track software licence usage and improve licence allocation, initially on Windows PCs.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_032"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the February 2011 Newsletter. Original item ID: item_225."
  },
  {
    "id": "item_296",
    "date": "2011-02",
    "displayDate": "February 2011",
    "sortDate": "2011-02-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from the February 2011 newsletter issue. This row records Unimail’s role in BES/Blackberry support, not a system launch date.",
    "title": "Unimail",
    "itemType": "system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "BES was purchased alongside investment in the Unimail email and calendar system, enabling Blackberry devices to synchronise email and calendar information remotely.",
    "whyItMatters": "Connecting Unimail with Blackberry devices allowed staff to use University email and calendars while away from their computers.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_032"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'software_network_systems'. Email moves onto phones. Unified email and calendar service connected with Blackberry Enterprise Server. Evidence quote: “connect them securely to the Unimail system, allowing users to synchronise email and calendar information remotely” Original item ID: SYS028."
  },
  {
    "id": "item_298",
    "date": "2011-03",
    "displayDate": "March 2011",
    "sortDate": "2011-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Strong language-learning / non-English text / CALL item. Event not given with a specific day; time is taken from the March 2011 Newsletter.",
    "title": "GOALS: Grammar Online Accessible Language Study",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Technology"
    ],
    "summary": "GOALS was an online grammar-drills tool developed by Modern Languages, Classics and IT Services. It used language-specific ontologies / dictionaries, linguistic markup and automatic feedback for German and Latin.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_154"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong language-learning / non-English text / CALL item. Event not given with a specific day; time is taken from the March 2011 Newsletter. Original item ID: item_228."
  },
  {
    "id": "item_299",
    "date": "2011-03",
    "displayDate": "March 2011",
    "sortDate": "2011-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the March 2011 Newsletter.",
    "title": "Research computing placements in Arts Computing",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Arts Computing team planned postgraduate placements to support electronic research and teaching projects, including GOALS and the Thomas Hardy Association website.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_154"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the March 2011 Newsletter. Original item ID: item_227."
  },
  {
    "id": "item_300",
    "date": "2011-03",
    "displayDate": "March 2011",
    "sortDate": "2011-03-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Thomas Hardy Association website",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Thomas Hardy Association website, hosted at St Andrews, contained around 3,000 pages and required restructuring, accessibility improvements and a new layout.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_154"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong literary website / digital author archive item. Original item ID: item_229."
  },
  {
    "id": "item_301",
    "date": "2011-04",
    "displayDate": "April 2011",
    "sortDate": "2011-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "",
    "title": "Flipcam cameras in Media Services",
    "itemType": "event",
    "themeTags": [
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "Small high-definition Flipcam cameras allowed lecturers to record content themselves before Media Services converted it for streaming from Moodle or University webpages.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_155"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong teaching video-capture equipment item. Original item ID: item_231."
  },
  {
    "id": "item_302",
    "date": "2011-04",
    "displayDate": "April 2011",
    "sortDate": "2011-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the April 2011 Newsletter.",
    "title": "SPSS for Macintosh under site licence",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "The University’s SPSS site licence included Macintosh versions, although SPSS 18 / PASW 18 on Mac had Java-related graphing problems that needed updates and hotfixes.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_156"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the April 2011 Newsletter. Original item ID: item_232."
  },
  {
    "id": "item_303",
    "date": "2011-04",
    "displayDate": "April 2011",
    "sortDate": "2011-04-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the April 2011 Newsletter.",
    "title": "Video production for teaching and web streaming",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Technology"
    ],
    "summary": "Media Services reported increased video-production work, including foreign-language recordings, lecture web posting, Moodle streaming, DVD authoring and use of Flipcam HD cameras.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_155"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the April 2011 Newsletter. Original item ID: item_230."
  },
  {
    "id": "item_304",
    "date": "2011-04-22",
    "displayDate": "22 April 2011",
    "sortDate": "2011-04-22",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date is given in the DLS archive. No exact event date is given in the source.",
    "title": "DLS: From Recommendation to Reputation",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The DLS lecture “From Recommendation to Reputation: Information Discovery Gets Personal” connected information retrieval, recommendation and personal information discovery.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_166"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact date is given in the DLS archive. Original item ID: item_243."
  },
  {
    "id": "item_305",
    "date": "2011-05",
    "displayDate": "May 2011",
    "sortDate": "2011-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Date is from May 2011 newsletter issues. No exact event date is given in the sources.",
    "title": "School Websites Move to the Upgraded TerminalFour System",
    "itemType": "event",
    "themeTags": [
      "Technology",
      "Equipment & Infrastructure"
    ],
    "summary": "School websites including Computer Science were being migrated into Site Manager, while the Web team planned an upgrade to TerminalFour Site Manager 7.0 to improve the user interface and media/content search.",
    "whyItMatters": "The migration brought School websites into a shared University system and made their content easier to manage.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_158",
      "src_157"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_305] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful institutional web infrastructure item. Original item ID: item_234. | [item_307] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the May 2011 Newsletter. Original item ID: item_233. | Merged during duplicate/content-related consolidation with: item_307."
  },
  {
    "id": "item_306",
    "date": "2011-05",
    "displayDate": "May 2011",
    "sortDate": "2011-05-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the May 2011 Newsletter. Useful accessibility / assistive technology item.",
    "title": "Special needs computer room moved",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The special needs computer room, containing assistive technology, was temporarily moved from the Library to Kennedy Hall during refurbishment.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_159"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the May 2011 Newsletter. Useful accessibility / assistive technology item. Original item ID: item_235."
  },
  {
    "id": "item_308",
    "date": "2011-05-24",
    "displayDate": "24 May 2011",
    "sortDate": "2011-05-24",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact upgrade date is given.",
    "title": "UniDesk upgrade",
    "itemType": "software_system",
    "themeTags": [
      "Technology"
    ],
    "summary": "UniDesk, used for helpdesk call management, was upgraded to version 4.3 SP1.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_160"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Exact upgrade date is given. Original item ID: item_236."
  },
  {
    "id": "item_309",
    "date": "2011-06",
    "displayDate": "June 2011",
    "sortDate": "2011-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the June 2011 Newsletter.",
    "title": "PC classroom upgrade to Windows 7 64-bit",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "PC classroom computers were upgraded to Windows 7 64-bit, with warnings that older 16-bit applications might no longer run.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_161"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the June 2011 Newsletter. Original item ID: item_238."
  },
  {
    "id": "item_310",
    "date": "2011-06",
    "displayDate": "June 2011",
    "sortDate": "2011-06-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the June 2011 Newsletter.",
    "title": "Visitor network access changes",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The uos-visitor wireless network used WPA shared key access, a landing page and visitor credentials for guest network access.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_161"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the June 2011 Newsletter. Original item ID: item_237."
  },
  {
    "id": "item_311",
    "date": "2011-07",
    "displayDate": "July 2011",
    "sortDate": "2011-07-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the July 2011 Newsletter.",
    "title": "Exceed licence expired and Xming replacement",
    "itemType": "equipment",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The University did not renew its Exceed X Server for Windows licence and planned to install the open-source Xming X server in PC classrooms.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_162"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the July 2011 Newsletter. Original item ID: item_239."
  },
  {
    "id": "item_312",
    "date": "2011-08",
    "displayDate": "August 2011",
    "sortDate": "2011-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the August 2011 Newsletter.",
    "title": "Google Apps moved to new infrastructure",
    "itemType": "event",
    "themeTags": [
      "Research & Public Impact"
    ],
    "summary": "The University’s test Google Apps service moved to new infrastructure, with services including Mail, Calendar, Groups, Contacts, Docs, Sites, Talk and Video, using University SSO.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_165"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the August 2011 Newsletter. Original item ID: item_242."
  },
  {
    "id": "item_313",
    "date": "2011-08",
    "displayDate": "August 2011",
    "sortDate": "2011-08-01",
    "datePrecision": "month",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Event not given with a specific day; time is taken from the August 2011 Newsletter.",
    "title": "Merger of IT Services and Business Improvements",
    "itemType": "event",
    "themeTags": [
      "Technology"
    ],
    "summary": "IT Services and Business Improvements were being merged and restructured, with new arrangements expected at the start of September 2011.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_164"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Event not given with a specific day; time is taken from the August 2011 Newsletter. Original item ID: item_241."
  },
  {
    "id": "item_314",
    "date": "2012–2013",
    "displayDate": "2012–2013",
    "sortDate": "2012-01-01",
    "datePrecision": "range",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "The Tumblr archive includes posts from 2012 and 2013. No single exact event date covers the blog.",
    "title": "Computing Society Hack Day Projects on Tumblr",
    "itemType": "digital_resource",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "Everyday Life in School",
      "Humanities Computing",
      "Places and Institutions"
    ],
    "summary": "St Andrews University Computing Society (StACS) used a Tumblr blog to post Hack Day and project updates.",
    "whyItMatters": "The blog records how students shared projects and organised computing activities outside formal teaching.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_035",
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "[item_314] From prototype content dataset.xlsx sheet 'events'. Student computing culture moves onto Tumblr. This quote supports the blog’s use for student computing-society activity. Evidence quote: “Our teams have worked hard into the night and projects are coming to fruition...” Original item ID: E042. | From prototype content dataset.xlsx sheet 'software_network_systems'. Students narrate computing culture online. Tumblr-hosted public blog with posts, archive links and social links. Evidence quote: “Hack Day updates” Original item ID: SYS022. | Merged duplicate row: item_315 | [item_409] From prototype content dataset.xlsx sheet 'places_organisations'. Students tell their own computing stories. Evidence quote: “St Andrews University Computing Society” Original item ID: ORG041. | Merged during duplicate/content-related consolidation with: item_409."
  },
  {
    "id": "item_316",
    "date": "2012-01-08",
    "displayDate": "8 January 2012",
    "sortDate": "2012-01-08",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Proactive contextual information retrieval",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Samuel Kaski’s talk discussed proactive contextual information retrieval, where systems infer user needs and provide relevant multimodal information even without explicit queries.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_167"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful for the long information-retrieval line from 1978 online retrieval to modern personalised retrieval. Original item ID: item_244."
  },
  {
    "id": "item_317",
    "date": "2012-10-15",
    "displayDate": "15 October 2012",
    "sortDate": "2012-10-15",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "DLS: MySQL and Open Source Business",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Monty Widenius, founder of MySQL, gave lectures on MySQL, open source business and entrepreneurship.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_168"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful as a database / open-source continuation item. Original item ID: item_245."
  },
  {
    "id": "item_318",
    "date": "2013-02-21",
    "displayDate": "21 February 2013",
    "sortDate": "2013-02-21",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "DLS: Formal Modelling and Analysis of Deployed Systems",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Muffy Calder gave a DLS lecture on formal modelling and analysis of deployed systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_168"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful research-theme item. Original item ID: item_246."
  },
  {
    "id": "item_319",
    "date": "2013-06-21",
    "displayDate": "21 June 2013",
    "sortDate": "2013-06-21",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Interactive Topic Visualization for Exploratory Text Analysis",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Jacob Eisenstein’s SACHI seminar discussed TopicViz, probabilistic topic models, citation-graph exploration and digital humanities research on large text collections.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_169"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong modern digital humanities / text visualisation / NLP item. Original item ID: item_247."
  },
  {
    "id": "item_320",
    "date": "2013-10-09",
    "displayDate": "9 October 2013",
    "sortDate": "2013-10-09",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "DLS: The Interaction of Representation and Reasoning",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Alan Bundy discussed how representations shape human and computational reasoning.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_168"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful AI / knowledge representation item. Original item ID: item_248."
  },
  {
    "id": "item_321",
    "date": "2014-02-11",
    "displayDate": "11 February 2014",
    "sortDate": "2014-02-11",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Palimpsest: an Edinburgh Literary Cityscape",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Palimpsest project, involving St Andrews researchers, used literary text data and visualisation to create a literary cityscape of Edinburgh.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_170"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong digital humanities / literary geography / visualisation item. Original item ID: item_249."
  },
  {
    "id": "item_322",
    "date": "2014-02-15",
    "displayDate": "15 February 2014",
    "sortDate": "2014-02-15",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date.",
    "title": "Morrison Suite officially opened",
    "itemType": "event",
    "themeTags": [
      "Technology"
    ],
    "summary": "Emeritus Professor and former Head of School Ron Morrison returned to officially open The Morrison Suite.",
    "whyItMatters": "Naming the suite after Ron Morrison recognised his contribution to the School and kept that connection visible in its everyday space.",
    "relatedPeople": [
      "item_052 Ron Morrison"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_051"
    ],
    "media": [
      "m_020"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. The School names and opens a space connected to Ron Morrison’s legacy. Supports the Morrison Suite opening and Morrison’s role. The blog post is dated 15 February 2014; it says the visit happened earlier that week. Evidence quote: Emeritus Professor and former Head of School Ron Morrison visited us earlier this week to officially open The Morrison Suite. Original item ID: E054."
  },
  {
    "id": "item_323",
    "date": "2014-03-09",
    "displayDate": "9 March 2014",
    "sortDate": "2014-03-09",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date is the blog post date; it reports the new MSc in HCI as a recent programme addition. Date certainty: reported_date",
    "title": "MSc in Human–Computer Interaction Introduced",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The School’s MSc portfolio included a new MSc in Human Computer Interaction; CS5042 User Centred Interaction Design was described as a compulsory element delivered by Miguel Nacenta.",
    "whyItMatters": "The new MSc established Human–Computer Interaction as a distinct area of postgraduate teaching at St Andrews.",
    "relatedPeople": [
      "item_397 Miguel Nacenta"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_052"
    ],
    "media": [
      "m_021"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. HCI becomes visible not only as research but also as a named MSc programme. Supports the HCI MSc teaching-programme milestone. Use blog date as reported date, not necessarily the formal programme approval date. Evidence quote: a compulsory element for students studying on our new MSc in Human Computer Interaction Original item ID: E055."
  },
  {
    "id": "item_324",
    "date": "2014-11-25",
    "displayDate": "25 November 2014",
    "sortDate": "2014-11-25",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date can be written as lecture date / reported date.",
    "title": "DLS 2014: Luca Cardelli",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Luca Cardelli gave a DLS lecture connected to reaction networks and computational modelling.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_168"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Date can be written as lecture date / reported date. Original item ID: item_250."
  },
  {
    "id": "item_325",
    "date": "2015",
    "displayDate": "2015",
    "sortDate": "2015-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Role captured from the 2 September 2015 Interaction Lab opening post. Date certainty: reported_date",
    "title": "Al Dearle",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Research & Public Impact",
      "Firsts and Milestones",
      "People"
    ],
    "summary": "Al Dearle officially opened the new Interaction Lab as Dean of Science.",
    "whyItMatters": "Dearle’s involvement in opening the Interaction Lab reflects his role in the School’s research development.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_053"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. The Interaction Lab opening is presented through his role as Dean of Science. Supports his role in the Interaction Lab opening. Evidence quote: Dean of Science, Professor Al Dearle officially opened the new Interaction Lab earlier today. Original item ID: P030."
  },
  {
    "id": "item_326",
    "date": "2015-03-30",
    "displayDate": "30 March 2015",
    "sortDate": "2015-03-30",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "LitLong Edinburgh Launched from the Palimpsest Project",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "LitLong Edinburgh launched as a public-facing literary map and visualisation resource based on the Palimpsest project.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_171"
    ],
    "media": [
      "m_065"
    ],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong literary mapping and digital humanities visualisation item. Original item ID: item_251."
  },
  {
    "id": "item_327",
    "date": "2015-04-02",
    "displayDate": "2 April 2015",
    "sortDate": "2015-04-02",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: What is happening to computer hardware?",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Mothy Roscoe discussed changes in computer hardware and their implications for systems software.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_168"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful broad hardware / systems-software research-theme item. Original item ID: item_252."
  },
  {
    "id": "item_328",
    "date": "2015-09-02",
    "displayDate": "2 September 2015",
    "sortDate": "2015-09-02",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact opening date stated in the source.",
    "title": "Interaction Lab officially opened",
    "itemType": "event",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Professor Al Dearle officially opened the Interaction Lab in the John Honey Building. The lab brought together researchers from SACHI and Open Virtual Worlds.",
    "whyItMatters": "",
    "relatedPeople": [
      "item_325 Al Dearle"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_053",
      "src_172"
    ],
    "media": [
      "m_022"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. A new lab gives physical form to modern interaction and virtual-worlds research. Supports opening date, location and key people. Source is a CS Blog post dated 2 September 2015. Evidence quote: Dean of Science, Professor Al Dearle officially opened the new Interaction Lab earlier today. Original item ID: E056. From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong HCI / research-space infrastructure item. Original item ID: item_253. Merged from original items: item_338; item_339."
  },
  {
    "id": "item_329",
    "date": "2015-11-16",
    "displayDate": "16 November 2015",
    "sortDate": "2015-11-16",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: Scalability and fault-tolerance",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Joe Armstrong, co-inventor of Erlang, discussed scalability and fault-tolerance.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_168"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful distributed-systems and programming-language item. Original item ID: item_255."
  },
  {
    "id": "item_330",
    "date": "2015-11-16",
    "displayDate": "16 November 2015",
    "sortDate": "2015-11-16",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Palimpsest recognised by British Library Labs",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Palimpsest was recognised as runner-up in the Research category of the British Library Labs Awards.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_173"
    ],
    "media": [
      "m_065"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful impact item for the Palimpsest / LitLong line. Original item ID: item_254."
  },
  {
    "id": "item_331",
    "date": "2016-03-31",
    "displayDate": "31 March 2016",
    "sortDate": "2016-03-31",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: Computer Science for All",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Maria Klawe discussed Computer Science for All, computing education and accessibility-related computer science research.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_174"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful CS education / accessibility item. Original item ID: item_256."
  },
  {
    "id": "item_332",
    "date": "2016-11-07",
    "displayDate": "7 November 2016",
    "sortDate": "2016-11-07",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: Distributed Systems and Sensing",
    "itemType": "software_system",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Julie McCann discussed distributed systems and sensing, including sensor-network-related research.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_174"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful networked sensing / pervasive systems item. Original item ID: item_257."
  },
  {
    "id": "item_333",
    "date": "2017-01-23",
    "displayDate": "23 January 2017",
    "sortDate": "2017-01-23",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Tangible interactions in museums",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A SACHI seminar discussed interactive technology for cultural heritage and tangible computing installations for museums, including the EU project meSch.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_175"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong HCI / museum / cultural heritage item. Original item ID: item_258."
  },
  {
    "id": "item_334",
    "date": "2017-03-31",
    "displayDate": "31 March 2017",
    "sortDate": "2017-03-31",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: Algorithms for healthcare-related matching problems",
    "itemType": "event",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact"
    ],
    "summary": "David Manlove discussed algorithmic matching problems with healthcare applications.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_174"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful applied algorithms research-theme item. Original item ID: item_259."
  },
  {
    "id": "item_335",
    "date": "2017-06-16",
    "displayDate": "16 June 2017",
    "sortDate": "2017-06-16",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Finding What to Read: Visual Text Analytics",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Technology"
    ],
    "summary": "Christopher Collins’ SACHI seminar discussed text visualisation, NLP, visual text analytics and the close-reading / distant-reading debate.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_176"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong text visualisation / digital humanities item. Original item ID: item_260."
  },
  {
    "id": "item_336",
    "date": "2017-06-19",
    "displayDate": "19 June 2017",
    "sortDate": "2017-06-19",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "ORCID survey and Digital Research support",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A student survey investigated St Andrews researchers’ awareness and use of ORCID, and the post referenced Digital Research support including Open Access, Research Data Management, Pure, ORCID, Research Computing and Digital Humanities.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_177"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful research identity / digital research infrastructure item. Original item ID: item_261."
  },
  {
    "id": "item_337",
    "date": "2017-06-27",
    "displayDate": "27 June 2017",
    "sortDate": "2017-06-27",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "Immersive Learning keynote by Alan Miller",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Alan Miller gave a keynote on virtual time travel and immersive technologies for museums.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_178"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful Open Virtual Worlds / museum technology item. Original item ID: item_262."
  },
  {
    "id": "item_338",
    "date": "2017-07-05",
    "displayDate": "5 July 2017",
    "sortDate": "2017-07-05",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "Visualisations for insights, curiosity and storytelling",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "Benjamin Bach’s SACHI seminar discussed interactive visualisations, network visualisation, temporal data and data-driven storytelling.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_179"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful information-visualisation methodology item. Original item ID: item_263."
  },
  {
    "id": "item_339",
    "date": "2017-10-10",
    "displayDate": "10 October 2017",
    "sortDate": "2017-10-10",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact lecture date from the Distinguished Lecture Series record.",
    "title": "Ursula Martin DLS: What Every Computer Scientist Should Know About Computer History",
    "itemType": "event; person",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology",
      "People",
      "Humanities Computing"
    ],
    "summary": "Ursula Martin delivered the Distinguished Lecture “What Every Computer Scientist Should Know About Computer History”, with the report context identifying School roles including DLS Coordinator Ian Gent, Principal and Vice-Chancellor Sally Mapstone and Head of School Simon Dobson.",
    "whyItMatters": "The lecture encouraged students and staff to think about computing as a subject with its own history.",
    "relatedPeople": [
      "item_421 Ursula Martin",
      "item_422 Simon Dobson",
      "item_423 Ian Gent",
      "item_424 Sally Mapstone"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_174",
      "src_054"
    ],
    "media": [
      "m_023"
    ],
    "imageNote": "DLS 2017 image from the School blog; individual people are not linked unless clearly identified.",
    "internalNote": "[item_339] From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Highly relevant to the dissertation topic. Original item ID: item_264. From prototype content dataset.xlsx sheet 'events'. A former St Andrews professor returns to frame computer history for current computer scientists. Supports the event date, speaker and theme. Use the event date in start_date; the source is the 19 October 2017 blog report. Evidence quote: On October 10th, we were delighted to welcome back Professor Ursula Martin ... to deliver the semester one distinguished lecture series. Original item ID: E057. Merged from original items: item_350; item_351. | [item_386] From prototype content dataset.xlsx sheet 'people'. The DLS tradition is represented through its coordinator. Supports Gent’s DLS Coordinator role in this event context. Evidence quote: DLS Coordinator, Prof Ian Gent Original item ID: P033. | [item_403] From prototype content dataset.xlsx sheet 'people'. University leadership appears alongside School leadership at the DLS event. Supports her role in the event context. Evidence quote: Principal and Vice-Chancellor, Prof Sally Mapstone Original item ID: P034. | [item_407] From prototype content dataset.xlsx sheet 'people'. The Head of School appears in a public event reconnecting the School with its history. Supports Dobson’s role as Head of School in this event context. Evidence quote: Professor Martin is pictured ... with Head of School, Prof Simon Dobson, DLS Coordinator, Prof Ian Gent and Principal and Vice-Chancellor, Prof Sally Mapstone. Original item ID: P032. | Merged during duplicate/content-related consolidation with: item_386; item_403; item_407."
  },
  {
    "id": "item_340",
    "date": "2018-01-24",
    "displayDate": "24 January 2018",
    "sortDate": "2018-01-24",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "DLS: Functional Foundations for Operating Systems",
    "itemType": "software_system",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Anil Madhavapeddy gave a DLS lecture on functional foundations for operating systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_174"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful systems / programming-language research-theme item. Original item ID: item_265."
  },
  {
    "id": "item_341",
    "date": "2018-03-27",
    "displayDate": "27 March 2018",
    "sortDate": "2018-03-27",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Old French Bible Project",
    "itemType": "project",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Institute of Mediaeval Studies and the School of Computer Science collaborated on large-scale OCR for early French Bible scans, dealing with non-standard character sets, early printed layout, damage and retraining workflows.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_180"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Very strong non-English text / early printed text / OCR / digital humanities item. Original item ID: item_266."
  },
  {
    "id": "item_342",
    "date": "2018-10-04",
    "displayDate": "4 October 2018",
    "sortDate": "2018-10-04",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "DLS: Scalable Intelligent Systems by 2025",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Carl Hewitt gave lectures on scalable intelligent systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_181"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful AI / systems research-theme item. Original item ID: item_267."
  },
  {
    "id": "item_343",
    "date": "2019",
    "displayDate": "2019",
    "sortDate": "2019-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "2019 refers to the reported SICSA Director appointment. Year only.",
    "title": "Aaron Quigley",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Firsts and Milestones",
      "Local to Global",
      "People"
    ],
    "summary": "Aaron Quigley was Chair of HCI, co-founder of SACHI, and was appointed Director of SICSA in 2019.",
    "whyItMatters": "Quigley helped develop HCI research at St Andrews and later took on a wider leadership role in Scottish computing.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_053",
      "src_055"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. HCI leadership at St Andrews becomes visible in both research space and Scottish-wide leadership. Supports Quigley’s HCI and SACHI roles and SICSA appointment. Evidence quote: Aaron, the Chair of Human Computer Interaction co-founded SACHI ... and served as its director from 2011-2018. Original item ID: P031."
  },
  {
    "id": "item_344",
    "date": "2019",
    "displayDate": "2019",
    "sortDate": "2019-01-01",
    "datePrecision": "year",
    "publicDateNote": "No exact date is given in the source.",
    "dateNote": "Official School history gives the year only. Year only. No exact event date is given in the source.",
    "title": "Distinguished Lecture Series 50th anniversary",
    "itemType": "event",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The Distinguished Lecture Series celebrated its 50th anniversary in 2019.",
    "whyItMatters": "The anniversary recognised fifty years of public lectures by leading figures in computing.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_048",
      "src_049"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. The DLS reaches a 50-year milestone. Supports the 2019 DLS anniversary milestone. DLS archive begins in 1969, consistent with the 50th anniversary in 2019. Evidence quote: Part of each academic year is the Distinguished Lecture Series, which celebrated its 50th anniversary in 2019. Original item ID: E058."
  },
  {
    "id": "item_345",
    "date": "2019-03-27",
    "displayDate": "27 March 2019",
    "sortDate": "2019-03-27",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Deep learning for ancient Roman coins",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "An MSc project used deep learning and computer vision to analyse ancient Roman coins.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_182"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful heritage + AI item. Original item ID: item_268."
  },
  {
    "id": "item_346",
    "date": "2019-05-23",
    "displayDate": "23 May 2019",
    "sortDate": "2019-05-23",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date is the CS Blog post date reporting the appointment. Date certainty: reported_date",
    "title": "Aaron Quigley appointed Director of SICSA",
    "itemType": "event",
    "themeTags": [
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Aaron Quigley was appointed Director of SICSA in 2019. At the time, he was Chair of HCI and co-founder of SACHI.",
    "whyItMatters": "The appointment placed a St Andrews professor in a leading role across Scottish computing research.",
    "relatedPeople": [
      "item_343 Aaron Quigley"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_055"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. A St Andrews HCI professor takes a leadership role in Scottish computer science. Supports Quigley’s SICSA appointment and role. Use blog date as reported date; appointment exact effective date may differ. Evidence quote: Professor Aaron Quigley ... has been appointed as the new Director of SICSA. Original item ID: E059."
  },
  {
    "id": "item_347",
    "date": "2019-05-23",
    "displayDate": "23 May 2019",
    "sortDate": "2019-05-23",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date is from the 23 May 2019 Finlaggan reconstruction blog post.",
    "title": "Digital Reconstruction of Finlaggan by Open Virtual Worlds",
    "itemType": "research_project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology",
      "Local to Global",
      "People"
    ],
    "summary": "Open Virtual Worlds created a digital reconstruction of Finlaggan for the Museum of Islay Life. Led by Alan Miller, the project combined historical research, drone footage, photogrammetry and digital modelling.",
    "whyItMatters": "The project used digital reconstruction to present historical and archaeological research to museum visitors.",
    "relatedPeople": [
      "item_425 Sarah Kennedy",
      "item_426 CJ Davies",
      "item_427 Iain Oliver",
      "item_428 Catherine Anne Cassidy"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_056"
    ],
    "media": [
      "m_024"
    ],
    "imageNote": "",
    "internalNote": "[item_347] From prototype content dataset.xlsx sheet 'events'. School research contributes to a public VR heritage exhibit. Supports the project, team and public exhibit context. Use blog date as reported date; the work itself may have developed before publication. Evidence quote: The School of Computer Science’s Open Virtual Worlds team has created a digital reconstruction of the medieval home of the Lords of the Isles at Finlaggan on Islay. Original item ID: E060. | [item_359] From prototype content dataset.xlsx sheet 'people'. Research leadership turns a heritage site into a VR exhibit. Supports Miller’s leadership role in the Finlaggan project. Evidence quote: The digital project was led by Dr Alan Miller of the School of Computer Science. Original item ID: P036. | [item_362] From prototype content dataset.xlsx sheet 'people'. Historical research supports the digital reconstruction of a medieval site. Supports Rhodes’s historical research role. Evidence quote: with additional historical research by Dr Bess Rhodes of the School of History and the School of Computer Science Original item ID: P038. | [item_369] From prototype content dataset.xlsx sheet 'people'. Photogrammetry work connects School technical expertise with heritage interpretation. Supports Davies’s role in the project team. Evidence quote: including work by Computer Science’s Dr CJ Davies Original item ID: P039. | [item_370] From prototype content dataset.xlsx sheet 'people'. Team-based technical work supports a public VR reconstruction. Supports Cassidy’s inclusion in the project team. Evidence quote: Catherine Anne Cassidy Original item ID: P041. | [item_385] From prototype content dataset.xlsx sheet 'people'. Technical capture work supports the School’s virtual heritage research. Supports Oliver’s inclusion in the project team. Evidence quote: Dr Iain Oliver Original item ID: P040. | [item_404] From prototype content dataset.xlsx sheet 'people'. Digital modelling turns historical research into a visible reconstruction. Supports Kennedy’s modelling role. Evidence quote: digital modelling was undertaken by Sarah Kennedy of the School of Computer Science Original item ID: P037. | Merged during duplicate/content-related consolidation with: item_359; item_362; item_369; item_370; item_385; item_404."
  },
  {
    "id": "item_348",
    "date": "2019-10-01",
    "displayDate": "1 October 2019",
    "sortDate": "2019-10-01",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "DLS: Multimodal HCI",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Stephen Brewster’s DLS focused on multimodal human-computer interaction: past, present and future.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_181"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful HCI research-theme item. Original item ID: item_269."
  },
  {
    "id": "item_349",
    "date": "2021-11-09",
    "displayDate": "9 November 2021",
    "sortDate": "2021-11-09",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date can be written as event date / reported date.",
    "title": "Distinguished Lecture by Giovanna Di Marzo Serugendo",
    "itemType": "software_system",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "The 2021 DLS was announced with Giovanna Di Marzo Serugendo, connected to software engineering and adaptive / self-organising systems.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_181"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Date can be written as event date / reported date. Original item ID: item_270."
  },
  {
    "id": "item_350",
    "date": "2023-01-25",
    "displayDate": "25 January 2023",
    "sortDate": "2023-01-25",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Impact and Innovation Funding for Open Virtual Worlds",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Open Virtual Worlds received funding for “Evidencing and Amplifying Impact of Immersive Exhibits in Highlands and Islands Museums”, focused on VR exhibitions and digital heritage engagement.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_183"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Strong modern digital heritage / museum VR item. Original item ID: item_271."
  },
  {
    "id": "item_351",
    "date": "2023-03-14",
    "displayDate": "14 March 2023",
    "sortDate": "2023-03-14",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: Computer Science and the Environment",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Gordon Blair’s DLS discussed the role of computer science in environmental and climate challenges.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_181"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful modern research-theme item. Original item ID: item_272."
  },
  {
    "id": "item_352",
    "date": "2024-03-12",
    "displayDate": "12 March 2024",
    "sortDate": "2024-03-12",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: The Atomic Human",
    "itemType": "event",
    "themeTags": [
      "Equipment & Infrastructure",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Neil Lawrence’s DLS addressed AI, machine learning and human-centred questions in the age of AI.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_181"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful modern AI research-theme item. Original item ID: item_273."
  },
  {
    "id": "item_353",
    "date": "2025-03-18",
    "displayDate": "18 March 2025",
    "sortDate": "2025-03-18",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Exact date. No exact event date is given in the source.",
    "title": "20th anniversary of the official opening of the Jack Cole Building",
    "itemType": "event; person",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Technology"
    ],
    "summary": "The School celebrated the 20th anniversary of the official opening of the Jack Cole Building by Jack McConnell on 18 March 2005.",
    "whyItMatters": "The anniversary recorded the Jack Cole Building’s long-term importance as the School’s main teaching and research space.",
    "relatedPeople": [
      "item_415 Jack McConnell",
      "item_414 Jack Cole"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_057",
      "src_037"
    ],
    "media": [
      "m_025"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'events'. The School marks twenty years in its named building. Supports the 20th anniversary event and the link to the 2005 opening; SRC050 supports the original 2005 opening. Evidence quote: Today the school celebrated its 20th anniversary of the day it was officially opened by the First Minister of Scotland, Jack McConnell MSP, on 18th March 2005. Original item ID: E061."
  },
  {
    "id": "item_354",
    "date": "2025-04-01",
    "displayDate": "1 April 2025",
    "sortDate": "2025-04-01",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "Date includes a reported date from the source; use the event date when explicitly given.",
    "title": "DLS: Data Mining and the Curse of Dimensionality",
    "itemType": "event",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact"
    ],
    "summary": "Arthur Zimek’s DLS focused on data mining and high-dimensional data.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_181"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Useful modern data-mining research-theme item. Original item ID: item_274."
  },
  {
    "id": "item_355",
    "date": "2025-08-27",
    "displayDate": "27 August 2025",
    "sortDate": "2025-08-27",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Open Virtual Worlds fieldwork with Timespan Museum",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Open Virtual Worlds worked with Timespan Museum to digitise archaeological artefacts, historical sites and natural landscapes using 360 photogrammetry and 3D scanning.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_184"
    ],
    "media": [
      "m_067"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Modern extension item. Useful if the visualisation includes contemporary digital heritage. Original item ID: item_275."
  },
  {
    "id": "item_356",
    "date": "2025-09-15",
    "displayDate": "15 September 2025",
    "sortDate": "2025-09-15",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "St Andrews Computer Science at Digital Heritage 2025",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "Open Virtual Worlds researchers presented at Digital Heritage 2025, including work on virtual museums, sociodata and cultural heritage cloud research.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_185"
    ],
    "media": [
      "m_068"
    ],
    "imageNote": "",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Modern extension item. Original item ID: item_276."
  },
  {
    "id": "item_357",
    "date": "2025-10-15",
    "displayDate": "15 October 2025",
    "sortDate": "2025-10-15",
    "datePrecision": "day",
    "publicDateNote": "",
    "dateNote": "No exact event date is given in the source.",
    "title": "Remaking Characters in Heritage Contexts",
    "itemType": "project",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "Technology"
    ],
    "summary": "A PGR seminar project explored immersive environments, digital heritage, character design and inclusive learning for heritage engagement.",
    "whyItMatters": "",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_186"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From Digital Humanities and Key Equipment Source Notes.xlsx; original notes: Modern extension item; include only if the project scope reaches current digital heritage research. Original item ID: item_277."
  },
  {
    "id": "item_361",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Atomic Weapons Establishment / Aldermaston",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Stibbs and Carson had earlier experience with computing facilities connected to Aldermaston / UK Atomic Energy Authority.",
    "whyItMatters": "The connection helps explain the computing experience that Stibbs and Carson brought to the early plans at St Andrews.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_002"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG005."
  },
  {
    "id": "item_363",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "May 2005 and February 2011 are newsletter article dates, not personal dates. The sources mention Plietzsch in relation to Arts Server and digital audio/video feedback.",
    "title": "Birgit Plietzsch",
    "itemType": "person",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "People"
    ],
    "summary": "Birgit Plietzsch worked on the Arts Server project and was later involved in planning for digital audio and video feedback.",
    "whyItMatters": "Plietzsch contributed to digital services for the arts and later to planning for the use of audio and video.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_040",
      "src_032"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Explore continuity between arts server work and digital media services. The quote supports Plietzsch’s role in the Arts Server linkage. Evidence quote: “the Arts Server project with Birgit Plietzsch.” Original item ID: P026."
  },
  {
    "id": "item_364",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "18 March 2005 is the building-opening event date, not a personal date. The source identifies Lang as University Principal at the event.",
    "title": "Brian Lang",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Firsts and Milestones",
      "People",
      "Places and Institutions"
    ],
    "summary": "Brian Lang, then Principal and Vice-Chancellor, attended the official opening of the Jack Cole Building in 2005.",
    "whyItMatters": "Lang’s involvement places the opening of the Jack Cole Building within the University’s wider investment in Computer Science.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_037",
      "src_001"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Explore how computing facilities were framed as University strategy. The quote supports Lang’s role at the opening. Evidence quote: “At the opening, the University’s Principal and Vice-Chancellor Dr Brian Lang said...” Original item ID: P019."
  },
  {
    "id": "item_367",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "CAMTEC",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Computer Users Committee raised concerns about CAMTEC’s support for the Cambridge Ring as the company shifted its attention towards Ethernet products.",
    "whyItMatters": "The record documents the difficulty of obtaining reliable supplier support for the University’s early network.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_019"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG027."
  },
  {
    "id": "item_368",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "CHEST",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "CHEST contacted suppliers to confirm whether their software and equipment would continue to work correctly after the year 2000.",
    "whyItMatters": "CHEST helped the University obtain information from suppliers while checking systems for Year 2000 problems.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_027"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG025."
  },
  {
    "id": "item_372",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Department of Astronomy",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The new computing laboratory was initially run by the Department of Astronomy.",
    "whyItMatters": "The need for astronomical calculation was one of the main reasons the University established its first Computing Laboratory.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_002",
      "src_005"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. astronomy was a major driver of early computing at St Andrews. Original item ID: ORG007."
  },
  {
    "id": "item_375",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "no exact external date has been found for Hamilton’s work or departure party.",
    "title": "Doug Hamilton",
    "itemType": "person",
    "themeTags": [
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "People",
      "Everyday Life in School"
    ],
    "summary": "Doug Hamilton trained arts staff to use technology for learning and communication, working in areas including Management and Ancient Greek.",
    "whyItMatters": "Hamilton helped staff in arts subjects use digital tools in teaching, learning and communication.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Explore the “human infrastructure” behind arts computing at St Andrews: who trained non-computer-science staff could only confirm this person from Chronological Report p. 14 Original item ID: P015."
  },
  {
    "id": "item_377",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Dundee",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Cole describes early computing links with Dundee, including staff and students from St Andrews Colleges using the Dundee machine.",
    "whyItMatters": "Before St Andrews had its own service, staff and students relied partly on computing facilities in Dundee.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_003"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG008."
  },
  {
    "id": "item_379",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "FaTMAN",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The February 2009 diagram shows FaTMAN connecting the University to JANET and the Internet.",
    "whyItMatters": "FaTMAN formed part of the regional network that connected St Andrews to JANET and the Internet.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_033"
    ],
    "media": [
      "m_018"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. A regional layer of connectivity. Evidence quote: “University connection to JANET and the Internet” Original item ID: ORG037."
  },
  {
    "id": "item_381",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "No personal date is recorded here. The sources identify Kirby through current/archival profile information and through his supervisory relationship with Tom Dalton",
    "title": "Graham Kirby",
    "itemType": "person",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "People",
      "Everyday Life in School"
    ],
    "summary": "Graham Kirby supervised Tom Dalton’s 2022 PhD on handling uncertainty in data linkage.",
    "whyItMatters": "Kirby’s record adds a later example of research supervision in data linkage at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_044",
      "src_045",
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Use as a bridge from teaching to research careers. The source verifies Kirby’s academic identity and research context; the Tom Dalton line verifies the supervision connection. Evidence quote: “I’m also interested in distributed systems and programming languages in general.” Original item ID: P017."
  },
  {
    "id": "item_384",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "IBM",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "IBM supplied the IBM 1620 Model II system used for the first full-time Computing Laboratory service.",
    "whyItMatters": "IBM supplied the 1620, the computer on which the University’s first full-time computing service was based.",
    "relatedPeople": [
      "item_007 Walter Stibbs"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_002",
      "src_005"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG006."
  },
  {
    "id": "item_387",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Information Technology Services",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School",
      "Build the School",
      "Research & Public Impact"
    ],
    "summary": "Information Technology Services managed computer classrooms, mobile communications, VPN, Confluence and Identity Management.",
    "whyItMatters": "IT Services brought academic computing, administrative systems and user support into one University-wide service.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_029",
      "src_031",
      "src_032",
      "src_034",
      "src_042",
      "src_043",
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. The hidden service layer behind modern computing. Evidence quote: “IT Services is planning to implement a technical solution...” Original item ID: ORG034. could only confirm the merger detail from Chronological Report Original item ID: ORG019. Merged from original items: item_412; item_413."
  },
  {
    "id": "item_388",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "The Chronological Report mentions International Computers Limited, now Fujitsu, in connection with PS-algol users.",
    "title": "International Computers Limited / Fujitsu",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Chronological Report identifies International Computers Limited, now Fujitsu, as a notable industrial user context for PS-algol.",
    "whyItMatters": "ICL’s use of PS-algol demonstrates that the language had applications beyond academic research.",
    "relatedPeople": [
      "item_052 Ron Morrison"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Could support a local-to-global programming language research story. could only confirm the merger detail from Chronological Report Evidence quote: notably with International Computers Limited (now Fujitsu) Original item ID: ORG015."
  },
  {
    "id": "item_389",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "JANET",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Local to Global",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The University network diagram shows JANET linking St Andrews with the Internet.",
    "whyItMatters": "JANET connected St Andrews to the national academic network and the services available through it.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_033"
    ],
    "media": [
      "m_018"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. The national network behind campus connectivity. Evidence quote: “University connection to JANET and the Internet” Original item ID: ORG036."
  },
  {
    "id": "item_395",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Main Library computer area",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Teaching & Student Use",
      "Research & Public Impact",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "The report image caption describes rows of personal computers situated in the Main Library to serve non-computer science students.",
    "whyItMatters": "The computer area gave students outside Computer Science access to digital facilities in a central University location.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [
      "m_012"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG021."
  },
  {
    "id": "item_396",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Management Information Services",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "Management Information Services is identified in the report as the unit that merged with the Computing Laboratory to create Information Technology Services.",
    "whyItMatters": "Its merger with the Computing Laboratory helped create the broader IT Services organisation.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. could only confirm this detail from Chronological Report Original item ID: ORG020."
  },
  {
    "id": "item_397",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 9 March 2014 MSc HCI blog post.",
    "title": "Miguel Nacenta",
    "itemType": "person",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "People"
    ],
    "summary": "Miguel Nacenta delivered CS5042 User Centred Interaction Design, a compulsory element of the new MSc in Human Computer Interaction.",
    "whyItMatters": "Nacenta’s teaching supported the development of the School’s new MSc in Human–Computer Interaction.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_052"
    ],
    "media": [],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. The new HCI MSc is represented through a named teaching contributor. Supports Nacenta’s role in the HCI MSc item. Evidence quote: The module delivered by Miguel Nacenta is a compulsory element for students studying on our new MSc in Human Computer Interaction. Original item ID: P035."
  },
  {
    "id": "item_398",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "The report note connects Murray Cole to the Murray Polygon; no personal date is recorded in this row. The University of Edinburgh source verifies his computer-science identity but is not a date for the St Andrews building feature.",
    "title": "Murray Cole",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "Research & Public Impact",
      "Firsts and Milestones",
      "People"
    ],
    "summary": "Murray Cole, Jack Cole’s son, held a Personal Chair in Patterned Parallel Computing at the University of Edinburgh.",
    "whyItMatters": "His connection explains the name and personal background of the Murray Polygon displayed in the Jack Cole Building.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_046"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Explore the family link behind the building’s floor feature. Chronological Report supports the family/building connection; SRC046 verifies Murray Cole’s academic identity. Evidence quote: “The Murray Polygon is named after Jack’s son Murray Cole, who is also a Computer Scientist, working at the University of Edinburgh.” Original item ID: P021."
  },
  {
    "id": "item_399",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Nancy University",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Research & Public Impact",
      "Local to Global",
      "Places and Institutions",
      "Technology",
      "Everyday Life in School"
    ],
    "summary": "An ALGOL 60 compiler used in the Computing Laboratory context was obtained from Nancy University.",
    "whyItMatters": "The compiler from Nancy is an early example of software being shared between universities, even though it could not be made to work fully at St Andrews.",
    "relatedPeople": [
      "item_006 Tony Davie"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_003"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG009."
  },
  {
    "id": "item_401",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "The Chronological Report image caption identifies Paterson but does not give a date for the photograph.",
    "title": "Norman Paterson",
    "itemType": "person",
    "themeTags": [
      "People",
      "Everyday Life in School"
    ],
    "summary": "Norman Paterson appears in the front row of a photograph taken in the John Honey coffee area. He worked as a Scientific Officer in the School for many years.",
    "whyItMatters": "Paterson’s long service as a Scientific Officer reflects the contribution of technical staff to the School over many years.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001"
    ],
    "media": [
      "m_007"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Could be included in a department culture or community story if more sources are found. Supports Paterson’s identification in the coffee area image caption. No external URL confirming this identity was found in the current materials. Evidence quote: Norman Paterson, furthest right, who was Scientific Officer in the School for many years Original item ID: P011."
  },
  {
    "id": "item_402",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "March 1980 is the issue date of the Computing Laboratory Newsletter item that names Robertson as the contact for the Cromemco System 3 and Digital MINC systems; it is not a employment date.",
    "title": "Phillip Robertson",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People",
      "Places and Institutions",
      "Everyday Life in School"
    ],
    "summary": "Phillip Robertson supported users interested in the Cromemco System 3 and Digital MINC systems.",
    "whyItMatters": "Robertson helped users explore two early microprocessor systems available through the Computing Laboratory.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_016"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Explore who mediated early access to microprocessors Source identifies Robertson as a contact Evidence quote: Interested users should contact Phillip Robertson.“Anyone wishing to use the systems or discuss their potential should contact Phillip Robertson.” Original item ID: P012."
  },
  {
    "id": "item_410",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "The 2011 date belongs to the Chronological Report image caption, not to Dalton as a personal date. His later PhD identity is verified by the Digitising Scotland profile and Graham Kirby profile; those pages do not give a personal birth or appointment date.",
    "title": "Tom Dalton",
    "itemType": "person",
    "themeTags": [
      "Teaching & Student Use",
      "Research & Public Impact",
      "People",
      "Everyday Life in School"
    ],
    "summary": "Tom Dalton studied Computer Science at St Andrews and later undertook a PhD under Alan Dearle and Graham Kirby.",
    "whyItMatters": "Dalton’s record provides a recent example of doctoral research in data linkage at St Andrews.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_045",
      "src_044"
    ],
    "media": [
      "m_014"
    ],
    "imageNote": "",
    "internalNote": "From prototype content dataset.xlsx sheet 'people'. Follow one student from classroom to PhD research. The quote supports the image identification and the 2011 classroom context; SRC045/SRC044 verify Dalton’s later PhD link. Evidence quote: “The closest student in the white t-shirt is Tom Dalton who started their undergraduate course in 2011 and then went on to do his PhD with Prof. Graham Kirby.” Original item ID: P016."
  },
  {
    "id": "item_411",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "UKERNA",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Equipment & Infrastructure",
      "Research & Public Impact",
      "Local to Global",
      "Misuse and Security",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "UKERNA advice is included in the November 1996 newsletter article about offensive e-mail and junk mail.",
    "whyItMatters": "UKERNA’s advice helped the University respond to problems caused by offensive and unwanted email.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_025"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG026."
  },
  {
    "id": "item_412",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "University of St Andrews",
    "itemType": "place_or_organisation",
    "themeTags": [
      "Build the School",
      "Equipment & Infrastructure",
      "Humanities Computing",
      "Places and Institutions",
      "Technology"
    ],
    "summary": "The Computing Laboratory was established within the University of St Andrews.",
    "whyItMatters": "The University supported the development of computing from an early central service into a School and wider IT infrastructure.",
    "relatedPeople": [
      "item_007 Walter Stibbs",
      "item_008 T. R. Carson",
      "item_413 Sheila Hill",
      "item_414 Jack Cole"
    ],
    "relatedEquipment": [],
    "sources": [
      "src_001",
      "src_002",
      "src_003",
      "src_005",
      "src_006"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "From prototype content dataset.xlsx sheet 'places_organisations'. Original item ID: ORG001."
  },
  {
    "id": "item_415",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "",
    "title": "Jack McConnell",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People",
      "Places and Institutions"
    ],
    "summary": "Jack McConnell was First Minister of Scotland and officially opened the Jack Cole Building in 2005.",
    "whyItMatters": "The First Minister’s involvement gave the opening of the Jack Cole Building recognition beyond the University.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_036",
      "src_037",
      "src_057"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P018; related to item_215 and item_353."
  },
  {
    "id": "item_416",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "May 2005 is the newsletter article date for the Research Expertise database project, not a personal appointment date.",
    "title": "Hamish Lawson",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Resources",
      "People"
    ],
    "summary": "Hamish Lawson was named as a Business Improvements staff/project contributor for the Research Expertise database project.",
    "whyItMatters": "Lawson contributed to the work of bringing information about University researchers and their expertise online.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_040"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P022; related to item_216."
  },
  {
    "id": "item_417",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "May 2005 is the newsletter article date; it records Upton’s connection to the ePrints initiative but does not provide a personal date.",
    "title": "Jeremy Upton",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Resources",
      "People"
    ],
    "summary": "Jeremy Upton was named as one of the leads of the ePrints initiative in the University Library.",
    "whyItMatters": "Upton helped develop online access to the University’s research publications.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_040"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P024; related to item_241 and item_216."
  },
  {
    "id": "item_418",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "May 2005 is the newsletter article date; it records Aucock’s connection to the ePrints initiative but does not provide a personal date.",
    "title": "Janet Aucock",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Resources",
      "People"
    ],
    "summary": "Janet Aucock was named as one of the leads of the ePrints initiative in the University Library.",
    "whyItMatters": "Aucock helped the University Library develop its online repository for research outputs.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_040"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P025; related to item_241 and item_216."
  },
  {
    "id": "item_419",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "March 2005 is the newsletter article date; the source says Warner would contribute an article on EGEE/e-Science, not a personal date.",
    "title": "Guy Warner",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Resources",
      "People"
    ],
    "summary": "Guy Warner of the National e-Science Centre was named as a contributor on the European context of e-Science.",
    "whyItMatters": "Warner brought experience of European grid computing into the University’s discussion of e-Science.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_041"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P027; related to item_236."
  },
  {
    "id": "item_420",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "March 2005 is the newsletter article date; the source says Kilbride would contribute a later article on e-Science from arts subjects, not a personal date.",
    "title": "William Kilbride",
    "itemType": "person",
    "themeTags": [
      "Humanities Computing",
      "Research & Public Impact",
      "People"
    ],
    "summary": "William Kilbride of AHDS Archaeology was named as a contributor discussing e-Science from the perspective of arts subjects.",
    "whyItMatters": "Kilbride explained how e-Science could support archaeology and other arts research, not only scientific work",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_041"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P028; related to item_236."
  },
  {
    "id": "item_422",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 2017 Ursula Martin DLS report.",
    "title": "Simon Dobson",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People"
    ],
    "summary": "Simon Dobson is identified as Head of School in the Ursula Martin DLS report.",
    "whyItMatters": "As Head of School, Dobson took part in an event that revisited the School’s computing history.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_054"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P032; related to item_339."
  },
  {
    "id": "item_423",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 2017 Ursula Martin DLS report.",
    "title": "Ian Gent",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People"
    ],
    "summary": "Ian Gent is identified as DLS Coordinator in the Ursula Martin DLS report.",
    "whyItMatters": "Gent’s role as coordinator reflects the work required to maintain the Distinguished Lecture Series over time.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_054"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P033; related to item_339."
  },
  {
    "id": "item_424",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 2017 Ursula Martin DLS report.",
    "title": "Sally Mapstone",
    "itemType": "person",
    "themeTags": [
      "Build the School",
      "People",
      "Places and Institutions"
    ],
    "summary": "Sally Mapstone is identified as Principal and Vice-Chancellor in the Ursula Martin DLS report.",
    "whyItMatters": "The Principal’s participation gave the lecture wider recognition across the University.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_054"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P034; related to item_339."
  },
  {
    "id": "item_425",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 23 May 2019 Finlaggan reconstruction blog post.",
    "title": "Sarah Kennedy",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Heritage",
      "People"
    ],
    "summary": "Sarah Kennedy undertook digital modelling for the Finlaggan virtual reconstruction.",
    "whyItMatters": "Kennedy’s digital modelling helped turn research on Finlaggan into a visual reconstruction.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_056"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P037; related to item_347."
  },
  {
    "id": "item_426",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 23 May 2019 Finlaggan reconstruction blog post.",
    "title": "CJ Davies",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Heritage",
      "People"
    ],
    "summary": "CJ Davies contributed to drone footage and photogrammetry work for the Finlaggan project team.",
    "whyItMatters": "Davies helped create the photographic and spatial data used to reconstruct Finlaggan digitally.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_056"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P039; related to item_347."
  },
  {
    "id": "item_427",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 23 May 2019 Finlaggan reconstruction blog post.",
    "title": "Iain Oliver",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Heritage",
      "People"
    ],
    "summary": "Iain Oliver contributed to the project team’s drone footage and photogrammetry work.",
    "whyItMatters": "Oliver’s drone and photogrammetry work supported the detailed digital model of the site.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_056"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P040; related to item_347."
  },
  {
    "id": "item_428",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "Role captured from the 23 May 2019 Finlaggan reconstruction blog post.",
    "title": "Catherine Anne Cassidy",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Heritage",
      "People"
    ],
    "summary": "Catherine Anne Cassidy was part of the project team for drone footage and photogrammetry in the Finlaggan reconstruction.",
    "whyItMatters": "Cassidy contributed to the fieldwork used to create the Finlaggan reconstruction.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_056"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P041; related to item_347."
  },
  {
    "id": "item_429",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "May 2005 is the newsletter article date; November 2002 and November 2004 are database-history dates, not personal dates.",
    "title": "Anna Clements",
    "itemType": "person",
    "themeTags": [
      "Research & Public Impact",
      "Digital Resources",
      "People"
    ],
    "summary": "Anna Clements developed the Research Expertise database in her role as Database Officer at Research and Enterprise Services and was later named in connection with the online extension project.",
    "whyItMatters": "Clements led the development of a database that made information about University research and expertise easier to access.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_040"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P023; related to item_216."
  },
  {
    "id": "item_430",
    "date": "",
    "displayDate": "Date unknown",
    "sortDate": "",
    "datePrecision": "unknown",
    "publicDateNote": "Date unknown.",
    "dateNote": "March 1996 is the date of the IT Services Newsletter article reproducing/circulating JANET-CERT copyright guidance; it is not a personal date.",
    "title": "Dennis Jackson",
    "itemType": "person",
    "themeTags": [
      "Technology",
      "Research & Public Impact",
      "People"
    ],
    "summary": "Dennis Jackson is named as the JANET-CERT source/author for the March 1996 newsletter warning about copyright material on information servers.",
    "whyItMatters": "Jackson’s guidance helped connect the University’s copyright problem with national advice for academic networks.",
    "relatedPeople": [],
    "relatedEquipment": [],
    "sources": [
      "src_024"
    ],
    "media": [],
    "imageNote": "No verified image or media is linked.",
    "internalNote": "Added from prototype people P014; related to item_182."
  }
];

const SOURCES = [
  {
    "sourceId": "src_001",
    "sourceTitle": "Chronological Report",
    "sourceType": "report",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "",
    "note": "Secondary chronological report Secondary report compiled from several sources"
  },
  {
    "sourceId": "src_002",
    "sourceTitle": "The role of Astronomy in the establishment of the University Computing Laboratory in St Andrews",
    "sourceType": "blog_post",
    "date": "2022-09-26",
    "displayDate": "26 September 2022",
    "sortDate": "2022-09-26",
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/09/26/the-role-of-astronomy-in-the-establishment-of-the-university-computing-laboratory-in-st-andrews/",
    "note": "Stibbs' account of the astronomy background to computing at St Andrews, the push for a Computing Laboratory, the IBM 1620 specification, the Observatory location, Carson’s role, and Cole’s later appointment as Director. astronomy; early computing; Computing Laboratory; IBM 1620; Walter Stibbs; T. R. Carson; Jack Cole; University Observatory; Mathematical Institute University Collections blog Republished from the 1990 Computing Lab Newsletter. Key source for early establishment events."
  },
  {
    "sourceId": "src_003",
    "sourceTitle": "A note on the early days of computing in and related to St Andrews University – Part I",
    "sourceType": "blog_post",
    "date": "2022-10-31",
    "displayDate": "31 October 2022",
    "sortDate": "2022-10-31",
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/10/31/a-note-on-the-early-days-of-computing-in-and-related-to-st-andrews-university-part-i/",
    "note": "Jack Cole’s account of early computing, his appointment to St Andrews, early computing links with Glasgow and Dundee, and early software such as FORTRAN, SPS and ALGOL. Jack Cole; early computing; IBM 1620; FORTRAN; SPS; ALGOL; Dundee; Glasgow; early programming University Collections blog Useful for software and programming-language details around the IBM 1620 period."
  },
  {
    "sourceId": "src_004",
    "sourceTitle": "Plugging St Andrews in",
    "sourceType": "website",
    "date": "2015-09-30",
    "displayDate": "30 September 2015",
    "sortDate": "2015-09-30",
    "url": "https://news.st-andrews.ac.uk/archive/plugging-st-andrews-in/",
    "note": "Public-facing news article about early computing at St Andrews, including the first computer service and later IBM 360/44 replacement. early computing; IBM 1620; IBM 360/44; first computer service; public history University news page. Photo credit for the top image is Alex Coupar; Useful for broader public-facing interpretation and later timeline extension."
  },
  {
    "sourceId": "src_005",
    "sourceTitle": "The beginning of the service",
    "sourceType": "blog_post",
    "date": "2022-10-10",
    "displayDate": "10 October 2022",
    "sortDate": "2022-10-10",
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/10/10/the-beginning-of-the-service/",
    "note": "Carson’s account of the start of full-time Computing Laboratory service, IBM 1620 configuration, Scott Lang Building location, and the IBM 1620 image. full-time service; IBM 1620; Scott Lang Building; University Observatory; IBM 1620 configuration; Alex Coupar IBM 1620 image credited to Alex Coupar / Dundee University Archives MS 258 Gives exact full-time service start date and detailed IBM 1620 configuration."
  },
  {
    "sourceId": "src_006",
    "sourceTitle": "The first computer operator",
    "sourceType": "blog_post",
    "date": "2022-12-02",
    "displayDate": "2 December 2022",
    "sortDate": "2022-12-02",
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/12/02/the-first-computer-operator/",
    "note": "Sheila Hill’s account of becoming the first computer operator and operating the IBM 1620, with later reflections by P. G. Adamson. Sheila Hill; first computer operator; IBM 1620; operator work; card reader; printer; everyday computing University Collections blog; IBM 1620 images credited through original archive sources. Important source for hidden figures, operator labour, and everyday computing experiences."
  },
  {
    "sourceId": "src_007",
    "sourceTitle": "Professor D.W.N. Stibbs, Astronomy",
    "sourceType": "image_source",
    "date": "1989",
    "displayDate": "1989",
    "sortDate": "1989-01-01",
    "url": "https://collections.st-andrews.ac.uk/series/professor-dwn-stibbs-astronomy/582358",
    "note": "University Collections record for a black-and-white portrait photograph of Professor D. W. N. Stibbs. Walter Stibbs; portrait; University Photography Collection; astronomy © The University of St Andrews. Conditions: CC BY-NC Creative Commons Attribution-NonCommercial 4.0 International Public License. Credit line: Courtesy of the University of St Andrews Libraries and Museums, ID: PGA-P745."
  },
  {
    "sourceId": "src_008",
    "sourceTitle": "Dr T.R. Carson, Astronomy",
    "sourceType": "image_source",
    "date": "1989-08",
    "displayDate": "August 1989",
    "sortDate": "1989-08-01",
    "url": "https://collections.st-andrews.ac.uk/series/dr-tr-carson-astronomy/582315",
    "note": "University Collections record for a black-and-white portrait photograph of Dr T. R. Carson. T. R. Carson; portrait; University Photography Collection; astronomy © The University of St Andrews. Conditions: CC BY-NC Creative Commons Attribution-NonCommercial 4.0 International Public License. Credit line: Courtesy of the University of St Andrews Libraries and Museums, ID: PGA-P692."
  },
  {
    "sourceId": "src_009",
    "sourceTitle": "A note on the early days of computing in and related to St Andrews University – Part II",
    "sourceType": "blog_post",
    "date": "2022-11-03",
    "displayDate": "3 November 2022",
    "sortDate": "2022-11-03",
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/11/03/a-note-on-the-early-days-of-computing-in-and-related-to-st-andrews-university-part-ii/",
    "note": "Jack Cole’s account of the development of the Computing Laboratory after the IBM 1620 period, including the move to the Mathematics Institute, IBM 360/44 installation, staff expansion, Honeywell 316, early Computational Science, CLUSTAN, and seminar activity. University Collections blog"
  },
  {
    "sourceId": "src_010",
    "sourceTitle": "DLS entry: Algol '68 by W. van der Poel",
    "sourceType": "archive_page",
    "date": "1969",
    "displayDate": "1969",
    "sortDate": "1969-01-01",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#algol-68",
    "note": "Specific DLS archive entry for the 1969 lecture Algol '68 by W. van der Poel, affiliated with the University of Amsterdam. Distinguished Lecture Series; Algol '68; W. van der Poel; Easter Seminars; lecture series; external speakers Archive page"
  },
  {
    "sourceId": "src_011",
    "sourceTitle": "Some problems in the theory and application of the methods of numerical taxonomy",
    "sourceType": "thesis_repository_record",
    "date": "1970",
    "displayDate": "1970",
    "sortDate": "1970-01-01",
    "url": "https://research-repository.st-andrews.ac.uk/handle/10023/10121",
    "note": "Repository record for David Wishart’s 1970 PhD thesis on numerical taxonomy and cluster analysis methods. The abstract describes computational procedures and a comprehensive package of computer programs for cluster analysis. David Wishart; CLUSTAN; cluster analysis; numerical taxonomy; PhD thesis; Computational Science"
  },
  {
    "sourceId": "src_012",
    "sourceTitle": "Computing Laboratory Newsletter, April 1980: changeover to the VAX systems",
    "sourceType": "newsletter",
    "date": "1980-04",
    "displayDate": "April 1980",
    "sortDate": "1980-04-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1980/ocr198004.pdf",
    "note": "Specific Computing Laboratory Newsletter issue describing the changeover from the IBM 360/44 to the Digital Equipment dual-processor VAX 11/780 system, delivery schedules, terminal arrangements, user registration, and VAX courses. VAX 11/780; IBM 360/44; 1980 changeover; Computing Laboratory; terminal access; VAX courses Archived Computing Laboratory Newsletter"
  },
  {
    "sourceId": "src_013",
    "sourceTitle": "The way we were . . . IBM 360/44",
    "sourceType": "newsletter",
    "date": "2005-02",
    "displayDate": "February 2005",
    "sortDate": "2005-02-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/02/historical360.html",
    "note": "Specific historical newsletter article about the IBM 360/44, including its installation in 1969, location in the Mathematics Institute, move to the John Honey Building in mid-1972, 44PS, RAX, Honeywell H316, punched cards, and disk packs. IBM 360/44; Mathematics Institute; John Honey Building; Honeywell H316; 44PS; RAX; punched cards; disk packs Archived University of St Andrews newsletter page."
  },
  {
    "sourceId": "src_014",
    "sourceTitle": "Some History of Functional Programming Languages",
    "sourceType": "paper_or_talk",
    "date": "2019-12-05",
    "displayDate": "5 December 2019",
    "sortDate": "2019-12-05",
    "url": "https://www.bcs.org/media/5142/facs2019.pdf",
    "note": "David Turner’s own account of functional programming language history, including leaving Oxford for a lectureship at St Andrews in 1972 and inventing SASL during a programming language theory course."
  },
  {
    "sourceId": "src_015",
    "sourceTitle": "S-algol Reference Manual",
    "sourceType": "technical_report",
    "date": "1979",
    "displayDate": "1979",
    "sortDate": "1979-01-01",
    "url": "https://archive.cs.st-andrews.ac.uk/papers/download/Mor79b.pdf",
    "note": "Ron Morrison’s S-algol Reference Manual, describing S-algol as a language in the ALGOL tradition and giving design background, acknowledgements, and links to later PS-algol work. Ron Morrison; S-algol; PS-algol; programming languages; Tony Davie; Jack Cole; PISA project"
  },
  {
    "sourceId": "src_016",
    "sourceTitle": "Computing Laboratory Newsletter, March 1980: Microprocessors",
    "sourceType": "newsletter_pdf",
    "date": "1980-03",
    "displayDate": "March 1980",
    "sortDate": "1980-03-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1980/ocr198003.pdf",
    "note": "Reports that the Cromemco System 3 and Digital MINC systems had been delivered and invites users to discuss their potential with Phillip Robertson. microprocessors; Cromemco System 3; Digital MINC; personal computing Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_017",
    "sourceTitle": "Computing Laboratory Newsletter, October 1986: The Apple Desktop Publishing System",
    "sourceType": "newsletter_pdf",
    "date": "1986-10",
    "displayDate": "October 1986",
    "sortDate": "1986-10-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1986/ocr198610.pdf",
    "note": "Describes the Computing Laboratory’s recently purchased Apple Desktop Publishing System, consisting of Macintosh Plus, LaserWriter Plus, Macintosh 800K External Drive and Macintosh Hard Disk 20. Apple Macintosh; LaserWriter; desktop publishing; personal computing Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_018",
    "sourceTitle": "Computing Laboratory Newsletter, February 1987: Choice of equipment for computer teaching facility",
    "sourceType": "newsletter_pdf",
    "date": "1987-02",
    "displayDate": "February 1987",
    "sortDate": "1987-02-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198702.pdf",
    "note": "Confirms the Zenith Z-159 as the standard workstation for the new computer classroom and includes a text/character example of Greek-character support for the Epson SQ-2000 printer. Zenith Z-159; computer classroom; MS-DOS; Greek characters; Epson SQ-2000 Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_019",
    "sourceTitle": "Computing Laboratory Newsletter, April 1987: Computer facilities in teaching",
    "sourceType": "newsletter_pdf",
    "date": "1987-04",
    "displayDate": "April 1987",
    "sortDate": "1987-04-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198704.pdf",
    "note": "Describes plans for a computer classroom in the Old Union Building, with about 15 Zenith 159 workstations linked into a LAN using North Star hardware and Novell Netware software; also records CAMTEC/Cambridge Ring concerns. Old Union classroom; Zenith 159; MS-DOS; LAN; North Star; Novell Netware; CAMTEC; Cambridge Ring Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_020",
    "sourceTitle": "Computing Laboratory Newsletter, January 1988: Courses and workstation classrooms",
    "sourceType": "newsletter_pdf",
    "date": "1988-01",
    "displayDate": "January 1988",
    "sortDate": "1988-01-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198801.pdf",
    "note": "Lists Old Union PC Classroom workshops for MS-DOS and Microsoft Word, and describes Macintosh and Zenith workstation classroom developments. Old Union PC Classroom; MS-DOS; Microsoft Word; workstation classrooms; Macintosh classroom Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_021",
    "sourceTitle": "Computing Laboratory Newsletter, June 1988: Arabic direct entry and CLUSTAN",
    "sourceType": "newsletter_pdf",
    "date": "1988-06",
    "displayDate": "June 1988",
    "sortDate": "1988-06-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198806.pdf",
    "note": "Source used for the 1988 Department of Mediaeval History project involving Arabic text and CLUSTAN analysis. Arabic computing; CLUSTAN; Mediaeval History; humanities computing Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_022",
    "sourceTitle": "Computing Laboratory Newsletter, November 1988: Viruses and confectionery",
    "sourceType": "newsletter_pdf",
    "date": "1988-11",
    "displayDate": "November 1988",
    "sortDate": "1988-11-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198811.pdf",
    "note": "Confirms the nVIR Macintosh virus incident, use of Vaccine protection, Macintosh classroom contamination, Mac-to-Zenith transfer and confectionery sales from the Computing Laboratory secretary. nVIR; Vaccine; Macintosh; Macintosh classroom; confectionery; department culture Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_023",
    "sourceTitle": "Computing Laboratory Newsletter, April 1989: Chinese font",
    "sourceType": "newsletter_pdf",
    "date": "1989-04",
    "displayDate": "April 1989",
    "sortDate": "1989-04-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198904.pdf",
    "note": "Reports that Dr Butler of Chemistry agreed to install his simplified Chinese font, based on Pinyin romanisation, on Macintosh number 2 in the User Area of the John Honey building. Chinese font; Macintosh; language support; John Honey building Archived University of St Andrews Computing Laboratory newsletter"
  },
  {
    "sourceId": "src_024",
    "sourceTitle": "Copyright material on information servers",
    "sourceType": "newsletter_html",
    "date": "1996-03",
    "displayDate": "March 1996",
    "sortDate": "1996-03-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/03/CERT.html",
    "note": "Warns about unauthorised copyrighted material on university information servers, including over twenty MIDI song files, and names FAST and SPA as monitoring organisations. copyright; web servers; MIDI files; JANET-CERT; FAST; SPA Archived University of St Andrews page"
  },
  {
    "sourceId": "src_025",
    "sourceTitle": "Offensive e-mail",
    "sourceType": "newsletter_html",
    "date": "1996-11",
    "displayDate": "November 1996",
    "sortDate": "1996-11-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/11/offensive.html",
    "note": "Describes a serious widespread offensive e-mail incident affecting forty-nine University members and gives advice on junk mail. offensive email; junk mail; spam; UKERNA; JANET Archived University of St Andrews page"
  },
  {
    "sourceId": "src_026",
    "sourceTitle": "Emeritus Professor Jack Cole",
    "sourceType": "newsletter_html",
    "date": "1997-06",
    "displayDate": "June 1997",
    "sortDate": "1997-06-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/06/profcole.html",
    "note": "IT Services obituary note for Professor Jack Cole, describing him as Director of the Computing Laboratory from 1965 and a formative figure for Computer Science at St Andrews. Jack Cole; Computing Laboratory; obituary; institutional history Archived University of St Andrews page"
  },
  {
    "sourceId": "src_027",
    "sourceTitle": "Year 2000 compliance",
    "sourceType": "newsletter_html",
    "date": "1997-04",
    "displayDate": "April 1997",
    "sortDate": "1997-04-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/04/chest2000.html",
    "note": "Discusses Year 2000 compliance and CHEST efforts to collect supplier assurances on BSI Year 2000 conformity. Y2K; Year 2000 compliance; CHEST; software procurement Archived University of St Andrews page"
  },
  {
    "sourceId": "src_028",
    "sourceTitle": "y2k update",
    "sourceType": "newsletter_html",
    "date": "2000-02",
    "displayDate": "February 2000",
    "sortDate": "2000-02-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2000/02/y2kupdate.html",
    "note": "Reports that the 1999–2000 computer transition passed fairly quietly locally, with minor problems handled, and credits preparation work. Y2K; IT Services; transition; troubleshooting; contingency planning Archived University of St Andrews page"
  },
  {
    "sourceId": "src_029",
    "sourceTitle": "Goodbye, Windows NT4",
    "sourceType": "newsletter_html",
    "date": "2003-05",
    "displayDate": "May 2003",
    "sortDate": "2003-05-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/05/goodbyent4.html",
    "note": "Article states that remaining Windows NT4 classrooms would be upgraded to the Windows 2000 classroom build, and describes PXENADS for network-based classroom PC maintenance. Windows 2000; Windows NT4; PC classrooms; managed desktop; PXENADS Archived University of St Andrews page"
  },
  {
    "sourceId": "src_030",
    "sourceTitle": "Recent PC purchases",
    "sourceType": "newsletter_html",
    "date": "2005-10",
    "displayDate": "October 2005",
    "sortDate": "2005-10-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/10/pcpurchasing.html",
    "note": "Article identifies Lenovo as the standard PC supplier and gives the S51 ThinkCentre specification: Pentium 3.2 GHz processor, 1 GB memory, 80 GB disk and CD-writer/DVD-reader combo device. Lenovo; S51 ThinkCentre; standard PC; public areas; classrooms Archived University of St Andrews page"
  },
  {
    "sourceId": "src_031",
    "sourceTitle": "Mobile communications",
    "sourceType": "newsletter_html",
    "date": "2007-10",
    "displayDate": "October 2007",
    "sortDate": "2007-10-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/mobcomms.html",
    "note": "Article discusses mobile phones and smartphones for University staff, including email, calendar, web access, Meeting Maker, NotifyLink and push email. smartphones; mobile communications; Meeting Maker; NotifyLink; Palm OS; Windows Mobile Archived University of St Andrews page"
  },
  {
    "sourceId": "src_032",
    "sourceTitle": "Information Services Newsletter, February 2011",
    "sourceType": "newsletter_pdf",
    "date": "2011-02",
    "displayDate": "February 2011",
    "sortDate": "2011-02-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/02/201102.pdf",
    "note": "Newsletter states that the University purchased use of a Blackberry Enterprise Server and describes the Identity Management project replacing UserReg functions. Blackberry Enterprise Server; Unimail; Identity Management; UserReg; Active Directory Archived University of St Andrews PDF"
  },
  {
    "sourceId": "src_033",
    "sourceTitle": "Information Services Newsletter, February 2009",
    "sourceType": "newsletter_pdf",
    "date": "2009-02",
    "displayDate": "February 2009",
    "sortDate": "2009-02-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/02/200902.pdf",
    "note": "Newsletter includes a five-day Web 2.0 workshop for e-Research and a section on JANET/Internet resilience through FaTMAN and dark fibre connectivity. Web 2.0; e-Research; JANET; FaTMAN; dark fibre; Internet resilience Archived University of St Andrews PDF"
  },
  {
    "sourceId": "src_034",
    "sourceTitle": "Information Services Newsletter, October 2009",
    "sourceType": "newsletter_pdf",
    "date": "2009-10",
    "displayDate": "October 2009",
    "sortDate": "2009-10-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/10/200910.pdf",
    "note": "Newsletter says the University took out a licence for Confluence in response to user requests for wiki and blogging software, and describes piloting the service. Confluence; wiki; blogging; social media; collaboration software Archived University of St Andrews PDF"
  },
  {
    "sourceId": "src_035",
    "sourceTitle": "St Andrews University Computing Society Tumblr blog",
    "sourceType": "blog",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://stacs-blog.tumblr.com/",
    "note": "Public StACS Tumblr blog showing society posts, including hack day updates and project posts. StACS; student computing society; Tumblr; hack day; social media Tumblr-hosted blog"
  },
  {
    "sourceId": "src_036",
    "sourceTitle": "The Jack Cole Building",
    "sourceType": "student_handbook_page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://info.cs.st-andrews.ac.uk/student-handbook/school/jack-cole/jack-cole-building.html",
    "note": "Student Handbook page says the Jack Cole Building was opened on 18 March 2005 by First Minister Jack McConnell and provides the opening photograph sequence. Jack Cole Building; opening ceremony; Jack McConnell; Murray Polygon; opening photographs Student Handbook page states ©2013–2026"
  },
  {
    "sourceId": "src_037",
    "sourceTitle": "First Minister opens university’s £10m investment",
    "sourceType": "news_article",
    "date": "2005-03-18",
    "displayDate": "18 March 2005",
    "sortDate": "2005-03-18",
    "url": "https://news.st-andrews.ac.uk/archive/first-minister-opens-universitys-10m-investment/",
    "note": "News article reports Jack McConnell officially opening the Gateway and Jack Cole Building on 18 March 2005 and describes Computer Science demonstrations. Jack Cole Building; opening ceremony; Jack McConnell; Ron Morrison; Brian Lang; demonstrations Archived University of St Andrews News page"
  },
  {
    "sourceId": "src_038",
    "sourceTitle": "Plans for new computer science building unveiled",
    "sourceType": "news_article",
    "date": "2002-11-07",
    "displayDate": "7 November 2002",
    "sortDate": "2002-11-07",
    "url": "https://news.st-andrews.ac.uk/archive/plans-for-new-computer-science-building-unveiled/",
    "note": "News article reports plans for a new two-storey Computer Science building on the North Haugh, presented at a public meeting on 30 October 2002. Jack Cole Building; North Haugh; School of Computer Science; building plans; Ron Morrison Archived University of St Andrews News page"
  },
  {
    "sourceId": "src_039",
    "sourceTitle": "Encouraging use of ScienceDirect",
    "sourceType": "newsletter_html",
    "date": "2003-03",
    "displayDate": "March 2003",
    "sortDate": "2003-03-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/03/sciencedirect.html",
    "note": "Article reports ScienceDirect availability at St Andrews and states that 30,509 articles were downloaded by St Andrews users between March and December 2002. ScienceDirect; digital journals; research access; scientific web Archived University of St Andrews page"
  },
  {
    "sourceId": "src_040",
    "sourceTitle": "Research expertise database",
    "sourceType": "newsletter_html",
    "date": "2005-05",
    "displayDate": "May 2005",
    "sortDate": "2005-05-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/resexp.html",
    "note": "Article describes work to make the Research Expertise database available online and explains its links to research expertise, ePrints, Arts Server, RAE data and external databases. Research Expertise database; online research management; ePrints; RAE; Arts Server Archived University of St Andrews page"
  },
  {
    "sourceId": "src_041",
    "sourceTitle": "Using the Internet for collaborative research",
    "sourceType": "newsletter_html",
    "date": "2005-03",
    "displayDate": "March 2005",
    "sortDate": "2005-03-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/03/collaborative.html",
    "note": "Article explains e-Science, grids, collaborative research and introduces the EGEE project and an arts/humanities computing workshop. e-Science; e-Research; Grid computing; EGEE; arts computing workshop Archived University of St Andrews page"
  },
  {
    "sourceId": "src_042",
    "sourceTitle": "Working from home",
    "sourceType": "newsletter_html",
    "date": "2005-12",
    "displayDate": "December 2005",
    "sortDate": "2005-12-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/12/broadbandvpn.html",
    "note": "Article explains broadband and VPN use for working away from the office, including access to licensed Library material and University mail services via a St Andrews IP address. working from home; broadband; VPN; remote access; licensed resources Archived University of St Andrews page"
  },
  {
    "sourceId": "src_043",
    "sourceTitle": "Virtual Private Network",
    "sourceType": "newsletter_html",
    "date": "2007-04",
    "displayDate": "April 2007",
    "sortDate": "2007-04-01",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/04/vpn.html",
    "note": "Article states that VPN gives users at home or away from St Andrews secure access to University network services and that VPN slots had been increased ten-fold. VPN; remote access; broadband; Cisco VPN client; network services Archived University of St Andrews page"
  },
  {
    "sourceId": "src_044",
    "sourceTitle": "Prof Graham Kirby",
    "sourceType": "people_profile",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://www.st-andrews.ac.uk/computer-science/people/gnck/",
    "note": "School profile for Prof Graham Kirby, listing teaching, research areas and previous PhD students including Tom Dalton in 2022. Graham Kirby; CS1002; data linkage; Tom Dalton; School of Computer Science"
  },
  {
    "sourceId": "src_045",
    "sourceTitle": "Tom Dalton",
    "sourceType": "people_profile",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://digitisingscotland.ac.uk/about/who-we-are/tom-dalton/",
    "note": "Profile states that Tom Dalton was a third-year Computer Science PhD student at St Andrews supervised by Prof Alan Dearle and Dr Graham Kirby, and holds a BSc in Computer Science from St Andrews. Tom Dalton; Digitising Scotland; PhD; Graham Kirby; data linkage Copyright likely Digitising Scotland / partner institutions."
  },
  {
    "sourceId": "src_046",
    "sourceTitle": "Murray Cole",
    "sourceType": "people_profile",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://www.research.ed.ac.uk/en/persons/murray-cole/",
    "note": "Profile identifies Murray Cole as a professor at the University of Edinburgh, with BSc and PhD in Computer Science from Edinburgh and research interests in parallel programming models. Murray Cole; University of Edinburgh; computer science; parallel programming Copyright University of Edinburgh Research Explorer"
  },
  {
    "sourceId": "src_047",
    "sourceTitle": "Jack Cole",
    "sourceType": "student_handbook_page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://info.cs.st-andrews.ac.uk/student-handbook/school/jack-cole/",
    "note": "School of Computer Science Student Handbook page about Professor Jack Cole, including a portrait image of Jack Cole and a short account of his role in founding and directing computing at St Andrews. Jack Cole; School of Computer Science; Computing Laboratory; portrait Use as the external source for M003 rather than Chronological Report. (https://info.cs.st-andrews.ac.uk/student-handbook/school/jack-cole/?utm_source=chatgpt.com)"
  },
  {
    "sourceId": "src_048",
    "sourceTitle": "School About page",
    "sourceType": "official_school_page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://www.st-andrews.ac.uk/computer-science/about/",
    "note": "Official School history page. It states that the first Computer Science degree was awarded in 1971, the School appointed the University’s first female professor in 1992, the School was established in 1999 after separation from Mathematics, moved into the Jack Cole Building in 2004, and that the DLS celebrated its 50th anniversary in 2019. School history; institutional milestones; degree history; Jack Cole Building; DLS Copyright belongs to the University of St Andrews."
  },
  {
    "sourceId": "src_049",
    "sourceTitle": "Distinguished Lecture Series Archive",
    "sourceType": "archive_page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/",
    "note": "Archive of Distinguished Lecture Series entries from 1969 to 2011. The first listed lecture is “Algol ’68” by W. van der Poel. DLS; academic tradition; intellectual history; invited lectures Copyright status not explicitly stated on archive page."
  },
  {
    "sourceId": "src_050",
    "sourceTitle": "Ursula Martin profile",
    "sourceType": "personal_profile",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://people.maths.ox.ac.uk/martinu/",
    "note": "Ursula Martin’s profile confirms that she was Professor at the University of St Andrews from 1992 to 2002. Ursula Martin; women in computing; St Andrews professorship; academic biography Copyright belongs to the page owner / institution. Use together with SRC047 to identify the 1992 first-female-professor milestone as Ursula Martin."
  },
  {
    "sourceId": "src_051",
    "sourceTitle": "Computer Science 111: The Morrison Suite",
    "sourceType": "cs_blog",
    "date": "2014-02-15",
    "displayDate": "15 February 2014",
    "sortDate": "2014-02-15",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2014/02/15/computer-science-111-the-morrison-suite/",
    "note": "Blog post reporting that Emeritus Professor and former Head of School Ron Morrison returned to officially open The Morrison Suite. Morrison Suite; Ron Morrison; School space; institutional memory Copyright belongs to the School / University."
  },
  {
    "sourceId": "src_052",
    "sourceTitle": "MSc in Human Computer Interaction",
    "sourceType": "cs_blog",
    "date": "2014-03-09",
    "displayDate": "9 March 2014",
    "sortDate": "2014-03-09",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2014/03/09/msc-in-human-computer-interaction/",
    "note": "Blog post describing the new MSc in Human Computer Interaction and CS5042 User Centred Interaction Design, delivered by Miguel Nacenta. HCI; MSc teaching; curriculum; Miguel Nacenta; Morrison Suite Copyright belongs to the School / University."
  },
  {
    "sourceId": "src_053",
    "sourceTitle": "Official Opening: Interaction Lab",
    "sourceType": "cs_blog",
    "date": "2015-09-02",
    "displayDate": "2 September 2015",
    "sortDate": "2015-09-02",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2015/09/02/official-opening-interaction-lab/",
    "note": "Blog post reporting that Dean of Science Professor Al Dearle officially opened the new Interaction Lab in the John Honey Building. The post links the lab to SACHI and Open Virtual Worlds. Interaction Lab; SACHI; Open Virtual Worlds; Al Dearle; Aaron Quigley; research space Copyright belongs to the School / University. Good source for modern research-space development."
  },
  {
    "sourceId": "src_054",
    "sourceTitle": "Distinguished Lecture Series 2017: Professor Ursula Martin",
    "sourceType": "cs_blog",
    "date": "2017-10-19",
    "displayDate": "19 October 2017",
    "sortDate": "2017-10-19",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/10/19/distinguished-lecture-series-2017-professor-ursula-martin/",
    "note": "Blog report on Ursula Martin’s 10 October 2017 DLS lecture “What Every Computer Scientist Should Know About Computer History,” with Simon Dobson, Ian Gent and Sally Mapstone appearing in the event context. DLS; Ursula Martin; computer history; School leadership; institutional memory Copyright belongs to the School / University."
  },
  {
    "sourceId": "src_055",
    "sourceTitle": "Professor Aaron Quigley new SICSA Director",
    "sourceType": "cs_blog",
    "date": "2019-05-23",
    "displayDate": "23 May 2019",
    "sortDate": "2019-05-23",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2019/05/23/professor-aaron-quigley-new-sicsa-director/",
    "note": "Blog post reporting Aaron Quigley’s appointment as Director of SICSA and giving context on his HCI and SACHI roles. Aaron Quigley; SICSA; HCI; SACHI; external leadership Copyright belongs to the School / University."
  },
  {
    "sourceId": "src_056",
    "sourceTitle": "Virtual Reconstruction of Medieval Home of the Lords of the Isles",
    "sourceType": "cs_blog",
    "date": "2019-05-23",
    "displayDate": "23 May 2019",
    "sortDate": "2019-05-23",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2019/05/23/virtual-reconstruction-of-medieval-home-of-the-lords-of-the-isles/",
    "note": "Blog post describing Open Virtual Worlds’ virtual reconstruction of Finlaggan, including project team roles such as Alan Miller, Sarah Kennedy, Bess Rhodes, CJ Davies, Iain Oliver and Catherine Anne Cassidy. Open Virtual Worlds; Finlaggan; VR; research impact; project team Copyright belongs to the School / University."
  },
  {
    "sourceId": "src_057",
    "sourceTitle": "20th anniversary of the official opening of the Jack Cole Building",
    "sourceType": "cs_blog",
    "date": "2025-03-18",
    "displayDate": "18 March 2025",
    "sortDate": "2025-03-18",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2025/03/18/20th-anniversary-of-the-official-opening-of-the-jack-cole-building/",
    "note": "Blog post reporting the School’s 20th anniversary celebration of the official opening of the Jack Cole Building, originally opened by Jack McConnell on 18 March 2005. Jack Cole Building; institutional memory; anniversary; Jack McConnell Copyright belongs to the School / University. This is a 2025 anniversary event, not the original 2005 opening."
  },
  {
    "sourceId": "src_058",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1975/ocr197512Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1975/ocr197512Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1975/ocr197512Index.pdf"
  },
  {
    "sourceId": "src_059",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1976/ocr197612Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1976/ocr197612Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1976/ocr197612Index.pdf"
  },
  {
    "sourceId": "src_060",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1977/ocr197712Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1977/ocr197712Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1977/ocr197712Index.pdf"
  },
  {
    "sourceId": "src_061",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1978/ocr197802.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1978/ocr197802.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1978/ocr197802.pdf"
  },
  {
    "sourceId": "src_062",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1978/ocr197812Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1978/ocr197812Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1978/ocr197812Index.pdf"
  },
  {
    "sourceId": "src_063",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1979/ocr197912Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1979/ocr197912Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1979/ocr197912Index.pdf"
  },
  {
    "sourceId": "src_064",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1980/ocr198012Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1980/ocr198012Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1980/ocr198012Index.pdf"
  },
  {
    "sourceId": "src_065",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1981/ocr198112Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1981/ocr198112Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1981/ocr198112Index.pdf"
  },
  {
    "sourceId": "src_066",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1982/ocr198212Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1982/ocr198212Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1982/ocr198212Index.pdf"
  },
  {
    "sourceId": "src_067",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1983/ocr198312Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1983/ocr198312Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1983/ocr198312Index.pdf"
  },
  {
    "sourceId": "src_068",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1984/ocr198412Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1984/ocr198412Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1984/ocr198412Index.pdf"
  },
  {
    "sourceId": "src_069",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1985/ocr198512Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1985/ocr198512Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1985/ocr198512Index.pdf"
  },
  {
    "sourceId": "src_070",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1986/ocr198607.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1986/ocr198607.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1986/ocr198607.pdf"
  },
  {
    "sourceId": "src_071",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1986/ocr198612Index.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1986/ocr198612Index.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1986/ocr198612Index.pdf"
  },
  {
    "sourceId": "src_072",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198703.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198703.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198703.pdf"
  },
  {
    "sourceId": "src_073",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198705.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198705.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198705.pdf"
  },
  {
    "sourceId": "src_074",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198706.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198706.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198706.pdf"
  },
  {
    "sourceId": "src_075",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198707.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198707.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198707.pdf"
  },
  {
    "sourceId": "src_076",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198710.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198710.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198710.pdf"
  },
  {
    "sourceId": "src_077",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198711.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198711.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198711.pdf"
  },
  {
    "sourceId": "src_078",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198712.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198712.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1987/ocr198712.pdf"
  },
  {
    "sourceId": "src_079",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198802.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198802.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198802.pdf"
  },
  {
    "sourceId": "src_080",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198812.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198812.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1988/198812.pdf"
  },
  {
    "sourceId": "src_081",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198901.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198901.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198901.pdf"
  },
  {
    "sourceId": "src_082",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198902.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198902.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198902.pdf"
  },
  {
    "sourceId": "src_083",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198903.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198903.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198903.pdf"
  },
  {
    "sourceId": "src_084",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198906.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198906.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFexconverted/1989/198906.pdf"
  },
  {
    "sourceId": "src_085",
    "sourceTitle": "https://archive.cs.st-andrews.ac.uk/dls-archive/#database-programming-languages",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#database-programming-languages",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.cs.st-andrews.ac.uk/dls-archive/#database-programming-languages (https://archive.cs.st-andrews.ac.uk/dls-archive/)"
  },
  {
    "sourceId": "src_086",
    "sourceTitle": "https://archive.cs.st-andrews.ac.uk/dls-archive/#distributed-multimedia-communications",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#distributed-multimedia-communications",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.cs.st-andrews.ac.uk/dls-archive/#distributed-multimedia-communications (https://archive.cs.st-andrews.ac.uk/dls-archive/)"
  },
  {
    "sourceId": "src_087",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/UNIX.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/UNIX.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/UNIX.html"
  },
  {
    "sourceId": "src_088",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/MAN.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/MAN.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/MAN.html"
  },
  {
    "sourceId": "src_089",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/ingres.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/ingres.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/ingres.html"
  },
  {
    "sourceId": "src_090",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/elecpub.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/elecpub.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1996/08/elecpub.html"
  },
  {
    "sourceId": "src_091",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/purds.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/purds.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/purds.html"
  },
  {
    "sourceId": "src_092",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/talisman.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/talisman.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/talisman.html"
  },
  {
    "sourceId": "src_093",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/archive.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/archive.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/archive.html"
  },
  {
    "sourceId": "src_094",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/copac.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/copac.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/02/copac.html"
  },
  {
    "sourceId": "src_095",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/09/SARA.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/09/SARA.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1997/09/SARA.html"
  },
  {
    "sourceId": "src_096",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/PADS.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/PADS.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/PADS.html"
  },
  {
    "sourceId": "src_097",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/upgrades.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/upgrades.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/upgrades.html"
  },
  {
    "sourceId": "src_098",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/butephoto.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/butephoto.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/butephoto.html"
  },
  {
    "sourceId": "src_099",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/talisman.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/talisman.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/01/talisman.html"
  },
  {
    "sourceId": "src_100",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/03/uniras.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/03/uniras.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/03/uniras.html"
  },
  {
    "sourceId": "src_101",
    "sourceTitle": "https://archive.cs.st-andrews.ac.uk/dls-archive/#information-retrieval-its-models-its-evaluation-and-its-multimedia-applications",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#information-retrieval-its-models-its-evaluation-and-its-multimedia-applications",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.cs.st-andrews.ac.uk/dls-archive/#information-retrieval-its-models-its-evaluation-and-its-multimedia-applications (https://archive.cs.st-andrews.ac.uk/dls-archive/)"
  },
  {
    "sourceId": "src_102",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/05/ingresaward.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/05/ingresaward.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/05/ingresaward.html"
  },
  {
    "sourceId": "src_103",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/06/sundox.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/06/sundox.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1998/06/sundox.html"
  },
  {
    "sourceId": "src_104",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1999/01/adminsys.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1999/01/adminsys.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1999/01/adminsys.html"
  },
  {
    "sourceId": "src_105",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1999/01/supclass.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1999/01/supclass.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/1999/01/supclass.html"
  },
  {
    "sourceId": "src_106",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2000/01/24hour.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2000/01/24hour.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2000/01/24hour.html"
  },
  {
    "sourceId": "src_107",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2000/01/videoTL.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2000/01/videoTL.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2000/01/videoTL.html"
  },
  {
    "sourceId": "src_108",
    "sourceTitle": "https://archive.cs.st-andrews.ac.uk/dls-archive/#computer-storage-systems",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#computer-storage-systems",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.cs.st-andrews.ac.uk/dls-archive/#computer-storage-systems (https://archive.cs.st-andrews.ac.uk/dls-archive/)"
  },
  {
    "sourceId": "src_109",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2001/01/learning.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2001/01/learning.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2001/01/learning.html"
  },
  {
    "sourceId": "src_110",
    "sourceTitle": "https://archive.cs.st-andrews.ac.uk/dls-archive/#xml-a-data-standard-for-well-behaved-programmers",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#xml-a-data-standard-for-well-behaved-programmers",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.cs.st-andrews.ac.uk/dls-archive/#xml-a-data-standard-for-well-behaved-programmers (https://archive.cs.st-andrews.ac.uk/dls-archive/)"
  },
  {
    "sourceId": "src_111",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2002/09/docman.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2002/09/docman.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2002/09/docman.html"
  },
  {
    "sourceId": "src_112",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/08/pastpapers.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/08/pastpapers.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/08/pastpapers.html"
  },
  {
    "sourceId": "src_113",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/08/wireless.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/08/wireless.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/08/wireless.html"
  },
  {
    "sourceId": "src_114",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/09/webctsits.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/09/webctsits.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/09/webctsits.html"
  },
  {
    "sourceId": "src_115",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/09/superjanet.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/09/superjanet.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2003/09/superjanet.html"
  },
  {
    "sourceId": "src_116",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/01/endnote.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/01/endnote.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/01/endnote.html"
  },
  {
    "sourceId": "src_117",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/01/eprints.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/01/eprints.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/01/eprints.html"
  },
  {
    "sourceId": "src_118",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/05/artshum.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/05/artshum.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/05/artshum.html"
  },
  {
    "sourceId": "src_119",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/06/cass.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/06/cass.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/06/cass.html"
  },
  {
    "sourceId": "src_120",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/12/network.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/12/network.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2004/12/network.html"
  },
  {
    "sourceId": "src_121",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/evision.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/evision.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/evision.html"
  },
  {
    "sourceId": "src_122",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/filmstudies.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/filmstudies.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/filmstudies.html"
  },
  {
    "sourceId": "src_123",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/wireless.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/wireless.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/01/wireless.html"
  },
  {
    "sourceId": "src_124",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/compexhn.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/compexhn.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/compexhn.html"
  },
  {
    "sourceId": "src_125",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/runciman.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/runciman.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/runciman.html"
  },
  {
    "sourceId": "src_126",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/eresearch.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/eresearch.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/eresearch.html"
  },
  {
    "sourceId": "src_127",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/06/saulcatterm.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/06/saulcatterm.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/06/saulcatterm.html"
  },
  {
    "sourceId": "src_128",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/copyright.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/copyright.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/copyright.html"
  },
  {
    "sourceId": "src_129",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/ARTS.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/ARTS.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/ARTS.html"
  },
  {
    "sourceId": "src_130",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/esciencearts.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/esciencearts.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/09/esciencearts.html"
  },
  {
    "sourceId": "src_131",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/01/studentpcs.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/01/studentpcs.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/01/studentpcs.html"
  },
  {
    "sourceId": "src_132",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/05/digitalimages.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/05/digitalimages.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/05/digitalimages.html"
  },
  {
    "sourceId": "src_133",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/09/digimagewkshp.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/09/digimagewkshp.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/09/digimagewkshp.html"
  },
  {
    "sourceId": "src_134",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/12/superjanet5.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/12/superjanet5.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2006/12/superjanet5.html"
  },
  {
    "sourceId": "src_135",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/01/mysql.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/01/mysql.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/01/mysql.html"
  },
  {
    "sourceId": "src_136",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/06/idbproject.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/06/idbproject.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/06/idbproject.html"
  },
  {
    "sourceId": "src_137",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/06/ahdsfuture.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/06/ahdsfuture.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/06/ahdsfuture.html"
  },
  {
    "sourceId": "src_138",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/speccollexhn.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/speccollexhn.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/speccollexhn.html"
  },
  {
    "sourceId": "src_139",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/imgdbpresent.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/imgdbpresent.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/imgdbpresent.html"
  },
  {
    "sourceId": "src_140",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/01/classrooms.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/01/classrooms.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/01/classrooms.html"
  },
  {
    "sourceId": "src_141",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/secondlife.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/secondlife.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/secondlife.html"
  },
  {
    "sourceId": "src_142",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/ahds.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/ahds.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/ahds.html"
  },
  {
    "sourceId": "src_143",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/rps.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/rps.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/03/rps.html"
  },
  {
    "sourceId": "src_144",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/05/DRR.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/05/DRR.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/05/DRR.html"
  },
  {
    "sourceId": "src_145",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/09/artshumdeveloper.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/09/artshumdeveloper.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/09/artshumdeveloper.html"
  },
  {
    "sourceId": "src_146",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/09/dashboard.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/09/dashboard.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/09/dashboard.html"
  },
  {
    "sourceId": "src_147",
    "sourceTitle": "https://archive.cs.st-andrews.ac.uk/dls-archive/#human-computer-interaction-as-it-was-as-it-is-and-as-it-may-be",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#human-computer-interaction-as-it-was-as-it-is-and-as-it-may-be",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.cs.st-andrews.ac.uk/dls-archive/#human-computer-interaction-as-it-was-as-it-is-and-as-it-may-be (https://archive.cs.st-andrews.ac.uk/dls-archive/)"
  },
  {
    "sourceId": "src_148",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/12/datadata.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/12/datadata.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/12/datadata.html"
  },
  {
    "sourceId": "src_149",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/12/thirtyfive.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/12/thirtyfive.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2008/12/thirtyfive.html"
  },
  {
    "sourceId": "src_150",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/04/200904.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/04/200904.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/04/200904.pdf"
  },
  {
    "sourceId": "src_151",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/06/200906.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/06/200906.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/06/200906.pdf"
  },
  {
    "sourceId": "src_152",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2010/10/201010.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2010/10/201010.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2010/10/201010.pdf"
  },
  {
    "sourceId": "src_153",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/01/201101.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/01/201101.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/01/201101.pdf"
  },
  {
    "sourceId": "src_154",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/03/researchcomputing.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/03/researchcomputing.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/03/researchcomputing.html"
  },
  {
    "sourceId": "src_155",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/04/videoproduction.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/04/videoproduction.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/04/videoproduction.html"
  },
  {
    "sourceId": "src_156",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/04/spssmac.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/04/spssmac.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/04/spssmac.html"
  },
  {
    "sourceId": "src_157",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/t4upgrade.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/t4upgrade.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/t4upgrade.html"
  },
  {
    "sourceId": "src_158",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/webschools.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/webschools.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/webschools.html"
  },
  {
    "sourceId": "src_159",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/specialneedsroom.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/specialneedsroom.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/specialneedsroom.html"
  },
  {
    "sourceId": "src_160",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/unideskupgrade.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/unideskupgrade.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/05/unideskupgrade.html"
  },
  {
    "sourceId": "src_161",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/06/201106.pdf",
    "sourceType": "PDF",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/06/201106.pdf",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/06/201106.pdf"
  },
  {
    "sourceId": "src_162",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/07/exceedxming.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/07/exceedxming.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/07/exceedxming.html"
  },
  {
    "sourceId": "src_163",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/07/1620picture.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/07/1620picture.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/07/1620picture.html"
  },
  {
    "sourceId": "src_164",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/08/merger.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/08/merger.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/08/merger.html"
  },
  {
    "sourceId": "src_165",
    "sourceTitle": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/08/googleservices.html",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/08/googleservices.html",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/08/googleservices.html"
  },
  {
    "sourceId": "src_166",
    "sourceTitle": "https://archive.cs.st-andrews.ac.uk/dls-archive/#from-recommendation-to-reputation-information-discovery-gets-personal",
    "sourceType": "archive page",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/#from-recommendation-to-reputation-information-discovery-gets-personal",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://archive.cs.st-andrews.ac.uk/dls-archive/#from-recommendation-to-reputation-information-discovery-gets-personal (https://archive.cs.st-andrews.ac.uk/dls-archive/)"
  },
  {
    "sourceId": "src_167",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/page/99/?cat=-1",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/page/99/?cat=-1",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/page/99/?cat=-1"
  },
  {
    "sourceId": "src_168",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/page/3/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/page/3/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/page/3/"
  },
  {
    "sourceId": "src_169",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2013/06/21/jacob-eisenstein-interactive-topic-visualization-for-exploratory-text-analysis/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2013/06/21/jacob-eisenstein-interactive-topic-visualization-for-exploratory-text-analysis/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2013/06/21/jacob-eisenstein-interactive-topic-visualization-for-exploratory-text-analysis/"
  },
  {
    "sourceId": "src_170",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2014/02/11/the-minister-for-universities-and-science-david-willtts-mp-announced-funding-of-4-6-million-for-21-digital-transformations-in-the-arts-and-humanities-projects-as-part-of-the-arts-and-humanities-rese/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2014/02/11/the-minister-for-universities-and-science-david-willtts-mp-announced-funding-of-4-6-million-for-21-digital-transformations-in-the-arts-and-humanities-projects-as-part-of-the-arts-and-humanities-rese/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2014/02/11/the-minister-for-universities-and-science-david-willtts-mp-announced-funding-of-4-6-million-for-21-digital-transformations-in-the-arts-and-humanities-projects-as-part-of-the-arts-and-humanities-rese/"
  },
  {
    "sourceId": "src_171",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/category/research-groups/page/18/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/category/research-groups/page/18/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/category/research-groups/page/18/"
  },
  {
    "sourceId": "src_172",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2015/09/page/3/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2015/09/page/3/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2015/09/page/3/"
  },
  {
    "sourceId": "src_173",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2015/11/16/palimpsest-recognised-by-british-library-labs/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2015/11/16/palimpsest-recognised-by-british-library-labs/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2015/11/16/palimpsest-recognised-by-british-library-labs/"
  },
  {
    "sourceId": "src_174",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/page/2/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/page/2/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/page/2/"
  },
  {
    "sourceId": "src_175",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/01/23/7262/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/01/23/7262/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2017/01/23/7262/"
  },
  {
    "sourceId": "src_176",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/16/sachi-seminar-dr-christopher-collins-finding-what-to-read-visual-text-analytics-tools-and-techniques-to-guide-investigation/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/16/sachi-seminar-dr-christopher-collins-finding-what-to-read-visual-text-analytics-tools-and-techniques-to-guide-investigation/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/16/sachi-seminar-dr-christopher-collins-finding-what-to-read-visual-text-analytics-tools-and-techniques-to-guide-investigation/"
  },
  {
    "sourceId": "src_177",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/19/please-take-part-in-our-10-minute-survey-about-the-use-of-open-researcher-and-contributor-ids-orcid/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/19/please-take-part-in-our-10-minute-survey-about-the-use-of-open-researcher-and-contributor-ids-orcid/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/19/please-take-part-in-our-10-minute-survey-about-the-use-of-open-researcher-and-contributor-ids-orcid/"
  },
  {
    "sourceId": "src_178",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/category/research/page/2/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/category/research/page/2/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/category/research/page/2/"
  },
  {
    "sourceId": "src_179",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/28/sachi-seminar-benjamin-bach-between-exploration-and-explanation-visualizations-for-insights-curiosity-and-storytelling/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/28/sachi-seminar-benjamin-bach-between-exploration-and-explanation-visualizations-for-insights-curiosity-and-storytelling/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2017/06/28/sachi-seminar-benjamin-bach-between-exploration-and-explanation-visualizations-for-insights-curiosity-and-storytelling/"
  },
  {
    "sourceId": "src_180",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2018/03/27/old-french-bible-project/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2018/03/27/old-french-bible-project/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2018/03/27/old-french-bible-project/"
  },
  {
    "sourceId": "src_181",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/category/distinguished-lecture/"
  },
  {
    "sourceId": "src_182",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/author/lisa/page/3/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/author/lisa/page/3/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/author/lisa/page/3/"
  },
  {
    "sourceId": "src_183",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2023/01/25/open-virtual-worlds-impact-innovation-funding-success/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2023/01/25/open-virtual-worlds-impact-innovation-funding-success/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2023/01/25/open-virtual-worlds-impact-innovation-funding-success/"
  },
  {
    "sourceId": "src_184",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2025/08/27/research-activities-by-open-virtual-worlds-research-group/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2025/08/27/research-activities-by-open-virtual-worlds-research-group/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2025/08/27/research-activities-by-open-virtual-worlds-research-group/"
  },
  {
    "sourceId": "src_185",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2025/09/15/st-andrews-computer-science-makes-big-splash-at-digital-heritage-2025/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2025/09/15/st-andrews-computer-science-makes-big-splash-at-digital-heritage-2025/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2025/09/15/st-andrews-computer-science-makes-big-splash-at-digital-heritage-2025/"
  },
  {
    "sourceId": "src_186",
    "sourceTitle": "https://blogs.cs.st-andrews.ac.uk/csblog/2025/10/15/pgr-seminar-erdem-kus-junyu-zhang/",
    "sourceType": "blog post",
    "date": "",
    "displayDate": "",
    "sortDate": "",
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/2025/10/15/pgr-seminar-erdem-kus-junyu-zhang/",
    "note": "Original source cell from Digital Humanities and Key Equipment Source Notes.xlsx: https://blogs.cs.st-andrews.ac.uk/csblog/2025/10/15/pgr-seminar-erdem-kus-junyu-zhang/"
  }
];

const MEDIA = [
  {
    "mediaId": "m_001",
    "mediaTitle": "Professor D.W.N. Stibbs, Astronomy",
    "mediaType": "image",
    "localUrl": "image/Professor D.W.N. Stibbs, Astronomy.png",
    "images": [
      {
        "localUrl": "image/Professor D.W.N. Stibbs, Astronomy.png",
        "description": "portrait"
      }
    ],
    "url": "https://collections.st-andrews.ac.uk/series/professor-dwn-stibbs-astronomy/582358",
    "relatedSourceId": "src_007",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Black-and-white portrait photograph of Professor D. W. N. Stibbs standing outside an observatory building.",
    "copyrightNote": "© The University of St Andrews. CC BY-NC Creative Commons Attribution-NonCommercial 4.0 International Public License. Credit line: Courtesy of the University of St Andrews Libraries and Museums, ID: PGA-P745."
  },
  {
    "mediaId": "m_002",
    "mediaTitle": "Dr T.R. Carson, Astronomy",
    "mediaType": "image",
    "localUrl": "image/Dr T.R. Carson.png",
    "images": [
      {
        "localUrl": "image/Dr T.R. Carson.png",
        "description": "Portrait"
      }
    ],
    "url": "https://collections.st-andrews.ac.uk/series/dr-tr-carson-astronomy/582315",
    "relatedSourceId": "src_008",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Black-and-white portrait photograph of Dr T. R. Carson.",
    "copyrightNote": "© The University of St Andrews. CC BY-NC Creative Commons Attribution-NonCommercial 4.0 International Public License. Credit line: Courtesy of the University of St Andrews Libraries and Museums, ID: PGA-P692."
  },
  {
    "mediaId": "m_003",
    "mediaTitle": "Professor Jack Cole, 1988",
    "mediaType": "image",
    "localUrl": "image/jack cole.jpg",
    "images": [
      {
        "localUrl": "image/jack cole.jpg",
        "description": "Portrait"
      }
    ],
    "url": "https://info.cs.st-andrews.ac.uk/student-handbook/school/jack-cole/",
    "relatedSourceId": "src_047",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Black-and-white portrait photograph of Professor Jack Cole.",
    "copyrightNote": "the image is under CC BY-NC Creative Commons Attribution-NonCommercial 4.0 International Public License and that the copyright-holder is the University"
  },
  {
    "mediaId": "m_004",
    "mediaTitle": "IBM 1620 Model II in the Scott Lang Building",
    "mediaType": "image",
    "localUrl": "image/IBM 1620-1.jpg",
    "images": [
      {
        "localUrl": "image/IBM 1620-1.jpg",
        "description": "The IBM 1620 model II, installed in late 1964 in the Scott Lang building at the Observatory, The picture was taken by local photographer Alex Coupar on 2 June 1966. (Image: Alex Coupar see Dundee University Archives https://archives.dundee.ac.uk/ms-258)"
      },
      {
        "localUrl": "image/IBM 1620-2.jpg",
        "description": "Part of the IBM 1620 instruction summary – timings are in microseconds"
      },
      {
        "localUrl": "image/IBM 1620-3.jpg",
        "description": "Indirect addressing – a useful feature of the 1620, specified by a negative address (indicated by flag bit set on rightmost digit of field)"
      },
      {
        "localUrl": "image/IBM 1620-4.jpg",
        "description": "Representation of the IBM 1620 console showing display lights and switches"
      },
      {
        "localUrl": "image/IBM 1620-5.jpg",
        "description": "1The University's IBM 1620 Model II, as originally housed in the Observatory; the card reader/punch is in the centre and the line printer is to the far left; the three disk drives (and the main'core storage'memory unit) are outside the picture on the right"
      }
    ],
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/10/10/the-beginning-of-the-service/",
    "relatedSourceId": "src_005",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Colour photograph of the University’s IBM 1620 Model II as originally housed in the Observatory; Image appears in SRC002, SRC003, SRC005, and SRC006. These pages caption it as “The University’s IBM 1620 Model II, as originally housed in the Observatory...” and credit the photograph to Dr T. R. Carson. Use this media row for the IBM 1620 image showing the card reader/punch in the centre and the line printer to the far left.",
    "copyrightNote": "Photograph courtesy of Dr T. R. Carson"
  },
  {
    "mediaId": "m_005",
    "mediaTitle": "IBM 1620 Model II with operator in the Scott Lang Building",
    "mediaType": "image",
    "localUrl": "image/IBM 1620-1.jpg",
    "images": [
      {
        "localUrl": "image/IBM 1620-1.jpg",
        "description": "The IBM 1620 model II, installed in late 1964 in the Scott Lang building at the Observatory, The picture was taken by local photographer Alex Coupar on 2 June 1966. (Image: Alex Coupar see Dundee University Archives https://archives.dundee.ac.uk/ms-258)"
      }
    ],
    "url": "https://news.st-andrews.ac.uk/wp-content/uploads/2015-images/50-years-mainbody-1.jpg",
    "relatedSourceId": "src_004",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Black-and-white photograph of the IBM 1620 Model II installed in late 1964 in the Scott Lang Building at the Observatory, with a seated operator/user at the console. Building;Observatory;operator;computer room Usable for website: yes Quality: high Image appears in SRC004 as the top image “50-years-mainbody-1”, with photo credit to Alex Coupar. The same black-and-white IBM 1620 image also appears in SRC005, SRC006, and SRC009 with captions describing the IBM 1620 Model II installed in late 1964 in the Scott Lang Building at the Observatory; SRC005, SRC006, and SRC009 state that the picture was taken by Alex Coupar on 2 June 1966.",
    "copyrightNote": "Photograph credited to Alex Coupar. SRC005, SRC006, and SRC009 point to Dundee University Archives MS 258."
  },
  {
    "mediaId": "m_006",
    "mediaTitle": "The VAX780, 1982",
    "mediaType": "image",
    "localUrl": "image/The VAX780, 1982.png",
    "images": [
      {
        "localUrl": "image/The VAX780, 1982.png",
        "description": "The VAX780, 1982"
      }
    ],
    "url": "No direct media URL",
    "relatedSourceId": "src_001",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "From Chronological Report, p. 7, first image. Black-and-white photograph captioned “The VAX780, 1982”.",
    "copyrightNote": "No public original image URL has been identified yet."
  },
  {
    "mediaId": "m_007",
    "mediaTitle": "John Honey Coffee area / goldfish bowl",
    "mediaType": "image",
    "localUrl": "image/The John Honey Coffee area (also known as the goldfish bowl).png",
    "images": [
      {
        "localUrl": "image/The John Honey Coffee area (also known as the goldfish bowl).png",
        "description": "The back row of 5 includes Ron Morrison, 2nd from left, and Tony Davie, furthest right. The front row of 4 includes Norman Paterson, furthest right, who was Scientific Officer in the School for many years."
      }
    ],
    "url": "No direct media URL",
    "relatedSourceId": "src_001",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "From Chronological Report, p. 9, first image. Black-and-white photograph captioned “the John Honey Coffee area, predecessor to the Jack Cole Coffee area. [DATE UNKNOWN]”.",
    "copyrightNote": "No public original image URL has been identified yet."
  },
  {
    "mediaId": "m_008",
    "mediaTitle": "W. van der Poel portrait",
    "mediaType": "image",
    "localUrl": "image/W. van der Poel.jpg",
    "images": [
      {
        "localUrl": "image/W. van der Poel.jpg",
        "description": "portrait"
      }
    ],
    "url": "https://archive.cs.st-andrews.ac.uk/dls-archive/files/vanderpoel_picture.jpg",
    "relatedSourceId": "src_010",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Black-and-white image of W. van der Poel associated with the 1969 Algol '68 DLS entry.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_009",
    "mediaTitle": "Punched card from a 1620 SPS program",
    "mediaType": "image",
    "localUrl": "image/SPS.jpg",
    "images": [
      {
        "localUrl": "image/SPS.jpg",
        "description": "Punched card from a 1620 assembler language (SPS) program"
      }
    ],
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/11/03/a-note-on-the-early-days-of-computing-in-and-related-to-st-andrews-university-part-ii/",
    "relatedSourceId": "src_009",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image of a punched card from a 1620 assembler language, SPS, program.",
    "copyrightNote": "Image appears on SRC009 as the second content image. Caption: “Punched card from a 1620 assembler language (SPS) program.”"
  },
  {
    "mediaId": "m_010",
    "mediaTitle": "Last day of the IBM 360/44",
    "mediaType": "image",
    "localUrl": "image/IBM-360_44.jpg",
    "images": [
      {
        "localUrl": "image/IBM-360_44.jpg",
        "description": "The last day of the IBM 360/44, 30 June 1980, with Director of the Computing Laboratory, Dr Robin Erskine"
      }
    ],
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/11/03/a-note-on-the-early-days-of-computing-in-and-related-to-st-andrews-university-part-ii/",
    "relatedSourceId": "src_009",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image of the last day of the IBM 360/44, with Director of the Computing Laboratory, Dr Robin Erskine.",
    "copyrightNote": "Image appears on SRC009 as the third content image. Caption: “The last day of the IBM 360/44, 30 June 1980, with Director of the Computing Laboratory, Dr Robin Erskine.”"
  },
  {
    "mediaId": "m_011",
    "mediaTitle": "IBM 360/44 in Mathematics Institute computer room",
    "mediaType": "image",
    "localUrl": "image/IBM30-44-2.jpg",
    "images": [
      {
        "localUrl": "image/IBM30-44-2.jpg",
        "description": ""
      }
    ],
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/02/historical360.html",
    "relatedSourceId": "src_013",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Black-and-white photograph of the IBM 360/44 system in the Mathematics Institute computer room.",
    "copyrightNote": "The source page credits the photograph to Roger Stapleton."
  },
  {
    "mediaId": "m_012",
    "mediaTitle": "Rows of personal computers in the Main Library",
    "mediaType": "image",
    "localUrl": "image/Rows of personal computers in the Main Library.png",
    "images": [
      {
        "localUrl": "image/Rows of personal computers in the Main Library.png",
        "description": "Rows of personal computers, situated in the main library to serve non-computer science students"
      }
    ],
    "url": "No direct media URL",
    "relatedSourceId": "src_001",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "From Chronological Report, p. 11, first image. Black-and-white photograph captioned “Rows of personal computers, situated in the Main Library to serve non-computer science students. [DATE UNKNOWN]”.",
    "copyrightNote": "No public original image URL has been identified yet."
  },
  {
    "mediaId": "m_013",
    "mediaTitle": "Department LAN network diagram, 1988",
    "mediaType": "image",
    "localUrl": "image/The department LAN network.png",
    "images": [
      {
        "localUrl": "image/The department LAN network.png",
        "description": "The department LAN network"
      }
    ],
    "url": "No direct media URL",
    "relatedSourceId": "src_001",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "From Chronological Report, p. 12, first image. Colour diagram captioned “The department LAN network, 1988”.",
    "copyrightNote": "No public original image URL has been identified yet."
  },
  {
    "mediaId": "m_014",
    "mediaTitle": "Students in the Jack Cole Building using modern computing equipment",
    "mediaType": "image",
    "localUrl": "image/Students in the Jack Cole Building using modern computing equipment.png",
    "images": [
      {
        "localUrl": "image/Students in the Jack Cole Building using modern computing equipment.png",
        "description": "The closest student in the white t-shirt is Tom Dalton who started their undergraduate course in 2011 and then went on to do his PhD with Prof. Graham Kirby. This looks like a CS1002 class"
      }
    ],
    "url": "No direct media URL",
    "relatedSourceId": "src_001",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "From Chronological Report, p. 16, first image. Colour photograph captioned “Students in the Jack Cole Building using modern computing equipment, 2011.”",
    "copyrightNote": "No public original image URL has been identified yet."
  },
  {
    "mediaId": "m_015",
    "mediaTitle": "Jack Cole Building under construction",
    "mediaType": "image",
    "localUrl": "image/Jack Cole Building under construction.png",
    "images": [
      {
        "localUrl": "image/Jack Cole Building under construction.png",
        "description": "Jack Cole Building under construction"
      }
    ],
    "url": "No direct media URL",
    "relatedSourceId": "src_001",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "From Chronological Report, p. 17, first image. Colour photograph captioned “Jack Cole Building under construction, 2004.”",
    "copyrightNote": "No public original image URL has been identified yet."
  },
  {
    "mediaId": "m_016",
    "mediaTitle": "Plaque commemorating the opening of the Jack Cole Building",
    "mediaType": "photograph",
    "localUrl": "image/Plaque commemorating the opening of the Jack Cole Building.jpg",
    "images": [
      {
        "localUrl": "image/Plaque commemorating the opening of the Jack Cole Building.jpg",
        "description": "Plaque commemorating the opening of the Jack Cole Building"
      }
    ],
    "url": "https://info.cs.st-andrews.ac.uk/student-handbook/images/jack-cole/opening/02.jpg",
    "relatedSourceId": "src_036",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Colour photograph of the Jack Cole Building opening plaque. The Chronological Report p. 18 caption identifies Professor Ursula Martin, First Minister Jack McConnell and Head of School Professor Ron Morrison; one person is marked unknown.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_017",
    "mediaTitle": "Research Expertise Database: Input and Output",
    "mediaType": "diagram",
    "localUrl": "image/Research Expertise Database Input and Output.jpg",
    "images": [
      {
        "localUrl": "image/Research Expertise Database Input and Output.jpg",
        "description": "Research Expertise Database Input and Output"
      }
    ],
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2005/05/resexp.jpg",
    "relatedSourceId": "src_040",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Diagram showing inputs to and outputs from the Research Expertise Database, including administration, researcher and school/department interfaces, Arts Server, ePrints, RAE, CVs, brochures and web pages.",
    "copyrightNote": "Archived IT Services Newsletter image;"
  },
  {
    "mediaId": "m_018",
    "mediaTitle": "University connection to JANET and the Internet diagram",
    "mediaType": "diagram",
    "localUrl": "image/The University’s connection to JANET and the Internet.png",
    "images": [
      {
        "localUrl": "image/The University’s connection to JANET and the Internet.png",
        "description": "The University's connection to JANET and the Internet"
      }
    ],
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2009/02/200902.pdf",
    "relatedSourceId": "src_033",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Network/connectivity diagram in the February 2009 Information Services Newsletter illustrating the University’s connection to JANET and the Internet through FaTMAN / regional network infrastructure. pp. 4–5",
    "copyrightNote": "Archived Information Services Newsletter PDF"
  },
  {
    "mediaId": "m_019",
    "mediaTitle": "Identity Management project diagram",
    "mediaType": "diagram",
    "localUrl": "image/Identity Management project diagram.png",
    "images": [
      {
        "localUrl": "image/Identity Management project diagram.png",
        "description": "Identity Management connections among systems such as Data Warehouse, LDAP, SITS, CHARM, eVision, Shibboleth, CAS, Active Directory, Library, access control and related services"
      }
    ],
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2011/02/201102.pdf",
    "relatedSourceId": "src_032",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Diagram in the February 2011 Information Services Newsletter showing Identity Management connections among systems such as Data Warehouse, LDAP, SITS, CHARM, eVision, Shibboleth, CAS, Active Directory, Library, access control and related services. pp. 4–5",
    "copyrightNote": "Archived Information Services Newsletter PDF"
  },
  {
    "mediaId": "m_020",
    "mediaTitle": "Ron Morrison at Morrison Suite",
    "mediaType": "image",
    "localUrl": "image/Ron Morrison at Morrison Suite.jpg",
    "images": [
      {
        "localUrl": "image/Ron Morrison at Morrison Suite.jpg",
        "description": "Ron Morrison"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2014/02/Ron-300x225.jpg",
    "relatedSourceId": "src_051",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image from the Morrison Suite blog post. It shows Ron Morrison at or beside the Morrison Suite sign.",
    "copyrightNote": "Likely copyright University of St Andrews / School of Computer Science."
  },
  {
    "mediaId": "m_021",
    "mediaTitle": "User Centred Interaction Design / MSc HCI teaching image",
    "mediaType": "image",
    "localUrl": "image/MSc HCI teaching image.png",
    "images": [
      {
        "localUrl": "image/MSc HCI teaching image.png",
        "description": "Shows students or teaching activity related to User Centred Interaction Design / prototyping"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2014/03/UCI-300x225.png",
    "relatedSourceId": "src_052",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image from the MSc in Human Computer Interaction post. It shows students or teaching activity related to User Centred Interaction Design / prototyping in the Morrison Suite context.",
    "copyrightNote": "Likely copyright University of St Andrews / School of Computer Science."
  },
  {
    "mediaId": "m_022",
    "mediaTitle": "Interaction Lab opening image",
    "mediaType": "image",
    "localUrl": "image/Interaction Lab opening.png",
    "images": [
      {
        "localUrl": "image/Interaction Lab opening.png",
        "description": "Interaction Lab opening"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2015/09/int2-300x225.png",
    "relatedSourceId": "src_053",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image from the official Interaction Lab opening post. It is part of the event image set for the opening of the Interaction Lab.",
    "copyrightNote": "Likely copyright University of St Andrews / School of Computer Science."
  },
  {
    "mediaId": "m_023",
    "mediaTitle": "Ursula Martin DLS 2017 image",
    "mediaType": "image",
    "localUrl": "image/Ursula Martin DLS 2017.png",
    "images": [
      {
        "localUrl": "image/Ursula Martin DLS 2017.png",
        "description": "Ursula Martin"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2017/10/dls1-300x225.png",
    "relatedSourceId": "src_054",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image from the Ursula Martin DLS 2017 post. It shows Ursula Martin in the DLS event context with School / University representatives.",
    "copyrightNote": "Likely copyright University of St Andrews / School of Computer Science."
  },
  {
    "mediaId": "m_024",
    "mediaTitle": "Finlaggan virtual reconstruction image",
    "mediaType": "image",
    "localUrl": "image/Finlaggan.png",
    "images": [
      {
        "localUrl": "image/Finlaggan.png",
        "description": "Finlaggan virtual reconstruction image"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2019/05/General-View-of-Islands-1024x541.png",
    "relatedSourceId": "src_056",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image from the Finlaggan virtual reconstruction post. It shows a visual reconstruction / view associated with the Open Virtual Worlds project.",
    "copyrightNote": "Likely copyright University of St Andrews / Open Virtual Worlds / project contributors."
  },
  {
    "mediaId": "m_025",
    "mediaTitle": "Jack Cole Building 20th anniversary image",
    "mediaType": "image",
    "localUrl": "image/Jack Cole Building 20th anniversary.jpg",
    "images": [
      {
        "localUrl": "image/Jack Cole Building 20th anniversary.jpg",
        "description": "Jack Cole Building 20th anniversary"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2025/03/IMG_0992-300x234.jpg",
    "relatedSourceId": "src_057",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Image from the 2025 Jack Cole Building anniversary post. It visually documents the 20th anniversary celebration context.",
    "copyrightNote": "Likely copyright University of St Andrews / School of Computer Science."
  },
  {
    "mediaId": "m_026",
    "mediaTitle": "Jack Cole Building image on School About page",
    "mediaType": "source_page_image",
    "localUrl": "image/jack-cole-building.jpg",
    "images": [
      {
        "localUrl": "image/jack-cole-building.jpg",
        "description": "Jack Cole Building"
      }
    ],
    "url": "https://www.st-andrews.ac.uk/computer-science/about/",
    "relatedSourceId": "src_048",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "Source page image from src_048. No direct media URL identified.",
    "copyrightNote": "Copyright belongs to the University of St Andrews."
  },
  {
    "mediaId": "m_034",
    "mediaTitle": "DEC GT40 terminal with FOCAL program",
    "mediaType": "image",
    "localUrl": "image/DEC_GT40_terminal_with_FOCAL_program.png",
    "images": [
      {
        "localUrl": "image/DEC_GT40_terminal_with_FOCAL_program.png",
        "description": "DEC_GT40_terminal_with_FOCAL_program"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:DEC_GT40_terminal_with_FOCAL_program,_2.png",
    "relatedSourceId": "src_058",
    "simplifiedCopyright": "Morn, Screenshot of an emulated DEC GT40 terminal, 28 January 2021. Licensed under CC0 1.0 Universal, via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_036",
    "mediaTitle": "Cromemco System Three computer",
    "mediaType": "image",
    "localUrl": "image/Cromemco_System_Three.jpg",
    "images": [
      {
        "localUrl": "image/Cromemco_System_Three.jpg",
        "description": "Cromemco_System_Three"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:Cromemco_System_Three_(1979).jpg",
    "relatedSourceId": "src_016",
    "simplifiedCopyright": "Cromemco, Cromemco System Three Computer in 1979, 1979. Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0), via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_037",
    "mediaTitle": "Digital MINC computer",
    "mediaType": "image",
    "localUrl": "image/Digital MINC computer.png",
    "images": [
      {
        "localUrl": "image/Digital MINC computer.png",
        "description": "This is MINC – the Modular Instrument Computer; a special PDP-11 system with modules for analog and digital I/O and timing for use in a laboratory"
      }
    ],
    "url": "https://pdp2011.sytse.net/wordpress/pdp-11/minc/",
    "relatedSourceId": "src_016",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_038",
    "mediaTitle": "DEC VK100 terminal",
    "mediaType": "image",
    "localUrl": "image/DEC_VK100.jpg",
    "images": [
      {
        "localUrl": "image/DEC_VK100.jpg",
        "description": "DEC_VK100"
      }
    ],
    "url": "https://terminals-wiki.org/wiki/index.php/DEC_VK100",
    "relatedSourceId": "src_049",
    "simplifiedCopyright": "Copyright status not specified,Image sourced from eBay item no. 221638651686, sold by twenex, via Terminals Wiki.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_039",
    "mediaTitle": "ICL PERQ workstation",
    "mediaType": "image",
    "localUrl": "image/ICL PERQ workstation.jpg",
    "images": [
      {
        "localUrl": "image/ICL PERQ workstation.jpg",
        "description": "ICL PERQ workstation"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:ICL_PERQ_1_workstation_Edinburgh_University.jpg",
    "relatedSourceId": "src_066",
    "simplifiedCopyright": "J. Gordon Hughes, Two ICL PERQ 1 workstation computers, early 1980s. Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0), via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_040",
    "mediaTitle": "BBC Micro computer",
    "mediaType": "image",
    "localUrl": "image/BBC_Micro_Computer.jpg",
    "images": [
      {
        "localUrl": "image/BBC_Micro_Computer.jpg",
        "description": "BBC_Micro_Computer"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:BBC_Micro_Front_Restored.jpg",
    "relatedSourceId": "src_067",
    "simplifiedCopyright": "Stuart Brady, BBC Micro, retouched by Ubcule, 3 October 2010. Public domain, via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_041",
    "mediaTitle": "NEC Spinwriter printer",
    "mediaType": "image",
    "localUrl": "image/NEC Spinwriter printer.jpg",
    "images": [
      {
        "localUrl": "image/NEC Spinwriter printer.jpg",
        "description": "NEC Spinwriter printer"
      }
    ],
    "url": "https://americanhistory.si.edu/collections/object/nmah_212780",
    "relatedSourceId": "src_068",
    "simplifiedCopyright": "Smithsonian Institution, National Museum of American History, NEC Spinwriter Printer 5515. CC0 1.0 Universal, via Smithsonian Open Access.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_043",
    "mediaTitle": "DEC TU78 magnetic tape drive",
    "mediaType": "image",
    "localUrl": "image/DEC-TU78.jpg",
    "images": [
      {
        "localUrl": "image/DEC-TU78.jpg",
        "description": "The TU78 was an advanced big magnetic tape drive from DEC, which used 2400-inch 0.5-inch wide magnetic tape on a standard 10-1/2-inch reel"
      }
    ],
    "url": "https://www.storagenewsletter.com/2019/04/22/history-1980-1981-dec-tu78/",
    "relatedSourceId": "src_070",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_044",
    "mediaTitle": "IBM PC XT",
    "mediaType": "image",
    "localUrl": "image/IBM_PC_XT.jpg",
    "images": [
      {
        "localUrl": "image/IBM_PC_XT.jpg",
        "description": "IBM_PC_XT"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:IBM_PC_XT_color.jpg",
    "relatedSourceId": "src_070",
    "simplifiedCopyright": "Ruben de Rijcke, IBM PC XT with IBM 5151 monitor and 10MB hard disk drive, 30 May 2007. Licensed under Creative Commons Attribution 3.0 Unported (CC BY 3.0), via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_045",
    "mediaTitle": "Apple LaserWriter Plus for Apple Desktop Publishing System",
    "mediaType": "image",
    "localUrl": "image/Apple_LaserWriter.jpg",
    "images": [
      {
        "localUrl": "image/Apple_LaserWriter.jpg",
        "description": "Apple_LaserWriter"
      }
    ],
    "url": "https://apple.fandom.com/wiki/LaserWriter_Plus",
    "relatedSourceId": "src_017",
    "simplifiedCopyright": "Apple, LaserWriter. Public domain, via Wikimedia Commons; file credited to Apple and Cfazzzio.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_046",
    "mediaTitle": "Zenith Z-159 personal computer",
    "mediaType": "image",
    "localUrl": "image/Zenith Z-159 personal computer.png",
    "images": [
      {
        "localUrl": "image/Zenith Z-159 personal computer.png",
        "description": "Zenith Z-159 personal computer"
      }
    ],
    "url": "https://classic.technology/wp-content/uploads/2024/08/zenith-z159.pdf",
    "relatedSourceId": "src_018",
    "simplifiedCopyright": "© 1989 Zenith Data Systems Corporation; source: Zenith Z-159 brochure via Classic Computer Brochures.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_049",
    "mediaTitle": "Amstrad PC1512 personal computer",
    "mediaType": "image",
    "localUrl": "image/Amstrad_PC1512.jpg",
    "images": [
      {
        "localUrl": "image/Amstrad_PC1512.jpg",
        "description": "Amstrad_PC1512"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:Amstrad_PC1512.jpg",
    "relatedSourceId": "src_072",
    "simplifiedCopyright": "Marcin Wichary, Amstrad PC1512, 17 August 2006. Licensed under Creative Commons Attribution 2.0 Generic (CC BY 2.0), originally published on Flickr, via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_050",
    "mediaTitle": "IBM PS/2 Model 30 for IBM PC range demonstration",
    "mediaType": "image",
    "localUrl": "image/IBM_PS2_(R)_model_30.jpg",
    "images": [
      {
        "localUrl": "image/IBM_PS2_(R)_model_30.jpg",
        "description": "IBM_PS2_(R)_model_30"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:IBM_PS2_%28R%29_model_30.jpg",
    "relatedSourceId": "src_073",
    "simplifiedCopyright": "Museo de Informática, Museo de Informática, 17 June 2011. Licensed under Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0), originally published on Flickr, via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_051",
    "mediaTitle": "Acorn Archimedes 300 series",
    "mediaType": "image",
    "localUrl": "image/600px-A310.jpg",
    "images": [
      {
        "localUrl": "image/600px-A310.jpg",
        "description": "600px-A310"
      }
    ],
    "url": "https://arcwiki.org.uk/index.php/Archimedes_300_series",
    "relatedSourceId": "src_073",
    "simplifiedCopyright": "Copyright status not specified,Original promotional image by Acorn Computers Limited, via ArcWiki.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_052",
    "mediaTitle": "DEC MicroVAX II computer",
    "mediaType": "image",
    "localUrl": "image/MicroVAX_II.jpg",
    "images": [
      {
        "localUrl": "image/MicroVAX_II.jpg",
        "description": "MicroVAX_II"
      }
    ],
    "url": "https://en.wikipedia.org/wiki/MicroVAX",
    "relatedSourceId": "src_075",
    "simplifiedCopyright": "Darklanlan, MicroVAX II front, 29 May 2024. Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0), via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_053",
    "mediaTitle": "Apple Macintosh Plus for AppleTalk cluster",
    "mediaType": "image",
    "localUrl": "image/Apple_Macintosh_Plus.jpg",
    "images": [
      {
        "localUrl": "image/Apple_Macintosh_Plus.jpg",
        "description": "Apple_Macintosh_Plus"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:Apple_Macintosh_Plus.jpg",
    "relatedSourceId": "src_075",
    "simplifiedCopyright": "Felix Winkelnkemper, Apple Macintosh Plus with an attached hard drive, 27 March 2019. Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0), via Wikimedia Commons.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_057",
    "mediaTitle": "Apple LaserWriter II for Scotsys Macintosh demonstration",
    "mediaType": "image",
    "localUrl": "image/Apple_Laserwriter_II.jpg",
    "images": [
      {
        "localUrl": "image/Apple_Laserwriter_II.jpg",
        "description": "Apple_Laserwriter_II"
      }
    ],
    "url": "https://commons.wikimedia.org/wiki/File:Apple_Laserwriter_II.jpg",
    "relatedSourceId": "src_079",
    "simplifiedCopyright": "All About Apple Museum, Apple LaserWriter II. Licensed under Creative Commons Attribution-ShareAlike 2.5 Italy (CC BY-SA 2.5 IT), via Wikimedia Commons. Attribution: All About Apple Museum.",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_060",
    "mediaTitle": "Sun Ultra 1 Creator",
    "mediaType": "image",
    "localUrl": "image/Sun Ultra 1 Creator .jpg",
    "images": [
      {
        "localUrl": "image/Sun Ultra 1 Creator .jpg",
        "description": "Sun Ultra 1 Creator"
      }
    ],
    "url": "https://www.computinghistory.org.uk/det/11392/Sun-Ultra-1-Creator/",
    "relatedSourceId": "src_091",
    "simplifiedCopyright": "Copyright status not specified",
    "imageNote": "External image.",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_062",
    "mediaTitle": "Treasures from Special Collections exhibition display image",
    "mediaType": "image",
    "localUrl": "image/exhibition.jpg",
    "images": [
      {
        "localUrl": "image/exhibition.jpg",
        "description": "Treasures from Special Collections exhibition display image"
      }
    ],
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/2007/10/speccollexhn.html",
    "relatedSourceId": "src_138",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_065",
    "mediaTitle": "Palimpsest project image from British Library Labs recognition post",
    "mediaType": "image",
    "localUrl": "image/Litlong.png",
    "images": [
      {
        "localUrl": "image/Litlong.png",
        "description": "Litlong"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2015/11/pset-1024x558.png",
    "relatedSourceId": "src_173",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_067",
    "mediaTitle": "Open Virtual Worlds fieldwork with Timespan Museum image",
    "mediaType": "image",
    "localUrl": "image/Open vitual word.jpg",
    "images": [
      {
        "localUrl": "image/Open vitual word.jpg",
        "description": "Open vitual word"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2025/08/4.2-300x225.jpg",
    "relatedSourceId": "src_184",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_068",
    "mediaTitle": "Digital Heritage 2025 conference image",
    "mediaType": "image",
    "localUrl": "image/Digital Heritage 2025 conference.jpeg",
    "images": [
      {
        "localUrl": "image/Digital Heritage 2025 conference.jpeg",
        "description": "Digital Heritage 2025 conference"
      }
    ],
    "url": "https://blogs.cs.st-andrews.ac.uk/csblog/files/2025/09/processed-085DDBB0-A8BE-443E-9315-E3AB9BB732B6-200x300.jpeg",
    "relatedSourceId": "src_185",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_069",
    "mediaTitle": "Faculty of Science papers, UYUY4235",
    "mediaType": "image",
    "localUrl": "image/observatory.jpg",
    "images": [
      {
        "localUrl": "image/observatory.jpg",
        "description": "observatory"
      }
    ],
    "url": "https://university-collections.wp.st-andrews.ac.uk/2022/09/26/the-role-of-astronomy-in-the-establishment-of-the-university-computing-laboratory-in-st-andrews/",
    "relatedSourceId": "src_002",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_070",
    "mediaTitle": "ONLINE RETRIEVAL IN THE UNIVERSITY LIBRARY",
    "mediaType": "image",
    "localUrl": "image/ON-LINE RETRIEVAL IN THE UNIVERSITY LIBRARY .png",
    "images": [
      {
        "localUrl": "image/ON-LINE RETRIEVAL IN THE UNIVERSITY LIBRARY .png",
        "description": "Online retrieval in the university"
      }
    ],
    "url": "https://archive.st-andrews.ac.uk/other/newsletter/itspecial/newsletter/PDFscanOCR/1978/ocr197802.pdf",
    "relatedSourceId": "src_061",
    "simplifiedCopyright": "Images from The University of St Andrews",
    "imageNote": "",
    "copyrightNote": ""
  },
  {
    "mediaId": "m_071",
    "mediaTitle": "Humbul Gateway",
    "mediaType": "image",
    "localUrl": "image/Humbul Gateway.jpg",
    "images": [
      {
        "localUrl": "image/Humbul Gateway.jpg",
        "description": "Humbul Gateway"
      }
    ],
    "url": "https://users.ox.ac.uk/~mikef/rts/future/slide4.html",
    "relatedSourceId": "src_072",
    "simplifiedCopyright": "Copyright status not specified;University of Oxford. Early screenshot of Humbul, reproduced from “Future of the Humanities: Humbul: screen one”",
    "imageNote": "External image.",
    "copyrightNote": ""
  }
];

const ITEM_BY_ID = Object.fromEntries(ITEMS.map((entry) => [entry.id, entry]));
const SOURCE_BY_ID = Object.fromEntries(SOURCES.map((entry) => [entry.sourceId, entry]));
const MEDIA_BY_ID = Object.fromEntries(MEDIA.map((entry) => [entry.mediaId, entry]));
