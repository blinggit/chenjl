window.addEventListener('load', function() {
    // 轮播图初始化
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 自动轮播
        autoplay: {
            delay: 3000, //间隔时间
            stopOnLastSlide: false, //最后一张是否挺住
            disableOnInteraction: true, //交互的时候是否停止自动
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
})