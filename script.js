// JavaScript
import {LeafletMap, TileLayer, Marker, Popup, Icon, Circle, Polygon} from 'leaflet';
const map = new LeafletMap('map').setView([33.67345752177457, 130.44140661378802], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
//new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//	maxZoom: 19,
//	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//}).addTo(map);

//国土地理院
//new TileLayer('https://maps.gsi.go.jp/#17/35.666126/139.734340/&base=std&ls=std&disp=1&vs=c1g1j0h0k0l0u0t0z0r0s0m0f1', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
new TileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);


const marker = new Marker([33.67345752177457, 130.44140661378802]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// クリック位置の緯度経度表示
const popup = new Popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

//アイコン
const blueIcon = new Icon({
  iconUrl: 'images/ico_blue.png',
  shadowUrl: 'images/ico_shadow.png',

iconSize:     [40, 40], // size of the icon
shadowSize:   [40, 40], // size of the shadow
iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
shadowAnchor: [20, 40],  // the same for the shadow
popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
});

//複数アイコンをまとめて定義
class circleIcon extends Icon {
  static defaultOptions = {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  };
}

const Icon = new circleIcon({ iconUrl: 'images/ico_blue.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

new Marker([緯度, 経度], {icon: blueIcon}).addTo(map).bindPopup('こんにちは！');
new Marker([緯度, 経度], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');

const circle = new Circle([緯度, 経度], {
  color: 'red', //円の輪郭線の色
  fillColor: '#f03', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 1000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

// 多角形の表示
const polygon = new Polygon([
  [緯度, 経度],
  [緯度, 経度],
  [緯度, 経度]
], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3
}).addTo(map);




