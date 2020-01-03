export const menus = [
    {
        title: "系统主页",
        path: "/home",
        icon: "home",
        permission: false
    },
    {
        title: "销售管理",
        path: "/home/market",
        icon: "shop",
        permission: false,
        children: [
            {
                title: "前台销售",
                path: "/home/market/cash",
                permission: false
            },
            {
                title: "标签打印",
                path: "/home/market/barcodeprint",
                permission: false
            },
            {
                title: "条码秤管理",
                path: "/home/market/weigher",
                permission: false
            },
            {
                title: "设备管理",
                path: "/home/market/device",
                permission: false
            }
        ]
    },
    {
        title: "促销管理",
        path: "/home/promotion",
        icon: "icon-cuxiaohuodong",
        icon_online: true,
        children: [
            {
                title: "活动管理",
                path: "/home/promotion/manage"
            },
            {
                title: "活动商品管理",
                path: "/home/promotion/commodity"
            }
        ]
    },
    {
        title: "仓储管理",
        path: "/home/warehouse",
        icon: "icon-cangkuguanli",
        icon_online: true,
        children: [
            {
                title: "供应商管理",
                path: "/home/warehouse/supplier"
            },
            {
                title: "进货管理",
                path: "/home/warehouse/stock"
            },
            {
                title: "分类管理",
                path: "/home/warehouse/categories"
            },
            {
                title: "商品管理",
                path: "/home/warehouse/commodity"
            }
        ]
    },
    {
        title: "会员管理",
        path: "/home/vip",
        icon: "icon-huiyuan-",
        icon_online: true,
        children: [
            {
                title: "会员管理",
                path: "/home/vip/manage"
            },
            {
                title: "高级功能",
                path: "/home/vip/highfunc"
            }
        ]
    },
    {
        title: "销售统计",
        path: "/home/statistics",
        icon: "pie-chart",
    },
    {
        title: "用户管理",
        path: "/home/users",
        icon: "user",
        children: [
            {
                title: "用户信息",
                path: "/home/users/details"
            },
            {
                title: "权限管理",
                path: "/home/users/authority"
            }
        ]
    },
    {
        title: "系统设置",
        path: "/home/system",
        icon: "setting",
        children: [
            {
                title: "店铺信息",
                path: "/home/system/store"
            }
        ]
    }
];

export const menuValue = (() => {
    const menuMap = {};
    const menuPath = menus.reduce((result, { path, children, title }) => {
        if (children) {
            children.map(child => {
                result.push([child.path, path]);
                menuMap[child.path] = child.title;
            });
        } else {
            result.push([path]);
            menuMap[path] = title;
        }
        return result;
    }, []);
    return {
        menuMap, menuPath
    }
})();