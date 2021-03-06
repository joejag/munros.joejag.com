import { Area, Trip } from '../biz/types'

export const STEVE_FALLON_ALTERNATIVES_FOR_AREA: { [area: string]: string } = {
  'Loch Lomond to Loch Tay': 'https://www.stevenfallon.co.uk/routessouth.html',
  'Loch Tay to Rannoch Moor': 'https://www.stevenfallon.co.uk/routessouth.html',
  'Strath Orchy to Glencoe':
    'https://www.stevenfallon.co.uk/routescentral.html',
  'Loch Linnhe to Loch Ericht':
    'https://www.stevenfallon.co.uk/routescentral.html',
  'Drumochter Hills': 'https://www.stevenfallon.co.uk/routescentral.html',
  'Glen Garry to Braemar': 'https://www.stevenfallon.co.uk/routeseast.html',
  'Glenshee to Mount Keen': 'https://www.stevenfallon.co.uk/routeseast.html',
  'Cairngorms and Glen Feshie':
    'https://www.stevenfallon.co.uk/routeseast.html',
  'Monadh Liath and Creag Meagaidh':
    'https://www.stevenfallon.co.uk/routescentral.html',
  'Loch Eil to Glen Shiel': 'https://www.stevenfallon.co.uk/routeswest.html',
  'Kintail and Glen Shiel': 'https://www.stevenfallon.co.uk/routeswest.html',
  'Affric, Cannich and Strathfarrar':
    'https://www.stevenfallon.co.uk/routeswest.html',
  'Glen Carron and Torridon': 'https://www.stevenfallon.co.uk/routesnorth.html',
  'Loch Maree to the Fannichs':
    'https://www.stevenfallon.co.uk/routesnorth.html',
  'Far North': 'https://www.stevenfallon.co.uk/routesnorth.html',
  'The Islands': 'https://www.stevenfallon.co.uk/routesislands.html',
}

export const STEVE_FALLON_ALTERNATIVES_FOR_GROUP: {
  [group: string]: { name: string; url: string; munros: number }[]
} = {
  'Ben Lomond and Arrochar Alps': [
    {
      name: 'Arrochar Alps',
      url: 'https://www.stevenfallon.co.uk/arrochar.html',
      munros: 4,
    },
  ],
  'Ben Lui group': [
    {
      name: 'Ben Lui & neighbouring Munros',
      url: 'https://www.stevenfallon.co.uk/luimunros.html',
      munros: 4,
    },
  ],
  'Glen Lochay': [
    {
      name: 'Glen Lochay Munros',
      url: 'https://www.stevenfallon.co.uk/lochaymunros.html',
      munros: 5,
    },
  ],
  'Above Orchy': [
    {
      name: 'Bridge of Orchy Munros',
      url: 'https://www.stevenfallon.co.uk/dorainmunros.html',
      munros: 5,
    },
  ],
  Lawers: [
    {
      name: 'Ben Lawers Range',
      url: 'https://www.stevenfallon.co.uk/lawers.html',
      munros: 7,
    },
  ],
  Cruachan: [
    {
      name: 'Ben Cruachan and the Kinglass peaks',
      url: 'https://www.stevenfallon.co.uk/cruachanroute.html',
      munros: 4,
    },
  ],
  'East of Etive': [
    {
      name: 'Ben Starav & neighbours',
      url: 'https://www.stevenfallon.co.uk/starav.html',
      munros: 5,
    },
  ],
  'Glen Kingie': [
    {
      name: 'Rough Bounds of Knoydart',
      url: 'https://www.stevenfallon.co.uk/ciche.html',
      munros: 5,
    },
  ],
  'Loch Chuaich (Quoich)': [
    {
      name: 'Loch Quoich Munros',
      url: 'https://www.stevenfallon.co.uk/quoich.html',
      munros: 4,
    },
  ],
  'Above Loch Cluanie': [
    {
      name: 'Munros above Loch Cluanie',
      url: 'https://www.stevenfallon.co.uk/achralaig.html',
      munros: 5,
    },
  ],
  Kintail: [
    {
      name: "Kintail's Brothers and Sisters",
      url: 'https://www.stevenfallon.co.uk/kintailroute.html',
      munros: 9,
    },
  ],
  'Mullardoch circuit': [
    {
      name: 'Mullardoch & Affric Munros',
      url: 'https://www.stevenfallon.co.uk/mullardochmunros.html',
      munros: 12,
    },
  ],
  Monar: [
    {
      name: "Monar's Munros",
      url: 'https://www.stevenfallon.co.uk/lurgmhor.html',
      munros: 6,
    },
  ],
  Coulin: [
    {
      name: 'Coulin Munros',
      url: 'https://www.stevenfallon.co.uk/coulinroute.html',
      munros: 3,
    },
  ],
  Fannaichs: [
    {
      name: 'Fannichs in the Northern Highlands',
      url: 'https://www.stevenfallon.co.uk/fannaichs.html',
      munros: 10,
    },
  ],
  'Inverlael and Strath Vaich': [
    {
      name: 'Inverlael Munros',
      url: 'https://www.stevenfallon.co.uk/seana.html',
      munros: 6,
    },
  ],
  'Cuillin of Skye': [
    {
      name: 'Sgurr nan Gillean, Am Basteir & Bruach na Frithe',
      url: 'https://www.stevenfallon.co.uk/gillean.html',
      munros: 3,
    },
    {
      name: "Skye's Black Cuillin ridge Munros (south)",
      url: 'https://www.stevenfallon.co.uk/cuillinsouth.html',
      munros: 8,
    },
  ],
}

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
    url: 'http://m.webcam-hd.com/ski-scotland/glenshee',
    description:
      'Glenshee: The Glenshee ski area webcam, looking up the Cairnwell and Carn Aosda, from Glenshee Ski and Snowboard.',
  },
  'West of Lairig Ghru': {
    url: 'https://www.visitcairngorms.com/plan-your-visit/maps-webcams/',
    description:
      'Lairig Ghru webcam: Lairig Ghru from the north-west. Comes from Visit Cairngorms',
  },
  'East of Lairig Ghru': {
    url: 'https://www.lochmorlich.com/webcam.html',
    description:
      'Loch Morlich webcam: Looking from Cairngorm Mountain down to Loch Morlich.',
  },
  'West of Loch Lochy': {
    url: 'http://www.trinum.com/ibox/ski-scotland/images/the-lecht/the-lecht1.jpg',
    description:
      'The Lecht: Looking west up Carn Mhic an Toisich. From Lecht 2900',
  },
  Mull: {
    url: 'http://mullwildlifebreaks.co.uk/craignure-ferry-terminal-webcam/',
    description: 'Live webcam Mull Wildlife Breaks at Craignure',
  },
}

export const BEST_IMAGE_FOR_AREA: {
  [area: string]: string
} = {
  'Loch Lomond to Loch Tay':
    'https://www.walkhighlands.co.uk/lochlomond/ben-vorlich-lomond.shtml',
  'Loch Tay to Rannoch Moor':
    'https://www.walkhighlands.co.uk/perthshire/schiehallion.shtml',
  'Strath Orchy to Glencoe':
    'https://www.walkhighlands.co.uk/fortwilliam/buachailleetivemor.shtml',
  'Loch Linnhe to Loch Ericht':
    'https://www.walkhighlands.co.uk/fortwilliam/binneinmor.shtml',
  'Drumochter Hills':
    'https://www.walkhighlands.co.uk/cairngorms/carn-na-caim.shtml',
  'Glen Garry to Braemar':
    'https://www.walkhighlands.co.uk/perthshire/beinn-a-ghlo.shtml',
  'Glenshee to Mount Keen':
    'https://www.walkhighlands.co.uk/cairngorms/white-mounth.shtml',
  'Cairngorms and Glen Feshie':
    'https://www.walkhighlands.co.uk/cairngorms/macdui-cairngorm.shtml',
  'Monadh Liath and Creag Meagaidh':
    'https://www.walkhighlands.co.uk/cairngorms/monadhliath.shtml',
  'Loch Eil to Glen Shiel':
    'https://www.walkhighlands.co.uk/fortwilliam/ladhar-bheinn.shtml',
  'Kintail and Glen Shiel':
    'https://www.walkhighlands.co.uk/kintail/Thesaddle.shtml',
  'Affric, Cannich and Strathfarrar':
    'https://www.walkhighlands.co.uk/lochness/Ceathreamhnan.shtml',
  'Glen Carron and Torridon':
    'https://www.walkhighlands.co.uk/torridon/Beinneighe.shtml',
  'Loch Maree to the Fannichs':
    'https://www.walkhighlands.co.uk/ullapool/sgurrnanclachgeala.shtml',
  'Far North': 'https://www.walkhighlands.co.uk/ullapool/benmoreassynt.shtml',
  'The Islands': 'https://www.walkhighlands.co.uk/skye/sgurrnabanachdich.shtml',
}

