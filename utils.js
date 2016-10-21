/*
* 项目基础类

*/


var utils = {
	/**
	 *获取浏览器版本
	 * @return Array
	 */
	Browser	:	function()
	{
		return {
			isMozilla		:	(typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined') && (typeof HTMLDocument != 'undefined'),
			isIE			:	window.ActiveXObject ? true : false,
			isFirefox		:	(navigator.userAgent.toLowerCase().indexOf("firefox") != - 1),
			isSafari		:	(navigator.userAgent.toLowerCase().indexOf("safari") != - 1),
			isOpera			:	(navigator.userAgent.toLowerCase().indexOf("opera") != - 1)
		};
	},



	/**
	 *获取网站访问URL
	 * @return string
	 */
	homeUrl	:	function (){
		var localBaseUrl = window.location.protocol+'//';
		localBaseUrl +=window.location.host+'/';
//		alert(localBaseUrl+'_'+(window.location.port));
		if (!this.isEmpty(window.location.port)){
			localBaseUrl+='zgww/';
		}
		return localBaseUrl;
	},

	/**
	 *过滤HTML字符
	 *text，String
	 * @return String
	 */
	htmlEncode	:	function( text )
	{
		if (typeof(text) != 'string' || this.isEmpty(text))
		{
			return '';
		}
		return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	},
	/**
	 *过滤文本中的制表符
	 *text，String
	 * @return String
	 */
	cleanTabs	:	function( text )
	{
		if (typeof( text ) == 'string' && !this.isEmpty(text))
		{
			text = text.replace("\r\n", "");
			text = text.replace("\r", "");
			text = text.replace("\n", "");
			text = text.replace("\t", "");
		}
		return text;
	},


	/**
	 *判断值是否为空
	 *val 任意值
	 *@return boolean
	 */
	isEmpty	:	function( val )
	{
		switch (typeof( val ))
		{
			case 'string':
				return $.trim(val).length == 0 ? true : false;
			break;
			case 'number':
				return val == 0;
			break;
			case 'object':
				for (var name in val)
				{
					return false;
				}
				return true;
			break;
			case 'array':
				return val.length == 0;
			break;
			default:
				return true;
			break;
		}
	},

	/*
	 * 检测对象是否是空对象(不包含任何可读属性)。 //如你上面的那个对象就是不含任何可读属性
	 * 方法只既检测对象本身的属性，不检测从原型继承的属性。
	 */
	isOwnEmpty : function (obj)
	{
		for(var name in obj)
		{
			if(obj.hasOwnProperty(name))
			{
				return false;
			}
		}
		return true;
	},
	/**
	 *判断值是否数字
	 *val 任意值
	 *@return boolean
	 */
	isNumber	:	function( val )
	{
		var reg = /^[\d|\.|,]+$/;
		return reg.test(val);
	},
	/**
	 *判断值是否对象
	 *val 任意值
	 *@return boolean
	 */
	isObject	:	function( obj )
	{
		return typeof(obj) == 'object';
	},
	/**
	 *判断值是否整数
	 *val 任意值
	 *@return boolean
	 */
	isInt	:	function( val )
	{
		if (val == "")
		{
			return false;
		}
		var reg = /\D+/;
		return !reg.test(val);
	},

	//功能：将浮点数四舍五入，取小数点后2位
	toDecimal : function (x) {
		var f = parseFloat(x);
		if (isNaN(f)) {
			return '0.00';
		}
		f = Math.round(x*100)/100;
		return f.toFixed(2);
	},

	/**
	 *判断值是否是EMAIL
	 *email 任意值
	 *@return boolean
	 */
	isEmail	:	function( email )
	{
		var reg1 = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
		return reg1.test( email );
	},
	/**
	 *判断值是否是手机号码
	 *Mobile 任意值
	 *@return boolean
	 */
	isMobile	:	function( Mobile )
	{
		if (this.isEmpty(Mobile))
		{
			return false;
		}
		var reg1 = /^\d{5,11}$/;
		return reg1.test( Mobile );
	},
	/**
	 *判断值是否是url
	 *url 任意值
	 *@return boolean
	 */
	isUrl	:	function( url )
	{
		if (this.isEmpty(url) || typeof(url) !='string')
		{
			return false;
		}
		var reg = /^[a-zA-z]+:\/\/[^s]*/;
		return reg.test( url );
	},

	/**
	 *判断值是否是时间格式
	 *val 任意值
	 *@return boolean
	 */

	isTime : function( val )
	{
		var reg = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/;
		return reg.test(val);
	},
	/**
	 *获取URL中的变量
	 *item 任意值
	 *@return String
	 */
	q	:	function ( item )
	{
		var sValue = location.search.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)","i"));
			return sValue ? sValue[1] : sValue;
	},

	/**
	 *判断值是否是null
	 *val 任意值
	 *@return boolean
	 */

	isNull	:	function ( val )
	{
		return typeof val == "undefined" || val == null || val == '' ? true : false;
	},

	/**
	 *判断值是否是undefined
	 *val 任意值
	 *@return boolean
	 */
	isUndefined	:	function ( val )
	{
		return typeof val == "undefined" ? true : false;
	},

	/**
	 *判断值是否是数组
	 *obj 任意值
	 *@return boolean
	 */
	isArray  :  function(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	} ,
	/**
	 *判断值是否存在于数组中
	 *needle，需要查找的值；haystack，数组
	 *@return boolean
	 */
	in_array	:	function( needle, haystack )
	{
		if(typeof needle == 'string')
		{
			for(var i in haystack)
			{
				if( haystack[i] == needle )
				{
					return true;
				}
			}
		}
		return false;
	},
		//统计字数

	/**
	 *统计字数
	 *str，String，需要统计的文字
	 *@return Int
	 */
	strLen	: function (str){
         var myLen = 0;
         for (var i=0; i < str.length; i++) {
             if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128)
                 myLen++;
             else
                 myLen += 2;
         }
         return myLen;
	},


	/**
	 *字符串截取函数
	 *str，String，需要截取的字符；len，Int， 截取字符数量;hasDot，String， 字符截取后增加的后缀
	 *@return String
	 */
	strCut	:	function( str, len, hasDot)
	{
		if (this.isEmpty(str))
		{
			return str;
		}
		var strlen = 0, s = '';
		for(var i = 0;i < str.length;i++)
		{
			if(str.charCodeAt(i) > 128){
				strlen += 2;
			}else{
				strlen++;
			}
			s += str.charAt(i);
			if(strlen >= len){
				if (!this.isNull(hasDot))
				{
					s += hasDot;
				}
				return s ;
			}
		}


		return s;
	},
	/**
	 *字符串隐藏函数，但只返回字符串的第一个字母和最后一个字母
	 *str，String，需要截取的字符；
	 *@return String
	 */
	substrs	:	function (str, firstLen, lastLen) {
		if (this.isNumber(str))
		{
			str=str.toString();
		}
		firstLen = parseInt(firstLen);
		if (isNaN(firstLen))
		{
			firstLen = 1;
		}
		lastLen = parseInt(lastLen);
		if (isNaN(lastLen))
		{
			lastLen = 1;
		}
		var strlen = 0, s = '', m= '', e= '', len = str.length, re = '';
		for(var i = 0;i < len;i++)
		{

			if (firstLen>0 && i <firstLen)
			{
				s += str.charAt(i);
			}
			if (lastLen> 0 && i >= len - lastLen)
			{
				e += str.charAt(i);
			}
		}
		if (len - (firstLen+lastLen) > 0)
		{
			for (i=0;i<len - (firstLen+lastLen) ; i++)
			{
				m+='*';
			}
		}
		if (m == '')
		{
			m = '***';
		}
		if (firstLen>0)
		{
			re +=s;
		}
		re+=m;
		if (lastLen>0)
		{
			re +=e;
		}
		return re;
	},

	/**
	 *图像缩略图函数
	 *obj，Object，图像文件；img_width，Int， 缩略图宽度;img_height，Int，缩略图高度；_margintop，垂直居中，数字为1时，不进行垂直居中操作
	 */
	imgResize	:	function ( obj, img_width, img_height, _margintop )
	{

			if ($(obj).width()>img_width ||  $(obj).height() > img_height)
			{
				if((img_width/img_height) <= ($(obj).width()/ $(obj).height()))
				{
					ftow=img_width;
					ftoh=ftow*( $(obj).height()/$(obj).width());
				}else{
					ftoh=img_height;
					ftow=ftoh*($(obj).width()/ $(obj).height());
				}
				$(obj).css('width',ftow);
				$(obj).css('height',ftoh);
			}
			if ( $(obj).height()<img_height && _margintop!=1)
			{
				$(obj).css('margin-top', ((img_height- $(obj).height())/2)+'px');
			}

	},

	/**
	 *将日期时间转换为时间戳
	 *a，time 格式 2013-3-15 12:12；
	 *@return Number
	 */
	timeStamp	:	function (a) {
			var b = a.substring(0, 10).split('-'), dot = '-',  c = a.substring(10, 19);
			if (this.Browser().isFirefox || this.Browser().isMozilla) dot = '/';
			if (c == '') c = '00:00:00';
			return Date.parse(b[1] + dot + b[2] + dot + b[0] + ' ' + c);
	},

	/**
	 *时间戳将转换为日期时间
	 *tm，time 格式
	 *@return String 格式示例： 2013-3-15 12:12；
	 */
	timeStamp2Date : function (tm){
		var	now = new Date(parseInt(tm));
		return now.getFullYear()+"-"+((now.getMonth()+1) < 10 ? '0'+(now.getMonth()+1) : (now.getMonth()+1))+"-"+(now.getDate() < 10 ? '0'+now.getDate() : now.getDate())+" "+(now.getHours() <10 ? '0'+now.getHours() : now.getHours())+":"+now.getMinutes()+":"+now.getSeconds();
	},

	/**
	 *计算剩余时间 取得 b 时间否较a 时间 到b时间之间剩余秒数
	 *a，time 格式 2013-3-15 12:12；b，time 格式 2013-3-15 12:12。
	 *@return Number
	 */
	lastTime	:	function (a, b) {
		var l = this.timeStamp(b) - this.timeStamp(a);
		return l;
	},
	/**
	 *获取当前时间
	 * @return String
	 */

	nowTime	: function(f)
	{
		var now = new Date(), _y = now.getFullYear(), _m = now.getMonth()+1, _d = now.getDate(), _h = now.getHours(), _i = now.getMinutes(), _s = now.getSeconds();
		_m = _m < 10 ? '0' + _m : _m;
		_d = _d < 10 ? '0' + _d : _d;
		_h = _h < 10 ? '0' + _h : _h;
		_i = _i < 10 ? '0' + _i : _i;
		_s = _s < 10 ? '0' + _s : _s;
		if (f == undefined)
		{
			f = 'yyyy-MM-dd HH:mm:ss.S';
		}
		return  this.timeFormat(_y + '-'+ _m + '-'+ _d + ' ' + _h + ':' + _i + ':' + _s, f);

	},
	/**
	 *计算b前时间，距离a时间剩余多时间
	 *a，time 格式 2013-3-15 12:12；
	 *@return String
	 */
	timeDown	:	function (a, b, c) {
		if (b == 'now')
		{
			b = this.nowTime();
		}
		if (b == '')
		{
			return '';
		}
		var l = this.lastTime(b, a);

		if (l <= 0)
		{

			return '';
		}
		l = l/1000;
		var r = {};

		r.s = Math.floor(l % 60);             // 计算秒
		r.i = Math.floor((l / 60) % 60);      //计算分
		r.h = Math.floor((l / 3600) % 24);      //计算小时
		r.d = Math.floor((l / 3600) / 24);        //计算天
		if (c == 1)
		{
			return r;
		}
		return (r.d != '' ? r.d+'天' : '')+(r.h != '' ? r.h+'小时' : '')+(r.i != '' ? r.i+'分' : '')+(r.s != '' ? r.s+'秒' : '') ;
	},


	/**
	 *格式化时间
	 *a，time 格式 2013-3-15 12:12；b， ("yyyy-MM-dd HH:mm:ss");
	 *@return String
 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
    可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
    Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
	timeFormat	:	function (a, b) {
		if (a == undefined || a == null || $.trim(a) == '')
		{
			return '';
		}
		Date.prototype.pattern=function(fmt) {
			var o = {
			"M+" : this.getMonth()+1, //月份
			"d+" : this.getDate(), //日
			"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
			"H+" : this.getHours(), //小时
			"m+" : this.getMinutes(), //分
			"s+" : this.getSeconds(), //秒
			"q+" : Math.floor((this.getMonth()+3)/3), //季度
			"S" : this.getMilliseconds() //毫秒
			};
			var week = {
			"0" : "/u65e5",
			"1" : "/u4e00",
			"2" : "/u4e8c",
			"3" : "/u4e09",
			"4" : "/u56db",
			"5" : "/u4e94",
			"6" : "/u516d"
			};
			if(/(y+)/.test(fmt)){
				fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
			}
			if(/(E+)/.test(fmt)){
				fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
			}
			for(var k in o){
				if(new RegExp("("+ k +")").test(fmt)){
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
				}
			}
			return fmt;
		};

		var c = a.substring(0, 10).split('-'), dot = '-',  d = a.substring(10, 19);
		if (this.Browser().isFirefox || this.Browser().isMozilla) dot = '/';
		if (d == '') d = '00:00:00';

		var bb = new Date(c[1] + dot + c[2] + dot + c[0] + ' ' + d);
		return bb.pattern(b);

	},

	/**
	 *将数组或者object转换为URL请求字符串
	 *arr，数组或者object
	 *@return String
	 */
	buildUri	:	function(arr)
	{
		var url = '', comm='?', n=0;
		if (!this.isArray(arr) && !this.isObject(arr))
		{
			return '';
		}

		for (var key in arr)
		{
			if (!this.isEmpty(arr[key]))
			{
				if (n>0)
				{
					comm = '&';
				}
				url+=comm+key+'='+encodeURIComponent(arr[key]);
			}
			n++;
		}

		return url;
	},



	/**
	 *获取当前日期
	 * @return String
	 */

	calendar	: function()
	{
		var now = new Date(), _y = now.getFullYear(), _m = now.getMonth()+1, _d = now.getDate(), _h = now.getHours(), _i = now.getMinutes(), _s = now.getSeconds();
		_m = _m < 10 ? '0' + _m : _m;
		_d = _d < 10 ? '0' + _d : _d;
		_h = _h < 10 ? '0' + _h : _h;
		_i = _i < 10 ? '0' + _i : _i;
		_s = _s < 10 ? '0' + _s : _s;
		var r = _y + '-'+ _m + '-'+ _d + ' ' + _h + ':' + _i + ':' + _s, day;
		switch (now.getDay()){
			case 0:	day = '日';	break;
			case 1:	day = '一';	break;
			case 2:	day = '二';	break;
			case 3:	day = '三';	break;
			case 4:	day = '四';	break;
			case 5:	day = '五';	break;
			case 6:	day = '六';	break;
		}
		r +=' 星期' + day;
		return r;
	},
	/**
	 *loading 提示框
	 */

	loadingA	: function()
	{
		if ($('#loadingA').length <= 0)
		{
			$('body').append('<div id="loadingA" class="loadingA"><img src="'+this.homeUrl()+_adminPath+'/'+'images/loading2.gif" border="0" alt="loading" align="absmiddle"> Loading...</div>');
		}
		$('#loadingA').show();
	},
	/**
	 * 关闭 loading 提示框
	 */
	loadingAcls	: function()
	{
		$('#loadingA').hide();
	},

	loadingA	: function()
	{
		if ($('#loadingA').length <= 0)
		{
			$('body').append('<div id="loadingA" class="loadingA"><img src="'+this.homeUrl()+_adminPath+'/'+'images/loading2.gif" border="0" alt="loading" align="absmiddle"> Loading...</div>');
		}
		$('#loadingA').show();
	},

	/**
	 *
	 * @return Array 返回一个当前页面宽、高和视窗宽、高的数组
	 */
	___getPageSize	:	function ()
	{
		var _x, _y;
		if (window.innerHeight && window.scrollMaxY) {
			_x = window.innerWidth + window.scrollMaxX;
			_y = window.innerHeight + window.scrollMaxY;
		} else if (document.body.scrollHeight > document.body.offsetHeight){ // Mac 以外的浏览器
			_x = document.body.scrollWidth;
			_y = document.body.scrollHeight;
		} else { //  Mac浏览器或IE6、Mozilla 和 Safari
			_x = document.body.offsetWidth;
			_y = document.body.offsetHeight;
		}
		var _w, _h;
		if (self.innerHeight) {
			if(document.documentElement.clientWidth){
				_w = document.documentElement.clientWidth;
			} else {
				_w = self.innerWidth;
			}
			_h = self.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight) { // IE6严格模式
			_w = document.documentElement.clientWidth;
			_h = document.documentElement.clientHeight;
		} else if (document.body) { // 其他浏览器
			_w = document.body.clientWidth;
			_h = document.body.clientHeight;
		}

		//当页面高度小于视窗高度
		var pageHeight =  _y;
		if(_y < _h){
			pageHeight = _h;
		}
		// 当页面宽度小于视窗宽度
		var pageWidth = _w;
		if(_x < _w){
			pageWidth = _x;
		}

		return new Array(pageWidth, pageHeight, _w, _h);
	},

	/**
	 *
	 * @return Array 返回一个当前滚动条的X, Y位置的数组
	 */
	___getPageScroll	:	function ()
	{
		var _x, _y;
		if (self.pageYOffset) {
			_y = self.pageYOffset;
			_x = self.pageXOffset;
		} else if (document.documentElement && document.documentElement.scrollTop) {	 // IE6严格模式
			_y = document.documentElement.scrollTop;
			_x = document.documentElement.scrollLeft;
		} else if (document.body) {// 其他浏览器
			_y = document.body.scrollTop;
			_x = document.body.scrollLeft;
		}
		return new Array(_x,_y);
	},

	/**
	 *数组输出为文本
	 * @return String
	 */
	arrayeval	:	function( arrays )
	{
		space = '';
		evaluate = "Array\n (\n";
		comma = space;
		for(k in arrays) {
			if(this.isObject(arrays[k]) == true || this.isArray(arrays[k]) == true) {
				evaluate+= k+" => "+this.arrayeval(arrays[k]);
			} else {
				evaluate+= k+" => " + arrays[k];
			}
			comma = ",\n";
		}
		evaluate+= "\n)";
		return evaluate;
	}

};
window.utils =utils;
var _homeUrl = utils.homeUrl();

