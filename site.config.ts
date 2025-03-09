import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://buptwqz.github.io/',
  lang: 'zh-CN',
  title: 'Wqz\'s Blog',
  timezone: 'Asia/Shanghai',
  
  author: {
    name: 'wqzLorenzo',
  },
  description: 'Make Myself Greater Again!',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/buptwqz',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/wqz123',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://y.music.163.com/m/user?id=607828687',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/13402153',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://x.com/wqz98346046',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/wqz_lorenzo?igsh=MndjeWM1cmx3ZzU4',
      icon: 'ri-instagram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'wqzlorenzo@gmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'RedNote',
      link: 'https://www.xiaohongshu.com/user/profile/6015547d000000000100bdc8?xsec_token=YBvucXq8d2-WSUjiPP_xYqA8Q6bKdnPAkTjnCxJmcUN7k%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=6015547d000000000100bdc8&apptime=1741514777&share_id=ed2c22b629a349eaa4a1975ebf69ae20&share_channel=copy_link',
      icon: 'ri-book-fill',
      color: '#FF0000',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
