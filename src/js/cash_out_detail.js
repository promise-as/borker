/*经纪商 兑出详情*/
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [
      {
        icon: "icon-match",
        text: "兑入订单管理",
        href: "match.html"
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
        href: "custom.html"
      }
    ],
    userName: '张三',
    cashOutOrderDetailIsShow: false,
    isShowRemitMsg: false,
    submitRemitMsgBtn: ['确认', '取消'],
    submitRemitMsgBtnIndex: 0,
    orderData: [
      [
        {
          key: "订单信息"
        },
        {
          key: "收款订单编号: ",
          val: "201808150303030001"
        },
        {
          key: "支付单号: ",
          val: "1500022135"
        },
        {
          key: "订单状态: ",
          val: "服务商已打款"
        },
        {
          key: "收款金额(USTD): ",
          val: "1000"
        },
        {
          key: "经纪商: ",
          val: "CPT"
        }
      ],
      [
        {
          key: "收款信息"
        },
        {
          key: "收款金额: ",
          val: "￥7000"
        },
        {
          key: "付款人姓名: ",
          val: "张三"
        },
        {
          key: "付款人银行: ",
          val: "农业银行 广东茂名市茂东支行"
        },
        {
          key: "业务联络人: ",
          val: "6228 4811 7674 6694 972"
        },
        {
          key: "收款凭证: ",
          val: "查看凭证"
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
    ],
    remark: '备注点东西呗',

    carouselImg: [
      './images/icon/logo_abc.png',
      './images/icon/logo_bcc.png',
      './images/icon/logo_ccb.png',
      './images/icon/logo_cm.png'
    ]
  },
  methods: {
    voucher: function () {
      this.cashOutOrderDetailIsShow = true
    },
    closeVoucher: function () {
      this.cashOutOrderDetailIsShow = false
    },
    submitRemitMsg: function () {
      axios.post('url', {})
        .then(function (response) {
          // handle success
          // console.log(response)
        })
        .catch(function (error) {
          // handle error
          // console.log(error)
        })

      this.isShowRemitMsg = false
    },
    closeRemitMsg: function() {
      this.isShowRemitMsg = false
    },
    showRemitMsg: function() {
      this.isShowRemitMsg = true
    },
    btnIndexTab: function (index) {
      this.submitRemitMsgBtnIndex = index
    },
  }
})