/* Calculation Functions */

function calc_fast_qty_short() {
    // Werte aus den Eingabefeldern abrufen
    var lev_fastqty_short = parseFloat(document.getElementById('leverage-fast-qty-short').value);
    var entry_fastqty_short = parseFloat(document.getElementById('entry-fast-qty-short').value);
    var cost_fastqty_short = parseFloat(document.getElementById('cost-fast-qty-short').value);
    
    if (!isNaN(lev_fastqty_short) && !isNaN(entry_fastqty_short) && !isNaN(cost_fastqty_short)) {
            // Summe berechnen und in das Ausgabefeld einfügen
            var ov_fastqty_short = (lev_fastqty_short * cost_fastqty_short) + ((lev_fastqty_short * 2 + 1) * (((lev_fastqty_short * cost_fastqty_short) * 0.99945) - (lev_fastqty_short * cost_fastqty_short)))
            var ov_fastqty_short_fix = ov_fastqty_short.toFixed(4);
            document.getElementById('ov_fast-qty').innerText = ov_fastqty_short_fix + " USDT";
            document.getElementById('ov_fast-qty_copy').innerText = ov_fastqty_short_fix;
    
            var qty_fastqty_short = ov_fastqty_short / entry_fastqty_short
            var qty_fastqty_short_fix = qty_fastqty_short.toFixed(3);
            document.getElementById('qty_fast-qty').innerText = qty_fastqty_short_fix + " Coins";
            document.getElementById('qty_fast-qty_copy').innerText = qty_fastqty_short_fix;
    
            var im_fastqty_short = cost_fastqty_short
            var im_fastqty_short_fix = im_fastqty_short.toFixed(4);
            document.getElementById('im_fast-qty').innerText = im_fastqty_short_fix + " USDT";
            document.getElementById('im_fast-qty_copy').innerText = im_fastqty_short_fix;
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
            var ov_fastqty_long_fix = ov_fastqty_long.toFixed(4);
            document.getElementById('ov_fast-qty').innerText = ov_fastqty_long_fix + " USDT";
            document.getElementById('ov_fast-qty_copy').innerText = ov_fastqty_long_fix;
    
            var qty_fastqty_long = ov_fastqty_long / entry_fastqty_long
            var qty_fastqty_long_fix = qty_fastqty_long.toFixed(3);
            document.getElementById('qty_fast-qty').innerText = qty_fastqty_long_fix + " Coins";
            document.getElementById('qty_fast-qty_copy').innerText = qty_fastqty_long_fix;
    
            var im_fastqty_long = cost_fastqty_long
            var im_fastqty_long_fix = im_fastqty_long.toFixed(4);
            document.getElementById('im_fast-qty').innerText = im_fastqty_long_fix + " USDT";
            document.getElementById('im_fast-qty_copy').innerText = im_fastqty_long_fix;
            
        } else {
            // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
            document.getElementById('ov_fast-qty').innerText = "0.0000 USDT";
            document.getElementById('qty_fast-qty').innerText = "0.000 Coins";
            document.getElementById('im_fast-qty').innerText = "0.0000 USDT";
        }
  }


  function calc_fast_lev_long() {
    // Werte aus den Eingabefeldern abrufen
    var sl_fastlev_long = parseFloat(document.getElementById('sl-fast-lev-long').value);
    var entry_fastlev_long = parseFloat(document.getElementById('entry-fast-lev-long').value);
    var cost_fastlev_long = parseFloat(document.getElementById('cost-fast-lev-long').value);
    var risk_fastlev_long = parseFloat(document.getElementById('risk-fast-lev-long').value);
    var mmr_fastlev_long = parseFloat(document.getElementById('mmr-fast-lev-long').value);
    var tp_fastlev_long = parseFloat(document.getElementById('tp-fast-lev-long').value);

if (!isNaN(sl_fastlev_long) && !isNaN(entry_fastlev_long) && !isNaN(cost_fastlev_long) && !isNaN(risk_fastlev_long) && !isNaN(mmr_fastlev_long) && !isNaN(tp_fastlev_long)) {
        // Summe berechnen und in das Ausgabefeld einfügen

        var mmr_fastlev_long = mmr_fastlev_long / 100

        var qty_fastlev_long = risk_fastlev_long / (entry_fastlev_long - sl_fastlev_long)
        var qty_fastlev_long_fix = qty_fastlev_long.toFixed(3);
        document.getElementById('qty_fast-lev').innerText = qty_fastlev_long_fix + " Coins";
        document.getElementById('qty_fast-lev_copy').innerText = qty_fastlev_long_fix;

        var ov_fastlev_long = qty_fastlev_long * entry_fastlev_long
        var ov_fastlev_long_fix = ov_fastlev_long.toFixed(4);
        document.getElementById('ov_fast-lev').innerText = ov_fastlev_long_fix + " USDT";
        document.getElementById('ov_fast-lev_copy').innerText = ov_fastlev_long_fix;

        var im_fastlev_long = cost_fastlev_long
        var im_fastlev_long_fix = im_fastlev_long.toFixed(4);
        document.getElementById('im_fast-lev').innerText = im_fastlev_long_fix + " USDT";
        document.getElementById('im_fast-lev_copy').innerText = im_fastlev_long_fix;

        var lp_fastlev_long = entry_fastlev_long - (cost_fastlev_long - (ov_fastlev_long * mmr_fastlev_long)) / qty_fastlev_long
        var lp_fastlev_long_fix = lp_fastlev_long.toFixed(4);
        document.getElementById('lp_fast-lev').innerText = lp_fastlev_long_fix + " USDT";
        document.getElementById('lp_fast-lev_copy').innerText = lp_fastlev_long_fix;

        var lev_fastlev_long = ov_fastlev_long / cost_fastlev_long
        var lev_fastlev_long_fix = lev_fastlev_long.toFixed(2);
        document.getElementById('lev_fast-lev').innerText = lev_fastlev_long_fix + " X";
        document.getElementById('lev_fast-lev_copy').innerText = lev_fastlev_long_fix;

        var fees_fastlev_long = (ov_fastlev_long * (-0.00055)) * 2
        var fees_fastlev_long_fix = fees_fastlev_long.toFixed(4);
        document.getElementById('fees_fast-lev').innerText = fees_fastlev_long_fix + " USDT";
        document.getElementById('fees_fast-lev_copy').innerText = fees_fastlev_long_fix;

        var in_de_pro_fastlev_long = ((((((fees_fastlev_long * (-1)) / (cost_fastlev_long / 100)) / 100) / lev_fastlev_long) + 1) * entry_fastlev_long) - entry_fastlev_long
        var in_de_pro_fastlev_long_fix = in_de_pro_fastlev_long.toFixed(4);
        document.getElementById('in-de-pro_fast-lev').innerText = in_de_pro_fastlev_long_fix + " USDT";
        document.getElementById('in_de_pro_fast-lev_copy').innerText = in_de_pro_fastlev_long_fix;

        var in_de_proz_fastlev_long = in_de_pro_fastlev_long / (entry_fastlev_long / 100)
        var in_de_proz_fastlev_long_fix = in_de_proz_fastlev_long.toFixed(2);
        document.getElementById('in-de-proz_fast-lev').innerText = in_de_proz_fastlev_long_fix + " %";
        document.getElementById('in_de_proz_fast-lev_copy').innerText = in_de_proz_fastlev_long_fix;

        var new_pro_fastlev_long = entry_fastlev_long + in_de_pro_fastlev_long
        var new_pro_fastlev_long_fix = new_pro_fastlev_long.toFixed(4);
        document.getElementById('new-pro_fast-lev').innerText = new_pro_fastlev_long_fix + " USDT";
        document.getElementById('new_pro_fast-lev_copy').innerText = new_pro_fastlev_long_fix;

        var pro_fastlev_long = ((tp_fastlev_long - entry_fastlev_long) * qty_fastlev_long) - ((ov_fastlev_long * 0.00055) * 2)
        var pro_fastlev_long_fix = pro_fastlev_long.toFixed(4);
        document.getElementById('pro_fast-lev').innerText = pro_fastlev_long_fix + " USDT";
        document.getElementById('pro_fast-lev_copy').innerText = pro_fastlev_long_fix;

        var proz_fastlev_long = pro_fastlev_long / (cost_fastlev_long / 100)
        var proz_fastlev_long_fix = proz_fastlev_long.toFixed(2);
        document.getElementById('proz_fast-lev').innerText = proz_fastlev_long_fix + " %";
        document.getElementById('proz_fast-lev_copy').innerText = proz_fastlev_long_fix;

        var to_pro_fastlev_long = pro_fastlev_long + cost_fastlev_long
        var to_pro_fastlev_long_fix = to_pro_fastlev_long.toFixed(4);
        document.getElementById('to-pro_fast-lev').innerText = to_pro_fastlev_long_fix + " USDT";
        document.getElementById('to_pro_fast-lev_copy').innerText = to_pro_fastlev_long_fix;

        var in_de_pri_fastlev_long = tp_fastlev_long - entry_fastlev_long
        var in_de_pri_fastlev_long_fix = in_de_pri_fastlev_long.toFixed(4);
        document.getElementById('in-de-pri_fast-lev').innerText = in_de_pri_fastlev_long_fix + " USDT";
        document.getElementById('in_de_pri_fast-lev_copy').innerText = in_de_pri_fastlev_long_fix;

        var in_de_priz_fastlev_long = (tp_fastlev_long - entry_fastlev_long) / (entry_fastlev_long / 100)
        var in_de_priz_fastlev_long_fix = in_de_priz_fastlev_long.toFixed(2);
        document.getElementById('in-de-priz_fast-lev').innerText = in_de_priz_fastlev_long_fix + " %";
        document.getElementById('in_de_priz_fast-lev_copy').innerText = in_de_priz_fastlev_long_fix;

        var to_price_fastlev_long = tp_fastlev_long
        var to_price_fastlev_long_fix = to_price_fastlev_long.toFixed(4);
        document.getElementById('to-price_fast-lev').innerText = to_price_fastlev_long_fix + " USDT";
        document.getElementById('to_price_fast-lev_copy').innerText = to_price_fastlev_long_fix;

        var loss_fastlev_long = ((sl_fastlev_long - entry_fastlev_long) * qty_fastlev_long) - ((ov_fastlev_long * 0.00055) * 2)
        var loss_fastlev_long_fix = loss_fastlev_long.toFixed(4);
        document.getElementById('loss_fast-lev').innerText = loss_fastlev_long_fix + " USDT";
        document.getElementById('loss_fast-lev_copy').innerText = loss_fastlev_long_fix;

        var lossz_fastlev_long = loss_fastlev_long / (cost_fastlev_long / 100)
        var lossz_fastlev_long_fix = lossz_fastlev_long.toFixed(2);
        document.getElementById('lossz_fast-lev').innerText = lossz_fastlev_long_fix + " %";
        document.getElementById('lossz_fast-lev_copy').innerText = lossz_fastlev_long_fix;

        var to_loss_fastlev_long = cost_fastlev_long + loss_fastlev_long
        var to_loss_fastlev_long_fix = to_loss_fastlev_long.toFixed(4);
        document.getElementById('to-loss_fast-lev').innerText = to_loss_fastlev_long_fix + " USDT";
        document.getElementById('to_loss_fast-lev_copy').innerText = to_loss_fastlev_long_fix;

        var in_de_pri_fastlev_long = sl_fastlev_long - entry_fastlev_long
        var in_de_pri_fastlev_long_fix = in_de_pri_fastlev_long.toFixed(4);
        document.getElementById('in-de-pri_fast-lev_loss').innerText = in_de_pri_fastlev_long_fix + " USDT";
        document.getElementById('in_de_pri_fast-lev_copy_loss').innerText = in_de_pri_fastlev_long_fix;

        var in_de_priz_fastlev_long = (sl_fastlev_long - entry_fastlev_long) / (entry_fastlev_long / 100)
        var in_de_priz_fastlev_long_fix = in_de_priz_fastlev_long.toFixed(2);
        document.getElementById('in-de-priz_fast-lev_loss').innerText = in_de_priz_fastlev_long_fix + " %";
        document.getElementById('in_de_priz_fast-lev_copy_loss').innerText = in_de_priz_fastlev_long_fix;

        var to_price_fastlev_long = sl_fastlev_long
        var to_price_fastlev_long_fix = to_price_fastlev_long.toFixed(4);
        document.getElementById('to-price_fast-lev_loss').innerText = to_price_fastlev_long_fix + " USDT";
        document.getElementById('to_price_fast-lev_copy_loss').innerText = to_price_fastlev_long_fix;

        /* Calculation Function Names */

        var cost_fastlev_long_name_profit_fastlev = cost_fastlev_long.toFixed(4)
        document.getElementById('to-pro_fast-lev_name').innerText = cost_fastlev_long_name_profit_fastlev + " to";

        var entry_fastlev_long_name_profit_fastlev = entry_fastlev_long.toFixed(4)
        document.getElementById('to-price_fast-lev_name').innerText = entry_fastlev_long_name_profit_fastlev + " to";

        var cost_fastlev_long_name_loss_fastlev = cost_fastlev_long.toFixed(4)
        document.getElementById('to-loss_fast-lev_name').innerText = cost_fastlev_long_name_loss_fastlev + " to";

        var entry_fastlev_long_name_loss_fastlev = entry_fastlev_long.toFixed(4)
        document.getElementById('to-price_fast-lev_loss_name').innerText = entry_fastlev_long_name_loss_fastlev + " to";

        
    } else {
        // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
        document.getElementById('ov_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('qty_fast-lev').innerText = "0.000 Coins";
        document.getElementById('im_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('lev_fast-lev').innerText = "0.00 X";
        document.getElementById('lp_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('fees_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-proz_fast-lev').innerText = "0.00 %";
        document.getElementById('new-pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('proz_fast-lev').innerText = "0.00 %";
        document.getElementById('to-pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-lev').innerText = "0.00 %";
        document.getElementById('to-price_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('loss_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('lossz_fast-lev').innerText = "0.00 %";
        document.getElementById('to-loss_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-lev_loss').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-lev_loss').innerText = "0.00 %";
        document.getElementById('to-price_fast-lev_loss').innerText = "0.0000 USDT";

        /* Calculation Function Names */

        document.getElementById('to-pro_fast-lev_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-lev_name').innerText = "0.0000 to";
        document.getElementById('to-loss_fast-lev_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-lev_loss_name').innerText = "0.0000 to";
    }
}

function calc_fast_lev_short() {
    // Werte aus den Eingabefeldern abrufen
    var sl_fastlev_short = parseFloat(document.getElementById('sl-fast-lev-short').value);
    var entry_fastlev_short = parseFloat(document.getElementById('entry-fast-lev-short').value);
    var cost_fastlev_short = parseFloat(document.getElementById('cost-fast-lev-short').value);
    var risk_fastlev_short = parseFloat(document.getElementById('risk-fast-lev-short').value);
    var mmr_fastlev_short = parseFloat(document.getElementById('mmr-fast-lev-short').value);
    var tp_fastlev_short = parseFloat(document.getElementById('tp-fast-lev-short').value);

if (!isNaN(sl_fastlev_short) && !isNaN(entry_fastlev_short) && !isNaN(cost_fastlev_short) && !isNaN(risk_fastlev_short) && !isNaN(mmr_fastlev_short) && !isNaN(tp_fastlev_short)) {
        // Summe berechnen und in das Ausgabefeld einfügen

        var mmr_fastlev_short = mmr_fastlev_short / 100

        var qty_fastlev_short = risk_fastlev_short / (sl_fastlev_short - entry_fastlev_short)
        var qty_fastlev_short_fix = qty_fastlev_short.toFixed(3);
        document.getElementById('qty_fast-lev').innerText = qty_fastlev_short_fix + " Coins";
        document.getElementById('qty_fast-lev_copy').innerText = qty_fastlev_short_fix;

        var ov_fastlev_short = qty_fastlev_short * entry_fastlev_short
        var ov_fastlev_short_fix = ov_fastlev_short.toFixed(4);
        document.getElementById('ov_fast-lev').innerText = ov_fastlev_short_fix + " USDT";
        document.getElementById('ov_fast-lev_copy').innerText = ov_fastlev_short_fix;

        var im_fastlev_short = cost_fastlev_short
        var im_fastlev_short_fix = im_fastlev_short.toFixed(4);
        document.getElementById('im_fast-lev').innerText = im_fastlev_short_fix + " USDT";
        document.getElementById('im_fast-lev_copy').innerText = im_fastlev_short_fix;

        var lp_fastlev_short = entry_fastlev_short + (cost_fastlev_short - (ov_fastlev_short * mmr_fastlev_short)) / qty_fastlev_short
        var lp_fastlev_short_fix = lp_fastlev_short.toFixed(4);
        document.getElementById('lp_fast-lev').innerText = lp_fastlev_short_fix + " USDT";
        document.getElementById('lp_fast-lev_copy').innerText = lp_fastlev_short_fix;

        var lev_fastlev_short = ov_fastlev_short / cost_fastlev_short
        var lev_fastlev_short_fix = lev_fastlev_short.toFixed(2);
        document.getElementById('lev_fast-lev').innerText = lev_fastlev_short_fix + " X";
        document.getElementById('lev_fast-lev_copy').innerText = lev_fastlev_short_fix;

        var fees_fastlev_short = (ov_fastlev_short * (-0.00055)) * 2
        var fees_fastlev_short_fix = fees_fastlev_short.toFixed(4);
        document.getElementById('fees_fast-lev').innerText = fees_fastlev_short_fix + " USDT";
        document.getElementById('fees_fast-lev_copy').innerText = fees_fastlev_short_fix;

        var in_de_pro_fastlev_short = (((((((fees_fastlev_short * (-1)) / (cost_fastlev_short / 100)) / 100) / lev_fastlev_short) + 1) * entry_fastlev_short) - entry_fastlev_short) * (-1)
        var in_de_pro_fastlev_short_fix = in_de_pro_fastlev_short.toFixed(4);
        document.getElementById('in-de-pro_fast-lev').innerText = in_de_pro_fastlev_short_fix + " USDT";
        document.getElementById('in_de_pro_fast-lev_copy').innerText = in_de_pro_fastlev_short_fix;

        var in_de_proz_fastlev_short = in_de_pro_fastlev_short / (entry_fastlev_short / 100)
        var in_de_proz_fastlev_short_fix = in_de_proz_fastlev_short.toFixed(2);
        document.getElementById('in-de-proz_fast-lev').innerText = in_de_proz_fastlev_short_fix + " %";
        document.getElementById('in_de_proz_fast-lev_copy').innerText = in_de_proz_fastlev_short_fix;

        var new_pro_fastlev_short = entry_fastlev_short + in_de_pro_fastlev_short
        var new_pro_fastlev_short_fix = new_pro_fastlev_short.toFixed(4);
        document.getElementById('new-pro_fast-lev').innerText = new_pro_fastlev_short_fix + " USDT";
        document.getElementById('new_pro_fast-lev_copy').innerText = new_pro_fastlev_short_fix;

        var pro_fastlev_short = ((entry_fastlev_short - tp_fastlev_short) * qty_fastlev_short) - ((ov_fastlev_short * 0.00055) * 2)
        var pro_fastlev_short_fix = pro_fastlev_short.toFixed(4);
        document.getElementById('pro_fast-lev').innerText = pro_fastlev_short_fix + " USDT";
        document.getElementById('pro_fast-lev_copy').innerText = pro_fastlev_short_fix;

        var proz_fastlev_short = pro_fastlev_short / (cost_fastlev_short / 100)
        var proz_fastlev_short_fix = proz_fastlev_short.toFixed(2);
        document.getElementById('proz_fast-lev').innerText = proz_fastlev_short_fix + " %";
        document.getElementById('proz_fast-lev_copy').innerText = proz_fastlev_short_fix;

        var to_pro_fastlev_short = pro_fastlev_short + cost_fastlev_short
        var to_pro_fastlev_short_fix = to_pro_fastlev_short.toFixed(4);
        document.getElementById('to-pro_fast-lev').innerText = to_pro_fastlev_short_fix + " USDT";
        document.getElementById('to_pro_fast-lev_copy').innerText = to_pro_fastlev_short_fix;

        var in_de_pri_fastlev_short = tp_fastlev_short - entry_fastlev_short
        var in_de_pri_fastlev_short_fix = in_de_pri_fastlev_short.toFixed(4);
        document.getElementById('in-de-pri_fast-lev').innerText = in_de_pri_fastlev_short_fix + " USDT";
        document.getElementById('in_de_pri_fast-lev_copy').innerText = in_de_pri_fastlev_short_fix;

        var in_de_priz_fastlev_short = (tp_fastlev_short - entry_fastlev_short) / (entry_fastlev_short / 100)
        var in_de_priz_fastlev_short_fix = in_de_priz_fastlev_short.toFixed(2);
        document.getElementById('in-de-priz_fast-lev').innerText = in_de_priz_fastlev_short_fix + " %";
        document.getElementById('in_de_priz_fast-lev_copy').innerText = in_de_priz_fastlev_short_fix;

        var to_price_fastlev_short = tp_fastlev_short
        var to_price_fastlev_short_fix = to_price_fastlev_short.toFixed(4);
        document.getElementById('to-price_fast-lev').innerText = to_price_fastlev_short_fix + " USDT";
        document.getElementById('to_price_fast-lev_copy').innerText = to_price_fastlev_short_fix;

        var loss_fastlev_short = ((entry_fastlev_short - sl_fastlev_short) * qty_fastlev_short) - ((ov_fastlev_short * 0.00055) * 2)
        var loss_fastlev_short_fix = loss_fastlev_short.toFixed(4);
        document.getElementById('loss_fast-lev').innerText = loss_fastlev_short_fix + " USDT";
        document.getElementById('loss_fast-lev_copy').innerText = loss_fastlev_short_fix;

        var lossz_fastlev_short = loss_fastlev_short / (cost_fastlev_short / 100)
        var lossz_fastlev_short_fix = lossz_fastlev_short.toFixed(2);
        document.getElementById('lossz_fast-lev').innerText = lossz_fastlev_short_fix + " %";
        document.getElementById('lossz_fast-lev_copy').innerText = lossz_fastlev_short_fix;

        var to_loss_fastlev_short = cost_fastlev_short + loss_fastlev_short
        var to_loss_fastlev_short_fix = to_loss_fastlev_short.toFixed(4);
        document.getElementById('to-loss_fast-lev').innerText = to_loss_fastlev_short_fix + " USDT";
        document.getElementById('to_loss_fast-lev_copy').innerText = to_loss_fastlev_short_fix;

        var in_de_pri_fastlev_short = sl_fastlev_short - entry_fastlev_short
        var in_de_pri_fastlev_short_fix = in_de_pri_fastlev_short.toFixed(4);
        document.getElementById('in-de-pri_fast-lev_loss').innerText = in_de_pri_fastlev_short_fix + " USDT";
        document.getElementById('in_de_pri_fast-lev_copy_loss').innerText = in_de_pri_fastlev_short_fix;

        var in_de_priz_fastlev_short = (sl_fastlev_short - entry_fastlev_short) / (entry_fastlev_short / 100)
        var in_de_priz_fastlev_short_fix = in_de_priz_fastlev_short.toFixed(2);
        document.getElementById('in-de-priz_fast-lev_loss').innerText = in_de_priz_fastlev_short_fix + " %";
        document.getElementById('in_de_priz_fast-lev_copy_loss').innerText = in_de_priz_fastlev_short_fix;

        var to_price_fastlev_short = sl_fastlev_short
        var to_price_fastlev_short_fix = to_price_fastlev_short.toFixed(4);
        document.getElementById('to-price_fast-lev_loss').innerText = to_price_fastlev_short_fix + " USDT";
        document.getElementById('to_price_fast-lev_copy_loss').innerText = to_price_fastlev_short_fix;

        /* Calculation Function Names */

        var cost_fastlev_short_name_profit_fastlev = cost_fastlev_short.toFixed(4)
        document.getElementById('to-pro_fast-lev_name').innerText = cost_fastlev_short_name_profit_fastlev + " to";

        var entry_fastlev_short_name_profit_fastlev = entry_fastlev_short.toFixed(4)
        document.getElementById('to-price_fast-lev_name').innerText = entry_fastlev_short_name_profit_fastlev + " to";

        var cost_fastlev_short_name_loss_fastlev = cost_fastlev_short.toFixed(4)
        document.getElementById('to-loss_fast-lev_name').innerText = cost_fastlev_short_name_loss_fastlev + " to";

        var entry_fastlev_short_name_loss_fastlev = entry_fastlev_short.toFixed(4)
        document.getElementById('to-price_fast-lev_loss_name').innerText = entry_fastlev_short_name_loss_fastlev + " to";

        
    } else {
        // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
        document.getElementById('ov_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('qty_fast-lev').innerText = "0.000 Coins";
        document.getElementById('im_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('lev_fast-lev').innerText = "0.00 X";
        document.getElementById('lp_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('fees_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-proz_fast-lev').innerText = "0.00 %";
        document.getElementById('new-pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('proz_fast-lev').innerText = "0.00 %";
        document.getElementById('to-pro_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-lev').innerText = "0.00 %";
        document.getElementById('to-price_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('loss_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('lossz_fast-lev').innerText = "0.00 %";
        document.getElementById('to-loss_fast-lev').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-lev_loss').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-lev_loss').innerText = "0.00 %";
        document.getElementById('to-price_fast-lev_loss').innerText = "0.0000 USDT";

        /* Calculation Function Names */

        document.getElementById('to-pro_fast-lev_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-lev_name').innerText = "0.0000 to";
        document.getElementById('to-loss_fast-lev_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-lev_loss_name').innerText = "0.0000 to";
    }
}

function calc_fast_liq_long() {
    // Werte aus den Eingabefeldern abrufen
    var sl_fastliq_long = parseFloat(document.getElementById('sl-fast-liq-long').value);
    var entry_fastliq_long = parseFloat(document.getElementById('entry-fast-liq-long').value);
    var cost_fastliq_long = parseFloat(document.getElementById('cost-fast-liq-long').value);
    var lev_fastliq_long = parseFloat(document.getElementById('lev-fast-liq-long').value);
    var mmr_fastliq_long = parseFloat(document.getElementById('mmr-fast-liq-long').value);
    var tp_fastliq_long = parseFloat(document.getElementById('tp-fast-liq-long').value);

if (!isNaN(sl_fastliq_long) && !isNaN(entry_fastliq_long) && !isNaN(cost_fastliq_long) && !isNaN(lev_fastliq_long) && !isNaN(mmr_fastliq_long) && !isNaN(tp_fastliq_long)) {
        // Summe berechnen und in das Ausgabefeld einfügen

        var mmr_fastliq_long = mmr_fastliq_long / 100

        var ov_fastliq_long = cost_fastliq_long * lev_fastliq_long
        var ov_fastliq_long_fix = ov_fastliq_long.toFixed(4);
        document.getElementById('ov_fast-liq').innerText = ov_fastliq_long_fix + " USDT";
        document.getElementById('ov_fast-liq_copy').innerText = ov_fastliq_long_fix;

        var qty_fastliq_long = ov_fastliq_long / entry_fastliq_long
        var qty_fastliq_long_fix = qty_fastliq_long.toFixed(3);
        document.getElementById('qty_fast-liq').innerText = qty_fastliq_long_fix + " Coins";
        document.getElementById('qty_fast-liq_copy').innerText = qty_fastliq_long_fix;

        var im_fastliq_long = cost_fastliq_long
        var im_fastliq_long_fix = im_fastliq_long.toFixed(4);
        document.getElementById('im_fast-liq').innerText = im_fastliq_long_fix + " USDT";
        document.getElementById('im_fast-liq_copy').innerText = im_fastliq_long_fix;

        var lp_fastliq_long = entry_fastliq_long - (cost_fastliq_long - (ov_fastliq_long * mmr_fastliq_long)) / qty_fastliq_long
        var lp_fastliq_long_fix = lp_fastliq_long.toFixed(4);
        document.getElementById('lp_fast-liq').innerText = lp_fastliq_long_fix + " USDT";
        document.getElementById('lp_fast-liq_copy').innerText = lp_fastliq_long_fix;

        var fees_fastliq_long = (ov_fastliq_long * (-0.00055)) * 2
        var fees_fastliq_long_fix = fees_fastliq_long.toFixed(4);
        document.getElementById('fees_fast-liq').innerText = fees_fastliq_long_fix + " USDT";
        document.getElementById('fees_fast-liq_copy').innerText = fees_fastliq_long_fix;

        var in_de_pro_fastliq_long = ((((((fees_fastliq_long * (-1)) / (cost_fastliq_long / 100)) / 100) / lev_fastliq_long) + 1) * entry_fastliq_long) - entry_fastliq_long
        var in_de_pro_fastliq_long_fix = in_de_pro_fastliq_long.toFixed(4);
        document.getElementById('in-de-pro_fast-liq').innerText = in_de_pro_fastliq_long_fix + " USDT";
        document.getElementById('in_de_pro_fast-liq_copy').innerText = in_de_pro_fastliq_long_fix;

        var in_de_proz_fastliq_long = in_de_pro_fastliq_long / (entry_fastliq_long / 100)
        var in_de_proz_fastliq_long_fix = in_de_proz_fastliq_long.toFixed(2);
        document.getElementById('in-de-proz_fast-liq').innerText = in_de_proz_fastliq_long_fix + " %";
        document.getElementById('in_de_proz_fast-liq_copy').innerText = in_de_proz_fastliq_long_fix;

        var new_pro_fastliq_long = entry_fastliq_long + in_de_pro_fastliq_long
        var new_pro_fastliq_long_fix = new_pro_fastliq_long.toFixed(4);
        document.getElementById('new-pro_fast-liq').innerText = new_pro_fastliq_long_fix + " USDT";
        document.getElementById('new_pro_fast-liq_copy').innerText = new_pro_fastliq_long_fix;

        var pro_fastliq_long = ((tp_fastliq_long - entry_fastliq_long) * qty_fastliq_long) - ((ov_fastliq_long * 0.00055) * 2)
        var pro_fastliq_long_fix = pro_fastliq_long.toFixed(4);
        document.getElementById('pro_fast-liq').innerText = pro_fastliq_long_fix + " USDT";
        document.getElementById('pro_fast-liq_copy').innerText = pro_fastliq_long_fix;

        var proz_fastliq_long = pro_fastliq_long / (cost_fastliq_long / 100)
        var proz_fastliq_long_fix = proz_fastliq_long.toFixed(2);
        document.getElementById('proz_fast-liq').innerText = proz_fastliq_long_fix + " %";
        document.getElementById('proz_fast-liq_copy').innerText = proz_fastliq_long_fix;

        var to_pro_fastliq_long = pro_fastliq_long + cost_fastliq_long
        var to_pro_fastliq_long_fix = to_pro_fastliq_long.toFixed(4);
        document.getElementById('to-pro_fast-liq').innerText = to_pro_fastliq_long_fix + " USDT";
        document.getElementById('to_pro_fast-liq_copy').innerText = to_pro_fastliq_long_fix;

        var in_de_pri_fastliq_long = tp_fastliq_long - entry_fastliq_long
        var in_de_pri_fastliq_long_fix = in_de_pri_fastliq_long.toFixed(4);
        document.getElementById('in-de-pri_fast-liq').innerText = in_de_pri_fastliq_long_fix + " USDT";
        document.getElementById('in_de_pri_fast-liq_copy').innerText = in_de_pri_fastliq_long_fix;

        var in_de_priz_fastliq_long = (tp_fastliq_long - entry_fastliq_long) / (entry_fastliq_long / 100)
        var in_de_priz_fastliq_long_fix = in_de_priz_fastliq_long.toFixed(2);
        document.getElementById('in-de-priz_fast-liq').innerText = in_de_priz_fastliq_long_fix + " %";
        document.getElementById('in_de_priz_fast-liq_copy').innerText = in_de_priz_fastliq_long_fix;

        var to_price_fastliq_long = tp_fastliq_long
        var to_price_fastliq_long_fix = to_price_fastliq_long.toFixed(4);
        document.getElementById('to-price_fast-liq').innerText = to_price_fastliq_long_fix + " USDT";
        document.getElementById('to_price_fast-liq_copy').innerText = to_price_fastliq_long_fix;

        var loss_fastliq_long = ((sl_fastliq_long - entry_fastliq_long) * qty_fastliq_long) - ((ov_fastliq_long * 0.00055) * 2)
        var loss_fastliq_long_fix = loss_fastliq_long.toFixed(4);
        document.getElementById('loss_fast-liq').innerText = loss_fastliq_long_fix + " USDT";
        document.getElementById('loss_fast-liq_copy').innerText = loss_fastliq_long_fix;

        var lossz_fastliq_long = loss_fastliq_long / (cost_fastliq_long / 100)
        var lossz_fastliq_long_fix = lossz_fastliq_long.toFixed(2);
        document.getElementById('lossz_fast-liq').innerText = lossz_fastliq_long_fix + " %";
        document.getElementById('lossz_fast-liq_copy').innerText = lossz_fastliq_long_fix;

        var to_loss_fastliq_long = cost_fastliq_long + loss_fastliq_long
        var to_loss_fastliq_long_fix = to_loss_fastliq_long.toFixed(4);
        document.getElementById('to-loss_fast-liq').innerText = to_loss_fastliq_long_fix + " USDT";
        document.getElementById('to_loss_fast-liq_copy').innerText = to_loss_fastliq_long_fix;

        var in_de_pri_fastliq_long = sl_fastliq_long - entry_fastliq_long
        var in_de_pri_fastliq_long_fix = in_de_pri_fastliq_long.toFixed(4);
        document.getElementById('in-de-pri_fast-liq_loss').innerText = in_de_pri_fastliq_long_fix + " USDT";
        document.getElementById('in_de_pri_fast-liq_copy_loss').innerText = in_de_pri_fastliq_long_fix;

        var in_de_priz_fastliq_long = (sl_fastliq_long - entry_fastliq_long) / (entry_fastliq_long / 100)
        var in_de_priz_fastliq_long_fix = in_de_priz_fastliq_long.toFixed(2);
        document.getElementById('in-de-priz_fast-liq_loss').innerText = in_de_priz_fastliq_long_fix + " %";
        document.getElementById('in_de_priz_fast-liq_copy_loss').innerText = in_de_priz_fastliq_long_fix;

        var to_price_fastliq_long = sl_fastliq_long
        var to_price_fastliq_long_fix = to_price_fastliq_long.toFixed(4);
        document.getElementById('to-price_fast-liq_loss').innerText = to_price_fastliq_long_fix + " USDT";
        document.getElementById('to_price_fast-liq_copy_loss').innerText = to_price_fastliq_long_fix;

        /* Calculation Function Names */

        var cost_fastliq_long_name_profit_fastliq = cost_fastliq_long.toFixed(4)
        document.getElementById('to-pro_fast-liq_name').innerText = cost_fastliq_long_name_profit_fastliq + " to";

        var entry_fastliq_long_name_profit_fastliq = entry_fastliq_long.toFixed(4)
        document.getElementById('to-price_fast-liq_name').innerText = entry_fastliq_long_name_profit_fastliq + " to";

        var cost_fastliq_long_name_loss_fastliq = cost_fastliq_long.toFixed(4)
        document.getElementById('to-loss_fast-liq_name').innerText = cost_fastliq_long_name_loss_fastliq + " to";

        var entry_fastliq_long_name_loss_fastliq = entry_fastliq_long.toFixed(4)
        document.getElementById('to-price_fast-liq_loss_name').innerText = entry_fastliq_long_name_loss_fastliq + " to";

        
    } else {
        // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
        document.getElementById('ov_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('qty_fast-liq').innerText = "0.000 Coins";
        document.getElementById('im_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('lp_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('fees_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-proz_fast-liq').innerText = "0.00 %";
        document.getElementById('new-pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('proz_fast-liq').innerText = "0.00 %";
        document.getElementById('to-pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-liq').innerText = "0.00 %";
        document.getElementById('to-price_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('loss_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('lossz_fast-liq').innerText = "0.00 %";
        document.getElementById('to-loss_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-liq_loss').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-liq_loss').innerText = "0.00 %";
        document.getElementById('to-price_fast-liq_loss').innerText = "0.0000 USDT";

        /* Calculation Function Names */

        document.getElementById('to-pro_fast-liq_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-liq_name').innerText = "0.0000 to";
        document.getElementById('to-loss_fast-liq_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-liq_loss_name').innerText = "0.0000 to";
    }
}

function calc_fast_liq_short() {
    // Werte aus den Eingabefeldern abrufen
    var sl_fastliq_short = parseFloat(document.getElementById('sl-fast-liq-short').value);
    var entry_fastliq_short = parseFloat(document.getElementById('entry-fast-liq-short').value);
    var cost_fastliq_short = parseFloat(document.getElementById('cost-fast-liq-short').value);
    var lev_fastliq_short = parseFloat(document.getElementById('lev-fast-liq-short').value);
    var mmr_fastliq_short = parseFloat(document.getElementById('mmr-fast-liq-short').value);
    var tp_fastliq_short = parseFloat(document.getElementById('tp-fast-liq-short').value);

if (!isNaN(sl_fastliq_short) && !isNaN(entry_fastliq_short) && !isNaN(cost_fastliq_short) && !isNaN(lev_fastliq_short) && !isNaN(mmr_fastliq_short) && !isNaN(tp_fastliq_short)) {
        // Summe berechnen und in das Ausgabefeld einfügen

        var mmr_fastliq_short = mmr_fastliq_short / 100

        var ov_fastliq_short = lev_fastliq_short * cost_fastliq_short
        var ov_fastliq_short_fix = ov_fastliq_short.toFixed(4);
        document.getElementById('ov_fast-liq').innerText = ov_fastliq_short_fix + " USDT";
        document.getElementById('ov_fast-liq_copy').innerText = ov_fastliq_short_fix;

        var qty_fastliq_short = ov_fastliq_short / entry_fastliq_short
        var qty_fastliq_short_fix = qty_fastliq_short.toFixed(3);
        document.getElementById('qty_fast-liq').innerText = qty_fastliq_short_fix + " Coins";
        document.getElementById('qty_fast-liq_copy').innerText = qty_fastliq_short_fix;

        var im_fastliq_short = cost_fastliq_short
        var im_fastliq_short_fix = im_fastliq_short.toFixed(4);
        document.getElementById('im_fast-liq').innerText = im_fastliq_short_fix + " USDT";
        document.getElementById('im_fast-liq_copy').innerText = im_fastliq_short_fix;

        var lp_fastliq_short = entry_fastliq_short + (cost_fastliq_short - (ov_fastliq_short * mmr_fastliq_short)) / qty_fastliq_short
        var lp_fastliq_short_fix = lp_fastliq_short.toFixed(4);
        document.getElementById('lp_fast-liq').innerText = lp_fastliq_short_fix + " USDT";
        document.getElementById('lp_fast-liq_copy').innerText = lp_fastliq_short_fix;

        var fees_fastliq_short = (ov_fastliq_short * (-0.00055)) * 2
        var fees_fastliq_short_fix = fees_fastliq_short.toFixed(4);
        document.getElementById('fees_fast-liq').innerText = fees_fastliq_short_fix + " USDT";
        document.getElementById('fees_fast-liq_copy').innerText = fees_fastliq_short_fix;

        var in_de_pro_fastliq_short = (((((((fees_fastliq_short * (-1)) / (cost_fastliq_short / 100)) / 100) / lev_fastliq_short) + 1) * entry_fastliq_short) - entry_fastliq_short) * (-1)
        var in_de_pro_fastliq_short_fix = in_de_pro_fastliq_short.toFixed(4);
        document.getElementById('in-de-pro_fast-liq').innerText = in_de_pro_fastliq_short_fix + " USDT";
        document.getElementById('in_de_pro_fast-liq_copy').innerText = in_de_pro_fastliq_short_fix;

        var in_de_proz_fastliq_short = in_de_pro_fastliq_short / (entry_fastliq_short / 100)
        var in_de_proz_fastliq_short_fix = in_de_proz_fastliq_short.toFixed(2);
        document.getElementById('in-de-proz_fast-liq').innerText = in_de_proz_fastliq_short_fix + " %";
        document.getElementById('in_de_proz_fast-liq_copy').innerText = in_de_proz_fastliq_short_fix;

        var new_pro_fastliq_short = entry_fastliq_short + in_de_pro_fastliq_short
        var new_pro_fastliq_short_fix = new_pro_fastliq_short.toFixed(4);
        document.getElementById('new-pro_fast-liq').innerText = new_pro_fastliq_short_fix + " USDT";
        document.getElementById('new_pro_fast-liq_copy').innerText = new_pro_fastliq_short_fix;

        var pro_fastliq_short = ((entry_fastliq_short - tp_fastliq_short) * qty_fastliq_short) - ((ov_fastliq_short * 0.00055) * 2)
        var pro_fastliq_short_fix = pro_fastliq_short.toFixed(4);
        document.getElementById('pro_fast-liq').innerText = pro_fastliq_short_fix + " USDT";
        document.getElementById('pro_fast-liq_copy').innerText = pro_fastliq_short_fix;

        var proz_fastliq_short = pro_fastliq_short / (cost_fastliq_short / 100)
        var proz_fastliq_short_fix = proz_fastliq_short.toFixed(2);
        document.getElementById('proz_fast-liq').innerText = proz_fastliq_short_fix + " %";
        document.getElementById('proz_fast-liq_copy').innerText = proz_fastliq_short_fix;

        var to_pro_fastliq_short = pro_fastliq_short + cost_fastliq_short
        var to_pro_fastliq_short_fix = to_pro_fastliq_short.toFixed(4);
        document.getElementById('to-pro_fast-liq').innerText = to_pro_fastliq_short_fix + " USDT";
        document.getElementById('to_pro_fast-liq_copy').innerText = to_pro_fastliq_short_fix;

        var in_de_pri_fastliq_short = tp_fastliq_short - entry_fastliq_short
        var in_de_pri_fastliq_short_fix = in_de_pri_fastliq_short.toFixed(4);
        document.getElementById('in-de-pri_fast-liq').innerText = in_de_pri_fastliq_short_fix + " USDT";
        document.getElementById('in_de_pri_fast-liq_copy').innerText = in_de_pri_fastliq_short_fix;

        var in_de_priz_fastliq_short = (tp_fastliq_short - entry_fastliq_short) / (entry_fastliq_short / 100)
        var in_de_priz_fastliq_short_fix = in_de_priz_fastliq_short.toFixed(2);
        document.getElementById('in-de-priz_fast-liq').innerText = in_de_priz_fastliq_short_fix + " %";
        document.getElementById('in_de_priz_fast-liq_copy').innerText = in_de_priz_fastliq_short_fix;

        var to_price_fastliq_short = tp_fastliq_short
        var to_price_fastliq_short_fix = to_price_fastliq_short.toFixed(4);
        document.getElementById('to-price_fast-liq').innerText = to_price_fastliq_short_fix + " USDT";
        document.getElementById('to_price_fast-liq_copy').innerText = to_price_fastliq_short_fix;

        var loss_fastliq_short = ((entry_fastliq_short - sl_fastliq_short) * qty_fastliq_short) - ((ov_fastliq_short * 0.00055) * 2)
        var loss_fastliq_short_fix = loss_fastliq_short.toFixed(4);
        document.getElementById('loss_fast-liq').innerText = loss_fastliq_short_fix + " USDT";
        document.getElementById('loss_fast-liq_copy').innerText = loss_fastliq_short_fix;

        var lossz_fastliq_short = loss_fastliq_short / (cost_fastliq_short / 100)
        var lossz_fastliq_short_fix = lossz_fastliq_short.toFixed(2);
        document.getElementById('lossz_fast-liq').innerText = lossz_fastliq_short_fix + " %";
        document.getElementById('lossz_fast-liq_copy').innerText = lossz_fastliq_short_fix;

        var to_loss_fastliq_short = cost_fastliq_short + loss_fastliq_short
        var to_loss_fastliq_short_fix = to_loss_fastliq_short.toFixed(4);
        document.getElementById('to-loss_fast-liq').innerText = to_loss_fastliq_short_fix + " USDT";
        document.getElementById('to_loss_fast-liq_copy').innerText = to_loss_fastliq_short_fix;

        var in_de_pri_fastliq_short = sl_fastliq_short - entry_fastliq_short
        var in_de_pri_fastliq_short_fix = in_de_pri_fastliq_short.toFixed(4);
        document.getElementById('in-de-pri_fast-liq_loss').innerText = in_de_pri_fastliq_short_fix + " USDT";
        document.getElementById('in_de_pri_fast-liq_copy_loss').innerText = in_de_pri_fastliq_short_fix;

        var in_de_priz_fastliq_short = (sl_fastliq_short - entry_fastliq_short) / (entry_fastliq_short / 100)
        var in_de_priz_fastliq_short_fix = in_de_priz_fastliq_short.toFixed(2);
        document.getElementById('in-de-priz_fast-liq_loss').innerText = in_de_priz_fastliq_short_fix + " %";
        document.getElementById('in_de_priz_fast-liq_copy_loss').innerText = in_de_priz_fastliq_short_fix;

        var to_price_fastliq_short = sl_fastliq_short
        var to_price_fastliq_short_fix = to_price_fastliq_short.toFixed(4);
        document.getElementById('to-price_fast-liq_loss').innerText = to_price_fastliq_short_fix + " USDT";
        document.getElementById('to_price_fast-liq_copy_loss').innerText = to_price_fastliq_short_fix;

        /* Calculation Function Names */

        var cost_fastliq_short_name_profit_fastliq = cost_fastliq_short.toFixed(4)
        document.getElementById('to-pro_fast-liq_name').innerText = cost_fastliq_short_name_profit_fastliq + " to";

        var entry_fastliq_short_name_profit_fastliq = entry_fastliq_short.toFixed(4)
        document.getElementById('to-price_fast-liq_name').innerText = entry_fastliq_short_name_profit_fastliq + " to";

        var cost_fastliq_short_name_loss_fastliq = cost_fastliq_short.toFixed(4)
        document.getElementById('to-loss_fast-liq_name').innerText = cost_fastliq_short_name_loss_fastliq + " to";

        var entry_fastliq_short_name_loss_fastliq = entry_fastliq_short.toFixed(4)
        document.getElementById('to-price_fast-liq_loss_name').innerText = entry_fastliq_short_name_loss_fastliq + " to";

        
    } else {
        // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
        document.getElementById('ov_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('qty_fast-liq').innerText = "0.000 Coins";
        document.getElementById('im_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('lp_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('fees_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-proz_fast-liq').innerText = "0.00 %";
        document.getElementById('new-pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('proz_fast-liq').innerText = "0.00 %";
        document.getElementById('to-pro_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-liq').innerText = "0.00 %";
        document.getElementById('to-price_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('loss_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('lossz_fast-liq').innerText = "0.00 %";
        document.getElementById('to-loss_fast-liq').innerText = "0.0000 USDT";
        document.getElementById('in-de-pri_fast-liq_loss').innerText = "0.0000 USDT";
        document.getElementById('in-de-priz_fast-liq_loss').innerText = "0.00 %";
        document.getElementById('to-price_fast-liq_loss').innerText = "0.0000 USDT";

        /* Calculation Function Names */

        document.getElementById('to-pro_fast-liq_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-liq_name').innerText = "0.0000 to";
        document.getElementById('to-loss_fast-liq_name').innerText = "0.0000 to";
        document.getElementById('to-price_fast-liq_loss_name').innerText = "0.0000 to";
    }
}


/* Toggle Functions */

function toggleOption(option) {
if (option === 'long') {
    document.getElementById('long').classList.add('active');
    document.getElementById('short').classList.remove('active');
    document.getElementById('inputs_fast-qty_short').style.setProperty('display', 'none', 'important');
    document.getElementById('inputs_fast-qty_long').style.setProperty('display', 'block', 'important');

    calc_fast_qty_long();

} else if (option === 'short') {
    document.getElementById('short').classList.add('active');
    document.getElementById('long').classList.remove('active');
    document.getElementById('inputs_fast-qty_short').style.setProperty('display', 'block', 'important');
    document.getElementById('inputs_fast-qty_long').style.setProperty('display', 'none', 'important');

    calc_fast_qty_short();


}
}

function toggleOption_b(option) {
    if (option === 'long') {
        document.getElementById('long_b').classList.add('active');
        document.getElementById('short_b').classList.remove('active');

        document.getElementById('inputs_fast-lev_short').style.setProperty('display', 'none', 'important');
        document.getElementById('inputs_fast-lev_long').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-tit_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-tit_fast-lev').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-tit-proz_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-tit-proz_fast-lev').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase_fast-lev').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-proz_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-proz_fast-lev').style.setProperty('display', 'block', 'important');

        document.getElementById('price-increase_fast-lev_loss').style.setProperty('display', 'none', 'important');
        document.getElementById('price-decrease_fast-lev_loss').style.setProperty('display', 'block', 'important');

        document.getElementById('price-increase-proz_fast-lev_loss').style.setProperty('display', 'none', 'important');
        document.getElementById('price-decrease-proz_fast-lev_loss').style.setProperty('display', 'block', 'important');

        var cop_in_de_pro_fastlev_mdl_content_content = "Copy Price Increase till Profit (USDT)";
        document.getElementById('cop_in_de_pro_fastlev_mdl_content').innerText = cop_in_de_pro_fastlev_mdl_content_content;

        var cop_in_de_proz_fastlev_mdl_content_content = "Copy Price Increase till Profit (%)";
        document.getElementById('cop_in_de_proz_fastlev_mdl_content').innerText = cop_in_de_proz_fastlev_mdl_content_content;

        var cop_in_de_pri_fastlev_mdl_content_content = "Copy Price Increase (USDT)";
        document.getElementById('cop_in_de_pri_fastlev_mdl_content').innerText = cop_in_de_pri_fastlev_mdl_content_content;

        var cop_in_de_priz_fastlev_mdl_content_content = "Copy Price Increase (%)";
        document.getElementById('cop_in_de_priz_fastlev_mdl_content').innerText = cop_in_de_priz_fastlev_mdl_content_content;

        var in_de_pri_fastlev_loss_mdl_content_content = "Copy Price Decrease (USDT)";
        document.getElementById('in_de_pri_fastlev_loss_mdl_content').innerText = in_de_pri_fastlev_loss_mdl_content_content;

        var in_de_priz_fastlev_loss_mdl_content_content = "Copy Price Decrease (%)";
        document.getElementById('in_de_priz_fastlev_loss_mdl_content').innerText = in_de_priz_fastlev_loss_mdl_content_content;

        calc_fast_lev_long();
        

    } else if (option === 'short') {
        document.getElementById('short_b').classList.add('active');
        document.getElementById('long_b').classList.remove('active');

        document.getElementById('inputs_fast-lev_short').style.setProperty('display', 'block', 'important');
        document.getElementById('inputs_fast-lev_long').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease-tit_fast-lev').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase-tit_fast-lev').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease-tit-proz_fast-lev').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase-tit-proz_fast-lev').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease_fast-lev').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase_fast-lev').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease-proz_fast-lev').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase-proz_fast-lev').style.setProperty('display', 'none', 'important');

        document.getElementById('price-increase_fast-lev_loss').style.setProperty('display', 'block', 'important');
        document.getElementById('price-decrease_fast-lev_loss').style.setProperty('display', 'none', 'important');

        document.getElementById('price-increase-proz_fast-lev_loss').style.setProperty('display', 'block', 'important');
        document.getElementById('price-decrease-proz_fast-lev_loss').style.setProperty('display', 'none', 'important');

        var cop_in_de_pro_fastlev_mdl_content_content = "Copy Price Decrease till Profit (USDT)";
        document.getElementById('cop_in_de_pro_fastlev_mdl_content').innerText = cop_in_de_pro_fastlev_mdl_content_content;

        var cop_in_de_proz_fastlev_mdl_content_content = "Copy Price Decrease till Profit (%)";
        document.getElementById('cop_in_de_proz_fastlev_mdl_content').innerText = cop_in_de_proz_fastlev_mdl_content_content;

        var cop_in_de_pri_fastlev_mdl_content_content = "Copy Price Decrease (USDT)";
        document.getElementById('cop_in_de_pri_fastlev_mdl_content').innerText = cop_in_de_pri_fastlev_mdl_content_content;

        var cop_in_de_priz_fastlev_mdl_content_content = "Copy Price Decrease (%)";
        document.getElementById('cop_in_de_priz_fastlev_mdl_content').innerText = cop_in_de_priz_fastlev_mdl_content_content;

        var in_de_pri_fastlev_loss_mdl_content_content = "Copy Price Increase (USDT)";
        document.getElementById('in_de_pri_fastlev_loss_mdl_content').innerText = in_de_pri_fastlev_loss_mdl_content_content;

        var in_de_priz_fastlev_loss_mdl_content_content = "Copy Price Increase (%)";
        document.getElementById('in_de_priz_fastlev_loss_mdl_content').innerText = in_de_priz_fastlev_loss_mdl_content_content;

        calc_fast_lev_short();


    }
}

function toggleOption_c(option) {
    if (option === 'long') {
        document.getElementById('long_c').classList.add('active');
        document.getElementById('short_c').classList.remove('active');

        document.getElementById('inputs_fast-liq_short').style.setProperty('display', 'none', 'important');
        document.getElementById('inputs_fast-liq_long').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-tit_fast-liq').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-tit_fast-liq').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-tit-proz_fast-liq').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-tit-proz_fast-liq').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease_fast-liq').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase_fast-liq').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-proz_fast-liq').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-proz_fast-liq').style.setProperty('display', 'block', 'important');

        document.getElementById('price-increase_fast-liq_loss').style.setProperty('display', 'none', 'important');
        document.getElementById('price-decrease_fast-liq_loss').style.setProperty('display', 'block', 'important');

        document.getElementById('price-increase-proz_fast-liq_loss').style.setProperty('display', 'none', 'important');
        document.getElementById('price-decrease-proz_fast-liq_loss').style.setProperty('display', 'block', 'important');

        var cop_in_de_pro_fastliq_mdl_content_content = "Copy Price Increase till Profit (USDT)";
        document.getElementById('cop_in_de_pro_fastliq_mdl_content').innerText = cop_in_de_pro_fastliq_mdl_content_content;

        var cop_in_de_proz_fastliq_mdl_content_content = "Copy Price Increase till Profit (%)";
        document.getElementById('cop_in_de_proz_fastliq_mdl_content').innerText = cop_in_de_proz_fastliq_mdl_content_content;

        var cop_in_de_pri_fastliq_mdl_content_content = "Copy Price Increase (USDT)";
        document.getElementById('cop_in_de_pri_fastliq_mdl_content').innerText = cop_in_de_pri_fastliq_mdl_content_content;

        var cop_in_de_priz_fastliq_mdl_content_content = "Copy Price Increase (%)";
        document.getElementById('cop_in_de_priz_fastliq_mdl_content').innerText = cop_in_de_priz_fastliq_mdl_content_content;

        var in_de_pri_fastliq_loss_mdl_content_content = "Copy Price Decrease (USDT)";
        document.getElementById('in_de_pri_fastliq_loss_mdl_content').innerText = in_de_pri_fastliq_loss_mdl_content_content;

        var in_de_priz_fastliq_loss_mdl_content_content = "Copy Price Decrease (%)";
        document.getElementById('in_de_priz_fastliq_loss_mdl_content').innerText = in_de_priz_fastliq_loss_mdl_content_content;

        calc_fast_liq_long();


    } else if (option === 'short') {
        document.getElementById('short_c').classList.add('active');
        document.getElementById('long_c').classList.remove('active');

        document.getElementById('inputs_fast-liq_short').style.setProperty('display', 'block', 'important');
        document.getElementById('inputs_fast-liq_long').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease-tit_fast-liq').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase-tit_fast-liq').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease-tit-proz_fast-liq').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase-tit-proz_fast-liq').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease_fast-liq').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase_fast-liq').style.setProperty('display', 'none', 'important');

        document.getElementById('price-decrease-proz_fast-liq').style.setProperty('display', 'block', 'important');
        document.getElementById('price-increase-proz_fast-liq').style.setProperty('display', 'none', 'important');

        document.getElementById('price-increase_fast-liq_loss').style.setProperty('display', 'block', 'important');
        document.getElementById('price-decrease_fast-liq_loss').style.setProperty('display', 'none', 'important');

        document.getElementById('price-increase-proz_fast-liq_loss').style.setProperty('display', 'block', 'important');
        document.getElementById('price-decrease-proz_fast-liq_loss').style.setProperty('display', 'none', 'important');

        var cop_in_de_pro_fastliq_mdl_content_content = "Copy Price Decrease till Profit (USDT)";
        document.getElementById('cop_in_de_pro_fastliq_mdl_content').innerText = cop_in_de_pro_fastliq_mdl_content_content;

        var cop_in_de_proz_fastliq_mdl_content_content = "Copy Price Decrease till Profit (%)";
        document.getElementById('cop_in_de_proz_fastliq_mdl_content').innerText = cop_in_de_proz_fastliq_mdl_content_content;

        var cop_in_de_pri_fastliq_mdl_content_content = "Copy Price Decrease (USDT)";
        document.getElementById('cop_in_de_pri_fastliq_mdl_content').innerText = cop_in_de_pri_fastliq_mdl_content_content;

        var cop_in_de_priz_fastliq_mdl_content_content = "Copy Price Decrease (%)";
        document.getElementById('cop_in_de_priz_fastliq_mdl_content').innerText = cop_in_de_priz_fastliq_mdl_content_content;

        var in_de_pri_fastliq_loss_mdl_content_content = "Copy Price Increase (USDT)";
        document.getElementById('in_de_pri_fastliq_loss_mdl_content').innerText = in_de_pri_fastliq_loss_mdl_content_content;

        var in_de_priz_fastliq_loss_mdl_content_content = "Copy Price Increase (%)";
        document.getElementById('in_de_priz_fastliq_loss_mdl_content').innerText = in_de_priz_fastliq_loss_mdl_content_content;

        calc_fast_liq_short();


    }
}

function toggleOption_d(option) {
    if (option === 'qty') {
        fullscreen_exit_fastqty();
    
    
    } else if (option === 'lev') {
        fullscreen_exit_fastlev();
    
    
    } else if (option === 'liq') {
        fullscreen_exit_fastliq();

        
    }
}

/* Copy Functions */
/* Cop Outputs Fast Qty*/

function cop_im_fastqty() {
    var textToCopy = parseFloat(document.getElementById('im_fast-qty_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_qty_fastqty() {
    var textToCopy = parseFloat(document.getElementById('qty_fast-qty_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_ov_fastqty() {
    var textToCopy = parseFloat(document.getElementById('ov_fast-qty_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

/* Copy Outputs Fast Lev*/

function cop_im_fastlev() {
    var textToCopy = parseFloat(document.getElementById('im_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_qty_fastlev() {
    var textToCopy = parseFloat(document.getElementById('qty_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_ov_fastlev() {
    var textToCopy = parseFloat(document.getElementById('ov_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_lev_fastlev() {
    var textToCopy = parseFloat(document.getElementById('lev_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_lp_fastlev() {
    var textToCopy = parseFloat(document.getElementById('lp_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_fees_fastlev() {
    var textToCopy = parseFloat(document.getElementById('fees_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_pro_fastlev() {
    var textToCopy = parseFloat(document.getElementById('in_de_pro_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_proz_fastlev() {
    var textToCopy = parseFloat(document.getElementById('in_de_proz_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_new_pro_fastlev() {
    var textToCopy = parseFloat(document.getElementById('new_pro_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_pro_fastlev() {
    var textToCopy = parseFloat(document.getElementById('pro_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_proz_fastlev() {
    var textToCopy = parseFloat(document.getElementById('proz_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_to_pro_fastlev() {
    var textToCopy = parseFloat(document.getElementById('to_pro_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_pri_fastlev() {
    var textToCopy = parseFloat(document.getElementById('in_de_pri_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_priz_fastlev() {
    var textToCopy = parseFloat(document.getElementById('in_de_priz_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_to_price_fastlev() {
    var textToCopy = parseFloat(document.getElementById('to_price_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function loss_fastlev() {
    var textToCopy = parseFloat(document.getElementById('loss_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function lossz_fastlev() {
    var textToCopy = parseFloat(document.getElementById('lossz_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function to_loss_fastlev() {
    var textToCopy = parseFloat(document.getElementById('to_loss_fast-lev_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function in_de_pri_fastlev_loss() {
    var textToCopy = parseFloat(document.getElementById('in_de_pri_fast-lev_copy_loss').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function in_de_priz_fastlev_loss() {
    var textToCopy = parseFloat(document.getElementById('in_de_priz_fast-lev_copy_loss').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function to_price_fastlev_loss() {
    var textToCopy = parseFloat(document.getElementById('to_price_fast-lev_copy_loss').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

/* Copy Outputs Fast Liq Price */

function cop_im_fastliq() {
    var textToCopy = parseFloat(document.getElementById('im_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_qty_fastliq() {
    var textToCopy = parseFloat(document.getElementById('qty_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_ov_fastliq() {
    var textToCopy = parseFloat(document.getElementById('ov_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_lp_fastliq() {
    var textToCopy = parseFloat(document.getElementById('lp_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_fees_fastliq() {
    var textToCopy = parseFloat(document.getElementById('fees_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_pro_fastliq() {
    var textToCopy = parseFloat(document.getElementById('in_de_pro_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_proz_fastliq() {
    var textToCopy = parseFloat(document.getElementById('in_de_proz_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_new_pro_fastliq() {
    var textToCopy = parseFloat(document.getElementById('new_pro_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_pro_fastliq() {
    var textToCopy = parseFloat(document.getElementById('pro_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_proz_fastliq() {
    var textToCopy = parseFloat(document.getElementById('proz_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_to_pro_fastliq() {
    var textToCopy = parseFloat(document.getElementById('to_pro_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_pri_fastliq() {
    var textToCopy = parseFloat(document.getElementById('in_de_pri_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_in_de_priz_fastliq() {
    var textToCopy = parseFloat(document.getElementById('in_de_priz_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_to_price_fastliq() {
    var textToCopy = parseFloat(document.getElementById('to_price_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function loss_fastliq() {
    var textToCopy = parseFloat(document.getElementById('loss_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function lossz_fastliq() {
    var textToCopy = parseFloat(document.getElementById('lossz_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function to_loss_fastliq() {
    var textToCopy = parseFloat(document.getElementById('to_loss_fast-liq_copy').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function in_de_pri_fastliq_loss() {
    var textToCopy = parseFloat(document.getElementById('in_de_pri_fast-liq_copy_loss').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function in_de_priz_fastliq_loss() {
    var textToCopy = parseFloat(document.getElementById('in_de_priz_fast-liq_copy_loss').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function to_price_fastliq_loss() {
    var textToCopy = parseFloat(document.getElementById('to_price_fast-liq_copy_loss').innerText);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

/* Copy Inputs Fast Liq Price */

function cop_sl_fastliq_short() {
    var textToCopy = parseFloat(document.getElementById('sl-fast-liq-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_sl_fastliq_long() {
    var textToCopy = parseFloat(document.getElementById('sl-fast-liq-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_entry_fastliq_short() {
    var textToCopy = parseFloat(document.getElementById('entry-fast-liq-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_entry_fastliq_long() {
    var textToCopy = parseFloat(document.getElementById('entry-fast-liq-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_tp_fastliq_short() {
    var textToCopy = parseFloat(document.getElementById('tp-fast-liq-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_tp_fastliq_long() {
    var textToCopy = parseFloat(document.getElementById('tp-fast-liq-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_lev_fastliq_short() {
    var textToCopy = parseFloat(document.getElementById('lev-fast-liq-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_lev_fastliq_long() {
    var textToCopy = parseFloat(document.getElementById('lev-fast-liq-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_cost_fastliq_short() {
    var textToCopy = parseFloat(document.getElementById('cost-fast-liq-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_cost_fastliq_long() {
    var textToCopy = parseFloat(document.getElementById('cost-fast-liq-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_mmr_fastliq_short() {
    var textToCopy = parseFloat(document.getElementById('mmr-fast-liq-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_mmr_fastliq_long() {
    var textToCopy = parseFloat(document.getElementById('mmr-fast-liq-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

/* Cop Inputs Fast Qty */

function cop_lev_fastqty_short() {
    var textToCopy = parseFloat(document.getElementById('leverage-fast-qty-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_lev_fastqty_long() {
    var textToCopy = parseFloat(document.getElementById('leverage-fast-qty-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_entry_fastqty_short() {
    var textToCopy = parseFloat(document.getElementById('entry-fast-qty-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_entry_fastqty_long() {
    var textToCopy = parseFloat(document.getElementById('entry-fast-qty-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_cost_fastqty_short() {
    var textToCopy = parseFloat(document.getElementById('cost-fast-qty-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_cost_fastqty_long() {
    var textToCopy = parseFloat(document.getElementById('cost-fast-qty-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

/* Copy Inputs Fast Lev */

function cop_sl_fastlev_short() {
    var textToCopy = parseFloat(document.getElementById('sl-fast-lev-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_sl_fastlev_long() {
    var textToCopy = parseFloat(document.getElementById('sl-fast-lev-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_entry_fastlev_short() {
    var textToCopy = parseFloat(document.getElementById('entry-fast-lev-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_entry_fastlev_long() {
    var textToCopy = parseFloat(document.getElementById('entry-fast-lev-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_tp_fastlev_short() {
    var textToCopy = parseFloat(document.getElementById('tp-fast-lev-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_tp_fastlev_long() {
    var textToCopy = parseFloat(document.getElementById('tp-fast-lev-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_risk_fastlev_short() {
    var textToCopy = parseFloat(document.getElementById('risk-fast-lev-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_risk_fastlev_long() {
    var textToCopy = parseFloat(document.getElementById('risk-fast-lev-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_cost_fastlev_short() {
    var textToCopy = parseFloat(document.getElementById('cost-fast-lev-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_cost_fastlev_long() {
    var textToCopy = parseFloat(document.getElementById('cost-fast-lev-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_mmr_fastlev_short() {
    var textToCopy = parseFloat(document.getElementById('mmr-fast-lev-short').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_mmr_fastlev_long() {
    var textToCopy = parseFloat(document.getElementById('mmr-fast-lev-long').value);

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

/* Copy Alerts | Succes or Fail */

function copy_suc() {
    var nackbarContainer = document.querySelector('#copy-snackbar');
    var data = { message: 'Value copied' };
    nackbarContainer.MaterialSnackbar.showSnackbar(data);
}

function copy_fail() {
    var nackbarContainer = document.querySelector('#copy-snackbar');
    var data = { message: 'Something went wrong, please retry later.' };
    nackbarContainer.MaterialSnackbar.showSnackbar(data);
}

/* Fullscreen Functions */

function fullscreen_fastqty() {
    document.getElementById('fullscreen_cont_fastqty').style.setProperty('display', 'none', 'important');
    document.getElementById('fullscreen_exit_cont_fastqty').style.setProperty('display', 'block', 'important');
    document.getElementById('calc_field_fast-qty').style.setProperty('z-index', '1031', 'important');
}

function fullscreen_exit_fastqty() {
    document.getElementById('fullscreen_cont_fastqty').style.setProperty('display', 'block', 'important');
    document.getElementById('fullscreen_exit_cont_fastqty').style.setProperty('display', 'none', 'important');
    document.getElementById('calc_field_fast-qty').style.setProperty('z-index', '1029', 'important');
}

function fullscreen_fastlev() {
    document.getElementById('fullscreen_cont_fastlev').style.setProperty('display', 'none', 'important');
    document.getElementById('fullscreen_exit_cont_fastlev').style.setProperty('display', 'block', 'important');
    document.getElementById('calc_field_fast-lev').style.setProperty('z-index', '1031', 'important');
}

function fullscreen_exit_fastlev() {
    document.getElementById('fullscreen_cont_fastlev').style.setProperty('display', 'block', 'important');
    document.getElementById('fullscreen_exit_cont_fastlev').style.setProperty('display', 'none', 'important');
    document.getElementById('calc_field_fast-lev').style.setProperty('z-index', '1029', 'important');
}

function fullscreen_fastliq() {
    document.getElementById('fullscreen_cont_fastliq').style.setProperty('display', 'none', 'important');
    document.getElementById('fullscreen_exit_cont_fastliq').style.setProperty('display', 'block', 'important');
    document.getElementById('calc_field_fast-liq').style.setProperty('z-index', '1031', 'important');
}

function fullscreen_exit_fastliq() {
    document.getElementById('fullscreen_cont_fastliq').style.setProperty('display', 'block', 'important');
    document.getElementById('fullscreen_exit_cont_fastliq').style.setProperty('display', 'none', 'important');
    document.getElementById('calc_field_fast-liq').style.setProperty('z-index', '1029', 'important');
}