// 定义对象类型
type musicType = {
  time: number
  text: string
}

// 歌词解析
function parseMusic(music: string): musicType[] {
  const musics: musicType[] = []
  musics.push({time:1234, text: '你是电，你是光，你是唯一的神话'})
  return musics
}

const musicInfos = parseMusic('agasdg')
for (const item of musicInfos) {
  console.log(item.time, item.text)
}

const names: string[] = ['张三', '李四', '王五']

// 匿名函数最好不要添加类型注解
names.forEach((item, index, arr) => {
  console.log(item, index, arr)
})

export {}
