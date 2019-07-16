const abbrMap ={
  'US Total Population':'US Pop',
  'Deaths Per Year':'DPY',
  'Estimated Firearm Owners in USA (based on 30% polls)':'Est Firearm Owners',
  'Firearms Includes Assault + Suicide Data':'Gun+As+Sui',
  'Motor Vehicle Deaths':'MVD',
  'Poison Deaths (All Intents)':'Poi',
  'Poison Deaths (Accidental)':'Poi(A)',
  'Falling Deaths ':'Fall',
  'Alcohol Induced Deaths':'Alch',
  'Drug Induced Deaths':'Drugs',
  'Assault (resulting in death)  Includes Firearm data':'Assault',
  'Intentional Self Harm (Suicide) Includes Firearm data':'Self Harm',
  'Malignant Neoplasms (MN) - Cancers':'MN-Cancers',
  'MN of Trachea, Bronchus, lung':'MN-Tra,Bro,Lung',
  'MN of lymphoid, hematopoietic':'MN-Lymph',
  'MN of Colon':'MN-Colon',
  'MN of Pancreas':'MN-Panc',
  'MN of Breast':'MN-Breast',
  'MN of Other':'MN-Other',
  'Major Cardiovascular Diseases (MC)':'MC',
  'MC of Heart':'MC-Heart',
  'Pneumonia':'Pneum',
  'Chronic Lower Resp':'Chron-Resp',
  'Chronic Liver Disease':'Chron-Liv',
  'Renial Failure (Kidney)':'RF(Kidn)',
  'Diabetes':'Diabetes',
  '\'Alzheimer\'\'s\'':'Alzheimer\'s',
}

