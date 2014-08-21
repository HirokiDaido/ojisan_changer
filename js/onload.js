var classNameList = ['profile', 'user', 'gravatar', 'avatar'];
var imgSrcs = [
	'http://www.1genki.net/225px-Galileo_arp_300pix.jpg',
	'http://estorypost.com/wp-content/uploads/2013/04/e670a8cf4683ae09cd0e9c93f3b65ab5.jpg?229b3e',
	'http://d.hatena.ne.jp/images/diary/r/rensan/2009-10-12.jpg',
	'http://cache5.amanaimages.com/cen3tzG4fTr7Gtw1PoeRer/26004004493.jpg',
	'http://t0.gstatic.com/images?q=tbn:ANd9GcT03mtvktINm8NOInVouvNtF3W48LVcGzIqrD3aiH5LFSdvJqPK',
	'http://www.astronomy2009.jp/ja/webproject/life-g/_src/sc221/profile.jpg',
	'http://dunan.c.blog.so-net.ne.jp/_images/blog/_f96/dunan/gm_Galileo_Galilei_03_10.jpg?c=a0'
];
var items = document.getElementsByTagName('img')
for (var i = 0; i < items.length; i++){
	var item = items[i]
	for (var j = 0; j < classNameList.length; j++){
		if(item.width < 300 && item.height < 300){
			item.src = random(imgSrcs)
			break;
		}
	}
}
function random(array, num) {
    var a = array.concat(); // clone.
    var l = array.length;

    var i = Math.floor(Math.random() * l);
    return a[i]
}