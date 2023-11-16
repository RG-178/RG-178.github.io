/* Calculation Functions */

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
            document.getElementById('ov_fast-qty_copy').innerText = ov_fastqty_short;
    
            var qty_fastqty_short = ov_fastqty_short / entry_fastqty_short
            var qty_fastqty_short = qty_fastqty_short.toFixed(3);
            document.getElementById('qty_fast-qty').innerText = qty_fastqty_short + " Coins";
            document.getElementById('qty_fast-qty_copy').innerText = qty_fastqty_short;
    
            var im_fastqty_short = cost_fastqty_short
            var im_fastqty_short = im_fastqty_short.toFixed(4);
            document.getElementById('im_fast-qty').innerText = im_fastqty_short + " USDT";
            document.getElementById('im_fast-qty_copy').innerText = im_fastqty_short;
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
            document.getElementById('ov_fast-qty_copy').innerText = ov_fastqty_long;
    
            var qty_fastqty_long = ov_fastqty_long / entry_fastqty_long
            var qty_fastqty_long = qty_fastqty_long.toFixed(3);
            document.getElementById('qty_fast-qty').innerText = qty_fastqty_long + " Coins";
            document.getElementById('qty_fast-qty_copy').innerText = qty_fastqty_long;
    
            var im_fastqty_long = cost_fastqty_long
            var im_fastqty_long = im_fastqty_long.toFixed(4);
            document.getElementById('im_fast-qty').innerText = im_fastqty_long + " USDT";
            document.getElementById('im_fast-qty_copy').innerText = im_fastqty_long;
            
        } else {
            // Wenn nicht beide Eingabefelder ausgefüllt sind, zeige eine Fehlermeldung oder setze das Ergebnis auf 0
            document.getElementById('ov_fast-qty').innerText = "0.0000 USDT";
            document.getElementById('qty_fast-qty').innerText = "0.000 Coins";
            document.getElementById('im_fast-qty').innerText = "0.0000 USDT";
        }
  }

/* Toggle Functions */

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

        document.getElementById('price-decrease-tit_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-tit_fast-lev').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-tit-proz_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-tit-proz_fast-lev').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase_fast-lev').style.setProperty('display', 'block', 'important');

        document.getElementById('price-decrease-proz_fast-lev').style.setProperty('display', 'none', 'important');
        document.getElementById('price-increase-proz_fast-lev').style.setProperty('display', 'block', 'important');

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


    }
}

/* Copy Functions */

function cop_im_fastqty() {
    var textToCopy = document.getElementById('im_fast-qty_copy').innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_qty_fastqty() {
    var textToCopy = document.getElementById('qty_fast-qty_copy').innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

function cop_ov_fastqty() {
    var textToCopy = document.getElementById('ov_fast-qty_copy').innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(function() {
        copy_suc();
    })
    .catch(function() {
        copy_fail();
    });
}

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

/* Copy Alerts Succes / Fail */

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