const abbrMapOverview = {
  'US Total Population':'US Pop',
  'Deaths Per Year':'DPY',
  'Death Per Year % vs Population':'DPY v Pop',
  'Firearm Deaths Per Year':'Fr DPY',
  'Firearm Suicide':'Fr Suicide',
  'Firearm Suicide % Vs Firearm Deaths':'Fr.Suicide % Fr Deaths',
  'FirearmSuicide by Firearm Vs Yearly Deaths':'Fr.Suicide vs Yr Deaths',
  'Firearm Assault/Homicide':'Fr. Assault/Homicide',
  'Firearm Assault/Homicide % Vs Firearm Deaths':'Fr. Assault/Homicide% vs Fr Deaths',
  'Assault/Homicide by Firearm Vs Yearly Deaths':'Assault by Fr. vs Yr Deaths',
  'Firearm Other':'Firearm Other',
  'Other % Vs Firearm Deaths':'Other % Vs Fr Deaths',
  'Other Firearm Vs Yearly Deaths':'Other Fr Vs Yr Deaths',
  'Overall Firearm Death % vs population':'Overall Fr. Death % vs pop',
  'Overall Firearm Death % vs Yearly Deaths':'Overall Fr. Death % vs Yr Deaths',
  'Motor Vehicle Deaths':'MV Deaths',
  'Motor Vehicle % vs Population':'MV % vs Pop',
  'Motor Vehicle % vs Yearly Deaths':'MV % vs Yr Deaths',
  'Poison Deaths (All Intents)':'Poison Deaths (All Intents)',
  'Overall Poison Deaths % vs Population':'Overall Poison Deaths % vs Pop',
  'Overall Poison Deaths % vs Yearly Deaths':'Overall Poison Deaths % vs Yr Deaths',
  'Poison Deaths (Accidental)':'Poison Deaths (Accidental)',
  '% vs Poison Deaths':'% vs Poison Deaths',
  '% vs Yearly Deaths':'% vs Yr Deaths',
  'Falling Deaths':'Falling Deaths',
  'Falling Death % vs Population':'Falling Death % vs Pop',
  'Falling Death % vs Yearly Deaths':'Falling Death % vs Yr Deaths',
  'Alcohol Induced Deaths':'Alcohol Induced Deaths',
  'Alcohol Death % vs Population':'Alcohol Death % vs Pop',
  'Alcohol Death % vs Yearly Deaths':'Alcohol Death % vs Yr Deaths',
  'Drug Induced Deaths':'Drug Induced Deaths',
  'Drug Death % vs Population':'Drug Death % vs Pop',
  'Drug Death % vs Yearly Deaths':'Drug Death % vs Yr Deaths',
  'Assault (resulting in death) Includes Firearm data':'Assault, incl Fr data',
  'Assault Death % vs Population':'Assault Death % vs Pop',
  'Assault Death % vs Yearly Deaths':'Assault Death % vs Yr Deaths',
  'Intentional Self Harm (Suicide) Includes Firearm data':'Intent. Self Harm(Suicide) incl Fr Data',
  'Suicide % vs Population':'Suicide % vs Pop',
  'Suicide % vs Yearly Deaths':'Suicide % vs Yr Deaths',
  'Malignant Neoplasms (MN) - Cancers':'Malignant Neoplasms (MN) - Cancers',
  'MN of Trachea Bronchus lung':'MN of Trachea Bronchus lung',
  'MN of lymphoid hematopoietic':'MN of lymphoid hematopoietic',
  'MN of Colon':'MN of Colon',
  'MN of Pancreas':'MN of Pancreas',
  'MN of Breast':'MN of Breast',
  'MN of Other':'MN of Other',
  'Overall Cancer Death % vs Population':'Overall Cancer Death % vs Pop',
  '% of MN of Trachea Bronchus lung VS Pop':'% of MN of Trachea Bronchus lung VS Pop',
  '% of MN of lymphoid hematopoietic VS Pop':'% of MN of lymphoid hematopoietic VS Pop',
  '% MN of Colon VS Pop':'% MN of Colon VS Pop',
  '% MN of Pancreas VS Pop':'% MN of Pancreas VS Pop',
  '% MN of Breast VS Pop':'% MN of Breast VS Pop',
  '% of MN of Other VS Pop':'% of MN of Other VS Pop',
  'Overall Cancer Death % vs Yearly Deaths':'Overall Cancer Death % vs Yr Deaths',
  '% of MN of Trachea Bronchus lung Vs Yearly Deaths':'% of MN of Trachea Bronchus lung Vs Yr Deaths',
  '% of MN of lymphoid hematopoietic VS Yearly Deaths':'% of MN of lymphoid hematopoietic VS Yr Deaths',
  '% MN of Colon VS Yearly Deaths':'% MN of Colon VS Yr Deaths',
  '% MN of Pancreas VS Yearly Deaths':'% MN of Pancreas VS Yr Deaths',
  '% MN of Breast VS Yearly Deaths':'% MN of Breast VS Yr Deaths',
  '% of MN of Other VS Yearly Deaths':'% of MN of Other VS Yr Deaths',
  'Major Cardiovascular Diseases (MC)':'Major Cardiovascular Diseases (MC)',
  'MC of Heart':'MC of Heart',
  'Overall Cardiovascular Death % vs Population':'Overall Cardiovascular Death % vs Pop',
  '% of MC of Heart VS Pop':'% of MC of Heart VS Pop',
  'Overall Cardiovascular Death % vs Yearly Deaths':'Overall Cardiovascular Death % vs Yr Deaths',
  '% of MC of Heart VS Yearly Deaths':'% of MC of Heart VS Yearly Deaths',
  'Pneumonia':'Pneumonia',
  'Pneumonia Death % vs Population':'Pneumonia Death % vs Pop',
  'Pneumonia Death % vs Yearly Deaths':'Pneumonia Death % vs Yr Deaths',
  'Chronic Lower Resp':'Chronic Lower Resp',
  'Resp Death % vs Population':'Resp Death % vs Population',
  'Resp Death % vs Yearly Deaths':'Resp Death % vs Yr Deaths',
  'Chronic Liver Disease':'Chronic Liver Disease',
  'Liver Disease Death % vs Population':'Liver Disease Death % vs Pop',
  'Liver Disease Death % vs Yearly Deaths':'Liver Disease Death % vs Yearly Deaths',
  'Renial Failure (Kidney)':'Renial Failure (Kidney)',
  'Kidney Death % vs Population':'Kidney Death % vs Pop',
  'Kidney Death % vs Yearly Deaths':'Kidney Death % vs Yr Deaths',
  'Diabetes':'Diabetes',
  'Diabetes Death % vs Population':'Diabetes Death % vs Pop',
  'Diabetes Death % vs Yearly Deaths':'Diabetes Death % vs Yr Deaths',
  '\'Alzheimer\'\'s\'':'Alzheimer\'s',
  '\'Alzheimer\'\'s Death % vs Population\'':'',
  '\'Alzheimer\'\'s Death % vs Yearly Deaths\'':'\'Alzheimer\'\'s Death % vs Yearly Deaths\'',
}

