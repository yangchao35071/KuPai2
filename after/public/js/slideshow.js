$(function () {
    new Slideshow({
        'boxDom': $('#slideshow'),

        'imgs': ['banner_M7.jpg', 'banner_C6_P.jpg', 's1R7d6Kh85S9.jpg', '7WetOMDL8czC.jpg', '67Bkh4kVlJYg.jpg'],

        'btnW': '50px',
        'btnH': '8px'
    })
    new Slideshow({
        'boxDom': $('#slideshow2'),

        'imgs': ['banner_C6_P.jpg','banner_M7.jpg', '7WetOMDL8czC.jpg', '67Bkh4kVlJYg.jpg'],

        'btnW': '50px',
        'btnH': '8px'
    })
})

let Slideshow = function (obj) {
    this.boxDom = obj.boxDom;

    this.imgs = obj.imgs;

    this.timer = null;
    this.index = 0;

    this.btnW = obj.btnW;

    this.btnH = obj.btnH;


    this.initUI();
    this.initEvent();
    this.autoPlay();
}
Slideshow.prototype.initUI = function () {
    // 创建图片
    this.$ulDom = $('<ul></ul>');
    this.$ulDom.css({
        'width': '100%',
        'height': '100%',
        'overflow': 'hidden',
        'position': 'relative'
    });
    for (let i = 0; i < this.imgs.length; i++) {
        this.$liDom = $('<li></li>');
        this.$liDom.css({
            'width': '100%',
            'height': '100%',
            'position': 'absolute',
            'left': '0',
            'top': '0'
        });
        this.$aDom = $('<a></a>');
        this.$aDom.attr({ 'href': 'javascript:;' });
        this.$aDom.css({ 'width': '100%', 'height': '100%', 'background': 'url(img/' + this.imgs[i] + ') no-repeat center', 'display': 'block', 'background-size': 'cover' })
        this.$liDom.append(this.$aDom);
        this.$ulDom.append(this.$liDom);
    }
    this.boxDom.append(this.$ulDom);


    this.$ulDom.find('li').not(this.$ulDom.find('li').eq(0)).css({
        'display': 'none'
    });


    // 创建按钮
    this.$ulBtn = $('<ul></ul>');
    this.$ulBtn.css({ 'position': 'absolute', 'bottom': '20px', 'overflow': 'hidden', 'left': '50%', 'z-index': '5', 'margin': 'auto', 'transform': 'translate(-50%)' })
    for (let i = 0; i < this.imgs.length; i++) {
        this.$liBtn = $('<li></li>');
        this.$liBtn.css({ 'width': this.btnW, 'height': this.btnH, 'background': 'yellow', 'opacity': '0.7', 'float': 'left', 'margin': '0 10px', 'position': 'relative' });
        this.$aBtn = $('<a></a>');
        this.$aBtn.attr({ 'href': 'javascript:;' })
        this.$aBtn.css({ 'display': 'block', 'width': '100%', 'height': '100%' });
        this.$liBtn.append(this.$aBtn);
        this.$ulBtn.append(this.$liBtn);
    }
    this.boxDom.append(this.$ulBtn);

    this.$timeT = $('<div></div>');
    this.$timeT.css({ 'width': '0px', 'height': '8px', 'background': 'red', 'position': 'absolute', 'left': '0', 'top': '0' });
}
Slideshow.prototype.initEvent = function () {
    let isThis = this;
    this.$ulBtn.find('li').click(function () {
        isThis.index = $(this).index();
        isThis.$timeT.stop();
        isThis.switchover(isThis.index);
    })

    this.$ulDom.mouseenter(function () {
        clearInterval(isThis.timer);
    })
    this.$ulDom.mouseleave(function () {
        isThis.autoPlay();
    })

}
Slideshow.prototype.autoPlay = function () {
    this.timer = setInterval(() => {
        this.index++;
        if (this.index >= this.imgs.length) {
            this.index = 0;
        }
        this.switchover(this.index);
    }, 3010);
}
Slideshow.prototype.switchover = function (index) {
    this.$ulDom.find('li').eq(index).fadeTo(3000, 1).css({ 'z-index': '1' });
    this.$ulDom.find('li').not(this.$ulDom.find('li').eq(index)).fadeTo(3000, 0).css({ 'z-index': '0' });

    this.$ulBtn.find('li').eq(index).append(this.$timeT);
    this.$timeT.animate({ 'width': '101%' }, 3000);
    this.$timeT.animate({ 'width': '0' }, 0);
}