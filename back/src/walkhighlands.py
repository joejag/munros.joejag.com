import json
import requests
import boto3

from urllib.parse import urlparse, parse_qs
from datetime import datetime
from bs4 import BeautifulSoup

dynamodb = boto3.resource('dynamodb')

NAME_TO_URI = {"A' Bhuidheanach Bheag": '/munros/a-bhuidheanach-bheag', "A' Chailleach (Fannichs)": '/munros/a-chailleach', "A' Chailleach (Monadhliath)": '/munros/a-chailleach-monadhliath', "A' Chralaig": '/munros/a-chralaig', "A' Ghlas-bheinn": '/munros/a-ghlas-bheinn', "A' Mhaighdean": '/munros/a-mhaighdean', "A' Mharconaich": '/munros/a-mharconaich', 'Am Basteir': '/munros/am-basteir', 'Am Bodach': '/munros/am-bodach', 'Am Faochagach': '/munros/am-faochagach', 'An Caisteal': '/munros/an-caisteal', 'An Coileachan': '/munros/an-coileachan', 'An Gearanach': '/munros/an-gearanach', 'An Riabhachan': '/munros/an-riabhachan', 'An Sgarsoch': '/munros/an-sgarsoch', 'An Socach (Affric)': '/munros/an-socach-affric', 'An Socach (Braemar)': '/munros/an-socach-braemar', 'An Socach (Mullardoch)': '/munros/an-socach-mullardoch', 'An Stùc': '/munros/an-stuc', 'Aonach Air Chrith': '/munros/aonach-air-chrith', 'Aonach Beag (Alder)': '/munros/aonach-beag-alder', 'Aonach Beag (Nevis Range)': '/munros/aonach-beag-nevis-range', 'Aonach Meadhoin': '/munros/aonach-meadhoin', 'Aonach Mòr': '/munros/aonach-mor', "Beinn a' Bhùird": '/munros/beinn-a-bhuird', "Beinn a' Chaorainn (Cairngorms)": '/munros/beinn-a-chaorainn-cairngorms', "Beinn a' Chaorainn (Glen Spean)": '/munros/beinn-a-chaorainn-glen-spean', "Beinn a' Chlachair": '/munros/beinn-a-chlachair', "Beinn a' Chlèibh": '/munros/beinn-a-chleibh', "Beinn a' Chochuill": '/munros/beinn-a-chochuill', "Beinn a' Chreachain": '/munros/beinn-a-chreachain', "Beinn a' Chròin": '/munros/beinn-a-chroin', 'Beinn Achaladair': '/munros/beinn-achaladair', 'Beinn an Dòthaidh': '/munros/beinn-an-dothaidh', 'Beinn Bheoil': '/munros/beinn-bheoil', 'Beinn Bhreac': '/munros/beinn-bhreac', 'Beinn Bhrotain': '/munros/beinn-bhrotain', 'Beinn Bhuidhe': '/munros/beinn-bhuidhe', 'Beinn Chabhair': '/munros/beinn-chabhair', 'Beinn Dearg (Blair Atholl)': '/munros/beinn-dearg-blair-atholl', 'Beinn Dearg (Ullapool)': '/munros/beinn-dearg-ullapool', 'Beinn Dòrain': '/munros/beinn-dorain', 'Beinn Dubhchraig': '/munros/beinn-dubhchraig', 'Beinn Èibhinn': '/munros/beinn-eibhinn', 'Beinn Eunaich': '/munros/beinn-eunaich', 'Beinn Fhada': '/munros/beinn-fhada', 'Beinn Fhionnlaidh': '/munros/beinn-fhionnlaidh', 'Beinn Fhionnlaidh (Càrn Eige)': '/munros/beinn-fhionnlaidh-carn-eige', 'Beinn Ghlas': '/munros/beinn-ghlas', 'Beinn Heasgarnich': '/munros/beinn-heasgarnich', 'Beinn Ìme': '/munros/beinn-ime', 'Beinn Iutharn Mhòr': '/munros/beinn-iutharn-mhor', 'Beinn Liath Mhòr': '/munros/beinn-liath-mhor', 'Beinn Liath Mhòr Fannaich': '/munros/beinn-liath-mhor-fannaich', 'Beinn Mhanach': '/munros/beinn-mhanach', 'Beinn Mheadhoin': '/munros/beinn-mheadhoin', 'Beinn na Lap': '/munros/beinn-na-lap', 'Beinn nan Aighenan': '/munros/beinn-nan-aighenan', 'Beinn Narnain': '/munros/beinn-narnain', 'Beinn Sgritheall': '/munros/beinn-sgritheall', 'Beinn Sgulaird': '/munros/beinn-sgulaird', 'Beinn Tarsuinn': '/munros/beinn-tarsuinn', 'Beinn Teallach': '/munros/beinn-teallach', 'Beinn Tulaichean': '/munros/beinn-tulaichean', 'Beinn Udlamain': '/munros/beinn-udlamain', 'Ben Alder': '/munros/ben-alder', 'Ben Avon': '/munros/ben-avon', 'Ben Challum': '/munros/ben-challum', 'Ben Chonzie': '/munros/ben-chonzie', 'Ben Cruachan': '/munros/ben-cruachan', 'Ben Hope': '/munros/ben-hope', 'Ben Klibreck': '/munros/ben-klibreck', 'Ben Lawers': '/munros/ben-lawers', 'Ben Lomond': '/munros/ben-lomond', 'Ben Lui': '/munros/ben-lui', 'Ben Macdui': '/munros/ben-macdui', 'Ben More': '/munros/ben-more', 'Ben More (Mull)': '/munros/ben-more-mull', 'Ben More Assynt': '/munros/ben-more-assynt', 'Ben Nevis': '/munros/ben-nevis', 'Ben Oss': '/munros/ben-oss', 'Ben Starav': '/munros/ben-starav', 'Ben Vane': '/munros/ben-vane', 'Ben Vorlich (Loch Earn)': '/munros/ben-vorlich-loch-earn', 'Ben Vorlich (Loch Lomond)': '/munros/ben-vorlich-loch-lomond', 'Ben Wyvis': '/munros/ben-wyvis', 'Bidean nam Bian': '/munros/bidean-nam-bian', "Bidein a' Choire Sheasgaich": '/munros/bidein-a-choire-sheasgaich', "Bidein a' Ghlas Thuill (An Teallach)": '/munros/bidein-a-ghlas-thuill-an-teallach', 'Binnein Beag': '/munros/binnein-beag', 'Binnein Mòr': '/munros/binnein-mor', 'Blà Bheinn': '/munros/bla-bheinn', 'Braeriach': '/munros/braeriach', 'Bràigh Coire Chruinn-bhalgain': '/munros/braigh-coire-chruinn-bhalgain', 'Broad Cairn': '/munros/broad-cairn', 'Bruach na Frìthe': '/munros/bruach-na-frithe', 'Bynack More': '/munros/bynack-more', 'Cairn Bannoch': '/munros/cairn-bannoch', 'Cairn Gorm': '/munros/cairn-gorm', 'Cairn of Claise': '/munros/cairn-of-claise', 'Cairn Toul': '/munros/cairn-toul', "Càrn a' Chlamain": '/munros/carn-a-chlamain', "Càrn a' Choire Bhòidheach": '/munros/carn-a-choire-bhoidheach', "Càrn a' Ghèoidh": '/munros/carn-a-gheoidh', "Càrn a' Mhàim": '/munros/carn-a-mhaim', 'Càrn an Fhìdhleir (Càrn Ealar)': '/munros/carn-an-fhidhleir-carn-ealar', 'Càrn an Rìgh': '/munros/carn-an-righ', 'Càrn an t-Sagairt Mòr': '/munros/carn-an-t-sagairt-mor', 'Càrn an Tuirc': '/munros/carn-an-tuirc', 'Càrn Aosda': '/munros/carn-aosda', 'Càrn Bhac': '/munros/carn-bhac', 'Càrn Dearg (Corrour)': '/munros/carn-dearg-corrour', 'Càrn Dearg (Loch Pattack)': '/munros/carn-dearg-loch-pattack', 'Càrn Dearg (Monadhliath)': '/munros/carn-dearg-monadhliath', 'Càrn Eige': '/munros/carn-eige', 'Càrn Ghluasaid': '/munros/carn-ghluasaid', 'Càrn Gorm': '/munros/carn-gorm', "Càrn Liath (Beinn a' Ghlò)": '/munros/carn-liath-beinn-a-ghlo', 'Càrn Liath (Creag Meagaidh)': '/munros/carn-liath-creag-meagaidh', 'Càrn Mairg': '/munros/carn-mairg', 'Càrn Mòr Dearg': '/munros/carn-mor-dearg', 'Càrn na Caim': '/munros/carn-na-caim', 'Càrn nan Gabhar': '/munros/carn-nan-gabhar', 'Càrn nan Gobhar (Loch Mullardoch)': '/munros/carn-nan-gobhar-loch-mullardoch', 'Càrn nan Gobhar (Strathfarrar)': '/munros/carn-nan-gobhar-strathfarrar', 'Càrn Sgulain': '/munros/carn-sgulain', 'Chno Dearg': '/munros/chno-dearg', 'Ciste Dhubh': '/munros/ciste-dhubh', "Cona' Mheall": '/munros/cona-mheall', 'Conival': '/munros/conival', "Creag a'Mhàim": '/munros/creag-a-mhaim', 'Creag Leacach': '/munros/creag-leacach', 'Creag Meagaidh': '/munros/creag-meagaidh', 'Creag Mhòr (Glen Lochay)': '/munros/creag-mhor-glen-lochay', 'Creag Mhòr (Meall na Aighean)': '/munros/creag-mhor-meall-na-aighean', 'Creag nan Dàmh': '/munros/creag-nan-damh', 'Creag Pitridh': '/munros/creag-pitridh', 'Creise': '/munros/creise', 'Cruach Àrdrain': '/munros/cruach-ardrain', 'Derry Cairngorm': '/munros/derry-cairngorm', 'Driesh': '/munros/driesh', 'Druim Shionnach': '/munros/druim-shionnach', 'Eididh nan Clach Geala': '/munros/eididh-nan-clach-geala', 'Fionn Bheinn': '/munros/fionn-bheinn', 'Gairich': '/munros/gairich', 'Garbh Chioch Mhòr': '/munros/garbh-chioch-mhor', 'Geal chàrn (Laggan)': '/munros/geal-charn', 'Geal Chàrn (Monadhliath)': '/munros/geal-charn-monadhliath', 'Geal-chàrn (Alder)': '/munros/geal-charn-alder',
               'Geal-chàrn (Drumochter)': '/munros/geal-charn-drumochter', 'Glas Bheinn Mhòr': '/munros/glas-bheinn-mhor', 'Glas Maol': '/munros/glas-maol', 'Glas Tulaichean': '/munros/glas-tulaichean', 'Gleouraich': '/munros/gleouraich', 'Gulvain': '/munros/gulvain', 'Inaccessible Pinnacle': '/munros/inaccessible-pinnacle', 'Ladhar Bheinn': '/munros/ladhar-bheinn', 'Lochnagar': '/munros/lochnagar', 'Luinne Bheinn': '/munros/luinne-bheinn', 'Lurg Mhòr': '/munros/lurg-mhor', 'Màm Sodhail': '/munros/mam-sodhail', 'Maoile Lunndaidh': '/munros/maoile-lunndaidh', 'Maol Chean-dearg': '/munros/maol-chean-dearg', 'Maol chinn-dearg': '/munros/maol-chinn-dearg', 'Mayar': '/munros/mayar', "Meall a' Bhùiridh": '/munros/meall-a-bhuiridh', "Meall a' Choire Lèith": '/munros/meall-a-choire-leith', "Meall a' Chrasgaidh": '/munros/meall-a-chrasgaidh', 'Meall Buidhe (Glen Lyon)': '/munros/meall-buidhe-glen-lyon', 'Meall Buidhe (Knoydart)': '/munros/meall-buidhe-knoydart', 'Meall Chuaich': '/munros/meall-chuaich', 'Meall Corranaich': '/munros/meall-corranaich', 'Meall Dearg (Aonach Eagach)': '/munros/meall-dearg-aonach-eagach', 'Meall Garbh (Ben Lawers)': '/munros/meall-garbh-ben-lawers', 'Meall Garbh (Càrn Mairg)': '/munros/meall-garbh-carn-mairg', 'Meall Ghaordaidh': '/munros/meall-ghaordaidh', 'Meall Glas': '/munros/meall-glas', 'Meall Gorm': '/munros/meall-gorm', 'Meall Greigh': '/munros/meall-greigh', 'Meall na Teanga': '/munros/meall-na-teanga', 'Meall nan Ceapraichean': '/munros/meall-nan-ceapraichean', 'Meall nan Eun': '/munros/meall-nan-eun', 'Meall nan Tarmachan': '/munros/meall-nan-tarmachan', 'Monadh Mòr': '/munros/monadh-mor', 'Moruisg': '/munros/moruisg', 'Mount Keen': '/munros/mount-keen', 'Mullach an Rathain (Liathach)': '/munros/mullach-an-rathain-liathach', "Mullach Clach a' Bhlàir": '/munros/mullach-clach-a-bhlair', 'Mullach Coire Mhic Fhearchair': '/munros/mullach-coire-mhic-fhearchair', 'Mullach Fraoch-choire': '/munros/mullach-fraoch-choire', 'Mullach na Dheiragain': '/munros/mullach-nan-dheiragain', 'Mullach nan Coirean': '/munros/mullach-nan-coirean', 'Na Gruagaichean': '/munros/na-gruagaichean', 'Ruadh Stac Mòr': '/munros/ruadh-stac-mor', 'Ruadh-stac Mòr (Beinn Eighe)': '/munros/ruadh-stac-mor-beinn-eighe', 'Sàil Chaorainn': '/munros/sail-chaorainn', 'Sàileag': '/munros/saileag', 'Schiehallion': '/munros/schiehallion', 'Seana Bhràigh': '/munros/seana-bhraigh', 'Sgàirneach Mhòr': '/munros/sgairneach-mhor', 'Sgiath Chùil': '/munros/sgiath-chuil', 'Sgòr an Lochain Uaine': '/munros/sgor-an-lochain-uaine', 'Sgòr Gaibhre': '/munros/sgor-gaibhre', 'Sgòr Gaoith': '/munros/sgor-gaoith', 'Sgòr na h-Ulaidh': '/munros/sgor-na-h-ulaidh', "Sgòrr Dhearg (Beinn a' Bheithir)": '/munros/sgorr-dhearg-beinn-a-bheithir', "Sgòrr Dhònuill (Beinn a' Bheithir)": '/munros/sgorr-dhonuill-beinn-a-bheithir', 'Sgòrr nam Fiannaidh (Aonach Eagach)': '/munros/sgorr-nam-fiannaidh-aonach-eagach', 'Sgòrr Ruadh': '/munros/sgorr-ruadh', "Sgùrr a' Bhealaich Dheirg": '/munros/sgurr-a-bhealaich-dheirg', "Sgùrr a' Chaorachain": '/munros/sgurr-a-chaorachain', "Sgùrr a' Choire Ghlais": '/munros/sgurr-a-choire-ghlais', "Sgùrr a' Ghreadaidh": '/munros/sgurr-a-ghreadaidh', "Sgùrr a' Mhadaidh": '/munros/sgurr-a-mhadaidh', "Sgùrr a' Mhàim": '/munros/sgurr-a-mhaim', "Sgùrr a' Mhaoraich": '/munros/sgurr-a-mhaoraich', 'Sgùrr Alasdair': '/munros/sgurr-alasdair', 'Sgùrr an Doire Leathain': '/munros/sgurr-an-doire-leathain', 'Sgùrr an Lochain': '/munros/sgurr-an-lochain', 'Sgùrr Bàn': '/munros/sgurr-ban', 'Sgùrr Breac': '/munros/sgurr-breac', 'Sgùrr Chòinnich': '/munros/sgurr-choinnich', 'Sgùrr Chòinnich Mòr': '/munros/sgurr-choinnich-mor', 'Sgùrr Dubh Mòr': '/munros/sgurr-dubh-mor', 'Sgùrr Èilde Mòr': '/munros/sgurr-eilde-mor', 'Sgùrr Fhuar-thuill': '/munros/sgurr-fhuar-thuill', 'Sgùrr Fhuaran': '/munros/sgurr-fhuaran', 'Sgùrr Fiona (An Teallach)': '/munros/sgurr-fiona-an-teallach', 'Sgùrr Mhic Chòinnich': '/munros/sgurr-mhic-choinnich', 'Sgùrr Mòr': '/munros/sgurr-mor', 'Sgùrr Mòr (Beinn Alligin)': '/munros/sgurr-mor-beinn-alligin', 'Sgùrr Mòr (Loch Quoich)': '/munros/sgurr-mor-loch-quoich', 'Sgùrr na Banachdich': '/munros/sgurr-na-banachdich', 'Sgùrr na Càrnach': '/munros/sgurr-na-carnach', 'Sgùrr na Cìche': '/munros/sgurr-na-ciche', 'Sgùrr na Ciste Duibhe': '/munros/sgurr-na-ciste-duibhe', 'Sgùrr na Lapaich': '/munros/sgurr-na-lapaich', 'Sgùrr na Ruaidhe': '/munros/sgurr-na-ruaidhe', 'Sgùrr na Sgìne': '/munros/sgurr-na-sgine', 'Sgùrr nan Ceathreamhnan': '/munros/sgurr-nan-ceathreamhnan', 'Sgùrr nan Clach Geala': '/munros/sgurr-nan-clach-geala', 'Sgùrr nan Coireachan (Glen Dessary)': '/munros/sgurr-nan-coireachan-glen-dessary', 'Sgùrr nan Coireachan (Glenfinnan)': '/munros/sgurr-nan-coireachan-glenfinnan', 'Sgùrr nan Conbhairean': '/munros/sgurr-nan-conbhairean', 'Sgùrr nan Each': '/munros/sgurr-nan-each', 'Sgùrr nan Eag': '/munros/sgurr-nan-eag', 'Sgùrr nan Gillean': '/munros/sgurr-nan-gillean', 'Sgùrr Thuilm': '/munros/sgurr-thuilm', 'Slioch': '/munros/slioch', "Spidean a' Choire Lèith (Liathach)": '/munros/spidean-a-choire-leith-liathach', 'Spidean Coire nan Clach (Beinn Eighe)': '/munros/spidean-coire-nan-clach-beinn-eighe', 'Spidean Mialach': '/munros/spidean-mialach', "Sròn a' Choire Ghairbh": '/munros/sron-a-choire-ghairbh', "Stob a' Choire Mheadhoin": '/munros/stob-a-choire-mheadhoin', "Stob a' Choire Odhair": '/munros/stob-a-choire-odhair', 'Stob Bàn (Grey Corries)': '/munros/stob-ban-grey-corries', 'Stob Bàn (Mamores)': '/munros/stob-ban-mamores', 'Stob Binnein': '/munros/stob-binnein', 'Stob Choire Claurigh': '/munros/stob-choire-claurigh', 'Stob Coir an Albannaich': '/munros/stob-coir-an-albannaich', "Stob Coire a' Chàirn": '/munros/stob-coire-a-chairn', 'Stob Coire an Laoigh': '/munros/stob-coire-an-laoigh', 'Stob Coire Easain': '/munros/stob-coire-easain', 'Stob Coire Raineach (Buachaille Etive Beag)': '/munros/stob-coire-raineach-buachaille-etive-beag', 'Stob Coire Sgreamhach': '/munros/stob-coire-sgreamhach', 'Stob Coire Sgriodain': '/munros/stob-coire-sgriodain', 'Stob Daimh': '/munros/stob-diamh', 'Stob Dearg (Buachaille Etive Mòr)': '/munros/stob-dearg-buachaille-etive-mor', 'Stob Dubh (Buachaille Etive Beag)': '/munros/stob-dubh-buachaille-etive-beag', 'Stob Ghabhar': '/munros/stob-ghabhar', 'Stob na Bròige  (Buachaille Etive Mòr)': '/munros/stob-na-broige-buachaille-etive-mor', 'Stob Poite Coire Àrdair': '/munros/stob-poite-coire-ardair', "Stùc a' Chròin": '/munros/stuc-a-chroin', 'Stùcd an Lochain': '/munros/stuchd-an-lochain', 'The Cairnwell': '/munros/the-cairnwell', "The Devil's Point": '/munros/the-devils-point', 'The Saddle': '/munros/the-saddle', 'Toll Creagach': '/munros/toll-creagach', 'Tolmount': '/munros/tolmount', "Tom a' Chòinich": '/munros/tom-a-choinich', 'Tom Buidhe': '/munros/tom-buidhe', 'Tom na Gruagaich (Beinn Alligin)': '/munros/tom-na-gruagaich-beinn-alligin'}

