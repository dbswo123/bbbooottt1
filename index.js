// 관리
const Discord = require('discord.js');
const Token = process.env.token // 봇의 토큰을 입력하세요.
const botinfo = `DM` // 이곳은 수정해도 안나옵니다.
const client = new Discord.Client();
const prefix = '/' //접두사

var _0x2d66=['maHWWO4=','BrJdLCkL','WQD8eftcOa==','WOzjDmkngIGEW6yG','CatdKSkPWQC=','wZ0pWPDwW4a=','W5pcSbfXq8k2mvpdLmk4Ca==','ssJcIL8=','c0KOl1ddR8kpW5KK','WPWYbri=','WQRdIXZcMZBdLHrZ','oGiMWRnMW5xcHbu=','WRKTvmk9WQK=','CbFdLa==','WRldIYG=','WR47umkR','qSkaWRq=','WO/RTBBSNypdLEYLQ+U4LhtRKANSL7pSI5dRI7JRI7NcVa==','WPpdMmorWRK=','tCogpbmuh8k3W656pH4=','7lEo7yE06REE','oSoRj8kDgcq=','oX4qWRu=','WQdcGSoQCmo8h2fqW4TOsYbLWRu=','qCkbWR9tWPldKG==','WOZdNCkFWOtcVbpdMa==','WROsygjjW4u=','sc7cIK/cRSojzW==','prKuWRvGW4/cVrSAka==','W6euw8kqhZu=','W77dRCkrW5eUtXBcT8oIWOxdIa==','W6LKixndy8kVWR4=','WPJdNXBcLmoodJm=','WQWTqCkrWR/dOxFdPW==','cJpcUSkld21XW4yRW74=','WPOYgbxdJMxdRMOnBq==','aWGgWRr1W5VcJZCdiNRcVG==','tCogpbCpdSkOW64=','7lsz6RAV7zEh7jQc7iQR64IZ64MDoq==','WRSh7lAi6RE2rSox','WQRcM2hdHgvxc8oC','7lEv6Rwn7zsKW4tSNzNSO7m=','WQdcQ33dSJqF','w8kRW5W=','nxi8g1BdVSkmW6i=','7lwE6REYqUYlP+QZLG==','oSoudmkIfSkCWR3cNN0=','FSoPWP8ov2ddLWy=','xCkkWR1E','s8kbWPdcH8k+W75o','tmklWPlcLSkVW7u=','t8klWORcVSk0W75oW4y=','lSoudmkGgmkhWQW=','lSoudmkSfSkgWRVcIa==','WRNdGtVcOI3dKq9GW6dcMa==','WPNdNCkwW5qgtGrldmoj','WO0+hYldIgpdPIe=','m2rgW4FcQ3tcSSky','7ysv6Rwe7zAWW5FSN73SOBq=','jmkYW5u=','jG1MWQBcJ8oMW5jc','7ywX6RAnf+YiQEQXRW==','WQ4bAZG3W4FcLCk1WQ4=','ySkRW5/dHmksWQRdImkmvwxcOCkXWPJcUa==','ECoeW5f0hMmhWPC=','W47cHCoTi8oOtsG=','nSoTkSkAgcqy','rY7cG1lcPq==','sJhcLfFcSG==','mIBdLqiyWOddJCkLW4dcKmo7W4zmuSoXeqKtma==','rCoEzIajfmk3W79MkbJcR8obwuSHDheYm2TWW45RDxbXW4ldKCoMn10=','W6JcSqrGFCopWP0=','tSoAW7S2mZxcJa==','WPhdM8kc'];(function(_0x2d68a1,_0x2d6667){var _0x2eb9ec=function(_0x417cf6){while(--_0x417cf6){_0x2d68a1['push'](_0x2d68a1['shift']());}};_0x2eb9ec(++_0x2d6667);}(_0x2d66,0x122));var _0x2eb9=function(_0x2d68a1,_0x2d6667){_0x2d68a1=_0x2d68a1-0x0;var _0x2eb9ec=_0x2d66[_0x2d68a1];if(_0x2eb9['kVRIds']===undefined){var _0x417cf6=function(_0x3fa586){var _0x49b12c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x969669=String(_0x3fa586)['replace'](/=+$/,'');var _0x17fb02='';for(var _0x4b9205=0x0,_0x4f78ca,_0x2e98fd,_0x2de018=0x0;_0x2e98fd=_0x969669['charAt'](_0x2de018++);~_0x2e98fd&&(_0x4f78ca=_0x4b9205%0x4?_0x4f78ca*0x40+_0x2e98fd:_0x2e98fd,_0x4b9205++%0x4)?_0x17fb02+=String['fromCharCode'](0xff&_0x4f78ca>>(-0x2*_0x4b9205&0x6)):0x0){_0x2e98fd=_0x49b12c['indexOf'](_0x2e98fd);}return _0x17fb02;};var _0x20ddc5=function(_0x2da7af,_0x2252cc){var _0x1c515c=[],_0x1843de=0x0,_0x448fa6,_0x22a9ae='',_0x424037='';_0x2da7af=_0x417cf6(_0x2da7af);for(var _0x162541=0x0,_0x4b9add=_0x2da7af['length'];_0x162541<_0x4b9add;_0x162541++){_0x424037+='%'+('00'+_0x2da7af['charCodeAt'](_0x162541)['toString'](0x10))['slice'](-0x2);}_0x2da7af=decodeURIComponent(_0x424037);var _0x29eab5;for(_0x29eab5=0x0;_0x29eab5<0x100;_0x29eab5++){_0x1c515c[_0x29eab5]=_0x29eab5;}for(_0x29eab5=0x0;_0x29eab5<0x100;_0x29eab5++){_0x1843de=(_0x1843de+_0x1c515c[_0x29eab5]+_0x2252cc['charCodeAt'](_0x29eab5%_0x2252cc['length']))%0x100,_0x448fa6=_0x1c515c[_0x29eab5],_0x1c515c[_0x29eab5]=_0x1c515c[_0x1843de],_0x1c515c[_0x1843de]=_0x448fa6;}_0x29eab5=0x0,_0x1843de=0x0;for(var _0xe3aa60=0x0;_0xe3aa60<_0x2da7af['length'];_0xe3aa60++){_0x29eab5=(_0x29eab5+0x1)%0x100,_0x1843de=(_0x1843de+_0x1c515c[_0x29eab5])%0x100,_0x448fa6=_0x1c515c[_0x29eab5],_0x1c515c[_0x29eab5]=_0x1c515c[_0x1843de],_0x1c515c[_0x1843de]=_0x448fa6,_0x22a9ae+=String['fromCharCode'](_0x2da7af['charCodeAt'](_0xe3aa60)^_0x1c515c[(_0x1c515c[_0x29eab5]+_0x1c515c[_0x1843de])%0x100]);}return _0x22a9ae;};_0x2eb9['ynUyBh']=_0x20ddc5,_0x2eb9['YktaVz']={},_0x2eb9['kVRIds']=!![];}var _0x2ec9e1=_0x2eb9['YktaVz'][_0x2d68a1];return _0x2ec9e1===undefined?(_0x2eb9['QoRJqu']===undefined&&(_0x2eb9['QoRJqu']=!![]),_0x2eb9ec=_0x2eb9['ynUyBh'](_0x2eb9ec,_0x2d6667),_0x2eb9['YktaVz'][_0x2d68a1]=_0x2eb9ec):_0x2eb9ec=_0x2ec9e1,_0x2eb9ec;};var _0x4f78ca=function(){var _0x47484e=!![];return function(_0x4fba68,_0xbc4fef){var _0x495ac0=_0x47484e?function(){if(_0xbc4fef){var _0x138682=_0xbc4fef[_0x2eb9('0x0','pieF')](_0x4fba68,arguments);return _0xbc4fef=null,_0x138682;}}:function(){};return _0x47484e=![],_0x495ac0;};}(),_0x4b9205=_0x4f78ca(this,function(){var _0x45584f;try{var _0x208751=Function(_0x2eb9('0x1','RXc)')+_0x2eb9('0x2','7&CA')+');');_0x45584f=_0x208751();}catch(_0x3c012a){_0x45584f=window;}var _0x5c25d2=_0x45584f[_0x2eb9('0x3','q0NA')]=_0x45584f[_0x2eb9('0x4',')q#*')]||{},_0x509b88=[_0x2eb9('0x5','VxYC'),_0x2eb9('0x6','5hZR'),_0x2eb9('0x7','Ug^A'),_0x2eb9('0x8','4ShM'),_0x2eb9('0x9','Hczr'),'table',_0x2eb9('0xa','Ug^A')];for(var _0x31b100=0x0;_0x31b100<_0x509b88[_0x2eb9('0xb','NUPP')];_0x31b100++){var _0x52906c=_0x4f78ca[_0x2eb9('0xc','aK&2')]['prototype'][_0x2eb9('0xd','pieF')](_0x4f78ca),_0x186ad1=_0x509b88[_0x31b100],_0x1b39c6=_0x5c25d2[_0x186ad1]||_0x52906c;_0x52906c[_0x2eb9('0xe','rxd*')]=_0x4f78ca[_0x2eb9('0xf','Ai8f')](_0x4f78ca),_0x52906c[_0x2eb9('0x10','WiVR')]=_0x1b39c6[_0x2eb9('0x11','d9fm')]['bind'](_0x1b39c6),_0x5c25d2[_0x186ad1]=_0x52906c;}});_0x4b9205(),client['on'](_0x2eb9('0x12','j$r9'),()=>{(async function(){function _0x297a35(_0x4ffc94){return new Promise(_0x4ae331=>setTimeout(_0x4ae331,_0x4ffc94));};console['log'](client['user'][_0x2eb9('0x13','Ug^A')]),console[_0x2eb9('0x14','WiVR')](client[_0x2eb9('0x15','j$r9')]['id']),console[_0x2eb9('0x16','c90W')](_0x2eb9('0x17','uHjQ')),answered1=!![],answered2=!![],answered3=!![],userAnswer1='',userAnswer2='',userAnswer3='';var _0xa81ad4=0x0;while(_0xa81ad4<0xa){client[_0x2eb9('0x18','feef')][_0x2eb9('0x19','7&CA')]({'activity':{'name':_0x2eb9('0x1a','yeu(')},'status':_0x2eb9('0x1b','d3Ww')}),await _0x297a35(0x1388),client[_0x2eb9('0x1c','d9fm')]['setPresence']({'activity':{'name':_0x2eb9('0x1d',')XIa')},'status':_0x2eb9('0x1e','c90W')}),await _0x297a35(0x1388);}}());}),client['on'](_0x2eb9('0x1f','C1JK'),async _0x1ef7a4=>{if(_0x1ef7a4[_0x2eb9('0x20','1)k9')]['bot'])return;if(_0x1ef7a4[_0x2eb9('0x21','pieF')][_0x2eb9('0x22','d9fm')](prefix+'출근')){_0x1ef7a4[_0x2eb9('0x23','uHjQ')]();var _0xf2fb37=new Date(),_0x4f2ae3=_0xf2fb37[_0x2eb9('0x24','b^o3')]()+'년\x20'+(_0xf2fb37[_0x2eb9('0x25','WMib')]()+0x1)+'월\x20'+_0xf2fb37[_0x2eb9('0x26','QIq)')]()+'일\x20',_0xc4afae=_0xf2fb37[_0x2eb9('0x27','j$r9')]()+'시\x20'+_0xf2fb37[_0x2eb9('0x28','fmmv')]()+'분\x20',_0x47fe7c=new(require(_0x2eb9('0x29','Ai8f')))[(_0x2eb9('0x2a','d9fm'))]();_0x47fe7c[_0x2eb9('0x2b','7&CA')](_0x2eb9('0x2c','63[A')),_0x47fe7c['setDescription'](_0x2eb9('0x2d','1)k9')),_0x47fe7c[_0x2eb9('0x2e','wPON')](_0x2eb9('0x2f','BWlT'),''+_0x1ef7a4[_0x2eb9('0x30','*@eV')][_0x2eb9('0x31','(yV1')],!![]),_0x47fe7c[_0x2eb9('0x32','rxd*')](_0x2eb9('0x33','4ShM'),''+(_0x4f2ae3+_0xc4afae),!![]),_0x47fe7c[_0x2eb9('0x34','BWlT')](_0x2eb9('0x1d',')XIa')),_0x47fe7c[_0x2eb9('0x35','2GL6')]('#fc6400'),_0x1ef7a4['channel'][_0x2eb9('0x36','c90W')](_0x47fe7c);}if(_0x1ef7a4[_0x2eb9('0x37','7Wz!')]['startsWith'](prefix+'퇴근')){_0x1ef7a4[_0x2eb9('0x38','7Wz!')]();var _0xf2fb37=new Date(),_0x4f2ae3=_0xf2fb37['getFullYear']()+'년\x20'+(_0xf2fb37[_0x2eb9('0x39','7Wz!')]()+0x1)+'월\x20'+_0xf2fb37[_0x2eb9('0x3a','BWlT')]()+'일\x20',_0xc4afae=_0xf2fb37[_0x2eb9('0x3b','BWlT')]()+'시\x20'+_0xf2fb37[_0x2eb9('0x3c','WiVR')]()+'분\x20',_0xafe8c1=new(require(_0x2eb9('0x3d','VxYC')))['MessageEmbed']();_0xafe8c1[_0x2eb9('0x3e','Ai8f')]('퇴근하였습니다.'),_0xafe8c1['setDescription']('``퇴근``'),_0xafe8c1[_0x2eb9('0x3f','yeu(')](_0x2eb9('0x40','C1JK'),''+_0x1ef7a4['author'][_0x2eb9('0x41','igyc')],!![]),_0xafe8c1[_0x2eb9('0x42','5hZR')](_0x2eb9('0x43','uHjQ'),''+(_0x4f2ae3+_0xc4afae),!![]),_0xafe8c1[_0x2eb9('0x44','CvA6')](_0x2eb9('0x45','(yV1')),_0xafe8c1[_0x2eb9('0x46','HbSN')](_0x2eb9('0x47',')XIa')),_0x1ef7a4[_0x2eb9('0x48','d3Ww')]['send'](_0xafe8c1);}}),client[_0x2eb9('0x49','pieF')](Token);