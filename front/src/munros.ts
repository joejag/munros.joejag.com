export const WEBCAMS: {
  [group: string]: { url: string; description: string }
} = {
  'Crianlarich group': {
    url: 'https://www.benmorewebcam.co.uk/',
    description:
      "Comes from the Ochil's Mountaineering Hut, next to the Ben More Lodge.",
  },
  'Glen Lochay': {
    url: 'https://www.see.cam/gb/sct/tyndrum/inverardran-north-ben-challum',
    description: 'Tyndrum North to Ben Challum',
  },
  Lawers: {
    url: 'http://webcam.firbush.org/webcam.jpg',
    description:
      "Comes from Edinburgh University's 'Firbush' outdoor facility, at east of Loch Tay.",
  },
  'Black Mount': {
    url: 'https://www.glencoemountain.co.uk/wp-content/themes/glencoe/images/access2200.jpeg',
    description:
      "Glencoe 2200: View up Meall a'Bhuiridh. Comes from Glencoe Mountain",
  },
  Glencoe: {
    url: 'https://www.glencoemountain.co.uk/wp-content/themes/glencoe/images/base1200.jpeg',
    description:
      'Etive Mor webcam: Looking to Etive Mor from the car-park. From Glencoe Mountain.',
  },
  'Ben Nevis & Aonachs': {
    url: 'https://www.nevisrange.co.uk/webcams/',
    description:
      'Nevis Range: Various webcams on the Aonach Mor ski range, from the Nevis Range',
  },
  'Around Loch Muick': {
    url: 'https://www.deesideglidingclub.co.uk/web-cams/',
    description:
      'Morven webcam: From near Aboyne on the Dee, webcam hosted by Deeside Gliding Club.',
  },
  Glenshee: {
    url: 'https://www.ski-glenshee.co.uk/Webcam',
    description:
      'Glenshee: The Glenshee ski area webcam, looking up the Cairnwell and Carn Aosda, from Glenshee Ski and Snowboard.',
  },
  'West of Lairig Ghru': {
    url: 'https://www.visitcairngorms.com/plan-your-visit/maps-webcams/',
    description:
      'Lairig Ghru webcam: Lairig Ghru from the north-west. Comes from Visit Cairngorms',
  },
  'East of Lairig Ghru': {
    url: 'https://www.cairngormmountain.co.uk/wp-content/uploads/webcams/morlich-full.jpg',
    description:
      'Loch Morlich webcam: Looking from Cairngorm Mountain down to Loch Morlich.',
  },
  'Monadh Liath': {
    url: 'https://ngc.myzen.co.uk/webcam/image.jpg',
    description:
      'Newtonmore webcam: From Newtonmore Golf Club, looking towards Creag Dubh.',
  },
  'West of Loch Lochy': {
    url: 'http://www.trinum.com/ibox/ski-scotland/images/the-lecht/the-lecht1.jpg',
    description:
      'The Lecht: Looking west up Carn Mhic an Toisich. From Lecht 2900',
  },
  'Inverlael and Strath Vaich': {
    url: 'http://www.easter-badbea.co.uk/webcam.html',
    description:
      'Dundonnell webcam: Below Sail Mhor, overlooking Little Loch Broom. Via Easter Badbea Guest House.',
  },
  Mull: {
    url: 'http://mullwildlifebreaks.co.uk/craignure-ferry-terminal-webcam/',
    description: 'Live webcam Mull Wildlife Breaks at Craignure',
  },
}

export const MUNRO_GROUPING: {
  area: string
  groups: string[]
}[] = [
  {
    area: 'Loch Lomond to Loch Tay',
    groups: [
      'Ben Lomond and Arrochar Alps',
      'Ben Lui group',
      'Crianlarich group',
      'Crieff and Loch Earn',
    ],
  },
  {
    area: 'Loch Tay to Rannoch Moor',
    groups: ['Glen Lochay', 'Above Orchy', 'Lawers', 'Glen Lyon'],
  },
  {
    area: 'Strath Orchy to Glencoe',
    groups: [
      'Cruachan',
      'East of Etive',
      'Black Mount',
      'Appin and West of Etive',
      'Glencoe',
    ],
  },
  {
    area: 'Loch Linnhe to Loch Ericht',
    groups: [
      'Mamores',
      'Ben Nevis & Aonachs',
      'Grey Corries',
      'Loch Treig & Ossian',
      'Ardverikie & Alder',
    ],
  },
  {
    area: 'Drumochter Hills',
    groups: ['West of Drumochter', 'East of Drumochter'],
  },
  {
    area: 'Glen Garry to Braemar',
    groups: ['Tarf & Tilt', "Beinn a' Ghlo", 'Above Glen Ey', 'Above Geldie'],
  },
  {
    area: 'Glenshee to Mount Keen',
    groups: ['Glenshee', 'Glen Doll Munros', 'Around Loch Muick'],
  },
  {
    area: 'Cairngorms and Glen Feshie',
    groups: [
      'East of Lairig an Laoigh',
      'East of Lairig Ghru',
      'West of Lairig Ghru',
      'Glen Feshie',
    ],
  },
  {
    area: 'Monadh Liath and Creag Meagaidh',
    groups: ['Monadh Liath', 'Creag Meagaidh & neighbours'],
  },
  {
    area: 'Loch Eil to Glen Shiel',
    groups: [
      'West of Loch Lochy',
      'Glenfinnan',
      'Glen Kingie',
      'Loch Chuaich (Quoich)',
      'Knoydart',
    ],
  },
  {
    area: 'Kintail and Glen Shiel',
    groups: [
      'Above Loch Hourn',
      'South Glen Shiel Ridge',
      'Above Loch Cluanie',
      'Kintail',
    ],
  },
  {
    area: 'Affric, Cannich and Strathfarrar',
    groups: ['Mullardoch circuit', 'Strathfarrar'],
  },
  {
    area: 'Glen Carron and Torridon',
    groups: ['Monar', 'Coulin', 'Beinn Alligin', 'Liathach', 'Beinn Eighe'],
  },
  {
    area: 'Loch Maree to the Fannichs',
    groups: ['Letterewe and Fisherfield', 'An Teallach', 'Fannaichs'],
  },
  {
    area: 'Far North',
    groups: [
      'Ben Wyvis',
      'Inverlael and Strath Vaich',
      'Assynt',
      'Strath Vagastie',
      'Strath More',
    ],
  },
  {
    area: 'The Islands',
    groups: ['Mull', 'Skye, Strathaird', 'Cuillin of Skye'],
  },
]

