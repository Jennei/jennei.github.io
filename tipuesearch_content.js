var tipuesearch = {"pages":[{"title":"赞乎产品需求规格说明书","text":"注意 版权说明 本文档属于XX软件有限公司所有的机密材料。 在获得XX软件有限公司直接的书面允许之前， 本文档中的任何部分均不得用各种方法或形式复制或公布于众。 这些方法包括电子或机械的方法， 如影印或各种信息存储或重复取用系统。 同样，在获得XX软件有限公司直接的书面允许之前， 本文章中的任何部分也不得向第三方披露 赞乎产品需求规格说明书 文档编号 V 0.1.0 编写人 Nico 模块名称 赞乎需求说明 部门 研发部 保密等级 极密 日期 2020年03月15日 第一章 修订页 编号 章节名称 修订内容简述 修订日期 修订前版本号 修订后版本号 修订人 批准人 001 第二章 项目概述 2.1 产品描述 赞乎是一个类似于知乎的知识问答社区，连接各行各业的用户。用户分享着彼此的知识、经验和见解，为中文互联网源源不断地提供多种多样的信息。 2.2 产品功能 本产品为PC端，具有当今主流知识问答应用的功能，包括个人中心、动态、文章、问答、私信、消息通知、网站搜索，对外开放邮箱注册。 第三章 业务需求 3.1 总体需求 本产品不包含后台管理系统 网站所有内容需要用户登陆后才能访问 3.2 用户个人中心 3.2.1 登录/注册/退出 可以邮箱注册，使用第三方应用微信或Github注册登录，用户名登录，支持邮箱找回和重置密码。 3.2.2 个人信息 包括昵称、邮箱、头像、简介、职称、城市、个人链接、微博链接、知乎链接、Github链接、LinkedIn链接，用户可以更新。 3.3.3 用户信息统计 显示用户自网站注册日起，发表动态的数量，已发表文章的数量，参与评论的数量，提问的数量，回答问题的数量，用户的互动总数。 3.3 首页动态功能 3.3.1 动态列表页 最上方有\"发表动态\"按钮，每页显示20条动态 动态下有点赞和评论按钮 每条动态除内容外要显示用户头像、昵称、发表时间、赞和评论数量，用户互动后能自动更新数量 对于登录用户发表的动态，右上角显示删除按钮 3.3.2 发表动态 发表动态字数不限，畅所欲言。 3.3.3 删除动态 用户可以删除自己发表的动态。 3.3.4 用户点赞 可以给自己和其他人点赞，也可以取消赞。 3.3.5 用户评论 评论不能删除，除非状态被发表人删除 3.4 文章模块 如下4个功能点中，第1、2、3各使用一页，页面上方有面包屑可以跳转； 3.4.1 浏览文章页 每页显示10篇文章 每篇文章显示标题、图片、内容的前100个字、发表人、发表时间、文章标签已经阅读全文的按钮 文章页要显示\"写文章\"和\"草稿箱\"按钮，云标签 3.4.2 文章详情页面 每篇文章显示标题、图片、内容、发表人、发表时间 文章页要显示\"写文章\"和\"编辑\"按钮，云标签 文章下方有评论区 3.4.3 写文章 用户必填字段为标题、内容、文章图片、标签，标签支持多个使用英文逗号隔开 编辑文章内容时可Markdown实时预览 用户可将文章发表或保存为草稿，或者取消 3.4.4 保存草稿 草稿箱与浏览文章页功能一样，不用之处在于用户只能看到自己保存的草稿。 3.4.5 评论文章 用户评论时必填昵称、邮箱地址、内容，选填URL 3.5 问答模块 3.5.1 问答页 页面上方有面包屑，下面是话题分类和提问按钮，下面是3个Tab栏目：待回答问题页、已回答问题页、所有问题页，每页显示20个问题； ​每个问题需要显示：回答的数量、问题的投票数量、标题、内容的前100个字符、提问者、提问时间、问题标签 3.5.2 问题详情页 页面上方有面包屑，显示问题的所有回答 问题需要显示：回答的数量、问题的投票数量、标题、内容的前100个字符、提问者、提问时间、问题标签；用户可以给问题投票，有提问按钮和回答按钮 回答需要显示：回答的投票数、回答用户的头像和昵称、答案内容、回答时间、如果回答被接受显示对勾；用户可以给回答投票 3.5.3 用户提问 用户必填字段为标题、内容、标签，标签支持多个使用英文逗号隔开 编辑文章内容时可Markdown实时预览 用户可将问题发表或保存为草稿，或者取消 问题不能修改或删除 3.5.4 回答问题 页面上方有面包屑，填写回答内容时可Markdown实时预览；回答不能修改或删除 3.5.5 给问题或回答投票 显示票数=赞同数 - 反对数，用户可以赞同或反对，随时取消赞同或反对 3.5.6 提问者接受回答 只能接受一个回答，接受后不能取消 3.6 私信功能 每页显示可私信的20个用户 对话框默认选中最近一次私信互动的用户 可与其他用户在线聊天 聊天内容显示头像、昵称、时间、内容，点击昵称可跳转至用户个人中心 3.7 消息通知 当其它用户与我有如下互动时能接收到通知： 赞了我的状态 评论了我的动态或文章 收藏了我的文章 回答了我的提问 接受了我的回答 回复了我的评论 3.7.1 通知下拉框 显示最近收到的5条消息通知，包括昵称、互动类型、互动对象、互动时间；有\"查看所有通知\"和\"全部标为已读\"按钮 3.7.2 未读通知列表 显示所有的消息通知，有全部标为已读按钮； 每条消息通知包括用户头像、昵称、互动类型、互动对象、互动时间，有\"标为已读\"按钮； 3.8 全站搜索 可以搜索文章、动态、问题、用户、标签； 文章搜索结果：显示文章图片、标题（可跳转）、内容的前100个字 动态搜索结果：与首页的显示的动态信息一致 问题搜索结果：与问答页显示的问题信息一致 用户搜索结果：显示用户头像（可跳转）、昵称（可发邮件）、职位、城市 标签搜索结果：显示被搜索到的标签 第四章 附录","tags":"Django开发企业级应用","url":"/django_in_practice","loc":"/django_in_practice"},{"title":"NodeJs开发环境搭建实践","text":"注解 本开发搭建实践指南中所有示例代码采自 《Learning JavaScript》第三版 英文原书中， 由于书中工具集可能比较旧，所以在安装对应工具集时，确认好版本。 开始前新建一个项目目录，并运行下面指令初始化项目目录 npm init 开发工具集合 Node 允许脱离浏览器运行 javascript 脚本 Gulp 自动化构建工具 Babel javascript 语法转译器， 支持 ES6 -> ES5 语法转换 ESLint javascript 代码检查，让你避免常见错误，保证代码健壮性 NodeJs版本 nicodeMacBook-Pro:GitHub nico$ node -v v12.13.0 nicodeMacBook-Pro:GitHub nico$ npm -v 6.12.0 安装 Gulp 自动化构建工具 全局安装 gulp (只安装一次？) nicodeMacBook-Pro:GitHub nico$ npm install -g gulp /usr/local/bin/gulp -> /usr/local/lib/node_modules/gulp/bin/gulp.js > fsevents@1.2.9 install /usr/local/lib/node_modules/gulp/node_modules/fsevents > node install node-pre-gyp WARN Using needle for node-pre-gyp https download [fsevents] Success: \"/usr/local/lib/node_modules/gulp/node_modules/fsevents/lib/binding/Release/node-v72-darwin-x64/fse.node\" is installed via remote + gulp@4.0.2 added 384 packages from 238 contributors in 14.761s nicodeMacBook-Pro:GitHub nico$ gulp -v CLI version: 2.2.0 Local version: Unknown 安装完成后，在项目根目录安装项目本地的 gulp nicodeMacBook-Pro:NodePractice nico$ npm --save-dev install gulp 测试 gulp 是否正常工作,在项目根目录下新建 gulpfile.js nicodeMacBook-Pro:NodePractice nico$ ls gulpfile.js node_modules package-lock.json gulpfile.js const gulp = require ( 'gulp' ); // Gulp dependencies go here gulp . task ( 'default' , function () { // Gulp tasks go here }); 直接执行 gulp nicodeMacBook-Pro:NodePractice nico$ gulp [21:33:29] Using gulpfile ~/GitHub/NodePractice/gulpfile.js [21:33:29] Starting 'default'... [21:33:29] The following tasks did not complete: default [21:33:29] Did you forget to signal async completion? 似乎报错了，应该是示例代码太老了，可以参考 这篇文章的解决办法 安装 Babel npm install --save-dev gulp-babel @babel/core @babel/preset-env 创建 .babelrc, 加入下面 babel 配置。 { \"presets\" : [ \"@babel/preset-env\" ] } 测试 babel 是否正常工作，打开 gulpfile.js 加入下面代码。 const gulp = require ( 'gulp' ); const babel = require ( 'gulp-babel' ); // Gulp dependencies go here gulp . task ( 'default' , function () { // Gulp tasks go here gulp . src ( \"es6/**/*.js\" ) . pipe ( babel ()) . pipe ( gulp . dest ( \"dist\" )); // browser source gulp . src ( \"public/es6/**/*.js\" ) . pipe ( babel ()) . pipe ( gulp . dest ( \"public/dist\" )); }); 在 es6 目录下新建一个 test.js 文件。 'use strict' ; // es6 feature: block-scoped \"let\" declaration const sentences = [ { subject : 'JavaScript' , verb : 'is' , object : 'great' }, { subject : 'Elephants' , verb : 'are' , object : 'large' }, ]; // es6 feature: object destructuring function say ({ subject , verb , object }) { // es6 feature: template strings console . log ( ` ${ subject } ${ verb } ${ object } ` ); } // es6 feature: for..of for ( let s of sentences ) { say ( s ); } 最后在项目根目录执行 gulp, 后会发现在 dist 目录下生成对应 es5 脚本文件。 'use strict' ; // es6 feature: block-scoped \"let\" declaration var sentences = [{ subject : 'JavaScript' , verb : 'is' , object : 'great' }, { subject : 'Elephants' , verb : 'are' , object : 'large' }]; // es6 feature: object destructuring function say ( _ref ) { var subject = _ref . subject , verb = _ref . verb , object = _ref . object ; // es6 feature: template strings console . log ( \"\" . concat ( subject , \" \" ). concat ( verb , \" \" ). concat ( object )); } // es6 feature: for..of for ( var _i = 0 , _sentences = sentences ; _i < _sentences . length ; _i ++ ) { var s = _sentences [ _i ]; say ( s ); } 使用 node 执行在 dist 目录转译后的 test.js 文件 nicodeMacBook-Pro:NodePractice nico$ node dist/test.js JavaScript is great Elephants are large 安装 ESLint npm install -g eslint /usr/local/bin/eslint -> /usr/local/lib/node_modules/eslint/bin/eslint.js + eslint@6.6.0 added 121 packages from 75 contributors in 5.228s 在项目根目录下通过下面指令生成 .eslintrc 文件。 eslint --init 警告 在运行上面指令时，确保项目根目录下存在 package.json 文件，如果不存在，请首先通过以下指令进行生成。 npm init 安装 gulp-eslint nicodeMacBook-Pro:NodePractice nico$ npm install --save-dev gulp-eslint npm WARN eslint-plugin-vue@5.2.3 requires a peer of eslint@&#94;5.0.0 but none is installed. You must install peer dependencies yourself. npm WARN gulp-babel@8.0.0 requires a peer of @babel/core@&#94;7.0.0 but none is installed. You must install peer dependencies yourself. npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself. npm WARN vue-eslint-parser@5.0.0 requires a peer of eslint@&#94;5.0.0 but none is installed. You must install peer dependencies yourself. npm WARN nodepractice@1.0.0 No description npm WARN nodepractice@1.0.0 No repository field. + gulp-eslint@6.0.0 added 1 package from 2 contributors in 2.053s 修改项目根目录下的 gulp.js const gulp = require ( 'gulp' ); const babel = require ( 'gulp-babel' ); const eslint = require ( 'gulp-eslint' ); gulp . task ( 'default' , function () { // Run ESLint gulp . src ([ \"es6/**/*.js\" , \"public/es6/**/*.js\" ]) . pipe ( eslint ()) . pipe ( eslint . format ()); // Node source gulp . src ( \"es6/**/*.js\" ) . pipe ( babel ()) . pipe ( gulp . dest ( \"dist\" )); // browser source gulp . src ( \"public/es6/**/*.js\" ) . pipe ( babel ()) . pipe ( gulp . dest ( \"public/dist\" )); }); 项目根目录下执行 gulp nicodeMacBook-Pro:NodePractice nico$ gulp [23:52:40] Using gulpfile ~/GitHub/NodePractice/gulpfile.js [23:52:40] Starting 'default'... [23:52:40] /Users/nico/GitHub/NodePractice/es6/test.js 1:13 error Extra semicolon semi 4:1 error Expected indentation of 2 spaces but found 8 indent 5:1 error Expected indentation of 2 spaces but found 8 indent 5:63 error Unexpected trailing comma comma-dangle 6:2 error Extra semicolon semi 8:13 error Missing space before function parentheses space-before-function-paren 9:1 error Expected indentation of 2 spaces but found 5 indent 9:38 error Trailing spaces not allowed no-trailing-spaces 10:1 error Expected indentation of 2 spaces but found 5 indent 10:49 error Extra semicolon semi 13:1 error Expected space(s) after \"for\" keyword-spacing 13:9 error 's' is never reassigned. Use 'const' instead prefer-const 14:1 error Expected indentation of 2 spaces but found 5 indent 14:12 error Extra semicolon semi ✖ 14 problems (14 errors, 0 warnings) 14 errors and 0 warnings potentially fixable with the `--fix` option. NodeJs工程结构 如下 dist 目录用于存放 node 服务端 es6 转译后的 es5 代码，es6 目录存放 node 服务端代码， public/es6，及 public/dist 分别存放浏览器端的 es6 代码，和 es5 代码。 . ├── dist ├── es6 ├── gulpfile.js ├── node_modules ├── package-lock.json ├── package.json └── public ├── dist └── es6 最后到这，就可以进行基本 Node 开发了。","tags":"Nodejs","url":"/nodejs_practice","loc":"/nodejs_practice"},{"title":"ScrapyRedis集成Bloomfilter","text":"新建 dupfilters package #!usr/bin/env python #-*- coding:utf-8 -*- \"\"\" @author: nico @file: __init__.py @time: 2018/08/31 \"\"\" import os import logging from scrapy.dupefilters import BaseDupeFilter , RFPDupeFilter from scrapy.utils.request import request_fingerprint from scrapy.utils.job import job_dir from scrapy_redis.connection import get_redis_from_settings from robot.dupefilters import bloomfilter_memory , bloomfilter_redis logger = logging . getLogger ( 'dupefilters' ) class BloomFilterRedis ( BaseDupeFilter ): def __init__ ( self , n = 100000000 , f = 0.0001 , server = None , block_nums = 1 , key_prefix = 'BLOOMFILTER' , * args , ** kwargs ): self . bf = bloomfilter_redis . BloomFilter ( n , f , server , block_nums , key_prefix ) self . debug = kwargs . get ( 'debug' , True ) self . logdupes = True @classmethod def from_settings ( cls , settings ): server = get_redis_from_settings ( settings ) key_prefix = settings . get ( \"BLOOMFILTER_REDIS_KEY_PREFIX\" , \"BLOOMFILTER\" ) capacity = settings . get ( \"BLOOMFILTER_REDIS_CAPACITY\" , 100000000 ) error_rate = settings . get ( \"BLOOMFILTER_REDIS_FALSE_POSITIVE_PROBABILITY\" , 0.0001 ) block_nums = settings . get ( \"BLOOMFILTER_REDIS_BLOCK_NUMS\" , 1 ) debug = settings . getbool ( 'DUPEFILTER_DEBUG' , False ) return cls ( capacity , error_rate , server , block_nums , key_prefix , debug = debug ) @classmethod def from_spider ( cls , spider ): settings = spider . settings server = get_redis_from_settings ( settings ) key_prefix = settings . get ( \"BLOOMFILTER_REDIS_KEY_PREFIX\" , \"BLOOMFILTER\" ) capacity = settings . get ( \"BLOOMFILTER_REDIS_CAPACITY\" , 100000000 ) error_rate = settings . get ( \"BLOOMFILTER_REDIS_FALSE_POSITIVE_PROBABILITY\" , 0.0001 ) block_nums = settings . get ( \"BLOOMFILTER_REDIS_BLOCK_NUMS\" , 1 ) debug = settings . getbool ( 'DUPEFILTER_DEBUG' , False ) return cls ( capacity , error_rate , server , block_nums , key_prefix , debug = debug ) @classmethod def from_crawler ( cls , crawler ): return cls . from_settings ( crawler . settings ) def request_seen ( self , request ): fp = request_fingerprint ( request ) if fp in self . bf : return True else : self . bf . add ( fp ) return False def open ( self ): pass def close ( self , reason ): if self . bf . key : self . bf . server . delete ( self . bf . key ) def log ( self , request , spider ): if self . debug : msg = \"Filtered duplicate request: %(request)s \" logger . debug ( msg , { 'request' : request }, extra = { 'spider' : spider }) elif self . logdupes : msg = ( \"Filtered duplicate request %(request)s \" \" - no more duplicates will be shown\" \" (see DUPEFILTER_DEBUG to show all duplicates)\" ) logger . debug ( msg , { 'request' : request }, extra = { 'spider' : spider }) self . logdupes = False @classmethod def from_crawler ( cls , crawler ): return cls . from_settings ( crawler . settings ) def request_seen ( self , request ): fp = request_fingerprint ( request ) if fp in self . bf : return True else : self . bf . add ( fp ) if self . file : self . file . write ( fp + os . linesep ) return False def log ( self , request , spider ): if self . debug : msg = \"Filtered duplicate request: %(request)s \" logger . debug ( msg , { 'request' : request }, extra = { 'spider' : spider }) elif self . logdupes : msg = ( \"Filtered duplicate request %(request)s \" \" - no more duplicates will be shown\" \" (see DUPEFILTER_DEBUG to show all duplicates)\" ) logger . debug ( msg , { 'request' : request }, extra = { 'spider' : spider }) self . logdupes = False 重构ScrapyRedis调度器 #!usr/bin/env python # -*- coding:utf-8 -*- \"\"\" @author: nico @file: schedulers.py @time: 2018/09/02 \"\"\" from scrapy.utils.misc import load_object from scrapy_redis import scheduler as redis_scheduler from scrapy.core import scheduler class RedisScheduler ( redis_scheduler . Scheduler ): def open ( self , spider ): self . spider = spider try : self . queue = load_object ( self . queue_cls )( server = self . server , spider = spider , key = self . queue_key % { 'spider' : spider . name }, serializer = self . serializer , ) except TypeError as e : raise ValueError ( \"Failed to instantiate queue class ' %s ': %s \" , self . queue_cls , e ) try : self . df = load_object ( self . dupefilter_cls )( capacity = spider . settings . get ( \"BLOOMFILTER_REDIS_CAPACITY\" , 100000000 ), error_rate = spider . settings . get ( \"BLOOMFILTER_REDIS_FALSE_POSITIVE_PROBABILITY\" , 0.0001 ), server = self . server , key_prefix = self . dupefilter_key % { 'spider' : spider . name }, block_nums = spider . settings . get ( \"BLOOMFILTER_REDIS_BLOCK_NUMS\" , 1 ), debug = spider . settings . getbool ( 'DUPEFILTER_DEBUG' ), ) except TypeError as e : raise ValueError ( \"Failed to instantiate dupefilter class ' %s ': %s \" , self . dupefilter_cls , e ) if self . flush_on_start : self . flush () # notice if there are requests already in the queue to resume the crawl if len ( self . queue ): spider . log ( \"Resuming crawl ( %d requests scheduled)\" % len ( self . queue )) 在 settings.py 中添加类似如下的配置 SCHEDULER = \"robot.schedulers.RedisScheduler\" DUPEFILTER_CLASS = \"robot.dupefilters.BloomFilterRedis\"","tags":"Scrapy","url":"/scrapyredis-bloomfilter","loc":"/scrapyredis-bloomfilter"},{"title":"高效去重算法Bloomfilter","text":"基于redis实现Bloomfilter #!usr/bin/env python # -*- coding:utf-8 -*- \"\"\" @author: nico @file: bloomfilter_redis.py @time: 2018/08/31 \"\"\" import math import mmh3 class BloomFilter : def __init__ ( self , n , f , server , block_num = 1 , key_prefix = 'BLOOMFILTER' ): \"\"\" m: number of bit as least to be assign k: number of hash as least need :param n: number of items is going to add :param f: expected false positive probability :param server: the redis client instance :param block_num: number of redis block, one of block maxsize 512m , 2**32 :param key_prefix: the block key prefix \"\"\" if not ( 0 < f < 1 ): raise ValueError ( \"f must be between 0 and 1.\" ) if not n > 0 : raise ValueError ( \"n must be > 0\" ) self . n = n self . f = f self . k = math . ceil ( math . log ( 1.0 / f , 2 )) self . m = 1 << 31 # 2**32 self . server = server self . key_prefix = key_prefix self . block_num = block_num def __contains__ ( self , item ): item = str ( item ) key = self . __get_block_route_key ( item ) res = True for seed in range ( self . k ): offset = mmh3 . hash ( item , seed , signed = False ) res = res & self . server . getbit ( key , offset % self . m ) return True if res else False def add ( self , item ): item = str ( item ) self . key = self . __get_block_route_key ( item ) for seed in range ( self . k ): offset = mmh3 . hash ( item , seed , signed = False ) self . server . setbit ( self . key , offset % self . m , 1 ) def __get_block_route_key ( self , hashable ): return self . key_prefix + str ( sum ( map ( ord , hashable )) % self . block_num ) if __name__ == '__main__' : from redis import StrictRedis client = StrictRedis () bf = BloomFilter ( 100000000 , 0.0001 , client ) test_str = [ \"python\" , \"c\" , \"c++\" , \"ruby\" ] for el in test_str : bf . add ( el ) print ( list ( map ( lambda _ : _ in bf , [ 'lua' , 'python' , 'go' , 'c' ]))) # [False, True, False, True] 基于内存实现Bloomfilter #!usr/bin/env python # -*- coding:utf-8 -*- \"\"\" @author: nico @file: bloomfilter_memory.py @time: 2018/08/31 \"\"\" import math import mmh3 import bitarray class BloomFilter : def __init__ ( self , n , f , block_num = 1 ): \"\"\" m: number of bit as least to be assign k: number of hash as least need :param n: number of items is going to add :param f: expected false positive probability :param block_num: number of bitarray obj, one block maxsize 16Gb on 32 bit systems \"\"\" if not ( 0 < f < 1 ): raise ValueError ( \"f must be between 0 and 1.\" ) if not n > 0 : raise ValueError ( \"n must be > 0\" ) self . n = n self . f = f self . k = math . ceil ( math . log ( 1.0 / f , 2 )) self . m = math . ceil ( - self . k / math . log ( 1 - math . exp ( math . log ( f ) / self . k )) * n ) self . block_num = block_num self . store = { i : bitarray . bitarray ( self . m , endian = 'little' ) for i in range ( self . block_num )} for el in self . store . values (): el . setall ( False ) def __contains__ ( self , item ): item = str ( item ) flag = True for seed in range ( self . k ): offset = mmh3 . hash ( item , seed , signed = False ) flag = flag & self . store [ offset % self . block_num ][ offset % self . m ] return True if flag else False def add ( self , item ): item = str ( item ) for seed in range ( self . k ): offset = mmh3 . hash ( item , seed , signed = False ) self . store [ offset % self . block_num ][ offset % self . m ] = 1 if __name__ == \"__main__\" : bf = BloomFilter ( 100000000 , 0.0001 , block_num = 2 ) test_str = [ \"python\" , \"c\" , \"c++\" , \"ruby\" , 1 , 2 , 3 ] for el in test_str : bf . add ( el ) print ( list ( map ( lambda _ : _ in bf , [ 'lua' , 'python' , 'go' , 'c' , 4 , 2 , 1 ]))) # [False, True, False, True, False, True, True]","tags":"Algorithms","url":"/bloomfilter","loc":"/bloomfilter"}]};