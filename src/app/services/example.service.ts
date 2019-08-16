import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * 演示示例服务, 提供演示前端演示时的数据
 */
export class ExampleService {

  constructor() { }

  // 获取轮播数据
  get_carousel_list() {
    const carousel_list: any = [
      { id: 0, href: '/detail', img_src: 'https://ae01.alicdn.com/kf/H756e041209734e5c98d48070ab2f9c78c.jpg', img_alt: 'First slide' },
      { id: 1, href: '/detail', img_src: 'https://ae01.alicdn.com/kf/H929123af0b754d6fa58a6f282b15c139s.jpg', img_alt: 'Second slide'},
      { id: 2, href: '/detail', img_src: 'https://ae01.alicdn.com/kf/Hae1fe975d2014af5931fd6f60e07bbb3s.jpg', img_alt: 'Third slide'}
    ];

    return carousel_list;
  }

  // 获取最新视频数据
  get_classical_list() {
   const classical_list: any = [
     {id: 0, title: 'movie', name: '最新电影', link: '/movie'},
     {id: 1, title: 'drama', name: '最新电视剧', link: '/drama'},
     {id: 2, title: 'anime', name: '最新动漫', link: '/anime'},
     {id: 3, title: 'variety', name: '最新综艺', link: '/variety'},
   ];
   return classical_list;
  }

  // 获取box数据
  get_box_list(title: string) {
    const movie_box_list = [
      {id: 0, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1906/0680571001561818302.jpg',
        title: '蜘蛛侠：英雄远征', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 1, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1906/0680571001561818302.jpg',
        title: '蜘蛛侠：英雄远征', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 2, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1906/0680571001561818302.jpg',
        title: '蜘蛛侠：英雄远征', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 3, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1906/0680571001561818302.jpg',
        title: '蜘蛛侠：英雄远征', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 4, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1906/0680571001561818302.jpg',
        title: '蜘蛛侠：英雄远征', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 5, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1906/0680571001561818302.jpg',
        title: '蜘蛛侠：英雄远征', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'}
    ];
    const drama_box_list = [
      {id: 0, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1904/25198.jpg',
        title: '权力的游戏第八季', info: '艾米莉亚・克拉克   基特・哈灵顿   彼特・丁拉基   苏菲・特纳'},
      {id: 1, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1904/25198.jpg',
        title: '权力的游戏第八季', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 2, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1904/25198.jpg',
        title: '权力的游戏第八季', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 3, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1904/25198.jpg',
        title: '权力的游戏第八季', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 4, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1904/25198.jpg',
        title: '权力的游戏第八季', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'},
      {id: 5, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1904/25198.jpg',
        title: '权力的游戏第八季', info: '杰克・吉伦哈尔   寇碧・史莫德斯   汤姆・赫兰德   赞达亚'}
    ];
    const anime_box_list = [
      {id: 0, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0146139001551890995.jpg',
        title: '秦时明月之天行九歌', info: '吴磊,赵路,翟巍,黄莺'},
      {id: 1, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0146139001551890995.jpg',
        title: '秦时明月之天行九歌', info: '吴磊,赵路,翟巍,黄莺'},
      {id: 2, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0146139001551890995.jpg',
        title: '秦时明月之天行九歌', info: '吴磊,赵路,翟巍,黄莺'},
      {id: 3, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0146139001551890995.jpg',
        title: '秦时明月之天行九歌', info: '吴磊,赵路,翟巍,黄莺'},
      {id: 4, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0146139001551890995.jpg',
        title: '秦时明月之天行九歌', info: '吴磊,赵路,翟巍,黄莺'},
      {id: 5, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0146139001551890995.jpg',
        title: '秦时明月之天行九歌', info: '吴磊,赵路,翟巍,黄莺'},
    ];
    const variety_box_list = [
      {id: 0, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0341207001551890215.jpg',
        title: '极限挑战第二季', info: '黄渤,张艺兴,黄磊,孙红雷,罗志祥'},
      {id: 1, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0341207001551890215.jpg',
        title: '极限挑战第二季', info: '黄渤,张艺兴,黄磊,孙红雷,罗志祥'},
      {id: 2, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0341207001551890215.jpg',
        title: '极限挑战第二季', info: '黄渤,张艺兴,黄磊,孙红雷,罗志祥'},
      {id: 3, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0341207001551890215.jpg',
        title: '极限挑战第二季', info: '黄渤,张艺兴,黄磊,孙红雷,罗志祥'},
      {id: 4, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0341207001551890215.jpg',
        title: '极限挑战第二季', info: '黄渤,张艺兴,黄磊,孙红雷,罗志祥'},
      {id: 5, href: '/detail', img_src: 'http://img.56dy.com/upload/img/1903/0341207001551890215.jpg',
        title: '极限挑战第二季', info: '黄渤,张艺兴,黄磊,孙红雷,罗志祥'},
    ];
    if (title === 'movie') { // 获取最新电影
      return movie_box_list;
    } else if (title === 'drama') {
      return drama_box_list;
    } else if (title === 'anime') {
      return anime_box_list;
    } else if (title === 'variety') {
      return variety_box_list;
    }
  }
}
