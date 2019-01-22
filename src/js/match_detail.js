/*经纪商 兑入详情*/
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [
      {
        icon: "icon-match",
        text: "兑入订单管理",
        href: "index.html"
      },
      {
        icon: "icon-cash-out",
        text: "兑出订单管理",
        href: "cash_out.html"
      },
      {
        icon: "icon-gathering",
        text: "收款订单管理",
        href: "gathering.html"
      },
      {
        icon: "icon-remit",
        text: "数字资产汇款",
        href: "cny_set.html"
      },
      {
        icon: "icon-custom",
        text: "自定义风格页面",
        href: "javascript:;"
      }
    ],

    orderData: [
      [
        {
          key: "订单信息"
        },
        {
          key: "订单编号: ",
          val: "20180802_1500022135"
        },
        {
          key: "第三方平台订单号: ",
          val: "1500022135"
        },
        {
          key: "订单状态: ",
          val: "待服务商收款"
        },
        {
          key: "USTD数量: ",
          val: "1000"
        },
        {
          key: "经纪商: ",
          val: "CPT"
        },
        {
          key: "转账备注码：",
          val: "353535"
        }
      ],
      [
        {
          key: "付款信息"
        },
        {
          key: "付款金额: ",
          val: "￥7000"
        },
        {
          key: "付款人姓名: ",
          val: "张三"
        },
        {
          key: "付款方式: ",
          val: "银行转账"
        },
        {
          key: "收款人姓名: ",
          val: "玉米蒸"
        },
        {
          key: "收款人银行: ",
          val: "农业银行 广东茂名市茂东支行"
        },
        {
          key: "收款人账号: ",
          val: "6228 4811 7674 6694 972"
        }
      ],
      [
        {
          key: "客户信息"
        },
        {
          key: "姓名: ",
          val: "玉米甲"
        },
        {
          key: "服务器: ",
          val: "101"
        },
        {
          key: "交易帐号: ",
          val: "6667845615"
        },
        {
          key: "邮箱: ",
          val: "yumijia@163.com"
        },
        {
          key: "手机: ",
          val: "18814656852"
        }
      ],
      [
        {
          key: "服务商信息"
        },
        {
          key: "服务商名称: ",
          val: "玉米蒸"
        },
        {
          key: "服务次数: ",
          val: "10010"
        },
        {
          key: "平均确认时长: ",
          val: "00:05:00"
        }
      ]
    ]
  }
})