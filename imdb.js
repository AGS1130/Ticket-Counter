/**************************DO NOT FORGET TO SET NAME TO INPUT FIELD WITH movieSearch**********************/
const express = require('express');
const cheerio = require('cheerio');
const request = require('request');

const app = express();

let movieAppend = document.getElementById('rendering-div');

/* APPEND TABLE*/
movieSearch.addEventListener('keypress', function(e) {
        let key = e.which || e.keyCode;
        if (key === 13) {
            request({
                uri: `http://www.imdb.com/find?ref_=nv_sr_fn&q=example&s=tt` //q=${movieSearch.value}
            }, (err, res, body) => {
                if(err) console.log("Error is:", err)
                
                const $ = cheerio.load(body);
                let movieTable = $('.findList').html();
                
                /*APPEND TO DIV WITH ID="rendering-div" ```WILL BE SET TO movieSelection```*/
                movieAppend.innerHTML += ('<table id="movie-results">' + movieTable + '</table>');
        })
    }
})

let movieSelection = document.getElementById('movie-results').getElementsByTagName('a');

/*SET ID ON ALL MOVIE SELECTION ANCHORS AND ADD CLICK EVENT FUNCTION*/
for(let i = 0; i < anchors.length; i++){
    anchors[i].setAttribute('id', i);
    anchors[i].setAttribute('onclick', 'redirectToPosterWithSummary('+i+')')
}

/*GETS TABLE INFORMATION*/
const redirectToPosterWithSummary = (num) => {
    let q = document.getElementById(num).getAttribute('href');
    document.getElementById(num).href = '#';
    document.querySelector('#movie-results').style.display = 'none';

    request({
        uri: `http://www.imdb.com` + q
    }, (err, res, body) => {
          if(err) console.log("Error is:", err)
          
          const $ = cheerio.load(body);
          
          let movieDetails = $('.minPosterWithPlotSummaryHeight');

          /*GRABS IMAGE and MOVIE SUMMARY */
          let poster = movieDetails.find('.poster').children();
          let plot_summary = movieDetails.find('.plot_summary');

          /*APPEND TO DIV WITH ID="rendering-div"*/
          movieAppend.innerHTML += '<div id=plotAndSummary>' + poster.html() + plot_summary.html() + '</div>';
          
          /*CHECKS IF MOVIE SUMMARY NEEDS DESCRIPTION AND ADDS APPROPRIATE LINKS*/
          const node = document.getElementsByTagName('a')
          
          if(node[0].innerHTML == "Add a Plot" || node[0].innerHTML == "Add a\nPlot"){
              node[0].href = '#';
            } else {
                node[0].href = 'http://www.imdb.com' + node[0].getAttribute('href');
            }
            
            for(let i = 1; i < node.length; i++){
                node[i].href = 'http://www.imdb.com' + node[i].getAttribute('href');
            }

        })

        /*APPEND INPUT TYPE NUMBER AND BUTTONS*/
        /*CONDITIONAL: IF BUTTON SAVE => SAVE THE URI(q) INTO DATABASE; ELSE => document.getElementById('plotAndSummary').parentNode.removeChild(document.getElementById('plotAndSummary'));*/
}