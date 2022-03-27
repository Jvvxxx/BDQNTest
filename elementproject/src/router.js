import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            redirect: ('/login')
        }, {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/Login')
        }, {
            path: '/page',
            name: 'page',
            component: () =>
                import ('@/views/Page'),
            redirect: 'page/home',
            children: [{
                    path: '/page/home',
                    component: () =>
                        import ('@/views/Home'),
                }, {
                    path: '/page/caiwu',
                    component: () =>
                        import ('@/views/Caiwu'),
                }, {
                    path: '/page/fwgl',
                    component: () =>
                        import ('@/views/Fwgl'),
                },
                {
                    path: '/page/xiajia',
                    component: () =>
                        import ('@/views/Xiajia'),
                },
                {
                    path: '/page/shenhe',
                    component: () =>
                        import ('@/views/Shenhe'),
                },
                {
                    path: '/page/fworder',
                    component: () =>
                        import ('@/views/Fworder'),
                },
                {
                    path: '/page/yichang',
                    component: () =>
                        import ('@/views/Yichang'),
                },
                {
                    path: '/page/caiwumingxi',
                    component: () =>
                        import ('@/views/Caiwumingxi'),
                },
                {
                    path: '/page/zoushi',
                    component: () =>
                        import ('@/views/Zoushi'),
                },
                {
                    path: '/page/tixian',
                    component: () =>
                        import ('@/views/Tixian'),
                },
                {
                    path: '/page/kaipiao',
                    component: () =>
                        import ('@/views/Kaipiao'),
                },
                {
                    path: '/page/bank',
                    component: () =>
                        import ('@/views/Bank'),
                },
                {
                    path: '/page/mendian',
                    component: () =>
                        import ('@/views/Mendian'),
                },
                {
                    path: '/page/yixiaxian',
                    component: () =>
                        import ('@/views/Yixiaxian'),
                },
                {
                    path: '/page/shjilu',
                    component: () =>
                        import ('@/views/Shjilu'),
                },
                {
                    path: '/page/shzhong',
                    component: () =>
                        import ('@/views/Shzhong'),
                },
                {
                    path: '/page/waimaiyd',
                    component: () =>
                        import ('@/views/Waimaiyd'),
                },
                {
                    path: '/page/shangmensz',
                    component: () =>
                        import ('@/views/Shangmensz'),
                },
                {
                    path: '/page/peisong',
                    component: () =>
                        import ('@/views/Peisong'),
                },
                {
                    path: '/page/peisongmb',
                    component: () =>
                        import ('@/views/Peisongmb'),
                },
                {
                    path: '/page/zizhanghu',
                    component: () =>
                        import ('@/views/Zizhanghu'),
                },
                {
                    path: '/page/kuaidi',
                    component: () =>
                        import ('@/views/Kuaidi'),
                },
                {
                    path: '/page/weidian',
                    component: () =>
                        import ('@/views/Weidian'),
                },
                {
                    path: '/page/manmian',
                    component: () =>
                        import ('@/views/Manmian'),
                },
                {
                    path: '/page/duizhang',
                    component: () =>
                        import ('@/views/Duizhang'),
                },
                {
                    path: '/page/cuidan',
                    component: () =>
                        import ('@/views/Cuidan'),
                },
                {
                    path: '/page/fworder1',
                    component: () =>
                        import ('@/views/Fworder1'),
                },
                {
                    path: '/page/fworder2',
                    component: () =>
                        import ('@/views/Fworder2'),
                },
                {
                    path: '/page/yanzheng',
                    component: () =>
                        import ('@/views/Yanzheng'),
                }
            ]
        },
        {
            path: '/demo',
            component: () =>
                import ('@/views/demo'),
        },
        {
            path: '/demoyanzheng',
            component: () =>
                import ('@/views/demoyanzheng'),
        }
    ]

})