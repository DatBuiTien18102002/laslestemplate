$('.customer-list').slick({

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<button type ='button' class='slick-prev pull-left'>
        <img src="./img/arrowLeft.svg"/>
    </button> `,
    nextArrow: `<button type ='button' class='slick-next pull-left'>
        <img src="./img/arrowRight.svg"/>
    </button> `,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:

    ]
});