export const WALK_HIGHLANDS_MUNRO_GROUPING: Area[] = [
  {
    area: 'Argyll',
    groups: [
      'Inveraray, Loch Awe, Lochgilphead and Knapdale',
      'Tyndrum, Dalmally and Bridge of Orchy',
      'Oban, Appin, Kerrera and Seil',
    ],
  },
  {
    area: 'Loch Lomond',
    groups: [
      'Arrochar Alps and Crianlarich',
      'Drymen and Balmaha - South and East Loch Lomond',
      'Strathyre, Lochearnhead and Balquhidder',
    ],
  },
  {
    area: 'Perthshire',
    groups: [
      'Crieff and Strathearn',
      'Killin and Aberfeldy, Loch Tay and Glen Lyon',
      'Pitlochry and Blair Atholl: North Perthshire',
      'Dunkeld, Blairgowrie and Glen Shee',
    ],
  },
  {
    area: 'Fort William',
    groups: [
      'Glencoe and Kinlochleven',
      'Fort William and Glen Nevis',
      'Spean Bridge, Roybridge and Loch Ossian',
      'Knoydart, Glen Garry and Loch Lochy',
      'Mallaig, Glenfinnan and Arisaig',
    ],
  },
  {
    area: 'Cairngorms',
    groups: [
      'Kingussie and Newtonmore: Badenoch',
      'Braemar and Upper Deeside',
      'Ballater and Balmoral',
      'Aviemore, Rothiemurchus and the Northern Cairngorms',
    ],
  },
  { area: 'Angus', groups: ['Angus Glens, Forfar and Kirriemuir'] },
  {
    area: 'Kintail and Lochalsh',
    groups: ['Dornie and Glen Shiel', 'Glenelg and Arnisdale'],
  },
  {
    area: 'Loch Ness & Glen Affric',
    groups: [
      'Glen Affric, Strathfarrar and Beauly',
      'Black Isle, Garve and Dingwall',
    ],
  },
  {
    area: 'Torridon and Gairloch',
    groups: [
      'Torridon: Shieldaig and Kinlochewe',
      'Glen Carron: Lochcarron to Achnasheen',
    ],
  },
  {
    area: 'Ullapool, Assynt and Easter Ross',
    groups: ['Ullapool and Dundonnell', 'Assynt and Coigach'],
  },
  { area: 'Sutherland and Caithness', groups: ['Durness, Tongue and Scourie'] },
  { area: 'Isle of Mull', groups: ['Salen, Craignure and Central Mull'] },
  {
    area: 'Isle of Skye',
    groups: ['The Cuillin and Minginish', 'Broadford and Elgol'],
  },
]

