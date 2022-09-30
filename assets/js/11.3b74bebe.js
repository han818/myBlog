(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{415:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("目 录\n")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#一、起步"}},[t._v("一、起步")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1、创建项目目录"}},[t._v("1、创建项目目录")])]),a("li",[a("a",{attrs:{href:"#_2、安装vuepress"}},[t._v("2、安装vuepress")])]),a("li",[a("a",{attrs:{href:"#_3、创建文档"}},[t._v("3、创建文档")])]),a("li",[a("a",{attrs:{href:"#_4、配置文件package-json"}},[t._v("4、配置文件package.json")])])])]),a("li",[a("a",{attrs:{href:"#二、配置"}},[t._v("二、配置")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1、在docs目录下添加-vuepress目录"}},[t._v("1、在docs目录下添加.vuepress目录")])]),a("li",[a("a",{attrs:{href:"#_2、配置config-js"}},[t._v("2、配置config.js")])]),a("li",[a("a",{attrs:{href:"#_3、添加导航栏"}},[t._v("3、添加导航栏")])]),a("li",[a("a",{attrs:{href:"#_4、添加侧边栏"}},[t._v("4、添加侧边栏")])]),a("li",[a("a",{attrs:{href:"#_5、主题插件"}},[t._v("5、主题插件")])]),a("li",[a("a",{attrs:{href:"#_6、添加文章信息"}},[t._v("6、添加文章信息")])]),a("li",[a("a",{attrs:{href:"#_7、设置语言"}},[t._v("7、设置语言")])])])]),a("li",[a("a",{attrs:{href:"#三、部署到github-page"}},[t._v("三、部署到Github Page")])]),a("li",[a("a",{attrs:{href:"#_1、设置仓库"}},[t._v("1、设置仓库")])]),a("li",[a("a",{attrs:{href:"#_2、创建并执行脚本"}},[t._v("2、创建并执行脚本")])]),a("li",[a("a",{attrs:{href:"#_3、查看"}},[t._v("3、查看")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"vuepress搭建个人博客及github-pages部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建个人博客及github-pages部署"}},[t._v("#")]),t._v(" Vuepress搭建个人博客及GitHub Pages部署")]),t._v(" "),a("h2",{attrs:{id:"一、起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、起步"}},[t._v("#")]),t._v(" 一、起步")]),t._v(" "),a("h3",{attrs:{id:"_1、创建项目目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建项目目录"}},[t._v("#")]),t._v(" 1、创建项目目录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir vuepress\n\ncd vuepress\n\nnpm init //初始化npm包\n")])])]),a("h3",{attrs:{id:"_2、安装vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装vuepress"}},[t._v("#")]),t._v(" 2、安装vuepress")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i  -D vuepress \n")])])]),a("h3",{attrs:{id:"_3、创建文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建文档"}},[t._v("#")]),t._v(" 3、创建文档")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir docs\n\necho '# Hello VuePress' > docs/README.md\n")])])]),a("h3",{attrs:{id:"_4、配置文件package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、配置文件package-json"}},[t._v("#")]),t._v(" 4、配置文件package.json")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"scripts": {`  \n\n  `"docs:dev": "vuepress dev docs", \t//\t启动本地服务`\n\n  `"docs:build": "vuepress build docs"\t//\t项目打包`\n\n `}\n')])])]),a("h2",{attrs:{id:"二、配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、配置"}},[t._v("#")]),t._v(" 二、配置")]),t._v(" "),a("h3",{attrs:{id:"_1、在docs目录下添加-vuepress目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、在docs目录下添加-vuepress目录"}},[t._v("#")]),t._v(" 1、在docs目录下添加.vuepress目录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd docs\nmkdir .vuepress\n")])])]),a("p",[t._v("所有 VuePress 相关的文件都会被放在这里。在 "),a("code",[t._v(".vuepress")]),t._v(" 文件夹下添加 "),a("code",[t._v("config.js")]),t._v("，配置网站的标题和描述")]),t._v(" "),a("p",[t._v("此时目录结构:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-- docs',\n    |-- README.md',\n    |-- .vuepress',\n        |-- config.js'\n")])])]),a("h3",{attrs:{id:"_2、配置config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置config-js"}},[t._v("#")]),t._v(" 2、配置config.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = { \n\ttitle: '我的博客',   //标题\n\tdescription: 'XXX'  //描述\n\t}\n")])])]),a("h3",{attrs:{id:"_3、添加导航栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加导航栏"}},[t._v("#")]),t._v(" 3、添加导航栏")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('module.exports = {\n    title: \'我的博客\',\n    description: \'XXX\',\n    themeConfig:{\n        nav:[\n            { text:\'首页\',link:\'/\'},\n            { \n                text:\'hannz的博客\',\n                items:[\n                    { text: "掘金", link: "https://juejin.cn/user/3558485311363677" },\n                    { text: "Github", link: "https://github.com/han818" },\n                    { text: "码云", link: "https://gitee.com/han-zzgo" }\n                ]\n        }\n    ],\n   \n    },\n   \n}\n')])])]),a("h3",{attrs:{id:"_4、添加侧边栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、添加侧边栏"}},[t._v("#")]),t._v(" 4、添加侧边栏")]),t._v(" "),a("p",[t._v("在docs目录下新增 handbook目录，在里面新增md文档")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-- docs',\n    |-- README.md',\n    |-- .vuepress',\n        |-- config.js'\n    |-- handbook\n        |-- 1.md \n        |-- 2.md\n")])])]),a("p",[t._v("config.js配置如下:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n    title: '我的博客',\n    description: 'XXX',\n    themeConfig:{\n        nav:[\n            { text:'首页',link:'/'},\n            { \n                text:'hannz的博客',\n                items:[\n                    { text: \"掘金\", link: \"https://juejin.cn/user/3558485311363677\" },\n                    { text: \"Github\", link: \"https://github.com/han818\" },\n                    { text: \"码云\", link: \"https://gitee.com/han-zzgo\" }\n                ]\n        }\n    ],\n    sidebar:[\n        {\n            title:'A',\n            path:'/',\n            collapsable:false, //是否折叠\n            children:[{title:'博客简介',path:'/'}],\n        },\n        {\n            title:'B',\n            path:'/handbook/1',\n            collapsable:true,\n            children:[\n                {title:'第一篇',path:'/handbook/1'},\n                {title:'第二篇',path:'/handbook/2'},\n            ],\n        },\n    ],\n    },\n  \n}\n")])])]),a("h3",{attrs:{id:"_5、主题插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、主题插件"}},[t._v("#")]),t._v(" 5、主题插件")]),t._v(" "),a("p",[t._v("安装vuepress-theme-reco插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install vuepress-theme-reco --save-dev\n")])])]),a("p",[t._v("在config.js中引用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  theme: 'reco',\n  ...\n}  \n")])])]),a("h3",{attrs:{id:"_6、添加文章信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、添加文章信息"}},[t._v("#")]),t._v(" 6、添加文章信息")]),t._v(" "),a("p",[t._v("在md文档中添加:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\ntitle: 2.\nauthor: hannzz\ndate: '2022-9-26'\n---\n")])])]),a("h3",{attrs:{id:"_7、设置语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、设置语言"}},[t._v("#")]),t._v(" 7、设置语言")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  ...\n  locales: {\n    '/': {\n      lang: 'zh-CN'\n    }\n  },\n  ...\n}  \n")])])]),a("p",[t._v("可以发现 我们写入的时间格式为2022-9-26 ，但显示的是"),a("em",[t._v("2022/9/26")]),t._v("。 这是因为 VuePress 默认的 lang 为 "),a("code",[t._v("en-US")]),t._v("，我们修改为"),a("code",[t._v("zh-CN")])]),t._v(" "),a("h2",{attrs:{id:"三、部署到github-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、部署到github-page"}},[t._v("#")]),t._v(" 三、部署到Github Page")]),t._v(" "),a("h2",{attrs:{id:"_1、设置仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、设置仓库"}},[t._v("#")]),t._v(" 1、设置仓库")]),t._v(" "),a("p",[t._v("在GitHub上新建仓库，如:interview")]),t._v(" "),a("p",[t._v("需在config.js中配置base路径")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  // 和仓库名相同\n  base: '/interview/',\n  ...\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n    title: '我的博客',\n    description: 'XXX',\n    base: '/interview/',\n    themeConfig:{\n        nav:[\n            { text:'首页',link:'/'},\n            { \n                text:'hannz的博客',\n                items:[\n                    { text: \"掘金\", link: \"https://juejin.cn/user/3558485311363677\" },\n                    { text: \"Github\", link: \"https://github.com/han818\" },\n                    { text: \"码云\", link: \"https://gitee.com/han-zzgo\" }\n                ]\n        }\n    ],\n    sidebar:[\n        {\n            title:'欢迎学习',\n            path:'/',\n            collapsable:false, //是否折叠\n            children:[{title:'博客简介',path:'/'}],\n        },\n        {\n            title:'基础篇',\n            path:'/handbook/1',\n            collapsable:true,\n            children:[\n                {title:'第一篇',path:'/handbook/1'},\n                {title:'第二篇',path:'/handbook/2'},\n            ],\n        },\n    ],\n    },\n    theme: 'reco',\n    locales: {\n        '/': {\n            lang: 'zh-CN'\n        }\n    },\n    subSidebar: 'auto',\n}\n")])])]),a("h2",{attrs:{id:"_2、创建并执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建并执行脚本"}},[t._v("#")]),t._v(" 2、创建并执行脚本")]),t._v(" "),a("p",[t._v("在项目根目录下创建脚本文件deploy.sh，写入如下:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 发布\n# git push -f git@github.com:XXX/XXX.git master:gh-pages\ngit push -f git@github.com:han818/interview.git master:gh-pages\n\ncd -\n\n")])])]),a("p",[t._v("配置完脚本文件后，在项目根目录 打开gitbash")]),t._v(" "),a("p",[t._v("输入sh deploy.sh执行脚本")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd vuepress\nsh deploy.sh\n")])])]),a("h2",{attrs:{id:"_3、查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、查看"}},[t._v("#")]),t._v(" 3、查看")]),t._v(" "),a("p",[t._v("在github仓库中的setting->Pages中能找到博客地址")]),t._v(" "),a("p",[t._v("地址:https://han818.github.io/interview/")]),t._v(" "),a("p",[t._v("以上即为vuepress+github pages搭建博客的大概流程")])])}),[],!1,null,null,null);a.default=n.exports}}]);