const abbrMapRace = {
  'US Total Population':'US Total Pop',
  '*American Indian':'*Amer Indian',
  'American Indian % vs Population':'Amer Indian % vs Pop',
  '*Asian':'*Asian',
  'Asian % vs Population':'Asian % vs Pop',
  '*African American':'*African American',
  'African American % vs Population':'Afri Amer % vs Pop',
  '*White	':'*White	',
  'White % vs Population':'White % vs Pop',
  '*Hispanic/Latino':'*Hispanic/Latino',
  'Hispanic % vs Population':'Hispanic % vs Pop',
  '*Not Stated':'*Not Stated',
  'Not Stated % vs Population':'Not Stated % vs Pop',
  'American Indian Deaths % vs Total Deaths':'Amer Indian Deaths % vs Tot Deaths',
  'American Indian Deaths vs Race Population':'Amer Indian Deaths vs Race Pop',
  'Race Deaths vs Total Population':'Race Deaths vs Total Pop',
  'Asian Deaths % vs Total Deaths':'Asian Deaths % vs Total Deaths',
  'Asian Deaths vs Race Population':'Asian Deaths vs Race Pop',
  'Race Deaths vs Total Population':'Race Deaths vs Total Pop',
  'African American Deaths % vs Total Deaths':'Afri Amer Deaths % vs Total Deaths',
  'African American Deaths vs Race Population':'Afri Amer Deaths vs Race Pop',
  'Race Deaths vs Total Population':'Race Deaths vs Total Pop',
  'White Deaths % vs Total Deaths':'White Deaths % vs Total Deaths',
  'White Deaths vs Race Population':'White Deaths vs Race Pop',
  'Race Deaths vs Total Population':'Race Deaths vs Total Pop',
  'Hispanic Deaths % vs Total Deaths':'Hispanic Deaths % vs Total Deaths',
  'Hispanic Deaths vs Race Population':'Hispanic Deaths vs Race Pop',
  'Not Stated Deaths vs Total Population':'Not Stated Deaths vs Total Pop',
  'Firearm Deaths Per Year':'Firearm Deaths Per Year',
  'American Indian % vs Firearm Deaths':'American Indian % vs Firearm Deaths',
  'Asian % vs Firearm Deaths':'Asian % vs Firearm Deaths',
  'African American % vs Firearm Deaths':'Afri Amer % vs Firearm Deaths',
  'White % vs Firearm Deaths':'White % vs Firearm Deaths',
  'Hispanic % vs Firearm Deaths':'Hispanic % vs Firearm Deaths',
  'Not Stated % vs Firearm Deaths':'Not Stated % vs Firearm Deaths',
  'Firearm Suicide':'Firearm Suicide',
  'American Indian % vs Firearm Suicide Deaths':'Amer Indian % vs Firearm Suicide Deaths',
  'Asian % vs Firearm Suicide Deaths':'Asian % vs Firearm Suicide Deaths',
  'African American % vs Firearm Suicide Deaths':'Afri Amer % vs Firearm Suicide Deaths',
  'White % vs Firearm Suicide Deaths':'White % vs Firearm Suicide Deaths',
  'Hispanic % vs Firearm Suicide Deaths':'Hispanic % vs Firearm Suicide Deaths',
  'Firearm Assault/Homicide':'Firearm Assault/Homicide',
  'American Indian % vs Firearm Assault/Homicide Deaths':'Amer Indian % vs Firearm Assault/Homicide Deaths',
  'Asian % vs Firearm Assault/Homicide Deaths':'Asian % vs Firearm Assault/Homicide Deaths',
  'Afrian American % vs Firearm Assault/Homicide Deaths':'Afri Amer % vs Firearm Assault/Homicide Deaths',
  'White % vs Firearm Assault/Homicide Deaths':'White % vs Firearm Assault/Homicide Deaths',
  'Hispanic % vs Firearm Assault/Homicide Deaths':'Hispanic % vs Firearm Assault/Homicide Deaths',
  'Firearm Other':'Firearm Other',
  'American Indian % vs Firearm Other Deaths':'American Indian % vs Firearm Other Deaths',
  'Asian % vs Firearm Other Deaths':'Asian % vs Firearm Other Deaths',
  'African American % vs Firearm Other Deaths':'Afri Amer % vs Firearm Other Deaths',
  'White % vs Firearm Other Deaths':'White % vs Firearm Other Deaths',
  'Hispanic % vs Firearm Other Deaths':'Hispanic % vs Firearm Other Deaths',
  'Motor Vehicle Deaths':'Motor Vehicle Deaths',
  'American Indian % vs Motor Vehicle Deaths':'Amer Indian % vs Motor Vehicle Deaths',
  'Asian % vs Motor Vehicle Deaths':'Asian % vs Motor Vehicle Deaths',
  'African American % vs Motor Vehicle Deaths':'Afri Amer % vs Motor Vehicle Deaths',
  'White % vs Motor Vehicle Deaths':'White % vs Motor Vehicle Deaths',
  'Hispanic % vs Motor Vehicle Deaths':'Hispanic % vs Motor Vehicle Deaths',
  'Not Stated % vs Firearm Deaths':'Not Stated % vs Firearm Deaths',
  'Poison Deaths (All Intents)':'Poison Deaths (All Intents)',
  'American Indian % vs Poison (all) Deaths':'Amer Indian % vs Poison (all) Deaths',
  'Asian % vs Poison (all) Deaths':'Asian % vs Poison (all) Deaths',
  'African American % vs Poison (all) Deaths':'Afri Amer % vs Poison (all) Deaths',
  'White % vs Poison (all) Deaths':'White % vs Poison (all) Deaths',
  'Hispanic % vs Poison (all) Deaths':'Hispanic % vs Poison (all) Deaths',
  'Not Stated % vs Poison (all) Deaths':'Not Stated % vs Poison (all) Deaths',
  'Poison Deaths (Accidental)':'Poison Deaths (Accidental)',
  'American Indian % vs Poison (accident) Deaths':'Amer Indian % vs Poison (accident) Deaths',
  'Asian % vs Poison (accident) Deaths':'Asian % vs Poison (accident) Deaths',
  'African American % vs Poison (accident) Deaths':'Afri Amer % vs Poison (accident) Deaths',
  'White % vs Poison (accident) Deaths':'White % vs Poison (accident) Deaths',
  'Hispanic % vs Poison (accident) Deaths':'Hispanic % vs Poison (accident) Deaths',
  'American Indian % vs Falling Deaths':'American Indian % vs Falling Deaths',
  'Asian % vs Falling Deaths':'Asian % vs Falling Deaths',
  'African American % vs Falling Deaths':'Afri Amer % vs Falling Deaths',
  'White % vs Falling Deaths':'White % vs Falling Deaths',
  'Hispanic % vs Falling Deaths':'Hispanic % vs Falling Deaths',
  'Not Stated % vs Falling Deaths':'Not Stated % vs Falling Deaths',
  'Alcohol Induced Deaths':'Alcohol Induced Deaths',
  'American Indian % vs Alcohol Deaths':'Amer Indian % vs Alcohol Deaths',
  'Asian % vs Alcohol Deaths':'Asian % vs Alcohol Deaths',
  'African American % vs Alcohol Deaths':'Afri Amer % vs Alcohol Deaths',
  'White % vs Alcohol Deaths':'White % vs Alcohol Deaths',
  'Hispanic % vs Alcohol Deaths':'Hispanic % vs Alcohol Deaths',
  'Not Stated % vs Alcohol Deaths':'Not Stated % vs Alcohol Deaths',
  'Drug Induced Deaths':'Drug Induced Deaths',
  'American Indian % vs Drug Induced Deaths':'American Indian % vs Drug Induced Deaths',
  'Asian % vs Drug Induced Deaths':'Asian % vs Drug Induced Deaths',
  'African American % vs Drug Induced Deaths':'Afri Amer % vs Drug Induced Deaths',
  'White % vs Drug Induced Deaths':'White % vs Drug Induced Deaths',
  'Hispanic % vs Drug Induced Deaths':'Hispanic % vs Drug Induced Deaths',
  'Not Stated % vs Drug Induced Deaths':'Not Stated % vs Drug Induced Deaths',
  '\'Assault (resulting in death) Includes Firearm data\'':'\'Assault (resulting in death) Includes Firearm data\'',
  'American Indian % vs Assault Deaths':'American Indian % vs Assault Deaths',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
  '':'',
}

const aggregatedMap = Object.assign({}, abbrMap, abbrMapOverview)

module.exports = aggregatedMap 