export const MUNROS = [
  {
    url: 'https://www.walkhighlands.co.uk/angus/mayar-driesh.shtml',
    weatherUrl: 'https://www.mountain-forecast.com/peaks/Driesh/forecasts/947',
    title: 'Mayar and Driesh, Glen Clova',
    desc: 'A stunning ascent through picturesque Corrie Fee leads up to the extensive rolling plateau above - visiting the summits of Mayar and Driesh. With the descent on the excellent Kilbo path back to Glendoll forest at the head of Glen Clova, in summer conditions this makes a straightforward round for two Munros.',
    image: 'angus_mayar_and_driesh__glen_clova.jpg',
    rating: 3.69,
    distance: 14.5,
    ascent: 835,
    grade: 3,
    time: {
      naismith: 5,
      walkHighlands: '4.5 - 5.5 hours',
    },
    munros: [
      {
        name: 'Driesh',
        uri: '/munros/driesh',
      },
      {
        name: 'Mayar',
        uri: '/munros/mayar',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Angus',
        group: 'Angus Glens, Forfar and Kirriemuir',
      },
      steveFallon: {
        area: 'Glenshee to Mount Keen',
        group: 'Glen Doll Munros',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/angus/mount-keen.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Mount-Keen/forecasts/939',
    title: 'Mount Keen from Glen Esk',
    desc: 'Mount Keen is the most easterly of the Munros, taking the form of a dome rising above vast swathes of empty, bleak moorland, with extensive views on a good day. The ascent from Glen Esk via Glen Mark is the shortest route and gives good going underfoot.',
    image: 'angus_mount_keen_from_glen_esk.jpg',
    rating: 3.31,
    distance: 17.5,
    ascent: 810,
    grade: 3,
    time: {
      naismith: 5.75,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Mount Keen',
        uri: '/munros/mount-keen',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Angus',
        group: 'Angus Glens, Forfar and Kirriemuir',
      },
      steveFallon: {
        area: 'Glenshee to Mount Keen',
        group: 'Around Loch Muick',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/beinn-achaladair.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Achaladair/forecasts/1038',
    title: "Beinn Achaladair and Beinn a'Chreachain",
    desc: "This pair of Munros forms the northerly half of the Beinn Dòrain range and gives a grand ridgewalk. Beinn a'Chreachain, the highest Munro in the range, has a fine northern corrie, whilst Beinn Achaladair is a very shapely peak with much character. The views - especially looking out over the vast soggy table-land of Rannoch Moor - are magnificent.",
    image: 'argyll_beinn_achaladair_and_beinn_a_chreachain.jpg',
    rating: 3.48,
    distance: 21.5,
    ascent: 1266,
    grade: 4,
    time: {
      naismith: 7.5,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: "Beinn a'Chreachain",
        uri: '/munros/beinn-a-chreachain',
      },
      {
        name: 'Beinn Achaladair',
        uri: '/munros/beinn-achaladair',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Above Orchy',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/beinn-bhuidhe.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Bhuidhe-Glen-Fyne/forecasts/948',
    title: 'Beinn Bhuidhe, via Glen Fyne',
    desc: 'Beinn Bhuidhe is a Munro isolated from any others, and the long walk in means it is much less visited than the nearby Arrochar Alps, despite it having rough and rocky slopes in places. The approach described here is the traditional one following a private road up the glen (can be cycled) and then a rugged ascent; it is possible instead to make use of an ugly new hydro track from near where the route crosses the river until around 550m, where the track crosses the route described.',
    image: 'argyll_beinn_bhuidhe__via_glen_fyne.jpg',
    rating: 2.95,
    distance: 21.5,
    ascent: 955,
    grade: 4,
    time: {
      naismith: 7,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Beinn Bhuidhe',
        uri: '/munros/beinn-bhuidhe',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Inveraray, Loch Awe, Lochgilphead and Knapdale',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Ben Lomond and Arrochar Alps',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/beinn-dorain.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Dorain/forecasts/1076',
    title: 'Beinn Dòrain and Beinn an Dòthaidh, Bridge of Orchy',
    desc: 'Beinn Dòrain is one of the most instantly recognisable Munros in the southern Highlands, a huge conical peak that dominates the A82 when driving north from Tyndrum. Its ascent can easily be combined with neighbouring Beinn an Dòthaidh which has a fine outlook over Rannoch Moor.',
    image: 'argyll_beinn_d_rain_and_beinn_an_d_thaidh__bridge_of_orchy.jpg',
    rating: 3.81,
    distance: 14,
    ascent: 1228,
    grade: 4,
    time: {
      naismith: 5.5,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Beinn Dòrain',
        uri: '/munros/beinn-dorain',
      },
      {
        name: 'Beinn an Dòthaidh',
        uri: '/munros/beinn-an-dothaidh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Above Orchy',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/beinn-eunaich.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfh3js6wp',
    title: "Beinn a'Chochuill and Beinn Eunaich",
    desc: 'These two Munros offer a good mountain day, with great views of Glen Etive and Ben Cruachan. The ridge between the two is pleasant with no difficulties although the final descent from Beinn Eunaich is unpleasantly steep.',
    image: 'argyll_beinn_a_chochuill_and_beinn_eunaich.jpg',
    rating: 3.13,
    distance: 13.5,
    ascent: 1221,
    grade: 4,
    time: {
      naismith: 5.5,
      walkHighlands: '5.5 - 6.5 hours',
    },
    munros: [
      {
        name: "Beinn a' Chochuill",
        uri: '/munros/beinn-a-chochuill',
      },
      {
        name: 'Beinn Eunaich',
        uri: '/munros/beinn-eunaich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Cruachan',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/beinn-fhionnlaidh.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfh3gxtve',
    title: 'Beinn Fhionnlaidh',
    desc: 'Beinn Fhionnlaidh is a straightforward Munro forming a long west-east ridge from Glen Creran. It is a  good viewpoint with views out to sea to the west and inland giving an unfamiliar aspect of Glencoe and Glen Etive.',
    image: 'argyll_beinn_fhionnlaidh.jpg',
    rating: 3.23,
    distance: 14.5,
    ascent: 980,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Beinn Fhionnlaidh',
        uri: '/munros/beinn-fhionnlaidh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Oban, Appin, Kerrera and Seil',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Appin and West of Etive',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/beinn-mhanach.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Mhanach/forecasts/953',
    title: 'Beinn Mhanach',
    desc: 'Beinn Mhanach is a dome-shaped and unspectacular Munro. One of the remoter peaks of the Southern Highlands, it does have a feeling of seclusion and the approach up the glen from Auch is very enjoyable.',
    image: 'argyll_beinn_mhanach.jpg',
    rating: 3.33,
    distance: 23.5,
    ascent: 920,
    grade: 4,
    time: {
      naismith: 7.5,
      walkHighlands: '6.5 - 7.5 hours',
    },
    munros: [
      {
        name: 'Beinn Mhanach',
        uri: '/munros/beinn-mhanach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Above Orchy',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/beinn-sgulaird.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Sgulaird/forecasts/937',
    title: 'Beinn Sgulaird',
    desc: 'Beinn Sgulaird is a solitary Munro, rising steeply above upper Loch Creran. The upper slopes are rocky but the summit is best known as a fantastic viewpoint. On a clear day the 360 degree panorama of mountains, lochs, sea and islands is one of the finest in Scotland.',
    image: 'argyll_beinn_sgulaird.jpg',
    rating: 3.76,
    distance: 13,
    ascent: 1240,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Beinn Sgulaird',
        uri: '/munros/beinn-sgulaird',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Oban, Appin, Kerrera and Seil',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Appin and West of Etive',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/ben-challum.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Challuim/forecasts/1025',
    title: 'Ben Challum, near Tyndrum',
    desc: 'Ben Challum is not a distinguished peak when seen from the A82, as to this side it shows only sprawling grassy slopes. From the Glen Lochay side its fine peak is more prominent. The ascent is usually made from Kirkton Farm, with boggy lower slopes but a fine final ridge connecting the two summits.',
    image: 'argyll_ben_challum__near_tyndrum.jpg',
    rating: 2.76,
    distance: 11.5,
    ascent: 910,
    grade: 3,
    time: {
      naismith: 4.5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Ben Challum',
        uri: '/munros/ben-challum',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lochay',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/ben-cruachan.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Cruachan/forecasts/1126',
    title: 'Ben Cruachan and Stob Daimh',
    desc: 'Ben Cruachan is one of the finest Munros in the southern Highlands, with jagged peaks and fine rocky ridges as well as stunning views. The ridge walk to Stob Dàimh (misspelt Diamh on some OS maps) makes for a classic circuit around the Cruachan reservoir.',
    image: 'argyll_ben_cruachan_and_stob_daimh.jpg',
    rating: 3.92,
    distance: 13.75,
    ascent: 1376,
    grade: 4,
    time: {
      naismith: 5.75,
      walkHighlands: '8 - 9 hours',
    },
    munros: [
      {
        name: 'Ben Cruachan',
        uri: '/munros/ben-cruachan',
      },
      {
        name: 'Stob Daimh',
        uri: '/munros/stob-diamh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Cruachan',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/ben-lui.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Lui/forecasts/1130',
    title: "Ben Lui and Beinn a'Chlèibh",
    desc: "Ben Lui is regarded as one of the grandest and most elegant mountains in the Southern Highlands, with a magnificent appearance when seen up the Cononish Glen from Dalrigh. The shortest route to it is from Glen Lochy, enabling easy inclusion of its less impressive neighbour Beinn a'Chlèibh.",
    image: 'argyll_ben_lui_and_beinn_a_chl_ibh.jpg',
    rating: 3.63,
    distance: 10,
    ascent: 1078,
    grade: 4,
    time: {
      naismith: 4.25,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Ben Lui',
        uri: '/munros/ben-lui',
      },
      {
        name: "Beinn a' Chlèibh",
        uri: '/munros/beinn-a-chleibh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Ben Lui group',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/ben-oss.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Oss/forecasts/1029',
    title: 'Ben Oss and Beinn Dubhchraig, near Tyndrum',
    desc: 'Ben Oss and Beinn Dubhcraig are satellites of mighty Ben Lui. Although the mountains themselves are not particularly distinguished, the approach walk leads through natural pine and birch forest and is very picturesque, though also very wet. Beinn Dubhcraig offers a fine view down Loch Lomond, whilst the Ben Lui looks simply magnificent from Ben Oss.',
    image: 'argyll_ben_oss_and_beinn_dubhchraig__near_tyndrum.jpg',
    rating: 3.73,
    distance: 17,
    ascent: 1230,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Beinn Dubhchraig',
        uri: '/munros/beinn-dubhchraig',
      },
      {
        name: 'Ben Oss',
        uri: '/munros/ben-oss',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Ben Lui group',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/argyll/stob-ghabhar.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Stob-Ghabhar/forecasts/1090',
    title: "Stob Ghabhar and Stob a'Choire Odhair",
    desc: "Stob Ghabhar is the finest of the Black Mount summits, its narrow rocky ridges and steep sides standing out amongst the hills of the southern Highlands. Stob a'Choire Odhair is an easier ascent with a magnificent view over Rannoch Moor. Combining both peaks, this route is a fine expedition for experienced hillwalkers.",
    image: 'argyll_stob_ghabhar_and_stob_a_choire_odhair.jpg',
    rating: 4.08,
    distance: 16,
    ascent: 1239,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '8 - 9 hours',
    },
    munros: [
      {
        name: "Stob a' Choire Odhair",
        uri: '/munros/stob-a-choire-odhair',
      },
      {
        name: 'Stob Ghabhar',
        uri: '/munros/stob-ghabhar',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Argyll',
        group: 'Tyndrum, Dalmally and Bridge of Orchy',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Black Mount',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/a-mharconaich.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/A-Mharconaich/forecasts/975',
    title: "A' Mharconaich and Geal Chàrn, Drumochter",
    desc: "These are the northerly two summits of the four Munros on the west side of the Drumochter Pass. Geal Chàrn is a featureless lump with superb views towards Ben Alder, whilst A' Mharconaich is the shapliest of the range, with a steep prow prominent from the A9.",
    image: 'cairngorms_a__mharconaich_and_geal_ch_rn__drumochter.jpg',
    rating: 3,
    distance: 11.5,
    ascent: 731,
    grade: 4,
    time: {
      naismith: 4,
      walkHighlands: '4 - 6 hours',
    },
    munros: [
      {
        name: 'Geal Chàrn',
        uri: '/munros/geal-charn-drumochter',
      },
      {
        name: "A' Mharconaich",
        uri: '/munros/a-mharconaich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Drumochter Hills',
        group: 'West of Drumochter',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/an-sgarsoch.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfj7fstgx',
    title: 'An Sgarsoch and Càrn an Fhidhleir',
    desc: 'These two rounded, featureless hills are given distinction by their remoteness. In the heart of the wild country between the main Cairngorms and the Atholl ranges, few Munros can match these peaks for the feeling of solitude or open space. The day could be shortened by the use of a mountain bike on the approach.',
    image: 'cairngorms_an_sgarsoch_and_c_rn_an_fhidhleir.jpg',
    rating: 3,
    distance: 42,
    ascent: 1059,
    grade: 4,
    time: {
      naismith: 12.25,
      walkHighlands: '11 - 12 hours',
    },
    munros: [
      {
        name: 'An Sgarsoch',
        uri: '/munros/an-sgarsoch',
      },
      {
        name: 'Càrn an Fhidhleir (Càrn Ealar)',
        uri: '/munros/carn-an-fhidhleir-carn-ealar',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Glen Garry to Braemar',
        group: 'Above Geldie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/an-socach.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/An-Socach-Glen-Ey/forecasts/944',
    title: 'An Socach from Glen Clunie',
    desc: 'An Socach is one of the lesser Munros of the area, a rounded whaleback hill which can either be climbed quickly by this short route from Baddoch Farm, or via an alternative approach from Inverey and Glen Ey.',
    image: 'cairngorms_an_socach_from_glen_clunie.jpg',
    rating: 3.08,
    distance: 15.75,
    ascent: 655,
    grade: 3,
    time: {
      naismith: 5,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'An Socach',
        uri: '/munros/an-socach-braemar',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Glen Garry to Braemar',
        group: 'Above Glen Ey',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/aonach-beag.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Geal-Charn/forecasts/1132',
    title: 'Aonach Beag: Four Munros from Culra',
    desc: 'The high ridge running from Beinn Èibhinn over Aonach Beag to Geal Chàrn, and its eastern extension to Càrn Dearg, is one of the remotest mountain groups in Scotland. It can be approached from Luiblea in the north, or the western summits can be climbed from Corrour Station. The route described here is from Culra bothy which is closed but you can camp nearby; the setting is beautiful and accessed via a long walk-in from Dalwhinnie.',
    image: 'cairngorms_aonach_beag__four_munros_from_culra.jpg',
    rating: 4.08,
    distance: 18.5,
    ascent: 1110,
    grade: 4,
    time: {
      naismith: 6.5,
      walkHighlands: '8 - 9 hours',
    },
    munros: [
      {
        name: 'Cairn Dearg',
        uri: '/munros/carn-dearg-loch-pattack',
      },
      {
        name: 'Geal Chàrn',
        uri: '/munros/geal-charn-alder',
      },
      {
        name: 'Aonach Beag',
        uri: '/munros/aonach-beag-alder',
      },
      {
        name: 'Beinn Èibhinn',
        uri: '/munros/beinn-eibhinn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Ardverikie & Alder',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/beinn-a-bhuird.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-a-Bhuird/forecasts/1196',
    title: "Beinn a' Bhùird",
    desc: "Beinn a'Bhùird is the eleventh highest mountain in Britain, a vast high plateau in the eastern Cairngorms. The shortest approach is up Glen Quoich and follows a the former line of a bulldozed track - now restored by the NTS - high onto the mountain. Even this route is a long walk.",
    image: 'cairngorms_beinn_a__bh_ird.jpg',
    rating: 3.38,
    distance: 28,
    ascent: 959,
    grade: 4,
    time: {
      naismith: 8.5,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: "Beinn a' Bhùird",
        uri: '/munros/beinn-a-bhuird',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig an Laoigh',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/beinn-a-chaorainn.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Bhreac/forecasts/931',
    title: "Beinn a'Chaorainn and Beinn Bhreac",
    desc: "This pair of Munros lies between the Beinn a'Bhùird and Ben Avon massifs and the main mass of the High Cairngorms. Often overlooked, they are separated by the sprawling Moine Bhealaidh, a featureless plateau, but the pinewoods of Glen Derry provides a fine approach and the views are good.",
    image: 'cairngorms_beinn_a_chaorainn_and_beinn_bhreac.jpg',
    rating: 2.89,
    distance: 29,
    ascent: 878,
    grade: 4,
    time: {
      naismith: 8.75,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Beinn Bhreac',
        uri: '/munros/beinn-bhreac',
      },
      {
        name: "Beinn a' Chaorainn",
        uri: '/munros/beinn-a-chaorainn-cairngorms',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig an Laoigh',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/beinn-bhrotain.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Bhrotain/forecasts/1157',
    title: 'Beinn Bhrotain and Monadh Mòr , from Glen Feshie',
    desc: 'The bulky mountains of Beinn Bhrotain and Monadh Mòr are well out of sight and probably out of mind from Glen Feshie. In good weather, however, they can be climbed via a long high-level traverse over the Moine Mhòr plateau.',
    image: 'cairngorms_beinn_bhrotain_and_monadh_m_r___from_glen_feshie.jpg',
    rating: 3.43,
    distance: 29,
    ascent: 1505,
    grade: 4,
    time: {
      naismith: 9.75,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Monadh Mòr',
        uri: '/munros/monadh-mor',
      },
      {
        name: 'Beinn Bhrotain',
        uri: '/munros/beinn-bhrotain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'West of Lairig Ghru',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/beinn-iutharn-mhor.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfj7z58nc',
    title: 'Beinn Iutharn Mhòr and Càrn Bhac, Inverey',
    desc: 'The long approach up Glen Ey deters many from the round of these two remote Munros. On a busy weekend they give a quieter escape from the busier hills of the area.',
    image: 'cairngorms_beinn_iutharn_mh_r_and_c_rn_bhac__inverey.jpg',
    rating: 2.72,
    distance: 32,
    ascent: 983,
    grade: 4,
    time: {
      naismith: 9.75,
      walkHighlands: '9 - 10 hours',
    },
    munros: [
      {
        name: 'Càrn Bhac',
        uri: '/munros/carn-bhac',
      },
      {
        name: 'Beinn Iutharn Mhor',
        uri: '/munros/beinn-iutharn-mhor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Glen Garry to Braemar',
        group: 'Above Glen Ey',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/beinn-mheadhoin.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Mheadhoin/forecasts/1182',
    title: 'Beinn Mheadhoin via the Shelter Stone',
    desc: "Beinn  Mheadhoin is one of the Cairngorm's remoter peaks. This trip involves much ascent and descent just to reach the start of the climb; it passes through the magnificent Loch Avon basin.",
    image: 'cairngorms_beinn_mheadhoin_via_the_shelter_stone.jpg',
    rating: 3.54,
    distance: 19,
    ascent: 1560,
    grade: 4,
    time: {
      naismith: 7.25,
      walkHighlands: '8 - 9 hours',
    },
    munros: [
      {
        name: 'Beinn Mheadhoin',
        uri: '/munros/beinn-mheadhoin',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Aviemore, Rothiemurchus and the Northern Cairngorms',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig Ghru',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/beinn-udlamain.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Udlamain/forecasts/1011',
    title: 'Beinn Udlamain and Sgàirneach Mhòr',
    desc: 'This southern pair of the four Munros on the west side of the Drumochter Pass are heathery hills rather than true mountains; the views, however, are good on a clear day.',
    image: 'cairngorms_beinn_udlamain_and_sg_irneach_mh_r.jpg',
    rating: 2.73,
    distance: 15.75,
    ascent: 783,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Sgàirneach Mhòr',
        uri: '/munros/sgairneach-mhor',
      },
      {
        name: 'Beinn Udlamain',
        uri: '/munros/beinn-udlamain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Drumochter Hills',
        group: 'West of Drumochter',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/ben-alder.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Alder/forecasts/1148',
    title: 'Ben Alder and Beinn Bheòil from Culra',
    desc: 'Ben Alder is one of the great remote mountains of Scotland, set in the very heart of the Central Highlands. Approaches are long from any direction; Corrour Station gives the nearest access from the west, whilst it is possible to approach from Loch Rannoch in the south. The finest approach, however, is from Culra bothy (closed but you can camp nearby) to the northeast, accessed via a long walk-in or cycle from Dalwhinnie.',
    image: 'cairngorms_ben_alder_and_beinn_bhe_il_from_culra.jpg',
    rating: 3.78,
    distance: 17,
    ascent: 1021,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Ben Alder',
        uri: '/munros/ben-alder',
      },
      {
        name: 'Beinn Bheòil',
        uri: '/munros/beinn-bheoil',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Ardverikie & Alder',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/ben-avon.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Avon/forecasts/1171',
    title: 'Ben Avon via Gleann an-Slugain',
    desc: 'Ben Avon is the easternmost of the High Cairngorms and its vast high level plateau sprawls over an area large enough for an entire hill range in the West Highlands. Its outstanding feature is the array of remarkable granite tors all over the plateau.  This walk gives the shortest ascent, using the old right of way up Gleann an t-Slugain.',
    image: 'cairngorms_ben_avon_via_gleann_an_slugain.jpg',
    rating: 3.31,
    distance: 33.5,
    ascent: 1004,
    grade: 4,
    time: {
      naismith: 10,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Ben Avon',
        uri: '/munros/ben-avon',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig an Laoigh',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/ben-macdui.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Macdui/forecasts/1309',
    title: 'Ben Macdui and Derry Cairngorm',
    desc: "Ben Macdui is Britain's second highest peak, and unlike Ben Nevis, Macdui is situated in the centre of a vast wilderness. The best approaches are from Deeside, avoiding the ski areas on Cairngorm; this makes an excellent long hillwalk in good weather conditions.",
    image: 'cairngorms_ben_macdui_and_derry_cairngorm.jpg',
    rating: 3.32,
    distance: 29,
    ascent: 1068,
    grade: 4,
    time: {
      naismith: 9,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Ben Macdui',
        uri: '/munros/ben-macdui',
      },
      {
        name: 'Derry Cairngorm',
        uri: '/munros/derry-cairngorm',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig Ghru',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/bynackmore.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Bynack-More/forecasts/1090',
    title: 'Bynack More from Glenmore',
    desc: 'Bynack More is a prominent Munro, the northeastern cornerstone of the Cairngorms. It lacks any grand corries but is a magnificent viewpoint for northeast Scotland.',
    image: 'cairngorms_bynack_more_from_glenmore.jpg',
    rating: 3.19,
    distance: 22.5,
    ascent: 756,
    grade: 4,
    time: {
      naismith: 7,
      walkHighlands: '6.5 - 7.5 hours',
    },
    munros: [
      {
        name: 'Bynack More',
        uri: '/munros/bynack-more',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Aviemore, Rothiemurchus and the Northern Cairngorms',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig Ghru',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/cairn-toul.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Cairn-Toul/forecasts/1291',
    title: 'Cairn Toul - Braeriach traverse',
    desc: "The magnificent walk from Cairn Toul to Braeriach follows the edge of a vast plateau around the Cairngorms' most spectacular corries. It is also exceptionally remote and arduous; many will break the route with an overnight stay at Corrour bothy. This can be approached either from the Linn of Dee to the south leaving a very long return, or via the Chalamain Gap from the Sugar Bowl car park on Speyside - the latter route making the traverse possible in a single epic day for the extremely fit.",
    image: 'cairngorms_cairn_toul___braeriach_traverse.jpg',
    rating: 3.6,
    distance: 36,
    ascent: 1820,
    grade: 5,
    time: {
      naismith: 12,
      walkHighlands: '13 hours or 2 Days',
    },
    munros: [
      {
        name: "The Devil's Point",
        uri: '/munros/the-devils-point',
      },
      {
        name: 'Cairn Toul',
        uri: '/munros/cairn-toul',
      },
      {
        name: 'Sgòr an Lochain Uaine',
        uri: '/munros/sgor-an-lochain-uaine',
      },
      {
        name: 'Braeriach',
        uri: '/munros/braeriach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Aviemore, Rothiemurchus and the Northern Cairngorms',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'West of Lairig Ghru',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/cairnwell.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-Aosda/forecasts/917',
    title: 'The Cairnwell Munros',
    desc: "The Cairnwell is the most prominent of the group of three Munros on the west side of the Cairnwell pass. The Cairnwell and Càrn Aosda are made easily accessible but also scarred by the ski developments; Càrn a'Ghèoidh provides a wilder diversion.",
    image: 'cairngorms_the_cairnwell_munros.jpg',
    rating: 2.93,
    distance: 13,
    ascent: 595,
    grade: 3,
    time: {
      naismith: 4.25,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Càrn Aosda',
        uri: '/munros/carn-aosda',
      },
      {
        name: "Càrn a' Ghèoidh",
        uri: '/munros/carn-a-gheoidh',
      },
      {
        name: 'The Cairnwell',
        uri: '/munros/the-cairnwell',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Glenshee to Mount Keen',
        group: 'Glenshee',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/carn-a-mhaim.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-a-Mhaim/forecasts/1037',
    title: "Càrn a'Mhaim from the Linn of Dee",
    desc: "Càrn a'Mhaim is a southern satellite of Ben Macdui, to which it is linked by long and very narrow ridge, an unusual feature for the Cairngorms. Càrn a'Mhaim is well seen from Derry Lodge and provides a worthwhile ascent in its own right, though it is even better if continuing to its mighty parent.",
    image: 'cairngorms_c_rn_a_mhaim_from_the_linn_of_dee.jpg',
    rating: 3.6,
    distance: 22.5,
    ascent: 648,
    grade: 4,
    time: {
      naismith: 6.75,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: "Càrn a'Mhaim",
        uri: '/munros/carn-a-mhaim',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig Ghru',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/carn-na-caim.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/A-Bhuidheanach-Bheag/forecasts/936',
    title: "Càrn na Caim and A'Bhuidheanach Bheag, Drumochter",
    desc: 'The east side of Drumochter pass is bounded by a steeply rising moor, riven by gullies. Suprisingly given its unimpressive appearance, there are two Munros on the plateau above. The hills themselves lack interest but this walk gives a real feeling of space. The tops are the haunt of dotterel and ptarmigan.',
    image: 'cairngorms_c_rn_na_caim_and_a_bhuidheanach_bheag__drumochter.jpg',
    rating: 2.55,
    distance: 19,
    ascent: 824,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Càrn na Caim',
        uri: '/munros/carn-na-caim',
      },
      {
        name: 'A Bhuidheanach-bheag',
        uri: '/munros/a-bhuidheanach-bheag',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Drumochter Hills',
        group: 'East of Drumochter',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/geal-charn.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/A-Mharconaich/forecasts/975',
    title: 'Geal Chàrn, Monadhliath',
    desc: 'Geal Chàrn is the westernmost of the Monadh Liath and so far from the other three Munros that it is usually ascended on its own. Its eastern corrie is attractive but it is otherwise lacking in features; however it does have a feeling of remoteness.',
    image: 'cairngorms_geal_ch_rn__monadhliath.jpg',
    rating: 2.56,
    distance: 12.5,
    ascent: 625,
    grade: 3,
    time: {
      naismith: 4.25,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Geal Chàrn',
        uri: '/munros/geal-charn-monadhliath',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Monadh Liath and Creag Meagaidh',
        group: 'Monadh Liath',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/glas-maol.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Glas-Maol/forecasts/1068',
    title: 'Glas Maol Munros circuit, Cairnwell Pass',
    desc: 'Glas Maol is the highest of the four Munros on the east side of the Cairnwell Pass. With a high-level start and little descent between the summits, which are arranged on a plateau, this is a straightforward round in good conditions for four Munros.',
    image: 'cairngorms_glas_maol_munros_circuit__cairnwell_pass.jpg',
    rating: 2.9,
    distance: 19.25,
    ascent: 891,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '6.5 - 7.5 hours',
    },
    munros: [
      {
        name: 'Càrn an Tuirc',
        uri: '/munros/carn-an-tuirc',
      },
      {
        name: 'Cairn of Claise',
        uri: '/munros/cairn-of-claise',
      },
      {
        name: 'Glas Maol',
        uri: '/munros/glas-maol',
      },
      {
        name: 'Creag Leacach',
        uri: '/munros/creag-leacach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Glenshee to Mount Keen',
        group: 'Glenshee',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/macdui-cairngorm.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Macdui/forecasts/1309',
    title: 'Ben Macdui and Cairngorm',
    desc: 'Ben Macdui is the second highest mountain in Britain. Approaching it from Speyside involves crossing the vast and exposed Cairngorm plateau, a rolling arctic wilderness and a popular route but requiring excellent navigation skills.',
    image: 'cairngorms_ben_macdui_and_cairngorm.jpg',
    rating: 3.58,
    distance: 17.5,
    ascent: 932,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Ben Macdui',
        uri: '/munros/ben-macdui',
      },
      {
        name: 'Cairn Gorm',
        uri: '/munros/cairn-gorm',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Aviemore, Rothiemurchus and the Northern Cairngorms',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'East of Lairig Ghru',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/meall-chuaich.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfjh43t9r',
    title: 'Meall Chuaich, Drumochter',
    desc: 'Meall Chuaich is a lumpy Munro which lacks many distinctive features; it is however a good viewpoint for upper Badenoch and Strathspey.',
    image: 'cairngorms_meall_chuaich__drumochter.jpg',
    rating: 2.79,
    distance: 14,
    ascent: 614,
    grade: 3,
    time: {
      naismith: 4.5,
      walkHighlands: '4 - 5 hours',
    },
    munros: [
      {
        name: 'Meall Chuaich',
        uri: '/munros/meall-chuaich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Drumochter Hills',
        group: 'East of Drumochter',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/monadhliath.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-Dearg-Monadh-Liath/forecasts/945',
    title: "Càrn Dearg, Càrn Sgulain and A'Chailleach",
    desc: 'This long hillwalk includes ascents of three of the four Monadh Liath Munros. The hills themselves are undistinguished (particularly Càrn Sgulain), but Càrn Dearg has a feeling of remoteness and the long trek across the plateau from this peak to the others gives a feeling of great space, given favourable weather.',
    image: 'cairngorms_c_rn_dearg__c_rn_sgulain_and_a_chailleach.jpg',
    rating: 2.71,
    distance: 24.5,
    ascent: 946,
    grade: 4,
    time: {
      naismith: 7.75,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Càrn Dearg',
        uri: '/munros/carn-dearg-monadhliath',
      },
      {
        name: 'Càrn Sgulain',
        uri: '/munros/carn-sgulain',
      },
      {
        name: "A' Chailleach",
        uri: '/munros/a-chailleach-monadhliath',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Monadh Liath and Creag Meagaidh',
        group: 'Monadh Liath',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/mullach-clach-a-bhlair.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfjk2dkfw',
    title: "Mullach Clach a' Bhlàir",
    desc: "Glen Feshie makes a lovely approach to Mullach Clach a'Bhlàir, whose cairn stands towards the southwestern edge of the great Moine Mhòr plateau. Much of the ascent is on a vehicle track but there are great views down into the twisting cleft of Coire Garbhlach.",
    image: 'cairngorms_mullach_clach_a__bhl_ir.jpg',
    rating: 3.18,
    distance: 22.5,
    ascent: 785,
    grade: 4,
    time: {
      naismith: 7,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: "Mullach Clach a' Bhlàir",
        uri: '/munros/mullach-clach-a-bhlair',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'Glen Feshie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/sgor-gaoith.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgor-Gaoith/forecasts/1118',
    title: 'Sgòr Gaoith, from Glen Feshie',
    desc: 'Sgòr Gaoith gives a superb, fairly short hillwalk when approached from Glen Feshie. The ascent passes through some magnificent pinewoods before climbing the bare upper slopes to reach a vast plateau. The summit is extremely dramatic perched on the very edge of the vast broken crags that plunge down to Loch Einich; the views are superb. PLEASE NOTE: the car park will be closed from August until the end of 2021 for forestry work',
    image: 'cairngorms_sg_r_gaoith__from_glen_feshie.jpg',
    rating: 3.97,
    distance: 14,
    ascent: 913,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Sgòr Gaoith',
        uri: '/munros/sgor-gaoith',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Kingussie and Newtonmore: Badenoch',
      },
      steveFallon: {
        area: 'Cairngorms and Glen Feshie',
        group: 'Glen Feshie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/tolmount.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfjeszrvm',
    title: 'Tolmount and Tom Buidhe via Loch Callater',
    desc: 'Tolmount and Tom Buidhe are two of the least distinguished Munros, Tom Buidhe in particular being a rounded hummock in the centre of a vast rolling plateau. The approach via Loch Callater is long but probably the most scenic approach, with Tolmount from this direction at least having a conical shape and some craggy corrie scenery.',
    image: 'cairngorms_tolmount_and_tom_buidhe_via_loch_callater.jpg',
    rating: 2.96,
    distance: 26.5,
    ascent: 841,
    grade: 4,
    time: {
      naismith: 8,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Tolmount',
        uri: '/munros/tolmount',
      },
      {
        name: 'Tom Buidhe',
        uri: '/munros/tom-buidhe',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Braemar and Upper Deeside',
      },
      steveFallon: {
        area: 'Glenshee to Mount Keen',
        group: 'Glenshee',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/cairngorms/white-mounth.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Lochnagar/forecasts/1155',
    title: 'White Mounth Munros, Glen Muick',
    desc: 'A long hillwalk taking in the five Munros on the extensive White Mounth plateau. Lochnagar is by far the finest of the summits, but in good weather this is all a hugely enjoyable round with a great feeling of space.',
    image: 'cairngorms_white_mounth_munros__glen_muick.jpg',
    rating: 3.81,
    distance: 29,
    ascent: 1228,
    grade: 4,
    time: {
      naismith: 9.25,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Lochnagar',
        uri: '/munros/lochnagar',
      },
      {
        name: "Càrn a' Choire Bhòidheach",
        uri: '/munros/carn-a-choire-bhoidheach',
      },
      {
        name: 'Càrn an t-Sagairt Mòr',
        uri: '/munros/carn-an-t-sagairt-mor',
      },
      {
        name: 'Cairn Bannoch',
        uri: '/munros/cairn-bannoch',
      },
      {
        name: 'Broad Cairn',
        uri: '/munros/broad-cairn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Cairngorms',
        group: 'Ballater and Balmoral',
      },
      steveFallon: {
        area: 'Glenshee to Mount Keen',
        group: 'Around Loch Muick',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/aonacheagach.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Aonach-Eagach/forecasts/967',
    title: 'Aonach Eagach',
    desc: 'Famed as the narrowest ridge on the British mainland (though Liathach and An Teallach must run it close), the Aonach Eagach gives a thrilling and spectacular traverse for keen scramblers, linking the Munros of Meall Dearg and Sgòrr nam Fiannaidh.',
    image: 'fort_william_aonach_eagach.jpg',
    rating: 3.98,
    distance: 9.5,
    ascent: 1100,
    grade: 5,
    time: {
      naismith: 4.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Meall Dearg',
        uri: '/munros/meall-dearg-aonach-eagach',
      },
      {
        name: 'Sgòrr nam Fiannaidh',
        uri: '/munros/sgorr-nam-fiannaidh-aonach-eagach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Glencoe',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/aonachmor.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Aonach-Beag/forecasts/1234',
    title: 'Aonach Beag and Aonach Mòr from Glen Nevis',
    desc: 'These are two of the highest mountains in Britain. This route avoids the ski developments on the northern flanks of Aonach Mòr which remain out of sight. It gives a fairly long, rugged and remote hillwalk with superb views.',
    image: 'fort_william_aonach_beag_and_aonach_m_r_from_glen_nevis.jpg',
    rating: 3.11,
    distance: 16.5,
    ascent: 1376,
    grade: 4,
    time: {
      naismith: 6.5,
      walkHighlands: '7 - 10 hours',
    },
    munros: [
      {
        name: 'Aonach Beag',
        uri: '/munros/aonach-beag-nevis-range',
      },
      {
        name: 'Aonach Mòr',
        uri: '/munros/aonach-mor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Fort William and Glen Nevis',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Ben Nevis & Aonachs',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/beinn-a-chlachair.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhg92t3c',
    title: "Beinn a'Chlachair, Geal Chàrn and Creag Pitridh",
    desc: "These three Munros are quite isolated in the wilds south of Loch Laggan. Beinn a'Chlachair is  a massive whale-like ridge with steep sides, Geal Chàrn a sprawling mass and Creag Pitridh a pointed summit on its northern slopes.",
    image: 'fort_william_beinn_a_chlachair__geal_ch_rn_and_creag_pitridh.jpg',
    rating: 2.93,
    distance: 26,
    ascent: 1275,
    grade: 4,
    time: {
      naismith: 8.75,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: "Beinn a' Chlachair",
        uri: '/munros/beinn-a-chlachair',
      },
      {
        name: 'Geal Chàrn',
        uri: '/munros/geal-charn',
      },
      {
        name: 'Creag Pitridh',
        uri: '/munros/creag-pitridh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Ardverikie & Alder',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/beinn-na-lap.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhen44z6',
    title: 'Beinn na Lap, from Corrour',
    desc: 'Beinn na Lap may be remote but the close proximity of Corrour rail station - at 400m - helps to make it one of the easiest of the Munros. The walk up is a plod up a trackless moorland but the views - taking in the higher mountains nearby as well as part of Rannoch Moor - are excellent.',
    image: 'fort_william_beinn_na_lap__from_corrour.jpg',
    rating: 2.48,
    distance: 10,
    ascent: 562,
    grade: 3,
    time: {
      naismith: 3.5,
      walkHighlands: '3 - 5 hours',
    },
    munros: [
      {
        name: 'Beinn na Lap',
        uri: '/munros/beinn-na-lap',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Loch Treig & Ossian',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/beinn-nan-aighenan.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfh3tbvz5',
    title: 'Beinn nan Aighenan, Glen Etive',
    desc: 'Beinn nan Aighenan is the forgotten Munro of the Starav range, being hidden away from Glen Etive by an intervening ridge. The usual route of ascent to this rocky summit is over the ridge, however, as any alternatives involve a very long approach.',
    image: 'fort_william_beinn_nan_aighenan__glen_etive.jpg',
    rating: 3,
    distance: 15.75,
    ascent: 1320,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Beinn nan Aighenan',
        uri: '/munros/beinn-nan-aighenan',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'East of Etive',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/beinnabheithir.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfh6633sh',
    title: "Beinn a' Bheithir via Schoolhouse Ridge",
    desc: 'This magnificent mountain ridgewalk takes in two Munros with truly outstanding views of mountain, sea and loch; a real Scottish classic. The ascent involves some easy scrambling up Schoolhouse Ridge, with an alternative suggested for those not wishing to put hand to rock. For 8 weeks from 1st July there are forest and hydro operations near the descent route. The route as described will remain open thoughout, but expected increased vehicles on the forest tracks.',
    image: 'fort_william_beinn_a__bheithir_via_schoolhouse_ridge.jpg',
    rating: 3.72,
    distance: 15.5,
    ascent: 1387,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Sgòrr Dhearg',
        uri: '/munros/sgorr-dhearg-beinn-a-bheithir',
      },
      {
        name: 'Sgòrr Dhònuill',
        uri: '/munros/sgorr-dhonuill-beinn-a-bheithir',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Appin and West of Etive',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/beinnachaorainn.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-a-Chaorainn-Glen-Spean/forecasts/1052',
    title: "Beinn a'Chaorainn and Beinn Teallach",
    desc: "This pair of Munros are much less visited than their better known neighbour Creag Meagaidh to the east. Their lower slopes may be boggy, but the walk along the summit ridge of Beinn a'Chaorainn is a delight.",
    image: 'fort_william_beinn_a_chaorainn_and_beinn_teallach.jpg',
    rating: 3.38,
    distance: 16,
    ascent: 1172,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: "Beinn a'Chaorainn",
        uri: '/munros/beinn-a-chaorainn-glen-spean',
      },
      {
        name: 'Beinn Teallach',
        uri: '/munros/beinn-teallach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Monadh Liath and Creag Meagaidh',
        group: 'Creag Meagaidh & neighbours',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/benstarav.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Starav/forecasts/1078',
    title: 'Ben Starav and Glas Bheinn Mhòr',
    desc: 'Ben Starav is the magnificent mountain, its great bulk rising on the south side of Loch Etive to fine rocky ridges. It is a fantastic viewpoint and gives an excellent traverse in combination with Glas Bheinn Mhor.',
    image: 'fort_william_ben_starav_and_glas_bheinn_mh_r.jpg',
    rating: 3.84,
    distance: 16,
    ascent: 1423,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '8 - 9 hours',
    },
    munros: [
      {
        name: 'Ben Starav',
        uri: '/munros/ben-starav',
      },
      {
        name: 'Glas Bheinn Mhòr',
        uri: '/munros/glas-bheinn-mhor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'East of Etive',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/bideannambian.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Bidean-Nam-Bian/forecasts/1150',
    title: 'Bidean nam Bian',
    desc: "The highest mountain in the old county of Argyll, Bidean nam Bian is the whole majestic range of mountains on the south side of Glen Coe. It's dramatic northern ridges are known as the Three Sisters, whilst the highest summits of the group are hidden away behind.",
    image: 'fort_william_bidean_nam_bian.jpg',
    rating: 4.08,
    distance: 11,
    ascent: 1316,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Bidean nam Bian',
        uri: '/munros/bidean-nam-bian',
      },
      {
        name: 'Stob Coire Sgreamhach',
        uri: '/munros/stob-coire-sgreamhach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Glencoe',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/binneinmor.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Binnein-Mor/forecasts/1130',
    title: 'Binnein Mòr and Na Gruagaichean, Mamores',
    desc: 'Binnein Mòr is a magnificent peak crowning a graceful ridge and is the highest of the Mamores. In combination with its rocky neighbour Na Gruagaichean it gives a superb ridgewalk.',
    image: 'fort_william_binnein_m_r_and_na_gruagaichean__mamores.jpg',
    rating: 3.76,
    distance: 14,
    ascent: 1336,
    grade: 4,
    time: {
      naismith: 5.75,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Binnein Mòr',
        uri: '/munros/binnein-mor',
      },
      {
        name: 'Na Gruagaichean',
        uri: '/munros/na-gruagaichean',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Mamores',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/buachailleetivebeag.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Buachaille-Etive-Beag/forecasts/958',
    title: 'Buachaille Etive Beag',
    desc: 'Buachaille Etive Beag is often overlooked in favour of its more illustrious neighbour. It is, however, a magnificent ridge in its own right, offering superlative views down Loch Etive and of the surrounding peaks of Glencoe. It also has the benefit of an excellent path easing the ascent and descent from the Lairig Èilde.',
    image: 'fort_william_buachaille_etive_beag.jpg',
    rating: 3.83,
    distance: 8,
    ascent: 900,
    grade: 3,
    time: {
      naismith: 3.5,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Stob Coire Raineach',
        uri: '/munros/stob-coire-raineach-buachaille-etive-beag',
      },
      {
        name: 'Stob Dubh',
        uri: '/munros/stob-dubh-buachaille-etive-beag',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Glencoe',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/buachailleetivemor.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Buachaille-Etive-Mor/forecasts/1020',
    title: 'Buachaille Etive Mòr',
    desc: 'Buachaille Etive Mòr is one of the best known and loved of all the Munro peaks.  The epic view of the mountain from the main A82 road makes it appear quite unassailable and is one of the most photographed sights in Scotland.',
    image: 'fort_william_buachaille_etive_m_r.jpg',
    rating: 4.04,
    distance: 13,
    ascent: 1110,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Stob Dearg',
        uri: '/munros/stob-dearg-buachaille-etive-mor',
      },
      {
        name: 'Stob na Bròige',
        uri: '/munros/stob-na-broige-buachaille-etive-mor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Glencoe',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/carnmordeargarete.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Nevis/forecasts/1344',
    title: 'Ben Nevis by the Càrn Mòr Dearg Arête',
    desc: 'For experienced, fit mountain walkers who do not mind easy scrambling but are not climbers, this is the finest way to climb Ben Nevis. This is a truly spectacular route incorporating two Munros. It will live long in the memory and does true justice to the mountain.',
    image: 'fort_william_ben_nevis_by_the_c_rn_m_r_dearg_ar_te.jpg',
    rating: 3.94,
    distance: 17.5,
    ascent: 1506,
    grade: 5,
    time: {
      naismith: 7,
      walkHighlands: '10 - 11 hours',
    },
    munros: [
      {
        name: 'Càrn Mòr Dearg',
        uri: '/munros/carn-mor-dearg',
      },
      {
        name: 'Ben Nevis',
        uri: '/munros/ben-nevis',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Fort William and Glen Nevis',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Ben Nevis & Aonachs',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/chnodearg.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Chno-Dearg/forecasts/1046',
    title: 'Chno Dearg and Stob Coire Sgriodain',
    desc: "Chno Dearg is an undistinguished rounded mountain which would be little visited if it were not a Munro; it's neighbour Stob Coire Sgriodain is much rockier with some real character - it is also a stunning viewpoint.",
    image: 'fort_william_chno_dearg_and_stob_coire_sgriodain.jpg',
    rating: 3.13,
    distance: 13.5,
    ascent: 915,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Stob Coire Sgriodain',
        uri: '/munros/stob-coire-sgriodain',
      },
      {
        name: 'Chno Dearg',
        uri: '/munros/chno-dearg',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Loch Treig & Ossian',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/creagmeagaidh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Creag-Meagaidh/forecasts/1128',
    title: 'Creag Meagaidh circuit',
    desc: 'Creag Meagaidh is a magnificent massif, a bare plateau fringed by some of the grandest cliffs in Scotland. This traverse also takes in two further neighbouring Munros and makes for a memorable day.',
    image: 'fort_william_creag_meagaidh_circuit.jpg',
    rating: 3.8,
    distance: 21,
    ascent: 1080,
    grade: 4,
    time: {
      naismith: 7,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Càrn Liath',
        uri: '/munros/carn-liath-creag-meagaidh',
      },
      {
        name: 'Stob Poite Coire Àrdair',
        uri: '/munros/stob-poite-coire-ardair',
      },
      {
        name: 'Creag Meagaidh',
        uri: '/munros/creag-meagaidh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Monadh Liath and Creag Meagaidh',
        group: 'Creag Meagaidh & neighbours',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/creise.shtml',
    weatherUrl: 'https://www.mountain-forecast.com/peaks/Creise/forecasts/1100',
    title: "Creise and Meall a'Bhùiridh from the Ski centre",
    desc: "These two Munros form the northeastern part the Black Mount range, rising above the head of Glen Etive opposite the better known Buachaille Etive Mòr . This route ascends via the White Corries ski slopes. Meall a'Bhùiridh appears rather undistinguished seen from Rannoch Moor but its elegant west ridge is revealed from Creise, itself the high point of a dramatic ridge running from Sròn  na Creise in the north through Clach Leathad to Sròn  nam Forsair.",
    image: 'fort_william_creise_and_meall_a_bh_iridh_from_the_ski_centre.jpg',
    rating: 3.14,
    distance: 10.5,
    ascent: 1093,
    grade: 4,
    time: {
      naismith: 4.5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: "Meall a'Bhùiridh",
        uri: '/munros/meall-a-bhuiridh',
      },
      {
        name: 'Creise',
        uri: '/munros/creise',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Black Mount',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/easains.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Stob-Coire-Easain/forecasts/1115',
    title: "Stob Coire Easain and Stob a'Choire Mheadhoin",
    desc: "This fine pair of Munros - commonly known as the Easains - give a fairly long ridgewalk high above the glacial trough of Loch Treig. Stob Coire Easain in particular is a fine peak and offers superb views; it is quite hidden away behind other summits from most roads which perhaps explains why it isn't better known.",
    image: 'fort_william_stob_coire_easain_and_stob_a_choire_mheadhoin.jpg',
    rating: 3.32,
    distance: 16.5,
    ascent: 1172,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: "Stob a'Choire Mheadhoin",
        uri: '/munros/stob-a-choire-mheadhoin',
      },
      {
        name: 'Stob Coire Easain',
        uri: '/munros/stob-coire-easain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Loch Treig & Ossian',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/gairich.shtml',
    weatherUrl: 'https://www.mountain-forecast.com/peaks/Gairich/forecasts/919',
    title: 'Gairich, Loch Quoich',
    desc: 'Gairich gives a fairly easy day out for Munro baggers; this isolated summit is a superb viewpoint.',
    image: 'fort_william_gairich__loch_quoich.jpg',
    rating: 3.78,
    distance: 15.5,
    ascent: 850,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Gairich',
        uri: '/munros/gairich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Glen Kingie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/greycorries.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Stob-Choire-Claurigh/forecasts/1177',
    title: 'The Grey Corries',
    desc: 'The Grey Corries is the long chain of mountains set to the east of the Nevis Range. Well seen from the popular viewpoint of the Commando Memorial near Spean Bridge, their summits are covered with the quartzite scree that gives these mountains their name.  The traverse of the Grey Corries main ridge gives a long and demanding but superb mountain walk. The route as described takes in the main three Munros, leaving a fourth for a separate walk.',
    image: 'fort_william_the_grey_corries.jpg',
    rating: 4.05,
    distance: 21.5,
    ascent: 1544,
    grade: 4,
    time: {
      naismith: 8,
      walkHighlands: '9 - 10 hours',
    },
    munros: [
      {
        name: 'Stob Choire Claurigh',
        uri: '/munros/stob-choire-claurigh',
      },
      {
        name: 'Stob Coire an Laoigh',
        uri: '/munros/stob-coire-an-laoigh',
      },
      {
        name: 'Sgùrr Chòinnich Mòr',
        uri: '/munros/sgurr-choinnich-mor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Grey Corries',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/gulvain.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfh5zv170',
    title: 'Gulvain, near Kinlocheil',
    desc: 'Gulvain (more correctly known as Gaor Bheinn) is the highest mountain in this area but is little known and remains hidden from the roads. A long approach walk (or mountain bike ride) and sustained ascent is repaid with great views from the fine ridge linking the summits.',
    image: 'fort_william_gulvain__near_kinlocheil.jpg',
    rating: 3.27,
    distance: 21,
    ascent: 1228,
    grade: 4,
    time: {
      naismith: 7.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Gulvain',
        uri: '/munros/gulvain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Mallaig, Glenfinnan and Arisaig',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Glenfinnan',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/ladhar-bheinn.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ladhar-Bheinn/forecasts/1020',
    title: 'Ladhar Bheinn from Inverie, Knoydart',
    desc: 'Regarded by many hillwalkers as amongst the finest mountains in Scotland, Ladhar Bheinn enjoys a superb position on western seaboard in the remote Knoydart peninsula. It has dramatic ridges, huge crags falling into Coire Dhorrcail and amazing sea and mountain views from the summit.',
    image: 'fort_william_ladhar_bheinn_from_inverie__knoydart.jpg',
    rating: 3.56,
    distance: 22.5,
    ascent: 1399,
    grade: 5,
    time: {
      naismith: 8,
      walkHighlands: '9 - 12 hours',
    },
    munros: [
      {
        name: 'Ladhar Bheinn',
        uri: '/munros/ladhar-bheinn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Knoydart',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/lochlochymunros.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Meall-na-Teanga/forecasts/918',
    title: 'Loch Lochy Munros from Kilfinnan',
    desc: "Sròn a' Choire Ghairbh and Meall na Teanga rise steeply above Lochy Lochy opposite the busy A82, and are commonly known as the Loch Lochy Munros. Their ascent from Kilfinnan begins with an approach through dense plantations, but once on the hills the views are superb.",
    image: 'fort_william_loch_lochy_munros_from_kilfinnan.jpg',
    rating: 3.3,
    distance: 19,
    ascent: 1258,
    grade: 4,
    time: {
      naismith: 6.75,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: "Sròn a' Choire Ghaibh",
        uri: '/munros/sron-a-choire-ghairbh',
      },
      {
        name: 'Meall na Teanga',
        uri: '/munros/meall-na-teanga',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'West of Loch Lochy',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/luinne-bheinn.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhhdd1ty',
    title: 'Luinne Bheinn and Meall Bhuidhe, Inverie, Knoydart',
    desc: 'These two remote Knoydart Munros may be less celebrated than Ladhar Bheinn, but they still provide a superlative and challenging mountain walk. Rough, rocky summits packed with character and wonderful views.',
    image:
      'fort_william_luinne_bheinn_and_meall_bhuidhe__inverie__knoydart.jpg',
    rating: 4.45,
    distance: 27,
    ascent: 1586,
    grade: 5,
    time: {
      naismith: 9.5,
      walkHighlands: '11 - 13 hours',
    },
    munros: [
      {
        name: 'Meall Buidhe',
        uri: '/munros/meall-buidhe-knoydart',
      },
      {
        name: 'Luinne Bheinn',
        uri: '/munros/luinne-bheinn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Knoydart',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/ringofsteall.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/An-Gearanach/forecasts/982',
    title: 'The Ring of Steall, Mamores',
    desc: "The Ring of Steall is a real classic mountain route combining the traverse of four Munros with scrambling along narrow, rocky aretes. The route takes in An Gearanach, Stob Choire a Chàirn, Am Bodach and then follows the Devils Ridge to Sgùrr a'Mhaim",
    image: 'fort_william_the_ring_of_steall__mamores.jpg',
    rating: 4.03,
    distance: 16,
    ascent: 1676,
    grade: 5,
    time: {
      naismith: 6.75,
      walkHighlands: '9 - 12 hours',
    },
    munros: [
      {
        name: 'An Gearanach',
        uri: '/munros/an-gearanach',
      },
      {
        name: "Stob Coire a' Chàirn",
        uri: '/munros/stob-coire-a-chairn',
      },
      {
        name: 'Am Bodach',
        uri: '/munros/am-bodach',
      },
      {
        name: "Sgùrr a'Mhaim",
        uri: '/munros/sgurr-a-mhaim',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Fort William and Glen Nevis',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Mamores',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/sgor-gaibhre.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-Dearg/forecasts/941',
    title: 'Sgòr Gaibhre and Càrn Dearg from Corrour',
    desc: "Sgòr Gaibhre and Càrn Dearg are a pair of unspectacular Munros in the heart of the wild area around Loch Ossian. They can be approached from the south, or alternatively from Corrour railway station which isn't accessible by road and has the advantage of a start at almost 400m.",
    image: 'fort_william_sg_r_gaibhre_and_c_rn_dearg_from_corrour.jpg',
    rating: 3.54,
    distance: 21.75,
    ascent: 973,
    grade: 4,
    time: {
      naismith: 7,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Sgòr Gaibhre',
        uri: '/munros/sgor-gaibhre',
      },
      {
        name: 'Càrn Dearg (Corrour)',
        uri: '/munros/carn-dearg-corrour',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Loch Treig & Ossian',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/sgornaulaidh.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfh6h731d',
    title: 'Sgòr na h-Ulaidh and Meall Lighiche',
    desc: 'Sgòr na h-Ulaidh is the forgotten Munro amongst the Glencoe peaks, being out of sight for most of the road through the glen. Combined with the Corbett Meall na Lighiche, it gives a day with superb views - but with a very steep ascent.',
    image: 'fort_william_sg_r_na_h_ulaidh_and_meall_lighiche.jpg',
    rating: 3.4,
    distance: 16,
    ascent: 1292,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Sgòr na h-Ulaidh',
        uri: '/munros/sgor-na-h-ulaidh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'Appin and West of Etive',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/sgurr-mor.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhhqm3m0',
    title: 'Sgùrr Mòr and Sgùrr an Fhuarain, Loch Arkaig',
    desc: 'Sgùrr Mòr , a rocky and steep peak between Loch Quoich and lonely Glen Kingie, must rank amongst the remotest Munros. Unless you have a kayak, the usual approach is from Glendessary to the south, involving a pass to Glen Kingie just to reach the foot of the mountain. The Corbett Sgùrr an Fhuarain is easily included in the walk.',
    image: 'fort_william_sg_rr_m_r_and_sg_rr_an_fhuarain__loch_arkaig.jpg',
    rating: 4,
    distance: 24,
    ascent: 1510,
    grade: 4,
    time: {
      naismith: 8.5,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Sgùrr Mòr',
        uri: '/munros/sgurr-mor-loch-quoich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Glen Kingie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/sgurramhaoraich.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-a-Mhaoraich/forecasts/1027',
    title: "Sgùrr a' Mhaoraich, Loch Quoich",
    desc: 'This solitary Munro in the remote area around Loch Quoich has a good stalkers path for the ascent and is a very fine viewpoint.',
    image: 'fort_william_sg_rr_a__mhaoraich__loch_quoich.jpg',
    rating: 3.43,
    distance: 14,
    ascent: 1077,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Sgùrr a Mhaoraich',
        uri: '/munros/sgurr-a-mhaoraich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Loch Chuaich (Quoich)',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/sgurreildemor.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Binnein-Beag/forecasts/943',
    title: 'Sgùrr Èilde Mòr and Binnein Beag, Mamores',
    desc: 'These two Munros are the easternmost of the Mamores range. They stand apart from the rest of the ridge as isolated cones of scree, giving arduous ascends but wonderful views.',
    image: 'fort_william_sg_rr__ilde_m_r_and_binnein_beag__mamores.jpg',
    rating: 3.79,
    distance: 20,
    ascent: 1582,
    grade: 4,
    time: {
      naismith: 7.75,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Binnein Beag',
        uri: '/munros/binnein-beag',
      },
      {
        name: 'Sgùrr Èilde Mòr',
        uri: '/munros/sgurr-eilde-mor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Mamores',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/sgurrnaciche.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-na-Ciche/forecasts/1040',
    title: 'Sgùrr na Cìche: 3 Munros from Loch Arkaig',
    desc: 'This epic mountain walk takes in three remote and exceptionally rugged Munros. The arduous effort required is rewarded with magnificent rocky mountainscapes throughout. Sgùrr na Cìche itself is one of the most shapely summits in Scotland and is a classic viewpoint.',
    image: 'fort_william_sg_rr_na_c_che__3_munros_from_loch_arkaig.jpg',
    rating: 3.5,
    distance: 26,
    ascent: 1523,
    grade: 4,
    time: {
      naismith: 9,
      walkHighlands: '10 - 12 hours',
    },
    munros: [
      {
        name: 'Sgùrr nan Coireachan',
        uri: '/munros/sgurr-nan-coireachan-glen-dessary',
      },
      {
        name: 'Garbh Chioch Mhor',
        uri: '/munros/garbh-chioch-mhor',
      },
      {
        name: 'Sgùrr na Cìche',
        uri: '/munros/sgurr-na-ciche',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Glen Kingie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/sgurrthuilm.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-Thuilm/forecasts/963',
    title: 'Sgùrr Thuilm and Sgùrr nan Coireachan',
    desc: 'This pair of Munros lie just south of the Rough Bounds of Knoydart but share the fine rugged and demanding character of their northern neighbours. They give a long but superb mountain day out with grand views.',
    image: 'fort_william_sg_rr_thuilm_and_sg_rr_nan_coireachan.jpg',
    rating: 3.8,
    distance: 23.5,
    ascent: 1428,
    grade: 4,
    time: {
      naismith: 8.25,
      walkHighlands: '9 - 12 hours',
    },
    munros: [
      {
        name: 'Sgùrr nan Coireachan',
        uri: '/munros/sgurr-nan-coireachan-glenfinnan',
      },
      {
        name: 'Sgùrr Thuilm',
        uri: '/munros/sgurr-thuilm',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Mallaig, Glenfinnan and Arisaig',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Glenfinnan',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/spideanmialach.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Gleouraich/forecasts/1035',
    title: 'Gleouraich and Spidean Mialach',
    desc: 'These two fine, steep and rocky Munros are in fairly close proximity to the road and some excellent stalkers paths make this an enjoyable and easier climb than most high peaks in the Northwest.',
    image: 'fort_william_gleouraich_and_spidean_mialach.jpg',
    rating: 3.56,
    distance: 12,
    ascent: 1130,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Spidean Mialach',
        uri: '/munros/spidean-mialach',
      },
      {
        name: 'Gleouraich',
        uri: '/munros/gleouraich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Knoydart, Glen Garry and Loch Lochy',
      },
      steveFallon: {
        area: 'Loch Eil to Glen Shiel',
        group: 'Loch Chuaich (Quoich)',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/stob-ban-grey-corries.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Stob-Ban-Grey-Corries/forecasts/977',
    title: 'Stob Ban (Grey Corries)',
    desc: 'Stob Ban is rather hidden away behind the much higher peaks of the Grey Corries. However it is a steep and shapely peak in its own right, and well repays the approach walk. The tiny Lairig Leacach bothy sits at its foot.',
    image: 'fort_william_stob_ban__grey_corries_.jpg',
    rating: 3.11,
    distance: 18,
    ascent: 852,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Stob Ban (Grey Corries)',
        uri: '/munros/stob-ban-grey-corries',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Spean Bridge, Roybridge and Loch Ossian',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Grey Corries',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/stobban.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Stob-Ban-Mamores/forecasts/999',
    title: 'Stob Ban (Mamores) and Mullach nan Coirean',
    desc: 'Stob Ban is one of the finest peaks in the Mamores, its quartzite summit giving magnificent views. A very fine ridge traverse links it to its westerly neighbour Mullach nan Coirean, giving an excellent circuit.',
    image: 'fort_william_stob_ban__mamores__and_mullach_nan_coirean.jpg',
    rating: 3.64,
    distance: 13,
    ascent: 1155,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Stob Ban',
        uri: '/munros/stob-ban-mamores',
      },
      {
        name: 'Mullach nan Coirean',
        uri: '/munros/mullach-nan-coirean',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Fort William and Glen Nevis',
      },
      steveFallon: {
        area: 'Loch Linnhe to Loch Ericht',
        group: 'Mamores',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/fortwilliam/stobcoiranalbannaich.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfh3wxky7',
    title: "Stob Coir'an Albannaich and Meall nan Eun",
    desc: "Stob Coir'an Albannaich is a little visited mountain with fine northern corries. This route combines it with neighbouring Meall nan Eun to give an escape from the crowds in Glencoe to the north.",
    image: 'fort_william_stob_coir_an_albannaich_and_meall_nan_eun.jpg',
    rating: 2.75,
    distance: 18,
    ascent: 1327,
    grade: 4,
    time: {
      naismith: 6.75,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: "Stob Coir' an Albannaich",
        uri: '/munros/stob-coir-an-albannaich',
      },
      {
        name: 'Meall nan Eun',
        uri: '/munros/meall-nan-eun',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Fort William',
        group: 'Glencoe and Kinlochleven',
      },
      steveFallon: {
        area: 'Strath Orchy to Glencoe',
        group: 'East of Etive',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Achralaig.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/A-Chralaig/forecasts/1120',
    title: "A'Chralaig and Mullach Fraoch-choire",
    desc: 'A Chralaig is the highest of the mountains bordering the main road to Skye. The ascent is a steep grind but the ridge walk onto Mullach Fraoch-choire is as fine as any in Kintail.',
    image: 'kintail_and_lochalsh_a_chralaig_and_mullach_fraoch_choire.jpg',
    rating: 3.93,
    distance: 13,
    ascent: 1150,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'A Chralaig',
        uri: '/munros/a-chralaig',
      },
      {
        name: 'Mullach Fraoch-choire',
        uri: '/munros/mullach-fraoch-choire',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Above Loch Cluanie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Aghlasbheinn.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhjxqfmb',
    title: 'A Ghlas Bheinn and the Falls of Glomach',
    desc: 'A Ghlas Bheinn is a relatively small Munro, seeming at first glance to be rather overshadowed by neighbouring Beinn Fhada. On closer aquintance it is revealed as a rocky mountain of great character. The ascent here is combed with a visit to the Falls of Glomach - the finest in Scotland.',
    image: 'kintail_and_lochalsh_a_ghlas_bheinn_and_the_falls_of_glomach.jpg',
    rating: 3,
    distance: 21,
    ascent: 1196,
    grade: 4,
    time: {
      naismith: 7.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: "A' Ghlas Bheinn",
        uri: '/munros/a-ghlas-bheinn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Kintail',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Beinnfhada.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Fhada/forecasts/1032',
    title: 'Beinn Fhada (or Ben Attow)',
    desc: 'Beinn Fhada is a mountain of great bulk. Whilst it may lack the graceful ridges elsewhere in Kintail, an ascent reveals its true character and complexity, with some magnificent northern corries.',
    image: 'kintail_and_lochalsh_beinn_fhada__or_ben_attow_.jpg',
    rating: 3.18,
    distance: 16.75,
    ascent: 1234,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Beinn Fhada',
        uri: '/munros/beinn-fhada',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Kintail',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Beinnsgritheall.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Sgritheall/forecasts/974',
    title: 'Beinn Sgritheall',
    desc: 'Beinn Sgritheall gives a steep and punishing ascent; the effort is well worthwhile however as this is one of the finest viewpoints in the Highlands, with a fantastic outlook over dramatic Loch Hourn to Knoydart and the Cuillin of Skye.',
    image: 'kintail_and_lochalsh_beinn_sgritheall.jpg',
    rating: 3.89,
    distance: 10,
    ascent: 1095,
    grade: 4,
    time: {
      naismith: 4.25,
      walkHighlands: '4 - 6 hours',
    },
    munros: [
      {
        name: 'Beinn Sgritheall',
        uri: '/munros/beinn-sgritheall',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Glenelg and Arnisdale',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Above Loch Hourn',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Brothersridge.shtml',
    weatherUrl: 'https://www.mountain-forecast.com/peaks/Saileag/forecasts/999',
    title: 'Brothers Ridge - Sgùrr a Bhealaich Dheirg',
    desc: 'The eastern neighbours of the Five Sisters are the three Munros Sgùrr a Bhealaich Dheirg, Sàileag and Aonach Meadhoin, often collectively known as the Brothers of Kintail. They give a very fine ridgewalk themselves, and are in no way overshadowed by their more famous siblings.',
    image: 'kintail_and_lochalsh_brothers_ridge___sg_rr_a_bhealaich_dheirg.jpg',
    rating: 3.82,
    distance: 10,
    ascent: 1274,
    grade: 4,
    time: {
      naismith: 4.5,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Sàileag',
        uri: '/munros/saileag',
      },
      {
        name: 'Sgùrr a Bhealaich Dheirg',
        uri: '/munros/sgurr-a-bhealaich-dheirg',
      },
      {
        name: 'Aonach Meadhoin',
        uri: '/munros/aonach-meadhoin',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Kintail',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Cistedhubh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ciste-Dhubh/forecasts/979',
    title: 'Ciste Dhubh and Am Bathach, Cluanie',
    desc: 'The traverse of the Corbett of Am Bathach is along a fine grassy ridge, whilst Ciste Dhubh is a Munro of real character giving an excellent walk.',
    image: 'kintail_and_lochalsh_ciste_dhubh_and_am_bathach__cluanie.jpg',
    rating: 3.5,
    distance: 12.5,
    ascent: 1040,
    grade: 4,
    time: {
      naismith: 4.75,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Ciste Dhubh',
        uri: '/munros/ciste-dhubh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Kintail',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Fivesisters.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-na-Ciste-Duibhe/forecasts/1027',
    title: 'Five Sisters of Kintail',
    desc: 'A classic ridgewalk taking in three Munros, the Five Sisters give a wonderful days excursion with magnificent views.',
    image: 'kintail_and_lochalsh_five_sisters_of_kintail.jpg',
    rating: 3.97,
    distance: 15,
    ascent: 1385,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Sgùrr na Ciste Duibhe',
        uri: '/munros/sgurr-na-ciste-duibhe',
      },
      {
        name: 'Sgùrr na Càrnach',
        uri: '/munros/sgurr-na-carnach',
      },
      {
        name: 'Sgùrr Fhuaran',
        uri: '/munros/sgurr-fhuaran',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Kintail',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Glenshielridge.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-a-Mhaim/forecasts/1037',
    title: 'South Glen Shiel Ridge: 7 Munros',
    desc: 'This marvellous but long and arduous ridge walk is a Munro-baggers delight. Nowhere else in the Highlands can so many peaks be climbed in a day, with minimal descent between the summits, and the views are excellent all the way. However, this is a long day with steep ground on either side of the ridge - route finding skills and a fast pace are required. If in any doubt about fitness, the route can be split into two days by using the Druim na Coire nan Eirecheanach ridge to descend from the ridge at the end of the first day, and use the Druim Thollaidh ridge to regain the ridge to begin the second day.',
    image: 'kintail_and_lochalsh_south_glen_shiel_ridge__7_munros.jpg',
    rating: 3.57,
    distance: 26.75,
    ascent: 1818,
    grade: 4,
    time: {
      naismith: 9.75,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: "Creag a' Mhaim",
        uri: '/munros/creag-a-mhaim',
      },
      {
        name: 'Druim Shionnach',
        uri: '/munros/druim-shionnach',
      },
      {
        name: 'Aonach Air Chrith',
        uri: '/munros/aonach-air-chrith',
      },
      {
        name: 'Maol Chinn-dearg',
        uri: '/munros/maol-chinn-dearg',
      },
      {
        name: 'Sgùrr an Doire Leathain',
        uri: '/munros/sgurr-an-doire-leathain',
      },
      {
        name: 'Sgùrr an Lochain',
        uri: '/munros/sgurr-an-lochain',
      },
      {
        name: 'Creag nan Dàmh',
        uri: '/munros/creag-nan-damh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'South Glen Shiel Ridge',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/sgurrnanconbhairean.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhmhwwvp',
    title: 'Sgùrr nan Conbhairean, Càrn Ghluasaid and Sàil Chaorainn',
    desc: 'This enjoyable walk takes in three Munros on the north side of Loch Cluanie. Though less steep and shapely than their Glen Shiel counterparts, these mountains give an excellent outing with grand views into their fine eastern corries.',
    image:
      'kintail_and_lochalsh_sg_rr_nan_conbhairean__c_rn_ghluasaid_and_s_il_chaorainn.jpg',
    rating: 3.23,
    distance: 17.5,
    ascent: 1260,
    grade: 4,
    time: {
      naismith: 6.5,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Càrn Ghluasaid',
        uri: '/munros/carn-ghluasaid',
      },
      {
        name: 'Sgùrr nan Conbhairean',
        uri: '/munros/sgurr-nan-conbhairean',
      },
      {
        name: 'Sàil Chaorainn',
        uri: '/munros/sail-chaorainn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'Above Loch Cluanie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/kintail/Thesaddle.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/The-Saddle/forecasts/1010',
    title: 'The Saddle, Forcan Ridge and Sgùrr na Sgìne',
    desc: 'The Saddle is the finest of the Kintail peaks and one of the most magnificent mountains in the Highlands. Its ascent via the Forcan Ridge is a difficult but classic scramble; the scrambling can be avoided if needed and the walk still has fantastic views.',
    image:
      'kintail_and_lochalsh_the_saddle__forcan_ridge_and_sg_rr_na_sg_ne.jpg',
    rating: 4.17,
    distance: 13,
    ascent: 1350,
    grade: 5,
    time: {
      naismith: 5.5,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'The Saddle',
        uri: '/munros/the-saddle',
      },
      {
        name: 'Sgùrr na Sgìne',
        uri: '/munros/sgurr-na-sgine',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Kintail and Lochalsh',
        group: 'Dornie and Glen Shiel',
      },
      steveFallon: {
        area: 'Kintail and Glen Shiel',
        group: 'South Glen Shiel Ridge',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/an-caisteal.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/An-Caisteal/forecasts/995',
    title: "An Caisteal and Beinn a'Chròin, near Crianlarich",
    desc: 'Two fine Munros with rewarding ridge walking and great views over a wide expanse from Loch Lomond to Ben Nevis. The walking is mostly on good grassy ground underfoot with a final section that can be boggy.',
    image: 'loch_lomond_an_caisteal_and_beinn_a_chr_in__near_crianlarich.jpg',
    rating: 2.87,
    distance: 14,
    ascent: 1045,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '5.5  - 7 hours',
    },
    munros: [
      {
        name: 'An Caisteal',
        uri: '/munros/an-caisteal',
      },
      {
        name: "Beinn  a' Chròin",
        uri: '/munros/beinn-a-chroin',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Arrochar Alps and Crianlarich',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Crianlarich group',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/beinn-chabhair.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Chabhair/forecasts/933',
    title: 'Beinn Chabhair, from Inverarnan',
    desc: 'Whilst it may rank amongst the smaller Munros, Beinn Chabhair is a suprisingly rugged peak with great character. The summit ridge is a lumpy collection of knolls and rocky humps which make a fine walk. The start via Beinglas Falls is very steep and eroded, and there is fair amount of boggy ground on the middle, moorland section.',
    image: 'loch_lomond_beinn_chabhair__from_inverarnan.jpg',
    rating: 3.45,
    distance: 13,
    ascent: 948,
    grade: 4,
    time: {
      naismith: 4.75,
      walkHighlands: '5  - 6.5 hours',
    },
    munros: [
      {
        name: 'Beinn Chabhair',
        uri: '/munros/beinn-chabhair',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Arrochar Alps and Crianlarich',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Crianlarich group',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/beinn-ime.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Narnain/forecasts/926',
    title: 'Beinn Narnain and Beinn Ìme',
    desc: 'The compact group of mountains known as the Arrochar Alps are renowned for their steep, rugged and rocky nature. However, the highest peak - Beinn Ìme - has a simple slope when approached from this direction. Beinn Narnain has a much rougher and rockier character. The views - especially of the nearby Cobbler - are excellent.',
    image: 'loch_lomond_beinn_narnain_and_beinn__me.jpg',
    rating: 3.43,
    distance: 13.5,
    ascent: 1325,
    grade: 4,
    time: {
      naismith: 5.5,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Beinn Narnain',
        uri: '/munros/beinn-narnain',
      },
      {
        name: 'Beinn Ìme',
        uri: '/munros/beinn-ime',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Arrochar Alps and Crianlarich',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Ben Lomond and Arrochar Alps',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/ben-lomond.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Lomond/forecasts/974',
    title: 'Ben Lomond',
    desc: 'Ben Lomond is one of the most popular Munros, rewarding the 30,000 people who make it to the top with truly fantastic views of the length of Loch Lomond and its islands. The view to the north reveals range beyond range of mountains into the Highlands. The path up is well made, but the optional return down the Ptarmigan ridge is steep and rocky, and muddy lower down.',
    image: 'loch_lomond_ben_lomond.jpg',
    rating: 4.05,
    distance: 12,
    ascent: 990,
    grade: 3,
    time: {
      naismith: 4.75,
      walkHighlands: '4.5 - 5.5 hours',
    },
    munros: [
      {
        name: 'Ben Lomond',
        uri: '/munros/ben-lomond',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Drymen and Balmaha - South and East Loch Lomond',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Ben Lomond and Arrochar Alps',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/ben-more.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Stob-Binnein/forecasts/1165',
    title: 'Ben More and Stob Binnein',
    desc: 'Ben More dominates Crianlarich and the road east, an enormous green pyramid offering no obvious easy approaches; the ascent is unrelenting. Its near neighbour Stob Binnein is often regarded as its twin, but this more retiring summit is actually the finer of the two peaks, a graceful cone above its supporting ridges.',
    image: 'loch_lomond_ben_more_and_stob_binnein.jpg',
    rating: 3.24,
    distance: 12,
    ascent: 1335,
    grade: 4,
    time: {
      naismith: 5.25,
      walkHighlands: '6  - 8 hours',
    },
    munros: [
      {
        name: 'Ben More',
        uri: '/munros/ben-more',
      },
      {
        name: 'Stob Binnein',
        uri: '/munros/stob-binnein',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Arrochar Alps and Crianlarich',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Crianlarich group',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/ben-vane.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Vane/forecasts/915',
    title: 'Ben Vane, from Inveruglas',
    desc: 'Ben Vane may be only just high enough to make Munro status, but it is a steep, rocky little mountain with real character, like a wee terrier that refuses to acknowledge its lack of stature amongst its higher neighbours. The ascent is short by hillwalking standards but there are several false tops and the climb is a sustained one.',
    image: 'loch_lomond_ben_vane__from_inveruglas.jpg',
    rating: 3.18,
    distance: 11,
    ascent: 930,
    grade: 4,
    time: {
      naismith: 4.25,
      walkHighlands: '4.5  - 6.5 hours',
    },
    munros: [
      {
        name: 'Ben Vane',
        uri: '/munros/ben-vane',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Arrochar Alps and Crianlarich',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Ben Lomond and Arrochar Alps',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/ben-vorlich-lomond.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Vorlich-Loch-Lomond/forecasts/943',
    title: 'Ben Vorlich via Loch Sloy',
    desc: 'Ben Vorlich is a bulky and very rugged mountain, the most northerly of the Arrochar Alps. It is possible to walk a fine circuit taking in the Little Hills from Ardlui to the north, but the ascent here, from Inveruglas via the Loch Sloy dam road, is the quickest and most popular. The ascent is steep but the views are superb.',
    image: 'loch_lomond_ben_vorlich_via_loch_sloy.jpg',
    rating: 3.25,
    distance: 13.5,
    ascent: 945,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '5 - 6.5 hours',
    },
    munros: [
      {
        name: 'Ben Vorlich',
        uri: '/munros/ben-vorlich-loch-lomond',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Arrochar Alps and Crianlarich',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Ben Lomond and Arrochar Alps',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochlomond/cruach-ardrain.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Cruach-Ardrain/forecasts/1046',
    title: 'Cruach Àrdrain and Beinn Tulaichean',
    desc: 'Cruach Àrdrain has a distinctive outline which makes it a familiar sight from the Crianlarich and Tyndrum area. Its southern ridge rises to the satellite Munro peak of Beinn Tulaichean; to include both of these summits it is more convenient to start from the south to avoid reascending over the shoulder of Cruach Àrdrain. The slopes to and from the ridge are steep, rugged and pathless.',
    image: 'loch_lomond_cruach__rdrain_and_beinn_tulaichean.jpg',
    rating: 2.9,
    distance: 12.5,
    ascent: 1019,
    grade: 4,
    time: {
      naismith: 4.75,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Beinn Tulaichean',
        uri: '/munros/beinn-tulaichean',
      },
      {
        name: 'Cruach Àrdrain',
        uri: '/munros/cruach-ardrain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Lomond',
        group: 'Strathyre, Lochearnhead and Balquhidder',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Crianlarich group',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochness/Benwyvis.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Wyvis/forecasts/1046',
    title: 'Ben Wyvis, near Garve',
    desc: 'Ben Wyvis is a vast and sprawling mountain whose isolated position makes it the dominating feature of a wide area of the Highlands. The ascent to its spacious plateau is a reasonably straightforward ascent in good summer conditions by Munro standards and there are very extensive views from the summit.',
    image: 'loch_ness___glen_affric_ben_wyvis__near_garve.jpg',
    rating: 3.29,
    distance: 14,
    ascent: 935,
    grade: 3,
    time: {
      naismith: 5,
      walkHighlands: '4.5 - 5.5 hours',
    },
    munros: [
      {
        name: 'Ben Wyvis',
        uri: '/munros/ben-wyvis',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Ness & Glen Affric',
        group: 'Black Isle, Garve and Dingwall',
      },
      steveFallon: {
        area: 'Far North',
        group: 'Ben Wyvis',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochness/carn-eige.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-Eige/forecasts/1183',
    title: 'Càrn Eige and Mam Sodhail',
    desc: 'Càrn Eige and Mam Sodhail are the two highest mountains north of the Great Glen and spectacular viewpoints. This long, wild mountain walk around a horse-shoe of ridges becomes something of an epic by the (optional) addition of the very remote Munro of Beinn Fhionnlaidh.',
    image: 'loch_ness___glen_affric_c_rn_eige_and_mam_sodhail.jpg',
    rating: 3.73,
    distance: 28,
    ascent: 1727,
    grade: 4,
    time: {
      naismith: 10,
      walkHighlands: '10 - 13 hours',
    },
    munros: [
      {
        name: 'Càrn Eige (or Càrn Eighe)',
        uri: '/munros/carn-eige',
      },
      {
        name: 'Beinn Fhionnlaidh',
        uri: '/munros/beinn-fhionnlaidh-carn-eige',
      },
      {
        name: 'Mam Sodhail',
        uri: '/munros/mam-sodhail',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Ness & Glen Affric',
        group: 'Glen Affric, Strathfarrar and Beauly',
      },
      steveFallon: {
        area: 'Affric, Cannich and Strathfarrar',
        group: 'Mullardoch circuit',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochness/Ceathreamhnan.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhmfh2h1',
    title: 'Sgùrr nan Ceathreamhnan group, Alltbeithe',
    desc: 'Strenuous walk over some of the remotest mountains in Britain. Sgùrr nan Ceathreamhnan is a magnificent peak; whilst Mullach na Dheiragain is prized for its inaccessibility.',
    image:
      'loch_ness___glen_affric_sg_rr_nan_ceathreamhnan_group__alltbeithe.jpg',
    rating: 3.6,
    distance: 20,
    ascent: 1484,
    grade: 4,
    time: {
      naismith: 7.5,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Mullach nan Dheiragain',
        uri: '/munros/mullach-nan-dheiragain',
      },
      {
        name: 'Sgùrr nan Ceathreamhnan',
        uri: '/munros/sgurr-nan-ceathreamhnan',
      },
      {
        name: 'An Socach',
        uri: '/munros/an-socach-affric',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Ness & Glen Affric',
        group: 'Glen Affric, Strathfarrar and Beauly',
      },
      steveFallon: {
        area: 'Affric, Cannich and Strathfarrar',
        group: 'Mullardoch circuit',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochness/mullardoch-munros.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-nan-Gobhar-Mullardoch/forecasts/992',
    title: 'The Loch Mullardoch Munros',
    desc: 'This fine group of Munros make for a spectacular ridge-walk in an extremely remote part of the Highlands. The tiring walk back along the north side of Loch Mullardoch completes an extremely long day.',
    image: 'loch_ness___glen_affric_the_loch_mullardoch_munros.jpg',
    rating: 3.64,
    distance: 29,
    ascent: 1826,
    grade: 4,
    time: {
      naismith: 10.25,
      walkHighlands: '11 - 14 hours',
    },
    munros: [
      {
        name: 'Càrn nan Gobhar',
        uri: '/munros/carn-nan-gobhar-loch-mullardoch',
      },
      {
        name: 'Sgùrr na Lapaich',
        uri: '/munros/sgurr-na-lapaich',
      },
      {
        name: 'An Riabhachan',
        uri: '/munros/an-riabhachan',
      },
      {
        name: 'An Socach',
        uri: '/munros/an-socach-mullardoch',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Ness & Glen Affric',
        group: 'Glen Affric, Strathfarrar and Beauly',
      },
      steveFallon: {
        area: 'Affric, Cannich and Strathfarrar',
        group: 'Mullardoch circuit',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochness/strathfarrar-munros.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-nan-Gobhar-Mullardoch/forecasts/992',
    title: 'Glen Strathfarrar Munros circuit',
    desc: 'A long walk with excellent views and increasing interest from the mountains and ridges further along the route. The walk back along the road, although picturesque, can be tiring at the end of the day, a bike could be used to shorten this section.',
    image: 'loch_ness___glen_affric_glen_strathfarrar_munros_circuit.jpg',
    rating: 3.41,
    distance: 25,
    ascent: 1567,
    grade: 4,
    time: {
      naismith: 8.75,
      walkHighlands: '7 - 10 hours',
    },
    munros: [
      {
        name: 'Sgùrr na Ruaidhe',
        uri: '/munros/sgurr-na-ruaidhe',
      },
      {
        name: 'Càrn nan Gobhar',
        uri: '/munros/carn-nan-gobhar-strathfarrar',
      },
      {
        name: "Sgùrr a' Choire Ghlais",
        uri: '/munros/sgurr-a-choire-ghlais',
      },
      {
        name: 'Sgùrr Fhuar-thuill',
        uri: '/munros/sgurr-fhuar-thuill',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Ness & Glen Affric',
        group: 'Glen Affric, Strathfarrar and Beauly',
      },
      steveFallon: {
        area: 'Affric, Cannich and Strathfarrar',
        group: 'Strathfarrar',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/lochness/Tollcreagach.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhqn0q0b',
    title: "Tom a' Chòinich and Toll Creagach, Glen Affric",
    desc: "These are the easiest of the Munros to reach from Glen Affric, but still a substantial walk. The two peaks are contrasting in character; Toll Creagach is a very rounded mountain with mossy upper slopes, but Tom a' Chòinich is a more shapely peak with rocky ridges.",
    image:
      'loch_ness___glen_affric_tom_a__ch_inich_and_toll_creagach__glen_affric.jpg',
    rating: 3.65,
    distance: 16.5,
    ascent: 1096,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Toll Creagach',
        uri: '/munros/toll-creagach',
      },
      {
        name: "Tom a' Chòinich",
        uri: '/munros/tom-a-choinich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Loch Ness & Glen Affric',
        group: 'Glen Affric, Strathfarrar and Beauly',
      },
      steveFallon: {
        area: 'Affric, Cannich and Strathfarrar',
        group: 'Mullardoch circuit',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/mull/ben-more-mull.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-More/forecasts/965',
    title: 'Ben More (Mull) from Dhiseig',
    desc: "This is the most straightforward route up and down Ben More, Mull's only Munro, and makes for a great hillwalk avoiding the need for any scrambling. Phone the Benmore Estate (01680 300229) Aug - 20 Oct for dates of deer stalking - no stalking on Sundays.",
    image: 'isle_of_mull_ben_more__mull__from_dhiseig.jpg',
    rating: 4.14,
    distance: 9.25,
    ascent: 945,
    grade: 3,
    time: {
      naismith: 4,
      walkHighlands: '5 - 6.5 hours',
    },
    munros: [
      {
        name: 'Ben More (Mull)',
        uri: '/munros/ben-more-mull',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Mull',
        group: 'Salen, Craignure and Central Mull',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Mull',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/beinn-a-ghlo.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-a-Ghlo/forecasts/1129',
    title: "Beinn a' Ghlò",
    desc: "More a range of hills than a single peak, Beinn a' Ghlò has three Munro summits giving a strenuous day. The summits may be rounded, but the steep flanks and sculpted form of this great massif makes for a memorable outing.",
    image: 'perthshire_beinn_a__ghl_.jpg',
    rating: 3.66,
    distance: 22,
    ascent: 1239,
    grade: 4,
    time: {
      naismith: 7.5,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Càrn Liath',
        uri: '/munros/carn-liath-beinn-a-ghlo',
      },
      {
        name: 'Braigh Coire Chruinn-bhalgain',
        uri: '/munros/braigh-coire-chruinn-bhalgain',
      },
      {
        name: 'Càrn nan Gabhar',
        uri: '/munros/carn-nan-gabhar',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Pitlochry and Blair Atholl: North Perthshire',
      },
      steveFallon: {
        area: 'Glen Garry to Braemar',
        group: "Beinn a' Ghlo",
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/beinn-dearg.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfj5xdmw2',
    title: 'Beinn Dearg from near Blair Atholl',
    desc: 'The remote position of Beinn Dearg makes for a long hillwalk, although the terrain is straightforward in good summer conditions making for fast walking. The views are extensive and with a different route for the return the route makes for an enjoyable day.',
    image: 'perthshire_beinn_dearg_from_near_blair_atholl.jpg',
    rating: 3.13,
    distance: 29,
    ascent: 990,
    grade: 4,
    time: {
      naismith: 9,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Beinn Dearg',
        uri: '/munros/beinn-dearg-blair-atholl',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Pitlochry and Blair Atholl: North Perthshire',
      },
      steveFallon: {
        area: 'Glen Garry to Braemar',
        group: 'Tarf & Tilt',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/beinn-heasgarnich.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Heasgarnich/forecasts/1078',
    title: 'Creag Mhòr and Beinn Heasgarnich',
    desc: 'These two Munros give one of the more challenging outings for baggers in this part of the Highlands, requiring experience as it crosses some potentially difficult pathless terrain. Creag Mhòr is steep and craggy on the ascent with much character; Beinn Heasgarnich is a fine viewpoint but has a tricky descent with vast areas of peat bog.',
    image: 'perthshire_creag_mh_r_and_beinn_heasgarnich.jpg',
    rating: 2.54,
    distance: 25.75,
    ascent: 1470,
    grade: 4,
    time: {
      naismith: 9,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Creag Mhor',
        uri: '/munros/creag-mhor-glen-lochay',
      },
      {
        name: 'Beinn Heasgarnich',
        uri: '/munros/beinn-heasgarnich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lochay',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/ben-chonzie.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Chonzie/forecasts/931',
    title: 'Ben Chonzie via Glen Lednock',
    desc: 'An easier ascent by Munro standards, Ben Chonzie can be climbed in a long half day and is the highest summit in a large area of heather moorland.',
    image: 'perthshire_ben_chonzie_via_glen_lednock.jpg',
    rating: 2.94,
    distance: 12.5,
    ascent: 712,
    grade: 3,
    time: {
      naismith: 4.25,
      walkHighlands: '4 - 5 hours',
    },
    munros: [
      {
        name: 'Ben Chonzie',
        uri: '/munros/ben-chonzie',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Crieff and Strathearn',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Crieff and Loch Earn',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/ben-lawers.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Lawers/forecasts/1204',
    title: 'Ben Lawers and Beinn Ghlas',
    desc: 'Ben Lawers - the tenth highest Munro - is the culminating point of the sprawling range of mountains on the north side of Loch Tay. Its great height is undermined by a high level car park to begin the ascent, and this is one of the most popular hills in Scotland. A second Munro - Beinn Ghlas - is crossed en-route and is barely noticed by many.',
    image: 'perthshire_ben_lawers_and_beinn_ghlas.jpg',
    rating: 3.62,
    distance: 11,
    ascent: 942,
    grade: 3,
    time: {
      naismith: 4.25,
      walkHighlands: '4 - 6 hours',
    },
    munros: [
      {
        name: 'Beinn Ghlas',
        uri: '/munros/beinn-ghlas',
      },
      {
        name: 'Ben Lawers',
        uri: '/munros/ben-lawers',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Lawers',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/ben-vorlich.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Vorlich-Loch-Earn/forecasts/985',
    title: "Ben Vorlich and Stùc a' Chròin",
    desc: "These two Munros on the southern fringe of the Highlands appear as an identical pair in many distant views. Closer up, they are more different. Ben Vorlich is a very popular hillwalk from Loch Earn and a fine viewpoint, whilst the continuation to Stùc a' Chròin is a more serious walk with steep, rocky ground.",
    image: 'perthshire_ben_vorlich_and_st_c_a__chr_in.jpg',
    rating: 3.54,
    distance: 14.5,
    ascent: 1145,
    grade: 4,
    time: {
      naismith: 5.5,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Ben Vorlich',
        uri: '/munros/ben-vorlich-loch-earn',
      },
      {
        name: "Stùc a'Chròin",
        uri: '/munros/stuc-a-chroin',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Crieff and Strathearn',
      },
      steveFallon: {
        area: 'Loch Lomond to Loch Tay',
        group: 'Crieff and Loch Earn',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/carn-a-chlamain.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-a-Chlamain/forecasts/963',
    title: "Càrn a'Chlamain",
    desc: "Càrn a' Chlamain is the relatively minor stony summit rising above a spacious and very remote plateau. The approach is up scenic Glen Tilt, one of the Highlands' most beautiful glens and it is this that makes the walk a minor classic.",
    image: 'perthshire_c_rn_a_chlamain.jpg',
    rating: 3.64,
    distance: 26,
    ascent: 930,
    grade: 4,
    time: {
      naismith: 8,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Càrn a Chlamain',
        uri: '/munros/carn-a-chlamain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Pitlochry and Blair Atholl: North Perthshire',
      },
      steveFallon: {
        area: 'Glen Garry to Braemar',
        group: 'Tarf & Tilt',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/carn-mairg.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Carn-Gorm/forecasts/1029',
    title: 'Càrn Gorm, Meall Garbh, Càrn Mairg and Creag Mhòr',
    desc: 'These four Munros on the north side of Glen Lyon lie on a mostly very broad and undulating ridge. With excellent views over the glen to the Lawers range, and over Loch Rannoch, the group give a very satisfying round on a clear day.',
    image: 'perthshire_c_rn_gorm__meall_garbh__c_rn_mairg_and_creag_mh_r.jpg',
    rating: 3.39,
    distance: 17.5,
    ascent: 1302,
    grade: 4,
    time: {
      naismith: 6.5,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Càrn Gorm',
        uri: '/munros/carn-gorm',
      },
      {
        name: 'Meall Garbh',
        uri: '/munros/meall-garbh-carn-mairg',
      },
      {
        name: 'Càrn Mairg',
        uri: '/munros/carn-mairg',
      },
      {
        name: 'Creag Mhòr',
        uri: '/munros/creag-mhor-meall-na-aighean',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lyon',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/glas-tulaichean.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Glas-Tulaichean/forecasts/1051',
    title: 'Glas Tulaichean and Càrn an Rìgh, Spittal of Glenshee',
    desc: "This pair of Munros lie out in the empty lands of the Mounth between Beinn a'Ghlò and Glen Shee. Glas Tulaichean has a track almost right to the summit but good views, whilst Càrn an Rìgh is a less shapely but much wilder and more remote.",
    image:
      'perthshire_glas_tulaichean_and_c_rn_an_r_gh__spittal_of_glenshee.jpg',
    rating: 3.1,
    distance: 27,
    ascent: 1085,
    grade: 4,
    time: {
      naismith: 8.5,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: 'Glas Tulaichean',
        uri: '/munros/glas-tulaichean',
      },
      {
        name: 'Càrn an Rìgh',
        uri: '/munros/carn-an-righ',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Dunkeld, Blairgowrie and Glen Shee',
      },
      steveFallon: {
        area: 'Glen Garry to Braemar',
        group: 'Above Glen Ey',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/meall-buidhe.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Meall-Buidhe-Glen-Lyon/forecasts/932',
    title: 'Meall Buidhe',
    desc: 'This straightforward Munro makes a pleasant walk with good views over Loch an Dàimh, the Trossachs, Rannoch Moor and the mountains further north on a clear day. The route can be boggy in parts and is often combined with Stuchd an Lochain on the other side of the dam to make a full day.',
    image: 'perthshire_meall_buidhe.jpg',
    rating: 2.74,
    distance: 8.5,
    ascent: 551,
    grade: 3,
    time: {
      naismith: 3,
      walkHighlands: '2.5 - 3.5 hours',
    },
    munros: [
      {
        name: 'Meall Buidhe',
        uri: '/munros/meall-buidhe-glen-lyon',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lyon',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/meall-corranaich.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhcz1dum',
    title: "Meall Corranaich and Meall a'Choire Lèith",
    desc: 'These two Munros form the westward end of the great Ben Lawers ridge. The start at almost 550 metres makes this a short round for baggers but the terrain is very rough - and peat bogs unavoidable.',
    image: 'perthshire_meall_corranaich_and_meall_a_choire_l_ith.jpg',
    rating: 2.83,
    distance: 9.5,
    ascent: 740,
    grade: 4,
    time: {
      naismith: 3.5,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Meall Corranaich',
        uri: '/munros/meall-corranaich',
      },
      {
        name: "Meall a' Choire Lèith",
        uri: '/munros/meall-a-choire-leith',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Lawers',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/meall-garbh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/An-Stuc/forecasts/1118',
    title: 'Meall Greigh, Meall Garbh and An Stùc',
    desc: 'The eastern three Munros of the Lawers range give an excellent circuit of the corrie holding Lochan nan Cat, the finest feature of the range. The recently-promoted Munro of An Stùc involves a steep scramble and this route is much more challenging than the usual trade route to Ben Lawers itself. The walk can easily be extended to take in the higher summit.',
    image: 'perthshire_meall_greigh__meall_garbh_and_an_st_c.jpg',
    rating: 3.81,
    distance: 16.5,
    ascent: 1230,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Meall Greigh',
        uri: '/munros/meall-greigh',
      },
      {
        name: 'Meall Garbh',
        uri: '/munros/meall-garbh-ben-lawers',
      },
      {
        name: 'An Stùc',
        uri: '/munros/an-stuc',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Lawers',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/meall-ghaordaidh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Meall-Ghaordaidh/forecasts/1039',
    title: 'Meall Ghaordaidh from Glen Lochay',
    desc: 'Meall Ghaordaidh (named on some OS maps as Meall Ghaordie) is one of the less distinguished Munros, the usual ascent from Glen Lochay being up a broad grassy shoulder, though the upper section is rockier and the summit rewards with a good view. The Glen Lyon side looks more interesting but is little visited.',
    image: 'perthshire_meall_ghaordaidh_from_glen_lochay.jpg',
    rating: 2.8,
    distance: 9.5,
    ascent: 895,
    grade: 3,
    time: {
      naismith: 3.75,
      walkHighlands: '4 - 6 hours',
    },
    munros: [
      {
        name: 'Meall Ghaordaidh',
        uri: '/munros/meall-ghaordaidh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lochay',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/meall-nan-tarmachan.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Meall-nan-Tarmachan/forecasts/1043',
    title: 'The Tarmachan Ridge',
    desc: 'Meall nan Tarmachan is one of the easier Munros to reach in good weather thanks to a high level start point, but it is really just the start of a rocky ridge traverse which is one of the most interesting in the Southern Highlands. There is a short, avoidable scramble on the descent from Meall Garbh.',
    image: 'perthshire_the_tarmachan_ridge.jpg',
    rating: 4,
    distance: 13,
    ascent: 783,
    grade: 4,
    time: {
      naismith: 4.5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Meall nan Tarmachan',
        uri: '/munros/meall-nan-tarmachan',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Lawers',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/sgiath-chuil.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgiath-Chuil/forecasts/921',
    title: 'Sgiath Chùil and Meall Glas from Glen Lochay',
    desc: 'These two rather neglected Munros are divided by a very steep-sided and low bealach, making the ascent of both into a strenuous day. More usually climbed via a boggy approach from Glen Dochart to the south, this northerly route gives slightly drier going but involves a river crossing near the start.',
    image: 'perthshire_sgiath_ch_il_and_meall_glas_from_glen_lochay.jpg',
    rating: 2.54,
    distance: 20.5,
    ascent: 1250,
    grade: 4,
    time: {
      naismith: 7.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Sgiath Chùil',
        uri: '/munros/sgiath-chuil',
      },
      {
        name: 'Meall Glas',
        uri: '/munros/meall-glas',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lochay',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/schiehallion.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Schiehallion/forecasts/1083',
    title: 'Schiehallion',
    desc: "One of Scotland's best known hills, Schiehallion is one of the easiest Munros to climb on a fine summers day. It takes the form of a broad ridge, with the famous conical appearance only apparent from across Loch Rannoch.",
    image: 'perthshire_schiehallion.jpg',
    rating: 3.37,
    distance: 10,
    ascent: 731,
    grade: 3,
    time: {
      naismith: 3.75,
      walkHighlands: '4 - 6 hours',
    },
    munros: [
      {
        name: 'Schiehallion',
        uri: '/munros/schiehallion',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Pitlochry and Blair Atholl: North Perthshire',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lyon',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/perthshire/stuchd-an-lochain.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Stuchd-an-Lochain/forecasts/960',
    title: 'Stuchd an Lochain',
    desc: 'With a start at over 400 metres, Stuchd an Lochain gives a short ascent for a Munro. The initial climb is steep and boggy but the ridge traverse that follows around above the corrie cradling little Lochan nan Cat, is a delight, and the summit views are superb.',
    image: 'perthshire_stuchd_an_lochain.jpg',
    rating: 3.41,
    distance: 8.5,
    ascent: 726,
    grade: 4,
    time: {
      naismith: 3.25,
      walkHighlands: '3.5 - 4.5 hours',
    },
    munros: [
      {
        name: 'Stuchd an Lochain',
        uri: '/munros/stuchd-an-lochain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Perthshire',
        group: 'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      },
      steveFallon: {
        area: 'Loch Tay to Rannoch Moor',
        group: 'Glen Lyon',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/ambasteir.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Am-Basteir/forecasts/934',
    title: 'Am Basteir',
    desc: "Am Basteir ('The Executioner') is a spectacular peak at the back of Coire Basteir, in the centre of the famous view from Sligachan, accompanied by the jagged Basteir Tooth. The ascent of the ridge is an airy scramble with a notorious 'bad step' - but the whole walk is through stunning surroundings.",
    image: 'isle_of_skye_am_basteir.jpg',
    rating: 3.44,
    distance: 14,
    ascent: 1175,
    grade: 5,
    time: {
      naismith: 5.5,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Am Basteir',
        uri: '/munros/am-basteir',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/blabheinn.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Bla-Bheinn/forecasts/928',
    title: 'Blà Bheinn (Blaven)',
    desc: 'Blà Bheinn is one of the most magnificent mountains in Britain; a great isolated citadel of rock with fabulous views and all the character of the main Cuillin Ridge. Its ascent is straightforward by Cuillin standards but very rocky.',
    image: 'isle_of_skye_bl__bheinn__blaven_.jpg',
    rating: 4.28,
    distance: 8,
    ascent: 990,
    grade: 4,
    time: {
      naismith: 3.75,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Blà Bheinn',
        uri: '/munros/bla-bheinn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'Broadford and Elgol',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Skye, Strathaird',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/bruachnafrithe.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Bruach-Na-Frithe/forecasts/958',
    title: 'Bruach na Frithe',
    desc: 'Bruach na Frithe is one of the easiest of the Cuillin summits to reach as well as one of the finest viewpoints, but the walk still crosses much extremely rocky and rough terrain. Navigation is very difficult in mist, especially as compasses do not function correctly on the ridge.',
    image: 'isle_of_skye_bruach_na_frithe.jpg',
    rating: 3.57,
    distance: 13.75,
    ascent: 947,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Bruach na Frithe',
        uri: '/munros/bruach-na-frithe',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/innpinn.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-Dearg/forecasts/986',
    title: 'Sgùrr Dearg and the In Pinn',
    desc: 'The summit of Sgùrr Dearg is truly fantastic viewpoint, but is better known as of the most dramatic spots on the Cuillin ridge, being overtopped by the improbable tower of the Inaccessible Pinnacle. This circuit visits the base of the pinnacle but does not include the ascent, which is a rock-climb. Even omitting the pinnacle, this is an extremely rough walk with a great deal of rocky terrain, some scrambling and very tricky route-finding.',
    image: 'isle_of_skye_sg_rr_dearg_and_the_in_pinn.jpg',
    rating: 4.25,
    distance: 8,
    ascent: 1065,
    grade: 5,
    time: {
      naismith: 3.75,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Inaccessible Pinnacle',
        uri: '/munros/inaccessible-pinnacle',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/sgurr-mhic-choinnich.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-Mhic-Choinnich/forecasts/948',
    title: 'Sgùrr Mhic Chòinnich',
    desc: 'Sgùrr Mhic Chòinnich is one of the most difficult of the Cuillin Munros to reach for non rock-climbers. The final approach along the ridge is an exposed and in places difficult scramble; the rock scenery throughout is superb.',
    image: 'isle_of_skye_sg_rr_mhic_ch_innich.jpg',
    rating: 4.22,
    distance: 11,
    ascent: 950,
    grade: 5,
    time: {
      naismith: 4.25,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Sgùrr Mhic Chòinich',
        uri: '/munros/sgurr-mhic-choinnich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/sgurraghreadaidh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-a-Ghreadaidh/forecasts/973',
    title: 'Sgùrr a Mhadaidh and Sgùrr a Ghreadaidh',
    desc: 'Twin-topped Sgùrr a Ghreadaidh is the highest peak on the northern half of the Cuillin Ridge; it can be climbed either with its neighbour Sgùrr a Mhadaidh or on separate excursions; both peaks involve tough scrambling but have fantastic views.',
    image: 'isle_of_skye_sg_rr_a_mhadaidh_and_sg_rr_a_ghreadaidh.jpg',
    rating: 3.56,
    distance: 9.5,
    ascent: 997,
    grade: 5,
    time: {
      naismith: 4,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: "Sgùrr a' Ghreadaidh",
        uri: '/munros/sgurr-a-ghreadaidh',
      },
      {
        name: "Sgùrr a' Mhadaidh",
        uri: '/munros/sgurr-a-mhadaidh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/sgurralasdair.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-Alasdair/forecasts/992',
    title: 'Sgùrr Alasdair',
    desc: 'Sgùrr Alasdair is the highest peak on Skye - and indeed, the highest UK island summit. The tiny summit is an amazing viewpoint but reaching it involves an arduous slog up scree.',
    image: 'isle_of_skye_sg_rr_alasdair.jpg',
    rating: 3.52,
    distance: 9.5,
    ascent: 992,
    grade: 5,
    time: {
      naismith: 4,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Sgùrr Alasdair',
        uri: '/munros/sgurr-alasdair',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/sgurrnabanachdich.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-na-Banachdich/forecasts/965',
    title: 'Sgùrr na Banachdich',
    desc: 'Sgùrr na Banachdich is the mid-point of the Cuillin Ridge, and is the only Munro in the Cuillin where hands are not needed to make the ascent. The views along the ridge and down to Loch Coruisk are sensational.',
    image: 'isle_of_skye_sg_rr_na_banachdich.jpg',
    rating: 3.46,
    distance: 7.5,
    ascent: 936,
    grade: 4,
    time: {
      naismith: 3.5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Sgùrr na Banachdich',
        uri: '/munros/sgurr-na-banachdich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/sgurrnaneag.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gf5t6sr1j',
    title: 'Southern Cuillin and Coire Ghrunnda',
    desc: 'The southernmost Cuillin peaks have the finest sea views in the whole range, and give a long, rough day. Sgùrr nan Eag involves moderate scrambling; Sgùrr Dubh Mòr (which can be omitted) is a hard scramble.',
    image: 'isle_of_skye_southern_cuillin_and_coire_ghrunnda.jpg',
    rating: 3.24,
    distance: 15,
    ascent: 1159,
    grade: 5,
    time: {
      naismith: 5.75,
      walkHighlands: '7 - 11 hours',
    },
    munros: [
      {
        name: 'Sgùrr nan Eag',
        uri: '/munros/sgurr-nan-eag',
      },
      {
        name: 'Sgùrr Dubh Mòr',
        uri: '/munros/sgurr-dubh-mor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/skye/sgurrnangillean.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-nan-Gillean/forecasts/964',
    title: 'Sgùrr nan Gillean',
    desc: 'Sgùrr nan Gillean is perhaps the most famous of the Cuillin peaks - a popular route with a difficult scramble to the summit and fantastic views at all times.',
    image: 'isle_of_skye_sg_rr_nan_gillean.jpg',
    rating: 4.27,
    distance: 12,
    ascent: 985,
    grade: 5,
    time: {
      naismith: 4.75,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Sgùrr nan Gillean',
        uri: '/munros/sgurr-nan-gillean',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Isle of Skye',
        group: 'The Cuillin and Minginish',
      },
      steveFallon: {
        area: 'The Islands',
        group: 'Cuillin of Skye',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/sutherland/ben-hope.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Hope/forecasts/927',
    title: 'Ben Hope',
    desc: 'The most northerly of the Munros, Ben Hope rises as a fine isolated peak and is a magnificent viewpoint. The ascent is short but steep and gives a grand introduction to the vast wilderness of the extreme North.',
    image: 'sutherland_and_caithness_ben_hope.jpg',
    rating: 3.8,
    distance: 7.5,
    ascent: 946,
    grade: 3,
    time: {
      naismith: 3.5,
      walkHighlands: '4 - 6 hours',
    },
    munros: [
      {
        name: 'Ben Hope',
        uri: '/munros/ben-hope',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Sutherland and Caithness',
        group: 'Durness, Tongue and Scourie',
      },
      steveFallon: {
        area: 'Far North',
        group: 'Strath More',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/sutherland/ben-klibreck.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Ben-Klibreck/forecasts/962',
    title: 'Ben Klibreck',
    desc: 'Ben Klibreck is a huge, isolated massif rising high at the heart of the vast, empty moorlands that comprise the central part of Sutherland. This route avoids the worst of the bogs by making an enjoyable approach along the ridge, through there are still a couple of wet sections. The fabulous summit views are of a remarkably empty land.',
    image: 'sutherland_and_caithness_ben_klibreck.jpg',
    rating: 3.04,
    distance: 14.25,
    ascent: 930,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Ben Klibreck',
        uri: '/munros/ben-klibreck',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Sutherland and Caithness',
        group: 'Durness, Tongue and Scourie',
      },
      steveFallon: {
        area: 'Far North',
        group: 'Strath Vagastie',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Beinnalligin.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Alligin/forecasts/986',
    title: 'Beinn Alligin',
    desc: 'Beinn Alligin means the Mountain of Beauty or Jeweled Mountain - and it lives up to the name. This is the easiest of the three famous Torridon ridge traverses, with spectacular views and stunning terrain. It includes a traverse of the Horns, which offer reasonably straightforward summer scrambling.',
    image: 'torridon_and_gairloch_beinn_alligin.jpg',
    rating: 4.4,
    distance: 10.5,
    ascent: 1190,
    grade: 5,
    time: {
      naismith: 4.5,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Sgùrr Mòr',
        uri: '/munros/sgurr-mor-beinn-alligin',
      },
      {
        name: 'Tom na Gruagaich',
        uri: '/munros/tom-na-gruagaich-beinn-alligin',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Torridon: Shieldaig and Kinlochewe',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Beinn Alligin',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Beinneighe.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Eighe/forecasts/1010',
    title: 'Beinn Eighe (western summits)',
    desc: "Beinn Eighe is the bulkiest of the trinity of great Torridon peaks. The western half of its ridge contains both of its two Munros. This section of the ridge makes a fine traverse with magnificent views; it may involve less scrambling than Beinn Alligin or Liathach, but compensation comes when Coire Mhic Fhearchair is reached during the descent; this is the most spectacular of all Torridon's corries.",
    image: 'torridon_and_gairloch_beinn_eighe__western_summits_.jpg',
    rating: 4.23,
    distance: 18,
    ascent: 1116,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '7 - 9 hours',
    },
    munros: [
      {
        name: 'Ruadh-Stac Mòr',
        uri: '/munros/ruadh-stac-mor-beinn-eighe',
      },
      {
        name: 'Spidean Coire nan Clach',
        uri: '/munros/spidean-coire-nan-clach-beinn-eighe',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Torridon: Shieldaig and Kinlochewe',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Beinn Eighe',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Beinnliathmhor.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Liath-Mhor/forecasts/926',
    title: 'Beinn Liath Mhor, Achnashellach',
    desc: 'Beinn Liath Mhòr takes the form of a long ridge sprinkled with white quartzite screes. It gives a fine, steep hillwalk of much character.',
    image: 'torridon_and_gairloch_beinn_liath_mhor__achnashellach.jpg',
    rating: 4.5,
    distance: 15.25,
    ascent: 1054,
    grade: 4,
    time: {
      naismith: 5.5,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Beinn Liath Mhor',
        uri: '/munros/beinn-liath-mhor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Coulin',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/bideinachoiresheasgaich.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfhq95eyg',
    title: "Bidein a' Choire Sheasgaich and Lurg Mhòr",
    desc: "A challenging expedition to climb two of the remotest Munros. The fine, pointed summit of Bidein a'Choire Sheasgaich would be more celebrated were it not hidden deep in the wilds of Monar, whilst neighbouring Lurg Mhòr is even more inaccessible. The walk can be broken up by an overnight stay in the bothy or wild camping.",
    image:
      'torridon_and_gairloch_bidein_a__choire_sheasgaich_and_lurg_mh_r.jpg',
    rating: 3.09,
    distance: 38,
    ascent: 1530,
    grade: 4,
    time: {
      naismith: 12,
      walkHighlands: '16 hours / 2 days',
    },
    munros: [
      {
        name: 'Lurg Mhor',
        uri: '/munros/lurg-mhor',
      },
      {
        name: "Bidein a' Choire Sheasgaich",
        uri: '/munros/bidein-a-choire-sheasgaich',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Monar',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Fionnbheinn.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Fionn-Bheinn/forecasts/933',
    title: 'Fionn Bheinn, Achnasheen',
    desc: "Fionn Bheinn is the forgotten hill of the area, its wide grassy (and wet) slopes contributing to its neglect. This isn't a hill to leave for a claggy day however, as the summit is a superb viewpoint.",
    image: 'torridon_and_gairloch_fionn_bheinn__achnasheen.jpg',
    rating: 2.93,
    distance: 12,
    ascent: 807,
    grade: 3,
    time: {
      naismith: 4.25,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Fionn Bheinn',
        uri: '/munros/fionn-bheinn',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Loch Maree to the Fannichs',
        group: 'Fannaichs',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Liathach.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Liathac/forecasts/1053',
    title: 'Liathach, Glen Torridon',
    desc: "Liathach is rated by many mountaineers and hillwalkers as Scotland's finest mountain, challenged only by An Teallach and the Cuillin of Skye. Its traverse is an expedition that will be remembered forever.",
    image: 'torridon_and_gairloch_liathach__glen_torridon.jpg',
    rating: 4.12,
    distance: 11.5,
    ascent: 1326,
    grade: 5,
    time: {
      naismith: 5,
      walkHighlands: '8 - 10 hours',
    },
    munros: [
      {
        name: "Spidean a' Choire Lèith",
        uri: '/munros/spidean-a-choire-leith-liathach',
      },
      {
        name: 'Mullach an Rathain',
        uri: '/munros/mullach-an-rathain-liathach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Torridon: Shieldaig and Kinlochewe',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Liathach',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/maoilelunndaidh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Maoile-Lunndaidh/forecasts/1007',
    title: 'Maoile Lunndaidh',
    desc: "Maoile Lunndaidh is sometimes referred to as Creag Toll a' Choin - more properly the name of a creag below what recent surveys have shown to be its highest point. It's a shy Munro hidden away from most viewpoints. Its initially lumpen appearance is livened up by some fine corries, and the ascent gives a long and tiring day.",
    image: 'torridon_and_gairloch_maoile_lunndaidh.jpg',
    rating: 3.13,
    distance: 26,
    ascent: 1005,
    grade: 4,
    time: {
      naismith: 8.25,
      walkHighlands: '8 - 11 hours',
    },
    munros: [
      {
        name: 'Maoile Lunndaidh',
        uri: '/munros/maoile-lunndaidh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Monar',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Maolcheandearg.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Maol-Cheann-dearg/forecasts/933',
    title: 'Maol Chean-dearg ascent, Coulags',
    desc: 'Maol Chean-dearg, named bald red head on account of its red sandstone boulder summit and lower band of white quartzite, is a  popular Munro. The ascent involves a pleasant walk in along the Fionn abhainn with good views of the prow of Meall nan Ceapairean on the way. The section of scree is steep but short and the route above this presents no difficulties. There are great views from the summit, particularly of Torridon to the north.',
    image: 'torridon_and_gairloch_maol_chean_dearg_ascent__coulags.jpg',
    rating: 3.75,
    distance: 14,
    ascent: 932,
    grade: 4,
    time: {
      naismith: 5,
      walkHighlands: '5 - 7 hours',
    },
    munros: [
      {
        name: 'Maol Chean-Dearg',
        uri: '/munros/maol-chean-dearg',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Coulin',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Moruisg.shtml',
    weatherUrl: 'https://www.mountain-forecast.com/peaks/Moruisg/forecasts/928',
    title: 'Moruisg and Sgùrr nan Ceannaichean',
    desc: 'Moruisg is rather a sprawling mountain but is a superb viewpoint. The ascent line given here has the one merit of directness, but continuing the walk onto Sgùrr na Ceannaichean follows an enjoyable ridge making for a good, fairly moderate mountain walk.',
    image: 'torridon_and_gairloch_moruisg_and_sg_rr_nan_ceannaichean.jpg',
    rating: 3.9,
    distance: 12,
    ascent: 978,
    grade: 4,
    time: {
      naismith: 4.75,
      walkHighlands: '6 - 7 hours',
    },
    munros: [
      {
        name: 'Moruisg',
        uri: '/munros/moruisg',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Monar',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Sgorrruadh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgorr-Ruadh/forecasts/962',
    title: 'Sgòrr Ruadh, Achnashellach',
    desc: 'Sgòrr Ruadh is a majestically-sculpted sandstone peak which shows an impressive face above Coire Làir. Munro-baggers often climb this peak in combination with Beinn Liath Mhor, in which case the latter peak is best climbed first.',
    image: 'torridon_and_gairloch_sg_rr_ruadh__achnashellach.jpg',
    rating: 4.1,
    distance: 16,
    ascent: 931,
    grade: 4,
    time: {
      naismith: 5.5,
      walkHighlands: '6.5 - 7 hours',
    },
    munros: [
      {
        name: 'Sgòrr Ruadh',
        uri: '/munros/sgorr-ruadh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Coulin',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Sgurrchoinnich.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-Choinnich/forecasts/999',
    title: "Sgùrr Chòinnich and Sgùrr a'Chaorachain",
    desc: 'The traverse of these two Munros gives an excellent hillwalk; an enjoyable ridge links the two summits at a high level though the approach is fairly long.',
    image: 'torridon_and_gairloch_sg_rr_ch_innich_and_sg_rr_a_chaorachain.jpg',
    rating: 2.89,
    distance: 20.5,
    ascent: 1251,
    grade: 4,
    time: {
      naismith: 7.25,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: 'Sgùrr Chòinnich',
        uri: '/munros/sgurr-choinnich',
      },
      {
        name: "Sgùrr a' Chaorachain",
        uri: '/munros/sgurr-a-chaorachain',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Glen Carron: Lochcarron to Achnasheen',
      },
      steveFallon: {
        area: 'Glen Carron and Torridon',
        group: 'Monar',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/torridon/Slioch.shtml',
    weatherUrl: 'https://www.mountain-forecast.com/peaks/Slioch/forecasts/981',
    title: 'Slioch, near Kinlochewe',
    desc: 'The view of the craggy fortress of Slioch across the waters of Loch Maree is one of the classics of Scotland featured in countless calendars. At close quarters Slioch offers a reasonably straightforward ascent given that formidable appearance, and the summit views over Loch Maree and into the Fisherfield wilderness are sensational.',
    image: 'torridon_and_gairloch_slioch__near_kinlochewe.jpg',
    rating: 4.04,
    distance: 19,
    ascent: 1144,
    grade: 4,
    time: {
      naismith: 6.75,
      walkHighlands: '8 - 9 hours',
    },
    munros: [
      {
        name: 'Slioch',
        uri: '/munros/slioch',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Torridon and Gairloch',
        group: 'Torridon: Shieldaig and Kinlochewe',
      },
      steveFallon: {
        area: 'Loch Maree to the Fannichs',
        group: 'Letterewe and Fisherfield',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/amfaochagach.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfk89scp3',
    title: 'Am Faochagach',
    desc: 'Am Faochagach is the undistinguished Munro summit of the vast rolling moorlands north of Loch Glascarnoch. Its ascent gives a wet but fairly short day, with superb views in good conditions.',
    image: 'ullapool__assynt_and_easter_ross_am_faochagach.jpg',
    rating: 3.11,
    distance: 14,
    ascent: 700,
    grade: 4,
    time: {
      naismith: 4.75,
      walkHighlands: '5 - 6 hours',
    },
    munros: [
      {
        name: 'Am Faochagach',
        uri: '/munros/am-faochagach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Far North',
        group: 'Inverlael and Strath Vaich',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/anteallach.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/An-Teallach/forecasts/1062',
    title: 'An Teallach, Dundonnell',
    desc: 'This fabled mountain is perhaps the most impressive in Britain, and gives a day of drama and views that will live in the memory forever. The full traverse is a magnificent scramble, whilst the two Munros can be reached by an easier there-and-back route.',
    image: 'ullapool__assynt_and_easter_ross_an_teallach__dundonnell.jpg',
    rating: 4.07,
    distance: 20,
    ascent: 1415,
    grade: 5,
    time: {
      naismith: 7.25,
      walkHighlands: '9 - 10 hours',
    },
    munros: [
      {
        name: 'Bidein a Ghlas Thuill',
        uri: '/munros/bidein-a-ghlas-thuill-an-teallach',
      },
      {
        name: 'Sgùrr Fiona',
        uri: '/munros/sgurr-fiona-an-teallach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Loch Maree to the Fannichs',
        group: 'An Teallach',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/beinndearg.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Beinn-Dearg-Ullapool/forecasts/1084',
    title: 'Beinn Dearg - the Four Munros circuit',
    desc: 'Beinn Dearg is the highest summit on this fine round of four Munros. The second peak, remote Cona Mheall, is on the opposite side of impressively rocky and wild Coire Ghranda whilst Meall nan Ceapraichean and Eididh nan Clach Geala extend the route to give a grand traverse with spectacular views across towards Assynt.',
    image:
      'ullapool__assynt_and_easter_ross_beinn_dearg___the_four_munros_circuit.jpg',
    rating: 3.4,
    distance: 27,
    ascent: 1569,
    grade: 4,
    time: {
      naismith: 9.25,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Beinn Dearg',
        uri: '/munros/beinn-dearg-ullapool',
      },
      {
        name: 'Cona Mheall',
        uri: '/munros/cona-mheall',
      },
      {
        name: 'Meall nan Ceapraichean',
        uri: '/munros/meall-nan-ceapraichean',
      },
      {
        name: 'Eididh nan Clach Geala',
        uri: '/munros/eididh-nan-clach-geala',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Far North',
        group: 'Inverlael and Strath Vaich',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/benmoreassynt.shtml',
    weatherUrl: 'https://www.mountain-forecast.com/peaks/Conival/forecasts/987',
    title: 'Ben More Assynt and Conival',
    desc: 'The only Munros in Assynt, these two rocky mountains are connected by a fine ridge. Together they give a very rough but rewarding ascent combined with the amazing views characteristic of all the Assynt peaks.',
    image: 'ullapool__assynt_and_easter_ross_ben_more_assynt_and_conival.jpg',
    rating: 4,
    distance: 17.25,
    ascent: 1077,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '8.5 - 10 hours',
    },
    munros: [
      {
        name: 'Conival',
        uri: '/munros/conival',
      },
      {
        name: 'Ben More Assynt',
        uri: '/munros/ben-more-assynt',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Assynt and Coigach',
      },
      steveFallon: {
        area: 'Far North',
        group: 'Assynt',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/fannichs.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Sgurr-Mor-Fannichs/forecasts/1110',
    title: 'Sgùrr Mòr and the eastern Fannichs',
    desc: 'The main, eastern range of the Fannichs is a magnificent ridge-walk taking in four Munros. The price to be paid however is the tough, rugged and boggy approach across the moors - and, more especially, the long return walk from An Coileachan.',
    image:
      'ullapool__assynt_and_easter_ross_sg_rr_m_r_and_the_eastern_fannichs.jpg',
    rating: 2.93,
    distance: 24.75,
    ascent: 1435,
    grade: 4,
    time: {
      naismith: 8.5,
      walkHighlands: '9 - 11 hours',
    },
    munros: [
      {
        name: 'Beinn Liath Mhòr Fannaich',
        uri: '/munros/beinn-liath-mhor-fannaich',
      },
      {
        name: 'Sgùrr Mòr',
        uri: '/munros/sgurr-mor',
      },
      {
        name: 'Meall Gorm',
        uri: '/munros/meall-gorm',
      },
      {
        name: 'An Coileachan',
        uri: '/munros/an-coileachan',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Loch Maree to the Fannichs',
        group: 'Fannaichs',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/fisherfield-6.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/A_Mhaighdean/forecasts/967',
    title: 'Fisherfield 6, from Shenavall',
    desc: 'The Fisherfield Forest - also known as the Great Wilderness - contains the remotest Munros in all Scotland. The effort required is fully repaid, however, as this is a spectacular region of dramatic peaks and ridges - the views from the summits are often claimed to be the finest in Scotland. The route is an epic round of all five Munros and one Corbett, starting and finishing at Shenavall bothy or a nearby wild camp.',
    image: 'ullapool__assynt_and_easter_ross_fisherfield_6__from_shenavall.jpg',
    rating: 3.58,
    distance: 29,
    ascent: 2254,
    grade: 5,
    time: {
      naismith: 11,
      walkHighlands: '12 - 18 hours',
    },
    munros: [
      {
        name: 'Sgùrr Ban',
        uri: '/munros/sgurr-ban',
      },
      {
        name: 'Mullach Coire Mhic Fhearchair',
        uri: '/munros/mullach-coire-mhic-fhearchair',
      },
      {
        name: 'Beinn Tarsuinn',
        uri: '/munros/beinn-tarsuinn',
      },
      {
        name: "A' Mhaighdean",
        uri: '/munros/a-mhaighdean',
      },
      {
        name: 'Ruadh Stac Mòr',
        uri: '/munros/ruadh-stac-mor',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Loch Maree to the Fannichs',
        group: 'Letterewe and Fisherfield',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/seana-bhraigh.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Seana-Bhraigh/forecasts/927',
    title: 'Seana Bhràigh',
    desc: 'Seana Bhràigh is a remote Munro with dramatic northern cliffs and great wilderness views. A long walk, with sections which could be difficult to navigate in poor visibility. The forestry track can be cycled to save 5km of walking.',
    image: 'ullapool__assynt_and_easter_ross_seana_bhr_igh.jpg',
    rating: 4.2,
    distance: 27,
    ascent: 1095,
    grade: 4,
    time: {
      naismith: 8.5,
      walkHighlands: '9 - 10 hours',
    },
    munros: [
      {
        name: 'Seana Bhràigh',
        uri: '/munros/seana-bhraigh',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Far North',
        group: 'Inverlael and Strath Vaich',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/sgurrbreac.shtml',
    weatherUrl: 'https://www.metoffice.gov.uk/weather/forecast/gfk2hnhs1',
    title: "Sgùrr Breac and A' Chailleach: The Western Fannichs",
    desc: 'These rewarding Munros offer a fine outing with superb views over Loch Fannich, An Teallach and the Fisherfield. The ridges offer fine walking, but the descent route is steep and rough and there is a great deal of boggy terrain lower down.',
    image:
      'ullapool__assynt_and_easter_ross_sg_rr_breac_and_a__chailleach__the_western_fannichs.jpg',
    rating: 3.54,
    distance: 16,
    ascent: 1127,
    grade: 4,
    time: {
      naismith: 6,
      walkHighlands: '6 - 8 hours',
    },
    munros: [
      {
        name: 'Sgùrr Breac',
        uri: '/munros/sgurr-breac',
      },
      {
        name: "A' Chailleach",
        uri: '/munros/a-chailleach',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Loch Maree to the Fannichs',
        group: 'Fannaichs',
      },
    },
  },
  {
    url: 'https://www.walkhighlands.co.uk/ullapool/sgurrnanclachgeala.shtml',
    weatherUrl:
      'https://www.mountain-forecast.com/peaks/Meall-a-Chrasgaidh/forecasts/934',
    title: 'Sgùrr nan Clach Geala, near Braemore',
    desc: "Sgùrr nan Clach Geala is the finest of the Fannichs, with its impressive eastern corrie. In combination with the neighbouring Munros of Meall a' Chrasgaidh and Sgùrr nan Each it gives an excellent ridgewalk.",
    image:
      'ullapool__assynt_and_easter_ross_sg_rr_nan_clach_geala__near_braemore.jpg',
    rating: 3.86,
    distance: 18,
    ascent: 1103,
    grade: 4,
    time: {
      naismith: 6.25,
      walkHighlands: '7 - 8 hours',
    },
    munros: [
      {
        name: "Meall a' Chrasgaidh",
        uri: '/munros/meall-a-chrasgaidh',
      },
      {
        name: 'Sgùrr nan Clach Geala',
        uri: '/munros/sgurr-nan-clach-geala',
      },
      {
        name: 'Sgùrr nan Each',
        uri: '/munros/sgurr-nan-each',
      },
    ],
    location: {
      walkHighlands: {
        area: 'Ullapool, Assynt and Easter Ross',
        group: 'Ullapool and Dundonnell',
      },
      steveFallon: {
        area: 'Loch Maree to the Fannichs',
        group: 'Fannaichs',
      },
    },
  },
]
