/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data

  let text = '早安呀，我可爱的宝宝~💖\n'

  // 工作日/休息日，需要排除节假日
  const week = weekToday()
  console.log(week, 'week')

  if (['星期六', '星期日'].includes(week)) {
    text += `\n嗯哼哼~，今天是${week}呦~，可以睡一哈懒觉啦，宝宝肯定还没起床床呢，轩轩向你说早安呦~😆，轩轩就等着宝宝起床给我说早安呦\n
`
  } else {
    text += `\n嗯哼哼~，今天是${week}呦~，轩轩向你说早安呦~😆，记得起床上课课哟~😝\n`
  }

  // 添加笑话
  if (caiHongpi) {
    //     text += `
    // 彩虹屁：
    text += `
 💛言：${caiHongpi.content}\n`
  }

  //   if (sayLove) {
  //     text += `
  // 言:${sayLove.content}\n`
  //   }

  // 诗句
  if (songLyrics) {
    text += `
『${songLyrics.source}』${songLyrics.content}\n`
  }

  if (oneMagazines) {
    text += `
『ONE杂志』${oneMagazines.word}\n`
  }

  if (netEaseCloud) {
    text += `
 💛网易云音乐热评：${netEaseCloud.content}——${netEaseCloud.source}\n`
  }

  // 添加一句一言
  //   if (oneWord) {
  //     text += `
  // 『一句一言』${oneWord.hitokoto}\n`
  //   }

  // 每日英语
  //   if (dayEnglish) {
  //     text += `
  // 『每日英语』${dayEnglish.content}`
  //   }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
