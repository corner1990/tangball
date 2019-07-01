Page({
    data: {
        active: 0,
        icon: {
            normal: '//img.yzcdn.cn/icon-normal.png',
            active: '//img.yzcdn.cn/icon-active.png'
        }
    },

    onChange(event) {
        this.setData({
            active: event.detail
        })
        console.log(event.detail);
    }
});