document.addEventListener("DOMContentLoad", function()  {
    var images = [];
    var chart;
    var imagePaths = ["Burger.jpg", "Hot_dog.jpg", "Olives.jpg", "Paella.jpg", "Pancakes.jpg", "Pizza.gif", "Salad.jpg", "Salmon.jpeg", "Shrimp.jpg", "Soup.jpg", "Stir_fry.jpg", "Sushi.jpg", "Tacos.jpg", "Watermelon.jpg", "Fruits_and_veggies.jpg"];
    var Photo = function(url)  {
        this.url = 'img/' + url;
        this.votes = 0;
    };
    imagePaths.forEach(function(image)  {
        images.push(new Photo(image));
    })
});

// imagePaths.forEach(function(image)  {
//     images.push(new Photo(image));
// });
var Tracker = {
    leftVotes: 0,
    rightVotes: 0,
    randomImage: function()  {
        return images[Math.floor(Math.random() * images.length)];
    },
    newImages: function()  {
        var leftImage = document.getElementById("leftImage");
        var rightImage = document.getElementById("rightImage");
        var newLeftImage = this.randomImage();
        var newRightImage = this.randomImage();
        while(newLeftImage === newRightImage)  {
            newRightImage = this.randomImage();
        };
        leftImage.innerHTML = '<img src= "' + newLeftImage.url + '" />';
        rightImage.innerHTML = '<img src= "' + newRightImage.url + '" />';
    },
    voteLeft: function()  {
        this.leftVotes++
        var LeftScore = document.getElementById('LeftScore');
        leftScore.textContent = this.leftVotes;
    },
    voteRight: function()  {
        this.rightVotes++;
    },
    updateChart: function()  {
        chart.segments[1].value = Tracker.leftVotes;
        chart.segments[0].value = Tracker.rightVotes;
        chart.update();
    }
};

var scoreChart = document.getElementById('foods').getContext('2d');
var pieData = [
  {
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Food2",
},
{
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Food1"
}
];
var pieOptions = {
    segmentShowStroke: false,
    animateScale: false
};
chart = new Chart(scoreChart).Pie(pieData, pieOptions);
Tracker.newImages();
window.Tracker = Tracker;






// var random_images_array = ["Burger.jpg", "Hot_dog.jpg", "Olives.jpg", "Paella.jpg", "Pancakes.jpg", "Pizza.gif", "Salad.jpg", "Salmon.jpeg", "Shrimp.jpg", "Soup.jpg", "Stir_fry.jpg", "Sushi.jpg", "Tacos.jpg", "Watermelon.jpg", "Fruits_and_veggies.jpg"];

// function getRandomImage(imgAr, path)  {
//     path = path || 'images/'; // default path here
//     var num = Math.floor(Math.random() * (imgAr.length));
//     var num2 = Math.floor(Math.random() * (imgAr.length));
//       while(num === num2)  {
//         num2 = Math.floor(Math.random() * (imgAr.length));
//       }

//     var img = imgAr[num];
//     var img2 = imgAr[num2];
//     // console.log(num);
//     var imgStr = '<img src="' + path + img + '" alt="">';
//     var imgStr2 = '<img src="' +path + img2 + '" alt="">';

//     var img = new Image();
//     var div = document.getElementById('Food1');
//     document.getElementById('Food1').innerHTML = imgStr;
//     document.getElementById('Food2').innerHTML = imgStr2;
// };

// var foods = document.getElementById("foods").getContext("2d");
// // console.log(foods);
// var data = [
//     {
//         value: 300,
//         color:"#F7464A",
//         highlight: "#FF5A5E",
//         label: "Red"
//     },
//     {
//         value: 50,
//         color: "#46BFBD",
//         highlight: "#5AD3D1",
//         label: "Green"
//     },
// ]
// var charts = new Chart(foods).Doughnut(data);
// charts.update();
// getRandomImage(random_images_array, '');


//     var dishes

//     var ids = ["Burger.jpg", "Hot_dog.jpg", "Olives.jpg", "Paella.jpg", "Pancakes.jpg", "Pizza.gif", "Salad.jpg", "Salmon.jpeg", "Shrimp.jpg", "Soup.jpg", "Stir_fry.jpg", "Sushi.jpg", "Tacos.jpg", "Watermelon.jpg", "Fruits_and_veggies.jpg"];
//     // console.log(ids);
//     var $listItems = $('li');

//     $("#Food1").on('click', function()  {
//         // ids = this.;
//         $listItems.children('span').remove();
//         $(this).append(' <span class="priority">' + ids + '</span>');
//     });

//     $("#Food2").on('click', function()  {
//         $(this).children('span').remove();
//     });
