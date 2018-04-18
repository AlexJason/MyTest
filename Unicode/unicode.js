function printUnicode() {
    var out = document.createElement('table');
    out.setAttribute('border', '1');
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var tr = document.createElement('tr');
    tr.appendChild(document.createElement('th'));
    for(var i = 0; i < 0x02; i++) {
        for(var j = 0; j < 0x10; j++) {
            var th = document.createElement('th');
            var txt = document.createTextNode(hex[i] + hex[j]);
            th.appendChild(txt);
            tr.appendChild(th);
        }
    }
    out.appendChild(tr);
    for(var i1 = 0; i1 < 0x10; i1++) {
        for(var i2 = 0; i2 < 0x10; i2++) {
            for(var i3 = 0; i3 < 0x10; i3 += 2) {    
                var tr = document.createElement('tr');
                var th = document.createElement('th');
                th.appendChild(document.createTextNode(hex[i1] + hex[i2] + hex[i3] + '0'));
                tr.appendChild(th);
                for(var j = 0; j < 2; j++) {
                    for(var i4 = 0; i4 < 0x10; i4++) {
                        var td = document.createElement('td');
                        var n = hex[i1] + hex[i2] + hex[i3 + j] + hex[i4];
                        var code = "\\u" + n;
                        var txt = document.createTextNode(eval('"' + code + '"'));
                        td.appendChild(txt);
                        tr.appendChild(td);
                    }
                }
                out.appendChild(tr);
            }
        }
    }
    document.write('<div id="unicode"></div>');
    var table = document.getElementById('unicode');
    table.appendChild(out);
}