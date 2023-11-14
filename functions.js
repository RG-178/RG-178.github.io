function calc_fast_qty_short() {
    // Werte aus den Eingabefeldern abrufen
    var lev_fastqty_short = parseFloat(document.getElementById('leverage-fast-qty-short').value);
    var entry_fastqty_short = parseFloat(document.getElementById('entry-fast-qty-short').value);
    var cost_fastqty_short = parseFloat(document.getElementById('cost-fast-qty-short').value);
    
    if (!isNaN(lev_fastqty_short) && !isNaN(entry_fastqty_short) && !isNaN(cost_fastqty_short)) {
            // Summe berechnen und in das Ausgabefeld einfügen
            var ov_fastqty_short = (lev_fastqty_short * cost_fastqty_short) + ((lev_fastqty_short * 2 + 1) * (((lev_fastqty_short * cost_fastqty_short) * 0.99945) - (lev_fastqty_short * cost_fastqty_short)))
            var ov_fastqty_short = ov_fastqty_short.toFixed(4);
            document.getElementById('ov_fast-qty').innerText = ov_fastqty_short + " USDT";
    
            var qty_fastqty_short = ov_fastqty_short / entry_fastqty_short
            var qty_fastqty_short = qty_fastqty_short.toFixed(3);
            document.getElementById('qty_fast-qty').innerText = qty_fastqty_short + " Coins";
    
            var im_fastqty_short = cost_fastqty_short
            var im_fastqty_short = im_fastqty_short.toFixed(4);
            document.getElementById('im_fast-qty').innerText = im_fastqty_short + " USDT";
        } else {
            // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
            document.getElementById('ov_fast-qty').innerText = "0.0000 USDT";
            document.getElementById('qty_fast-qty').innerText = "0.000 Coins";
            document.getElementById('im_fast-qty').innerText = "0.0000 USDT";
        }
  }


function calc_fast_qty_long() {
        // Werte aus den Eingabefeldern abrufen
        var lev_fastqty_long = parseFloat(document.getElementById('leverage-fast-qty-long').value);
        var entry_fastqty_long = parseFloat(document.getElementById('entry-fast-qty-long').value);
        var cost_fastqty_long = parseFloat(document.getElementById('cost-fast-qty-long').value);
    
    if (!isNaN(lev_fastqty_long) && !isNaN(entry_fastqty_long) && !isNaN(cost_fastqty_long)) {
            // Summe berechnen und in das Ausgabefeld einfügen
            var ov_fastqty_long = (lev_fastqty_long * cost_fastqty_long) + ((lev_fastqty_long * 2 - 1) * (((lev_fastqty_long * cost_fastqty_long) * 0.99945) - (lev_fastqty_long * cost_fastqty_long)))
            var ov_fastqty_long = ov_fastqty_long.toFixed(4);
            document.getElementById('ov_fast-qty').innerText = ov_fastqty_long + " USDT";
    
            var qty_fastqty_long = ov_fastqty_long / entry_fastqty_long
            var qty_fastqty_long = qty_fastqty_long.toFixed(3);
            document.getElementById('qty_fast-qty').innerText = qty_fastqty_long + " Coins";
    
            var im_fastqty_long = cost_fastqty_long
            var im_fastqty_long = im_fastqty_long.toFixed(4);
            document.getElementById('im_fast-qty').innerText = im_fastqty_long + " USDT";
        } else {
            // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
            document.getElementById('ov_fast-qty').innerText = "0.0000 USDT";
            document.getElementById('qty_fast-qty').innerText = "0.000 Coins";
            document.getElementById('im_fast-qty').innerText = "0.0000 USDT";
        }
  }



  function toggleOption(option) {
    if (option === 'long') {
        document.getElementById('long').classList.add('active');
        document.getElementById('short').classList.remove('active');
        document.getElementById('inputs_fast-qty_short').style.setProperty('display', 'none', 'important');
        document.getElementById('inputs_fast-qty_long').style.setProperty('display', 'block', 'important');

    } else if (option === 'short') {
        document.getElementById('short').classList.add('active');
        document.getElementById('long').classList.remove('active');
        document.getElementById('inputs_fast-qty_short').style.setProperty('display', 'block', 'important');
        document.getElementById('inputs_fast-qty_long').style.setProperty('display', 'none', 'important');


    }
}

function toggleOption_b(option) {
    if (option === 'long') {
        document.getElementById('long_b').classList.add('active');
        document.getElementById('short_b').classList.remove('active');
        document.getElementById('inputs_fast-lev_short').style.setProperty('display', 'none', 'important');
        document.getElementById('inputs_fast-lev_long').style.setProperty('display', 'block', 'important');

    } else if (option === 'short') {
        document.getElementById('short_b').classList.add('active');
        document.getElementById('long_b').classList.remove('active');
        document.getElementById('inputs_fast-lev_short').style.setProperty('display', 'block', 'important');
        document.getElementById('inputs_fast-lev_long').style.setProperty('display', 'none', 'important');


    }
}