export const STEVE_FALLON_MUNRO_GROUPING: Area[] = [
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

export const MUNROS: Trip[] = [
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
        cords: { long: -3.196539, lat: 56.848003 },
      },
      {
        name: 'Mayar',
        uri: '/munros/mayar',
        cords: { long: -3.246299, lat: 56.848936 },
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
        cords: { long: -2.973622, lat: 56.969751 },
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
    desc: "This pair of Munros forms the northerly half of the Beinn D??rain range and gives a grand ridgewalk. Beinn a'Chreachain, the highest Munro in the range, has a fine northern corrie, whilst Beinn Achaladair is a very shapely peak with much character. The views - especially looking out over the vast soggy table-land of Rannoch Moor - are magnificent.",
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
        cords: { long: -4.647589, lat: 56.560387 },
      },
      {
        name: 'Beinn Achaladair',
        uri: '/munros/beinn-achaladair',
        cords: { long: -4.694515, lat: 56.551909 },
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
        cords: { long: -4.906709, lat: 56.326686 },
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
    title: 'Beinn D??rain and Beinn an D??thaidh, Bridge of Orchy',
    desc: 'Beinn D??rain is one of the most instantly recognisable Munros in the southern Highlands, a huge conical peak that dominates the A82 when driving north from Tyndrum. Its ascent can easily be combined with neighbouring Beinn an D??thaidh which has a fine outlook over Rannoch Moor.',
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
        name: 'Beinn D??rain',
        uri: '/munros/beinn-dorain',
        cords: { long: -4.722157, lat: 56.50287 },
      },
      {
        name: 'Beinn an D??thaidh',
        uri: '/munros/beinn-an-dothaidh',
        cords: { long: -4.713981, lat: 56.53013 },
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
        cords: { long: -5.068552, lat: 56.44979 },
      },
      {
        name: 'Beinn Eunaich',
        uri: '/munros/beinn-eunaich',
        cords: { long: -5.026639, lat: 56.450352 },
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
        cords: { long: -5.104749, lat: 56.600978 },
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
        cords: { long: -4.646042, lat: 56.534041 },
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
        cords: { long: -5.170365, lat: 56.566232 },
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
        cords: { long: -4.619184, lat: 56.454573 },
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
    desc: 'Ben Cruachan is one of the finest Munros in the southern Highlands, with jagged peaks and fine rocky ridges as well as stunning views. The ridge walk to Stob D??imh (misspelt Diamh on some OS maps) makes for a classic circuit around the Cruachan reservoir.',
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
        cords: { long: -5.131802, lat: 56.426841 },
      },
      {
        name: 'Stob Daimh',
        uri: '/munros/stob-diamh',
        cords: { long: -5.091319, lat: 56.431336 },
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
    title: "Ben Lui and Beinn a'Chl??ibh",
    desc: "Ben Lui is regarded as one of the grandest and most elegant mountains in the Southern Highlands, with a magnificent appearance when seen up the Cononish Glen from Dalrigh. The shortest route to it is from Glen Lochy, enabling easy inclusion of its less impressive neighbour Beinn a'Chl??ibh.",
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
        cords: { long: -4.810509, lat: 56.397004 },
      },
      {
        name: "Beinn a' Chl??ibh",
        uri: '/munros/beinn-a-chleibh',
        cords: { long: -4.83563, lat: 56.39023 },
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
        cords: { long: -4.743193, lat: 56.391295 },
      },
      {
        name: 'Ben Oss',
        uri: '/munros/ben-oss',
        cords: { long: -4.775488, lat: 56.389272 },
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
        cords: { long: -4.838302, lat: 56.573308 },
      },
      {
        name: 'Stob Ghabhar',
        uri: '/munros/stob-ghabhar',
        cords: { long: -4.882099, lat: 56.568103 },
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
    title: "A' Mharconaich and Geal Ch??rn, Drumochter",
    desc: "These are the northerly two summits of the four Munros on the west side of the Drumochter Pass. Geal Ch??rn is a featureless lump with superb views towards Ben Alder, whilst A' Mharconaich is the shapliest of the range, with a steep prow prominent from the A9.",
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
        name: 'Geal Ch??rn',
        uri: '/munros/geal-charn-drumochter',
        cords: { long: -4.304519, lat: 56.874433 },
      },
      {
        name: "A' Mharconaich",
        uri: '/munros/a-mharconaich',
        cords: { long: -4.290668, lat: 56.857002 },
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
    title: 'An Sgarsoch and C??rn an Fhidhleir',
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
        cords: { long: -3.754294, lat: 56.932109 },
      },
      {
        name: 'C??rn an Fhidhleir (C??rn Ealar)',
        uri: '/munros/carn-an-fhidhleir-carn-ealar',
        cords: { long: -3.801534, lat: 56.93602 },
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
        cords: { long: -3.513165, lat: 56.902295 },
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
    desc: 'The high ridge running from Beinn ??ibhinn over Aonach Beag to Geal Ch??rn, and its eastern extension to C??rn Dearg, is one of the remotest mountain groups in Scotland. It can be approached from Luiblea in the north, or the western summits can be climbed from Corrour Station. The route described here is from Culra bothy which is closed but you can camp nearby; the setting is beautiful and accessed via a long walk-in from Dalwhinnie.',
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
        cords: { long: -4.454693, lat: 56.855242 },
      },
      {
        name: 'Geal Ch??rn',
        uri: '/munros/geal-charn-alder',
        cords: { long: -4.509694, lat: 56.837836 },
      },
      {
        name: 'Aonach Beag',
        uri: '/munros/aonach-beag-alder',
        cords: { long: -4.529175, lat: 56.833498 },
      },
      {
        name: 'Beinn ??ibhinn',
        uri: '/munros/beinn-eibhinn',
        cords: { long: -4.542077, lat: 56.825255 },
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
    title: "Beinn a' Bh??ird",
    desc: "Beinn a'Bh??ird is the eleventh highest mountain in Britain, a vast high plateau in the eastern Cairngorms. The shortest approach is up Glen Quoich and follows a the former line of a bulldozed track - now restored by the NTS - high onto the mountain. Even this route is a long walk.",
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
        name: "Beinn a' Bh??ird",
        uri: '/munros/beinn-a-bhuird',
        cords: { long: -3.499366, lat: 57.08759 },
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
    desc: "This pair of Munros lies between the Beinn a'Bh??ird and Ben Avon massifs and the main mass of the High Cairngorms. Often overlooked, they are separated by the sprawling Moine Bhealaidh, a featureless plateau, but the pinewoods of Glen Derry provides a fine approach and the views are good.",
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
        cords: { long: -3.553472, lat: 57.055072 },
      },
      {
        name: "Beinn a' Chaorainn",
        uri: '/munros/beinn-a-chaorainn-cairngorms',
        cords: { long: -3.577434, lat: 57.093272 },
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
    title: 'Beinn Bhrotain and Monadh M??r , from Glen Feshie',
    desc: 'The bulky mountains of Beinn Bhrotain and Monadh M??r are well out of sight and probably out of mind from Glen Feshie. In good weather, however, they can be climbed via a long high-level traverse over the Moine Mh??r plateau.',
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
        name: 'Monadh M??r',
        uri: '/munros/monadh-mor',
        cords: { long: -3.75007, lat: 57.0268 },
      },
      {
        name: 'Beinn Bhrotain',
        uri: '/munros/beinn-bhrotain',
        cords: { long: -3.723797, lat: 57.009868 },
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
    title: 'Beinn Iutharn Mh??r and C??rn Bhac, Inverey',
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
        name: 'C??rn Bhac',
        uri: '/munros/carn-bhac',
        cords: { long: -3.56088, lat: 56.930541 },
      },
      {
        name: 'Beinn Iutharn Mhor',
        uri: '/munros/beinn-iutharn-mhor',
        cords: { long: -3.568229, lat: 56.894994 },
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
        cords: { long: -3.611464, lat: 57.095849 },
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
    title: 'Beinn Udlamain and Sg??irneach Mh??r',
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
        name: 'Sg??irneach Mh??r',
        uri: '/munros/sgairneach-mhor',
        cords: { long: -4.297792, lat: 56.828447 },
      },
      {
        name: 'Beinn Udlamain',
        uri: '/munros/beinn-udlamain',
        cords: { long: -4.329976, lat: 56.835444 },
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
    title: 'Ben Alder and Beinn Bhe??il from Culra',
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
        cords: { long: -4.465089, lat: 56.813796 },
      },
      {
        name: 'Beinn Bhe??il',
        uri: '/munros/beinn-bheoil',
        cords: { long: -4.430662, lat: 56.813276 },
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
        cords: { long: -3.434438, lat: 57.099347 },
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
        cords: { long: -3.669099, lat: 57.070368 },
      },
      {
        name: 'Derry Cairngorm',
        uri: '/munros/derry-cairngorm',
        cords: { long: -3.622004, lat: 57.062801 },
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
        cords: { long: -3.584716, lat: 57.13822 },
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
        cords: { long: -3.688803, lat: 57.03571 },
      },
      {
        name: 'Cairn Toul',
        uri: '/munros/cairn-toul',
        cords: { long: -3.710774, lat: 57.054406 },
      },
      {
        name: 'Sg??r an Lochain Uaine',
        uri: '/munros/sgor-an-lochain-uaine',
        cords: { long: -3.725897, lat: 57.058376 },
      },
      {
        name: 'Braeriach',
        uri: '/munros/braeriach',
        cords: { long: -3.728373, lat: 57.078307 },
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
    desc: "The Cairnwell is the most prominent of the group of three Munros on the west side of the Cairnwell pass. The Cairnwell and C??rn Aosda are made easily accessible but also scarred by the ski developments; C??rn a'Gh??oidh provides a wilder diversion.",
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
        name: 'C??rn Aosda',
        uri: '/munros/carn-aosda',
        cords: { long: -3.423274, lat: 56.895696 },
      },
      {
        name: "C??rn a' Gh??oidh",
        uri: '/munros/carn-a-gheoidh',
        cords: { long: -3.466616, lat: 56.873065 },
      },
      {
        name: 'The Cairnwell',
        uri: '/munros/the-cairnwell',
        cords: { long: -3.421199, lat: 56.87952 },
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
    title: "C??rn a'Mhaim from the Linn of Dee",
    desc: "C??rn a'Mhaim is a southern satellite of Ben Macdui, to which it is linked by long and very narrow ridge, an unusual feature for the Cairngorms. C??rn a'Mhaim is well seen from Derry Lodge and provides a worthwhile ascent in its own right, though it is even better if continuing to its mighty parent.",
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
        name: "C??rn a'Mhaim",
        uri: '/munros/carn-a-mhaim',
        cords: { long: -3.658384, lat: 57.036871 },
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
    title: "C??rn na Caim and A'Bhuidheanach Bheag, Drumochter",
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
        name: 'C??rn na Caim',
        uri: '/munros/carn-na-caim',
        cords: { long: -4.174478, lat: 56.911739 },
      },
      {
        name: 'A Bhuidheanach-bheag',
        uri: '/munros/a-bhuidheanach-bheag',
        cords: { long: -4.199001, lat: 56.870342 },
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
    title: 'Geal Ch??rn, Monadhliath',
    desc: 'Geal Ch??rn is the westernmost of the Monadh Liath and so far from the other three Munros that it is usually ascended on its own. Its eastern corrie is attractive but it is otherwise lacking in features; however it does have a feeling of remoteness.',
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
        name: 'Geal Ch??rn',
        uri: '/munros/geal-charn-monadhliath',
        cords: { long: -4.373572, lat: 57.057418 },
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
        name: 'C??rn an Tuirc',
        uri: '/munros/carn-an-tuirc',
        cords: { long: -3.357125, lat: 56.908274 },
      },
      {
        name: 'Cairn of Claise',
        uri: '/munros/cairn-of-claise',
        cords: { long: -3.338637, lat: 56.89417 },
      },
      {
        name: 'Glas Maol',
        uri: '/munros/glas-maol',
        cords: { long: -3.368236, lat: 56.873059 },
      },
      {
        name: 'Creag Leacach',
        uri: '/munros/creag-leacach',
        cords: { long: -3.387751, lat: 56.854631 },
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
        cords: { long: -3.669099, lat: 57.070368 },
      },
      {
        name: 'Cairn Gorm',
        uri: '/munros/cairn-gorm',
        cords: { long: -3.644477, lat: 57.116714 },
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
        cords: { long: -4.112568, lat: 56.96385 },
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
    title: "C??rn Dearg, C??rn Sgulain and A'Chailleach",
    desc: 'This long hillwalk includes ascents of three of the four Monadh Liath Munros. The hills themselves are undistinguished (particularly C??rn Sgulain), but C??rn Dearg has a feeling of remoteness and the long trek across the plateau from this peak to the others gives a feeling of great space, given favourable weather.',
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
        name: 'C??rn Dearg',
        uri: '/munros/carn-dearg-monadhliath',
        cords: { long: -4.253246, lat: 57.092261 },
      },
      {
        name: 'C??rn Sgulain',
        uri: '/munros/carn-sgulain',
        cords: { long: -4.176986, lat: 57.124371 },
      },
      {
        name: "A' Chailleach",
        uri: '/munros/a-chailleach-monadhliath',
        cords: { long: -4.179285, lat: 57.109564 },
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
    title: "Mullach Clach a' Bhl??ir",
    desc: "Glen Feshie makes a lovely approach to Mullach Clach a'Bhl??ir, whose cairn stands towards the southwestern edge of the great Moine Mh??r plateau. Much of the ascent is on a vehicle track but there are great views down into the twisting cleft of Coire Garbhlach.",
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
        name: "Mullach Clach a' Bhl??ir",
        uri: '/munros/mullach-clach-a-bhlair',
        cords: { long: -3.841287, lat: 57.011879 },
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
    title: 'Sg??r Gaoith, from Glen Feshie',
    desc: 'Sg??r Gaoith gives a superb, fairly short hillwalk when approached from Glen Feshie. The ascent passes through some magnificent pinewoods before climbing the bare upper slopes to reach a vast plateau. The summit is extremely dramatic perched on the very edge of the vast broken crags that plunge down to Loch Einich; the views are superb. PLEASE NOTE: the car park will be closed from August until the end of 2021 for forestry work',
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
        name: 'Sg??r Gaoith',
        uri: '/munros/sgor-gaoith',
        cords: { long: -3.810856, lat: 57.068561 },
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
        cords: { long: -3.29793, lat: 56.904734 },
      },
      {
        name: 'Tom Buidhe',
        uri: '/munros/tom-buidhe',
        cords: { long: -3.292356, lat: 56.893615 },
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
        cords: { long: -3.245261, lat: 56.960272 },
      },
      {
        name: "C??rn a' Choire Bh??idheach",
        uri: '/munros/carn-a-choire-bhoidheach',
        cords: { long: -3.272707, lat: 56.945773 },
      },
      {
        name: 'C??rn an t-Sagairt M??r',
        uri: '/munros/carn-an-t-sagairt-mor',
        cords: { long: -3.303227, lat: 56.942973 },
      },
      {
        name: 'Cairn Bannoch',
        uri: '/munros/cairn-bannoch',
        cords: { long: -3.278403, lat: 56.927728 },
      },
      {
        name: 'Broad Cairn',
        uri: '/munros/broad-cairn',
        cords: { long: -3.249082, lat: 56.919148 },
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
    desc: 'Famed as the narrowest ridge on the British mainland (though Liathach and An Teallach must run it close), the Aonach Eagach gives a thrilling and spectacular traverse for keen scramblers, linking the Munros of Meall Dearg and Sg??rr nam Fiannaidh.',
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
        cords: { long: -5.003234, lat: 56.680731 },
      },
      {
        name: 'Sg??rr nam Fiannaidh',
        uri: '/munros/sgorr-nam-fiannaidh-aonach-eagach',
        cords: { long: -5.037143, lat: 56.679387 },
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
    title: 'Aonach Beag and Aonach M??r from Glen Nevis',
    desc: 'These are two of the highest mountains in Britain. This route avoids the ski developments on the northern flanks of Aonach M??r which remain out of sight. It gives a fairly long, rugged and remote hillwalk with superb views.',
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
        cords: { long: -4.954138, lat: 56.799998 },
      },
      {
        name: 'Aonach M??r',
        uri: '/munros/aonach-mor',
        cords: { long: -4.961712, lat: 56.812941 },
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
    title: "Beinn a'Chlachair, Geal Ch??rn and Creag Pitridh",
    desc: "These three Munros are quite isolated in the wilds south of Loch Laggan. Beinn a'Chlachair is  a massive whale-like ridge with steep sides, Geal Ch??rn a sprawling mass and Creag Pitridh a pointed summit on its northern slopes.",
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
        cords: { long: -4.509684, lat: 56.869525 },
      },
      {
        name: 'Geal Ch??rn',
        uri: '/munros/geal-charn',
        cords: { long: -4.457236, lat: 56.897763 },
      },
      {
        name: 'Creag Pitridh',
        uri: '/munros/creag-pitridh',
        cords: { long: -4.484955, lat: 56.899713 },
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
        cords: { long: -4.659977, lat: 56.78939 },
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
        cords: { long: -5.011249, lat: 56.520221 },
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
        name: 'Sg??rr Dhearg',
        uri: '/munros/sgorr-dhearg-beinn-a-bheithir',
        cords: { long: -5.17151, lat: 56.653921 },
      },
      {
        name: 'Sg??rr Dh??nuill',
        uri: '/munros/sgorr-dhonuill-beinn-a-bheithir',
        cords: { long: -5.197757, lat: 56.650499 },
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
        cords: { long: -4.653644, lat: 56.928624 },
      },
      {
        name: 'Beinn Teallach',
        uri: '/munros/beinn-teallach',
        cords: { long: -4.694754, lat: 56.935932 },
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
    title: 'Ben Starav and Glas Bheinn Mh??r',
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
        cords: { long: -5.049748, lat: 56.538922 },
      },
      {
        name: 'Glas Bheinn Mh??r',
        uri: '/munros/glas-bheinn-mhor',
        cords: { long: -5.005267, lat: 56.542416 },
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
        cords: { long: -5.029335, lat: 56.642759 },
      },
      {
        name: 'Stob Coire Sgreamhach',
        uri: '/munros/stob-coire-sgreamhach',
        cords: { long: -5.010284, lat: 56.638314 },
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
    title: 'Binnein M??r and Na Gruagaichean, Mamores',
    desc: 'Binnein M??r is a magnificent peak crowning a graceful ridge and is the highest of the Mamores. In combination with its rocky neighbour Na Gruagaichean it gives a superb ridgewalk.',
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
        name: 'Binnein M??r',
        uri: '/munros/binnein-mor',
        cords: { long: -4.925796, lat: 56.754376 },
      },
      {
        name: 'Na Gruagaichean',
        uri: '/munros/na-gruagaichean',
        cords: { long: -4.939851, lat: 56.743699 },
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
    desc: 'Buachaille Etive Beag is often overlooked in favour of its more illustrious neighbour. It is, however, a magnificent ridge in its own right, offering superlative views down Loch Etive and of the surrounding peaks of Glencoe. It also has the benefit of an excellent path easing the ascent and descent from the Lairig ??ilde.',
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
        cords: { long: -4.951601, lat: 56.649895 },
      },
      {
        name: 'Stob Dubh',
        uri: '/munros/stob-dubh-buachaille-etive-beag',
        cords: { long: -4.970747, lat: 56.638159 },
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
    title: 'Buachaille Etive M??r',
    desc: 'Buachaille Etive M??r is one of the best known and loved of all the Munro peaks.  The epic view of the mountain from the main A82 road makes it appear quite unassailable and is one of the most photographed sights in Scotland.',
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
        cords: { long: -4.900377, lat: 56.646228 },
      },
      {
        name: 'Stob na Br??ige',
        uri: '/munros/stob-na-broige-buachaille-etive-mor',
        cords: { long: -4.951161, lat: 56.62987 },
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
    title: 'Ben Nevis by the C??rn M??r Dearg Ar??te',
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
        name: 'C??rn M??r Dearg',
        uri: '/munros/carn-mor-dearg',
        cords: { long: -4.986616, lat: 56.805246 },
      },
      {
        name: 'Ben Nevis',
        uri: '/munros/ben-nevis',
        cords: { long: -5.003675, lat: 56.796891 },
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
        cords: { long: -4.694918, lat: 56.831745 },
      },
      {
        name: 'Chno Dearg',
        uri: '/munros/chno-dearg',
        cords: { long: -4.66083, lat: 56.830077 },
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
        name: 'C??rn Liath',
        uri: '/munros/carn-liath-creag-meagaidh',
        cords: { long: -4.515288, lat: 56.978784 },
      },
      {
        name: 'Stob Poite Coire ??rdair',
        uri: '/munros/stob-poite-coire-ardair',
        cords: { long: -4.585762, lat: 56.964037 },
      },
      {
        name: 'Creag Meagaidh',
        uri: '/munros/creag-meagaidh',
        cords: { long: -4.602117, lat: 56.952023 },
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
    title: "Creise and Meall a'Bh??iridh from the Ski centre",
    desc: "These two Munros form the northeastern part the Black Mount range, rising above the head of Glen Etive opposite the better known Buachaille Etive M??r . This route ascends via the White Corries ski slopes. Meall a'Bh??iridh appears rather undistinguished seen from Rannoch Moor but its elegant west ridge is revealed from Creise, itself the high point of a dramatic ridge running from Sr??n  na Creise in the north through Clach Leathad to Sr??n  nam Forsair.",
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
        name: "Meall a'Bh??iridh",
        uri: '/munros/meall-a-bhuiridh',
        cords: { long: -4.852112, lat: 56.612236 },
      },
      {
        name: 'Creise',
        uri: '/munros/creise',
        cords: { long: -4.871987, lat: 56.614448 },
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
        cords: { long: -4.760183, lat: 56.823685 },
      },
      {
        name: 'Stob Coire Easain',
        uri: '/munros/stob-coire-easain',
        cords: { long: -4.77371, lat: 56.818199 },
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
        cords: { long: -5.255827, lat: 57.044879 },
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
        cords: { long: -4.849624, lat: 56.823786 },
      },
      {
        name: 'Stob Coire an Laoigh',
        uri: '/munros/stob-coire-an-laoigh',
        cords: { long: -4.884907, lat: 56.810877 },
      },
      {
        name: 'Sg??rr Ch??innich M??r',
        uri: '/munros/sgurr-choinnich-mor',
        cords: { long: -4.90396, lat: 56.80043 },
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
        cords: { long: -5.284527, lat: 56.936211 },
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
        cords: { long: -5.591745, lat: 57.075272 },
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
    desc: "Sr??n a' Choire Ghairbh and Meall na Teanga rise steeply above Lochy Lochy opposite the busy A82, and are commonly known as the Loch Lochy Munros. Their ascent from Kilfinnan begins with an approach through dense plantations, but once on the hills the views are superb.",
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
        name: "Sr??n a' Choire Ghaibh",
        uri: '/munros/sron-a-choire-ghairbh',
        cords: { long: -4.928747, lat: 57.00784 },
      },
      {
        name: 'Meall na Teanga',
        uri: '/munros/meall-na-teanga',
        cords: { long: -4.930955, lat: 56.989012 },
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
        cords: { long: -5.546334, lat: 57.031552 },
      },
      {
        name: 'Luinne Bheinn',
        uri: '/munros/luinne-bheinn',
        cords: { long: -5.513607, lat: 57.048325 },
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
    desc: "The Ring of Steall is a real classic mountain route combining the traverse of four Munros with scrambling along narrow, rocky aretes. The route takes in An Gearanach, Stob Choire a Ch??irn, Am Bodach and then follows the Devils Ridge to Sg??rr a'Mhaim",
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
        cords: { long: -4.96623, lat: 56.759172 },
      },
      {
        name: "Stob Coire a' Ch??irn",
        uri: '/munros/stob-coire-a-chairn',
        cords: { long: -4.968985, lat: 56.750756 },
      },
      {
        name: 'Am Bodach',
        uri: '/munros/am-bodach',
        cords: { long: -4.98337, lat: 56.74173 },
      },
      {
        name: "Sg??rr a'Mhaim",
        uri: '/munros/sgurr-a-mhaim',
        cords: { long: -5.00369, lat: 56.75592 },
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
    title: 'Sg??r Gaibhre and C??rn Dearg from Corrour',
    desc: "Sg??r Gaibhre and C??rn Dearg are a pair of unspectacular Munros in the heart of the wild area around Loch Ossian. They can be approached from the south, or alternatively from Corrour railway station which isn't accessible by road and has the advantage of a start at almost 400m.",
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
        name: 'Sg??r Gaibhre',
        uri: '/munros/sgor-gaibhre',
        cords: { long: -4.546498, lat: 56.772553 },
      },
      {
        name: 'C??rn Dearg (Corrour)',
        uri: '/munros/carn-dearg-corrour',
        cords: { long: -4.589888, lat: 56.759931 },
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
    title: 'Sg??r na h-Ulaidh and Meall Lighiche',
    desc: 'Sg??r na h-Ulaidh is the forgotten Munro amongst the Glencoe peaks, being out of sight for most of the road through the glen. Combined with the Corbett Meall na Lighiche, it gives a day with superb views - but with a very steep ascent.',
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
        name: 'Sg??r na h-Ulaidh',
        uri: '/munros/sgor-na-h-ulaidh',
        cords: { long: -5.08006, lat: 56.619796 },
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
    title: 'Sg??rr M??r and Sg??rr an Fhuarain, Loch Arkaig',
    desc: 'Sg??rr M??r , a rocky and steep peak between Loch Quoich and lonely Glen Kingie, must rank amongst the remotest Munros. Unless you have a kayak, the usual approach is from Glendessary to the south, involving a pass to Glen Kingie just to reach the foot of the mountain. The Corbett Sg??rr an Fhuarain is easily included in the walk.',
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
        name: 'Sg??rr M??r',
        uri: '/munros/sgurr-mor-loch-quoich',
        cords: { long: -5.354189, lat: 57.028446 },
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
    title: "Sg??rr a' Mhaoraich, Loch Quoich",
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
        name: 'Sg??rr a Mhaoraich',
        uri: '/munros/sgurr-a-mhaoraich',
        cords: { long: -5.330509, lat: 57.105849 },
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
    title: 'Sg??rr ??ilde M??r and Binnein Beag, Mamores',
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
        cords: { long: -4.911161, lat: 56.766961 },
      },
      {
        name: 'Sg??rr ??ilde M??r',
        uri: '/munros/sgurr-eilde-mor',
        cords: { long: -4.895436, lat: 56.750015 },
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
    title: 'Sg??rr na C??che: 3 Munros from Loch Arkaig',
    desc: 'This epic mountain walk takes in three remote and exceptionally rugged Munros. The arduous effort required is rewarded with magnificent rocky mountainscapes throughout. Sg??rr na C??che itself is one of the most shapely summits in Scotland and is a classic viewpoint.',
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
        name: 'Sg??rr nan Coireachan',
        uri: '/munros/sgurr-nan-coireachan-glen-dessary',
        cords: { long: -5.40544, lat: 57.007158 },
      },
      {
        name: 'Garbh Chioch Mhor',
        uri: '/munros/garbh-chioch-mhor',
        cords: { long: -5.444322, lat: 57.008556 },
      },
      {
        name: 'Sg??rr na C??che',
        uri: '/munros/sgurr-na-ciche',
        cords: { long: -5.456905, lat: 57.013468 },
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
    title: 'Sg??rr Thuilm and Sg??rr nan Coireachan',
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
        name: 'Sg??rr nan Coireachan',
        uri: '/munros/sgurr-nan-coireachan-glenfinnan',
        cords: { long: -5.448551, lat: 56.935728 },
      },
      {
        name: 'Sg??rr Thuilm',
        uri: '/munros/sgurr-thuilm',
        cords: { long: -5.389207, lat: 56.937056 },
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
        cords: { long: -5.193614, lat: 57.088964 },
      },
      {
        name: 'Gleouraich',
        uri: '/munros/gleouraich',
        cords: { long: -5.238035, lat: 57.097163 },
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
        cords: { long: -4.840877, lat: 56.810656 },
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
        cords: { long: -5.030328, lat: 56.743706 },
      },
      {
        name: 'Mullach nan Coirean',
        uri: '/munros/mullach-nan-coirean',
        cords: { long: -5.072446, lat: 56.749866 },
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
        cords: { long: -4.979809, lat: 56.554903 },
      },
      {
        name: 'Meall nan Eun',
        uri: '/munros/meall-nan-eun',
        cords: { long: -4.942926, lat: 56.561176 },
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
        cords: { long: -5.154837, lat: 57.184186 },
      },
      {
        name: 'Mullach Fraoch-choire',
        uri: '/munros/mullach-fraoch-choire',
        cords: { long: -5.155652, lat: 57.205379 },
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
        cords: { long: -5.303686, lat: 57.255081 },
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
        cords: { long: -5.283503, lat: 57.221002 },
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
        cords: { long: -5.579727, lat: 57.153815 },
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
    title: 'Brothers Ridge - Sg??rr a Bhealaich Dheirg',
    desc: 'The eastern neighbours of the Five Sisters are the three Munros Sg??rr a Bhealaich Dheirg, S??ileag and Aonach Meadhoin, often collectively known as the Brothers of Kintail. They give a very fine ridgewalk themselves, and are in no way overshadowed by their more famous siblings.',
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
        name: 'S??ileag',
        uri: '/munros/saileag',
        cords: { long: -5.281331, lat: 57.181264 },
      },
      {
        name: 'Sg??rr a Bhealaich Dheirg',
        uri: '/munros/sgurr-a-bhealaich-dheirg',
        cords: { long: -5.252177, lat: 57.177825 },
      },
      {
        name: 'Aonach Meadhoin',
        uri: '/munros/aonach-meadhoin',
        cords: { long: -5.229166, lat: 57.173026 },
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
        cords: { long: -5.209032, lat: 57.199234 },
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
        name: 'Sg??rr na Ciste Duibhe',
        uri: '/munros/sgurr-na-ciste-duibhe',
        cords: { long: -5.337134, lat: 57.180924 },
      },
      {
        name: 'Sg??rr na C??rnach',
        uri: '/munros/sgurr-na-carnach',
        cords: { long: -5.349224, lat: 57.189034 },
      },
      {
        name: 'Sg??rr Fhuaran',
        uri: '/munros/sgurr-fhuaran',
        cords: { long: -5.34765, lat: 57.19615 },
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
        cords: { long: -5.160048, lat: 57.120971 },
      },
      {
        name: 'Druim Shionnach',
        uri: '/munros/druim-shionnach',
        cords: { long: -5.182841, lat: 57.126794 },
      },
      {
        name: 'Aonach Air Chrith',
        uri: '/munros/aonach-air-chrith',
        cords: { long: -5.221291, lat: 57.12464 },
      },
      {
        name: 'Maol Chinn-dearg',
        uri: '/munros/maol-chinn-dearg',
        cords: { long: -5.252651, lat: 57.12756 },
      },
      {
        name: 'Sg??rr an Doire Leathain',
        uri: '/munros/sgurr-an-doire-leathain',
        cords: { long: -5.281532, lat: 57.136879 },
      },
      {
        name: 'Sg??rr an Lochain',
        uri: '/munros/sgurr-an-lochain',
        cords: { long: -5.297483, lat: 57.141296 },
      },
      {
        name: 'Creag nan D??mh',
        uri: '/munros/creag-nan-damh',
        cords: { long: -5.33496, lat: 57.147262 },
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
    title: 'Sg??rr nan Conbhairean, C??rn Ghluasaid and S??il Chaorainn',
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
        name: 'C??rn Ghluasaid',
        uri: '/munros/carn-ghluasaid',
        cords: { long: -5.068159, lat: 57.165959 },
      },
      {
        name: 'Sg??rr nan Conbhairean',
        uri: '/munros/sgurr-nan-conbhairean',
        cords: { long: -5.095407, lat: 57.177622 },
      },
      {
        name: 'S??il Chaorainn',
        uri: '/munros/sail-chaorainn',
        cords: { long: -5.091199, lat: 57.191622 },
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
    title: 'The Saddle, Forcan Ridge and Sg??rr na Sg??ne',
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
        cords: { long: -5.414721, lat: 57.162395 },
      },
      {
        name: 'Sg??rr na Sg??ne',
        uri: '/munros/sgurr-na-sgine',
        cords: { long: -5.396634, lat: 57.147098 },
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
    title: "An Caisteal and Beinn a'Chr??in, near Crianlarich",
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
        cords: { long: -4.62437, lat: 56.338618 },
      },
      {
        name: "Beinn  a' Chr??in",
        uri: '/munros/beinn-a-chroin',
        cords: { long: -4.609644, lat: 56.331991 },
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
        cords: { long: -4.641476, lat: 56.325779 },
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
    title: 'Beinn Narnain and Beinn ??me',
    desc: 'The compact group of mountains known as the Arrochar Alps are renowned for their steep, rugged and rocky nature. However, the highest peak - Beinn ??me - has a simple slope when approached from this direction. Beinn Narnain has a much rougher and rockier character. The views - especially of the nearby Cobbler - are excellent.',
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
        cords: { long: -4.789003, lat: 56.220956 },
      },
      {
        name: 'Beinn ??me',
        uri: '/munros/beinn-ime',
        cords: { long: -4.817125, lat: 56.236794 },
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
        cords: { long: -4.63301, lat: 56.190302 },
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
        cords: { long: -4.540087, lat: 56.385952 },
      },
      {
        name: 'Stob Binnein',
        uri: '/munros/stob-binnein',
        cords: { long: -4.535753, lat: 56.370717 },
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
        cords: { long: -4.781655, lat: 56.249786 },
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
        cords: { long: -4.755046, lat: 56.274021 },
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
    title: 'Cruach ??rdrain and Beinn Tulaichean',
    desc: 'Cruach ??rdrain has a distinctive outline which makes it a familiar sight from the Crianlarich and Tyndrum area. Its southern ridge rises to the satellite Munro peak of Beinn Tulaichean; to include both of these summits it is more convenient to start from the south to avoid reascending over the shoulder of Cruach ??rdrain. The slopes to and from the ridge are steep, rugged and pathless.',
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
        cords: { long: -4.56333, lat: 56.342216 },
      },
      {
        name: 'Cruach ??rdrain',
        uri: '/munros/cruach-ardrain',
        cords: { long: -4.576151, lat: 56.356429 },
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
        cords: { long: -4.57925, lat: 57.678914 },
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
    title: 'C??rn Eige and Mam Sodhail',
    desc: 'C??rn Eige and Mam Sodhail are the two highest mountains north of the Great Glen and spectacular viewpoints. This long, wild mountain walk around a horse-shoe of ridges becomes something of an epic by the (optional) addition of the very remote Munro of Beinn Fhionnlaidh.',
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
        name: 'C??rn Eige (or C??rn Eighe)',
        uri: '/munros/carn-eige',
        cords: { long: -5.115159, lat: 57.287701 },
      },
      {
        name: 'Beinn Fhionnlaidh',
        uri: '/munros/beinn-fhionnlaidh-carn-eige',
        cords: { long: -5.129909, lat: 57.305977 },
      },
      {
        name: 'Mam Sodhail',
        uri: '/munros/mam-sodhail',
        cords: { long: -5.120267, lat: 57.279801 },
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
    title: 'Sg??rr nan Ceathreamhnan group, Alltbeithe',
    desc: 'Strenuous walk over some of the remotest mountains in Britain. Sg??rr nan Ceathreamhnan is a magnificent peak; whilst Mullach na Dheiragain is prized for its inaccessibility.',
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
        cords: { long: -5.18635, lat: 57.283399 },
      },
      {
        name: 'Sg??rr nan Ceathreamhnan',
        uri: '/munros/sgurr-nan-ceathreamhnan',
        cords: { long: -5.222732, lat: 57.254911 },
      },
      {
        name: 'An Socach',
        uri: '/munros/an-socach-affric',
        cords: { long: -5.171311, lat: 57.25755 },
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
        name: 'C??rn nan Gobhar',
        uri: '/munros/carn-nan-gobhar-loch-mullardoch',
        cords: { long: -5.024544, lat: 57.363304 },
      },
      {
        name: 'Sg??rr na Lapaich',
        uri: '/munros/sgurr-na-lapaich',
        cords: { long: -5.059726, lat: 57.369311 },
      },
      {
        name: 'An Riabhachan',
        uri: '/munros/an-riabhachan',
        cords: { long: -5.104728, lat: 57.362438 },
      },
      {
        name: 'An Socach',
        uri: '/munros/an-socach-mullardoch',
        cords: { long: -5.158603, lat: 57.350229 },
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
        name: 'Sg??rr na Ruaidhe',
        uri: '/munros/sgurr-na-ruaidhe',
        cords: { long: -4.852465, lat: 57.441497 },
      },
      {
        name: 'C??rn nan Gobhar',
        uri: '/munros/carn-nan-gobhar-strathfarrar',
        cords: { long: -4.879935, lat: 57.452331 },
      },
      {
        name: "Sg??rr a' Choire Ghlais",
        uri: '/munros/sgurr-a-choire-ghlais',
        cords: { long: -4.903757, lat: 57.444288 },
      },
      {
        name: 'Sg??rr Fhuar-thuill',
        uri: '/munros/sgurr-fhuar-thuill',
        cords: { long: -4.94178, lat: 57.44968 },
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
    title: "Tom a' Ch??inich and Toll Creagach, Glen Affric",
    desc: "These are the easiest of the Munros to reach from Glen Affric, but still a substantial walk. The two peaks are contrasting in character; Toll Creagach is a very rounded mountain with mossy upper slopes, but Tom a' Ch??inich is a more shapely peak with rocky ridges.",
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
        cords: { long: -4.999953, lat: 57.309227 },
      },
      {
        name: "Tom a' Ch??inich",
        uri: '/munros/tom-a-choinich',
        cords: { long: -5.048959, lat: 57.299518 },
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
        cords: { long: -6.014015, lat: 56.424829 },
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
    title: "Beinn a' Ghl??",
    desc: "More a range of hills than a single peak, Beinn a' Ghl?? has three Munro summits giving a strenuous day. The summits may be rounded, but the steep flanks and sculpted form of this great massif makes for a memorable outing.",
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
        name: 'C??rn Liath',
        uri: '/munros/carn-liath-beinn-a-ghlo',
        cords: { long: -3.74409, lat: 56.80777 },
      },
      {
        name: 'Braigh Coire Chruinn-bhalgain',
        uri: '/munros/braigh-coire-chruinn-bhalgain',
        cords: { long: -3.729489, lat: 56.831101 },
      },
      {
        name: 'C??rn nan Gabhar',
        uri: '/munros/carn-nan-gabhar',
        cords: { long: -3.688022, lat: 56.839846 },
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
        cords: { long: -3.883719, lat: 56.877346 },
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
    title: 'Creag Mh??r and Beinn Heasgarnich',
    desc: 'These two Munros give one of the more challenging outings for baggers in this part of the Highlands, requiring experience as it crosses some potentially difficult pathless terrain. Creag Mh??r is steep and craggy on the ascent with much character; Beinn Heasgarnich is a fine viewpoint but has a tricky descent with vast areas of peat bog.',
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
        cords: { long: -4.614038, lat: 56.489519 },
      },
      {
        name: 'Beinn Heasgarnich',
        uri: '/munros/beinn-heasgarnich',
        cords: { long: -4.579218, lat: 56.510272 },
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
        cords: { long: -3.992057, lat: 56.453851 },
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
        cords: { long: -4.236992, lat: 56.535996 },
      },
      {
        name: 'Ben Lawers',
        uri: '/munros/ben-lawers',
        cords: { long: -4.22086, lat: 56.544922 },
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
    title: "Ben Vorlich and St??c a' Chr??in",
    desc: "These two Munros on the southern fringe of the Highlands appear as an identical pair in many distant views. Closer up, they are more different. Ben Vorlich is a very popular hillwalk from Loch Earn and a fine viewpoint, whilst the continuation to St??c a' Chr??in is a more serious walk with steep, rocky ground.",
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
        cords: { long: -4.219448, lat: 56.34268 },
      },
      {
        name: "St??c a'Chr??in",
        uri: '/munros/stuc-a-chroin',
        cords: { long: -4.237533, lat: 56.329315 },
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
    title: "C??rn a'Chlamain",
    desc: "C??rn a' Chlamain is the relatively minor stony summit rising above a spacious and very remote plateau. The approach is up scenic Glen Tilt, one of the Highlands' most beautiful glens and it is this that makes the walk a minor classic.",
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
        name: 'C??rn a Chlamain',
        uri: '/munros/carn-a-chlamain',
        cords: { long: -3.779634, lat: 56.860965 },
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
    title: 'C??rn Gorm, Meall Garbh, C??rn Mairg and Creag Mh??r',
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
        name: 'C??rn Gorm',
        uri: '/munros/carn-gorm',
        cords: { long: -4.226021, lat: 56.622537 },
      },
      {
        name: 'Meall Garbh',
        uri: '/munros/meall-garbh-carn-mairg',
        cords: { long: -4.207472, lat: 56.637381 },
      },
      {
        name: 'C??rn Mairg',
        uri: '/munros/carn-mairg',
        cords: { long: -4.145608, lat: 56.634635 },
      },
      {
        name: 'Creag Mh??r',
        uri: '/munros/creag-mhor-meall-na-aighean',
        cords: { long: -4.128741, lat: 56.620627 },
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
    title: 'Glas Tulaichean and C??rn an R??gh, Spittal of Glenshee',
    desc: "This pair of Munros lie out in the empty lands of the Mounth between Beinn a'Ghl?? and Glen Shee. Glas Tulaichean has a track almost right to the summit but good views, whilst C??rn an R??gh is a less shapely but much wilder and more remote.",
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
        cords: { long: -3.558163, lat: 56.865757 },
      },
      {
        name: 'C??rn an R??gh',
        uri: '/munros/carn-an-righ',
        cords: { long: -3.595273, lat: 56.876583 },
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
    desc: 'This straightforward Munro makes a pleasant walk with good views over Loch an D??imh, the Trossachs, Rannoch Moor and the mountains further north on a clear day. The route can be boggy in parts and is often combined with Stuchd an Lochain on the other side of the dam to make a full day.',
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
        cords: { long: -4.448608, lat: 56.617231 },
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
    title: "Meall Corranaich and Meall a'Choire L??ith",
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
        cords: { long: -4.253469, lat: 56.540946 },
      },
      {
        name: "Meall a' Choire L??ith",
        uri: '/munros/meall-a-choire-leith',
        cords: { long: -4.259617, lat: 56.566312 },
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
    title: 'Meall Greigh, Meall Garbh and An St??c',
    desc: 'The eastern three Munros of the Lawers range give an excellent circuit of the corrie holding Lochan nan Cat, the finest feature of the range. The recently-promoted Munro of An St??c involves a steep scramble and this route is much more challenging than the usual trade route to Ben Lawers itself. The walk can easily be extended to take in the higher summit.',
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
        cords: { long: -4.159559, lat: 56.567426 },
      },
      {
        name: 'Meall Garbh',
        uri: '/munros/meall-garbh-ben-lawers',
        cords: { long: -4.207714, lat: 56.566131 },
      },
      {
        name: 'An St??c',
        uri: '/munros/an-stuc',
        cords: { long: -4.216247, lat: 56.560075 },
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
        cords: { long: -4.416654, lat: 56.525809 },
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
        cords: { long: -4.301344, lat: 56.521673 },
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
    title: 'Sgiath Ch??il and Meall Glas from Glen Lochay',
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
        name: 'Sgiath Ch??il',
        uri: '/munros/sgiath-chuil',
        cords: { long: -4.495638, lat: 56.453157 },
      },
      {
        name: 'Meall Glas',
        uri: '/munros/meall-glas',
        cords: { long: -4.546837, lat: 56.455711 },
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
        cords: { long: -4.100229, lat: 56.666933 },
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
        cords: { long: -4.470602, lat: 56.570907 },
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
        cords: { long: -6.202966, lat: 57.24794 },
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
    title: 'Bl?? Bheinn (Blaven)',
    desc: 'Bl?? Bheinn is one of the most magnificent mountains in Britain; a great isolated citadel of rock with fabulous views and all the character of the main Cuillin Ridge. Its ascent is straightforward by Cuillin standards but very rocky.',
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
        name: 'Bl?? Bheinn',
        uri: '/munros/bla-bheinn',
        cords: { long: -6.09321, lat: 57.219565 },
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
        cords: { long: -6.210776, lat: 57.246743 },
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
    title: 'Sg??rr Dearg and the In Pinn',
    desc: 'The summit of Sg??rr Dearg is truly fantastic viewpoint, but is better known as of the most dramatic spots on the Cuillin ridge, being overtopped by the improbable tower of the Inaccessible Pinnacle. This circuit visits the base of the pinnacle but does not include the ascent, which is a rock-climb. Even omitting the pinnacle, this is an extremely rough walk with a great deal of rocky terrain, some scrambling and very tricky route-finding.',
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
        cords: { long: -6.234817, lat: 57.213252 },
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
    title: 'Sg??rr Mhic Ch??innich',
    desc: 'Sg??rr Mhic Ch??innich is one of the most difficult of the Cuillin Munros to reach for non rock-climbers. The final approach along the ridge is an exposed and in places difficult scramble; the rock scenery throughout is superb.',
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
        name: 'Sg??rr Mhic Ch??inich',
        uri: '/munros/sgurr-mhic-choinnich',
        cords: { long: -6.224112, lat: 57.208928 },
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
    title: 'Sg??rr a Mhadaidh and Sg??rr a Ghreadaidh',
    desc: 'Twin-topped Sg??rr a Ghreadaidh is the highest peak on the northern half of the Cuillin Ridge; it can be climbed either with its neighbour Sg??rr a Mhadaidh or on separate excursions; both peaks involve tough scrambling but have fantastic views.',
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
        name: "Sg??rr a' Ghreadaidh",
        uri: '/munros/sgurr-a-ghreadaidh',
        cords: { long: -6.234425, lat: 57.227313 },
      },
      {
        name: "Sg??rr a' Mhadaidh",
        uri: '/munros/sgurr-a-mhadaidh',
        cords: { long: -6.231931, lat: 57.230869 },
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
    title: 'Sg??rr Alasdair',
    desc: 'Sg??rr Alasdair is the highest peak on Skye - and indeed, the highest UK island summit. The tiny summit is an amazing viewpoint but reaching it involves an arduous slog up scree.',
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
        name: 'Sg??rr Alasdair',
        uri: '/munros/sgurr-alasdair',
        cords: { long: -6.224176, lat: 57.206588 },
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
    title: 'Sg??rr na Banachdich',
    desc: 'Sg??rr na Banachdich is the mid-point of the Cuillin Ridge, and is the only Munro in the Cuillin where hands are not needed to make the ascent. The views along the ridge and down to Loch Coruisk are sensational.',
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
        name: 'Sg??rr na Banachdich',
        uri: '/munros/sgurr-na-banachdich',
        cords: { long: -6.241638, lat: 57.220972 },
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
    desc: 'The southernmost Cuillin peaks have the finest sea views in the whole range, and give a long, rough day. Sg??rr nan Eag involves moderate scrambling; Sg??rr Dubh M??r (which can be omitted) is a hard scramble.',
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
        name: 'Sg??rr nan Eag',
        uri: '/munros/sgurr-nan-eag',
        cords: { long: -6.211264, lat: 57.19581 },
      },
      {
        name: 'Sg??rr Dubh M??r',
        uri: '/munros/sgurr-dubh-mor',
        cords: { long: -6.211421, lat: 57.204894 },
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
    title: 'Sg??rr nan Gillean',
    desc: 'Sg??rr nan Gillean is perhaps the most famous of the Cuillin peaks - a popular route with a difficult scramble to the summit and fantastic views at all times.',
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
        name: 'Sg??rr nan Gillean',
        uri: '/munros/sgurr-nan-gillean',
        cords: { long: -6.193159, lat: 57.248215 },
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
        cords: { long: -4.60786, lat: 58.413113 },
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
        cords: { long: -4.41113, lat: 58.235202 },
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
        name: 'Sg??rr M??r',
        uri: '/munros/sgurr-mor-beinn-alligin',
        cords: { long: -5.572765, lat: 57.590829 },
      },
      {
        name: 'Tom na Gruagaich',
        uri: '/munros/tom-na-gruagaich-beinn-alligin',
        cords: { long: -5.581912, lat: 57.580519 },
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
        name: 'Ruadh-Stac M??r',
        uri: '/munros/ruadh-stac-mor-beinn-eighe',
        cords: { long: -5.429454, lat: 57.593735 },
      },
      {
        name: 'Spidean Coire nan Clach',
        uri: '/munros/spidean-coire-nan-clach-beinn-eighe',
        cords: { long: -5.403706, lat: 57.582098 },
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
    desc: 'Beinn Liath Mh??r takes the form of a long ridge sprinkled with white quartzite screes. It gives a fine, steep hillwalk of much character.',
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
        cords: { long: -5.400618, lat: 57.512083 },
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
    title: "Bidein a' Choire Sheasgaich and Lurg Mh??r",
    desc: "A challenging expedition to climb two of the remotest Munros. The fine, pointed summit of Bidein a'Choire Sheasgaich would be more celebrated were it not hidden deep in the wilds of Monar, whilst neighbouring Lurg Mh??r is even more inaccessible. The walk can be broken up by an overnight stay in the bothy or wild camping.",
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
        cords: { long: -5.223666, lat: 57.413091 },
      },
      {
        name: "Bidein a' Choire Sheasgaich",
        uri: '/munros/bidein-a-choire-sheasgaich',
        cords: { long: -5.250456, lat: 57.419719 },
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
        cords: { long: -5.102713, lat: 57.611148 },
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
        name: "Spidean a' Choire L??ith",
        uri: '/munros/spidean-a-choire-leith-liathach',
        cords: { long: -5.463609, lat: 57.564197 },
      },
      {
        name: 'Mullach an Rathain',
        uri: '/munros/mullach-an-rathain-liathach',
        cords: { long: -5.492498, lat: 57.560875 },
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
        cords: { long: -5.111002, lat: 57.464477 },
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
        cords: { long: -5.465549, lat: 57.491697 },
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
    title: 'Moruisg and Sg??rr nan Ceannaichean',
    desc: 'Moruisg is rather a sprawling mountain but is a superb viewpoint. The ascent line given here has the one merit of directness, but continuing the walk onto Sg??rr na Ceannaichean follows an enjoyable ridge making for a good, fairly moderate mountain walk.',
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
        cords: { long: -5.17063, lat: 57.499712 },
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
    title: 'Sg??rr Ruadh, Achnashellach',
    desc: 'Sg??rr Ruadh is a majestically-sculpted sandstone peak which shows an impressive face above Coire L??ir. Munro-baggers often climb this peak in combination with Beinn Liath Mhor, in which case the latter peak is best climbed first.',
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
        name: 'Sg??rr Ruadh',
        uri: '/munros/sgorr-ruadh',
        cords: { long: -5.407747, lat: 57.498622 },
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
    title: "Sg??rr Ch??innich and Sg??rr a'Chaorachain",
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
        name: 'Sg??rr Ch??innich',
        uri: '/munros/sgurr-choinnich',
        cords: { long: -5.207916, lat: 57.451026 },
      },
      {
        name: "Sg??rr a' Chaorachain",
        uri: '/munros/sgurr-a-chaorachain',
        cords: { long: -5.1893, lat: 57.452492 },
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
        cords: { long: -5.347061, lat: 57.667148 },
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
        cords: { long: -4.853899, lat: 57.771801 },
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
        cords: { long: -5.251767, lat: 57.807098 },
      },
      {
        name: 'Sg??rr Fiona',
        uri: '/munros/sgurr-fiona-an-teallach',
        cords: { long: -5.259443, lat: 57.800726 },
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
        cords: { long: -4.929557, lat: 57.78635 },
      },
      {
        name: 'Cona Mheall',
        uri: '/munros/cona-mheall',
        cords: { long: -4.903418, lat: 57.791077 },
      },
      {
        name: 'Meall nan Ceapraichean',
        uri: '/munros/meall-nan-ceapraichean',
        cords: { long: -4.934012, lat: 57.798514 },
      },
      {
        name: 'Eididh nan Clach Geala',
        uri: '/munros/eididh-nan-clach-geala',
        cords: { long: -4.934218, lat: 57.813492 },
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
        cords: { long: -4.883497, lat: 58.135689 },
      },
      {
        name: 'Ben More Assynt',
        uri: '/munros/ben-more-assynt',
        cords: { long: -4.858208, lat: 58.138164 },
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
    title: 'Sg??rr M??r and the eastern Fannichs',
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
        name: 'Beinn Liath Mh??r Fannaich',
        uri: '/munros/beinn-liath-mhor-fannaich',
        cords: { long: -4.989775, lat: 57.706095 },
      },
      {
        name: 'Sg??rr M??r',
        uri: '/munros/sgurr-mor',
        cords: { long: -5.016765, lat: 57.700133 },
      },
      {
        name: 'Meall Gorm',
        uri: '/munros/meall-gorm',
        cords: { long: -4.983801, lat: 57.680837 },
      },
      {
        name: 'An Coileachan',
        uri: '/munros/an-coileachan',
        cords: { long: -4.949498, lat: 57.667625 },
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
        name: 'Sg??rr Ban',
        uri: '/munros/sgurr-ban',
        cords: { long: -5.265903, lat: 57.718538 },
      },
      {
        name: 'Mullach Coire Mhic Fhearchair',
        uri: '/munros/mullach-coire-mhic-fhearchair',
        cords: { long: -5.271342, lat: 57.709022 },
      },
      {
        name: 'Beinn Tarsuinn',
        uri: '/munros/beinn-tarsuinn',
        cords: { long: -5.291634, lat: 57.702051 },
      },
      {
        name: "A' Mhaighdean",
        uri: '/munros/a-mhaighdean',
        cords: { long: -5.346721, lat: 57.719653 },
      },
      {
        name: 'Ruadh Stac M??r',
        uri: '/munros/ruadh-stac-mor',
        cords: { long: -5.329288, lat: 57.726781 },
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
    title: 'Seana Bhr??igh',
    desc: 'Seana Bhr??igh is a remote Munro with dramatic northern cliffs and great wilderness views. A long walk, with sections which could be difficult to navigate in poor visibility. The forestry track can be cycled to save 5km of walking.',
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
        name: 'Seana Bhr??igh',
        uri: '/munros/seana-bhraigh',
        cords: { long: -4.89662, lat: 57.84733 },
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
    title: "Sg??rr Breac and A' Chailleach: The Western Fannichs",
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
        name: 'Sg??rr Breac',
        uri: '/munros/sgurr-breac',
        cords: { long: -5.09131, lat: 57.691943 },
      },
      {
        name: "A' Chailleach",
        uri: '/munros/a-chailleach',
        cords: { long: -5.128713, lat: 57.693773 },
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
    title: 'Sg??rr nan Clach Geala, near Braemore',
    desc: "Sg??rr nan Clach Geala is the finest of the Fannichs, with its impressive eastern corrie. In combination with the neighbouring Munros of Meall a' Chrasgaidh and Sg??rr nan Each it gives an excellent ridgewalk.",
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
        cords: { long: -5.048742, lat: 57.712866 },
      },
      {
        name: 'Sg??rr nan Clach Geala',
        uri: '/munros/sgurr-nan-clach-geala',
        cords: { long: -5.048237, lat: 57.696278 },
      },
      {
        name: 'Sg??rr nan Each',
        uri: '/munros/sgurr-nan-each',
        cords: { long: -5.04635, lat: 57.681008 },
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
