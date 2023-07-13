function escapeTxt(os) {
    var ns = '';
    var t;
    var chr = '';
    var cc = '';
    var tn = '';
    for (let i = 0; i < 256; i++) {
        tn = i.toString(16);
        if (tn.length < 2)
            tn = "0" + tn;
        cc += tn;
        chr += unescape('%' + tn);
    }
    cc = cc.toUpperCase();
    os.replace(String.fromCharCode(13) + '', "%13");
    for (let q = 0; q < os.length; q++) {
        t = os.substr(q, 1);
        for (i = 0; i < chr.length; i++) {
            if (t == chr.substr(i, 1)) {
                t = t.replace(chr.substr(i, 1), "%" + cc.substr(i * 2, 2));
                i = chr.length;
            }
        }
        ns += t;
    }
    return ns;
}


function de(s) {
    var s1=unescape(s.substr(0,s.length-1)); 
    var t='';
    for(let i=0;i<s1.length;i++) { 
        t+=String.fromCharCode(s1.charCodeAt(i)-s.substr(s.length-1,1));
    }
    document.write(unescape(t));
}


function db(s) {
    var s1=atob(s.substr(0,s.length-1)); 
    var t='';
    for(let i=0;i<s1.length;i++) { 
        t+=String.fromCharCode(s1.charCodeAt(i)-s.substr(s.length-1,1));
    }
    document.write(atob(t));
}

function encodeEscape(s,j) {
    var s1=escapeTxt(s);
    var t='';
    for(let i=0;i<s1.length;i++) { 
        t+=String.fromCharCode(s1.charCodeAt(i)+parseInt(j));
    }
    return escapeTxt(t)+j;
}

function encodeBase64(s,j) {
    var s1=btoa(s);
    var t='';
    for(let i=0;i<s1.length;i++) { 
        t+=String.fromCharCode(s1.charCodeAt(i)+parseInt(j));
    }
    return btoa(t)+j;
}


function encoder2(s, arrayOfEncodersAndDecoders) {
    var t=s;
    
    for(let i=0;i<arrayOfEncodersAndDecoders.length;i++) { 
        encoder_i = arrayOfEncodersAndDecoders[i][0];
        decoder_i = arrayOfEncodersAndDecoders[i][1];
        baseEncoder_i = arrayOfEncodersAndDecoders[i][2];
        baseDecoder_i = arrayOfEncodersAndDecoders[i][3];
        // console.log(i, t);
        t = '<script language=javascript>document.write' + 
                "(" + 
                    "pako.ungzip(`" + 
                        pako.gzip(baseDecoder_i.name + "(`" + baseEncoder_i("<script language=javascript>" + decoder_i.toString() + "</script>") + "`)", {to: 'string'}).replaceAll("`", "\\\`") +
                    "`.replaceAll(\"\\\`\", \"`\"), {to: 'string'})" +
                ");" +
                decoder_i.name + "(" + 
                    "pako.ungzip(`" +
                        pako.gzip(encoder_i(t, (i + 1).toString()), {to: 'string'}).replaceAll("`", "\\\`") + 
                    "`.replaceAll(\"\\\`\", \"`\"), {to: 'string'})" +
                ");" +
            "</script>";
    }
    return t;
}


function encoder(s, arrayOfEncodersAndDecoders) {
    var t=s;
    
    for(let i=0;i<arrayOfEncodersAndDecoders.length;i++) { 
        encoder_i = arrayOfEncodersAndDecoders[i][0];
        decoder_i = arrayOfEncodersAndDecoders[i][1];
        baseEncoder_i = arrayOfEncodersAndDecoders[i][2];
        baseDecoder_i = arrayOfEncodersAndDecoders[i][3];
        // console.log(i, t);
        t = '<script language=javascript>document.write' + 
                "(" + 
                    
                        baseDecoder_i.name + "('" + baseEncoder_i("<script language=javascript>" + decoder_i.toString() + "</script>") + "')" +
                    
                ");" +
                decoder_i.name + "('" + 
                    
                        encoder_i(t, (i + 1).toString()) + 
                    
                "');" +
            "</script>";
    }
    return t;
}


function jsEncoder(s, arrayOfEncodersAndDecoders) {
    var t=`<script language=javascript>${s}</script>`;
    return encoder(t, arrayOfEncodersAndDecoders);
}

const fs = require('fs');
// const pako = require('pako');

const data = fs.readFileSync('D:/FunStuff/GameDev/Portfolio/Portfolio/post.html','utf8');
// let innerP2 = ``
                         
// var p2 = `<script language=javascript>
// document.body.innerHTML = \'${innerP2}\';

// </script>`


const e1 = encoder(data, [[encodeBase64, db, btoa, atob], [encodeBase64, db, btoa, atob], [encodeBase64, db, btoa, atob]]);
// console.log(e1)

fs.writeFileSync('D:/FunStuff/GameDev/Portfolio/Portfolio/js/templates/header2.html', e1 ,'utf8');



