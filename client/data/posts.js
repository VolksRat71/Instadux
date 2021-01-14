const posts = [
  {
    "code": "BAcyDyQwcXX",
    "caption": "It's done! It's mostly just for recruiters and potential employers to look at, but if you are interested DM me for the source code 🙂",
    "likes": 56,
    "id": "1161022966406956503",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/137305860_430627548285833_8912994785780899590_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=I7AO9S42ET0AX-WicWL&tp=1&oh=ca64b42d78efe29d0ce14bb753fde20a&oe=6027B491`,
  },
  {
    "code": "-fasqlQceO",
    "caption": "My NPC Character is Chaotic Neutral accord to this chart. #Iagree",
    "likes": 46,
    "id": "1125735850454402958",
    "display_src": `https://media-exp1.licdn.com/dms/image/C4E22AQEo9b8oByIB8w/feedshare-shrink_1280-alternative/0/1610640800061?e=1613606400&v=beta&t=hEXxB1afHjzA2XZ94L5UM5G7M2P5bjwHhQNpXbaaPFA`,
  },
  {
    "code": "BAcJeJrQca9",
    "caption": "After hours of staring at the same font/theme, a new IDE UI can make all of the difference. 👌🏽",
    "likes": 59,
    "id": "1160844458347054781",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/131945027_2734339140152788_1948524640423056787_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=104&_nc_ohc=RaOYq8gvULMAX8Bfoma&tp=1&oh=c6c6d229ad26683fc271b5a74916d318&oe=6027CAD2`,
  },
  {
    "code": "BAF_KY4wcRY",
    "caption": "Doesn't look like it, but this little tune right here, took a lot of work. I am about 1/4 way done with the biggest independent project I have ever done 🤙🏽    #reactdeveloper #nextjs #graphql #apolloclient #prisma #not #supreme",
    "likes": 79,
    "id": "1154606670337393752",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/129761530_147426697162256_2548364939332892387_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_ohc=dirS8F2vnnkAX-cuo6L&tp=1&oh=142f53de24e047ca1544fd4e13d85065&oe=6029F1A4`,
  },
  {
    "code": "-FpTyHQcau",
    "caption": "Waiting for your answer Will.",
    "likes": 82,
    "id": "1118481761857291950",
    "display_src": `https://media-exp1.licdn.com/dms/image/C4E22AQEQ4S_ah3Wfgg/feedshare-shrink_2048_1536-alternative/0/1609049681260?e=1613606400&v=beta&t=wTWpYCgFMob7DaXPfIZ746OJJ7NdkTy6_RVINP9yFYg`,
  },
  {
    "code": "BAPIPRjQce9",
    "caption": "Now that is what I call Dev Fuel! ☕️",
    "likes": 47,
    "id": "1157179863266871229",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/128444312_1326320667768185_7484423698727760352_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=JM_DfO-LivkAX9nRTxA&tp=1&oh=87f588472084efd763a799a5753efbc4&oe=6029D3E2`,
  },
  {
    "code": "-hZh6IQcfN",
    "caption": "Home 🙂",
    "likes": 66,
    "id": "1126293663140399053",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/128252964_1000484017092946_3997686051573960511_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=110&_nc_ohc=K5OwJhkwh4QAX-Jy1CW&tp=1&oh=9aa9e377fcc08c074ea57d9420ace3d3&oe=60296FC9`,
  },
  {
    "code": "-B3eiIwcYV",
    "caption": "I was offered to teach another UCB class in January 🙏🏼🎓📃😁 #teachersofinstadux #fullstackdeveloper🇸",
    "likes": 33,
    "id": "1117418173361145365",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/125336191_390479498744189_7368197599783537971_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=PYiMN3erlzsAX8fLygp&tp=1&oh=097ec7c35ce3d00706951343d6ed00e4&oe=602AC911`,
  },
  {
    "code": "BAhvZrRwcfu",
    "caption": "This house is a mess, just getting ready to leave.",
    "likes": 30,
    "id": "1162418651480049646",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/124039609_363572964922507_5853396045150968205_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&_nc_ohc=jki1swJxRvoAX8kPEKz&tp=1&oh=0e57f7cb27894a8d2bf5572203cf71dc&oe=602833FB`,
  },
  {
    "code": "-VBgtGQcSf",
    "caption": "#BusinessMagnet",
    "likes": 27,
    "id": "1122810327591928991",
    "display_src": `https://media-exp1.licdn.com/dms/image/C4E22AQFpcA2iscTPEw/feedshare-shrink_800-alternative/0/1610249677384?e=1613606400&v=beta&t=tp4-BM1b-EcNheDnAbv3zVq-fyYOxEr2sNGWCZFGzvk`,
  },
  {
    "code": "BAAJqbOQcW5",
    "caption": "Can't call it stupid if it works 🍺",
    "likes": 40,
    "id": "1152964002473690553",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/123987333_781046565781595_5691421967681347652_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=111&_nc_ohc=h8VhcW7OlUQAX_OkT6a&tp=1&oh=1a7b495778887932135c1d059991ec79&oe=602AA9D6`,
  },
  {
    "code": "_4jHytwcUA",
    "caption": "RTV seems to work to patch walls 😂😂 I am a mechanic, not a carpenter. #carpentry #iwin",
    "likes": 62,
    "id": "1150824171912152320",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/123847351_215475753526132_1089273058524937180_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=104&_nc_ohc=UPALYX0Ir3AAX9JvFcF&tp=1&oh=1cdb2f7a7c15d06f3f58c0f9a351ef86&oe=60292FE7`,
  },
  {
    "code": "_zbaOlQcbn",
    "caption": "Kevin Kutcher, gonna prank you after this nap.",
    "likes": 52,
    "id": "1149382879529256679",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/123739421_678919359725491_3299334261299049375_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&_nc_ohc=DiXMegP-5sAAX-nGISJ&tp=1&oh=a333e7f1ce565a448db7adac40f45dc2&oe=602AE6BC`,
  },
  {
    "code": "-oTZ0zQcWt",
    "caption": "One of these things is not like the other 😂",
    "likes": 81,
    "id": "1128237044221461933",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/90723952_656784691753186_2267179188243651842_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=110&_nc_ohc=dRTnR5DNsAcAX9Bts94&tp=1&oh=c5b752a8f4409c9ca6b85601b71a7c54&oe=6027B49E`,
  },
  {
    "code": "_rmvQfQce8",
    "caption": "As of tonight I have finished teaching a University of California, Berkeley cohort. There was a lot that I have learned in the last year. Its funny, I think my students taught me more that I taught them. #teachersofinstdux #fullstackdeveloper #sadtoleave",
    "likes": 35,
    "id": "1147180903383025596",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/122853159_674395216551134_2752498133940322299_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Cqb7_L0gLP0AX_3UpRv&tp=1&oh=56d3747d9174af78ff3f8a0a24c45f40&oe=6029E4C3`,
  },
  {
    "code": "_ep9kiQcVy",
    "caption": "So it begins, the great move to Texas #austintexas #portlandoregon #moving",
    "likes": 64,
    "id": "1143535906423162226",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/122984615_1012850155887173_4459873402119174613_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=9q26TNCwYrIAX_-ieuT&tp=1&oh=c2926b7f114d4e827b4ce10eeedc9239&oe=602A5E44`,
  },
  {
    "code": "_XpJcrwcSn",
    "caption": "Comfort guy",
    "likes": 74,
    "id": "1141561999742846119",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/118454866_956749201459108_5110116946566842771_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=104&_nc_ohc=5kCmSm1fWK8AX9hDf6X&tp=1&oh=1e730624cd78ae156a0d2bfb8c2a2a22&oe=602886BC`,
  },
  {
    "code": "_KnU7MwceA",
    "caption": "I am going through coding bootcamp again, except, this time I am getting paid to teach it.",
    "likes": 54,
    "id": "1137894817632733056",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/97263237_114574353363583_184187454902569214_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&_nc_ohc=5BrpI9MPW3sAX-kcKEz&tp=1&oh=1dedbc2e3243d8d62b42a55f7c2e204d&oe=60278CD4`,
  },
  {
    "code": "_HMejJQcY5",
    "caption": "Can't wait to go back into public. #workingfromhome #teachersofinstadux #javascript",
    "likes": 18,
    "id": "1136932306813044281",
    "display_src": `https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/92106467_2518211491767115_1609987174658194392_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&_nc_ohc=LzIG0hUoxDUAX8vX8rO&tp=1&oh=c8f3b8ff0333c13343671440c7890a38&oe=60275D45`,
  },
  {
    "code": "_Fq2zmwcaz",
    "caption": "Definitely not freaking out.",
    "likes": 48,
    "id": "1136502965197194931",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/91503344_854675215043281_1628606082619709232_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=101&_nc_ohc=CEWO5spGavcAX8_L1wA&tp=1&oh=3e3a701352183e5ec537051e47f734b3&oe=602B30B5`,
  },
  {
    "code": "_A2r0aQcfD",
    "caption": "This is all I had left as good undershirt for work 😬 #queensofthestoneage #villians #bonefaceart",
    "likes": 57,
    "id": "1135147611821557699",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/91243991_237592857387745_3496923018584987762_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=101&_nc_ohc=aP6Qsj7ksUoAX88vpIB&tp=1&oh=77ce2cf48366d3ea79ccfadb829b3d37&oe=602B0504`,
  },
  {
    "code": "-1rhFawccs",
    "caption": "I love this family of Porsches so much ♥️ #frontengineporsche #924 #944 #968",
    "likes": 39,
    "id": "1132002270913873708",
    "display_src": `https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/90717617_208639810406907_4502174773658984445_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=103&_nc_ohc=jK3JsZrk0OUAX-xM6-S&tp=1&oh=60f9404a09aaa3509317022445fa357d&oe=602ABB89`,
  },
  {
    "code": "-pjx-gQcVi",
    "caption": "Very True 😂",
    "likes": 81,
    "id": "1128590547628442978",
    "display_src": `https://media-exp1.licdn.com/dms/image/C4E22AQFDIYN2CTo8DA/feedshare-shrink_800-alternative/0/1610415268863?e=1613606400&v=beta&t=AWP671tBTsTw5YzMrgBnr7KI3PkvjIAyLhquPpqKyXc`,
  },
  {
    "code": "-mxKQoQcQh",
    "caption": "#Accurate",
    "likes": 47,
    "id": "1127804966031967265",
    "display_src": `https://media-exp1.licdn.com/dms/image/C4D22AQGNBVMLDQPz0A/feedshare-shrink_800-alternative/0/1609153379349?e=1613606400&v=beta&t=MxvKFuaSP_UZbPcP2zKnHH-2-yIgeJgIoA05OUU0SQE`,
  },
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export default shuffle(posts);