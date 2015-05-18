'use strict';
var kittenCompetition = function()  {
    var kittens = [];
    var counter = 0;
    var kittenNumber1;
    var kittenNumber2;
    var votedOne = $('#choose1');
    var votedTwo = $('#choose2');
    var playAgain = $('#play-again');
    var Photo = function(name, source, votes)  {
        this.name = name;
        this.source = MKsources[kittens.length];
        this.votes = Math.floor(Math.random() * (4-1)) + 1;
    };

    kittens.push(new Photo('Wonder Woman'));
    kittens.push(new Photo('Superman'));
    kittens.push(new Photo('Batman'));
    kittens.push(new Photo('Catwoman'));
    kittens.push(new Photo('Arrow'));
    kittens.push(new Photo('Canary'));
    kittens.push(new Photo('Atom'));
    kittens.push(new Photo('Spiderman'));
    kittens.push(new Photo('Flash'));
    kittens.push(new Photo('Ironman'));
    kittens.push(new Photo('Archer'));
    kittens.push(new Photo('Hulk'));
    kittens.push(new Photo('Thor'));
    kittens.push(new Photo('Captain America'));

    var pickKittens = function()  {
        kittenNumber1 = Math.floor(Math.random() * (kittens.length - 1));
        kittenNumber2 = Math.floor(Math.random() * (kittens.length - 1));
        while (kittenNumber2 === kittenNumber1)  {
            kittenNumber2 = Math.floor(Math.random() * (kittens.length - 1));
        };
        var el = $('#photo1');
        el.attr('src',kittens[kittenNumber1].source);
        var el = $('#kitten1-name');
        el.text(kittens[kittenNumber1].name);
        var el = $('#photo2');
        el.attr('src',kittens[kittenNumber2].source);
        var el = $('#kitten2-name');
        el.text(kittens[kittenNumber2].name);
    };

    var makeChart = function()  {
        var data = [
        { value: kittens[kittenNumber1].votes,
            color: "#F7464A",
            label: kittens[kittenNumber1].name  },
            { value: kittens[kittenNumber2].votes,
                color: "#46BFBD",
                label: kittens[kittenNumber2].name  }
                ];
                var ctx = document.getElementById("myChart").getContext("2d");
                var myDoughnutChart = new Chart(ctx).Doughnut(data);
            };

    var blankChart = function()  {
                var canvas = document.getElementById('myChart');
                var ctx = myChart.getContext('2d');
                ctx.clearRect(0,0,200,200);
            };

    var voteFor = function(event)  {
                event.preventDefault();
                kittens[kittenNumber1].votes++;
                if (kittens[kittenNumber1].votes > kittens[kittenNumber2].votes) {
                    var el = $('#one-wins');
                    el.attr('class', 'showthis blink');
                    var el = $('#vote-count');
                    el.html('The internet masses have spoken: ' + kittens[kittenNumber1].name + ' has ' + kittens[kittenNumber1].votes + ' votes, but ' + kittens[kittenNumber2].name + ' only has ' + kittens[kittenNumber2].votes + '.');
                } else if (kittens[kittenNumber1].votes < kittens[kittenNumber2].votes) {
                    var el = $('#two-wins');
                    el.attr('class', 'showthis blink');
                    var el = $('#vote-count');
                    el.html('The internet masses have spoken: ' + kittens[kittenNumber2].name + ' has ' + kittens[kittenNumber2].votes + ' votes, but ' + kittens[kittenNumber1].name + ' only has ' + kittens[kittenNumber1].votes + '.');
                } else {
                    var el = $('#vote-count');
                    el.html('The internet masses have spoken: ' + kittens[kittenNumber1].name + ' has ' + kittens[kittenNumber1].votes + ' votes and so does ' + kittens[kittenNumber2].name + ' - it\'s a tie!');
                    var el = $('#tie1');
                    el.attr('class', 'showthis blink');
                    var el = $('#tie2');
                    el.attr('class', 'showthis blink');
                };

            };

    var el = $('#button1-wrap');
            el.attr('class', 'hidethis');
    var el = $('#button2-wrap');
            el.attr('class', 'hidethis');
    var el = $('#play-again');
            el.prop('disabled', false);
    var el = $('#vote-count');
            makeChart();

    var voteAgain = function(event)  {
                event.preventDefault();
                blankChart();
                var el = $('#button1-wrap');
                el.attr('class', 'showthis');
                var el = $('#button2-wrap');
                el.attr('class', 'showthis');
                var el = $('#one-wins');
                el.attr('class', 'hidethis blink');
                var el = $('#two-wins');
                el.attr('class', 'hidethis blink');
                var el = $('#tie1');
                el.attr('class', 'hidethis blink');
                var el = $('#tie2');
                el.attr('class', 'hidethis blink');
                var el = $('#vote-count');
                el.html('');
                var el = $('#play-again');
                el.prop('disabled', true);
                pickKittens();
            };
    var votes = function()  {
                console.log('im counting votes');
                counter++
                console.log(counter);
            };

            pickKittens();
            $('#choose1').click(voteFor);
            $('#choose2').click(voteFor);
            $('#play-again').click(voteAgain);
        };
<<<<<<< HEAD
        var votes = function()  {
            console.log('im counting votes');
            counter++
            console.log(counter);
        };

        pickKittens();
        $('#choose1').click(voteFor);
        $('#choose2').click(voteFor);
        $('#play-again').click(voteAgain);
    };
    //First used jquery in lines 7-9.
=======
>>>>>>> af6e292aca80b294a8c07066f2b1c1ebd309c961
