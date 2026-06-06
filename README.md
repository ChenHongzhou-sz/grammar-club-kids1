# Grammar Club Kids 1

一个面向七年级孩子的英语基础语法 Web App。

这个版本的目标不是把语法讲得“很全”，而是把最需要先会的内容讲得更轻、更稳、更能马上用起来：

- 句子的骨架
- `be` 动词和人称代词
- 一般现在时
- 否定句和一般疑问句
- 现在进行时
- 名词、冠词和单复数
- 形容词和副词
- `in / on / at`
- 比较级
- 五个基本句型
- `there be` 句型
- 一般过去时
- 特殊疑问句

## 设计方向

- 面向孩子重写说明，不直接照搬原站文案
- 每节课固定为：一句规则、例句、常见错误、小练习、复习卡
- 增加了“今日 5 题”，每天自动换一组，适合短时间打卡
- 增加了 5 题随机闯关，适合快速复习
- 增加了“错题回炉”区，答对后会自动从错题本移出
- 纯静态页面，无需安装依赖，适合直接部署到 GitHub Pages
- 学习进度与答题记录保存在浏览器本地

## 本地打开

直接打开 [index.html](./index.html) 即可。

## GitHub Pages

仓库已包含 `.github/workflows/deploy-pages.yml`。

最近一次 Pages 触发修复提交日期：2026-06-06。

首次发布后，如果页面没有自动上线，请在仓库 `Settings -> Pages` 中确认发布方式为 `GitHub Actions`。

预期地址：

`https://chenhongzhou-sz.github.io/grammar-club-kids1/`

## 参考与致谢

本项目参考了以下公开资料的结构思路，并对内容做了面向初中孩子的重新整理与改写：

- [hzpt-inet-club/english-note](https://github.com/hzpt-inet-club/english-note)
- 原站页面：[https://hzpt-inet-club.github.io/english-note/](https://hzpt-inet-club.github.io/english-note/)

更具体的许可说明见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。
