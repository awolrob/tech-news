const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod inventore atque praesentium! Distinctio officiis nemo delectus consequuntur veritatis quos corporis facilis ipsa deserunt, aliquid eius corrupti optio excepturi consectetur consequatur.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