MAX_CACHE_AGE = 30


def fetch_munros(user_name):
    # from the user_name, find the author_id from the 'search posts' hyperlink
    author_page = f"https://www.walkhighlands.co.uk/blogs/{user_name}"
    result = requests.get(author_page)
    soup = BeautifulSoup(result.content, "html.parser")
    href = soup.find_all("a", href=True, text='Search posts')[0]
    user_id = parse_qs(urlparse(href['href']).query)['author_id'][0]

    # Find the Munro map, blue color munro names are bagged
    sample = f"https://www.walkhighlands.co.uk/Forum/memberlist.php?mode=viewmap&u={user_id}"
    result = requests.get(sample)
    soup = BeautifulSoup(result.content, "html.parser")
    munros_done = []
    for a in soup.find_all("span"):
        if 'style' in a.attrs and 'color:blue;' in a.attrs['style']:
            munros_done.append(NAME_TO_URI[a.string.strip()])

    # cache the result
    table = dynamodb.Table('munro_cache')
    table.put_item(
        Item={
            'id': user_name,
            'munros': json.dumps(munros_done),
            'lastRefreshed': datetime.now().isoformat(timespec='seconds')
        }
    )


def handler(event, context):
    user_name = event["queryStringParameters"]["u"]

    table = dynamodb.Table('munro_cache')

    response = table.get_item(Key={'id': user_name})
    if 'Item' not in response:
        fetch_munros(user_name)

    response = table.get_item(Key={'id': user_name})
    refreshed_data = datetime.strptime(
        response['Item']['lastRefreshed'], '%Y-%m-%dT%H:%M:%S')
    minutes_diff = (datetime.now() - refreshed_data).total_seconds() / 60.0

    if minutes_diff > MAX_CACHE_AGE:
        fetch_munros(user_name)

    response = table.get_item(Key={'id': user_name})
    refreshed_data = datetime.strptime(
        response['Item']['lastRefreshed'], '%Y-%m-%dT%H:%M:%S')
    minutes_diff = (datetime.now() - refreshed_data).total_seconds() / 60.0
    munros_done = json.loads(response['Item']['munros'])

    response = {
        "name": user_name,
        "cache_age": minutes_diff,
        "munros": munros_done
    }

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            'content-type': 'application/json'
        },
        'body': json.dumps(response)
    }


# event = {}
# event["queryStringParameters"] = {}
# event["queryStringParameters"]['u'] = "joejag"
# print(handler(event, None))