function isCurrentUserLogin(tohref) {
	$.ajax({
		url:"../user/User/getUserInfo.do",
		async:false,
		type: "POST",
		dataType:"json",
		success: function(json){
			if (json[0] == 'OK') {
				if (json[1] != null)
				{
					window.location.href=tohref;
				}else{
					window.location.href='../user/login.html';
				}
			}else{
				window.location.href='../user/login.html';
			}	
		}
	});
}
var intReg=/^[0-9]*[1-9][0-9]*$/;

/**
 * 根据图片ID获取图片路径
 * */
function buildPath(path){
	//var beforePath = 'http://media.liulichangchina.com/'; --线上
	//var beforePath = 'http://192.168.0.41/'; --46
	var beforePath = 'http://media.liulichangchina.com/';
	if(path!=null&&path!='')
		var middlePath = path.substring(0,1).toLowerCase()+'/'+path.substring(1,2).toLowerCase()+'/'+path.substring(2,3).toLowerCase()+'/' ;
	else
		var middlePath = '';
	return beforePath+middlePath+path;
}

/**
 * 缩减标题名称用...代替
 * */
function buildTitle(title,index){
	if(title.length>index){
		title = title.substring(0,index)+'...' ;
	}
	return title;
}

/**
 * 图片适应   onload="imgresize(this, 238, 170, 0, 0)" 
 * */
function imgresize(obj, img_width, img_height, _paddingtop, _paddingleft) {
    if ($(obj).width() > img_width || $(obj).height() > img_height) {
        if ((img_width / img_height) <= ($(obj).width() / $(obj).height())) {
            ftow = img_width;
            ftoh = ftow * ($(obj).height() / $(obj).width());
        } else {
            ftoh = img_height;
            ftow = ftoh * ($(obj).width() / $(obj).height());
        }
        $(obj).css('width', ftow);
        $(obj).css('height', ftoh);
    }
    if ($(obj).height() < img_height && _paddingtop != 1) {
        $(obj).css('padding-top', ((img_height - $(obj).height()) / 2) + 'px');
    }
    if (_paddingtop == 1) {
        $(obj).css('padding-top', '20px');
    }
    if ($(obj).width() < img_width && _paddingleft != 1) {
        $(obj).css('padding-left', ((img_width - $(obj).width()) / 2) + 'px');
    }
    if (_paddingleft == 1) {

        $(obj).css('padding-left', '20px');
    }
}