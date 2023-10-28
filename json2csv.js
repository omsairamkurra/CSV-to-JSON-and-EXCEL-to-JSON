const json2csv = require('json2csv').Parser;


const jsonData = [
    {
      "Code": "AED",
      "Symbol": "د.إ",
      "Name": "United Arab Emirates d"
    },
    {
      "Code": "AFN",
      "Symbol": "؋",
      "Name": "Afghan afghani"
    },
    {
      "Code": "ALL",
      "Symbol": "L",
      "Name": "Albanian lek"
    },
    {
      "Code": "AMD",
      "Symbol": "AMD",
      "Name": "Armenian dram"
    },
    {
      "Code": "ANG",
      "Symbol": "ƒ",
      "Name": "Netherlands Antillean gu"
    },
    {
      "Code": "AOA",
      "Symbol": "Kz",
      "Name": "Angolan kwanza"
    },
    {
      "Code": "ARS",
      "Symbol": "$",
      "Name": "Argentine peso"
    },
    {
      "Code": "AUD",
      "Symbol": "$",
      "Name": "Australian dollar"
    },
    {
      "Code": "AWG",
      "Symbol": "Afl.",
      "Name": "Aruban florin"
    },
    {
      "Code": "AZN",
      "Symbol": "AZN",
      "Name": "Azerbaijani manat"
    },
    {
      "Code": "BAM",
      "Symbol": "KM",
      "Name": "Bosnia and Herzegovina"
    },
    {
      "Code": "BBD",
      "Symbol": "$",
      "Name": "Barbadian dollar"
    },
    {
      "Code": "BDT",
      "Symbol": "৳",
      "Name": "Bangladeshi taka"
    },
    {
      "Code": "BGN",
      "Symbol": "лв.",
      "Name": "Bulgarian lev"
    },
    {
      "Code": "BHD",
      "Symbol": ".د.ب",
      "Name": "Bahraini dinar"
    },
    {
      "Code": "BIF",
      "Symbol": "Fr",
      "Name": "Burundian franc"
    },
    {
      "Code": "BMD",
      "Symbol": "$",
      "Name": "Bermudian dollar"
    },
    {
      "Code": "BND",
      "Symbol": "$",
      "Name": "Brunei dollar"
    },
    {
      "Code": "BOB",
      "Symbol": "Bs.",
      "Name": "Bolivian boliviano"
    },
    {
      "Code": "BRL",
      "Symbol": "R$",
      "Name": "Brazilian real"
    },
    {
      "Code": "BSD",
      "Symbol": "$",
      "Name": "Bahamian dollar"
    },
    {
      "Code": "BTC",
      "Symbol": "฿",
      "Name": "Bitcoin"
    },
    {
      "Code": "BTN",
      "Symbol": "Nu.",
      "Name": "Bhutanese ngultrum"
    },
    {
      "Code": "BWP",
      "Symbol": "P",
      "Name": "Botswana pula"
    },
    {
      "Code": "BYR",
      "Symbol": "Br",
      "Name": "Belarusian ruble (old)'"
    },
    {
      "Code": "BYN",
      "Symbol": "Br",
      "Name": "Belarusian ruble"
    },
    {
      "Code": "BZD",
      "Symbol": "$",
      "Name": "Belize dollar"
    },
    {
      "Code": "CAD",
      "Symbol": "$",
      "Name": "Canadian dollar"
    },
    {
      "Code": "CDF",
      "Symbol": "Fr",
      "Name": "Congolese franc"
    },
    {
      "Code": "CHF",
      "Symbol": "CHF",
      "Name": "Swiss franc"
    },
    {
      "Code": "CLP",
      "Symbol": "$",
      "Name": "Chilean peso"
    },
    {
      "Code": "CNY",
      "Symbol": "¥",
      "Name": "Chinese yuan"
    },
    {
      "Code": "COP",
      "Symbol": "$",
      "Name": "Colombian peso"
    },
    {
      "Code": "CRC",
      "Symbol": "₡",
      "Name": "Costa Rican colón"
    },
    {
      "Code": "CUC",
      "Symbol": "$",
      "Name": "Cuban convertible peso')"
    },
    {
      "Code": "CUP",
      "Symbol": "$",
      "Name": "Cuban peso"
    },
    {
      "Code": "CVE",
      "Symbol": "$",
      "Name": "Cape Verdean escudo"
    },
    {
      "Code": "CZK",
      "Symbol": "Kč",
      "Name": "Czech koruna"
    },
    {
      "Code": "DJF",
      "Symbol": "Fr",
      "Name": "Djiboutian franc"
    },
    {
      "Code": "DKK",
      "Symbol": "DKK",
      "Name": "Danish krone"
    },
    {
      "Code": "DOP",
      "Symbol": "RD$",
      "Name": "Dominican peso"
    },
    {
      "Code": "DZD",
      "Symbol": "د.ج",
      "Name": "Algerian dinar"
    },
    {
      "Code": "EGP",
      "Symbol": "EGP",
      "Name": "Egyptian pound"
    },
    {
      "Code": "ERN",
      "Symbol": "Nfk",
      "Name": "Eritrean nakfa"
    },
    {
      "Code": "ETB",
      "Symbol": "Br",
      "Name": "Ethiopian birr"
    },
    {
      "Code": "EUR",
      "Symbol": "€",
      "Name": "Euro"
    },
    {
      "Code": "FJD",
      "Symbol": "$",
      "Name": "Fijian dollar"
    },
    {
      "Code": "FKP",
      "Symbol": "£",
      "Name": "Falkland Islands pound')"
    },
    {
      "Code": "GBP",
      "Symbol": "£",
      "Name": "Pound sterling"
    },
    {
      "Code": "GEL",
      "Symbol": "₾",
      "Name": "Georgian lari"
    },
    {
      "Code": "GGP",
      "Symbol": "£",
      "Name": "Guernsey pound"
    },
    {
      "Code": "GHS",
      "Symbol": "₵",
      "Name": "Ghana cedi"
    },
    {
      "Code": "GIP",
      "Symbol": "£",
      "Name": "Gibraltar pound"
    },
    {
      "Code": "GMD",
      "Symbol": "D",
      "Name": "Gambian dalasi"
    },
    {
      "Code": "GNF",
      "Symbol": "Fr",
      "Name": "Guinean franc"
    },
    {
      "Code": "GTQ",
      "Symbol": "Q",
      "Name": "Guatemalan quetzal"
    },
    {
      "Code": "GYD",
      "Symbol": "$",
      "Name": "Guyanese dollar"
    },
    {
      "Code": "HKD",
      "Symbol": "$",
      "Name": "Hong Kong dollar"
    },
    {
      "Code": "HNL",
      "Symbol": "L",
      "Name": "Honduran lempira"
    },
    {
      "Code": "HRK",
      "Symbol": "kn",
      "Name": "Croatian kuna"
    },
    {
      "Code": "HTG",
      "Symbol": "G",
      "Name": "Haitian gourde"
    },
    {
      "Code": "HUF",
      "Symbol": "Ft",
      "Name": "Hungarian forint"
    },
    {
      "Code": "IDR",
      "Symbol": "Rp",
      "Name": "Indonesian rupiah"
    },
    {
      "Code": "ILS",
      "Symbol": "₪",
      "Name": "Israeli new shekel"
    },
    {
      "Code": "IMP",
      "Symbol": "£",
      "Name": "Manx pound"
    },
    {
      "Code": "INR",
      "Symbol": "₹",
      "Name": "Indian rupee"
    },
    {
      "Code": "IQD",
      "Symbol": "ع.د",
      "Name": "Iraqi dinar"
    },
    {
      "Code": "IRR",
      "Symbol": "﷼",
      "Name": "Iranian rial"
    },
    {
      "Code": "IRT",
      "Symbol": "تومان",
      "Name": "Iranian toman"
    },
    {
      "Code": "ISK",
      "Symbol": "kr.",
      "Name": "Icelandic króna"
    },
    {
      "Code": "JEP",
      "Symbol": "£",
      "Name": "Jersey pound"
    },
    {
      "Code": "JMD",
      "Symbol": "$",
      "Name": "Jamaican dollar"
    },
    {
      "Code": "JOD",
      "Symbol": "د.ا",
      "Name": "Jordanian dinar"
    },
    {
      "Code": "JPY",
      "Symbol": "¥",
      "Name": "Japanese yen"
    },
    {
      "Code": "KES",
      "Symbol": "KSh",
      "Name": "Kenyan shilling"
    },
    {
      "Code": "KGS",
      "Symbol": "сом",
      "Name": "Kyrgyzstani som"
    },
    {
      "Code": "KHR",
      "Symbol": "៛",
      "Name": "Cambodian riel"
    },
    {
      "Code": "KMF",
      "Symbol": "Fr",
      "Name": "Comorian franc"
    },
    {
      "Code": "KPW",
      "Symbol": "₩",
      "Name": "North Korean won"
    },
    {
      "Code": "KRW",
      "Symbol": "₩",
      "Name": "South Korean won"
    },
    {
      "Code": "KWD",
      "Symbol": "د.ك",
      "Name": "Kuwaiti dinar"
    },
    {
      "Code": "KYD",
      "Symbol": "$",
      "Name": "Cayman Islands dollar"
    },
    {
      "Code": "KZT",
      "Symbol": "₸",
      "Name": "Kazakhstani tenge"
    },
    {
      "Code": "LAK",
      "Symbol": "₭",
      "Name": "Lao kip"
    },
    {
      "Code": "LBP",
      "Symbol": "ل.ل",
      "Name": "Lebanese pound"
    },
    {
      "Code": "LKR",
      "Symbol": "රු",
      "Name": "Sri Lankan rupee"
    },
    {
      "Code": "LRD",
      "Symbol": "$",
      "Name": "Liberian dollar"
    },
    {
      "Code": "LSL",
      "Symbol": "L",
      "Name": "Lesotho loti"
    },
    {
      "Code": "LYD",
      "Symbol": "ل.د",
      "Name": "Libyan dinar"
    },
    {
      "Code": "MAD",
      "Symbol": "د.م.",
      "Name": "Moroccan dirham"
    },
    {
      "Code": "MDL",
      "Symbol": "MDL",
      "Name": "Moldovan leu"
    },
    {
      "Code": "MGA",
      "Symbol": "Ar",
      "Name": "Malagasy ariary"
    },
    {
      "Code": "MKD",
      "Symbol": "ден",
      "Name": "Macedonian denar"
    },
    {
      "Code": "MMK",
      "Symbol": "Ks",
      "Name": "Burmese kyat"
    },
    {
      "Code": "MNT",
      "Symbol": "₮",
      "Name": "Mongolian tögrög"
    },
    {
      "Code": "MOP",
      "Symbol": "P",
      "Name": "Macanese pataca"
    },
    {
      "Code": "MRU",
      "Symbol": "UM",
      "Name": "Mauritanian ouguiya"
    },
    {
      "Code": "MUR",
      "Symbol": "₨",
      "Name": "Mauritian rupee"
    },
    {
      "Code": "MVR",
      "Symbol": ".ރ",
      "Name": "Maldivian rufiyaa"
    },
    {
      "Code": "MWK",
      "Symbol": "MK",
      "Name": "Malawian kwacha"
    },
    {
      "Code": "MXN",
      "Symbol": "$",
      "Name": "Mexican peso"
    },
    {
      "Code": "MYR",
      "Symbol": "RM",
      "Name": "Malaysian ringgit"
    },
    {
      "Code": "MZN",
      "Symbol": "MT",
      "Name": "Mozambican metical"
    },
    {
      "Code": "NAD",
      "Symbol": "N$",
      "Name": "Namibian dollar"
    },
    {
      "Code": "NGN",
      "Symbol": "₦",
      "Name": "Nigerian naira"
    },
    {
      "Code": "NIO",
      "Symbol": "C$",
      "Name": "Nicaraguan córdoba"
    },
    {
      "Code": "NOK",
      "Symbol": "kr",
      "Name": "Norwegian krone"
    },
    {
      "Code": "NPR",
      "Symbol": "₨",
      "Name": "Nepalese rupee"
    },
    {
      "Code": "NZD",
      "Symbol": "$",
      "Name": "New Zealand dollar"
    },
    {
      "Code": "OMR",
      "Symbol": "ر.ع.",
      "Name": "Omani rial"
    },
    {
      "Code": "PAB",
      "Symbol": "B/.",
      "Name": "Panamanian balboa"
    },
    {
      "Code": "PEN",
      "Symbol": "S/",
      "Name": "Sol"
    },
    {
      "Code": "PGK",
      "Symbol": "K",
      "Name": "Papua New Guinean kina')"
    },
    {
      "Code": "PHP",
      "Symbol": "₱",
      "Name": "Philippine peso"
    },
    {
      "Code": "PKR",
      "Symbol": "₨",
      "Name": "Pakistani rupee"
    },
    {
      "Code": "PLN",
      "Symbol": "zł",
      "Name": "Polish złoty"
    },
    {
      "Code": "PRB",
      "Symbol": "р.",
      "Name": "Transnistrian ruble"
    },
    {
      "Code": "PYG",
      "Symbol": "₲",
      "Name": "Paraguayan guaraní"
    },
    {
      "Code": "QAR",
      "Symbol": "ر.ق",
      "Name": "Qatari riyal"
    },
    {
      "Code": "RON",
      "Symbol": "lei",
      "Name": "Romanian leu"
    },
    {
      "Code": "RSD",
      "Symbol": "рсд",
      "Name": "Serbian dinar"
    },
    {
      "Code": "RUB",
      "Symbol": "₽",
      "Name": "Russian ruble"
    },
    {
      "Code": "RWF",
      "Symbol": "Fr",
      "Name": "Rwandan franc"
    },
    {
      "Code": "SAR",
      "Symbol": "ر.س",
      "Name": "Saudi riyal"
    },
    {
      "Code": "SBD",
      "Symbol": "$",
      "Name": "Solomon Islands dollar')"
    },
    {
      "Code": "SCR",
      "Symbol": "₨",
      "Name": "Seychellois rupee"
    },
    {
      "Code": "SDG",
      "Symbol": "ج.س.",
      "Name": "Sudanese pound"
    },
    {
      "Code": "SEK",
      "Symbol": "kr",
      "Name": "Swedish krona"
    },
    {
      "Code": "SGD",
      "Symbol": "$",
      "Name": "Singapore dollar"
    },
    {
      "Code": "SHP",
      "Symbol": "£",
      "Name": "Saint Helena pound"
    },
    {
      "Code": "SLL",
      "Symbol": "Le",
      "Name": "Sierra Leonean leone"
    },
    {
      "Code": "SOS",
      "Symbol": "Sh",
      "Name": "Somali shilling"
    },
    {
      "Code": "SRD",
      "Symbol": "$",
      "Name": "Surinamese dollar"
    },
    {
      "Code": "SSP",
      "Symbol": "£",
      "Name": "South Sudanese pound"
    },
    {
      "Code": "STN",
      "Symbol": "Db",
      "Name": "São Tomé and Príncipe d"
    },
    {
      "Code": "SYP",
      "Symbol": "ل.س",
      "Name": "Syrian pound"
    },
    {
      "Code": "SZL",
      "Symbol": "L",
      "Name": "Swazi lilangeni"
    },
    {
      "Code": "THB",
      "Symbol": "฿",
      "Name": "Thai baht"
    },
    {
      "Code": "TJS",
      "Symbol": "ЅМ",
      "Name": "Tajikistani somoni"
    },
    {
      "Code": "TMT",
      "Symbol": "m",
      "Name": "Turkmenistan manat"
    },
    {
      "Code": "TND",
      "Symbol": "د.ت",
      "Name": "Tunisian dinar"
    },
    {
      "Code": "TOP",
      "Symbol": "T$",
      "Name": "Tongan paʻanga"
    },
    {
      "Code": "TRY",
      "Symbol": "₺",
      "Name": "Turkish lira"
    },
    {
      "Code": "TTD",
      "Symbol": "$",
      "Name": "Trinidad and Tobago doll"
    },
    {
      "Code": "TWD",
      "Symbol": "NT$",
      "Name": "New Taiwan dollar"
    },
    {
      "Code": "TZS",
      "Symbol": "Sh",
      "Name": "Tanzanian shilling"
    },
    {
      "Code": "UAH",
      "Symbol": "₴",
      "Name": "Ukrainian hryvnia"
    },
    {
      "Code": "UGX",
      "Symbol": "UGX",
      "Name": "Ugandan shilling"
    },
    {
      "Code": "USD",
      "Symbol": "$",
      "Name": "United States (US) dolla"
    },
    {
      "Code": "UYU",
      "Symbol": "$",
      "Name": "Uruguayan peso"
    },
    {
      "Code": "UZS",
      "Symbol": "UZS",
      "Name": "Uzbekistani som"
    },
    {
      "Code": "VEF",
      "Symbol": "Bs F",
      "Name": "Venezuelan bolívar"
    },
    {
      "Code": "VES",
      "Symbol": "Bs.S",
      "Name": "Bolívar soberano"
    },
    {
      "Code": "VND",
      "Symbol": "₫",
      "Name": "Vietnamese đồng"
    },
    {
      "Code": "VUV",
      "Symbol": "Vt",
      "Name": "Vanuatu vatu"
    },
    {
      "Code": "WST",
      "Symbol": "T",
      "Name": "Samoan tālā"
    },
    {
      "Code": "XAF",
      "Symbol": "CFA",
      "Name": "Central African CFA fr"
    },
    {
      "Code": "XCD",
      "Symbol": "$",
      "Name": "East Caribbean dollar"
    },
    {
      "Code": "XOF",
      "Symbol": "CFA",
      "Name": "West African CFA franc"
    },
    {
      "Code": "XPF",
      "Symbol": "Fr",
      "Name": "CFP franc"
    },
    {
      "Code": "YER",
      "Symbol": "﷼",
      "Name": "Yemeni rial"
    },
    {
      "Code": "ZAR",
      "Symbol": "R",
      "Name": "South African rand"
    },
    {
      "Code": "ZMW",
      "Symbol": "ZK",
      "Name": "Zambian kwacha"
    }
  ]

const fields = ['Code', 'Symbol', 'Name'];

const json2csvParser = new json2csv({ fields });

const csv = json2csvParser.parse(jsonData);

console.log(csv);
