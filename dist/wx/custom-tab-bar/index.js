Page({
    data: {
        active: 0,
        icon: {
            normal: '//img.yzcdn.cn/icon-normal.png',
            active: '//img.yzcdn.cn/icon-active.png'
        },
        list: [
            {
                "text": "首页",
                "pagePath": "../index/main",
                "iconPath": "home-o"
            },
            {
                "text": "唐球馆",
                "pagePath": "../tanghome/main",
                "iconPath": "fire-o"
            },
            {
                "text": "活动",
                "pagePath": "../event/main",
                "iconPath": "medel-o"
            },
            {
                "text": "个人中心",
                "pagePath": "../usercenter/main",
                "iconPath": "friends-o"
            }
        ],
    },

    onChange(event) {
        let active = event.detail
        let list = this.data.list;
        let url = list[active].pagePath
        this.setData({ active: active })
        wx.switchTab({  url });
        console.log('urls[active]', active);
    }
});